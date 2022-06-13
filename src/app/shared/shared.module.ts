import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareButtonComponent } from './share-button/share-button.component';



@NgModule({
  declarations: [
    ShareButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShareButtonComponent
  ]
})
export class SharedModule { }
