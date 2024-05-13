import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import{initializeApp} from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyCv8oOMIP6OR6T-twIKqyAanT3qoTPRC3w",
  authDomain: "swapcycle-f5400.firebaseapp.com",
  projectId: "swapcycle-f5400",
  storageBucket: "swapcycle-f5400.appspot.com",
  messagingSenderId: "615718133563",
  appId: "1:615718133563:web:5044123db87784ec8d211e"
};

const app = initializeApp(firebaseConfig);


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
