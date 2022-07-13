import { NgModule } from '@angular/core';
import { ShowdownModule } from 'ngx-showdown';
const highlight = require("./syntax-highlight.js")
const headingLink = require("./heading-link.js")
import { CommonModule } from '@angular/common';
import { PostSingleComponent } from './post-single.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { LoaderAnimationModule } from '../loader-animation/loader-animation.module';
const routes: Routes = [
  {
    path: ':id',
    component: PostSingleComponent
  }
];
@NgModule({
  declarations: [
    PostSingleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShowdownModule.forRoot({extensions: [highlight, headingLink] }),
    FontAwesomeModule,
    LoaderAnimationModule,
    SharedModule
  ]
})
export class PostSingleModule { }
