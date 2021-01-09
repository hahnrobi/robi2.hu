import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ContentfulService } from "../contentful.service";
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { Entry } from "contentful";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
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

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.scss'],
  animations: [
    trigger('bgImgTrigger', [
      transition(":enter", [style({transform: 'scaleX(0) scaleY(0)'}), animate('500ms ease')])
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class PostSingleComponent implements OnInit {

  post : Entry<any>;
  hasFeaturedImage: boolean = false;
  isFeaturedImageLoaded: boolean = false;
  loaded: boolean = false;
  faCalendarAlt = faCalendarAlt;

  constructor(private route: ActivatedRoute, private router: Router, private contentfulService: ContentfulService, private serviceTitle:Title) {
    this.serviceTitle.setTitle("Betöltés...");
  }

  ngOnInit(): void {
    const postSlug = this.route.snapshot.paramMap.get("id");
    this.contentfulService.getPost(postSlug).then((post) => {
      setTimeout(()=>{
        this.post = post;
        this.serviceTitle.setTitle(this.post.fields.title);
        if (this.post.fields.featuredImage != null) {
          this.hasFeaturedImage = true;
        }
        this.loaded = true;
        console.log(this.post);
        console.log(this._returnHtmlFromRichText(this.post.fields.content));
        console.log(typeof(this._returnHtmlFromRichText(this.post.fields.content)));
        //console.log(this.post.fields.content);

       }, 0)

    });
  }
  goBackToPosts() {
    this.router.navigate([""]);
  }

  _returnHtmlFromRichText(richText:any) {

    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    const options = {
      renderNode: {
        [INLINES. HYPERLINK]: (node, next) => {
          if(node.data.uri.startsWith('https://robi2.hu') || node.data.uri.startsWith('http://robi2.hu')) {
            return `<a href="${node.data.uri}">${next(node.content)}</a>`;
          }else{
            return `<a href="${node.data.uri}" target="_blank" >${next(node.content)}</a>`;
          }

        }
      }
    }
    return documentToHtmlString(richText, options);
}
}
