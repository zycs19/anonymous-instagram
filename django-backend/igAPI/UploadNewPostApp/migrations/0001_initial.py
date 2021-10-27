# Generated by Django 3.2.8 on 2021-10-27 05:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='IGPost',
            fields=[
                ('PostID', models.AutoField(primary_key=True, serialize=False)),
                ('GraphFile', models.CharField(max_length=100)),
                ('Caption', models.CharField(max_length=500)),
                ('Likes', models.IntegerField()),
                ('Views', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Comments',
            fields=[
                ('CommentsID', models.AutoField(primary_key=True, serialize=False)),
                ('CommentContent', models.CharField(max_length=500)),
                ('PostID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='UploadNewPostApp.igpost')),
            ],
        ),
    ]
