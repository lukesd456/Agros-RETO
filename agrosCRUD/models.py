from django.db import models
import uuid
# Create your models here.

class Informe(models.Model):
    uniqueID=models.UUIDField(primary_key=True,default=uuid.uuid4, editable=False)
    title=models.CharField( max_length=20)
    resumen=models.CharField(max_length=50)
    fecha=models.DateField(auto_now=True)
    descripcion=models.TextField()
    dineroInvertido=models.IntegerField()
    tipoCultivo=models.JSONField(null=True)
    talentoHumano=models.JSONField(null=True)
    actividadesClave=models.JSONField(null=True)
    conclusiones=models.TextField()