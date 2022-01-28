import { UptimeGroup } from './../../model/group';
import { Component, Input, OnInit } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-uptime-group',
  templateUrl: './uptime-group.component.html',
  styleUrls: ['./uptime-group.component.scss'],
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
export class UptimeGroupComponent implements OnInit {
  @Input() group:UptimeGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
