from django.conf.urls import url
from UploadNewPostApp import views

urlpatterns =[
    url(r'^posts/$', views.postApi),
    url(r'^posts/([0-9]+)$', views.postApi)
]