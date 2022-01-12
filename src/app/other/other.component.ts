import { Component, OnInit } from '@angular/core';
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
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
  animations: [
    trigger('itemAnimation', [
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
export class OtherComponent implements OnInit {

  constructor() { }

  itemsCanShow = false;

  ngOnInit(): void {
    window.setTimeout(() => {
      this.itemsCanShow = true;  
    }, 100);
  }

  otherItems = [
    {
      "title": "Hangnyomás kalkulátor",
      "description": "Hangszóró által produkálható maximális hangnyomás meghatározására alkalmas eszköz.",
      "link": "/hang/hangfal.php"
    },
    {
      "title": "VPL és GAIN kalkulátor Lab Gruppen FP10000Q-hoz",
      "description": "Az FP10000Q hátulján található dipswtichek beállítását segítő oldal",
      "link": "/hang/labgruppen.php"
    },
    {
      "title": "Tantárgyi háló",
      "description": "Demoként készített egyszerű tantárgyi hálót szemléltető JavaScript kód",
      "link": "/tantargyihalo"
    },
    {
      "title": "Szürke Ötven Árnyalata ONLINE",
      "description": "",
      "link": "/szurke_otven_arnyalata"
    }
  ]
  
}
