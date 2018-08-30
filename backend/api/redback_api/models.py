from django.db import models

# Create your models here.
class Rb_item(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=150)
    archiJson = models.TextField(max_length=99999)
    displayGeom = models.TextField(max_length=99999, blank=True, null=True)

    def __str__ (self):
        return str(self.name)
