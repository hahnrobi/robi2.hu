import { NavigationStart, Router } from '@angular/router';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faFacebookF, faYoutube, faTwitter, faFlickr, faSpotify, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faBars, faCode, faComments, faHeartbeat, faLink, faPlus, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { blurer} from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    blurer  ]
})
export class AppComponent {
  title = 'robi2';
  isExpanded = false;

  constructor(private router:Router) {
    router.events.subscribe(val => {if(val instanceof NavigationStart) this.isExpanded = false});
  }
  onRouterActivate(event) {
    window.scrollTo(0,0);
  }
  mobileMenuToggleIcon = faBars;
  menuIcons = [faAddressCard, faComments, faLink, faDiscord, faCode, faPlus, faToolbox, faHeartbeat];
  footerIcons = [faFacebookF, faYoutube, faTwitter, faFlickr, faSpotify, faGithub];

  prepareRouter(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}