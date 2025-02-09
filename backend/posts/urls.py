from django.urls import path
from .views import get_posts

urlpatterns = [
    path('api/posts/', get_posts, name='get_posts'),
]