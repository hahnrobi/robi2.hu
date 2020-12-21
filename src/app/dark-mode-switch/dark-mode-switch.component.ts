import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dark-mode-switch',
  templateUrl: './dark-mode-switch.component.html',
  styleUrls: ['./dark-mode-switch.component.scss']
})
export class DarkModeSwitchComponent implements OnInit {

  constructor() { }

  validLightModes = ["light", "dark"];
  currentLightMode: string | null = null;
  body:HTMLBodyElement;

  ngOnInit(): void {
    this.body = document.getElementsByTagName("body")[0];
    this.currentLightMode = this.getNightModeStatus();

    if(this.currentLightMode != null) {
      this.updateBodyLightModeClass();
    }
  }

  getNightModeStatus() : string {
    let lsItem = localStorage.getItem("light-mode");
    if (lsItem != null && this.validLightModes.includes(lsItem as string)) {
      return lsItem as string;
    }
    return "";
  }
  setNightModeStatus(status: string) {
    if(this.validLightModes.includes(status)) {
      localStorage.setItem("light-mode", status);
      this.currentLightMode = this.getNightModeStatus();
      this.updateBodyLightModeClass();
    }
  }
  updateBodyLightModeClass() {
    this.validLightModes.forEach(l => {this.body.classList.remove(l)});
    if(this.currentLightMode != null)
    {
      if(!this.body.classList.contains(this.currentLightMode)) {
        this.body.classList.add(this.currentLightMode);
      }
    }
  }

}
