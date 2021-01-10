import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken
  });

  constructor() { }

  getPostsCount(): Promise<number> {
    return this.client.getEntries(Object.assign({
      content_type: "robi2Posztok",
      limit: 1,
      skip: 0
    })).then(res => res.total);
    
  }
  getPosts(query? : object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: "robi2Posztok",
    }, query)).then(res => res.items);
  }
  getPost(slug: any): Promise<Entry<any>> {
    return this.getPosts({
      'fields.slug': slug,
    }).then((response) => response[0]);
  }
}
