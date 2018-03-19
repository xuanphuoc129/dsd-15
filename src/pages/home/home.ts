import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppControllerProvider } from '../../providers/app-controller/app-controller';
import { Tree } from '../../providers/interfaces/tree';
import { Trees } from '../../providers/class/tree';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  constructor(
    public appController: AppControllerProvider,
    public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    // this.addLinkMap();
  }

 

  
  
  // addLinkMap() {
  //   this.appController.addDocument("/map", { link: "https://firebasestorage.googleapis.com/v0/b/dsd-15-28647.appspot.com/o/map%2Fmap.png?alt=media&token=4c074b97-5fa5-44e3-a781-8aa5b69bd0d5" }).then(() => {
  //     console.log("Add sucesss");
  //     this.getCollection();
  //   }).catch(err => { });
  // }

  
  clickEvent($event) {
    console.log($event);
    let element = document.getElementById("mapContainer");
    if (element) {
      var divElement = document.createElement("div");
      divElement.classList.add("tree");
      divElement.style.top = $event.offsetY + "px";
      divElement.style.left = $event.offsetX + "px";
      element.appendChild(divElement);
      let status = this.appController.randomIntFromInterval(1, 3);
      var tree = this.createTree(status, $event.offsetX, $event.offsetY);
      this.appController.addDocument("/tree", tree).then(() => {
        console.log("add tree sucess");

      })
    }
  }

  createTree(status: number, left: number, top: number): Tree {
    var treeInterface: Tree = {
      firebaeId: "",
      id: "",
      waterNeed: 1000,
      name: "",
      history: [],
      status: status,
      left: left,
      top: top,
    };
    return treeInterface;
  }
}
