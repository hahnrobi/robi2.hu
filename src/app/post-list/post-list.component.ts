import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { faCalendarAlt, faLaptop, faServer } from '@fortawesome/free-solid-svg-icons';
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
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { SinglePost } from '../models/single-post';
import { PostsService } from '../post.service';

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

  techIcons = [faAngular, faServer, faLaptop]

  posts: SinglePost[];
  loaded: boolean = false;
  imageLoading: boolean = true;
  faCalendarAlt = faCalendarAlt;

  constructor(private router : Router, private postService: PostsService, private titleService:Title) {
    this.titleService.setTitle("Posztok");
  }

  ngOnInit(): void {
    this.postService.getPosts(0, this.pagination)
    .subscribe(x => 
      {
        console.log(x);
        this.postCount = x.total;
        this.pagesNum = Array( Math.ceil( this.postCount/x.limit ) ).fill( 0 ).map( ( x,i )=>i )
        console.log(this.pagesNum)
      }
    );

    this.loadPosts(0, this.pagination);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.loadPosts(page * this.pagination, this.pagination);
  }


  loadPosts(page = 0, limit = 10) {
    this.loaded = false;
    this.postService.getPosts(page, limit)
      .subscribe(
        response => 
        {
          this.posts = response.posts; this.loaded = true;
        }
      );
  }
  goToPostDetailsPage(postId : string) {
    this.router.navigate(["/post/", postId]);
  }

}
