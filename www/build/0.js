webpackJsonp([0],{

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkSchedulePageModule", function() { return WorkSchedulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__work_schedule__ = __webpack_require__(552);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WorkSchedulePageModule = /** @class */ (function () {
    function WorkSchedulePageModule() {
    }
    WorkSchedulePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__work_schedule__["a" /* WorkSchedulePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__work_schedule__["a" /* WorkSchedulePage */]),
            ],
        })
    ], WorkSchedulePageModule);
    return WorkSchedulePageModule;
}());

//# sourceMappingURL=work-schedule.module.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkSchedulePage; });
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


/**
 * Generated class for the WorkSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorkSchedulePage = /** @class */ (function () {
    function WorkSchedulePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [];
        this.fakeData();
    }
    WorkSchedulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkSchedulePage');
    };
    WorkSchedulePage.prototype.fakeData = function () {
        this.items = [
            { color: "#E7EDA3", date: new Date("2018-03-02") },
            { color: "#F7B8ED", date: new Date("2018-03-07") },
            { color: "#93D8C8", date: new Date("2018-03-08") },
            { color: "#EDA3AE", date: new Date("2018-03-09") },
            { color: "#E7EDA3", date: new Date("2018-03-10") },
            { color: "#F7B8ED", date: new Date("2018-03-11") },
            { color: "#93D8C8", date: new Date("2018-03-12") },
            { color: "#EDA3AE", date: new Date("2018-03-13") }
        ];
    };
    WorkSchedulePage.prototype.goToDetail = function (item) {
        this.navCtrl.push("WorkScheduleDetailPage", { schedule: item });
    };
    WorkSchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-work-schedule',template:/*ion-inline-start:"/Users/xuanphuoc129/Documents/workspace/dsd-15/src/pages/work-schedule/work-schedule.html"*/'<!--\n  Generated template for the WorkSchedulePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-toolbar>\n        <ion-buttons left>\n          <button ion-button ion-only navPop>\n            <ion-icon name="arrow-back"></ion-icon>\n          </button>\n        </ion-buttons>\n    \n        <ion-title text-center>Lịch làm việc</ion-title>\n    \n        <ion-buttons right >\n          <button ion-button icon-only >\n            <ion-icon name="search"></ion-icon>\n          </button>\n        </ion-buttons>\n    \n    \n      </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content >\n  <div class="app-content">\n    <div class="date-bar" *ngFor="let item of items" [style.background]="item.color" tappable (click)="goToDetail(item)">\n      <span>Lịch làm việc ngày {{item.date | date: \'dd/MM/yyyy\'}}</span>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/xuanphuoc129/Documents/workspace/dsd-15/src/pages/work-schedule/work-schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], WorkSchedulePage);
    return WorkSchedulePage;
}());

//# sourceMappingURL=work-schedule.js.map

/***/ })

});
//# sourceMappingURL=0.js.map