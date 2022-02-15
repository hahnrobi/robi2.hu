import { NgModule } from '@angular/core';
import { ShowdownModule } from 'ngx-showdown';
const highlight = require("./syntax-highlight.js")
import { CommonModule } from '@angular/common';
import { PostSingleComponent } from './post-single.component';
@NgModule({
  declarations: [
    PostSingleComponent
  ],
  imports: [
    CommonModule,
    ShowdownModule.forRoot({extensions: [highlight] })

  ]
})
export class PostSingleModule { }
