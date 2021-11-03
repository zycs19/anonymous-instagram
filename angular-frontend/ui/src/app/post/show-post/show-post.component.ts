import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  constructor(private service:SharedService) {};


  postsList:any=[]; 

  ModalTitle:string="";
  post:any;

  ActivateAddOrEditComp:boolean=false;

  PhotoFilePath:string = "";
  PhotoFilePathPrefix:string = this.service.photoUrl;


  ngOnInit(): void {
    this.refreshPosts();
  };

  refreshPosts(){
    this.service.getPosts().subscribe(data=>{
      this.postsList=data;
    })
  };

  addClick(){

    this.post={
      GraphFile : "",
      Caption : "",
      Likes : 0,
      Views : 0,
      PostID: 0,
    }
    this.ActivateAddOrEditComp = true;
    this.ModalTitle="New Post";
  };

  closeClick(){
    this.ActivateAddOrEditComp = false;
    this.refreshPosts();
  }

  editClick(item:any){
    this.post = item;
    this.ModalTitle = "Edit Post";
    this.ActivateAddOrEditComp = true;

  }
  likeClick(item:any){
    this.post = item;
    var val = {
      GraphFile: item.GraphFile,
      Caption: item.Caption,
      Likes:item.Likes + 1,
      Views:item.Views,
      PostID:item.PostID,
    };
    this.service.updatePosts(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  deleteClick(item:any){
    this.post = item;
    this.ModalTitle = "Delete Post";
    if(confirm("Are you sure to delete the post? Click to confirm!")){
      this.service.deletePosts(this.post.PostID).subscribe(data=>alert(data.toString()))
      this.refreshPosts()
    }

  }
}
