webpackJsonp([8],{

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppControllerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_firebase__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_tree__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scroll_controller__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(65);
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
    function AppControllerProvider(loadingCtrl, firebaseService, mModalController) {
        this.loadingCtrl = loadingCtrl;
        this.firebaseService = firebaseService;
        this.mModalController = mModalController;
        this.trees = [];
        this.loadedDataChanel = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.isLoadTree = false;
        console.log('Hello AppControllerProvider Provider');
        this.scrollController = new __WEBPACK_IMPORTED_MODULE_4__scroll_controller__["a" /* ScrollController */]();
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
    AppControllerProvider.prototype.showModal = function (page, params) {
        this.modal = this.mModalController.create(page, params ? params : null);
        this.modal.present();
    };
    AppControllerProvider.prototype.closeModal = function () {
        this.modal.dismiss();
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
    AppControllerProvider.prototype.showLoading = function (content, cssClass) {
        if (this.loading) {
            this.loading.dismiss();
        }
        this.loading = this.loadingCtrl.create({
            dismissOnPageChange: true,
            content: content ? content : "Xin đợi!",
            cssClass: cssClass ? cssClass : ""
        });
        this.loading.present();
    };
    AppControllerProvider.prototype.hideLoading = function () {
        if (this.loading) {
            this.loading.dismiss().catch(function () {
            });
        }
    };
    AppControllerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* LoadingController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__firebase_firebase__["a" /* FirebaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__firebase_firebase__["a" /* FirebaseProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* ModalController */]) === "function" && _c || Object])
    ], AppControllerProvider);
    return AppControllerProvider;
    var _a, _b, _c;
}());

//# sourceMappingURL=app-controller.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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



var HomePage = /** @class */ (function () {
    function HomePage(appController, navCtrl) {
        this.appController = appController;
        this.navCtrl = navCtrl;
        this.link = "./assets/imgs/logo.png";
        this.trees = [];
        this.loadButton();
    }
    HomePage.prototype.loadButton = function () {
        this.items = [
            { id: 1, title: 'Tưới cây', component: "MapPage", push: true },
            { id: 2, title: 'Bản đồ', component: "MapPage", push: true },
            { id: 3, title: 'Xem lịch làm việc', component: "WorkSchedulePage", push: true },
        ];
    };
    HomePage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.push) {
            this.navCtrl.push(page.component, { title: page.title });
            return;
        }
    };
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
            var status = this.appController.randomIntFromInterval(1, 3);
            var tree = this.createTree(status, $event.offsetX, $event.offsetY);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/xuanphuoc129/Documents/workspace/dsd-15/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-icon item-end id="icon" name="bell"></ion-icon>\n    <ion-title text-center>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="app-content">\n      <img id="one" src="../assets/imgs/tree.png" />\n      <div class="btn-group">\n        <button id="btn" ion-button *ngFor="let item of items" (click)="openPage(item)">{{item.title}}</button>\n        <button id="btn" ion-button >Đăng xuất</button>\n      </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/xuanphuoc129/Documents/workspace/dsd-15/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_app_controller_app_controller__["a" /* AppControllerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_app_controller_app_controller__["a" /* AppControllerProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
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
	"../pages/detail-tree/detail-tree.module": [
		537,
		7
	],
	"../pages/login/login.module": [
		538,
		6
	],
	"../pages/map/map.module": [
		539,
		5
	],
	"../pages/notification/notification.module": [
		540,
		4
	],
	"../pages/spray/spray.module": [
		541,
		3
	],
	"../pages/tree-popup/tree-popup.module": [
		543,
		2
	],
	"../pages/work-schedule-detail/work-schedule-detail.module": [
		542,
		1
	],
	"../pages/work-schedule/work-schedule.module": [
		544,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_firestore__ = __webpack_require__(458);
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

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(349);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_firebase_firebase__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(527);
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
                        { loadChildren: '../pages/detail-tree/detail-tree.module#DetailTreePageModule', name: 'DetailTreePage', segment: 'detail-tree', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/spray/spray.module#SprayPageModule', name: 'SprayPage', segment: 'spray', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/work-schedule-detail/work-schedule-detail.module#WorkScheduleDetailPageModule', name: 'WorkScheduleDetailPage', segment: 'work-schedule-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tree-popup/tree-popup.module#TreePopupPageModule', name: 'TreePopupPage', segment: 'tree-popup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/work-schedule/work-schedule.module#WorkSchedulePageModule', name: 'WorkSchedulePage', segment: 'work-schedule', priority: 'low', defaultHistory: [] }
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

/***/ 497:
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
        if (data.firebase_id)
            this.firebaeId = data.firebase_id;
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

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ScrollItems */
/* unused harmony export ScrollDiv */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_loop__ = __webpack_require__(499);

// import { AppLoop } from '../app-loop';
var ScrollItems = /** @class */ (function () {
    function ScrollItems(id) {
        this.mElement = null;
        this.mEventListenerCreated = false;
        this.mScrolling = false;
        this.mTouchStart = false;
        this.mTouchEnd = false;
        this.mIdleTime = 0;
        this.mScrollEndListener = null;
        this.mCenterChangeListener = null;
        this.mItemHeight = 40;
        this.mFocusIndex = 0;
        this.mNumberItems = 0;
        this.mElement = document.getElementById(id);
        if (this.mElement && this.mElement.childElementCount > 0) {
            var node = this.mElement.children.item(0);
            if (node) {
                this.mItemHeight = node.clientHeight;
            }
        }
        this.mNumberItems = this.mElement.childElementCount - 3;
    }
    ScrollItems.prototype.setScrollEndListener = function (listener) {
        this.mScrollEndListener = listener;
    };
    ScrollItems.prototype.setCenterChangedListend = function (listener) {
        this.mCenterChangeListener = listener;
    };
    ScrollItems.prototype.isScrollingByTouch = function () {
        return this.mScrolling && this.mTouchStart;
    };
    ScrollItems.prototype.createListener = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__app_loop__["a" /* AppLoop */].getInstance().scheduleUpdate(this);
        if (!this.mElement)
            return;
        if (this.mEventListenerCreated)
            return;
        this.mEventListenerCreated = true;
        this.mElement.addEventListener("touchstart", function (event) {
            _this.mTouchStart = true;
            _this.mTouchEnd = false;
            _this.mScrolling = false;
            _this.mIdleTime = 0;
        });
        this.mElement.addEventListener("touchend", function (event) {
            _this.mTouchEnd = true;
            _this.mIdleTime = 0;
        });
        this.mElement.addEventListener("scroll", function (event) {
            _this.mScrolling = true;
            _this.mIdleTime = 0;
            if (_this.mTouchStart && !_this.mTouchEnd) {
                _this.onScroll();
            }
        });
    };
    ScrollItems.prototype.onScrollStopped = function () {
        if (this.mScrollEndListener) {
            this.mScrollEndListener(this.mElement.scrollTop);
        }
        this.mTouchEnd = false;
        this.mTouchStart = false;
        this.mScrolling = false;
        this.mIdleTime = 0;
    };
    ScrollItems.prototype.onUpdate = function () {
        if (this.mScrolling && this.mTouchEnd) {
            this.mIdleTime++;
            if (this.mIdleTime > 6) {
                this.onScroll();
                this.onScrollStopped();
            }
        }
    };
    ScrollItems.prototype.getScrollOfItemIndex = function (itemIndex) {
        return this.mItemHeight * itemIndex;
    };
    ScrollItems.prototype.getCurrentFocusElement = function (recalculate) {
        if (recalculate === void 0) { recalculate = false; }
        if (recalculate) {
            this.mFocusIndex = this.getElementInFocus(this.mElement.scrollTop);
        }
        return this.mFocusIndex;
    };
    ScrollItems.prototype.getCurrentScrollLeftFocusElement = function (recalculate) {
        if (recalculate === void 0) { recalculate = false; }
        if (recalculate) {
            this.mFocusIndex = this.getElementInFocus(this.mElement.scrollLeft);
        }
        return this.mFocusIndex;
    };
    ScrollItems.prototype.getElementInFocus = function (scrollTop) {
        var focusIndex = Math.floor((scrollTop + this.mItemHeight / 2) / this.mItemHeight);
        if (focusIndex < 0)
            focusIndex = 0;
        else if (focusIndex > this.mNumberItems)
            focusIndex = this.mNumberItems;
        return focusIndex;
    };
    ScrollItems.prototype.onScroll = function () {
        if (!this.mElement)
            return;
        var focusIndex = this.getElementInFocus(this.mElement.scrollTop);
        // console.log(focusIndex);
        if (this.mFocusIndex != focusIndex) {
            this.mFocusIndex = focusIndex;
            if (this.mCenterChangeListener)
                this.mCenterChangeListener(this.mFocusIndex);
        }
    };
    return ScrollItems;
}());

var ScrollDiv = /** @class */ (function () {
    function ScrollDiv(id) {
        this.id = "";
        this.alpha = 0.2;
        this.epsilon = 1;
        this.done = false;
        /**1 : top, 2 : bottom, 3 : custom */
        this.direction = 1;
        this.top = 0;
        this.left = 0;
        this.mCallback = null;
        this.id = id;
        this.element = document.getElementById(id);
    }
    ScrollDiv.prototype.setOption = function (option) {
        if (option) {
            this.mCallback = option.callback;
            this.alpha = option.alpha;
            if (option.epsilon)
                this.epsilon = option.epsilon;
        }
    };
    ScrollDiv.prototype.getId = function () {
        return this.id;
    };
    ScrollDiv.prototype.onUpdate = function () {
        if (this.done)
            return;
        if (this.direction == 1) {
            var dScroll = this.alpha * (0 - this.element.scrollTop);
            if (Math.abs(dScroll) <= this.epsilon) {
                this.element.scrollTop = 0;
                this.done = true;
            }
            else {
                this.element.scrollTop += dScroll;
            }
        }
        else if (this.direction == 2) {
            var dScroll = this.alpha * (this.element.scrollHeight - this.element.clientHeight - this.element.scrollTop);
            if (Math.abs(dScroll) <= this.epsilon) {
                this.element.scrollTop = this.element.scrollHeight;
                this.done = true;
            }
            else {
                this.element.scrollTop += dScroll;
            }
        }
        else if (this.direction == 3) {
            var dScroll = this.alpha * (this.top - this.element.scrollTop);
            if (Math.abs(dScroll) <= this.epsilon) {
                this.element.scrollTop = this.top;
                this.done = true;
            }
            else {
                this.element.scrollTop += dScroll;
            }
        }
        else if (this.direction == 4) {
            var dScroll = this.alpha * (this.left - this.element.scrollLeft);
            if (Math.abs(dScroll) <= this.epsilon) {
                this.element.scrollLeft = this.left;
                this.done = true;
            }
            else {
                this.element.scrollLeft += dScroll;
            }
        }
    };
    ScrollDiv.prototype.scrollToLeft = function (left) {
        this.left = left;
        this.direction = 4;
    };
    ScrollDiv.prototype.scrollTo = function (top) {
        this.top = top;
        this.direction = 3;
        this.done = false;
    };
    ScrollDiv.prototype.scrollToTop = function () {
        this.direction = 1;
    };
    ScrollDiv.prototype.scrollToBottom = function () {
        this.direction = 2;
    };
    ScrollDiv.prototype.hasDone = function () {
        return this.done;
    };
    return ScrollDiv;
}());

var ScrollController = /** @class */ (function () {
    function ScrollController() {
        this.items = new Map();
        this.mRunning = false;
    }
    ScrollController.prototype.checkUpdate = function () {
        if (this.mRunning)
            return;
        __WEBPACK_IMPORTED_MODULE_0__app_loop__["a" /* AppLoop */].getInstance().scheduleUpdate(this);
        this.mRunning = true;
    };
    ScrollController.prototype.doScroll = function (divID, top, option) {
        this.checkUpdate();
        var item = this.getItem(divID);
        if (!item) {
            item = new ScrollDiv(divID);
            item.setOption(option);
            item.scrollTo(top);
            this.items.set(divID, item);
        }
    };
    ScrollController.prototype.doScrollLeft = function (divID, left, option) {
        this.checkUpdate();
        var item = this.getItem(divID);
        if (!item) {
            item = new ScrollDiv(divID);
            item.setOption(option);
            item.scrollToLeft(left);
            this.items.set(divID, item);
        }
    };
    ScrollController.prototype.doScrollTop = function (divID, option) {
        this.checkUpdate();
        var item = this.getItem(divID);
        if (!item) {
            item = new ScrollDiv(divID);
            item.setOption(option);
            item.scrollToTop();
            this.items.set(divID, item);
        }
    };
    ScrollController.prototype.doScrollBottom = function (divID, option) {
        this.checkUpdate();
        var item = this.getItem(divID);
        if (!item) {
            item = new ScrollDiv(divID);
            item.setOption(option);
            item.scrollToBottom();
            this.items.set(divID, item);
        }
    };
    ScrollController.prototype.getItem = function (divID) {
        if (this.items.has(divID))
            return this.items.get(divID);
        return null;
    };
    ScrollController.prototype.onUpdate = function () {
        var _this = this;
        if (this.items.size > 0) {
            this.items.forEach(function (item) {
                item.onUpdate();
                if (item.hasDone()) {
                    if (item.mCallback) {
                        item.mCallback();
                        item.mCallback = null;
                    }
                    _this.items.delete(item.getId());
                    return;
                }
            });
        }
    };
    return ScrollController;
}());

//# sourceMappingURL=scroll-controller.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLoop; });
var AppLoop = /** @class */ (function () {
    function AppLoop() {
        this.mAnimationFrameID = -1;
        this.mAnimationFrameRunning = false;
        this._objects = [];
        this._unique_id = 0;
        this.mRunning = false;
    }
    AppLoop.getInstance = function () {
        if (this._instance == null) {
            this._instance = new AppLoop();
            this._instance.start();
        }
        return this._instance;
    };
    AppLoop.prototype.start = function () {
        if (this.mRunning)
            return;
        this.mRunning = true;
        this.run();
    };
    AppLoop.prototype.stop = function () {
        cancelAnimationFrame(this.mAnimationFrameID);
        this.mAnimationFrameID = -1;
        this.mAnimationFrameRunning = false;
        this.mRunning = false;
    };
    AppLoop.prototype.pause = function () {
        this.mRunning = false;
    };
    AppLoop.prototype.resume = function () {
        this.mRunning = true;
    };
    AppLoop.prototype.scheduleUpdate = function (object) {
        this.unScheduleUpdate(object);
        object.uniqueID = this._unique_id++;
        this._objects.push(object);
    };
    AppLoop.prototype.unScheduleUpdate = function (object) {
        if (object.uniqueID == undefined)
            return;
        var idx = -1;
        for (var i = 0; i < this._objects.length; i++) {
            var obj = this._objects[i];
            if (obj.uniqueID !== undefined) {
                idx = i;
                break;
            }
        }
        if (idx != -1) {
            this._objects.splice(idx, 1);
        }
    };
    AppLoop.prototype.unScheduleUpdateAll = function () {
        this._objects = [];
    };
    AppLoop.prototype.run = function () {
        var _this = this;
        this.mAnimationFrameRunning = true;
        this.mAnimationFrameID = requestAnimationFrame(function () {
            _this.onUpdate();
            if (_this.mAnimationFrameRunning)
                _this.run();
        });
    };
    AppLoop.prototype.onUpdate = function () {
        if (!this.mRunning)
            return;
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.onUpdate();
        }
    };
    AppLoop._instance = null;
    return AppLoop;
}());

//# sourceMappingURL=app-loop.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(179);
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
        this.rootPage = "LoginPage";
        // rootPage: any = HomePage;
        this.isSelectPage = 0;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { id: 0, title: 'Trang chủ', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], push: false },
            { id: 1, title: 'Bản đồ', component: "MapPage", push: true },
            { id: 2, title: 'Tưới cây', component: "MapPage", push: true },
            { id: 3, title: 'Xem lịch làm việc', component: "WorkSchedulePage", push: true },
            { id: 4, title: 'Thông báo', component: "NotificationPage", push: true }
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
        if (page.push) {
            this.nav.push(page.component, { title: page.title });
            return;
        }
        this.nav.setRoot(page.component);
        this.isSelectPage = page.id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/xuanphuoc129/Documents/workspace/dsd-15/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n     <ion-row align-items-center>\n       <ion-col col-3>\n         <div class="circle a3-container-center">\n           <img src="./assets/imgs/tree.png" alt="">\n         </div>\n       </ion-col>\n       <ion-col >\n         <div class="name big-font" text-center><span>Nguyen Xuan</span></div>\n         <div class="job small-font" text-center><span>Nhan vien tuoi cay</span></div>\n       </ion-col>\n       </ion-row>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list no-lines>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" [class.active]="isSelectPage == p.id">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/xuanphuoc129/Documents/workspace/dsd-15/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
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
            selector: 'page-list',template:/*ion-inline-start:"/Users/xuanphuoc129/Documents/workspace/dsd-15/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/xuanphuoc129/Documents/workspace/dsd-15/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[326]);
//# sourceMappingURL=main.js.map