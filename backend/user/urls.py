from django.urls import path
from .views import register, login

urlpatterns = [
    path('api/user/register', register, name='register'),
    path('api/user/login', login, name='login'),
]