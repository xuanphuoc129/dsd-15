import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  items: Array<{type: number, name: string, time: string}> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
    this.fakeData();
  }
  
  fakeData(){
    this.items = [
      {type: 1, name:"Chào mừng bạn đến với Hust pray", time: "2 ngày trước"},
      {type: 2, name:"Đã cập nhật bản đồ ", time: "1 ngày trước"},
      {type: 3, name:"Cây #123 được đánh dấu đã chết", time: "8 giờ trước"},
      {type: 2, name:"Cây #124 được đánh dấu bị ngập úng", time: "6 giờ trước"},
      {type: 3, name:"Đã có lịch làm việc mới", time: "4 giờ trước"},
      {type: 1, name:"Cây #125 được đánh dấu đã tưới", time: "2 phút trước"},
      {type: 1, name:"Cây #129 được đánh dấu đã tưới", time: "1 phút trước"},
    ];
    this.items=this.items.reverse();
  }

}
