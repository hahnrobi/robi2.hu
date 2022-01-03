import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscordWidgetPageComponent } from './discord-widget-page/discord-widget-page.component';
import { HasznosPageComponent } from './hasznos-page/hasznos-page.component';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostSingleComponent } from './post-single/post-single.component';


const routes: Routes = [
  { "path": "", redirectTo: "about", pathMatch: "full" },
  { "path": "about", component: HomeComponent, data: {animation: "isLeft"}}, 
  { "path": "discord", component: DiscordWidgetPageComponent, data: {animation: 'isLeft'}},
  { "path": "hasznos", component: HasznosPageComponent, data: {animation: 'isRight'}},
  { "path": "posts", component: PostListComponent, data: {animation: 'isLeft'} },
  { "path": "post/:id", component: PostSingleComponent, data: {animation: 'isRight'}},
  { "path": ":id", component: PostSingleComponent, data: {animation: 'isRight'}}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
