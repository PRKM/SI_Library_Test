import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiControlComponent } from './si-control.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SiControlComponent],
  exports: [SiControlComponent]
})
export class SiControlModule { }
