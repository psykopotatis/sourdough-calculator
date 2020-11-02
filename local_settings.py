import os

DEBUG = True
TEMPLATE_DEBUG = True

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": "sourdough",
        "USER": "sour_baker",
        "PASSWORD": "jw8s0F4",
        "HOST": "localhost",
        "PORT": "5432",
    }
}