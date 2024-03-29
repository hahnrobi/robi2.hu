import { UptimeModule } from './uptime/uptime.module';
import { StatusComponent } from './status/status.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscordWidgetPageComponent } from './discord-widget-page/discord-widget-page.component';
import { HasznosPageComponent } from './hasznos-page/hasznos-page.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OtherComponent } from './other/other.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostSingleComponent } from './post-single/post-single.component';


const routes: Routes = [
  { "path": "", redirectTo: "about", pathMatch: "full" },
  { "path": "404", component: NotFoundComponent, data: {animation: "404"}},
  { "path": "about", component: HomeComponent, data: {animation: "about"}}, 
  { "path": "portfolio", component: PortfolioComponent, data: {animation: "portfolio"}}, 
  { "path": "discord", component: DiscordWidgetPageComponent, data: {animation: "discord"}},
  { "path": "hasznos", component: HasznosPageComponent, data: {animation: "hasznos"}},
  { "path": "other", component: OtherComponent, data: {animation: "other"}},
  { "path": "status", redirectTo: "uptime"},
  {
    path: 'uptime',
    loadChildren: () => import('./uptime/uptime.module').then(m => m.UptimeModule),
    data: {animation: "uptime"}
  },
  { 
    "path": "posts",
    //component: PostListComponent,
    loadChildren: () => import('./post-list/post-list.module').then(m => m.PostListModule),
    data: {animation: "posts"}},
  { 
    "path": "post/:id",
    component: PostSingleComponent,
    data: {animation: "post/:id"}
  },
  { "path": ":id", component: PostSingleComponent},
  { "path": "*", component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
