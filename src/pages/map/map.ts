import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Trees } from '../../providers/class/tree';
import { AppControllerProvider } from '../../providers/app-controller/app-controller';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  trees: Array<Trees> = [];
  link: string = "./assets/imgs/map.png";
  xUser: number = 550;
  yUser: number = 600;
  title: string = "Map";
  constructor(
    public appController: AppControllerProvider,
    public navCtrl: NavController, public navParams: NavParams) {
    if (navParams.data["title"]) this.title = navParams.get("title");
  }

  ionViewDidLoad() {
    this.getCollection();
    this.getAllTree();
    this.getLocation();
  }

  getAllTree() {
    this.trees = this.appController.getTree();
    // this.getRedTree();
    console.log("treees", this.trees);
  }

  getCollection() {
    this.appController.getCollection("/map").then((data) => {
      console.log("Data :", data);
      this.link = data[0].link;
    }).catch((err) => { });
  }


  getRedTree(): Array<Trees> {
    if (this.trees && this.trees.length > 0) {
      var redtrees = this.trees.filter(tree => {
        return tree.status == 2;
      });
      return redtrees;
    } else {
      return [];
    }
  }
  isFindPath: boolean = false;
  findPath() {
    this.isFindPath = true;
    let array = this.getRedTree();
    let result = [{ x: this.xUser, y: this.yUser }];
    if (array.length > 0) {
      for (let i = array.length - 1; i >= 0; i--) {
        var min = 99999;
        var index = 0;
        for (let j = 0; j < array.length; j++) {
          var distance = this.caculateDistance(result[result.length - 1].x, parseInt(array[j].left), result[result.length - 1].y, parseInt(array[j].top));
          console.log("distance", distance);

          if (distance < min) {
            min = distance;
            index = j;
          }
        }
        console.log("min", min);
        console.log("tree", array[index]);
        result.push({ x: parseInt(array[index].left), y: parseInt(array[index].top) });
        array.splice(index, 1);
      }
      var point = "";
      for (let z = 0; z < result.length; z++) {
        if (z == result.length - 1) {
          point += result[z].x + " " + result[z].y;
        } else {
          point += result[z].x + " " + result[z].y + ",";
        }
      }
      this.drawLine(point);
    }
  }

  drawLine(point) {
    let eline = document.getElementById("lineId");
    console.log("eline", eline);

    if (eline) {
      console.log("eline", eline);
      var points = eline.getAttribute("points");
      // console.log("eline",eline);
      points = point;
      eline.setAttribute("points", points);
    }
  }



  caculateDistance(x1, x2, y1, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }

  getLocation() {
    var scrollLeft = this.xUser - (screen.width / 2);
    var scrollTop = this.yUser - (screen.height / 2);
    let element = document.getElementById("mapContainer");
    if(element)element.scrollTop = scrollTop;
    this.appController.scrollController.doScrollLeft("mapContainer", scrollLeft);
  }

  goToDetail(item){
    console.log("item",item);
    
    this.appController.showModal("DetailTreePage",{item: item});
  }
}
