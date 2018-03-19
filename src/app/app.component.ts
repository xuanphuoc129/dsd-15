import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "LoginPage";
  // rootPage: any = HomePage;
  isSelectPage : number = 0;
  pages: Array<{id: number ,title: string, component: any,push: boolean}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { id: 0 ,title: 'Trang chủ', component: HomePage, push : false },
      { id: 1 ,title: 'Bản đồ', component: "MapPage", push: true},
      { id :2 ,title: 'Tưới cây', component: "MapPage", push: true},
      { id :3 ,title: 'Xem lịch làm việc',component: "WorkSchedulePage", push : true},
      { id :4 ,title: 'Thông báo',component: "NotificationPage", push : true}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.push){
      this.nav.push(page.component, {title: page.title});
      return;
    }
    this.nav.setRoot(page.component);
    this.isSelectPage = page.id;
  }
}
