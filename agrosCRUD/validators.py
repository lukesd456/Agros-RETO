from rest_framework.validators import UniqueValidator
from .models import Informe
unique_informe_title = UniqueValidator(queryset=Informe.objects.all(), lookup='iexact')