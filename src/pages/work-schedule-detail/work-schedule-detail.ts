import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkScheduleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-work-schedule-detail',
  templateUrl: 'work-schedule-detail.html',
})
export class WorkScheduleDetailPage {

  today: Date;
  items: Array<{id: string, name: string}> = [];
  works: Array<string> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.today = new Date();
    if(navParams.data["schedule"])this.today = navParams.get("schedule").date;
    this.fakeData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkScheduleDetailPage');
  }

  fakeData(){
    this.items = [
      {id: "#123", name : "Lương Xuân Phước"},
      {id: "#124", name : "Bùi Thị thảo phương"},
      {id: "#125", name : "Trần thị anh thự"},
      {id: "#126", name : "Nguyễn Minh Huyền"},
      {id: "#127", name : "Nguyễn ngọc sơn"}
    ];
    this.works = [
      "Tưới cây khu vực C2",
      "Tưới cây khu vực C1",
      "Kiểm tra cây bị ngập úng",
      "Kiểm tra cây bị chết",
      "Kiểm tra cảm biến ở khu vực D7"
    ];
  }

}
