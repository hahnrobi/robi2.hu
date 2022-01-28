import { LoaderAnimationModule } from './../loader-animation/loader-animation.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoaderAnimationComponent } from './../loader-animation/loader-animation.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UptimeRoutingModule } from './uptime-routing.module';
import { UptimeComponent } from './uptime.component';
import { UptimeGroupComponent } from './components/uptime-group/uptime-group.component';
import { UptimeServiceComponent } from './components/uptime-service/uptime-service.component';


@NgModule({
  declarations: [UptimeComponent, UptimeGroupComponent, UptimeServiceComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    UptimeRoutingModule,
    LoaderAnimationModule,
    HttpClientModule
  ],
  exports: [UptimeComponent]
})
export class UptimeModule { }
