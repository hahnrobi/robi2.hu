import { NgModule } from '@angular/core';
import { ShowdownModule } from 'ngx-showdown';
const highlight = require("./syntax-highlight.js")
const headingLink = require("./heading-link.js")
import { CommonModule } from '@angular/common';
import { PostSingleComponent } from './post-single.component';
import { RouterModule, Routes } from '@angular/router';
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
    ShowdownModule.forRoot({extensions: [highlight, headingLink] })

  ]
})
export class PostSingleModule { }
