from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from UploadNewPostApp.models import IGPost, Comments
from UploadNewPostApp.serializer import IGPostSerializer, CommentsSerializer

from django.core.files.storage import default_storage


# Create your views here.
@csrf_exempt
def postApi(request, id=0):
    if request.method == 'GET':
        posts = IGPost.objects.all()
        posts_serializer = IGPostSerializer(posts, many=True)
        return JsonResponse(posts_serializer.data, safe=False) 

    elif request.method == 'POST':
        post_data =JSONParser().parse(request)
        post_serializer = IGPostSerializer(data=post_data)
        if post_serializer.is_valid():
            post_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse('Failed to add, please try again.', safe=False)

    elif request.method == 'PUT':
        post_data =JSONParser().parse(request)
        postID = IGPost.objects.get(PostID = post_data['PostID'])
        post_serializer = IGPostSerializer(postID, post_data)
        if post_serializer.is_valid():
            post_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse('Failed to update, please try again.', safe=False)

    elif request.method == 'DELETE':
        postID = IGPost.objects.get(PostID = id)
        postID.delete()
        return JsonResponse('Deleted!!', safe=False)


@csrf_exempt
def SavePhoto(request):
    file = request.FILES['uploadedFile']
    filename = default_storage.save(file.name, file)

    return JsonResponse(filename, safe=False)
