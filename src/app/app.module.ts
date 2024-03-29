import { LoaderAnimationModule } from './loader-animation/loader-animation.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DiscordWidgetPageComponent } from './discord-widget-page/discord-widget-page.component';
import { DarkModeSwitchComponent } from './dark-mode-switch/dark-mode-switch.component';
import { EmojiPipePipe } from './emoji-pipe.pipe';
import { HasznosPageComponent } from './hasznos-page/hasznos-page.component';
import { HasznosFileListComponent } from './hasznos-page/hasznos-file-list/hasznos-file-list.component';
import { HasznosFileListItemComponent } from './hasznos-page/hasznos-file-list/hasznos-file-list-item/hasznos-file-list-item.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { OtherComponent } from './other/other.component';
import { StatusComponent } from './status/status.component';
import { AppearDirective } from './appear.directive';
import { PostsService } from './post.service';
import { PostSingleModule } from './post-single/post-single.module';
import { PostListModule } from './post-list/post-list.module';

@NgModule({
  declarations: [
    AppComponent,
    DiscordWidgetPageComponent,
    DarkModeSwitchComponent,
    EmojiPipePipe,
    HasznosPageComponent,
    HasznosFileListComponent,
    HasznosFileListItemComponent,
    HomeComponent,
    NotFoundComponent,
    PortfolioComponent,
    OtherComponent,
    StatusComponent,
    AppearDirective,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoaderAnimationModule,
    FontAwesomeModule,
    PostSingleModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
