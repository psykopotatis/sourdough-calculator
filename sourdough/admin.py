from django.contrib import admin

# Register your models here.
from sourdough.models import Recipe
from sourdough.models import Ingredient

admin.site.register(Recipe)
admin.site.register(Ingredient)
