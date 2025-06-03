from django.db import models
from django.utils import timezone


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.IntegerField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    image = models.ImageField(upload_to='products/', null=True, blank=True)

    def __str__(self):
        return self.name


class Customer(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=13)

    def __str__(self):
        return self.name


class CartItem(models.Model):
    session_id = models.CharField(max_length=255)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.quantity} x {self.product.name}"

    def total_price(self):
        return self.product.price * self.quantity


class Transaction(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='transactions')
    products = models.ManyToManyField(Product)
    total = models.IntegerField()
    order_date = models.DateTimeField(default=timezone.now)
    payment_date = models.DateTimeField(null=True, blank=True)
    session_id = models.CharField(max_length=255, null=True, blank=True)
    transaction_id = models.CharField(max_length=255, null=True, blank=True)
    transaction_status = models.CharField(max_length=255, null=True, blank=True)
    payment_type = models.CharField(max_length=255, null=True, blank=True)
    snap_token = models.CharField(max_length=255, null=True, blank=True)
    snap_redirect_url = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return f"Transaction {self.id} - {self.customer.name}"
