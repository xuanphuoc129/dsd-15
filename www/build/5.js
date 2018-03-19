webpackJsonp([5],{

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(547);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */]),
            ],
        })
    ], MapPageModule);
    return MapPageModule;
}());

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_controller_app_controller__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapPage = /** @class */ (function () {
    function MapPage(appController, navCtrl, navParams) {
        this.appController = appController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.trees = [];
        this.link = "./assets/imgs/map.png";
        this.xUser = 550;
        this.yUser = 600;
        this.title = "Map";
        this.isFindPath = false;
        if (navParams.data["title"])
            this.title = navParams.get("title");
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.getCollection();
        this.getAllTree();
        this.getLocation();
    };
    MapPage.prototype.getAllTree = function () {
        this.trees = this.appController.getTree();
        // this.getRedTree();
        console.log("treees", this.trees);
    };
    MapPage.prototype.getCollection = function () {
        var _this = this;
        this.appController.getCollection("/map").then(function (data) {
            console.log("Data :", data);
            _this.link = data[0].link;
        }).catch(function (err) { });
    };
    MapPage.prototype.getRedTree = function () {
        if (this.trees && this.trees.length > 0) {
            var redtrees = this.trees.filter(function (tree) {
                return tree.status == 2;
            });
            return redtrees;
        }
        else {
            return [];
        }
    };
    MapPage.prototype.findPath = function () {
        this.isFindPath = true;
        var array = this.getRedTree();
        var result = [{ x: this.xUser, y: this.yUser }];
        if (array.length > 0) {
            for (var i = array.length - 1; i >= 0; i--) {
                var min = 99999;
                var index = 0;
                for (var j = 0; j < array.length; j++) {
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
            for (var z = 0; z < result.length; z++) {
                if (z == result.length - 1) {
                    point += result[z].x + " " + result[z].y;
                }
                else {
                    point += result[z].x + " " + result[z].y + ",";
                }
            }
            this.drawLine(point);
        }
    };
    MapPage.prototype.drawLine = function (point) {
        var eline = document.getElementById("lineId");
        console.log("eline", eline);
        if (eline) {
            console.log("eline", eline);
            var points = eline.getAttribute("points");
            // console.log("eline",eline);
            points = point;
            eline.setAttribute("points", points);
        }
    };
    MapPage.prototype.caculateDistance = function (x1, x2, y1, y2) {
        return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    };
    MapPage.prototype.getLocation = function () {
        var scrollLeft = this.xUser - (screen.width / 2);
        var scrollTop = this.yUser - (screen.height / 2);
        var element = document.getElementById("mapContainer");
        if (element)
            element.scrollTop = scrollTop;
        this.appController.scrollController.doScrollLeft("mapContainer", scrollLeft);
    };
    MapPage.prototype.goToDetail = function (item) {
        console.log("item", item);
        this.appController.showModal("DetailTreePage", { item: item });
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/xuanphuoc129/Documents/workspace/dsd-15/src/pages/map/map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only navPop>\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title text-center>{{title}}</ion-title>\n    <ion-buttons right class="opacity">\n      <button ion-button icon-only>\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="map-container" id="mapContainer">\n    <img src="{{link}}" alt="">\n    <div class="tree" *ngFor="let item of trees" [style.left]="item.left" [style.top]="item.top" [class.green]="item.status ==1"\n      [class.red]="item.status == 2" [class.yellow]="item.status == 3" (click)="goToDetail(item)" tappable></div>\n    <svg height="1000" width="1333" *ngIf="title == \'Tưới cây\'">\n      <polyline id="lineId" points="0 0, 0 0" class="path" /> Sorry, your browser does not support inline SVG.\n    </svg>\n    \n  </div>\n  <div class="pin a3-container-center" (click)="getLocation()" tappble>\n    <ion-icon name="pin"></ion-icon>\n  </div>\n  <button *ngIf="title == \'Tưới cây\' && !isFindPath" (click)="findPath()" ion-button round full class="btn bottom">Tạo tuyến đường tưới cây</button>\n  <button *ngIf="title == \'Tưới cây\' && isFindPath" (click)="start()" ion-button round full class="btn bottom">Bắt đầu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/xuanphuoc129/Documents/workspace/dsd-15/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_app_controller_app_controller__["a" /* AppControllerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ })

});
//# sourceMappingURL=5.js.map