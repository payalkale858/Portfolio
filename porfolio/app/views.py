from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .serializers import ContactSerializer
from .models import Contact
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@api_view(['GET','POST'])
def contact_create(request):
    if request.method == 'GET':
        contacts = Contact.objects.all()  # ✔ Fixed model name
        serializer = ContactSerializer(contacts, many=True)
        return Response(serializer.data)

    # Only for POST
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
            ['kalepayal53@gmail.com'],  # 👈 your receiving email
            fail_silently=False,
        )

        return Response(
            {"message": "Message sent successfully"},
            status=status.HTTP_201_CREATED
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
