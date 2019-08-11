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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-memberlist></app-memberlist>"

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
        this.title = 'app';
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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _memberlist_memberlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./memberlist/memberlist.component */ "./src/app/memberlist/memberlist.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../material-module */ "./src/material-module.ts");
/* harmony import */ var _formdialog_formdialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formdialog/formdialog.component */ "./src/app/formdialog/formdialog.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _memberlist_memberlist_component__WEBPACK_IMPORTED_MODULE_4__["MemberlistComponent"],
                _formdialog_formdialog_component__WEBPACK_IMPORTED_MODULE_6__["FormdialogComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"]
            ],
            entryComponents: [_formdialog_formdialog_component__WEBPACK_IMPORTED_MODULE_6__["FormdialogComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/formdialog/formdialog.component.css":
/*!*****************************************************!*\
  !*** ./src/app/formdialog/formdialog.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/formdialog/formdialog.component.html":
/*!******************************************************!*\
  !*** ./src/app/formdialog/formdialog.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create/Edit</h1>\n<form [formGroup]=\"checkoutForm\">\n<div mat-dialog-content>\n  <mat-form-field>\n    <input matInput [value]=\"data.firstName\" placeholder=\"first name\" formControlName=\"firstName\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput [value]=\"data.lastName\" placeholder=\"last name\" formControlName=\"lastName\">\n  </mat-form-field>\n  <mat-form-field>\n      <input matInput [value]=\"data.age\" placeholder=\"age\" formControlName=\"age\">\n  </mat-form-field>\n  <mat-form-field>\n    <mat-select placeholder=\"Contact\" formControlName=\"contact\">\n      <mat-option value=\"line\">Line</mat-option>\n      <mat-option value=\"email\">Email</mat-option>\n      <mat-option value=\"facebook\">Facebook</mat-option>\n    </mat-select>\n  </mat-form-field>\n  \n  <mat-form-field *ngIf=\"checkoutForm.value.contact === 'line'\">\n    <input matInput [value]=\"data.line\" placeholder=\"line\" formControlName=\"line\">\n  </mat-form-field>\n  <mat-form-field *ngIf=\"checkoutForm.value.contact === 'email'\">\n    <input matInput [value]=\"data.email\" placeholder=\"email\" formControlName=\"email\">\n  </mat-form-field>\n  <mat-form-field *ngIf=\"checkoutForm.value.contact === 'facebook'\">\n      <input matInput [value]=\"data.facebook\" placeholder=\"facebook\" formControlName=\"facebook\">\n    </mat-form-field>\n  \n</div>\n<div mat-dialog-actions>\n  <button mat-raised-button (click)=\"onNoClick()\">cancel</button>\n  <button mat-raised-button (click)=\"onSave(checkoutForm.value, data.id)\">save</button>\n</div>\n</form>"

/***/ }),

/***/ "./src/app/formdialog/formdialog.component.ts":
/*!****************************************************!*\
  !*** ./src/app/formdialog/formdialog.component.ts ***!
  \****************************************************/
/*! exports provided: FormdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormdialogComponent", function() { return FormdialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _member_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../member-model */ "./src/app/member-model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _memberlist_memberlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../memberlist/memberlist.service */ "./src/app/memberlist/memberlist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var FormdialogComponent = /** @class */ (function () {
    function FormdialogComponent(dialogRef, formBuilder, memberService, data) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.memberService = memberService;
        this.data = data;
        this.checkoutForm = this.formBuilder.group(data);
    }
    FormdialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FormdialogComponent.prototype.onSave = function (value, id) {
        if (id === undefined) {
            this.memberService.addMember(value);
        }
        else {
            this.memberService.editMember(id, value);
        }
        this.dialogRef.close();
    };
    FormdialogComponent.prototype.ngOnInit = function () {
    };
    FormdialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-formdialog',
            template: __webpack_require__(/*! ./formdialog.component.html */ "./src/app/formdialog/formdialog.component.html"),
            styles: [__webpack_require__(/*! ./formdialog.component.css */ "./src/app/formdialog/formdialog.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _memberlist_memberlist_service__WEBPACK_IMPORTED_MODULE_4__["MemberlistService"],
            _member_model__WEBPACK_IMPORTED_MODULE_2__["Member"]])
    ], FormdialogComponent);
    return FormdialogComponent;
}());



/***/ }),

/***/ "./src/app/member-model.ts":
/*!*********************************!*\
  !*** ./src/app/member-model.ts ***!
  \*********************************/
/*! exports provided: Member */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Member", function() { return Member; });
var Member = /** @class */ (function () {
    function Member() {
        this.id = undefined;
        this.firstName = '';
        this.lastName = '';
        this.age = '';
        this.line = '';
        this.email = '';
        this.facebook = '';
    }
    return Member;
}());



/***/ }),

/***/ "./src/app/memberlist/memberlist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/memberlist/memberlist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/memberlist/memberlist.component.html":
/*!******************************************************!*\
  !*** ./src/app/memberlist/memberlist.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #memlist [dataSource]=\"getMembers()\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <ng-container matColumnDef=\"firstName\">\n    <th mat-header-cell *matHeaderCellDef> First Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.firstName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"lastName\">\n    <th mat-header-cell *matHeaderCellDef> Last Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.lastName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"age\">\n    <th mat-header-cell *matHeaderCellDef> Age </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.age}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"contact\">\n    <th mat-header-cell *matHeaderCellDef> Contact </th>\n    <td mat-cell *matCellDef=\"let element\"> \n      <p>line: {{element.line}}</p>\n      <p>email: {{element.email}}</p>\n      <p>facebook: {{element.facebook}}</p>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef> Edit </th>\n      <td mat-cell *matCellDef=\"let element\"> \n          <button mat-raised-button (click)=\"onEdit(element.id)\">Edit</button> \n      </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"delete\">\n      <th mat-header-cell *matHeaderCellDef> Delete </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-raised-button (click)=\"onDelete(element.id)\">Delete</button> \n      </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n<button mat-raised-button (click)=\"onCreate()\">Add</button> \n\n\n"

/***/ }),

/***/ "./src/app/memberlist/memberlist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/memberlist/memberlist.component.ts ***!
  \****************************************************/
/*! exports provided: MemberlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberlistComponent", function() { return MemberlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _memberlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memberlist.service */ "./src/app/memberlist/memberlist.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _formdialog_formdialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../formdialog/formdialog.component */ "./src/app/formdialog/formdialog.component.ts");
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





var MemberlistComponent = /** @class */ (function () {
    function MemberlistComponent(memberService, dialog) {
        this.memberService = memberService;
        this.dialog = dialog;
        this.displayedColumns = ['firstName', 'lastName', 'age', 'contact', 'edit', 'delete'];
    }
    MemberlistComponent.prototype.ngOnInit = function () {
    };
    MemberlistComponent.prototype.getMembers = function () {
        return this.memberService.getMembers();
    };
    MemberlistComponent.prototype.onDelete = function (id) {
        this.memberService.deleteMember(id);
        this.memlist.renderRows();
    };
    MemberlistComponent.prototype.onEdit = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_formdialog_formdialog_component__WEBPACK_IMPORTED_MODULE_4__["FormdialogComponent"], {
            width: '400px',
            data: __assign({}, this.memberService.getSingleMember(id), { contact: '' })
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.memlist.renderRows();
        });
    };
    MemberlistComponent.prototype.onCreate = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_formdialog_formdialog_component__WEBPACK_IMPORTED_MODULE_4__["FormdialogComponent"], {
            width: '400px',
            data: __assign({}, this.memberService.getSingleMember(-1), { contact: '' })
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.memlist.renderRows();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('memlist'),
        __metadata("design:type", _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"])
    ], MemberlistComponent.prototype, "memlist", void 0);
    MemberlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-memberlist',
            template: __webpack_require__(/*! ./memberlist.component.html */ "./src/app/memberlist/memberlist.component.html"),
            styles: [__webpack_require__(/*! ./memberlist.component.css */ "./src/app/memberlist/memberlist.component.css")]
        }),
        __metadata("design:paramtypes", [_memberlist_service__WEBPACK_IMPORTED_MODULE_2__["MemberlistService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], MemberlistComponent);
    return MemberlistComponent;
}());



/***/ }),

/***/ "./src/app/memberlist/memberlist.service.ts":
/*!**************************************************!*\
  !*** ./src/app/memberlist/memberlist.service.ts ***!
  \**************************************************/
/*! exports provided: MemberlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberlistService", function() { return MemberlistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mock */ "./src/mock.js");
/* harmony import */ var _member_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../member-model */ "./src/app/member-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemberlistService = /** @class */ (function () {
    function MemberlistService() {
        this.member = _mock__WEBPACK_IMPORTED_MODULE_1__["default"].flattenMock(_mock__WEBPACK_IMPORTED_MODULE_1__["default"].mock);
        this.maxIndex = this.member.length;
    }
    MemberlistService.prototype.getMembers = function () {
        return this.member;
    };
    MemberlistService.prototype.deleteMember = function (id) {
        this.member = this.member.filter(function (member) { return member.id !== id; });
    };
    MemberlistService.prototype.getSingleMember = function (id) {
        if (id === -1) {
            return new _member_model__WEBPACK_IMPORTED_MODULE_2__["Member"]();
        }
        return this.member.filter(function (member) { return member.id === id; })[0];
    };
    MemberlistService.prototype.editMember = function (id, val) {
        this.member = this.member.map(function (member) {
            if (id === member.id) {
                return val;
            }
            else {
                return member;
            }
        });
    };
    MemberlistService.prototype.addMember = function (val) {
        this.member.push(val);
        this.member[this.member.length - 1]['id'] = this.maxIndex;
        this.maxIndex++;
    };
    MemberlistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MemberlistService);
    return MemberlistService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/material-module.ts":
/*!********************************!*\
  !*** ./src/material-module.ts ***!
  \********************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {MatBadgeModule} from '@angular/material/badge';
// import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

// import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {MatCardModule} from '@angular/material/card';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatChipsModule} from '@angular/material/chips';
// import {MatStepperModule} from '@angular/material/stepper';
// import {MatDatepickerModule} from '@angular/material/datepicker';

// import {MatDividerModule} from '@angular/material/divider';
// import {MatExpansionModule} from '@angular/material/expansion';
// import {MatGridListModule} from '@angular/material/grid-list';
// import {MatIconModule} from '@angular/material/icon';

// import {MatListModule} from '@angular/material/list';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
// import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatProgressBarModule} from '@angular/material/progress-bar';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import {MatRadioModule} from '@angular/material/radio';

// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatSliderModule} from '@angular/material/slider';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
// import {MatSortModule} from '@angular/material/sort';

// import {MatTabsModule} from '@angular/material/tabs';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import {MatTreeModule} from '@angular/material/tree';
var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                // MatAutocompleteModule,
                // MatBadgeModule,
                // MatBottomSheetModule,
                _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                // MatButtonToggleModule,
                // MatCardModule,
                // MatCheckboxModule,
                // MatChipsModule,
                // MatStepperModule,
                // MatDatepickerModule,
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                // MatDividerModule,
                // MatExpansionModule,
                // MatGridListModule,
                // MatIconModule,
                _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                // MatListModule,
                // MatMenuModule,
                // MatNativeDateModule,
                // MatPaginatorModule,
                // MatProgressBarModule,
                // MatProgressSpinnerModule,
                // MatRadioModule,
                // MatRippleModule,
                _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                // MatSidenavModule,
                // MatSliderModule,
                // MatSlideToggleModule,
                // MatSnackBarModule,
                // MatSortModule,
                _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/mock.js":
/*!*********************!*\
  !*** ./src/mock.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mock = [{
    "id": 0,
    "firstName": "Tom",
    "lastName": "Chen",
    "age": "30",
    "contact": [{
      "line": "tmchen"
    }, {
      "email": "tmchen@gmail.com"
    }, {
      "facebook": "https://fb.com/chen"
    }]
  },
  {
    "id": 1,
    "firstName": "Tim",
    "lastName": "Tsai",
    "age": "30",
    "contact": [{
      "line": "timtsa"
    }, {
      "email": "tsssss@gmail.com"
    }, {
      "facebook": "https://fb.com/tsai"
    }]
  }
];

function flattenMock(mock){
  var ret = [];
  var obj = {};
  
  mock.forEach(function(m){
    obj = Object.assign({},m);
    delete obj.contact;
    var flattenContact = m.contact.reduce(function(a,v){
      a = Object.assign(v, a);
      return a;
    },{});
    Object.assign(obj, flattenContact)
    ret.push(obj);
  });
  return ret;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  mock: mock,
  flattenMock: flattenMock
});

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hsuhsu/Code/projA/angular-member-list/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map