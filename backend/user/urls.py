from django.urls import path
from .views import register, login, getUserProfile

urlpatterns = [

    path('api/user/register/', register, name='register'),
    path('api/user/login/', login, name='login'),
    path("api/user/profile/", getUserProfile, name="getUserProfile"),

]