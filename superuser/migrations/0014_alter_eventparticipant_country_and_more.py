# Generated by Django 4.2 on 2023-05-17 04:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('superuser', '0013_alter_event_event_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eventparticipant',
            name='country',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='eventparticipant',
            name='phone',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]