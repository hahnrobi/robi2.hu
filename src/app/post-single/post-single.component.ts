import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';
import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes
} from '@angular/animations';
import { faCentercode } from '@fortawesome/free-brands-svg-icons';
import { SinglePost } from '../models/single-post';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.scss'],
  animations: [
    trigger('bgImgTrigger', [
      transition(":enter", [style({transform: 'scaleX(0) scaleY(0)'}), animate('500ms ease')])
    ])
  ],
  //encapsulation: ViewEncapsulation.None
})
export class PostSingleComponent implements OnInit {

  post: SinglePost;
  hasFeaturedImage: boolean = false;
  isFeaturedImageLoaded: boolean = false;
  loaded: boolean = false;
  faCalendarAlt = faCalendarAlt;

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostsService, private serviceTitle:Title) {
    this.serviceTitle.setTitle("Betöltés...");
  }

  ngOnInit(): void {
    const postSlug = this.route.snapshot.paramMap.get("id") as string;
    this.postService.getPost(postSlug).subscribe( 
      {
        next: (post) => {
      if(post === undefined || post === null) {
        this.router.navigate(["404"]);
      }
      setTimeout(()=>{
        this.post = post;
        this.serviceTitle.setTitle(this.post.title);
        if (this.post.featuredImage != null) {
          this.hasFeaturedImage = true;
        }
        this.loaded = true;
        console.log(this.post);
        //console.log(this.post.fields.content);

       }, 0)
    },
    error: err => {
      this.router.navigate(["404"]);
    }});
  }

}
