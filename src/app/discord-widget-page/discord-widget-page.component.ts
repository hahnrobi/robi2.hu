import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discord-widget-page',
  templateUrl: './discord-widget-page.component.html',
  styleUrls: ['./discord-widget-page.component.scss']
})
export class DiscordWidgetPageComponent implements OnInit {

  constructor() { }

  iFrameIsLoading = true;

  ngOnInit(): void {
  }

}
