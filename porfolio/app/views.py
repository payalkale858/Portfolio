from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .serializers import ContactSerializer

@api_view(['POST'])
def contact_create(request):
    serializer = ContactSerializer(data=request.data)

    if serializer.is_valid():
        contact = serializer.save()

        # 📧 Send Email
        subject = f"New Contact Message: {contact.subject}"
        message = f"""
        Name: {contact.name}
        Email: {contact.email}

        Message:
        {contact.message}
        """

        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            ['yourgmail@gmail.com'],  # 👈 where YOU receive email
            fail_silently=False,
        )

        return Response(
            {"message": "Message sent successfully"},
            status=status.HTTP_201_CREATED
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
