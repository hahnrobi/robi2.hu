import { SinglePostComponent } from './../single-post/single-post.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-post-featured',
  templateUrl: './single-post-featured.component.html',
  styleUrls: ['./single-post-featured.component.scss']
})
export class SinglePostFeaturedComponent extends SinglePostComponent implements OnInit {

  constructor() { super() }


}
