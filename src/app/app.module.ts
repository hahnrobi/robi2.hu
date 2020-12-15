import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentfulService } from './contentful.service';
import { PostListComponent } from './post-list/post-list.component';
import { PostSingleComponent } from './post-single/post-single.component';
import { MdToHtmlPipe } from './md-to-html.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const routes: Routes = [
  { "path": "", redirectTo: "posts", pathMatch: "full" },
  { "path": "posts", component: PostListComponent, data: {animation: 'isLeft'} },
  { "path": "post/:id", component: PostSingleComponent, data: {animation: 'isRight'}},
  { "path": ":id", component: PostSingleComponent, data: {animation: 'isRight'}}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSingleComponent,
    MdToHtmlPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
