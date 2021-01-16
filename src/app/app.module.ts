import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc'; // Add


const agoraConfig: AgoraConfig = {
  AppID: 'c86e980422e74fd7a5bdfd1b27e1987b',
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularAgoraRtcModule.forRoot(agoraConfig) ,// Add
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
