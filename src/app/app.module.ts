import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseProvider } from '../providers/firebase/firebase';

import { AngularFireModule } from 'angularfire2';
import { AppControllerProvider } from '../providers/app-controller/app-controller';
import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyDk4vLSswi5iS8Pla2dnKhV3bx4uh8lX7o",
  authDomain: "dsd-15-28647.firebaseapp.com",
  databaseURL: "https://dsd-15-28647.firebaseio.com",
  projectId: "dsd-15-28647",
  storageBucket: "dsd-15-28647.appspot.com",
  messagingSenderId: "431639002564"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    AppControllerProvider
  ]
})
export class AppModule {}
