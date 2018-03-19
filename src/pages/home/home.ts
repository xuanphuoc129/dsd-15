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
  link: string = "./assets/imgs/logo.png";

  trees: Array<Trees> = [];

  constructor(
    public appController: AppControllerProvider,
    public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    // this.addLinkMap();
    this.getCollection();
    this.getAllTree();
    this.loadPoint();
  }

  getAllTree() {
    this.trees = this.appController.getTree();
    console.log("treees", this.trees);
  }

  loadPoint() {
    let eline = document.getElementById("lineId");
    console.log("eline",eline);

    if (eline) {
      console.log("eline",eline);
      var points = eline.getAttribute("points");
      // console.log("eline",eline);
      
      points += ",40 40, 50 50";
      eline.setAttribute("points",points);
      
    }
    // this.trees.forEach(element => {
    //   if (element.status == 2) {
    //     this.points.concat(parseInt(element.left) + " " + parseInt(element.top) + ",");
    //   }
    // })
    // this.points.substring(this.points.length - 2, this.points.length - 1);
  }

  addLinkMap() {
    this.appController.addDocument("/map", { link: "https://firebasestorage.googleapis.com/v0/b/dsd-15-28647.appspot.com/o/map%2Fmap.png?alt=media&token=4c074b97-5fa5-44e3-a781-8aa5b69bd0d5" }).then(() => {
      console.log("Add sucesss");
      this.getCollection();
    }).catch(err => { });
  }

  getCollection() {
    this.appController.getCollection("/map").then((data) => {
      console.log("Data :", data);
      this.link = data[0].link;
    }).catch((err) => { });
  }

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
