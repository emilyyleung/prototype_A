# from django.urls import path, include
# from . import views
# from rest_framework import routers
#
# router = routers.DefaultRouter()
# router.register('rb_items', views.Rb_itemView)
#
# urlpatterns = [
#     path('', include(router.urls))
# ]
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^index/$', views.index, name='index')
]
