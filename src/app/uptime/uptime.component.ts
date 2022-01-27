import { UptimeService } from './uptime.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uptime',
  templateUrl: './uptime.component.html',
  styleUrls: ['./uptime.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UptimeComponent implements OnInit {

  constructor(private uptimeService:UptimeService) { }

  ngOnInit(): void {
  }

  uptimes$ = this.uptimeService.getUptime();

}
