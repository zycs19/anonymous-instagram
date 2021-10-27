from django.db import models

# Create your models here.

class IGPost(models.Model):
    PostID = models.AutoField(primary_key=True)
    GraphFile = models.CharField(max_length=100)
    Caption = models.CharField(max_length=500)
    Likes = models.IntegerField()
    Views = models.IntegerField()
    #TimeOfCreation = models.TimeField()

class Comments(models.Model):
    CommentsID = models.AutoField(primary_key=True)
    PostID = models.ForeignKey(IGPost, on_delete=models.CASCADE)
    CommentContent = models.CharField(max_length=500)
    #TimeOfCreation = models.TimeField()


