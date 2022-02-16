import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ListPost } from './models/list-post';
import { SinglePost } from './models/single-post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  private parseApiImageUrl(url: string): string {
    if(url && typeof(url) === "string" && url.includes("[BLOG]")) {
      return url.replace("[BLOG]", environment.blogApiUrl);
    }
    return url;
  }
  private parsePostImages(post: SinglePost): SinglePost {
    if(post.author?.profilePicture) {
      post.author.profilePicture = this.parseApiImageUrl(post.author.profilePicture);
    }
    if(post.content) {
      post.content = this.parseApiImageUrl(post.content);
    }
    if(post.featuredImage) {
      post.featuredImage = this.parseApiImageUrl(post.featuredImage);
    }
    return post;
  }
  private parseImagesInListPost(list: ListPost): ListPost {
    list.posts.forEach(post => {
      this.parsePostImages(post);
    })
    return list;
  }

  getPosts(page: number = 0, limit: number = 2): Observable<ListPost> {
    return this.http.get<ListPost>(environment.blogApiUrl + "/posts?offset="+page+"&limit="+limit).pipe(
      map(list => this.parseImagesInListPost(list))
    );
  }
  getPost(slug: string): Observable<SinglePost> {
    return this.http.get<SinglePost>(environment.blogApiUrl + "/posts/" + slug).pipe(
      map(post => this.parsePostImages(post))
    );
  }
}
