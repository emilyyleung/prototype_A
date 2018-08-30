from redback_api.data_api.views import RbitemViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', RbitemViewSet, base_name='rbitems')

urlpatterns = router.urls
