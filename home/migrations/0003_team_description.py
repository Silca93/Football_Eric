# Generated by Django 5.0.6 on 2024-05-19 16:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_alter_country_continent_alter_player_team_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='description',
            field=models.CharField(default='Lol team', max_length=100, null=True),
        ),
    ]
