import { UptimeGroup } from './model/group';
import { UptimeService } from './uptime.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-uptime',
  templateUrl: './uptime.component.html',
  styleUrls: ['./uptime.component.scss'],
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
      transition('void => *', [
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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UptimeComponent implements OnInit {

  constructor(private uptimeService:UptimeService) { }

  ngOnInit(): void {
  }

  uptimes$ = this.uptimeService.getUptime();


  trackByTitle(index: number, value: UptimeGroup) {
    return value.title;
  }
}
