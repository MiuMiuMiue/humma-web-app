from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import User, UserSettings

@receiver(post_save, sender = User)
def create_usersettings_to_user(sender, instance, created, **kwargs):
    if created:
        UserSettings.objects.create(user=instance)

@receiver(post_save, sender = User)

def save_user_settings(sender, instance, **kwargs):
    instance.settings.save()