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



  ngOnInit(): void {

    this.GraphFile = this.post.GraphFile;
    this.Caption = this.post.Caption;
    
    //this.GraphFile = this.post.GraphFile;
    //this.Caption = this.post.Caption;
    //this.Likes = this.post.Likes;
    //this.Views = this.post.Views;

  }

  addPost(){
    var val = {
      GraphFile: this.post.GraphFile,
      Caption: this.post.Caption,
      Likes:this.Likes,
      Views:this.Views
    };
    this.service.addPosts(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
