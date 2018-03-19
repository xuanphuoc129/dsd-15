webpackJsonp([1],{

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkScheduleDetailPageModule", function() { return WorkScheduleDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__work_schedule_detail__ = __webpack_require__(550);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WorkScheduleDetailPageModule = /** @class */ (function () {
    function WorkScheduleDetailPageModule() {
    }
    WorkScheduleDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__work_schedule_detail__["a" /* WorkScheduleDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__work_schedule_detail__["a" /* WorkScheduleDetailPage */]),
            ],
        })
    ], WorkScheduleDetailPageModule);
    return WorkScheduleDetailPageModule;
}());

//# sourceMappingURL=work-schedule-detail.module.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkScheduleDetailPage; });
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
 * Generated class for the WorkScheduleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorkScheduleDetailPage = /** @class */ (function () {
    function WorkScheduleDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [];
        this.works = [];
        this.today = new Date();
        if (navParams.data["schedule"])
            this.today = navParams.get("schedule").date;
        this.fakeData();
    }
    WorkScheduleDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkScheduleDetailPage');
    };
    WorkScheduleDetailPage.prototype.fakeData = function () {
        this.items = [
            { id: "#123", name: "Lương Xuân Phước" },
            { id: "#124", name: "Bùi Thị thảo phương" },
            { id: "#125", name: "Trần thị anh thự" },
            { id: "#126", name: "Nguyễn Minh Huyền" },
            { id: "#127", name: "Nguyễn ngọc sơn" }
        ];
        this.works = [
            "Tưới cây khu vực C2",
            "Tưới cây khu vực C1",
            "Kiểm tra cây bị ngập úng",
            "Kiểm tra cây bị chết",
            "Kiểm tra cảm biến ở khu vực D7"
        ];
    };
    WorkScheduleDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-work-schedule-detail',template:/*ion-inline-start:"/Users/xuanphuoc129/Documents/workspace/dsd-15/src/pages/work-schedule-detail/work-schedule-detail.html"*/'<!--\n  Generated template for the WorkScheduleDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar>\n        <ion-buttons left>\n          <button ion-button icon-only navPop>\n            <ion-icon name="arrow-back"></ion-icon>\n          </button>\n        </ion-buttons>\n        <div class="date">\n          <div class="day-of-week normal-font">{{today | date: \'EEEE\' }}</div>\n          <div class="dateString small-font">{{today | date: \'dd/MM/yyyy\'}}</div>\n        </div>\n        <ion-buttons right class="opacity">\n          <button ion-button icon-only >\n            <ion-icon name="arrow-back"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="app-content">\n    <div class="row a3-items-center">\n      <div class="circle"></div>\n      <div class="title normal-font"><span>Danh sách nhân viên</span></div>\n    </div>\n    <div class="row">\n      <div class="line-container a3-container-center">\n        <div class="line"></div>\n      </div>\n      <div class="description">\n        <div class="row" *ngFor="let item of items">\n          <div class="id "><span>ID: {{item.id}}</span></div>\n          <div class="name"><span>Tên: {{item.name}}</span></div>\n        </div>\n      </div>\n    </div>\n\n    <div class="row a3-items-center" margin-top>\n        <div class="circle"></div>\n        <div class="title normal-font"><span>Nội dung công việc</span></div>\n      </div>\n      <div class="row">\n        <div class="line-container a3-container-center">\n          <div class="line"></div>\n        </div>\n        <div class="description">\n          <div class="row" *ngFor="let work of works">\n            <div class="id"><span> - {{work}}</span></div>\n          </div>\n        </div>\n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/xuanphuoc129/Documents/workspace/dsd-15/src/pages/work-schedule-detail/work-schedule-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], WorkScheduleDetailPage);
    return WorkScheduleDetailPage;
}());

//# sourceMappingURL=work-schedule-detail.js.map

/***/ })

});
//# sourceMappingURL=1.js.map