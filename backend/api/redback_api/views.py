# from django.shortcuts import render
# from rest_framework import viewsets
# from .models import Rb_item
# from .serializers import Rb_itemSerializer
# # Create your views here.
# class Rb_itemView(viewsets.ModelViewSet):
#     queryset = Rb_item.objects.all()
#     serializer_class = Rb_itemSerializer
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'redback_api/index.html')
