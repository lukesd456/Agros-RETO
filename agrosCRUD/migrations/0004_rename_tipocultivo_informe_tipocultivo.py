# Generated by Django 4.1.5 on 2023-02-10 03:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('agrosCRUD', '0003_informe_dineroinvertido_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='informe',
            old_name='tipocultivo',
            new_name='tipoCultivo',
        ),
    ]
