import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css']
})
export class AddEditPostComponent implements OnInit {

  constructor(private service : SharedService) { }

  @Input() photo_dir:any;
  @Input() photo_desc:any;

  post:any=[];



  ngOnInit(): void {
    this.post={
      GraphFile : this.photo_dir,
      Caption : this.photo_desc,
      Likes : 0,
      Views : 0,
    }
  }

  addPost(){
    this.service.addPosts(this.post).subscribe(res=>{
      alert(res.toString());
    });
  }

}
