from django.urls import path
from .views import register, login, user_settings, getUserProfile

urlpatterns = [
    path('api/user/register', register, name='register'),
    path('api/user/login', login, name='login'),
    path('api/user/settings', user_settings, name='user-settings'),
    path("api/user/profile/", getUserProfile, name="getUserProfile"),

]