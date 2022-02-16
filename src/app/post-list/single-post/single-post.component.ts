import { Component, OnInit, Input } from '@angular/core';
import { faCalendarAlt, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { SinglePost } from 'src/app/models/single-post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  @Input() post:SinglePost;
  @Input() index:number;
  featuredImage :string = "assets/images/red_diamond_detail.jpg";
  loaded: boolean = false;
  imageLoading: boolean = true;
  faCalendarAlt = faCalendarAlt;
  faBookOpen = faBookOpen;

  constructor() { }

  ngOnInit(): void {  }
  setFeaturedImage() {
    if(this.post.hasOwnProperty('featuredImage')) {
      this.featuredImage = this.post.featuredImage;
    }

  }
}
