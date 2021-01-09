import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ContentfulService } from "../contentful.service";
import { Entry } from "contentful";
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

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  animations: [
    trigger('bgImgTrigger', [
      transition(":enter", [style({transform: 'translateX(-100px)', opacity: 0}), animate('500ms ease')])
    ])
  ]
})
export class PostListComponent implements OnInit {

  posts: Entry<any>[] = [];
  loaded: boolean = false;
  imageLoading: boolean = true;
  faCalendarAlt = faCalendarAlt;

  constructor(private router : Router, private contentfulService : ContentfulService, private titleService:Title) {
    this.titleService.setTitle("Posztok");
  }

  ngOnInit(): void {
    this.contentfulService.getPosts().then(response => {
      this.posts = response; this.loaded = true
    });
  }

  goToPostDetailsPage(postId : string) {
    this.router.navigate(["/post/", postId]);
  }

}
