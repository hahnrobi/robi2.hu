import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  fader } from './route-animations';
import { faFacebookF, faYoutube, faTwitter, faFlickr, faSpotify, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader
  ]
})
export class AppComponent {
  title = 'robi2';
  isCollapsed = false;

  footerIcons = [faFacebookF, faYoutube, faTwitter, faFlickr, faSpotify, faGithub]

  prepareOutlet(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
