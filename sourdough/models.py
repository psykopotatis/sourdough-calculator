from django.db import models


class Recipe(models.Model):
    id = models.AutoField(primary_key=True)
    created_date = models.DateTimeField(auto_now_add=True)
    name = models.CharField(blank=True, max_length=100)
    flour = models.FloatField()
    water = models.FloatField()
    sourdough = models.FloatField()
    salt = models.FloatField()

    def __str__(self):
        return self.name

