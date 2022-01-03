import { Component, Input, OnInit } from '@angular/core';
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
  keyframes,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  animations: [
    trigger('postAnimation', [
      transition('* => *', [
        query(':leave', [
          stagger(
            0, [
              animate('0s .1s cubic-bezier(.17,.67,.44,1.01)', style({
                opacity: 0
              }))
            ]
          )
        ], {optional: true}),
        query(':enter', [
          style({
            transform: 'translateX(-4rem)',
            opacity: 0
          }),
          stagger(200, [
            animate('0.5s 0.2s cubic-bezier(.17,.67,.44,1.01)', style({
              transform: 'translateX(0rem)',
              opacity: 1
            }))
          ])
        ], {optional: true})
      ])
    ])
  ]
})
export class PostListComponent implements OnInit {

  @Input() pagination = 5;
  currentPage = 0;
  pagesNum:number[] = [];
  postCount = 0;

  posts: Entry<any>[] = [];
  loaded: boolean = false;
  imageLoading: boolean = true;
  faCalendarAlt = faCalendarAlt;

  constructor(private router : Router, private contentfulService : ContentfulService, private titleService:Title) {
    this.titleService.setTitle("Posztok");
  }

  ngOnInit(): void {
    this.contentfulService.getPostsCount()
    .then(x => 
      {
        this.postCount = x;
        this.pagesNum = Array( Math.ceil( this.postCount/this.pagination ) ).fill( 0 ).map( ( x,i )=>i )
      }
    );

    this.loadPosts();
  }

  changePage(page: number) {
    this.currentPage = page;
    this.loadPosts();
  }


  loadPosts(query? : object | undefined) {
    this.loaded = false;
    this.contentfulService.getPosts(
      Object.assign(
      {
        limit: this.pagination,
        skip: this.currentPage*this.pagination
      }, query))
      .then(
        response => 
        {
          this.posts = response; this.loaded = true;
        }
      );
  }
  goToPostDetailsPage(postId : string) {
    this.router.navigate(["/post/", postId]);
  }

}
