from rest_framework import serializers
from redback_api.models import Rb_item

class RbitemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rb_item
        fields = ('id', 'name', 'description', 'archiJson')
