import { NavigationStart, Router } from '@angular/router';
import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faFacebookF, faYoutube, faTwitter, faFlickr, faSpotify, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faBars, faCode, faComments, faHeartbeat, faLink, faPlus, faToolbox } from '@fortawesome/pro-solid-svg-icons';
import { blurer} from './route-animations';

@Component({
  selector: 'body[robi2]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    blurer  ]
})
export class AppComponent {
  title = 'robi2';
  isExpanded = false;

  constructor(private router:Router, private renderer:Renderer2) {
    router.events.subscribe(val => {if(val instanceof NavigationStart) this.isExpanded = false});
  }
  onRouterActivate(event) {
    window.scrollTo(0,0);
  }
  mobileMenuToggleIcon = faBars;
  menuIcons = [faAddressCard, faComments, faLink, faDiscord, faCode, faPlus, faToolbox, faHeartbeat];
  footerIcons = [faGithub, faFacebookF, faYoutube, faTwitter, faFlickr, faSpotify, faGithub];

  prepareRouter(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}