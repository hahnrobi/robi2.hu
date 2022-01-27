import { LoaderAnimationComponent } from './../loader-animation/loader-animation.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UptimeRoutingModule } from './uptime-routing.module';
import { UptimeComponent } from './uptime.component';


@NgModule({
  declarations: [UptimeComponent],
  imports: [
    CommonModule,
    UptimeRoutingModule,
    HttpClientModule
  ],
  exports: [UptimeComponent]
})
export class UptimeModule { }
