"""
Django settings for porfolio project.
"""

from pathlib import Path
import os

# Base directory
BASE_DIR = Path(__file__).resolve().parent.parent

# =====================
# SECURITY
# =====================

SECRET_KEY = os.environ.get(
    "SECRET_KEY",
    "django-insecure-change-this-in-production"
)

DEBUG =True
ALLOWED_HOSTS = ['*',
    # ".onrender.com",  # allow all Render subdomains
    # "portfolio-19-mhl4.onrender.com",  # your specific service URL
]

# =====================
# APPLICATIONS
# =====================

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    "rest_framework",
    "corsheaders",
    "app",
]

# =====================
# MIDDLEWARE
# =====================

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",

    "corsheaders.middleware.CorsMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

# =====================
# URLS / WSGI
# =====================

ROOT_URLCONF = "porfolio.urls"
WSGI_APPLICATION = "porfolio.wsgi.application"

# =====================
# TEMPLATES (React)
# =====================

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],  # React build folder
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

# =====================
# DATABASE
# =====================

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

# =====================
# PASSWORD VALIDATION
# =====================

AUTH_PASSWORD_VALIDATORS = [
    {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"},
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

# =====================
# INTERNATIONALIZATION
# =====================

LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True

# =====================
# STATIC FILES (React)
# =====================
STATIC_URL = '/static/' 
STATICFILES_DIRS = [ BASE_DIR / "static", ] 
STATIC_ROOT = BASE_DIR / "staticfiles" # Whitenoise storage for compressed static files 
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"
# =====================
# EMAIL CONFIG
# =====================

EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = "smtp.gmail.com"
EMAIL_PORT = 587
EMAIL_USE_TLS = True

EMAIL_HOST_USER = "kalepayal53@gmail.com"
EMAIL_HOST_PASSWORD = "kxhj zkzv fods befs"
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER

# =====================
# CORS
# =====================

CORS_ALLOWED_ORIGINS = [
    "https://portfolio-6-a39q.onrender.com",  # Your Render URL
]

# =====================
# DEFAULT PK
# =====================

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
