from django.shortcuts import render, redirect, get_object_or_404
from django.http import JsonResponse
from django.utils import timezone
import json
import uuid
import midtransclient

from dashboard.models import Product, Category, CartItem, Customer, Transaction
from django.conf import settings

MIDTRANS_SERVER_KEY = settings.MIDTRANS_SERVER_KEY
MIDTRANS_CLIENT_KEY = settings.MIDTRANS_CLIENT_KEY

snap = midtransclient.Snap(
    is_production=False,
    server_key=MIDTRANS_SERVER_KEY,
    client_key=MIDTRANS_CLIENT_KEY
)


def home(request):
    return render(request, 'website/index.html')


def menu(request):
    menu_list = Product.objects.all()
    category_list = Category.objects.all()

    # Get or create session ID
    if not request.session.get('session_id'):
        request.session['session_id'] = str(uuid.uuid4())

    # Get cart items for this session
    session_id = request.session.get('session_id')
    cart_items = CartItem.objects.filter(session_id=session_id)
    cart_count = sum(item.quantity for item in cart_items)
    cart_total = sum(item.total_price() for item in cart_items)

    context = {
        'menu_list': menu_list,
        'category_list': category_list,
        'cart_items': cart_items,
        'cart_count': cart_count,
        'cart_total': cart_total,
    }
    return render(request, 'website/menu.html', context)


def add_to_cart(request, product_id):
    if request.method == 'POST':
        product = get_object_or_404(Product, id=product_id)

        # Get or create session ID
        if not request.session.get('session_id'):
            request.session['session_id'] = str(uuid.uuid4())

        session_id = request.session.get('session_id')

        # Check if product already in cart
        cart_item, created = CartItem.objects.get_or_create(
            session_id=session_id,
            product=product,
            defaults={'quantity': 1}
        )

        # If product already in cart, increment quantity
        if not created:
            cart_item.quantity += 1
            cart_item.save()

        # Get updated cart info
        cart_items = CartItem.objects.filter(session_id=session_id)
        cart_count = sum(item.quantity for item in cart_items)
        cart_total = sum(item.total_price() for item in cart_items)

        return JsonResponse({
            'success': True,
            'cart_count': cart_count,
            'cart_total': cart_total,
            'message': f'{product.name} added to cart'
        })

    return JsonResponse({'success': False, 'message': 'Invalid request'})


def remove_from_cart(request, product_id):
    if request.method == 'POST':
        product = get_object_or_404(Product, id=product_id)
        session_id = request.session.get('session_id')

        try:
            cart_item = CartItem.objects.get(session_id=session_id, product=product)

            # Decrement quantity or remove if quantity is 1
            if cart_item.quantity > 1:
                cart_item.quantity -= 1
                cart_item.save()
            else:
                cart_item.delete()

            # Get updated cart info
            cart_items = CartItem.objects.filter(session_id=session_id)
            cart_count = sum(item.quantity for item in cart_items)
            cart_total = sum(item.total_price() for item in cart_items)

            return JsonResponse({
                'success': True,
                'cart_count': cart_count,
                'cart_total': cart_total,
                'message': f'{product.name} removed from cart'
            })
        except CartItem.DoesNotExist:
            return JsonResponse({'success': False, 'message': 'Item not in cart'})

    return JsonResponse({'success': False, 'message': 'Invalid request'})


def view_cart(request):
    # Get or create session ID
    if not request.session.get('session_id'):
        request.session['session_id'] = str(uuid.uuid4())

    session_id = request.session.get('session_id')
    cart_items = CartItem.objects.filter(session_id=session_id)
    cart_count = sum(item.quantity for item in cart_items)
    cart_total = sum(item.total_price() for item in cart_items)

    context = {
        'cart_items': cart_items,
        'cart_count': cart_count,
        'cart_total': cart_total,
    }
    return render(request, 'website/cart.html', context)


def checkout(request):
    if request.method == 'POST':
        # Get cart items
        session_id = request.session.get('session_id')
        cart_items = CartItem.objects.filter(session_id=session_id)

        if not cart_items:
            return redirect('view_cart')

        # Get customer info from form
        name = request.POST.get('name')
        phone = request.POST.get('phone')

        # Create or get customer
        customer, created = Customer.objects.get_or_create(
            phone=phone,
            defaults={'name': name}
        )

        # If customer exists but name is different, update name
        if not created and customer.name != name:
            customer.name = name
            customer.save()

        # Calculate total
        cart_total = sum(item.total_price() for item in cart_items)

        # Create transaction
        transaction = Transaction.objects.create(
            customer=customer,
            total=cart_total,
            session_id=session_id
        )

        # Add products to transaction
        for item in cart_items:
            for _ in range(item.quantity):
                transaction.products.add(item.product)

        # Prepare Snap API parameter
        param = {
            "transaction_details": {
                "order_id": f"ORDER-{transaction.id}",
                "gross_amount": cart_total
            },
            "customer_details": {
                "first_name": customer.name,
                "phone": customer.phone
            },
            "item_details": [
                {
                    "id": str(item.product.id),
                    "price": item.product.price,
                    "quantity": item.quantity,
                    "name": item.product.name
                } for item in cart_items
            ]
        }

        # Create Snap transaction
        snap_transaction = snap.create_transaction(param)

        # Save Snap token and redirect URL
        transaction.transaction_id = f"ORDER-{transaction.id}"
        transaction.snap_token = snap_transaction['token']
        transaction.snap_redirect_url = snap_transaction['redirect_url']
        transaction.save()

        # Clear cart
        cart_items.delete()

        # Redirect to payment page
        return redirect('payment', transaction_id=transaction.id)

    # Get or create session ID
    if not request.session.get('session_id'):
        request.session['session_id'] = str(uuid.uuid4())

    session_id = request.session.get('session_id')
    cart_items = CartItem.objects.filter(session_id=session_id)
    cart_count = sum(item.quantity for item in cart_items)
    cart_total = sum(item.total_price() for item in cart_items)

    context = {
        'cart_items': cart_items,
        'cart_count': cart_count,
        'cart_total': cart_total,
    }
    return render(request, 'website/checkout.html', context)


def payment(request, transaction_id):
    transaction = get_object_or_404(Transaction, id=transaction_id)

    context = {
        'transaction': transaction,
    }
    return render(request, 'website/payment.html', context)


def payment_notification(request):
    if request.method == 'POST':
        # Process notification
        notification_json = json.loads(request.body)
        notification = snap.transactions.notification(notification_json)

        order_id = notification['order_id']
        transaction_status = notification['transaction_status']
        fraud_status = notification.get('fraud_status', '')

        # Extract transaction ID from order_id (ORDER-{id})
        transaction_id = order_id.split('-')[1]

        # Get transaction
        try:
            transaction = Transaction.objects.get(id=transaction_id)

            # Update transaction status
            transaction.transaction_status = transaction_status

            # Update payment date if payment is successful
            if transaction_status == 'capture':
                if fraud_status == 'challenge':
                    transaction.transaction_status = 'challenge'
                elif fraud_status == 'accept':
                    transaction.transaction_status = 'success'
                    transaction.payment_date = timezone.now()
            elif transaction_status == 'settlement':
                transaction.transaction_status = 'success'
                transaction.payment_date = timezone.now()
            elif transaction_status == 'cancel' or transaction_status == 'deny' or transaction_status == 'expire':
                transaction.transaction_status = 'failure'
            elif transaction_status == 'pending':
                transaction.transaction_status = 'pending'

            transaction.save()

            return JsonResponse({'status': 'success'})
        except Transaction.DoesNotExist:
            return JsonResponse({'status': 'error', 'message': 'Transaction not found'})

    return JsonResponse({'status': 'error', 'message': 'Invalid request'})
