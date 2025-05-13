from django.contrib import admin
from .models import Product, Customer, Transaction, Category

# Register your models here.
admin.site.register(Product)
admin.site.register(Customer)
admin.site.register(Transaction)
admin.site.register(Category)