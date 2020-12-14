import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ContentfulService } from "../contentful.service";
import { Entry } from "contentful";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
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
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.scss'],
  animations: [
    trigger('bgImgTrigger', [
      transition(":enter", [style({transform: 'scaleX(0) scaleY(0)'}), animate('500ms ease')])
    ])
  ]
})
export class PostSingleComponent implements OnInit {

  post : Entry<any>;
  loaded: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    const postSlug = this.route.snapshot.paramMap.get("id");
    this.contentfulService.getPost(postSlug).then((post) => {
      this.post = post;
      this.loaded = true;
      console.log(this.post);
    });
  }
  goBackToPosts() {
    this.router.navigate([""]);
  }

  _returnHtmlFromRichText(richText:any) {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
}
}
