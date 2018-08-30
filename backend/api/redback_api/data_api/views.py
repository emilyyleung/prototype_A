from rest_framework import viewsets

from redback_api.models import Rb_item
from .serializers import RbitemSerializer

class RbitemViewSet(viewsets.ModelViewSet):
    queryset = Rb_item.objects.all()
    serializer_class = RbitemSerializer
