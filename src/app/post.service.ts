import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListPost } from './models/list-post';
import { SinglePost } from './models/single-post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  getPosts(page: number = 0, limit: number = 2): Observable<ListPost> {
    return this.http.get<ListPost>(environment.blogApiUrl + "/posts?offset="+page+"&limit="+limit);
  }
  getPost(slug: string): Observable<SinglePost> {
    return this.http.get<SinglePost>(environment.blogApiUrl + "/posts/" + slug);
  }
}
