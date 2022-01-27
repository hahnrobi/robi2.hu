import { UptimeGroup } from './../../model/group';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-uptime-group',
  templateUrl: './uptime-group.component.html',
  styleUrls: ['./uptime-group.component.scss']
})
export class UptimeGroupComponent implements OnInit {
  @Input() group:UptimeGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
