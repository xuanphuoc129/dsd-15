import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-work-schedule',
  templateUrl: 'work-schedule.html',
})
export class WorkSchedulePage {
  items: Array<{ color: string, date: Date }> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fakeData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkSchedulePage');
  }

  fakeData() {
    this.items = [
      { color: "#E7EDA3", date: new Date("2018-03-02") },
      { color: "#F7B8ED", date: new Date("2018-03-07") },
      { color: "#93D8C8", date: new Date("2018-03-08") },
      { color: "#EDA3AE", date: new Date("2018-03-09") },
      { color: "#E7EDA3", date: new Date("2018-03-10") },
      { color: "#F7B8ED", date: new Date("2018-03-11") },
      { color: "#93D8C8", date: new Date("2018-03-12") },
      { color: "#EDA3AE", date: new Date("2018-03-13") }
    ]
  }
  goToDetail(item) {
    this.navCtrl.push("WorkScheduleDetailPage", { schedule: item });
  }
}
