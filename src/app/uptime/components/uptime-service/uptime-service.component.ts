import { UptimeSite } from '../../model/site';
import { Component, Input, OnInit } from '@angular/core';
import { faClock } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-uptime-service',
  templateUrl: './uptime-service.component.html',
  styleUrls: ['./uptime-service.component.scss']
})
export class UptimeServiceComponent implements OnInit {
  @Input() site:UptimeSite
  lastCheckIcon = faClock
  constructor() { }

  ngOnInit(): void {
  }

}
