import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SiControlModule } from './modules/si-control/si-control.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SiControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
