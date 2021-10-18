import { Component, OnInit } from '@angular/core';
import { NgxWavesurferService } from 'ngx-wavesurfer';
import { NgxWavesurferRxjsService, WaveSurferRxJSEventObservables } from 'ngx-wavesurfer-rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  waveSurfer: WaveSurfer;
  waveSurferRxJS: WaveSurferRxJSEventObservables = {};

  constructor(
    public waveSurferService: NgxWavesurferService,
    public waveSurferRxJSService: NgxWavesurferRxjsService
  ) {}

  ngOnInit() {

    this.waveSurfer = this.waveSurferService.create({
      container: '#basetemplate',
    });
    this.waveSurfer.load(
      '//www.kennethcaple.com/api/mp3/richinlovemutedguitarechoing.mp3'
    );

    this.waveSurferRxJS = this.waveSurferRxJSService.getRxJSWave(this.waveSurfer);
  }

  stop() {
    this.waveSurfer.stop();
    this.waveSurferRxJSService.stop();
  }

  ngOnDestroy(): void {
    this.waveSurferRxJSService.unsubscribeAll();
  }

}
