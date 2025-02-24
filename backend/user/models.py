from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    GENDER_CHOICES = [
        ("Male", "Male"),
        ("Female", "Female"),
        ("Other", "Other"),
    ]
    birthdate = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, null=True, blank=True)
    email = models.EmailField(unique=True)
    
    REQUIRED_FIELDS = ["birthdate", "gender"]
    USERNAME_FIELD = "email"
    
    def __str__(self):
        return self.username

