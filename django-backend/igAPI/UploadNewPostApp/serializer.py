from django.db import models
from django.db.models import fields
from rest_framework import serializers
from UploadNewPostApp.models import IGPost, Comments

class IGPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = IGPost
        fields = (
            'PostID',
            'GraphFile',
            'Caption',
            'Likes',
            'Views',
            #'TimeOfCreation'
        )

class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = (
            'CommentsID',
            'PostID',
            'CommentContent',
            #'TimeOfCreation'
        )



