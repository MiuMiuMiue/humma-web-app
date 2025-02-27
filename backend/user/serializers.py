from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .models import UserSettings

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "username", "birthdate", "gender"]


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "email", "password", "birthdate", "gender"]
        extra_kwargs = {
            "password": {"write_only": True},
        }
    
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
            birthdate=validated_data["birthdate"],
            gender=validated_data["gender"],
        )
        return user

class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get("email")
        password = data.get("password")
        user = authenticate(username=email, password=password)

        if user:
            return {
                "user": user
            }

        raise serializers.ValidationError("Invalid credentials")
    
class UserSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSettings
        fields = [
            'theme', 'language',
            'profile_visibility', 'data_consent'
        ]
        extra_kwargs = {
            'data_consent': {'required': True}
        }

class UserSettingsUpdateSerializer(serializers.ModelSerializer):
    settings = UserSettingsSerializer(source='user.settings')

    class Meta:
        model = User
        fields = [
            "id", "email", "username", 
            "birthdate", "gender", "settings"
        ]
    
    def update(self, instance, validated_data):
        settings_data = validated_data.pop('user.settings', None)
        if settings_data:
            settings_serializer = UserSettingsSerializer(
                instance.settings, 
                data=settings_data,
                partial=True
            )
            settings_serializer.is_valid(raise_exception=True)
            settings_serializer.save()
        return super().update(instance, validated_data)
