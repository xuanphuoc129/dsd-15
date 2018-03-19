webpackJsonp([7],{

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailTreePageModule", function() { return DetailTreePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_tree__ = __webpack_require__(545);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailTreePageModule = /** @class */ (function () {
    function DetailTreePageModule() {
    }
    DetailTreePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detail_tree__["a" /* DetailTreePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail_tree__["a" /* DetailTreePage */]),
            ],
        })
    ], DetailTreePageModule);
    return DetailTreePageModule;
}());

//# sourceMappingURL=detail-tree.module.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailTreePage; });
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
 * Generated class for the DetailTreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailTreePage = /** @class */ (function () {
    function DetailTreePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = "Thông tin cây";
    }
    DetailTreePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailTreePage');
    };
    DetailTreePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-tree',template:/*ion-inline-start:"/Users/xuanphuoc129/Documents/workspace/dsd-15/src/pages/detail-tree/detail-tree.html"*/'<!--\n  Generated template for the DetailTreePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content>\n  <div class="backdrop" navPop tappable></div>\n<div class="pop-up">\n  <div class="header-popup">\n    <span class="title">{{title}}</span>\n    <div class="btn-close a3-container-center" navPop>\n      <ion-icon name="close"></ion-icon>\n    </div>\n  </div>\n  <div class="content">\n    <div class="row">\n      <div class="title-content"><span>Tên cây: </span></div>\n      <div class="description"><span>Cây Phượng</span></div>\n    </div>\n    <div class="row">\n      <div class="title-content"><span>Mã ID: </span></div>\n      <div class="description"><span>#123</span></div>\n    </div>\n    <div class="row a3-items-center">\n      <div class="title-content"><span>Trạng thái: </span></div>\n      <div class="description"><span>Thiếu nước</span></div>\n      <div class="circle red"></div>\n    </div>\n    <div class="title-content"><span>Lịch sử tưới cây</span></div>\n    <div class="description">\n      <div text-left><span>- Ngày 12/03/2018 đã tưới 2000ml</span></div>\n      <div text-left><span>- Ngày 10/03/2018 đã tưới 2000ml</span></div>\n      <div text-left><span>- Ngày 09/03/2018 đã tưới 2000ml</span></div>\n      <div text-left><span>- Ngày 08/03/2018 đã tưới 2000ml</span></div>\n      <div text-left><span>- Ngày 06/03/2018 đã tưới 2000ml</span></div>\n    </div>\n  </div>\n  <div class="btn-group">\n    <button ion-button class="width-40 btn-red">Báo cây chết</button>\n    <button ion-button class="width-40 btn-green">Đánh dấu đã tưới</button>\n  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/xuanphuoc129/Documents/workspace/dsd-15/src/pages/detail-tree/detail-tree.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetailTreePage);
    return DetailTreePage;
}());

//# sourceMappingURL=detail-tree.js.map

/***/ })

});
//# sourceMappingURL=7.js.map