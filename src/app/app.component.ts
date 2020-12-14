import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  fader } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    fader
  ]
})
export class AppComponent {
  title = 'robi2';

  prepareOutlet(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
