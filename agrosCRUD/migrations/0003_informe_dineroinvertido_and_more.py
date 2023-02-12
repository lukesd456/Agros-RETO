# Generated by Django 4.1.5 on 2023-02-09 19:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('agrosCRUD', '0002_remove_informe_id_alter_informe_uniqueid'),
    ]

    operations = [
        migrations.AddField(
            model_name='informe',
            name='dineroInvertido',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='informe',
            name='actividadesClave',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='informe',
            name='talentoHumano',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='informe',
            name='tipocultivo',
            field=models.JSONField(null=True),
        ),
    ]
