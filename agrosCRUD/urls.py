from django.urls import path
from . import views

urlpatterns = [
    path('crear', views.crear_informe, name='crear'),
    path('', views.informe_publico, name='lista'),
    path('<str:uniqueID>', views.informe_detallado, name='detalle'),
    path('manager/<str:uniqueID>', views.manager_informes, name='manager'),
]
