import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareButtonComponent } from './share-button/share-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ShareButtonComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ShareButtonComponent
  ]
})
export class SharedModule { }
