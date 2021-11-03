import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css']
})


export class AddEditPostComponent implements OnInit {


  constructor(private service : SharedService) { }
  @Input() post :any;

  GraphFile:string = "none";
  Caption:string = "none";
  Likes:number = 0;
  Views:number = 0;
  ID:number = 0;
  PhotoFilePath:string = "";

  postsList:any=[]; 



  ngOnInit(): void {

    this.GraphFile = this.post.GraphFile;
    this.Caption = this.post.Caption;

    this.Likes = this.post.Likes;
    this.Views = this.post.Views;

    this.ID = this.post.PostID;

  }

  addPost(){
    var val = {
      GraphFile: this.GraphFile,
      Caption: this.post.Caption,
      Likes:this.Likes,
      Views:this.Views
    };
    this.service.addPosts(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updatePost(){
    var val = {
      GraphFile: this.post.GraphFile,
      Caption: this.post.Caption,
      Likes:this.post.Likes,
      Views:this.post.Views,
      PostID:this.post.ID,
    };
    this.service.updatePosts(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  uploadPhoto(event:any){
    var file = event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file, file.name);
    this.service.uploadPhoto(formData).subscribe(
      (data:any) => {
      this.GraphFile = data.toString();
      console.debug(this.GraphFile);
      this.PhotoFilePath = this.service.photoUrl+this.GraphFile;
      })
  }

}
