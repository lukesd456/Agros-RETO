from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('data/', include('agrosCRUD.urls')),
    path("", TemplateView.as_view(template_name='index.html'), name="")
]

# urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
