import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppControllerProvider } from '../../providers/app-controller/app-controller';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string = "phuoclx129@gmail.com";
  password: string = "123456";
  constructor(
    public appController : AppControllerProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.appController.loadTree();
    // this.appController.loadedDataChanel.asObservable().subscribe(()=>{
    //   if(this.appController.isLoadTree){
    //     this.login();
    //   }
    // })
  }

  login(){
    this.appController.showLoading();
    this.appController.loginWithAccountPassword(this.email,this.password).then(sucess=>{
      console.log(sucess);
      this.appController.hideLoading();
      this.navCtrl.setRoot(HomePage);
    })
  }
}
