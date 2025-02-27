from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings

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


class UserSettings(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='settings'
    )
    THEME_CHOICES = [
        ('dark', 'Dark Mode'),
        ('light', 'Light Mode'),
        ('system', 'System Default'),
    ]
    LANGUAGE_CHOICES = [
        ('en', 'English'),
        ('es', 'Español'),
    ]
    PROFILE_VISIBILITY_CHOICES = [
        ('public', 'Public'),
        ('private', 'Private'),
    ]
    theme = models.CharField(
        max_length=10,
        choices=THEME_CHOICES,
        default='system'
    )
    language = models.CharField(
        max_length=5,
        choices=LANGUAGE_CHOICES,
        default='en'
    )
    profile_visibility = models.CharField(
        max_length=7,
        choices=PROFILE_VISIBILITY_CHOICES,
        default='public'
    )
    data_consent = models.BooleanField(
        default=False,
        verbose_name='Consent to share data for LLM training'
    )

    class Meta:
        verbose_name_plural = "User settings"
            
    def __str__(self):
        return f"{self.user}'s Settings"


