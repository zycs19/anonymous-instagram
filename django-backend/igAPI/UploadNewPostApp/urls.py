from django.conf.urls import url
from UploadNewPostApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns =[
    url(r'^posts/$', views.postApi),
    url(r'^posts/([0-9]+)$', views.postApi),
    url(r'^SavePhoto$', views.SavePhoto)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)