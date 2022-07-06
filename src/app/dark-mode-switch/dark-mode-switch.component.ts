import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { faSun, } from  '@fortawesome/pro-duotone-svg-icons';
import { faSpaceStationMoonConstruction } from '@fortawesome/pro-solid-svg-icons'

@Component({
  selector: 'dark-mode-switch',
  templateUrl: './dark-mode-switch.component.html',
  styleUrls: ['./dark-mode-switch.component.scss']
})
export class DarkModeSwitchComponent implements OnInit {
  show: boolean = true;

  constructor(@Inject(PLATFORM_ID) private platformId) {
    if (isPlatformServer(platformId)) {
      this.show = false;
    }
  }

  sunIcon = faSun;
  moonIcon = faSpaceStationMoonConstruction;

  validLightModes = ["light", "dark"];
  currentLightMode: string | null = null;
  body: HTMLBodyElement;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.body = document.getElementsByTagName("body")[0];
      this.currentLightMode = this.getNightModeStatus();

      if (this.currentLightMode != null) {
        this.updateBodyLightModeClass();
      }
    }
  }

  getNightModeStatus(): string {
    let lsItem = localStorage.getItem("light-mode");
    if (lsItem != null && this.validLightModes.includes(lsItem as string)) {
      return lsItem as string;
    }
    return this.validLightModes[0];
  }
  setNightModeStatus(status: string) {
    if (this.validLightModes.includes(status)) {
      localStorage.setItem("light-mode", status);
      this.currentLightMode = this.getNightModeStatus();
      this.updateBodyLightModeClass();
    }
  }
  updateBodyLightModeClass() {
    this.validLightModes.forEach(l => { this.body.classList.remove(l) });
    if (this.currentLightMode != null) {
      if (!this.body.classList.contains(this.currentLightMode)) {
        this.body.classList.add(this.currentLightMode);
      }
    }
  }

}
