# Generated by Django 3.0.8 on 2020-08-29 19:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sourdough', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ingredient',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('name', models.CharField(blank=True, max_length=100)),
                ('weight', models.FloatField(default=0)),
                ('percent', models.FloatField(default=0)),
            ],
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='flour',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='salt',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='sourdough',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='water',
        ),
        migrations.AddField(
            model_name='recipe',
            name='ingredients',
            field=models.ManyToManyField(to='sourdough.Ingredient'),
        ),
    ]