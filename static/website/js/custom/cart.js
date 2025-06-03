jQuery(document).ready(function($) {
    // Handle cart item removal from header dropdowns
    $('.remove-item').on('click', function(e) {
        e.preventDefault();
        var productId = $(this).data('product-id');
        
        $.ajax({
            url: '/cart/remove/' + productId + '/',
            type: 'POST',
            headers: {
                'X-CSRFToken': getCookie('csrftoken')
            },
            success: function(data) {
                if (data.success) {
                    // Update cart count and total
                    $('.cart_items').text(data.cart_count + ' Items');
                    $('.cart_summa').text('Rp' + data.cart_total);
                    
                    // Reload page to update cart
                    location.reload();
                }
            }
        });
    });
    
    // Function to get CSRF token from cookies
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
});