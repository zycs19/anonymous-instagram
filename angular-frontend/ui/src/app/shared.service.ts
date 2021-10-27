import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000";
  readonly photoUrl = "http://127.0.0.1:8000/media/"

  constructor(private http:HttpClient) {

  }

  getPosts():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/posts/');
  }

  addPosts(val:any){
    return this.http.post(this.APIUrl + '/posts/', val);
  }

  updatePosts(val:any){
    return this.http.put(this.APIUrl + '/posts/', val);
  }

  deletePosts(val:any){
    return this.http.delete(this.APIUrl + '/posts/' + val);
  }


}
