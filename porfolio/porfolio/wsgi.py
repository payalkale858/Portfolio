"""
WSGI config for porfolio project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/6.0/howto/deployment/wsgi/
"""

import os
from django.core.wsgi import get_wsgi_application

# Set the Django settings module to your inner project folder
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "porfolio.settings")

# Get the WSGI application for Gunicorn
application = get_wsgi_application()

