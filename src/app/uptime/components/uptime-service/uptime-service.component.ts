import { UptimeSite } from '../../model/site';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { faClock } from '@fortawesome/pro-duotone-svg-icons';

@Component({
  selector: 'app-uptime-service',
  templateUrl: './uptime-service.component.html',
  styleUrls: ['./uptime-service.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UptimeServiceComponent {
  @Input() site:UptimeSite
  lastCheckIcon = faClock
  constructor() { }

}
