import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SinglePostFeaturedComponent } from './single-post-featured/single-post-featured.component';


const routes: Routes = [
  {
    path: '',
    component: PostListComponent
  }
];
@NgModule({
  declarations: [
    PostListComponent,
    SinglePostComponent,
    SinglePostFeaturedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FontAwesomeModule
  ]
})
export class PostListModule { }
