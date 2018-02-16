import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage , Profile } from '../pages/home/home';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { InitialPage } from './../pages/initial/initial';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InitialPage,
    Profile
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InitialPage,
    Profile
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpServiceProvider,
    HttpClient
  ]
})
export class AppModule {}
