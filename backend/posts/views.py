from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def get_posts(request):
    dummy_posts = [
        {"id": 1, "user": "Alice", "content": "Had an amazing day at the beach! 🌊☀️", "image": "https://source.unsplash.com/400x300/?beach"},
        {"id": 2, "user": "Bob", "content": "Just finished a great book on AI. Highly recommend! 🤖📚", "image": "https://source.unsplash.com/400x300/?book"},
        {"id": 3, "user": "Charlie", "content": "Loving this new recipe I tried today! 🍲", "image": "https://source.unsplash.com/400x300/?food"},
        {"id": 4, "user": "Diana", "content": "A beautiful sunset to end the day. 🌅", "image": "https://source.unsplash.com/400x300/?sunset"},
        {"id": 5, "user": "Ethan", "content": "Exploring the mountains today. What a view! 🏔️", "image": "https://source.unsplash.com/400x300/?mountain"},
    ]
    return Response(dummy_posts)
