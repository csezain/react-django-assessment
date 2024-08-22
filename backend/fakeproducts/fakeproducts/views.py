from django.http import JsonResponse
from .models import Product
def home(request):
    
    products = Product.objects.all().values('title', 'price', 'description', 'image')
    
    return JsonResponse(list(products), safe=False)


def profile(request):
    
    return JsonResponse({
        # Eccomerce User Profile
        "name": "John",
        "age": 30,
        "location": "San Francisco",
        "description": "John is a software engineer at Microsoft. John is also a student at Stanford University. John is Legend",
        "image": "https://plus.unsplash.com/premium_photo-1711065404876-a9897c5ea117?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
        
    })