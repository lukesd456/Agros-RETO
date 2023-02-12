from rest_framework import generics

from .models import Informe
from .serializers import InformeDetallado, InformeResumido

class CrearInformes(generics.CreateAPIView):
    queryset=Informe
    serializer_class=InformeDetallado
    def perform_create(self, serializer):
        return super().perform_create(serializer)

crear_informe=CrearInformes.as_view()

class ListaInformePublico(generics.ListAPIView):
    queryset=Informe.objects.all()
    serializer_class=InformeResumido

informe_publico=ListaInformePublico.as_view()

class ListaInformeDetallado(generics.RetrieveAPIView):
    queryset=Informe
    serializer_class=InformeDetallado
    lookup_field='uniqueID'

informe_detallado=ListaInformeDetallado.as_view()

class ManagerInformes(generics.UpdateAPIView, generics.RetrieveAPIView):
    queryset=Informe
    serializer_class=InformeDetallado
    lookup_field='uniqueID'

    def perform_update(self, serializer):
        instance=serializer.save()
        if not instance.content:
            instance.content=instance.title

manager_informes=ManagerInformes.as_view()

class EliminarInforme(generics.DestroyAPIView):
    queryset=Informe
    serializer_class=InformeResumido
    lookup_field='uniqueID'

    def perform_destroy(self, instance):
        return super().perform_destroy(instance)

eliminar_informe=EliminarInforme.as_view()

