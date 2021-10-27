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
  newpost:any=[];

  ModalTitle:string="";
  post:any;

  ActivateAddOrEditComp:boolean=false;

  ngOnInit(): void {
    this.refreshPosts();
  };

  refreshPosts(){
    this.service.getPosts().subscribe(data=>{
      this.postsList=data;
    })
  };

  addClick(){
    this.newpost={
      GraphFile : "",
      Caption : "",
      Likes : 0,
      Views : 0,
    }
    this.post={
      GraphFile : "",
      Caption : "",
      Likes : 0,
      Views : 0,
    }
    this.ActivateAddOrEditComp = true;
    this.ModalTitle="New Post";
  };

  closeClick(){
    this.ActivateAddOrEditComp = false;
    this.refreshPosts();
  }
}
