import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faAngular, faDiscord, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLaptop, faLink, faServer } from '@fortawesome/free-solid-svg-icons';
import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({opacity: 0}),
        animate(4000, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(4000, style({opacity: 0}))
      ])
    ]),
    trigger('postAnimation', [
      transition('* => *', [
        query(':enter', [
          style({
            transform: 'translateX(-4rem)',
            opacity: 0
          }),
          stagger(200, [
            animate('0.5s 0.2s cubic-bezier(.17,.67,.44,1.01)', style({
              transform: 'translateX(0rem)',
              opacity: 1
            }))
          ])
        ], {optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  iconFaLink = faLink;

  techs = [
    {
      icon: faAngular,
      title: "Front-end",
      description: "Angular, Nuxt (Vue.js) és React JavaScript könyvtárak használata CSS, SCSS és HTML mellett."
    },
    {
      icon: faServer,
      title: "Back-end",
      description: "Szerveroldali alkalmazások készítése NodeJS és PHP nyelven, adatbáziskezelés MySQL és MongoDB használatával."
    },
    {
      icon: faLaptop,
      title: "UI/UX",
      description: "Felhasználói felületek felépítése, ergonómiai és kompatibilitási szempontok figyelembevételével."
    }
  ]

  contact = [
    {
      "icon": faDiscord,
      "name": "ROBITWO#6334",
    },
    {
      "icon": faFacebook,
      "name": "hahnrobi",
      "link": "https://www.facebook.com/hahnrobi"
    },
    {
      "icon": faInstagram,
      "name": "hahnrobi",
      "link": "https://www.instagram.com/hahnrobi/"
    }
  ]

  ok = false;

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle("Hahn Róbert");
    window.setTimeout(() => {
      this.ok = true;  
    }, 500);
    
  }

}
