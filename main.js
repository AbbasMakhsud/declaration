(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar{\r\n  width: 15%;\r\n  height: 100vh;\r\n  background: #2f323e;\r\n  float: left;\r\n  position: relative;\r\n  left: -10rem;\r\n  transition: all 0.6s ease;\r\n  top: -10px;\r\n}\r\n\r\n.sidebar:hover{\r\n  left: -8px;\r\n  transition: all 0.6s ease;\r\n}\r\n\r\n.sidebar span{\r\n  width: 100%;\r\n  color: white;\r\n  display: block;\r\n  padding: 15px 0;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\n.sidebar span:hover{\r\n  background: #2cabe3;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <span routerLink=\"check\">Yoxla</span>\n  <span routerLink=\"add\">Daxil et</span>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Declaration';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: routes, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cpanel_cpanel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cpanel/cpanel.component */ "./src/app/cpanel/cpanel.component.ts");
/* harmony import */ var _cpanel_list_cpanel_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cpanel-list/cpanel-list.component */ "./src/app/cpanel-list/cpanel-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _check_check_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./check/check.component */ "./src/app/check/check.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: _cpanel_cpanel_component__WEBPACK_IMPORTED_MODULE_8__["CpanelComponent"],
    },
    {
        path: 'add',
        component: _cpanel_cpanel_component__WEBPACK_IMPORTED_MODULE_8__["CpanelComponent"],
    },
    {
        path: 'check',
        component: _check_check_component__WEBPACK_IMPORTED_MODULE_11__["CheckComponent"],
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _cpanel_cpanel_component__WEBPACK_IMPORTED_MODULE_8__["CpanelComponent"],
                _cpanel_list_cpanel_list_component__WEBPACK_IMPORTED_MODULE_9__["CpanelListComponent"],
                _check_check_component__WEBPACK_IMPORTED_MODULE_11__["CheckComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebaseConfig),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/check/check.component.css":
/*!*******************************************!*\
  !*** ./src/app/check/check.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/check/check.component.html":
/*!********************************************!*\
  !*** ./src/app/check/check.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select name=\"\" id=\"select\" (change)=\"getSelected($event)\" >\n  <option  hidden >Məhsulu seçin</option>\n  <option *ngFor=\"let item of dataArray\" [value]=\"item.product\" (click)=\"getSelected(item.product)\">{{item.product}}</option>\n</select>\n\n\n\n<form action=\"\" class=\"ml-0 pl-0 mt-5\" *ngIf=\"selectedRow\">\n  <div  class=\"col-6 float-left ml-0 pl-0\" >\n    <div class=\"form-group col-4 float-left ml-0 pl-0\" >\n      <label>Məhsul</label>\n      <input class=\"form-control\" [value]=\"selectedRow.product\">\n    </div>\n    <div class=\"form-group col-4 float-left\">\n      <label>Məhsulun kodu</label>\n      <input class=\"form-control\" [value]=\"selectedRow.product_type\">\n    </div>\n\n    <div class=\"form-group col-4 float-left\">\n      <label>İcazə verilən hədd</label>\n      <input class=\"form-control\" [value]=\"selectedRow.allow_number\" [ngClass]=\" bigger ? 'alert alert-danger' : ''\">\n      <div class=\"alert alert-danger\" *ngIf=\"bigger\">\n        Yoxlanılmalıdır\n      </div>\n      <div class=\"alert alert-success\" *ngIf=\"smaller\">\n        Keçirilə bilər\n      </div>\n      <div class=\"alert alert-info\" *ngIf=\"warning\">\n        Brutto çəki Netto çəkidən kiçik ola bilməz\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"col-3 float-left\">\n    <div class=\"form-group col-6 float-left\">\n      <label>Brutto</label>\n      <input type=\"number\" class=\"form-control\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"brutto\">\n    </div>\n\n    <div class=\"form-group col-6 float-left\">\n      <label>Netto</label>\n      <input type=\"number\" class=\"form-control\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"netto\">\n    </div>\n  </div>\n\n  <button class=\"btn btn-primary offset-3 col-2 \" (click)=\"checkDifference()\">Yoxla</button>\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/check/check.component.ts":
/*!******************************************!*\
  !*** ./src/app/check/check.component.ts ***!
  \******************************************/
/*! exports provided: CheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckComponent", function() { return CheckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cpanel_services_cpanel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cpanel/services/cpanel.service */ "./src/app/cpanel/services/cpanel.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckComponent = /** @class */ (function () {
    function CheckComponent(cpanelService) {
        this.cpanelService = cpanelService;
        this.dataArray = [];
    }
    CheckComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cpanelService.getData().subscribe(function (data) {
            _this.dataArray = data.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
        });
    };
    CheckComponent.prototype.getSelected = function (product) {
        var _this = this;
        this.dataArray.forEach(function (data) {
            if (product.target.value == data.product) {
                _this.selectedRow = data;
            }
        });
        this.bigger = false;
        this.smaller = false;
        this.warning = false;
        this.brutto = null;
        this.netto = null;
    };
    CheckComponent.prototype.checkDifference = function () {
        if (this.brutto > 0 && this.netto > 0) {
            this.difference = this.brutto - this.netto;
            if (this.difference > this.selectedRow.allow_number) {
                this.bigger = true;
                this.smaller = false;
                this.warning = false;
            }
            else if (this.difference > 0 && this.difference < this.selectedRow.allow_number) {
                this.smaller = true;
                this.bigger = false;
                this.warning = false;
            }
            else if (this.difference < 0) {
                this.bigger = false;
                this.smaller = false;
                this.warning = true;
            }
        }
    };
    CheckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-check',
            template: __webpack_require__(/*! ./check.component.html */ "./src/app/check/check.component.html"),
            styles: [__webpack_require__(/*! ./check.component.css */ "./src/app/check/check.component.css")]
        }),
        __metadata("design:paramtypes", [_cpanel_services_cpanel_service__WEBPACK_IMPORTED_MODULE_1__["CpanelService"]])
    ], CheckComponent);
    return CheckComponent;
}());



/***/ }),

/***/ "./src/app/cpanel-list/cpanel-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/cpanel-list/cpanel-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-dark td{\r\n  border: #ffffff !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/cpanel-list/cpanel-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/cpanel-list/cpanel-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-sm\">\n  <thead>\n  <th>Məhsul</th>\n  <th>Kod</th>\n  <th>Hədd</th>\n  <th></th>\n  </thead>\n\n  <ng-container *ngFor=\"let list of dataArray\">\n    <tr class=\"table-dark\">\n      <td>{{list.product}}</td>\n      <td>{{list.product_type}}</td>\n      <td>{{list.allow_number}}</td>\n      <td>\n        <button class=\"btn btn-outline-info\" (click)=\"this.cpanelService.populateList(list)\" style=\"margin-right: 10px\">Düzəlt</button>\n        <button class=\"btn btn-outline-danger\" (click)=\"onDelete(list.$key)\">Sil</button>\n      </td>\n    </tr>\n  </ng-container>\n</table>\n\n<div class=\"alert alert-danger\" *ngIf=\"succesfullyDeleted\">\n  Məlumat uğurla silindi\n</div>\n\n"

/***/ }),

/***/ "./src/app/cpanel-list/cpanel-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/cpanel-list/cpanel-list.component.ts ***!
  \******************************************************/
/*! exports provided: CpanelListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpanelListComponent", function() { return CpanelListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cpanel_services_cpanel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cpanel/services/cpanel.service */ "./src/app/cpanel/services/cpanel.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CpanelListComponent = /** @class */ (function () {
    function CpanelListComponent(cpanelService) {
        this.cpanelService = cpanelService;
        this.dataArray = [];
    }
    CpanelListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cpanelService.getData().subscribe(function (data) {
            _this.dataArray = data.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
        });
    };
    CpanelListComponent.prototype.onDelete = function ($key) {
        var _this = this;
        if (confirm('Bu məlumatı silməyə əminsinizmi?')) {
            this.cpanelService.deleteData($key);
            this.succesfullyDeleted = true;
            setTimeout(function () { return _this.succesfullyDeleted = false; }, 2000);
        }
    };
    CpanelListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cpanel-list',
            template: __webpack_require__(/*! ./cpanel-list.component.html */ "./src/app/cpanel-list/cpanel-list.component.html"),
            styles: [__webpack_require__(/*! ./cpanel-list.component.css */ "./src/app/cpanel-list/cpanel-list.component.css")]
        }),
        __metadata("design:paramtypes", [_cpanel_services_cpanel_service__WEBPACK_IMPORTED_MODULE_1__["CpanelService"]])
    ], CpanelListComponent);
    return CpanelListComponent;
}());



/***/ }),

/***/ "./src/app/cpanel/cpanel.component.css":
/*!*********************************************!*\
  !*** ./src/app/cpanel/cpanel.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".validators{\r\n  color: #dc3545;\r\n  position: relative;\r\n  top: -10px;\r\n\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/cpanel/cpanel.component.html":
/*!**********************************************!*\
  !*** ./src/app/cpanel/cpanel.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-5 col-md-5\">\n      <form action=\"\" [formGroup]=\"this.cpanelService.form\"  (ngSubmit)=\"onSubmit()\">\n\n        <input type=\"hidden\" formControlName=\"$key\">\n          <div class=\"form-group\">\n          <label>Məhsul</label>\n          <input formControlName=\"product\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.product.errors}\">\n        </div>\n\n        <div class=\"validators\" *ngIf=\"submitted && formControls.product.errors\">\n          Məhsul adı yazılmalıdır\n        </div>\n\n        <div class=\"form-group\">\n          <label>Məhsulun kodu</label>\n          <input formControlName=\"product_type\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.product_type.errors}\">\n        </div>\n\n        <div class=\"validators\" *ngIf=\"submitted && formControls.product_type.errors\">\n          Məhsulun kodu yazılmalıdır\n        </div>\n\n        <div class=\"form-group\">\n          <label>İcazə verilən hədd</label>\n          <input formControlName=\"allow_number\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.allow_number.errors}\" type=\"number\">\n        </div>\n\n        <div class=\"validators\" *ngIf=\"submitted && formControls.allow_number.errors\">\n          İcazə verilən hədd\n        </div>\n\n\n        <div class=\"form-group\">\n          <input type=\"submit\" class=\"btn btn-primary\" value=\"Əlavə et\" >\n        </div>\n      </form>\n      <div class=\"alert alert-info\" *ngIf=\"submmittedSuccesfully\">\n        Əməliyyat uğurla başa çatdı\n      </div>\n    </div>\n\n    <div class=\"offset-1 col-lg-6 col-md-6\">\n      <app-cpanel-list></app-cpanel-list>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/cpanel/cpanel.component.ts":
/*!********************************************!*\
  !*** ./src/app/cpanel/cpanel.component.ts ***!
  \********************************************/
/*! exports provided: CpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpanelComponent", function() { return CpanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cpanel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/cpanel.service */ "./src/app/cpanel/services/cpanel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CpanelComponent = /** @class */ (function () {
    function CpanelComponent(cpanelService) {
        this.cpanelService = cpanelService;
        this.formControls = this.cpanelService.form.controls;
    }
    CpanelComponent.prototype.ngOnInit = function () {
    };
    CpanelComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.cpanelService.form.valid) {
            if (this.cpanelService.form.get('$key').value == null) {
                this.cpanelService.insertData(this.cpanelService.form.value);
            }
            else {
                this.cpanelService.updateData(this.cpanelService.form.value);
            }
        }
        this.submmittedSuccesfully = true;
        setTimeout(function () { return _this.submmittedSuccesfully = false; }, 2000);
        this.submitted = false;
        this.cpanelService.form.reset();
    };
    CpanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cpanel',
            template: __webpack_require__(/*! ./cpanel.component.html */ "./src/app/cpanel/cpanel.component.html"),
            styles: [__webpack_require__(/*! ./cpanel.component.css */ "./src/app/cpanel/cpanel.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cpanel_service__WEBPACK_IMPORTED_MODULE_1__["CpanelService"]])
    ], CpanelComponent);
    return CpanelComponent;
}());



/***/ }),

/***/ "./src/app/cpanel/services/cpanel.service.ts":
/*!***************************************************!*\
  !*** ./src/app/cpanel/services/cpanel.service.ts ***!
  \***************************************************/
/*! exports provided: CpanelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpanelService", function() { return CpanelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CpanelService = /** @class */ (function () {
    function CpanelService(firebase) {
        this.firebase = firebase;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            product: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            product_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            allow_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    CpanelService.prototype.getData = function () {
        this.list = this.firebase.list('declaration');
        return this.list.snapshotChanges();
    };
    CpanelService.prototype.insertData = function (panel_data) {
        this.list.push({
            product: panel_data.product,
            product_type: panel_data.product_type,
            allow_number: panel_data.allow_number
        });
    };
    CpanelService.prototype.populateList = function (list) {
        this.form.setValue(list);
    };
    CpanelService.prototype.updateData = function (list) {
        this.list.update(list.$key, {
            product: list.product,
            product_type: list.product_type,
            allow_number: list.allow_number,
        });
    };
    CpanelService.prototype.deleteData = function ($key) {
        this.list.remove($key);
    };
    CpanelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], CpanelService);
    return CpanelService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyA9GtuwsTxSEXXW8uyrKVWstzzMm96k4ec',
        authDomain: 'birjam-58061.firebaseapp.com',
        databaseURL: 'https://birjam-58061.firebaseio.com',
        projectId: 'birjam-58061',
        storageBucket: 'birjam-58061.appspot.com',
        messagingSenderId: '704866787324'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP\Desktop\Abasito\Declaration\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map