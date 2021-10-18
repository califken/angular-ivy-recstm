import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxWavesurferModule} from 'ngx-wavesurfer';
import {NgxWavesurferRxjsModule} from 'ngx-wavesurfer-rxjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxWavesurferModule,
    NgxWavesurferRxjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
