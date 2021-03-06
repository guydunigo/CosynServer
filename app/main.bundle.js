webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keyboards_list_keyboards_list_component__ = __webpack_require__("../../../../../src/app/keyboards-list/keyboards-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keyboard_detail_keyboard_detail_component__ = __webpack_require__("../../../../../src/app/keyboard-detail/keyboard-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__keys_list_keys_list_component__ = __webpack_require__("../../../../../src/app/keys-list/keys-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__key_detail_key_detail_component__ = __webpack_require__("../../../../../src/app/key-detail/key-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__play_kb_list_play_kb_list_component__ = __webpack_require__("../../../../../src/app/play-kb-list/play-kb-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__play_kb_detail_play_kb_detail_component__ = __webpack_require__("../../../../../src/app/play-kb-detail/play-kb-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: 'config', pathMatch: 'full' },
    { path: 'config', component: __WEBPACK_IMPORTED_MODULE_2__keyboards_list_keyboards_list_component__["a" /* KeyboardsListComponent */] },
    { path: 'config/:kb_id', component: __WEBPACK_IMPORTED_MODULE_3__keyboard_detail_keyboard_detail_component__["a" /* KeyboardDetailComponent */] },
    { path: 'config/:kb_id/keys', component: __WEBPACK_IMPORTED_MODULE_4__keys_list_keys_list_component__["a" /* KeysListComponent */] },
    { path: 'config/:kb_id/keys/:key_id', component: __WEBPACK_IMPORTED_MODULE_5__key_detail_key_detail_component__["a" /* KeyDetailComponent */] },
    { path: 'play', component: __WEBPACK_IMPORTED_MODULE_6__play_kb_list_play_kb_list_component__["a" /* PlayKbListComponent */] },
    { path: 'play/:kb_id', component: __WEBPACK_IMPORTED_MODULE_7__play_kb_detail_play_kb_detail_component__["a" /* PlayKbDetailComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"/\">CoSyn</a>\n    <div class=\"navbar-nav\">\n          <a class=\"nav-item nav-link\" routerLink=\"/play\">Playable keyboards</a>\n          <a class=\"nav-item nav-link\" routerLink=\"/config\">Configure keyboards</a>\n          <a class=\"nav-item nav-link\" (click)=\"resetConfDb()\" role=\"button\">Reset conf db</a>\n          <a class=\"nav-item nav-link\" (click)=\"resetPlayDb()\" role=\"button\">Reset play db</a>\n    </div>\n  </nav>\n  <div class=\"container\">\n      <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_keyboard_service__ = __webpack_require__("../../../../../src/app/config-keyboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__play_keyboard_service__ = __webpack_require__("../../../../../src/app/play-keyboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(confKbService, playKbService) {
        this.confKbService = confKbService;
        this.playKbService = playKbService;
        this.title = 'Cosyn';
    }
    AppComponent.prototype.resetConfDb = function () {
        this.confKbService.resetConfig().subscribe();
    };
    AppComponent.prototype.resetPlayDb = function () {
        this.playKbService.resetPlay().subscribe();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_keyboard_service__["a" /* ConfigKeyboardService */],
            __WEBPACK_IMPORTED_MODULE_2__play_keyboard_service__["a" /* PlayKeyboardService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__keyboard_detail_keyboard_detail_component__ = __webpack_require__("../../../../../src/app/keyboard-detail/keyboard-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__keyboards_list_keyboards_list_component__ = __webpack_require__("../../../../../src/app/keyboards-list/keyboards-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__keys_list_keys_list_component__ = __webpack_require__("../../../../../src/app/keys-list/keys-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__key_detail_key_detail_component__ = __webpack_require__("../../../../../src/app/key-detail/key-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__play_kb_list_play_kb_list_component__ = __webpack_require__("../../../../../src/app/play-kb-list/play-kb-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__play_kb_detail_play_kb_detail_component__ = __webpack_require__("../../../../../src/app/play-kb-detail/play-kb-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__config_keyboard_service__ = __webpack_require__("../../../../../src/app/config-keyboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__config_key_service__ = __webpack_require__("../../../../../src/app/config-key.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__play_keyboard_service__ = __webpack_require__("../../../../../src/app/play-keyboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__keyboard_detail_keyboard_detail_component__["a" /* KeyboardDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_7__keyboards_list_keyboards_list_component__["a" /* KeyboardsListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__keys_list_keys_list_component__["a" /* KeysListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__key_detail_key_detail_component__["a" /* KeyDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__play_kb_list_play_kb_list_component__["a" /* PlayKbListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__play_kb_detail_play_kb_detail_component__["a" /* PlayKbDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__config_keyboard_service__["a" /* ConfigKeyboardService */], __WEBPACK_IMPORTED_MODULE_13__config_key_service__["a" /* ConfigKeyService */], __WEBPACK_IMPORTED_MODULE_14__play_keyboard_service__["a" /* PlayKeyboardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/config-key.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigKeyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__key__ = __webpack_require__("../../../../../src/app/key.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ConfigKeyService = (function () {
    function ConfigKeyService(http) {
        this.http = http;
        this.kbsUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverAddr + 'api/config';
    }
    ConfigKeyService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // console.error(error); // log to console instead
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    ConfigKeyService.prototype.getKbUrl = function (kb_id) {
        return this.kbsUrl + '/' + kb_id + '/keys';
    };
    ConfigKeyService.prototype.getKeys = function (kb_id) {
        return this.http.get(this.getKbUrl(kb_id))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getKeys', [])));
    };
    ConfigKeyService.prototype.getKey = function (kb_id, id) {
        var url = this.getKbUrl(kb_id) + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("getKey id=" + id)));
    };
    ConfigKeyService.prototype.updateKey = function (kb_id, keyboard) {
        return this.http.put(this.getKbUrl(kb_id), keyboard, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('updateKey')));
    };
    ConfigKeyService.prototype.addKey = function (kb_id, keyboard) {
        return this.http.post(this.getKbUrl(kb_id), keyboard, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('addKey')));
    };
    ConfigKeyService.prototype.deleteKey = function (kb_id, keyboard) {
        var id = typeof __WEBPACK_IMPORTED_MODULE_5__key__["a" /* Key */] === 'string' ? keyboard : keyboard.id;
        var url = this.getKbUrl(kb_id) + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('deleteKey')));
    };
    ConfigKeyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ConfigKeyService);
    return ConfigKeyService;
}());



/***/ }),

/***/ "../../../../../src/app/config-keyboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigKeyboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keyboard__ = __webpack_require__("../../../../../src/app/keyboard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ConfigKeyboardService = (function () {
    function ConfigKeyboardService(http) {
        this.http = http;
        this.kbsUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverAddr + 'api/config';
    }
    ConfigKeyboardService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // console.error(error); // log to console instead
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    ConfigKeyboardService.prototype.getKeyboards = function () {
        return this.http.get(this.kbsUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getKeyboards', [])));
    };
    ConfigKeyboardService.prototype.getKeyboard = function (id) {
        var url = this.kbsUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("getKeyboard id=" + id)));
    };
    ConfigKeyboardService.prototype.updateKeyboard = function (keyboard) {
        var url = this.kbsUrl + "/" + keyboard.id;
        return this.http.put(url, keyboard, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('updateKeyboard')));
    };
    ConfigKeyboardService.prototype.addKeyboard = function (keyboard) {
        return this.http.post(this.kbsUrl, keyboard, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('addKeyboard')));
    };
    ConfigKeyboardService.prototype.deleteKeyboard = function (keyboard) {
        var id = typeof __WEBPACK_IMPORTED_MODULE_5__keyboard__["a" /* Keyboard */] === 'string' ? keyboard : keyboard.id;
        var url = this.kbsUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('deleteKeyboard')));
    };
    ConfigKeyboardService.prototype.lockKeyboard = function (keyboard_id) {
        var url = this.kbsUrl + "/" + keyboard_id + "/lock";
        return this.http.put(url, {}, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('lockKeyboard')));
    };
    ConfigKeyboardService.prototype.resetConfig = function () {
        var url = this.kbsUrl + "/reset";
        return this.http.get(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('resetConfig')));
    };
    ConfigKeyboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ConfigKeyboardService);
    return ConfigKeyboardService;
}());



/***/ }),

/***/ "../../../../../src/app/key-detail/key-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/key-detail/key-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"key\">\n  <h2>{{ key.name | uppercase }}</h2>\n  <div>\n    <span>id: </span>\n    {{key.id}}\n  </div>\n  <div>\n    <button (click)=\"save()\">save</button>\n    <label>name:\n      <input [(ngModel)]=\"key.name\" placeholder=\"name\" type=\"text\">\n    </label>\n    <label>src:\n      <input [ngClass]=\"{testSoundSucessful: testSoundSucessful === 1, testSoundFailed: testSoundSucessful === 0}\" [(ngModel)]=\"key.src\" placeholder=\"source file\" type=\"text\">\n    </label>\n    <button (click)=\"testSound()\">Test sound</button>\n    <div *ngIf=\"testSoundSucessful === 1\" class=\"alert alert-success\">Sound working !</div>\n    <div *ngIf=\"testSoundSucessful === 0\" class=\"alert alert-danger\">Sound error, check source !</div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/key-detail/key-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_howler__ = __webpack_require__("../../../../howler/dist/howler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_howler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_howler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_key_service__ = __webpack_require__("../../../../../src/app/config-key.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__key__ = __webpack_require__("../../../../../src/app/key.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var KeyDetailComponent = (function () {
    function KeyDetailComponent(route, keyService, location) {
        this.route = route;
        this.keyService = keyService;
        this.location = location;
        this.testSoundSucessful = -1;
    }
    KeyDetailComponent.prototype.ngOnInit = function () {
        this.kb_id = this.route.snapshot.paramMap.get('kb_id');
        this.getKey();
    };
    KeyDetailComponent.prototype.ngOnDestroy = function () {
        if (this.sound) {
            this.sound.stop();
        }
    };
    KeyDetailComponent.prototype.getKey = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('key_id');
        this.keyService.getKey(this.kb_id, id)
            .subscribe(function (kb) { return _this.key = kb; });
    };
    KeyDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    KeyDetailComponent.prototype.save = function () {
        var _this = this;
        this.keyService.updateKey(this.kb_id, this.key)
            .subscribe(function () { return _this.goBack(); });
    };
    KeyDetailComponent.prototype.testSound = function () {
        if (this.sound) {
            this.sound.stop();
        }
        var me = this;
        this.sound = new __WEBPACK_IMPORTED_MODULE_3_howler__["Howl"]({
            src: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].serverAddr + this.key.src,
            volume: 1,
            onloaderror: function () { me.testSoundSucessful = 0; },
            onload: function () { me.testSoundSucessful = 1; }
        });
        this.sound.play();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__key__["a" /* Key */])
    ], KeyDetailComponent.prototype, "key", void 0);
    KeyDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-key-detail',
            template: __webpack_require__("../../../../../src/app/key-detail/key-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/key-detail/key-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__config_key_service__["a" /* ConfigKeyService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], KeyDetailComponent);
    return KeyDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/key.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Key; });
var Key = (function () {
    function Key() {
    }
    return Key;
}());



/***/ }),

/***/ "../../../../../src/app/keyboard-detail/keyboard-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/keyboard-detail/keyboard-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"keyboard\">\n    <h2>{{ keyboard.name | uppercase }}</h2>\n    <div>\n      <span>id: </span>\n      {{keyboard.id}}\n    </div>\n    <button (click)=\"save()\">save</button>\n    <button (click)=\"lock()\">lock</button>\n    <div>\n      <label>name:\n        <input [(ngModel)]=\"keyboard.name\" placeholder=\"name\" type=\"text\">\n      </label>\n    </div>\n    <app-keys-list></app-keys-list>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/keyboard-detail/keyboard-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_keyboard_service__ = __webpack_require__("../../../../../src/app/config-keyboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__keyboard__ = __webpack_require__("../../../../../src/app/keyboard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KeyboardDetailComponent = (function () {
    function KeyboardDetailComponent(route, kbService, location) {
        this.route = route;
        this.kbService = kbService;
        this.location = location;
    }
    KeyboardDetailComponent.prototype.ngOnInit = function () {
        this.getKeyboard();
    };
    KeyboardDetailComponent.prototype.getKeyboard = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('kb_id');
        this.kbService.getKeyboard(id)
            .subscribe(function (kb) { return _this.keyboard = kb; });
    };
    KeyboardDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    KeyboardDetailComponent.prototype.save = function () {
        var _this = this;
        this.kbService.updateKeyboard(this.keyboard)
            .subscribe(function () { return _this.goBack(); });
    };
    KeyboardDetailComponent.prototype.lock = function () {
        var _this = this;
        this.kbService.lockKeyboard(this.keyboard.id)
            .subscribe(function () { return _this.goBack(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__keyboard__["a" /* Keyboard */])
    ], KeyboardDetailComponent.prototype, "keyboard", void 0);
    KeyboardDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-keyboard-detail',
            template: __webpack_require__("../../../../../src/app/keyboard-detail/keyboard-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/keyboard-detail/keyboard-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__config_keyboard_service__["a" /* ConfigKeyboardService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], KeyboardDetailComponent);
    return KeyboardDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/keyboard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Keyboard; });
var Keyboard = (function () {
    function Keyboard() {
    }
    return Keyboard;
}());



/***/ }),

/***/ "../../../../../src/app/keyboards-list/keyboards-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/keyboards-list/keyboards-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Available keyboards</h2>\n\n<div>\n  <label>Keyboard name:\n    <input #kbName />\n  </label>\n  <button (click)=\"add(kbName.value); kbName.value=''\">\n    add\n  </button>\n</div>\n\n<ul class=\"keyboards\">\n  <li *ngFor=\"let kb of keyboards\">\n    <a routerLink=\"/config/{{kb.id}}\">\n      {{kb.name}} (<span class=\"badge\">{{kb.id}}</span>)\n    </a>\n    <button class=\"delete\" title=\"delete keyboard\" (click)=\"delete(kb)\">\n      x\n    </button>\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/keyboards-list/keyboards-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_keyboard_service__ = __webpack_require__("../../../../../src/app/config-keyboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeyboardsListComponent = (function () {
    function KeyboardsListComponent(kbService) {
        this.kbService = kbService;
    }
    KeyboardsListComponent.prototype.ngOnInit = function () {
        this.getKeyboards();
    };
    KeyboardsListComponent.prototype.getKeyboards = function () {
        var _this = this;
        this.kbService.getKeyboards()
            .subscribe(function (kbs) { return _this.keyboards = kbs; });
    };
    KeyboardsListComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.kbService.addKeyboard({ name: name })
            .subscribe(function (kb) {
            _this.keyboards.push(kb);
        });
    };
    KeyboardsListComponent.prototype.delete = function (kb) {
        this.keyboards = this.keyboards.filter(function (k) { return k !== kb; });
        this.kbService.deleteKeyboard(kb).subscribe();
    };
    KeyboardsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-keyboards-list',
            template: __webpack_require__("../../../../../src/app/keyboards-list/keyboards-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/keyboards-list/keyboards-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_keyboard_service__["a" /* ConfigKeyboardService */]])
    ], KeyboardsListComponent);
    return KeyboardsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/keys-list/keys-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/keys-list/keys-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>List of keys</h2>\n\n<div>\n  <label>Key name:\n    <input #keyName />\n  </label>\n  <label>Source:\n    <input #keySrc />\n  </label>\n  <button (click)=\"add(keyName.value, keySrc.value); keyName.value=''; keySrc.value=''\">\n    add\n  </button>\n</div>\n\n<ul class=\"heroes\">\n  <li *ngFor=\"let key of keys\">\n    <a routerLink=\"/config/{{kb_id}}/keys/{{key.id}}\">\n      {{key.name}} (<span class=\"badge\">{{key.id}}</span>)\n    </a>\n    <button class=\"delete\" title=\"delete key\" (click)=\"delete(key)\">\n      x\n    </button>\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/keys-list/keys-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_key_service__ = __webpack_require__("../../../../../src/app/config-key.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KeysListComponent = (function () {
    function KeysListComponent(route, keyService) {
        this.route = route;
        this.keyService = keyService;
    }
    KeysListComponent.prototype.ngOnInit = function () {
        this.kb_id = this.route.snapshot.paramMap.get('kb_id');
        this.getKeys();
    };
    KeysListComponent.prototype.getKeys = function () {
        var _this = this;
        this.keyService.getKeys(this.kb_id)
            .subscribe(function (kbs) { return _this.keys = kbs; });
    };
    KeysListComponent.prototype.add = function (name, src) {
        var _this = this;
        name = name.trim();
        src = src.trim();
        if (!name) {
            return;
        }
        this.keyService.addKey(this.kb_id, { name: name, src: src })
            .subscribe(function (kb) {
            _this.keys.push(kb);
        });
    };
    KeysListComponent.prototype.delete = function (kb) {
        this.keys = this.keys.filter(function (k) { return k !== kb; });
        this.keyService.deleteKey(this.kb_id, kb).subscribe();
    };
    KeysListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-keys-list',
            template: __webpack_require__("../../../../../src/app/keys-list/keys-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/keys-list/keys-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__config_key_service__["a" /* ConfigKeyService */]])
    ], KeysListComponent);
    return KeysListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/play-kb-detail/play-kb-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".key {\n    border: 1px solid black;\n    min-height: 15rem;\n    background-color: white;\n}\n\n.key:nth-child(even) {\n    background-color: black;\n    color: white;\n}\n\n.key.pressed {\n    box-shadow: 2px 5px 5px #555;\n    /*left: -0.1em;*/\n    top: -0.5em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/play-kb-detail/play-kb-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"keyboard\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 mt-4\">\n      <button class=\"btn btn-dark btn-block\" (click)=\"mute()\">\n        <span *ngIf=\"!ismute\">Mute</span>\n        <span *ngIf=\"ismute\">Unmute</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"row mt-4\">\n    <div class=\"col-md-12 col-xs-12\">\n      <h1 class=\"text-center\">{{ keyboard.name | uppercase }}</h1>\n    </div>\n  </div>\n  <div class=\"row my-2\">\n    <div class=\"col-sm-1 key mr-1 mb-1\" [ngClass]=\"{pressed: !key.enabled}\" *ngFor=\"let key of keyboard.keys\" (click)=\"press(key.id)\">\n      <h4 class=\"text-center m-auto\">{{key.name.slice(0,3)}}{{key.name.length > 3 ? '...' : ''}}</h4>\n      <h5 *ngIf=\"key.id !== key.name\" class=\"text-center\">{{key.id}}</h5>\n      <!--<h1 class=\"text-center\">\n                        <span *ngIf=\"!(key.enabled)\">Press</span>\n                        <span *ngIf=\"(key.enabled)\">Release</span>\n                      </h1>-->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/play-kb-detail/play-kb-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayKbDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__play_keyboard_service__ = __webpack_require__("../../../../../src/app/play-keyboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_howler__ = __webpack_require__("../../../../howler/dist/howler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_howler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_howler__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlayKbDetailComponent = (function () {
    function PlayKbDetailComponent(route, kbService, location) {
        this.route = route;
        this.kbService = kbService;
        this.location = location;
        this.continue_polling = true;
        this.sounds = new Map();
        this.ismute = false;
    }
    PlayKbDetailComponent.prototype.ngOnInit = function () {
        this.getKeyboard();
    };
    PlayKbDetailComponent.prototype.ngOnDestroy = function () {
        this.continue_polling = false;
        this.sounds.forEach(function (s) { return s.stop(); });
    };
    PlayKbDetailComponent.prototype.getKeyboard = function () {
        var _this = this;
        var kb_id = this.route.snapshot.paramMap.get('kb_id');
        this.kbService.getKeyboard(kb_id)
            .subscribe(function (kb) {
            _this.keyboard = kb;
            _this.updateKeysSounds();
            _this.pollKeys();
        });
    };
    PlayKbDetailComponent.prototype.updateKeysSounds = function () {
        var _this = this;
        this.keyboard.keys.forEach(function (key) {
            if (!(_this.sounds[key.id])) {
                _this.sounds[key.id] = new __WEBPACK_IMPORTED_MODULE_5_howler__["Howl"]({
                    src: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverAddr + key.src,
                    loop: true,
                    volume: key.volume,
                    autoplay: false
                });
            }
            if (key.enabled && !_this.sounds[key.id].playing()) {
                _this.sounds[key.id].play();
            }
            else if (!key.enabled && _this.sounds[key.id].playing()) {
                _this.sounds[key.id].pause();
            }
        });
    };
    PlayKbDetailComponent.prototype.mute = function () {
        this.ismute = !this.ismute;
        __WEBPACK_IMPORTED_MODULE_5_howler__["Howler"].mute(this.ismute);
    };
    PlayKbDetailComponent.prototype.press = function (key_id) {
        var kb_id = this.route.snapshot.paramMap.get('kb_id');
        var key = this.keyboard.keys.find(function (k) { return k.id === key_id; });
        var method;
        if (key.enabled === true) {
            method = 'releaseKey';
        }
        else {
            method = 'pressKey';
        }
        this.kbService[method](kb_id, key_id)
            .subscribe(function (ans) { return key.enabled = ans.enabled; });
    };
    /*release(key_id: string): void {
      const kb_id = this.route.snapshot.paramMap.get('kb_id');
      const key = this.keyboard.keys.find(k => k.id === key_id);
      this.kbService.releaseKey(kb_id, key_id)
        .subscribe(ans => key.enabled = ans.enabled);
    }*/
    PlayKbDetailComponent.prototype.pollKeys = function () {
        var _this = this;
        this.kbService.pollKeys(this.keyboard.id)
            .subscribe(function (keys) {
            if (keys) {
                _this.keyboard.keys = keys;
                _this.updateKeysSounds();
            }
            if (_this.continue_polling) {
                _this.pollKeys();
            }
        });
    };
    PlayKbDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-play-kb-detail',
            template: __webpack_require__("../../../../../src/app/play-kb-detail/play-kb-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/play-kb-detail/play-kb-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__play_keyboard_service__["a" /* PlayKeyboardService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], PlayKbDetailComponent);
    return PlayKbDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/play-kb-list/play-kb-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/play-kb-list/play-kb-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row mt-4\">\n    <div class=\"col-md-12 col-xs-12\">\n      <h1 class=\"text-center\">Playable keyboards</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <ul class=\"keyboards\">\n      <li *ngFor=\"let kb of keyboards\">\n        <a routerLink=\"/play/{{kb.id}}\">\n          {{kb.name}} (\n          <span class=\"badge\">{{kb.id}}</span>)\n        </a>\n        <button class=\"delete\" title=\"delete keyboard\" (click)=\"delete(kb)\">\n          x\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/play-kb-list/play-kb-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayKbListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__play_keyboard_service__ = __webpack_require__("../../../../../src/app/play-keyboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayKbListComponent = (function () {
    function PlayKbListComponent(kbService) {
        this.kbService = kbService;
    }
    PlayKbListComponent.prototype.ngOnInit = function () {
        this.getKeyboards();
    };
    PlayKbListComponent.prototype.getKeyboards = function () {
        var _this = this;
        this.kbService.getKeyboards()
            .subscribe(function (kbs) { return _this.keyboards = kbs; });
    };
    PlayKbListComponent.prototype.delete = function (kb) {
        this.keyboards = this.keyboards.filter(function (k) { return k !== kb; });
        this.kbService.deleteKeyboard(kb).subscribe();
    };
    PlayKbListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-play-kb-list',
            template: __webpack_require__("../../../../../src/app/play-kb-list/play-kb-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/play-kb-list/play-kb-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__play_keyboard_service__["a" /* PlayKeyboardService */]])
    ], PlayKbListComponent);
    return PlayKbListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/play-keyboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayKeyboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keyboard__ = __webpack_require__("../../../../../src/app/keyboard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var PlayKeyboardService = (function () {
    function PlayKeyboardService(http) {
        this.http = http;
        this.kbsUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverAddr + 'api/play';
    }
    PlayKeyboardService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // console.error(error); // log to console instead
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    PlayKeyboardService.prototype.getKeyboards = function () {
        return this.http.get(this.kbsUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getKeyboards', [])));
    };
    PlayKeyboardService.prototype.getKeyboard = function (id) {
        var url = this.kbsUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("getKeyboard id=" + id)));
    };
    PlayKeyboardService.prototype.deleteKeyboard = function (keyboard) {
        var id = typeof __WEBPACK_IMPORTED_MODULE_5__keyboard__["a" /* Keyboard */] === 'string' ? keyboard : keyboard.id;
        var url = this.kbsUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('deleteKeyboard')));
    };
    PlayKeyboardService.prototype.pressKey = function (keyboard_id, key_id) {
        var url = this.kbsUrl + "/" + keyboard_id + "/keys/" + key_id + "/press";
        return this.http.put(url, {}, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('pressKey')));
    };
    PlayKeyboardService.prototype.releaseKey = function (keyboard_id, key_id) {
        var url = this.kbsUrl + "/" + keyboard_id + "/keys/" + key_id + "/release";
        return this.http.put(url, {}, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('releaseKey')));
    };
    PlayKeyboardService.prototype.setKeyVolume = function (keyboard_id, key_id, volume) {
        var url = this.kbsUrl + "/" + keyboard_id + "/keys/" + key_id + "/volume";
        return this.http.put(url, { volume: volume }, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('setKeyVolume')));
    };
    PlayKeyboardService.prototype.resetPlay = function () {
        var url = this.kbsUrl + "/reset";
        return this.http.get(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('resetConfig')));
    };
    PlayKeyboardService.prototype.pollKeys = function (keyboard_id) {
        var url = this.kbsUrl + "/" + keyboard_id + "/keys_poll";
        return this.http.get(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('pollKeys')));
    };
    PlayKeyboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PlayKeyboardService);
    return PlayKeyboardService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    serverAddr: 'http://localhost:4300/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map