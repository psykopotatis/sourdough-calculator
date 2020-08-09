from django.contrib import admin

# Register your models here.
from sourdough.models import Recipe

admin.site.register(Recipe)
