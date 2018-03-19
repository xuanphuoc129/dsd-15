webpackJsonp([4],{

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppControllerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_firebase__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_tree__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';




/*
  Generated class for the AppControllerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AppControllerProvider = /** @class */ (function () {
    function AppControllerProvider(firebaseService) {
        this.firebaseService = firebaseService;
        this.trees = [];
        this.loadedDataChanel = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.isLoadTree = false;
        console.log('Hello AppControllerProvider Provider');
    }
    AppControllerProvider.prototype.loadTree = function () {
        var _this = this;
        this.getCollection("/tree").then(function (data) {
            if (data && data.length > 0) {
                data.forEach(function (element) {
                    _this.trees.push(new __WEBPACK_IMPORTED_MODULE_2__class_tree__["a" /* Trees */](element));
                });
                _this.isLoadTree = true;
                _this.loadedDataChanel.next("tree");
            }
        });
    };
    AppControllerProvider.prototype.getTree = function () {
        return this.trees;
    };
    AppControllerProvider.prototype.addDocument = function (collection, value) {
        return this.firebaseService.addDocument(collection, value);
    };
    AppControllerProvider.prototype.getCollection = function (path) {
        return this.firebaseService.getCollection(path);
    };
    AppControllerProvider.prototype.loginWithAccountPassword = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.firebaseService.loginWithAccountPassword(email, password).then(function (success) {
                resolve("Đăng nhập thành công");
                console.log(success);
            }, function (error) {
                reject("Đăng nhập thất bại : " + error.code);
                console.log(error);
            });
        });
    };
    AppControllerProvider.prototype.randomIntFromInterval = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    AppControllerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__firebase_firebase__["a" /* FirebaseProvider */]])
    ], AppControllerProvider);
    return AppControllerProvider;
}());

//# sourceMappingURL=app-controller.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
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



var HomePage = /** @class */ (function () {
    function HomePage(appController, navCtrl) {
        this.appController = appController;
        this.navCtrl = navCtrl;
        this.link = "./assets/imgs/logo.png";
        this.trees = [];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        // this.addLinkMap();
        this.getCollection();
        this.getAllTree();
        this.loadPoint();
    };
    HomePage.prototype.getAllTree = function () {
        this.trees = this.appController.getTree();
        console.log("treees", this.trees);
    };
    HomePage.prototype.loadPoint = function () {
        var eline = document.getElementById("lineId");
        console.log("eline", eline);
        if (eline) {
            console.log("eline", eline);
            var points = eline.getAttribute("points");
            // console.log("eline",eline);
            points += ",40 40, 50 50";
            eline.setAttribute("points", points);
        }
        // this.trees.forEach(element => {
        //   if (element.status == 2) {
        //     this.points.concat(parseInt(element.left) + " " + parseInt(element.top) + ",");
        //   }
        // })
        // this.points.substring(this.points.length - 2, this.points.length - 1);
    };
    HomePage.prototype.addLinkMap = function () {
        var _this = this;
        this.appController.addDocument("/map", { link: "https://firebasestorage.googleapis.com/v0/b/dsd-15-28647.appspot.com/o/map%2Fmap.png?alt=media&token=4c074b97-5fa5-44e3-a781-8aa5b69bd0d5" }).then(function () {
            console.log("Add sucesss");
            _this.getCollection();
        }).catch(function (err) { });
    };
    HomePage.prototype.getCollection = function () {
        var _this = this;
        this.appController.getCollection("/map").then(function (data) {
            console.log("Data :", data);
            _this.link = data[0].link;
        }).catch(function (err) { });
    };
    HomePage.prototype.clickEvent = function ($event) {
        console.log($event);
        var element = document.getElementById("mapContainer");
        if (element) {
            var divElement = document.createElement("div");
            divElement.classList.add("tree");
            divElement.style.top = $event.offsetY + "px";
            divElement.style.left = $event.offsetX + "px";
            element.appendChild(divElement);
            var status_1 = this.appController.randomIntFromInterval(1, 3);
            var tree = this.createTree(status_1, $event.offsetX, $event.offsetY);
            this.appController.addDocument("/tree", tree).then(function () {
                console.log("add tree sucess");
            });
        }
    };
    HomePage.prototype.createTree = function (status, left, top) {
        var treeInterface = {
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
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\ionic\dsd-15-master\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-icon item-end id="icon" name="bell"></ion-icon>\n    <ion-title text-center>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!--them cay (click)="clickEvent($event)" -->\n  <!-- <div class="map-container" id="mapContainer">\n    <img src="{{link}}" alt="">\n    <div class="tree" *ngFor="let item of trees" [style.left]="item.left" [style.top]="item.top" [class.green]="item.status ==1"\n      [class.red]="item.status == 2" [class.yellow]="item.status == 3"></div>\n    <svg height="1000" width="1333">\n      <polyline id="lineId" points="10 10, 20 20" style="fill:none;stroke:black;stroke-width:3" /> Sorry, your browser does not support inline SVG.\n    </svg>\n  </div> -->\n  <div class="main">\n<img id="one" src="../assets/imgs/logo.png"/>\n\n<button id="btn" ion-button outline  >Tưới cây</button> \n<button id="btn" ion-button outline  >Xem lịch làm việc</button> \n<button id="btn" ion-button outline  >Map</button> \n<button id="btn" ion-button outline  >Thoát</button> \n</div>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\dsd-15-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_app_controller_app_controller__["a" /* AppControllerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		538,
		3
	],
	"../pages/map/map.module": [
		535,
		2
	],
	"../pages/spray/spray.module": [
		536,
		1
	],
	"../pages/tree-popup/tree-popup.module": [
		537,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 229;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_firestore__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';




/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseProvider = /** @class */ (function () {
    function FirebaseProvider() {
        // console.log('Hello FirebaseProvider Provider');
        this.db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
    }
    FirebaseProvider.prototype.addDocument = function (collection, value, documentId) {
        console.log("firebase add document", collection, documentId);
        // this.progressController.add();
        if (documentId) {
            value["firebase_id"] = documentId;
            value["id"] = documentId;
            return this.db.collection(collection).doc(documentId).set(value).then(function (success) {
                // this.progressController.subtract();
            }, function (error) {
                // this.progressController.subtract();
            });
        }
        else {
            var newRef = this.db.collection(collection).doc();
            value["firebase_id"] = newRef.id;
            value["id"] = newRef.id;
            return newRef.set(value).then(function (success) {
                // this.progressController.subtract();
                console.log("add data sucess");
            }, function (error) {
                // this.progressController.subtract();
                console.log("error");
            });
        }
    };
    FirebaseProvider.prototype.getDocument = function (path) {
        var _this = this;
        console.log("firebase get document", path);
        // this.progressController.add();
        return new Promise(function (resolve, reject) {
            _this.db.doc(path).get().then(function (success) {
                console.log("get document succsess", success.data());
                if (success.exists) {
                    var result = success.data();
                    resolve(result);
                }
                else {
                    reject("Bản ghi không tồn tại");
                }
                // this.progressController.subtract();
            }, function (error) {
                // this.progressController.subtract();
                console.log("get fail", error);
                reject(error);
            });
        });
    };
    FirebaseProvider.prototype.updateDocument = function (path, data) {
        var _this = this;
        console.log("firebase update document", path);
        // this.progressController.add();
        return new Promise(function (resolve, reject) {
            _this.db.doc(path).update(data).then(function (success) {
                console.log("update succsess", success);
                resolve();
                // this.progressController.subtract();
            }, function (error) {
                // this.progressController.subtract();
                console.log("update fail", error);
                reject();
            });
        });
    };
    FirebaseProvider.prototype.deleteDocument = function (path) {
        var _this = this;
        console.log("firebase delete document", path);
        // this.progressController.add();
        return new Promise(function (resolve, reject) {
            _this.db.doc(path).delete().then(function (success) {
                console.log("delete succsess", success);
                resolve();
                // this.progressController.subtract();
            }, function (error) {
                // this.progressController.subtract();
                console.log("delete fail", error);
                reject();
            });
        });
    };
    FirebaseProvider.prototype.getCollection = function (path, queries, orders, limit) {
        var _this = this;
        console.log("firebase get collection", path);
        // this.progressController.add();
        return new Promise(function (resolve, reject) {
            var ref = _this.db.collection(path);
            if (queries) {
                queries.forEach(function (query) {
                    ref = ref.where(query.field, query.operator, query.value);
                });
            }
            if (orders) {
                orders.forEach(function (order) {
                    ref = ref.orderBy(order.field, order.direction);
                });
            }
            if (limit) {
                ref = ref.limit(limit);
            }
            ref.get().then(function (querySnapshot) {
                console.log("firebase get collection success", querySnapshot);
                var result = [];
                querySnapshot.forEach(function (doc) {
                    var element = doc.data();
                    result.push(element);
                });
                // this.progressController.subtract();
                resolve(result);
            }, function (error) {
                // this.progressController.subtract();
                console.log("get collection fail", error);
                reject(error);
            });
        });
    };
    FirebaseProvider.prototype.fetchCollection = function (path, queries, orders, limit) {
        var _this = this;
        console.log("fetch data", path);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            //Chú ý rằng trong query chỉ áp dụng range filter cho 1 field (<, >, <=, >=)
            //Nếu query có range filter thì orderBy đầu tiên phải order theo field của range filter đó
            var ref = _this.db.collection(path);
            if (queries) {
                queries.forEach(function (query) {
                    ref = ref.where(query.field, query.operator, query.value);
                });
            }
            if (orders) {
                orders.forEach(function (order) {
                    ref = ref.orderBy(order.field, order.direction);
                });
            }
            if (limit) {
                ref = ref.limit(limit);
            }
            ref.onSnapshot(observer);
        });
    };
    FirebaseProvider.prototype.loginWithAccountPassword = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    FirebaseProvider.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signOut();
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"E:\ionic\dsd-15-master\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\dsd-15-master\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(350);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_firebase_firebase__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_app_controller_app_controller__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var firebaseConfig = {
    apiKey: "AIzaSyDk4vLSswi5iS8Pla2dnKhV3bx4uh8lX7o",
    authDomain: "dsd-15-28647.firebaseapp.com",
    databaseURL: "https://dsd-15-28647.firebaseio.com",
    projectId: "dsd-15-28647",
    storageBucket: "dsd-15-28647.appspot.com",
    messagingSenderId: "431639002564"
};
__WEBPACK_IMPORTED_MODULE_11_firebase___default.a.initializeApp(firebaseConfig);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/spray/spray.module#SprayPageModule', name: 'SprayPage', segment: 'spray', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tree-popup/tree-popup.module#TreePopupPageModule', name: 'TreePopupPage', segment: 'tree-popup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_firebase_firebase__["a" /* FirebaseProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_app_controller_app_controller__["a" /* AppControllerProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trees; });
var Trees = /** @class */ (function () {
    function Trees(data) {
        this.reset();
        if (data)
            this.parse(data);
    }
    Trees.prototype.reset = function () {
        this.firebaeId = "";
        this.name = "";
        this.id = "";
        this.waterNeed = 0;
        this.history = [];
        this.status = -1;
        this.left = "0px";
        this.top = "0px";
    };
    Trees.prototype.parse = function (data) {
        if (data.firebaeId)
            this.firebaeId = data.firebaeId;
        if (data.name)
            this.name = data.name;
        if (data.id)
            this.id = data.id;
        if (data.waterNeed)
            this.waterNeed = data.waterNeed;
        if (data.history)
            this.history = data.history;
        if (data.status)
            this.status = data.status;
        if (data.left)
            this.left = data.left + "px";
        if (data.top)
            this.top = data.top + "px";
    };
    return Trees;
}());

//# sourceMappingURL=tree.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // rootPage: any = "LoginPage";
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\ionic\dsd-15-master\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\ionic\dsd-15-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[327]);
//# sourceMappingURL=main.js.map