// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirebaseProvider } from '../firebase/firebase';
import { Trees } from '../class/tree';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ScrollController } from '../scroll-controller';
import { ModalController,Modal, Loading, LoadingController } from 'ionic-angular';
/*
  Generated class for the AppControllerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppControllerProvider {
  
  trees : Array<Trees> = [];
  loadedDataChanel: Subject<string> = new Subject<string>();
  scrollController : ScrollController;
  isLoadTree : boolean = false;
  modal : Modal;
  constructor(
    public loadingCtrl : LoadingController,
    public firebaseService: FirebaseProvider,
    public mModalController: ModalController
  ) {
    console.log('Hello AppControllerProvider Provider');
    this.scrollController = new ScrollController();
  }

  loadTree(){
    this.getCollection("/tree").then(data=>{
      if(data && data.length > 0){
        data.forEach(element => {
          this.trees.push(new Trees(element));
          
        });
        this.isLoadTree = true;
        this.loadedDataChanel.next("tree");
      }
    })
  }

  showModal(page,params?: any){
    this.modal = this.mModalController.create(page,params ? params: null );
    this.modal.present();
  }

  closeModal(){
    this.modal.dismiss();
  }
  getTree(): Array<Trees> {
    return this.trees;
  }

  addDocument(collection: string,value: any) : Promise<any>{
    return this.firebaseService.addDocument(collection,value);
  }

  getCollection(path: string): Promise<any>{
    return this.firebaseService.getCollection(path);
  }

  loginWithAccountPassword(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.firebaseService.loginWithAccountPassword(email, password).then(success => {
        resolve("Đăng nhập thành công");
        console.log(success);
      }, error => {
        reject("Đăng nhập thất bại : " + error.code);
        console.log(error);
      })
    })
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  loading: Loading;
  showLoading(content?: string, cssClass?: string) {
    if (this.loading) {
      this.loading.dismiss();
    }
    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
      content: content ? content : "Xin đợi!",
      cssClass: cssClass ? cssClass : ""
    })
    this.loading.present();
  }

  hideLoading() {
    if (this.loading) {
      this.loading.dismiss().catch(() => {

      });
    }
  }

}
