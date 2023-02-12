from rest_framework import serializers
from .models import Informe
from .validators import unique_informe_title

class InformeDetallado(serializers.ModelSerializer):
    title=serializers.CharField(validators=[unique_informe_title])
    class Meta:
        model=Informe
        fields=[
            'uniqueID',
            'title',
            'resumen',
            'fecha',
            'descripcion',
            'dineroInvertido',
            'tipoCultivo',
            'talentoHumano',
            'actividadesClave',
            'conclusiones'
        ]

class InformeResumido(serializers.ModelSerializer):
    title=serializers.CharField(validators=[unique_informe_title])
    class Meta:
        model=Informe
        fields=[
            'uniqueID',
            'title',
            'resumen'
        ]