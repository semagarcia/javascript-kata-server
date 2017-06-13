webpackJsonp([1,4],{

/***/ 1067:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1068:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(504);


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var STORAGE_KEY = 'kataPlayerJwtToken';
var AuthenticationService = (function () {
    function AuthenticationService() {
    }
    AuthenticationService.prototype.setJwtToken = function (token, expirationTime) {
        var _this = this;
        if (expirationTime === void 0) { expirationTime = 0; }
        sessionStorage.setItem(STORAGE_KEY, token);
        //this.obsJwtToken$.next(token);
        if (expirationTime > 0) {
            setTimeout(function () {
                _this.removeJwtToken();
            }, expirationTime);
        }
    };
    AuthenticationService.prototype.getJwtToken = function () {
        return sessionStorage.getItem(STORAGE_KEY);
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return !!this.getJwtToken();
    };
    /*jwtTokenSubscription() {
        return this.obsJwtToken$.asObservable();
    }*/
    AuthenticationService.prototype.removeJwtToken = function () {
        sessionStorage.removeItem(STORAGE_KEY);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AuthenticationService);

//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsAgGridMaterialCheckbox; });
var SettingsAgGridMaterialCheckbox = (function () {
    function SettingsAgGridMaterialCheckbox() {
    }
    return SettingsAgGridMaterialCheckbox;
}());

SettingsAgGridMaterialCheckbox.CB_ICON = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMTQzMkY1NDIyMjhFNjExQkVGOEFCQUI5MzdBNjFEMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMzBBQkU2ODI4MjQxMUU2QjlDRUZCNUFDREJGRTVDMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMzBBQkU2NzI4MjQxMUU2QjlDRUZCNUFDREJGRTVDMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE0NDMyRjU0MjIyOEU2MTFCRUY4QUJBQjkzN0E2MUQxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjExNDMyRjU0MjIyOEU2MTFCRUY4QUJBQjkzN0E2MUQxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+O+zv0gAAAQ1JREFUeNpilJvw35OBgWEuEEsyEAeeA3EyI1DjMxI0wTUzkaEJBCSZiFVpJcvAsDqEgUFVCMInSqOeOAPDLG8GBjNpBoZCCyI1KggwMCzwZ2DgZWdgOPWUgaF4F5pGDxWgqT4MDPzsSB7hYWBYHMDAIMzJwHDjDQND0mYGhu9/0DT6qTEwuCszMOyIZmAwkoTYALJJjp+B4cEHBoaEjQwMn38iDAVFx38wA4gzTBgYSiwhEi++MDDI8DEwvP3OwBC0CqIZGcBtBOmefoaBIXQNA8PvfxBNf4B03AZMTVgD5xwwXcQDFX/8wcAw+RQDw5VX2AMN7lRSARM07ZEKXoA0poAYJGh6CkrkAAEGAKNeQxaS7i+xAAAAAElFTkSuQmCC"/>';
//# sourceMappingURL=settings-ag-grid-checkbox.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(httpSrv) {
        this.httpSrv = httpSrv;
    }
    UserService.prototype.setUserContext = function (loggedUser) {
        this.user = loggedUser;
    };
    UserService.prototype.getUserContext = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.user)
                resolve(_this.user);
            else
                _this.getUserInfo().subscribe((function (user) {
                    _this.user = user;
                    resolve(user);
                }), (function (err) { return reject('Error: ' + err); }));
        });
    };
    UserService.prototype.getUserInfo = function () {
        return this.httpSrv.get('/api/users')
            .map(function (res) { return res.json(); })
            .catch(function (err) { return err.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveChallengeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeaveChallengeComponent = (function () {
    function LeaveChallengeComponent(router, dialogRef) {
        this.router = router;
        this.dialogRef = dialogRef;
    }
    LeaveChallengeComponent.prototype.exit = function () {
        this.router.navigate(['/home']);
        this.dialogRef.close();
    };
    return LeaveChallengeComponent;
}());
LeaveChallengeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-leave-challenge',
        template: __webpack_require__(775),
        styles: [__webpack_require__(733)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialogRef */]) === "function" && _b || Object])
], LeaveChallengeComponent);

var _a, _b;
//# sourceMappingURL=leave-challenge.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kata_dialog_kata_dialog_component__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_ag_grid_checkbox__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var KataComponent = (function () {
    function KataComponent(dialog, kataSrv, showErrorSrv) {
        this.dialog = dialog;
        this.kataSrv = kataSrv;
        this.showErrorSrv = showErrorSrv;
        this.gridOptions = {};
        // Default options
        this.gridOptions.defaultColDef = {
            width: 50,
            editable: true,
            filter: 'text'
        };
        // Configure grid
        this.gridOptions.rowHeight = 48;
        this.gridOptions.editType = 'fullRow';
        this.gridOptions.animateRows = true;
        this.gridOptions.enableFilter = true;
        this.gridOptions.enableSorting = true;
        this.gridOptions.enableColResize = true;
        //this.gridOptions.singleClickEdit = true;
        this.gridOptions.stopEditingWhenGridLosesFocus = true;
        this.gridOptions.sortingOrder = ['desc', 'asc', null];
        this.gridOptions.rowSelection = 'multiple';
        this.gridOptions.icons = {
            checkboxChecked: __WEBPACK_IMPORTED_MODULE_4__settings_ag_grid_checkbox__["a" /* SettingsAgGridMaterialCheckbox */].CB_ICON
        };
        //
        this.gridOptions.onCellEditingStarted = function (event) {
            console.log('cellEditingStarted');
        };
        this.gridOptions.onCellEditingStopped = function (event) {
            console.log('cellEditingStopped', event);
        };
        this.gridOptions.columnDefs = [
            {
                headerName: '',
                field: 'selectRow',
                headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                suppressFilter: true,
                width: 25
            },
            {
                headerName: 'Name',
                field: 'name',
                width: 100,
                filter: 'text'
            },
            {
                headerName: 'Description',
                field: 'description',
                width: 250,
                filter: 'text'
            },
            {
                headerName: 'Enabled?',
                field: 'enabled',
                width: 40,
                cellRenderer: function (params) { return (params.value) ? 'Yes' : 'No'; },
                cellEditor: 'select',
                cellEditorParams: {
                    values: ['Yes', 'No']
                },
                cellClass: 'center-column-content'
            },
            {
                headerName: 'Updated',
                field: 'updatedAt',
                width: 100,
                filter: 'date',
                editable: false
            }
        ];
    }
    KataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kataSrv.getAllKatas().subscribe(function (katas) {
            _this.gridOptions.api.addItems(katas);
            _this.gridOptions.api.sizeColumnsToFit();
        }, function (err) {
            _this.showErrorSrv.showErrorInDialog('Ups! An error has occurred...', 'Sorry, an error has been occurred retrieving the training paths...', __WEBPACK_IMPORTED_MODULE_3__dialogs__["f" /* DIALOG_ACTIONS */].NOP, '');
        });
    };
    KataComponent.prototype.createNewKata = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__kata_dialog_kata_dialog_component__["a" /* KataDialogComponent */]).afterClosed().subscribe(function (x) {
            console.log('Cerrado', x);
        });
    };
    KataComponent.prototype.editKata = function () {
    };
    KataComponent.prototype.deleteKatas = function () {
        console.log(this.gridOptions.api.getSelectedRows());
    };
    return KataComponent;
}());
KataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'settings-kata',
        template: __webpack_require__(787),
        styles: [__webpack_require__(742)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core__["KataService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core__["KataService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dialogs__["e" /* ShowErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dialogs__["e" /* ShowErrorService */]) === "function" && _c || Object])
], KataComponent);

var _a, _b, _c;
//# sourceMappingURL=kata.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lp_dialog_lp_dialog_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialogs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_ag_grid_checkbox__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearningPathComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LearningPathComponent = (function () {
    function LearningPathComponent(dialog /*, private dialogRef: MdDialogRef<LpDialogComponent>*/, trainingSrv, showErrorSrv) {
        this.dialog = dialog; /*, private dialogRef: MdDialogRef<LpDialogComponent>*/
        this.trainingSrv = trainingSrv;
        this.showErrorSrv = showErrorSrv;
        this.gridOptions = {};
        // Default options
        this.gridOptions.defaultColDef = {
            width: 50,
            editable: true,
            filter: 'text'
        };
        // Configure grid
        this.gridOptions.rowHeight = 48;
        this.gridOptions.editType = 'fullRow';
        this.gridOptions.animateRows = true;
        this.gridOptions.enableFilter = true;
        this.gridOptions.enableSorting = true;
        this.gridOptions.enableColResize = true;
        //this.gridOptions.singleClickEdit = true;
        this.gridOptions.stopEditingWhenGridLosesFocus = true;
        this.gridOptions.sortingOrder = ['desc', 'asc', null];
        this.gridOptions.rowSelection = 'multiple';
        this.gridOptions.icons = {
            checkboxChecked: __WEBPACK_IMPORTED_MODULE_5__settings_ag_grid_checkbox__["a" /* SettingsAgGridMaterialCheckbox */].CB_ICON
        };
        //
        this.gridOptions.onCellEditingStarted = function (event) {
            console.log('cellEditingStarted');
        };
        this.gridOptions.onCellEditingStopped = function (event) {
            console.log('cellEditingStopped', event);
        };
        this.gridOptions.columnDefs = [
            {
                headerName: '',
                field: 'selectRow',
                headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                suppressFilter: true,
                width: 25
            },
            {
                headerName: 'Topic',
                field: 'topic',
                width: 80,
                filter: 'text'
            },
            {
                headerName: 'Name',
                field: 'name',
                width: 100,
                filter: 'text'
            },
            {
                headerName: 'Description',
                field: 'description',
                width: 200,
                filter: 'text'
            },
            {
                headerName: 'Enabled?',
                field: 'enabled',
                width: 65,
                cellRenderer: function (params) { return (params.value) ? 'Yes' : 'No'; },
                cellEditor: 'select',
                cellEditorParams: {
                    values: ['Yes', 'No']
                },
                cellClass: 'center-column-content'
            },
            {
                headerName: '# Katas',
                field: 'katas',
                width: 60,
                filter: 'number',
                editable: false
            },
            {
                headerName: 'Updated',
                field: 'updatedAt',
                width: 100,
                filter: 'date',
                editable: false
            }
        ];
    }
    LearningPathComponent.prototype.ngOnInit = function () {
        this.loadTrainingPaths();
    };
    LearningPathComponent.prototype.loadTrainingPaths = function () {
        var _this = this;
        this.trainingSrv.getTrainingPathsForGrid().subscribe(function (trainingPaths) {
            _this.gridOptions.api.addItems(trainingPaths);
            _this.gridOptions.api.sizeColumnsToFit();
        }, function (err) {
            _this.showErrorSrv.showErrorInDialog('Ups! An error has occurred...', 'Sorry, an error has been occurred retrieving the training paths...', __WEBPACK_IMPORTED_MODULE_4__dialogs__["f" /* DIALOG_ACTIONS */].NOP, '');
        });
    };
    LearningPathComponent.prototype.addNewTrainingPath = function () {
        /*this.dialogRef.afterClosed().subscribe((x) => {
            console.log('Cerrado');
        });*/
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__lp_dialog_lp_dialog_component__["a" /* LpDialogComponent */]).afterClosed().subscribe(function (x) {
            console.log('Cerrado', x);
        });
    };
    LearningPathComponent.prototype.startRowEditing = function () {
    };
    LearningPathComponent.prototype.deleteTrainingPath = function () {
        var selectedRows = this.gridOptions.api.getSelectedRows();
        if (selectedRows.length === 0) {
            this.showErrorSrv.showErrorInDialog('No rows selected', 'Sorry, to delete a training path, you should select a row before...', __WEBPACK_IMPORTED_MODULE_4__dialogs__["f" /* DIALOG_ACTIONS */].NOP, 'I got it!');
        }
        else {
            // Delete training paths
        }
    };
    LearningPathComponent.prototype.openKatasOfTrainingPath = function () {
    };
    return LearningPathComponent;
}());
LearningPathComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'settings-learning-path',
        template: __webpack_require__(789),
        styles: [__webpack_require__(744)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdDialog */] /*, private dialogRef: MdDialogRef<LpDialogComponent>*/ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdDialog */] /*, private dialogRef: MdDialogRef<LpDialogComponent>*/) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core__["TrainingService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core__["TrainingService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__dialogs__["e" /* ShowErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__dialogs__["e" /* ShowErrorService */]) === "function" && _c || Object])
], LearningPathComponent);

var _a, _b, _c;
//# sourceMappingURL=learning-path.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = (function () {
    function SettingsComponent(trainingSrv) {
        this.trainingSrv = trainingSrv;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trainingSrv.getTrainingPaths().subscribe(function (tPaths) { _this.trainingPaths = tPaths; });
    };
    SettingsComponent.prototype.onTabChanged = function (event) {
        this.currentTabSelected = event.index;
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(791),
        styles: [__webpack_require__(746)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core__["TrainingService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core__["TrainingService"]) === "function" && _a || Object])
], SettingsComponent);

var _a;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_time_pipe__ = __webpack_require__(525);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "TimeElapsedPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__pipes_time_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_authentication_guard__ = __webpack_require__(519);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return __WEBPACK_IMPORTED_MODULE_1__guards_authentication_guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(118);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_challenge_service__ = __webpack_require__(526);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ChallengeService", function() { return __WEBPACK_IMPORTED_MODULE_3__services_challenge_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_event_service__ = __webpack_require__(527);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_service__ = __webpack_require__(528);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return __WEBPACK_IMPORTED_MODULE_5__services_http_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_individual_service__ = __webpack_require__(529);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "IndividualService", function() { return __WEBPACK_IMPORTED_MODULE_6__services_individual_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_kata_service__ = __webpack_require__(530);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "KataService", function() { return __WEBPACK_IMPORTED_MODULE_7__services_kata_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_login_service__ = __webpack_require__(531);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return __WEBPACK_IMPORTED_MODULE_8__services_login_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_socket_service__ = __webpack_require__(532);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return __WEBPACK_IMPORTED_MODULE_9__services_socket_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_test_executor_service__ = __webpack_require__(533);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "TestExecutorService", function() { return __WEBPACK_IMPORTED_MODULE_10__services_test_executor_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_training_service__ = __webpack_require__(534);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "TrainingService", function() { return __WEBPACK_IMPORTED_MODULE_11__services_training_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_service__ = __webpack_require__(155);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return __WEBPACK_IMPORTED_MODULE_12__services_user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_users_service__ = __webpack_require__(535);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return __WEBPACK_IMPORTED_MODULE_13__services_users_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_Challenge__ = __webpack_require__(520);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__models_Event__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__models_Event___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__models_Event__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__models_Kata__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__models_Kata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__models_Kata__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__models_TrainingPaths__ = __webpack_require__(523);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__models_User__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__models_User___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__models_User__);
/* unused harmony namespace reexport */
// Pipes

// Guards

// Services












// Models





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.contributors = [
            {
                name: 'Sema García',
                contribution: 'Creator of KataPlayer & Contributor',
                pic: 'https://avatars2.githubusercontent.com/u/10792397?v=3&s=300',
                bio: 'Lorem ipsum...',
                twitter: '',
                linkedin: ''
            },
            {
                name: 'Adrián Ferreres Esteller',
                contribution: 'Full-stack Contributor',
                pic: 'https://avatars0.githubusercontent.com/u/3256924?v=3&s=300',
                bio: 'Lorem ipsum...',
                twitter: '',
                linkedin: ''
            },
            {
                name: 'Gonzalo Ruiz de Villa',
                contribution: 'Kata Engine Contributor',
                pic: 'https://avatars0.githubusercontent.com/u/9501?v=3&s=300',
                bio: 'Lorem ipsum...',
                twitter: '',
                linkedin: ''
            }
        ];
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(769),
        styles: [__webpack_require__(730)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialogs_leave_challenge_leave_challenge_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_throttleTime__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_throttleTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_throttleTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_codemirror_mode_javascript_javascript__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_codemirror_mode_javascript_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_codemirror_mode_javascript_javascript__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChallengeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ChallengeComponent = (function () {
    function ChallengeComponent(httpSrv, route, challengeSrv, kataSrv, socketSrv, userSrv, dialog) {
        this.httpSrv = httpSrv;
        this.route = route;
        this.challengeSrv = challengeSrv;
        this.kataSrv = kataSrv;
        this.socketSrv = socketSrv;
        this.userSrv = userSrv;
        this.dialog = dialog;
        this.codeChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
    }
    ChallengeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showEditorPane = false;
        this.leftPaneWidth = 50;
        this.resizingModeEnabled = false;
        this.code = '';
        this.config = {
            cursorBlinkRate: 200,
            lineNumbers: true,
            mode: { name: 'javascript', json: true },
            tabSize: 2,
            theme: 'material'
        };
        this.timeSpent = 0;
        this.showEditorPane = true;
        this.counterDownObs = __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].interval(1000);
        this.counterDownObs.subscribe(function (tick) {
            _this.timeSpent++;
        });
        // Get the challengeId from the url
        this.route.params.subscribe(function (params) {
            _this.challengeId = params['challengeId'];
            _this.userSrv.getUserContext()
                .then(function (user) {
                // When the user enter to the challenge view, send this request to register itself as a
                // opponent; the server will return either the user is playerA or playerB
                _this.challengeSrv.joinToChallengeRoom(_this.challengeId, user.username, _this.socketSrv.getSocketId()).subscribe(function (challenge) {
                    if (challenge) {
                        _this.kataSrv.getKata(challenge.challengeKata).subscribe(function (kata) { _this.kata = kata; }, function (err) { console.log('Error retrieving kata for challenge: ', err); });
                        _this.socketSrv.sendMessage('challenge', {
                            event: 'playerReady',
                            challengeId: _this.challengeId,
                            playerName: user.username,
                            data: 'Joined into challenge ' + _this.challengeId
                        });
                        _this.socketSrv.connectToStreaming().subscribe(function (data) { console.log('Connected; received in challenge: ', data); }, function (err) { console.log('Error connectionToStreaming(): ', err); });
                    }
                    else {
                        console.log('Error joining');
                    }
                });
            })
                .catch(function (err) { console.log('Error getUserContext(): ', err); });
            _this.codeChanged
                .debounceTime(400) // wait X ms after the last event
                .distinctUntilChanged() // only emit if value is different from previous value
                .subscribe(function (code) {
                _this.socketSrv.sendMessage('challenge', {
                    event: 'codeUpdated',
                    challengeId: _this.challengeId,
                    code: code
                });
            });
        });
    };
    ChallengeComponent.prototype.testKata = function () {
    };
    ChallengeComponent.prototype.stop = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__dialogs_leave_challenge_leave_challenge_component__["a" /* LeaveChallengeComponent */]);
    };
    ChallengeComponent.prototype.onChange = function () {
        this.codeChanged.next(this.code);
    };
    return ChallengeComponent;
}());
ChallengeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(771),
        styles: [__webpack_require__(752)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__core__["ChallengeService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__core__["ChallengeService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__core__["KataService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__core__["KataService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__core__["SocketService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__core__["SocketService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__core__["UserService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__core__["UserService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdDialog */]) === "function" && _g || Object])
], ChallengeComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=challenge.component.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentChallengeListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrentChallengeListComponent = (function () {
    function CurrentChallengeListComponent(challengeSrv) {
        this.challengeSrv = challengeSrv;
    }
    CurrentChallengeListComponent.prototype.ngOnInit = function () {
        this.reload();
    };
    CurrentChallengeListComponent.prototype.reload = function () {
        var _this = this;
        this.challenges = [];
        this.challengeSrv.getCurrentChallenges().subscribe(function (challenges) {
            _this.challenges = challenges;
        });
    };
    return CurrentChallengeListComponent;
}());
CurrentChallengeListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-current-challenge-list',
        template: __webpack_require__(773),
        styles: [__webpack_require__(732)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core__["ChallengeService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core__["ChallengeService"]) === "function" && _a || Object])
], CurrentChallengeListComponent);

var _a;
//# sourceMappingURL=current-challenge-list.component.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenStreamingDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OpenStreamingDialog = (function () {
    function OpenStreamingDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    OpenStreamingDialog.prototype.ngOnInit = function () {
        this.isEmptyChallengeId = false;
    };
    OpenStreamingDialog.prototype.joinToChallenge = function () {
        if (this.challengeId) {
            this.dialogRef.close(this.challengeId);
        }
        else {
            this.isEmptyChallengeId = true;
        }
    };
    OpenStreamingDialog.prototype.cancel = function () {
        this.dialogRef.close();
    };
    return OpenStreamingDialog;
}());
OpenStreamingDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(776)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object])
], OpenStreamingDialog);

var _a;
//# sourceMappingURL=open-streaming.component.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DIALOG_ACTIONS; });
// ToDo: Refactor and integrate into ShowErrorXXX (static member??)
// ToDo: Refactor and integrate into ShowErrorXXX (static member??)
var DIALOG_ACTIONS;
(function (DIALOG_ACTIONS) {
    DIALOG_ACTIONS[DIALOG_ACTIONS["NOP"] = 0] = "NOP";
    DIALOG_ACTIONS[DIALOG_ACTIONS["GO_HOME"] = 1] = "GO_HOME";
})(DIALOG_ACTIONS || (DIALOG_ACTIONS = {}));
;
//# sourceMappingURL=show-error-actions.enum.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_error_actions_enum__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__show_error_service__ = __webpack_require__(222);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowErrorDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShowErrorDialog = (function () {
    function ShowErrorDialog(router, dialogRef, showErrorSrv) {
        this.router = router;
        this.dialogRef = dialogRef;
        this.showErrorSrv = showErrorSrv;
    }
    ShowErrorDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.dialogTitle = this.showErrorSrv.getDialogTitle();
        this.errorMessage = this.showErrorSrv.getErrorMessage();
        this.dialogAction = this.showErrorSrv.getAction();
        this.textLabel = this.showErrorSrv.getTextLabel() || 'Ok';
        this.dialogRef.afterClosed().subscribe(function () {
            switch (_this.dialogAction) {
                // Go home
                case __WEBPACK_IMPORTED_MODULE_3__show_error_actions_enum__["a" /* DIALOG_ACTIONS */].GO_HOME:
                    _this.router.navigate(['/home']);
                    break;
                // No-op & default option
                case __WEBPACK_IMPORTED_MODULE_3__show_error_actions_enum__["a" /* DIALOG_ACTIONS */].NOP:
                default:
                    break;
            }
        });
    };
    return ShowErrorDialog;
}());
ShowErrorDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(778),
        styles: [__webpack_require__(735)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__show_error_service__["a" /* ShowErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__show_error_service__["a" /* ShowErrorService */]) === "function" && _c || Object])
], ShowErrorDialog);

var _a, _b, _c;
//# sourceMappingURL=show-error.component.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_error_component__ = __webpack_require__(221);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowErrorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowErrorService = (function () {
    function ShowErrorService(dialog) {
        this.dialog = dialog;
    }
    ShowErrorService.prototype.showErrorInDialog = function (title, errorMessage, action, textLabel) {
        this.dialogTitle = title;
        this.errorMessage = errorMessage;
        this.action = action;
        this.textLabel = textLabel;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__show_error_component__["a" /* ShowErrorDialog */]);
    };
    ShowErrorService.prototype.getDialogTitle = function () {
        return this.dialogTitle;
    };
    ShowErrorService.prototype.getErrorMessage = function () {
        return this.errorMessage;
    };
    ShowErrorService.prototype.getAction = function () {
        return this.action;
    };
    ShowErrorService.prototype.getTextLabel = function () {
        return this.textLabel;
    };
    return ShowErrorService;
}());
ShowErrorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdDialog */]) === "function" && _a || Object])
], ShowErrorService);

var _a;
//# sourceMappingURL=show-error.service.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_user_service__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(router, dialog, userSrv) {
        this.router = router;
        this.dialog = dialog;
        this.userSrv = userSrv;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSrv.getUserContext()
            .then(function (user) { return _this.event = (user.event) ? user.event : ''; })
            .catch(function () { return _this.event = ''; });
    };
    HomeComponent.prototype.startIndividual = function () {
        this.router.navigate(['/individual']);
    };
    HomeComponent.prototype.startTraining = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__dialogs__["c" /* SelectTrainingPathDialog */]);
    };
    HomeComponent.prototype.startChallenge = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__dialogs__["a" /* CreateChallengeDialog */]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(779)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__core_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_codemirror_mode_javascript_javascript__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_codemirror_mode_javascript_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_codemirror_mode_javascript_javascript__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndividualComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IndividualComponent = (function () {
    function IndividualComponent(individualKataSrv, testExecutorSrv, dialog) {
        this.individualKataSrv = individualKataSrv;
        this.testExecutorSrv = testExecutorSrv;
        this.dialog = dialog;
    }
    IndividualComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timeSpent = 0;
        this.showEditorPane = false;
        this.leftPaneWidth = 50;
        this.resizingModeEnabled = false;
        this.config = {
            cursorBlinkRate: 200,
            lineNumbers: true,
            mode: { name: 'javascript', json: true },
            tabSize: 2,
            theme: 'material'
        };
        this.individualKataSrv.getRandomKata().subscribe(function (kata) {
            _this.kata = kata;
            _this.counterDownObs = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].timer(0, 1000).subscribe(function (tick) {
                _this.timeSpent++;
            });
        }, function (err) { /* CHANGE */ alert('error retrieving random katas'); });
    };
    IndividualComponent.prototype.onSuccessKata = function () {
        console.log('on success');
        // refactor => common/core service
        this.sendNotification('Individual kata', 'Congrats! Your implementation is correct :-)');
    };
    IndividualComponent.prototype.onFailedKataAttemp = function () {
        console.log('on fail');
    };
    IndividualComponent.prototype.testKata = function () {
        this.testExecutorSrv.checkExerciseCode(this.code, this.kata.name).subscribe(function (result) {
            alert('individual.component -> revisar');
            console.log('Result: ', result);
            /*if(result.executionResult && result.output) {
                this.testResultOutput = this.testExecutorSrv.formatOutput(result.output.split('\n'));
            } else if(result.executionResult && !result.output) {
                this.testResultOutput = 'Not found nothing to test...';
            } else if(!result.executionResult) {
                this.testResultOutput = this.testExecutorSrv.formatOutput(result.output.split('\n'));
                this.counterDownObs.unsubscribe();
            }*/
        });
    };
    IndividualComponent.prototype.sendNotification = function (title, body) {
        Notification.requestPermission().then(function (result) {
            new Notification(title, {
                body: body,
                icon: './assets/images/logo_javascript.png'
            });
        });
    };
    return IndividualComponent;
}());
IndividualComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(780),
        styles: [__webpack_require__(753)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core__["IndividualService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core__["IndividualService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core__["TestExecutorService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core__["TestExecutorService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdDialog */]) === "function" && _c || Object])
], IndividualComponent);

var _a, _b, _c;
//# sourceMappingURL=individual.component.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    //languages: Array<string>;
    function LoginComponent(router, loginSrv, eventSrv) {
        this.router = router;
        this.loginSrv = loginSrv;
        this.eventSrv = eventSrv;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = '';
        this.password = '';
        this.eventSelected = '';
        this.loginSrv.logout().subscribe();
        this.eventSrv.getCurrentEvents().subscribe(function (events) { return _this.events = events; }, function (err) { return _this.events = []; });
    };
    LoginComponent.prototype.onEnter = function (event) {
        if (event.keyCode === 13)
            this.standardLogin();
    };
    LoginComponent.prototype.standardLogin = function () {
        var _this = this;
        this.loginError = '';
        this.loginSrv.login(this.username, this.password, this.eventSelected).subscribe(function (loggedUser) {
            if (loggedUser)
                _this.router.navigate(['/home']);
            else
                _this.loginError = 'Error: login error';
        }, function (err) {
            _this.loginError = 'Login error: invalid credentials';
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(782),
        styles: [__webpack_require__(737)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core__["LoginService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core__["LoginService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__core__["EventService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core__["EventService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MATERIAL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdAutocompleteModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdButtonToggleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdButtonModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdCardModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdChipsModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdCoreModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdDialogModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdGridListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdIconModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdInputModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdMenuModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdNativeDateModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MdProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MdRadioModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdSelectModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MdSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MdSlideToggleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MdSliderModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MdSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MdTabsModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MdToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MdTooltipModule */]
];
var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: MATERIAL_MODULES.slice(),
        exports: MATERIAL_MODULES.slice()
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RankingComponent = (function () {
    function RankingComponent(kataSrv) {
        var _this = this;
        this.kataSrv = kataSrv;
        this.gridOptions = {};
        // Default options
        this.gridOptions.defaultColDef = {
            width: 50,
            editable: false,
            filter: 'number'
        };
        // Configure grid
        this.rowIndex = 1;
        this.gridOptions.rowHeight = 48;
        this.gridOptions.enableSorting = true;
        this.gridOptions.enableColResize = true;
        this.gridOptions.sortingOrder = ['desc', 'asc', null];
        // Column definitions
        this.gridOptions.columnDefs = [
            {
                headerName: 'Rank',
                valueGetter: function (params) { return _this.rowIndex++; },
                width: 90,
                filter: 'number'
            },
            {
                headerName: 'Name',
                field: 'username',
                width: 200,
                filter: 'text'
            },
            {
                headerName: 'Played time',
                field: 'totalTime',
                width: 100,
                filter: 'number'
            },
            {
                headerName: '# Katas',
                field: 'numOfKatas',
                width: 100,
                filter: 'number',
                sort: 'desc'
            },
            {
                headerName: '# Attemps',
                field: 'numOfAttemps',
                width: 100,
                filter: 'number'
            },
            {
                headerName: 'Passed katas',
                field: 'passed',
                width: 100,
                filter: 'number',
                sort: 'desc'
            },
            {
                headerName: 'Failed katas',
                field: 'failed',
                width: 100,
                filter: 'number'
            }
        ];
    }
    RankingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kataSrv.getKataStats().subscribe(function (stats) {
            _this.gridOptions.api.addItems(stats);
            _this.gridOptions.api.sizeColumnsToFit();
        }, function (err) { console.log(err); });
    };
    return RankingComponent;
}());
RankingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ranking',
        template: __webpack_require__(783),
        styles: [__webpack_require__(738)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core__["KataService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core__["KataService"]) === "function" && _a || Object])
], RankingComponent);

var _a;
//# sourceMappingURL=ranking.component.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventDialogComponent = (function () {
    function EventDialogComponent(dialogRef, eventSrv) {
        this.dialogRef = dialogRef;
        this.eventSrv = eventSrv;
    }
    EventDialogComponent.prototype.ngOnInit = function () {
        this.showWaitingBackendCall = false;
        this.showError = false;
        this.errorMessage = '';
    };
    EventDialogComponent.prototype.filterAfterNow = function (d) {
        return d.getTime() >= __WEBPACK_IMPORTED_MODULE_3_moment__().add(-1, 'days').valueOf();
    };
    EventDialogComponent.prototype.createEvent = function () {
        var _this = this;
        if (this.name && this.startDate && this.description) {
            this.showWaitingBackendCall = true;
            this.showError = false;
            this.errorMessage = '';
            this.eventSrv.createEvent(this.name, this.startDate, this.description, this.urlMaps, this.endDate).subscribe(function (result) { _this.dialogRef.close({ result: result }); }, function (err) { _this.errorMessage = err; });
        }
        else {
            this.showError = true;
            this.errorMessage = 'Sorry, to create an event, you should fill all the required fields.';
            this.showWaitingBackendCall = false;
        }
    };
    EventDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close(null);
    };
    return EventDialogComponent;
}());
EventDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-event-dialog',
        template: __webpack_require__(784),
        styles: [__webpack_require__(739)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core__["EventService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core__["EventService"]) === "function" && _b || Object])
], EventDialogComponent);

var _a, _b;
//# sourceMappingURL=event-dialog.component.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_dialog_event_dialog_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_ag_grid_checkbox__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventsComponent = (function () {
    function EventsComponent(dialog, snackBar, eventSrv) {
        var _this = this;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.eventSrv = eventSrv;
        this.gridOptions = {};
        // Default options
        this.gridOptions.defaultColDef = {
            width: 50,
            editable: true,
            filter: 'text'
        };
        // Configure grid
        this.gridOptions.rowHeight = 48;
        this.gridOptions.editType = 'fullRow';
        this.gridOptions.animateRows = true;
        this.gridOptions.enableFilter = true;
        this.gridOptions.enableSorting = true;
        this.gridOptions.enableColResize = true;
        this.gridOptions.singleClickEdit = false;
        this.gridOptions.stopEditingWhenGridLosesFocus = true;
        this.gridOptions.sortingOrder = ['desc', 'asc', null];
        this.gridOptions.rowSelection = 'multiple';
        this.gridOptions.icons = {
            checkboxChecked: __WEBPACK_IMPORTED_MODULE_3__settings_ag_grid_checkbox__["a" /* SettingsAgGridMaterialCheckbox */].CB_ICON
        };
        this.gridOptions.onRowEditingStarted = function (event) {
            _this.auxEditRow = Object.assign({}, event.node.data);
        };
        this.gridOptions.onRowEditingStopped = function (event) {
            if (!_this.isTheSameEventRow(_this.auxEditRow, event.node.data))
                _this.editEvent(event.node.data);
        };
        this.gridOptions.columnDefs = [
            {
                headerName: '',
                field: 'selectRow',
                headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                suppressFilter: true,
                width: 25
            },
            {
                headerName: 'Name',
                field: 'name',
                width: 130,
                filter: 'text'
            },
            {
                headerName: 'Description',
                field: 'description',
                width: 250,
                filter: 'text'
            },
            {
                headerName: 'Start date',
                field: 'date.startDate',
                width: 80,
                filter: 'date',
                cellRenderer: this.formatDate,
                cellClass: 'center-column-content'
            },
            {
                headerName: 'End date',
                field: 'date.endDate',
                width: 80,
                filter: 'date',
                cellRenderer: this.formatDate,
                cellClass: 'center-column-content'
            },
            {
                headerName: 'Where',
                field: 'urlLoc',
                width: 60,
                cellRenderer: this.buildGoogleMapsURL,
                cellEditor: 'text',
                cellClass: 'center-column-content',
                suppressMenu: true,
                suppressSorting: true,
                suppressToolPanel: true
            },
            {
                headerName: 'Enabled?',
                field: 'enabled',
                width: 70,
                cellRenderer: function (params) { return (params.value) ? 'Yes' : 'No'; },
                cellEditor: 'select',
                cellEditorParams: {
                    values: ['Yes', 'No']
                },
                cellClass: 'center-column-content'
            }
        ];
    }
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventSrv.getAllInfoOfEvents()
            .subscribe(function (events) {
            _this.gridOptions.api.addItems(events);
            _this.gridOptions.api.sizeColumnsToFit();
        }, function (err) { return console.log(err); });
    };
    EventsComponent.prototype.createNewEvent = function () {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__event_dialog_event_dialog_component__["a" /* EventDialogComponent */]).afterClosed().subscribe(function (event) {
            if (event) {
                _this.gridOptions.api.addItems(event);
                _this.gridOptions.api.sizeColumnsToFit();
            }
        });
    };
    EventsComponent.prototype.editEvent = function (event) {
        var _this = this;
        if (event) {
            this.eventSrv.updateEvent(event).subscribe(function (res) {
                var config = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdSnackBarConfig */]();
                config.duration = 3500;
                config.extraClasses = null;
                _this.snackBarRef = _this.snackBar.open('Event modified successfully!', 'I got it!', config);
                //this.snackBarRef.onAction().subscribe(() => { });
            }, function (err) { console.log(err); });
        }
        else {
            var rowSelected = this.gridOptions.api.getSelectedNodes();
            this.gridOptions.api.setFocusedCell(rowSelected[0].rowIndex || 0, 'name');
            this.gridOptions.api.startEditingCell({
                rowIndex: rowSelected[0].rowIndex || 0,
                colKey: 'name'
            });
        }
    };
    EventsComponent.prototype.deleteEvents = function () {
        var _this = this;
        var eventsToDelete = this.gridOptions.api.getSelectedNodes();
        if (eventsToDelete && eventsToDelete.length > 0) {
            var ids = eventsToDelete.map(function (e) { return e.data._id; });
            this.eventSrv.deleteEvents(ids).subscribe(function (res) {
                _this.gridOptions.api.removeItems(eventsToDelete);
            }, function (err) { console.log(err); });
        }
    };
    EventsComponent.prototype.formatDate = function (params) {
        return (params.value) ? __WEBPACK_IMPORTED_MODULE_5_moment__(params.value).format('L') : '--';
    };
    EventsComponent.prototype.buildGoogleMapsURL = function (params) {
        var url = params.value;
        if (!url) {
            return '';
        }
        if (!url.startsWith('http://') && !url.startsWith('https://'))
            url = 'https://'.concat(url);
        return "<a href=\"" + url + "\" target=\"_blank\"><i class=\"fa fa-map\" aria-hidden=\"true\"></i></a>";
    };
    EventsComponent.prototype.isTheSameEventRow = function (modelA, modelB) {
        return (modelA.name === modelB.name && modelA.description === modelB.description &&
            modelA.date.start === modelB.date.start && modelA.date.end === modelB.date.end &&
            modelA.urlLoc === modelB.urlLoc && modelA.enabled && modelB.enabled);
    };
    return EventsComponent;
}());
EventsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-events',
        template: __webpack_require__(785),
        styles: [__webpack_require__(740)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__core__["EventService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core__["EventService"]) === "function" && _c || Object])
], EventsComponent);

var _a, _b, _c;
//# sourceMappingURL=events.component.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_module__ = __webpack_require__(541);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__settings_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_routes__ = __webpack_require__(234);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__settings_routes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_component__ = __webpack_require__(159);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__learning_path_learning_path_component__ = __webpack_require__(158);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__kata_kata_component__ = __webpack_require__(157);
/* unused harmony namespace reexport */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KataDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KataDialogComponent = (function () {
    function KataDialogComponent(dialogRef, kataSrv) {
        this.dialogRef = dialogRef;
        this.kataSrv = kataSrv;
    }
    KataDialogComponent.prototype.ngOnInit = function () {
        this.stepIndex = 'step-1';
        //this.dialogRef.afterClosed().subscribe(() => {});
        this.showWaitingBackendCall = false;
        this.showError = false;
        this.errorMessage = '';
    };
    KataDialogComponent.prototype.nextStep = function () {
        switch (this.stepIndex) {
            case 'step-1':
                this.stepIndex = 'step-2';
                break;
            case 'step-2':
                this.stepIndex = 'step-3';
                break;
        }
    };
    KataDialogComponent.prototype.previousStep = function () {
        switch (this.stepIndex) {
            case 'step-2':
                this.stepIndex = 'step-1';
                break;
            case 'step-3':
                this.stepIndex = 'step-2';
                break;
        }
    };
    KataDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close(null);
    };
    KataDialogComponent.prototype.createLearningPath = function () {
        /*if(this.topic && this.name && this.description) {
            this.showWaitingBackendCall = true;
            this.showError = false;
            this.errorMessage = '';
            this.kataSrv.createTrainingPath(this.topic, this.name, this.description)
                .subscribe((addedTrainingPath) => {
                      alert(JSON.stringify(addedTrainingPath));
                      
                      // Cambiar el nombre del botón de "create" a "close"
                      // o cerrar directamente el dialog y refrescar la tabla con una nueva llamada
                      // o cerrar directamente y mostrar un snack toast de esos de abajo

                      // Cambiar el formato de fecha mostrado
                });
        } else {
            this.showError = true;
            this.errorMessage = 'Sorry, to create a training path, you should fill all the required fields.';
            this.showWaitingBackendCall = false;
        }*/
    };
    return KataDialogComponent;
}());
KataDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-kata-dialog',
        template: __webpack_require__(786),
        styles: [__webpack_require__(741)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('formSteps', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('step-1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    transform: 'translate3d(0%, 0, 0)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('step-2', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    transform: 'translate3d(-33.33%, 0, 0)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('step-3', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    transform: 'translate3d(-66.66%, 0, 0)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-in-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core__["KataService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core__["KataService"]) === "function" && _b || Object])
], KataDialogComponent);

var _a, _b;
//# sourceMappingURL=kata-dialog.component.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LanguagesComponent = (function () {
    function LanguagesComponent() {
    }
    LanguagesComponent.prototype.ngOnInit = function () {
    };
    return LanguagesComponent;
}());
LanguagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-languages',
        template: __webpack_require__(788),
        styles: [__webpack_require__(743)]
    }),
    __metadata("design:paramtypes", [])
], LanguagesComponent);

//# sourceMappingURL=languages.component.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LpDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LpDialogComponent = (function () {
    function LpDialogComponent(dialogRef, trainingSrv) {
        this.dialogRef = dialogRef;
        this.trainingSrv = trainingSrv;
    }
    LpDialogComponent.prototype.ngOnInit = function () {
        //this.dialogRef.afterClosed().subscribe(() => {});
        this.showWaitingBackendCall = false;
        this.showError = false;
        this.errorMessage = '';
    };
    LpDialogComponent.prototype.createLearningPath = function () {
        if (this.topic && this.name && this.description) {
            this.showWaitingBackendCall = true;
            this.showError = false;
            this.errorMessage = '';
            this.trainingSrv.createTrainingPath(this.topic, this.name, this.description)
                .subscribe(function (addedTrainingPath) {
                alert(JSON.stringify(addedTrainingPath));
                // Cambiar el nombre del botón de "create" a "close"
                // o cerrar directamente el dialog y refrescar la tabla con una nueva llamada
                // o cerrar directamente y mostrar un snack toast de esos de abajo
                // Cambiar el formato de fecha mostrado 
            });
        }
        else {
            this.showError = true;
            this.errorMessage = 'Sorry, to create a training path, you should fill all the required fields.';
            this.showWaitingBackendCall = false;
        }
    };
    return LpDialogComponent;
}());
LpDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(790),
        styles: [__webpack_require__(745)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core__["TrainingService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core__["TrainingService"]) === "function" && _b || Object])
], LpDialogComponent);

var _a, _b;
//# sourceMappingURL=lp-dialog.component.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_users_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__learning_path_learning_path_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kata_kata_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_events_component__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__languages_languages_component__ = __webpack_require__(232);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsRoutes; });





var SettingsRoutes = [
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_0__users_users_component__["a" /* UsersComponent */] },
    { path: 'learning-paths', component: __WEBPACK_IMPORTED_MODULE_1__learning_path_learning_path_component__["a" /* LearningPathComponent */] },
    { path: 'katas', component: __WEBPACK_IMPORTED_MODULE_2__kata_kata_component__["a" /* KataComponent */] },
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_3__events_events_component__["a" /* EventsComponent */] },
    { path: 'languages', component: __WEBPACK_IMPORTED_MODULE_4__languages_languages_component__["a" /* LanguagesComponent */] }
];
//# sourceMappingURL=settings.routes.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDialogComponent = (function () {
    function UserDialogComponent(usersSrv, dialogRef, formBuilder) {
        this.usersSrv = usersSrv;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.createUserForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(4)]),
            confirmPassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(4)]),
            rol: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email])
        });
    }
    UserDialogComponent.prototype.ngOnInit = function () {
        this.showWaitingBackendCall = false;
        this.showError = false;
        this.errorMessage = '';
    };
    UserDialogComponent.prototype.onSubmittedForm = function () {
        if (1 /*this.name*/) {
            this.showWaitingBackendCall = true;
            this.showError = false;
            this.errorMessage = '';
            this.usersSrv.createUser(this.createUserForm.value).subscribe(function (result) { console.log('user creation result: ', result); }, function (err) { console.log('error user creation: ', err); });
        }
        else {
            this.showError = true;
            this.errorMessage = 'Sorry, to create an event, you should fill all the required fields.';
            this.showWaitingBackendCall = false;
        }
    };
    UserDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close(null);
    };
    return UserDialogComponent;
}());
UserDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-dialog',
        template: __webpack_require__(792),
        styles: [__webpack_require__(747)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core__["UsersService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core__["UsersService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _c || Object])
], UserDialogComponent);

var _a, _b, _c;
//# sourceMappingURL=user-dialog.component.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_dialog_user_dialog_component__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_ag_grid_checkbox__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersComponent = (function () {
    function UsersComponent(dialog, usersSrv) {
        this.dialog = dialog;
        this.usersSrv = usersSrv;
        this.gridOptions = {};
        // Default options
        this.gridOptions.defaultColDef = {
            width: 50,
            editable: true,
            filter: 'text'
        };
        // Configure grid
        this.gridOptions.rowHeight = 48;
        this.gridOptions.editType = 'fullRow';
        this.gridOptions.animateRows = true;
        this.gridOptions.enableFilter = true;
        this.gridOptions.enableSorting = true;
        this.gridOptions.enableColResize = true;
        this.gridOptions.singleClickEdit = false;
        this.gridOptions.stopEditingWhenGridLosesFocus = true;
        this.gridOptions.sortingOrder = ['desc', 'asc', null];
        this.gridOptions.rowSelection = 'multiple';
        this.gridOptions.icons = {
            checkboxChecked: __WEBPACK_IMPORTED_MODULE_3__settings_ag_grid_checkbox__["a" /* SettingsAgGridMaterialCheckbox */].CB_ICON
        };
        this.gridOptions.onRowEditingStarted = function (event) {
            //this.auxEditRow = Object.assign({}, event.node.data);
        };
        this.gridOptions.onRowEditingStopped = function (event) {
            /*if(!this.isTheSameEventRow(this.auxEditRow, event.node.data))
                this.editEvent(event.node.data);*/
        };
        this.gridOptions.columnDefs = [
            {
                headerName: '',
                field: 'selectRow',
                headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                suppressFilter: true,
                width: 25
            },
            {
                headerName: 'Username',
                field: 'username',
                width: 120,
                filter: 'text'
            },
            {
                headerName: 'Name',
                field: 'name',
                width: 150,
                filter: 'text'
            },
            {
                headerName: 'Rol',
                field: 'rol',
                width: 80,
                filter: 'text'
            },
            {
                headerName: 'Enabled?',
                field: 'enabled',
                width: 70,
                cellRenderer: function (params) { return (params.value) ? 'Yes' : 'No'; },
                cellEditor: 'select',
                cellEditorParams: {
                    values: ['Yes', 'No']
                },
                cellClass: 'center-column-content'
            }
        ];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersSrv.getAllUsers().subscribe(function (users) {
            _this.gridOptions.api.addItems(users);
            _this.gridOptions.api.sizeColumnsToFit();
        }, function (err) { return console.log(err); });
    };
    UsersComponent.prototype.createNewUser = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__user_dialog_user_dialog_component__["a" /* UserDialogComponent */]).afterClosed().subscribe(function (x) {
            console.log('Cerrado', x);
        });
    };
    UsersComponent.prototype.editUser = function () {
    };
    UsersComponent.prototype.deleteUsers = function () {
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__(793),
        styles: [__webpack_require__(748)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core__["UsersService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core__["UsersService"]) === "function" && _b || Object])
], UsersComponent);

var _a, _b;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_codemirror_mode_javascript_javascript__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_codemirror_mode_javascript_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_codemirror_mode_javascript_javascript__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StreamingComponent = (function () {
    function StreamingComponent(route, challengeSrv, socketSrv) {
        this.route = route;
        this.challengeSrv = challengeSrv;
        this.socketSrv = socketSrv;
    }
    StreamingComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Global view config
        this.timeSpent = 0;
        this.counterDownObs = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].interval(1000);
        this.counterDownObs.subscribe(function (tick) {
            _this.timeSpent++;
        });
        // Editor's config
        this.config = {
            cursorBlinkRate: 200,
            lineNumbers: true,
            mode: { name: "javascript", json: true },
            readOnly: true,
            tabSize: 2,
            theme: 'material'
        };
        // Initialitate the code editors
        this.codePlayerA = '';
        this.codePlayerB = '';
        // Send challenge signal-message and join into a challenge room
        this.route.params.subscribe(function (params) {
            var challengeId = params['challengeId'];
            _this.socketSrv.sendMessage('challenge', {
                event: 'joinToChallenge',
                challengeId: challengeId
            });
            _this.challengeSrv.getChallengeInfo(challengeId).subscribe(function (challenge) { return _this.currentChallenge = challenge; });
        });
        // Connect to streaming
        this.socketSrv.connectToStreaming().subscribe(function (data) {
            if (data.event === 'codeUpdated') {
                if (data.who === _this.currentChallenge.playerA)
                    _this.codePlayerA = data.code;
                else
                    _this.codePlayerB = data.code;
            }
            else if (data.event === 'playerReady') {
                if (data.playerId === _this.currentChallenge.playerA)
                    _this.currentChallenge.usernamePlayerA = data.playerName;
                else
                    _this.currentChallenge.usernamePlayerB = data.playerName;
            }
        });
    };
    return StreamingComponent;
}());
StreamingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-streaming',
        template: __webpack_require__(794),
        styles: [__webpack_require__(749)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core__["ChallengeService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core__["ChallengeService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core__["SocketService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core__["SocketService"]) === "function" && _c || Object])
], StreamingComponent);

var _a, _b, _c;
//# sourceMappingURL=streaming.component.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialogs___ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrainingComponent = (function () {
    function TrainingComponent(router, route, dialog, trainingSrv, showErrorSrv) {
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.trainingSrv = trainingSrv;
        this.showErrorSrv = showErrorSrv;
    }
    TrainingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentExerciseIndex = 0;
        this.route.params.subscribe(function (params) {
            _this.topic = params['topic'];
            _this.trainingSrv.getKatasOfTrainingPath(_this.topic).subscribe(function (trainingPath) {
                if (trainingPath && trainingPath.katas && trainingPath.katas.length > 0) {
                    _this.trainingPath = trainingPath;
                    _this.trainingPathLength = trainingPath.katas.length;
                    _this.currentExercise = trainingPath.katas[_this.currentExerciseIndex];
                    _this.selectedValue = trainingPath.katas[_this.currentExerciseIndex].name;
                }
                else {
                    _this.showErrorSrv.showErrorInDialog('Ups! An error has occurred...', 'Sorry, an error has been occurred retrieving the training path...', __WEBPACK_IMPORTED_MODULE_4__dialogs___["f" /* DIALOG_ACTIONS */].GO_HOME, 'Go to home!');
                }
            });
        });
    };
    TrainingComponent.prototype.onSelectedChange = function (e) {
        var length = this.trainingPath.katas.length;
        for (var i = 0; i < length; i++) {
            if (this.trainingPath.katas[i].name === e.value) {
                this.currentExercise = this.trainingPath.katas[i];
                this.selectedValue = this.trainingPath.katas[i].name;
                this.currentExerciseIndex = i;
            }
        }
    };
    TrainingComponent.prototype.onSuccessKata = function () {
    };
    TrainingComponent.prototype.onFailedKataAttemp = function () {
    };
    TrainingComponent.prototype.onNextExercise = function () {
        this.nextExerciseIndex();
        this.currentExercise = this.trainingPath.katas[this.currentExerciseIndex];
        this.selectedValue = this.currentExercise.name;
    };
    TrainingComponent.prototype.nextExerciseIndex = function () {
        this.currentExerciseIndex = (this.currentExerciseIndex !== this.trainingPath.katas.length - 1)
            ? ++this.currentExerciseIndex
            : 0;
    };
    TrainingComponent.prototype.updateIndicators = function () {
        // Current index
    };
    return TrainingComponent;
}());
TrainingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(795),
        styles: [__webpack_require__(750)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__core__["TrainingService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core__["TrainingService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__dialogs___["e" /* ShowErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__dialogs___["e" /* ShowErrorService */]) === "function" && _e || Object])
], TrainingComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=training.component.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 503:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 503;


/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(516);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialogs_open_streaming_open_streaming_component__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(router, dialog, loginSrv) {
        this.router = router;
        this.dialog = dialog;
        this.loginSrv = loginSrv;
        this.title = 'JavaScript Katas Player!';
        this.isLoginPage = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]; })
            .subscribe(function (navigationEnd) { return _this.isLoginPage = !(_this.router.url === '/' || _this.router.url === '/login'); });
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.loginSrv.logout().subscribe(function (response) { return _this.router.navigate(['/']); }, function (error) { return _this.router.navigate(['/']); });
    };
    AppComponent.prototype.goHome = function () {
        this.router.navigate(['/home']);
    };
    AppComponent.prototype.openCurrentChallenges = function () {
        this.router.navigate(['/challenge-list']);
    };
    AppComponent.prototype.openStreamingMode = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialogs_open_streaming_open_streaming_component__["a" /* OpenStreamingDialog */]);
        dialogRef.afterClosed().subscribe(function (challengeId) {
            if (challengeId) {
                _this.router.navigate(['/streaming', challengeId]);
            }
        });
    };
    AppComponent.prototype.openRanking = function () {
        this.router.navigate(['/ranking']);
    };
    AppComponent.prototype.openSettings = function () {
        this.router.navigate(['/settings']);
    };
    AppComponent.prototype.openAbout = function () {
        this.router.navigate(['/about']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(770),
        styles: [__webpack_require__(751)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core__["LoginService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core__["LoginService"]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_material_module__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__individual_individual_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chronometer_chronometer_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__kata_player_kata_player_component__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__training_training_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__challenge_challenge_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__current_challenge_list_current_challenge_list_component__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__streaming_streaming_component__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dialogs_leave_challenge_leave_challenge_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ranking_ranking_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__about_about_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dialogs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_codemirror__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_codemirror___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ng2_codemirror__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ag_grid_angular_main__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ag_grid_angular_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ag_grid_angular_main__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_hammerjs__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_hammerjs__);
/* unused harmony export httpRequestInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Modules


// Routes

// TODO: refactor to group them with spread operator













// Dialogs, Pipes & Services




// 3rd party libraries



function httpRequestInterceptor(backend, opts, authSrv, router) {
    return new __WEBPACK_IMPORTED_MODULE_23__core__["HttpService"](backend, opts, authSrv, router);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__individual_individual_component__["a" /* IndividualComponent */],
            __WEBPACK_IMPORTED_MODULE_13__kata_player_kata_player_component__["a" /* KataPlayerComponent */],
            __WEBPACK_IMPORTED_MODULE_12__chronometer_chronometer_component__["a" /* ChronometerComponent */],
            __WEBPACK_IMPORTED_MODULE_14__training_training_component__["a" /* TrainingComponent */],
            __WEBPACK_IMPORTED_MODULE_15__challenge_challenge_component__["a" /* ChallengeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__current_challenge_list_current_challenge_list_component__["a" /* CurrentChallengeListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__streaming_streaming_component__["a" /* StreamingComponent */],
            __WEBPACK_IMPORTED_MODULE_23__core__["TimeElapsedPipe"],
            __WEBPACK_IMPORTED_MODULE_22__dialogs__["a" /* CreateChallengeDialog */],
            __WEBPACK_IMPORTED_MODULE_22__dialogs__["b" /* OpenStreamingDialog */],
            __WEBPACK_IMPORTED_MODULE_22__dialogs__["c" /* SelectTrainingPathDialog */],
            __WEBPACK_IMPORTED_MODULE_22__dialogs__["d" /* ShowErrorDialog */],
            __WEBPACK_IMPORTED_MODULE_19__dialogs_leave_challenge_leave_challenge_component__["a" /* LeaveChallengeComponent */],
            __WEBPACK_IMPORTED_MODULE_20__ranking_ranking_component__["a" /* RankingComponent */],
            __WEBPACK_IMPORTED_MODULE_21__about_about_component__["a" /* AboutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__settings__["a" /* SettingsModule */],
            __WEBPACK_IMPORTED_MODULE_24_ng2_codemirror__["CodemirrorModule"],
            __WEBPACK_IMPORTED_MODULE_7__material_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* ROUTES */]),
            __WEBPACK_IMPORTED_MODULE_25_ag_grid_angular_main__["AgGridModule"].withComponents([])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_23__core__["AuthenticationService"],
            __WEBPACK_IMPORTED_MODULE_23__core__["AuthenticationGuard"],
            __WEBPACK_IMPORTED_MODULE_23__core__["ChallengeService"],
            __WEBPACK_IMPORTED_MODULE_23__core__["EventService"],
            __WEBPACK_IMPORTED_MODULE_23__core__["HttpService"],
            __WEBPACK_IMPORTED_MODULE_23__core__["IndividualService"],
            {
                provide: __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
                useFactory: httpRequestInterceptor,
                deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_23__core__["AuthenticationService"], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]]
            },
            __WEBPACK_IMPORTED_MODULE_23__core__["KataService"],
            __WEBPACK_IMPORTED_MODULE_23__core__["LoginService"],
            __WEBPACK_IMPORTED_MODULE_22__dialogs__["e" /* ShowErrorService */],
            __WEBPACK_IMPORTED_MODULE_23__core__["SocketService"],
            __WEBPACK_IMPORTED_MODULE_23__core__["TestExecutorService"],
            __WEBPACK_IMPORTED_MODULE_23__core__["TrainingService"],
            __WEBPACK_IMPORTED_MODULE_23__core__["UserService"],
            __WEBPACK_IMPORTED_MODULE_23__core__["UsersService"]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_22__dialogs__["a" /* CreateChallengeDialog */],
            __WEBPACK_IMPORTED_MODULE_22__dialogs__["b" /* OpenStreamingDialog */],
            __WEBPACK_IMPORTED_MODULE_22__dialogs__["c" /* SelectTrainingPathDialog */],
            __WEBPACK_IMPORTED_MODULE_22__dialogs__["d" /* ShowErrorDialog */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__individual_individual_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__training_training_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__challenge_challenge_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__current_challenge_list_current_challenge_list_component__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__streaming_streaming_component__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ranking_ranking_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings_settings_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__settings__ = __webpack_require__(230);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });












var ROUTES = [
    //{ path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__core__["AuthenticationGuard"]] },
    { path: 'individual', component: __WEBPACK_IMPORTED_MODULE_3__individual_individual_component__["a" /* IndividualComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__core__["AuthenticationGuard"]] },
    { path: 'training/:topic', component: __WEBPACK_IMPORTED_MODULE_4__training_training_component__["a" /* TrainingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__core__["AuthenticationGuard"]] },
    { path: 'challenge', component: __WEBPACK_IMPORTED_MODULE_5__challenge_challenge_component__["a" /* ChallengeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__core__["AuthenticationGuard"]] },
    { path: 'challenge/:challengeId', component: __WEBPACK_IMPORTED_MODULE_5__challenge_challenge_component__["a" /* ChallengeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__core__["AuthenticationGuard"]] },
    { path: 'challenge-list', component: __WEBPACK_IMPORTED_MODULE_6__current_challenge_list_current_challenge_list_component__["a" /* CurrentChallengeListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__core__["AuthenticationGuard"]] },
    { path: 'streaming/:challengeId', component: __WEBPACK_IMPORTED_MODULE_7__streaming_streaming_component__["a" /* StreamingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__core__["AuthenticationGuard"]] },
    { path: 'ranking', component: __WEBPACK_IMPORTED_MODULE_8__ranking_ranking_component__["a" /* RankingComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_9__settings_settings_component__["a" /* SettingsComponent */], children: __WEBPACK_IMPORTED_MODULE_11__settings__["b" /* SettingsRoutes */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__core__["AuthenticationGuard"]] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */] },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChronometerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChronometerComponent = (function () {
    function ChronometerComponent() {
        this.chronometer = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ChronometerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.overduedExercise = false;
        this.direction = this.direction.toUpperCase();
        if (this.direction === 'ASC' && this.duration >= 0) {
            this.timeElapsed = 0;
        }
        else if (this.direction === 'DESC' && this.duration >= 0) {
            this.timeElapsed = this.duration * 60; // Convert the minutes into seconds
        }
        else {
            throw new Error('KataChronometer input params are invalid');
        }
        this.counterDownObs = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].timer(0, 1000).subscribe(function (tick) {
            // Update time elapsed
            _this.timeElapsed = (_this.direction === 'ASC') ? _this.timeElapsed + 1 : _this.timeElapsed - 1;
            // For every tick, emit an event
            _this.chronometer.emit({
                event: 'tick',
                value: _this.timeElapsed
            });
            // Send other events (overdue) when duration is enabled (this.duration)
            if (_this.duration > 0 && !_this.overduedExercise) {
                if (_this.direction === 'ASC' && _this.duration * 60 > _this.timeElapsed) {
                    _this.overduedExercise = true;
                    _this.chronometer.emit({
                        event: 'overdue',
                        value: _this.overduedExercise
                    });
                }
                else if (_this.direction === 'DESC' && _this.timeElapsed < 0) {
                    _this.overduedExercise = true;
                    _this.chronometer.emit({
                        event: 'overdue',
                        value: _this.overduedExercise
                    });
                }
            }
        });
    };
    return ChronometerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ChronometerComponent.prototype, "mode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ChronometerComponent.prototype, "duration", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ChronometerComponent.prototype, "direction", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ChronometerComponent.prototype, "chronometer", void 0);
ChronometerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'kata-chronometer',
        template: __webpack_require__(772),
        styles: [__webpack_require__(731)]
    }),
    __metadata("design:paramtypes", [])
], ChronometerComponent);

//# sourceMappingURL=chronometer.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationGuard = (function () {
    function AuthenticationGuard(router, authSrv) {
        this.router = router;
        this.authSrv = authSrv;
    }
    AuthenticationGuard.prototype.canActivate = function (nextRoute, state) {
        if (this.authSrv.isLoggedIn()) {
            return true;
        }
        else {
            //this.router.navigate(['/login'], { queryParams: { status: 'expired' }});
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthenticationGuard;
}());
AuthenticationGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], AuthenticationGuard);

var _a, _b;
//# sourceMappingURL=authentication.guard.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Challenge */
/* unused harmony export ChallengeStatus */
/* unused harmony export ChallengeResult */
var Challenge = (function () {
    function Challenge(id, playerId) {
        this.challengeId = id;
        this.creator = playerId;
        this.timestamp = new Date();
        this.status = ChallengeStatus.WAITING;
    }
    return Challenge;
}());

var ChallengeStatus;
(function (ChallengeStatus) {
    ChallengeStatus[ChallengeStatus["WAITING"] = 0] = "WAITING";
    ChallengeStatus[ChallengeStatus["PLAYING"] = 1] = "PLAYING";
    ChallengeStatus[ChallengeStatus["ENDED"] = 2] = "ENDED";
})(ChallengeStatus || (ChallengeStatus = {}));
;
var ChallengeResult = (function () {
    function ChallengeResult() {
    }
    return ChallengeResult;
}());

//# sourceMappingURL=Challenge.js.map

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

//# sourceMappingURL=Event.js.map

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

//# sourceMappingURL=Kata.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TrainingPath */
var TrainingPath = (function () {
    function TrainingPath() {
    }
    return TrainingPath;
}());

//# sourceMappingURL=TrainingPaths.js.map

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeElapsedPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeElapsedPipe = (function () {
    function TimeElapsedPipe() {
    }
    TimeElapsedPipe.prototype.transform = function (secs) {
        if (secs >= 0) {
            var min = Math.floor(secs / 60);
            var sec = secs % 60;
            return min + "min " + sec + "sec";
        }
        else {
            var min = Math.floor(-secs / 60);
            var sec = -secs % 60;
            return "-" + min + "min " + sec + "sec";
        }
    };
    return TimeElapsedPipe;
}());
TimeElapsedPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'timeSpent' })
], TimeElapsedPipe);

//# sourceMappingURL=time.pipe.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChallengeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChallengeService = (function () {
    function ChallengeService(httpSrv) {
        this.httpSrv = httpSrv;
    }
    /**
     * Get all the current challenges
     * @retuns {Observable<Array<Challenge>} challenges.
     */
    ChallengeService.prototype.getCurrentChallenges = function () {
        return this.httpSrv.get('/api/challenges')
            .map(function (res) { return res.json(); })
            .catch(function (res) { return res.json().error; });
    };
    /**
     * Create new challenge, assign a identifier and returns it.
     * @param playerId {string} the socketId.
     * @returns {string} UUID (v4).
     */
    ChallengeService.prototype.createChallengeId = function (playerId, direction, duration, mode) {
        return this.httpSrv.post('/api/challenges/create', {
            playerId: playerId,
            direction: direction,
            duration: duration,
            mode: mode
        })
            .map(function (res) { return res.json(); })
            .catch(function (res) { return res.json(); });
    };
    /**
     * Return all the information related to the specified challenge.
     * @param challengeId {string} the challenge identifier.
     * @returns {Challenge} challenge.
     */
    ChallengeService.prototype.getChallengeInfo = function (challengeId) {
        return this.httpSrv.get('/api/challenges/challenge/' + challengeId)
            .map(function (res) { return res.json(); })
            .catch(function (res) { return res.json(); });
    };
    /**
     * Check if exists a specified challenge.
     * @param challengeId {string} the challenge identifier.
     * @returns {boolean} exists.
     */
    ChallengeService.prototype.checkIfChallengeIdExists = function (challengeId) {
        return this.httpSrv.get('/api/challenges/check-challenge-id/' + challengeId)
            .map(function (res) { return res.json(); })
            .catch(function (res) { return res.json(); });
    };
    /**
     * Add the user into a challenge room.
     * @param challengeId {string} the challenge identifier.
     * @param socketId {SocketIO.client} the client-side socket.
     */
    ChallengeService.prototype.joinToChallengeRoom = function (challengeId, username, socketId) {
        return this.httpSrv.post('/api/challenges/join', {
            challengeId: challengeId,
            username: username,
            playerId: socketId
        })
            .map(function (res) { return res.json(); })
            .catch(function (res) { return res.json(); });
    };
    return ChallengeService;
}());
ChallengeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ChallengeService);

var _a;
//# sourceMappingURL=challenge.service.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventService = (function () {
    function EventService(httpSrv) {
        this.httpSrv = httpSrv;
    }
    EventService.prototype.getCurrentEvents = function () {
        return this.httpSrv.get('/api/events')
            .map(function (res) { return res.json(); })
            .catch(function (err) { return err.json().error; });
    };
    EventService.prototype.getAllInfoOfEvents = function () {
        return this.httpSrv.get('/api/events/all')
            .map(function (res) { return res.json(); })
            .catch(function (err) { return err.json().error; });
    };
    EventService.prototype.createEvent = function (name, startDate, desc, urlMaps, endDate) {
        return this.httpSrv.post('/api/events', {
            name: name,
            startDate: startDate,
            description: desc,
            endDate: endDate,
            urlLoc: urlMaps
        })
            .map(function (res) { return res.json(); })
            .catch(function (err) { return err.json().error; });
    };
    EventService.prototype.updateEvent = function (eventToModify) {
        return this.httpSrv.put('/api/events', { eventToModify: eventToModify })
            .map(function (res) { return res.json(); })
            .catch(function (err) { return err.json().error; });
    };
    EventService.prototype.deleteEvents = function (eventsToDelete) {
        return this.httpSrv.post('/api/events/delete', { eventIds: eventsToDelete })
            .map(function (res) { return res.json(); })
            .catch(function (err) { return err.json().error; });
    };
    return EventService;
}());
EventService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], EventService);

var _a;
//# sourceMappingURL=event.service.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_service__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, defaultOptions, authSrv, router) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.authSrv = authSrv;
        _this.router = router;
        return _this;
    }
    HttpService.prototype.request = function (url, options) {
        if (typeof url === 'string') {
            if (!options) {
                options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]() };
            }
            this.setHeaders(options);
        }
        else {
            this.setHeaders(url);
        }
        return _super.prototype.request.call(this, url, options).catch(this.catchErrors());
    };
    HttpService.prototype.catchErrors = function () {
        var _this = this;
        return function (res) {
            if (res.status === 401 || res.status === 403) {
                _this.router.navigate(['/login']);
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(res);
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(res);
            }
        };
    };
    HttpService.prototype.setHeaders = function (objectToSetHeadersTo) {
        objectToSetHeadersTo.headers.set('Authorization', "Bearer " + this.authSrv.getJwtToken());
    };
    return HttpService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]));
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* XHRBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* XHRBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], HttpService);

var _a, _b, _c, _d;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndividualService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndividualService = (function () {
    function IndividualService(httpSrv) {
        this.httpSrv = httpSrv;
    }
    IndividualService.prototype.getRandomKata = function () {
        //return this.httpSrv.get('/api/individual/random?t=' + Math.random())
        return this.httpSrv.get('/api/individual/random')
            .map(function (res) { return res.json(); })
            .catch(function (res) { return res.json().error; });
    };
    return IndividualService;
}());
IndividualService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], IndividualService);

var _a;
//# sourceMappingURL=individual.service.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KataService = (function () {
    function KataService(httpSrv) {
        this.httpSrv = httpSrv;
    }
    KataService.prototype.getAllKatas = function () {
        return this.httpSrv.get('/api/katas')
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(err); });
    };
    KataService.prototype.createKata = function (kataToBeCreated) {
        return this.httpSrv.post('/api/katas', {})
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(err); });
    };
    KataService.prototype.sendKataStats = function (statistics) {
        return this.httpSrv.post('/api/katas/stats/register', { stats: statistics }).toPromise();
    };
    KataService.prototype.getKataStats = function () {
        return this.httpSrv.get('/api/katas/stats')
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(err); });
    };
    KataService.prototype.getKata = function (kataId) {
        return this.httpSrv.get("/api/katas/kata/" + kataId)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(err); });
    };
    return KataService;
}());
KataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], KataService);

var _a;
//# sourceMappingURL=kata.service.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(httpSrv, authSrv, userSrv) {
        this.httpSrv = httpSrv;
        this.authSrv = authSrv;
        this.userSrv = userSrv;
    }
    LoginService.prototype.login = function (username, password, eventSelected) {
        var _this = this;
        return this.httpSrv.post('/api/login', {
            user: username,
            password: password,
            event: eventSelected
        })
            .map(function (res) {
            var loggedUser = res.json().user;
            console.log(loggedUser);
            _this.userSrv.setUserContext(loggedUser);
            _this.authSrv.setJwtToken(loggedUser.token);
            return loggedUser;
        })
            .catch(function (err) { return err.json().error; });
    };
    LoginService.prototype.logout = function () {
        var _this = this;
        return this.httpSrv.delete('/api/login')
            .map(function (res) {
            _this.authSrv.removeJwtToken();
        })
            .catch(function (err) { return err.json().error; });
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _c || Object])
], LoginService);

var _a, _b, _c;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(1044);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = (function () {
    function SocketService() {
        /*this.socket = io.connect(this.url);
        this.socket.on("connect", () => console.log('connect: '+this.socket.id));
        this.socket.on("disconnect", () => console.log('d'));
        this.socket.on('error', (error: string) => {
            console.log(`ERROR: "${error}" (${this.url})`);
        });*/
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
            this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__();
        }
        else {
            this.url = window.location.protocol + "//" + window.location.hostname + ":3000";
            console.log('Connecting socket to ', this.url);
            this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__["connect"](this.url);
            this.sendMessage('message', 'hello');
        }
        var listener = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromEvent(this.socket, 'msg')
            .subscribe(function (payload) { console.log('MSG: ', payload); });
        /*let listener2 = Observable.fromEvent(this.socket, 'code')
            .subscribe((payload) => { console.log('Payload2: ', payload); });*/
        /*let obs = new Observable(observer => {
            this.socket = io.connect(this.url);
            this.socket.on('msg', (payload) => { observer.next(payload) });
            this.socket.on('msg2', (payload) => { observer.next(payload) });
            return () => { this.socket.disconnect(); };
        });
        obs.subscribe((data) => { console.log('>> ', data); });*/
    }
    SocketService.prototype.getSocketId = function () {
        return (this.socket) ? this.socket.id : '';
    };
    SocketService.prototype.connectToStreaming = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromEvent(this.socket, 'challenge');
    };
    /*get(): Observable<any> {
        return Observable.create((observer: any) => {
            this.socket.on('msg', (item: any) => { console.log('Msg received: ', item); });
            return () => this.socket.close();
        });
    }*/
    SocketService.prototype.sendMessage = function (type, payload) {
        //this.socket.send(type, payload);
        this.socket.emit(type, payload);
    };
    return SocketService;
}());
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SocketService);

//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestExecutorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestExecutorService = (function () {
    function TestExecutorService(httpSrv) {
        this.httpSrv = httpSrv;
    }
    TestExecutorService.prototype.checkExerciseCode = function (exerciseImpl, title) {
        return this.httpSrv.post('/api/katas/execute', { function: exerciseImpl, name: title })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json() || 'Server error'); });
    };
    return TestExecutorService;
}());
TestExecutorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TestExecutorService);

var _a;
//# sourceMappingURL=test-executor.service.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrainingService = (function () {
    function TrainingService(httpSrv) {
        this.httpSrv = httpSrv;
    }
    TrainingService.prototype.getTrainingPaths = function () {
        return this.httpSrv.get('/api/training-paths')
            .map(function (res) { return res.json().trainingPaths; })
            .catch(function (res) { return res.json().error; });
    };
    TrainingService.prototype.getKatasOfTrainingPath = function (topic) {
        return this.httpSrv.get("/api/training-paths/" + topic + "/katas")
            .map(function (res) { return res.json().trainingPath; })
            .catch(function (res) { return res.json().error; });
    };
    TrainingService.prototype.getTrainingPathsForGrid = function () {
        return this.httpSrv.get('/api/training-paths/grid')
            .map(function (res) { return res.json().trainingPaths; })
            .catch(function (res) { return res.json().error; });
    };
    TrainingService.prototype.createTrainingPath = function (topic, name, description) {
        return this.httpSrv.post('/api/training-paths', { topic: topic, name: name, description: description })
            .map(function (res) { return res.json(); })
            .catch(function (res) { return res.json().error; });
    };
    return TrainingService;
}());
TrainingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TrainingService);

var _a;
//# sourceMappingURL=training.service.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = (function () {
    function UsersService(httpSrv) {
        this.httpSrv = httpSrv;
    }
    UsersService.prototype.getAllUsers = function () {
        return this.httpSrv.get('/api/users')
            .map(function (res) { return res.json(); })
            .catch(function (err) { return err.json(); });
    };
    UsersService.prototype.createUser = function (formDataObject) {
        return this.httpSrv.post('/api/users', {
            name: formDataObject.name,
            username: formDataObject.username,
            password: formDataObject.password,
            email: formDataObject.email,
            rol: formDataObject.rol
        })
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err); });
    };
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateChallengeDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateChallengeDialog = (function () {
    function CreateChallengeDialog(dialogRef, router, challengeSrv, socketSrv) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.challengeSrv = challengeSrv;
        this.socketSrv = socketSrv;
    }
    CreateChallengeDialog.prototype.ngOnInit = function () {
        this.joinForm = false;
        this.arrowDirection = 'down';
        this.showChallengeConfig = 'closed';
        this.challengeMode = 'SYNC';
        this.counterDirection = 'ASC';
        this.existsChallengeId = true;
        this.isCreatingChallenge = false;
        this.isWaitingResponse = false;
        this.joiningMessageError = '';
        this.challengeTimeDuration = 0;
    };
    CreateChallengeDialog.prototype.toggleOptionalParamsChallengeMenu = function () {
        this.showChallengeConfig = (this.showChallengeConfig === 'opened') ? 'closed' : 'opened';
        this.arrowDirection = (this.showChallengeConfig === 'opened') ? 'up' : 'down';
    };
    CreateChallengeDialog.prototype.showCreateChallengeForm = function () {
        this.isCreatingChallenge = true;
        this.joinForm = false;
    };
    CreateChallengeDialog.prototype.showJoinToChallengeForm = function () {
        this.isCreatingChallenge = false;
        this.joinForm = true;
        this.joiningMessageError = '';
        this.hideProgressBar();
    };
    CreateChallengeDialog.prototype.createChallenge = function () {
        var _this = this;
        this.showProgressBar();
        this.joinForm = false;
        this.joiningMessageError = '';
        if (this.counterDirection && this.challengeTimeDuration >= 0) {
            var playerSocketId = this.socketSrv.getSocketId();
            if (playerSocketId) {
                this.challengeSrv.createChallengeId(playerSocketId, this.counterDirection, this.challengeTimeDuration, this.challengeMode).subscribe(function (challengeId) {
                    _this.challengeId = challengeId;
                    _this.isWaitingResponse = false;
                });
            }
            else {
                this.isWaitingResponse = false;
                this.joiningMessageError = 'ERR-SOCK-1000';
            }
        }
        else {
            this.isWaitingResponse = false;
            this.joiningMessageError = 'You have to fill the required fields';
        }
    };
    CreateChallengeDialog.prototype.goToChallenge = function () {
        this.router.navigate(['/challenge', this.challengeId]);
        this.dialogRef.close();
    };
    CreateChallengeDialog.prototype.joinToChallenge = function () {
        var _this = this;
        this.joiningMessageError = '';
        if (this.challengeId) {
            this.challengeSrv.checkIfChallengeIdExists(this.challengeId).subscribe(function (exists) {
                if (exists) {
                    _this.router.navigate(['/challenge', _this.challengeId]);
                    _this.dialogRef.close();
                }
                else {
                    _this.existsChallengeId = exists;
                    _this.joiningMessageError = 'Sorry, the given identifier not exists.';
                }
            }, function (error) {
                _this.joiningMessageError = error;
            });
        }
        else {
            this.joiningMessageError = 'Please, you have to write a challenge identifier.';
        }
    };
    CreateChallengeDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    CreateChallengeDialog.prototype.showProgressBar = function () {
        this.isWaitingResponse = true;
    };
    CreateChallengeDialog.prototype.hideProgressBar = function () {
        this.isWaitingResponse = false;
    };
    return CreateChallengeDialog;
}());
CreateChallengeDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(774),
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('challengeParams', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('closed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    display: 'none',
                    height: 0
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('opened', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    display: 'block',
                    height: '*'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('null => closed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('opened => closed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('closed => opened', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core__["ChallengeService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core__["ChallengeService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__core__["SocketService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core__["SocketService"]) === "function" && _d || Object])
], CreateChallengeDialog);

var _a, _b, _c, _d;
//# sourceMappingURL=create-challenge.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectTrainingPathDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectTrainingPathDialog = (function () {
    function SelectTrainingPathDialog(dialogRef, router, trainingSrv) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.trainingSrv = trainingSrv;
    }
    SelectTrainingPathDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.showError = false;
        this.trainingSrv.getTrainingPaths().subscribe(function (metadata) { _this.trainingPaths = metadata; });
    };
    SelectTrainingPathDialog.prototype.startPath = function () {
        if (this.selectedValue) {
            this.router.navigate(['/training', this.selectedValue]);
            this.dialogRef.close();
        }
        else {
            this.showError = true;
        }
    };
    SelectTrainingPathDialog.prototype.onSelectedChange = function (e) {
        var selected = this.trainingPaths.find(function (path) { return (path.topic === e.value); });
        if (selected) {
            this.selected = selected;
            this.selectedValue = selected.topic;
            this.showError = false;
        }
        else {
            this.selectedValue = null;
            this.showError = true;
        }
    };
    return SelectTrainingPathDialog;
}());
SelectTrainingPathDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(777),
        styles: [__webpack_require__(734)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core__["TrainingService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core__["TrainingService"]) === "function" && _c || Object])
], SelectTrainingPathDialog);

var _a, _b, _c;
//# sourceMappingURL=select-training-path.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KATA_PLAYER_ANIMATIONS; });

var KATA_PLAYER_ANIMATIONS = [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('startKata', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 })
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('reading', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
            opacity: 0
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('writing', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
            opacity: 1
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-in-out'))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('unitTestCase', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('null', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
            display: 'none',
            height: 0
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('closed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
            display: 'none',
            height: 0
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('opened', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
            display: 'block',
            height: '*'
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('null => closed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-in')),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('opened => closed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-in')),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('closed => opened', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-out'))
    ])
];
//# sourceMappingURL=kata-player.animation.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kata_player_animation__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_codemirror_mode_javascript_javascript__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_codemirror_mode_javascript_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_codemirror_mode_javascript_javascript__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KataPlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var KataPlayerComponent = (function () {
    function KataPlayerComponent(kataSrv, testExecutorSrv, dialog) {
        this.kataSrv = kataSrv;
        this.testExecutorSrv = testExecutorSrv;
        this.dialog = dialog;
        this.kataState = 'reading';
        this.success = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.fail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.kataState = 'reading';
    }
    KataPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tests = {};
        this.numberOfPassedTests = 0;
        this.numberOfTests = 0;
        this.attemps = 0;
        this.leftPaneWidth = 50;
        this.resizingModeEnabled = false;
        this.config = {
            cursorBlinkRate: 200,
            lineNumbers: true,
            mode: { name: "javascript", json: true },
            tabSize: 2,
            theme: 'material'
        };
        this.timeSpent = 0;
        this.counterDownObs = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].timer(0, 1000).subscribe(function (tick) {
            _this.timeSpent++;
        });
    };
    KataPlayerComponent.prototype.ngOnChanges = function () {
        this.timeSpent = 0;
        this.bodyFunction = this.code;
    };
    KataPlayerComponent.prototype.startExercise = function () {
        this.kataState = 'writing';
    };
    KataPlayerComponent.prototype.chronoEvent = function (evt) {
        //console.log('event! ', evt);
    };
    KataPlayerComponent.prototype.testKata = function () {
        var _this = this;
        this.attemps++;
        if (this.kataState === 'writing') {
            this.testExecutorSrv.checkExerciseCode(this.bodyFunction, this.title).subscribe(function (result) {
                _this.tests = result;
                _this.numberOfTests = _this.tests.output.length;
                _this.numberOfPassedTests = _this.tests.output.filter(function (o) { return o.result; }).length;
                if (_this.tests.executionResult) {
                    _this.sendKataStats(true);
                    _this.success.emit(_this.timeSpent);
                }
                else {
                    _this.sendKataStats(false);
                }
            });
        }
    };
    KataPlayerComponent.prototype.sendKataStats = function (result) {
        this.kataSrv.sendKataStats({
            kata: this.title,
            status: result,
            attemps: this.attemps,
            time: this.timeSpent
        });
    };
    KataPlayerComponent.prototype.openOrCloseTestCase = function (currentStatus) {
        if (currentStatus === 'opened') {
            return 'closed';
        }
        else {
            return 'opened';
        }
    };
    KataPlayerComponent.prototype.endKata = function () {
        //this.dialog.open(LeaveChallengeComponent);
        this.fail.emit();
    };
    KataPlayerComponent.prototype.nextExercise = function () {
        this.next.emit();
    };
    KataPlayerComponent.prototype.mousedown = function (e) {
    };
    KataPlayerComponent.prototype.mousemove = function (e) {
    };
    KataPlayerComponent.prototype.mouseup = function (e) {
    };
    return KataPlayerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], KataPlayerComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], KataPlayerComponent.prototype, "explanation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], KataPlayerComponent.prototype, "examples", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], KataPlayerComponent.prototype, "inputs", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], KataPlayerComponent.prototype, "outputs", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], KataPlayerComponent.prototype, "code", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('next-button'),
    __metadata("design:type", Object)
], KataPlayerComponent.prototype, "nextButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], KataPlayerComponent.prototype, "success", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], KataPlayerComponent.prototype, "fail", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], KataPlayerComponent.prototype, "next", void 0);
KataPlayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'kata-player',
        template: __webpack_require__(781),
        styles: [__webpack_require__(736)],
        animations: __WEBPACK_IMPORTED_MODULE_3__kata_player_animation__["a" /* KATA_PLAYER_ANIMATIONS */]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__core__["KataService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core__["KataService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__core__["TestExecutorService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core__["TestExecutorService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdDialog */]) === "function" && _c || Object])
], KataPlayerComponent);

var _a, _b, _c;
//# sourceMappingURL=kata-player.component.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberOfKatasPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NumberOfKatasPipe = (function () {
    function NumberOfKatasPipe() {
    }
    NumberOfKatasPipe.prototype.transform = function (value, singular, plural) {
        var quantity = 0;
        if (typeof (value) === 'number') {
            console.log('number');
            quantity = value;
        }
        else if (typeof (value) === 'string') {
            var quantity_1 = (Number(value)) ? Number(value) : 0;
        }
        else {
            throw Error('Param received is not a number or string containing a number.');
        }
        // Try to recover from the bad situation 
        return (value === 0 || value >= 2) ? plural : singular;
    };
    return NumberOfKatasPipe;
}());
NumberOfKatasPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'numberOfKatas'
    })
], NumberOfKatasPipe);

//# sourceMappingURL=number-of-katas.pipe.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_routes__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_material_module__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__learning_path_learning_path_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__learning_path_lp_dialog_lp_dialog_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__kata_kata_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__kata_kata_dialog_kata_dialog_component__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__users_users_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__users_user_dialog_user_dialog_component__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__events_events_component__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__events_event_dialog_event_dialog_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__kata_number_of_katas_pipe__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__languages_languages_component__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ag_grid_angular_main__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ag_grid_angular_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ag_grid_angular_main__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var SettingsModule = (function () {
    function SettingsModule() {
    }
    return SettingsModule;
}());
SettingsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__material_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_18_ag_grid_angular_main__["AgGridModule"].withComponents([]),
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__settings_routes__["a" /* SettingsRoutes */])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__learning_path_learning_path_component__["a" /* LearningPathComponent */],
            __WEBPACK_IMPORTED_MODULE_9__learning_path_lp_dialog_lp_dialog_component__["a" /* LpDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_10__kata_kata_component__["a" /* KataComponent */],
            __WEBPACK_IMPORTED_MODULE_11__kata_kata_dialog_kata_dialog_component__["a" /* KataDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_16__kata_number_of_katas_pipe__["a" /* NumberOfKatasPipe */],
            __WEBPACK_IMPORTED_MODULE_12__users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_13__users_user_dialog_user_dialog_component__["a" /* UserDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_14__events_events_component__["a" /* EventsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__events_event_dialog_event_dialog_component__["a" /* EventDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_17__languages_languages_component__["a" /* LanguagesComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__learning_path_lp_dialog_lp_dialog_component__["a" /* LpDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_11__kata_kata_dialog_kata_dialog_component__["a" /* KataDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_15__events_event_dialog_event_dialog_component__["a" /* EventDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_13__users_user_dialog_user_dialog_component__["a" /* UserDialogComponent */]
        ]
    })
], SettingsModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".overdue {\n  color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".md-fav-bottom {\n  position: absolute;\n  bottom: 2rem;\n  right: 2rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".right-separator {\n  margin-right: 3px; }\n\n.left-separator {\n  margin-left: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".right-separator {\n  margin-right: 3px; }\n\n.left-separator {\n  margin-left: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.icon {\n  padding: 0 14px; }\n\n.main-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.enunciado {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 50%;\n          flex: 0 1 50%;\n  min-height: 100%;\n  min-width: 25%;\n  padding: .5em; }\n\n.h3-editor {\n  margin: 0.66em 0 0.33em 0; }\n\n.h4-editor {\n  margin: 0.33em 0; }\n\n.full-line {\n  display: block; }\n\n.codigo {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 50%;\n          flex: 0 1 50%;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 100%;\n  min-width: 25%;\n  padding: .5em; }\n\n.medio-panel-superior {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  margin-bottom: .5em;\n  max-width: 100%;\n  min-height: 50%;\n  overflow: hidden; }\n\n.medio-panel-inferior {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  margin-bottom: .5em;\n  max-width: 100%;\n  min-height: 35%;\n  overflow: hidden; }\n\n.editor-area {\n  resize: none;\n  width: 100%; }\n\n.accordion-header {\n  background-color: #f5f5f5;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".step-wrapper {\n  width: calc(100% * 3);\n  float: left; }\n\n.step {\n  float: left;\n  padding: 0 5px;\n  width: 33.3%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".step-wrapper {\n  width: calc(100% * 3);\n  float: left; }\n\n.step {\n  float: left;\n  padding: 0 5px;\n  width: 33.3%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".error-field {\n  color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.icon {\n  padding: 0 14px; }\n\n.main-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.enunciado {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 50%;\n          flex: 0 1 50%;\n  min-height: 100%;\n  min-width: 25%;\n  padding: .5em; }\n\n.codigo {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 50%;\n          flex: 0 1 50%;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 100%;\n  min-width: 25%;\n  padding: .5em; }\n\n.medio-panel-superior {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  margin-bottom: .5em;\n  max-width: 100%;\n  min-height: 50%;\n  overflow: hidden; }\n\n.medio-panel-inferior {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  margin-bottom: .5em;\n  max-width: 100%;\n  min-height: 35%;\n  overflow: hidden; }\n\n.editor-area {\n  /*background-color: black;\n  color: white;*/\n  resize: none;\n  width: 100%; }\n\n/* ----------------------------------------- */\n/* ------------ Experimental --------------- */\n/* ----------------------------------------- */\n.medio-panel-superior.card-ang-mat {\n  height: 80%; }\n\n.CodeMirror.cm-s-material {\n  border: 1px solid #eee;\n  height: 100% !important; }\n\ncodemirror > div.CodeMirror.cm-s-material {\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "md-toolbar {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\n.main-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -webkit-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n}\n\n.hidden {\n    display: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.icon {\n  padding: 0 14px;\n}\n\n.main-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.enunciado {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 50%;\n          flex: 0 1 50%;\n  min-height: 100%;\n  min-width: 25%;\n  padding: .5em;\n}\n\n.codigo {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 50%;\n          flex: 0 1 50%;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 100%;\n  min-width: 25%;\n  padding: .5em;\n}\n\n.medio-panel-superior {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  margin-bottom: .5em;\n  max-width: 100%;\n  min-height: 50%;\n  overflow: hidden;\n}\n\n.medio-panel-inferior {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  margin-bottom: .5em;\n  max-width: 100%;\n  min-height: 35%;\n  overflow: hidden;\n}\n\n.editor-area {\n  /*background-color: black;\n  color: white;*/\n  resize: none;\n  width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.icon {\n  padding: 0 14px;\n}\n\n.main-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.enunciado {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 50%;\n          flex: 0 1 50%;\n  min-height: 100%;\n  min-width: 25%;\n  padding: .5em;\n}\n\n.codigo {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 50%;\n          flex: 0 1 50%;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 100%;\n  min-width: 25%;\n  padding: .5em;\n}\n\n.medio-panel-superior {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  margin-bottom: .5em;\n  max-width: 100%;\n  min-height: 50%;\n  overflow: hidden;\n}\n\n.medio-panel-inferior {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  margin-bottom: .5em;\n  max-width: 100%;\n  min-height: 35%;\n  overflow: hidden;\n}\n\n.editor-area {\n  /*background-color: black;\n  color: white;*/\n  resize: none;\n  width: 100%;\n}\n\n.text-line-error {\n  color: red;\n}\n\n.text-line-successful {\n  color: green;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 327,
	"./af.js": 327,
	"./ar": 334,
	"./ar-dz": 328,
	"./ar-dz.js": 328,
	"./ar-kw": 329,
	"./ar-kw.js": 329,
	"./ar-ly": 330,
	"./ar-ly.js": 330,
	"./ar-ma": 331,
	"./ar-ma.js": 331,
	"./ar-sa": 332,
	"./ar-sa.js": 332,
	"./ar-tn": 333,
	"./ar-tn.js": 333,
	"./ar.js": 334,
	"./az": 335,
	"./az.js": 335,
	"./be": 336,
	"./be.js": 336,
	"./bg": 337,
	"./bg.js": 337,
	"./bn": 338,
	"./bn.js": 338,
	"./bo": 339,
	"./bo.js": 339,
	"./br": 340,
	"./br.js": 340,
	"./bs": 341,
	"./bs.js": 341,
	"./ca": 342,
	"./ca.js": 342,
	"./cs": 343,
	"./cs.js": 343,
	"./cv": 344,
	"./cv.js": 344,
	"./cy": 345,
	"./cy.js": 345,
	"./da": 346,
	"./da.js": 346,
	"./de": 349,
	"./de-at": 347,
	"./de-at.js": 347,
	"./de-ch": 348,
	"./de-ch.js": 348,
	"./de.js": 349,
	"./dv": 350,
	"./dv.js": 350,
	"./el": 351,
	"./el.js": 351,
	"./en-au": 352,
	"./en-au.js": 352,
	"./en-ca": 353,
	"./en-ca.js": 353,
	"./en-gb": 354,
	"./en-gb.js": 354,
	"./en-ie": 355,
	"./en-ie.js": 355,
	"./en-nz": 356,
	"./en-nz.js": 356,
	"./eo": 357,
	"./eo.js": 357,
	"./es": 359,
	"./es-do": 358,
	"./es-do.js": 358,
	"./es.js": 359,
	"./et": 360,
	"./et.js": 360,
	"./eu": 361,
	"./eu.js": 361,
	"./fa": 362,
	"./fa.js": 362,
	"./fi": 363,
	"./fi.js": 363,
	"./fo": 364,
	"./fo.js": 364,
	"./fr": 367,
	"./fr-ca": 365,
	"./fr-ca.js": 365,
	"./fr-ch": 366,
	"./fr-ch.js": 366,
	"./fr.js": 367,
	"./fy": 368,
	"./fy.js": 368,
	"./gd": 369,
	"./gd.js": 369,
	"./gl": 370,
	"./gl.js": 370,
	"./gom-latn": 371,
	"./gom-latn.js": 371,
	"./he": 372,
	"./he.js": 372,
	"./hi": 373,
	"./hi.js": 373,
	"./hr": 374,
	"./hr.js": 374,
	"./hu": 375,
	"./hu.js": 375,
	"./hy-am": 376,
	"./hy-am.js": 376,
	"./id": 377,
	"./id.js": 377,
	"./is": 378,
	"./is.js": 378,
	"./it": 379,
	"./it.js": 379,
	"./ja": 380,
	"./ja.js": 380,
	"./jv": 381,
	"./jv.js": 381,
	"./ka": 382,
	"./ka.js": 382,
	"./kk": 383,
	"./kk.js": 383,
	"./km": 384,
	"./km.js": 384,
	"./kn": 385,
	"./kn.js": 385,
	"./ko": 386,
	"./ko.js": 386,
	"./ky": 387,
	"./ky.js": 387,
	"./lb": 388,
	"./lb.js": 388,
	"./lo": 389,
	"./lo.js": 389,
	"./lt": 390,
	"./lt.js": 390,
	"./lv": 391,
	"./lv.js": 391,
	"./me": 392,
	"./me.js": 392,
	"./mi": 393,
	"./mi.js": 393,
	"./mk": 394,
	"./mk.js": 394,
	"./ml": 395,
	"./ml.js": 395,
	"./mr": 396,
	"./mr.js": 396,
	"./ms": 398,
	"./ms-my": 397,
	"./ms-my.js": 397,
	"./ms.js": 398,
	"./my": 399,
	"./my.js": 399,
	"./nb": 400,
	"./nb.js": 400,
	"./ne": 401,
	"./ne.js": 401,
	"./nl": 403,
	"./nl-be": 402,
	"./nl-be.js": 402,
	"./nl.js": 403,
	"./nn": 404,
	"./nn.js": 404,
	"./pa-in": 405,
	"./pa-in.js": 405,
	"./pl": 406,
	"./pl.js": 406,
	"./pt": 408,
	"./pt-br": 407,
	"./pt-br.js": 407,
	"./pt.js": 408,
	"./ro": 409,
	"./ro.js": 409,
	"./ru": 410,
	"./ru.js": 410,
	"./sd": 411,
	"./sd.js": 411,
	"./se": 412,
	"./se.js": 412,
	"./si": 413,
	"./si.js": 413,
	"./sk": 414,
	"./sk.js": 414,
	"./sl": 415,
	"./sl.js": 415,
	"./sq": 416,
	"./sq.js": 416,
	"./sr": 418,
	"./sr-cyrl": 417,
	"./sr-cyrl.js": 417,
	"./sr.js": 418,
	"./ss": 419,
	"./ss.js": 419,
	"./sv": 420,
	"./sv.js": 420,
	"./sw": 421,
	"./sw.js": 421,
	"./ta": 422,
	"./ta.js": 422,
	"./te": 423,
	"./te.js": 423,
	"./tet": 424,
	"./tet.js": 424,
	"./th": 425,
	"./th.js": 425,
	"./tl-ph": 426,
	"./tl-ph.js": 426,
	"./tlh": 427,
	"./tlh.js": 427,
	"./tr": 428,
	"./tr.js": 428,
	"./tzl": 429,
	"./tzl.js": 429,
	"./tzm": 431,
	"./tzm-latn": 430,
	"./tzm-latn.js": 430,
	"./tzm.js": 431,
	"./uk": 432,
	"./uk.js": 432,
	"./ur": 433,
	"./ur.js": 433,
	"./uz": 435,
	"./uz-latn": 434,
	"./uz-latn.js": 434,
	"./uz.js": 435,
	"./vi": 436,
	"./vi.js": 436,
	"./x-pseudo": 437,
	"./x-pseudo.js": 437,
	"./yo": 438,
	"./yo.js": 438,
	"./zh-cn": 439,
	"./zh-cn.js": 439,
	"./zh-hk": 440,
	"./zh-hk.js": 440,
	"./zh-tw": 441,
	"./zh-tw.js": 441
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 764;


/***/ }),

/***/ 769:
/***/ (function(module, exports) {

module.exports = "<div class=\"center-column-content margin-12\">\n  <h1>KataPlayer</h1>\n  <p>Lorem ipsum bla, bla, bla...</p>\n\n  <h2>Contributors</h2>\n  <p>These are the main contributors of KataPLayer... a lot of thanks!!</p>\n</div>\n\n<div class=\"flexibox-row margin-12\">\n\n\n  <md-card *ngFor=\"let contributor of contributors\" class=\"flex-grow-1 margin-6\">\n    <md-card-header>\n      <md-card-title>{{contributor.name}}</md-card-title>\n      <md-card-subtitle>{{contributor.contribution}}</md-card-subtitle>\n    </md-card-header>\n    <img md-card-image src=\"{{contributor.pic}}\" width=\"400px\">\n    <md-card-content>\n      <p>{{contributor.bio}}</p>\n    </md-card-content>\n    <md-card-actions>\n      <button md-button>TWITTER</button>\n      <button md-button>LINKEDIN</button>\n    </md-card-actions>\n  </md-card>\n\n</div>"

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n    <a md-mini-fab routerLink=\"/home\" *ngIf=\"isLoginPage\">\n        <md-icon>keyboard_return</md-icon>\n    </a>\n    <span style=\"margin-left:12px\">{{ title }}</span>\n    <md-menu #appMenu=\"mdMenu\">\n        <button md-menu-item (click)=\"logout()\">\n            <md-icon>fingerprint</md-icon>\n            <span>Logout</span>\n        </button>\n        <button md-menu-item (click)=\"goHome()\">\n            <md-icon>home</md-icon>\n            <span>Home</span>\n        </button>\n        <button md-menu-item (click)=\"openCurrentChallenges()\">\n            <md-icon>list</md-icon>\n            <span>Challenges</span>\n        </button>\n        <button md-menu-item (click)=\"openStreamingMode()\">\n            <md-icon>cast</md-icon>\n            <span>Streaming</span>\n        </button>\n        <button md-menu-item (click)=\"openRanking()\">\n            <md-icon>assessment</md-icon>\n            <span>Ranking</span>\n        </button>\n        <button md-menu-item (click)=\"openSettings()\">\n            <md-icon>settings</md-icon>\n            <span>Settings</span>\n        </button>\n        <button md-menu-item (click)=\"openAbout()\">\n            <md-icon>info</md-icon>\n            <span>About kata-player...</span>\n        </button>\n    </md-menu>\n\n    <!-- This fills the remaining space of the current row -->\n    <span class=\"fill-remaining-space\"></span>\n    <button md-icon-button [mdMenuTriggerFor]=\"appMenu\" *ngIf=\"isLoginPage\">\n        <md-icon>more_vert</md-icon>\n    </button>\n</md-toolbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "\n<kata-player\n    [title]=\"kata?.name\"\n    [explanation]=\"kata?.description\"\n    [examples]=\"kata?.examples\"\n    [inputs]=\"kata?.inputs\"\n    [outputs]=\"kata?.outputs\"\n    [code]=\"kata?.initialBodyFunction\"\n    (success)=\"onSuccessKata()\"\n    (fail)=\"onFailedKataAttemp()\"\n    [next-button]=\"false\"\n    (next)=\"onNextExercise()\">\n</kata-player>"

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

module.exports = "<span [class.overdue]=\"timeElapsed < 0 || (duration > 0 && timeElapsed > (duration * 60))\">\n    Time: {{ timeElapsed | timeSpent }}\n</span>"

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = "<h1>Current challenges</h1>\n<hr />\n\n<div class=\"flexibox-row\" style=\"padding:0 18px;\">\n\t<md-list class=\"flex-grow-1\">\n  \t\t<h3 md-subheader>Current challenges</h3>\n  \t\t<md-list-item *ngFor=\"let challenge of challenges\">\n    \t\t<a routerLink=\"/streaming/{{challenge.challengeId}}\"><md-icon md-list-avatar>ondemand_video</md-icon></a>\n\t\t\t<md-icon md-list-avatar>folder</md-icon>\n    \t\t<h4 md-line>{{challenge.challengeId}}</h4>\n    \t\t<p md-line> {{challenge.timestamp | date}} </p>\n  \t\t</md-list-item>\n\n  \t\t<md-divider></md-divider>\n\n  \t\t<h3 md-subheader>Recently finished</h3>\n  \t\t<md-list-item *ngFor=\"let note of notes\">\n    \t\t<md-icon md-list-avatar>note</md-icon>\n    \t\t<h4 md-line>{{note.name}}</h4>\n    \t\t<p md-line> {{note.updated | date}} </p>\n  \t\t</md-list-item>\n\t</md-list>\n</div>\n\n<button md-fab class=\"md-fav-bottom\" (click)=\"reload()\"><md-icon>autorenew</md-icon></button>\n"

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = "<h1>Challenge Time!</h1>\n<hr style=\"margin-top: -18px\" />\n<p>Select if you would create a new challenge or would like to join an existing one.</p>\n\n<!-- Button options -->\n<div class=\"flexibox-row\">\n    <button type=\"button\" md-raised-button color=\"accent\" (click)=\"showCreateChallengeForm()\" class=\"flex-grow-1\">Create</button>\n    <button type=\"button\" md-raised-button color=\"accent\" (click)=\"showJoinToChallengeForm()\" style=\"margin:0 6px 0 6px; flex-grow:1\">Join</button>\n    <button type=\"button\" md-raised-button color=\"accent\" (click)=\"dialogRef.close(null)\" class=\"flex-grow-1\">Cancel</button>\n</div>\n\n<!-- Form to create the challengeId -->\n<div *ngIf=\"isCreatingChallenge\" class=\"padding-top-18\">\n    <div class=\"margin-12 cursor-pointer\" (click)=\"toggleOptionalParamsChallengeMenu()\">\n        <div class=\"float-right\"><em>Configure Optional Params</em></div> \n        <i class=\"material-icons float-right\">keyboard_arrow_{{arrowDirection}}</i>\n    </div>\n    <div [@challengeParams]=\"showChallengeConfig\" class=\"margin-top-18\">\n        <h3 style=\"margin-bottom:0\">Fill the following fields</h3>\n        <div class=\"full-width\">\n            <md-select placeholder=\"Select the direction of the counter\"\n                    class=\"full-width margin-top-8\"\n                    floatPlaceholder=\"auto\" [(ngModel)]=\"counterDirection\" name=\"counterDirection\" required>\n                <md-option value=\"ASC\">Ascendent</md-option>\n                <md-option value=\"DESC\">Descendent</md-option>\n            </md-select>\n        </div>\n        <div class=\"full-width\">\n            <md-input-container class=\"full-width\">\n                <input type=\"number\" mdInput placeholder=\"Write the challenge time (in minutes)\" \n                    [(ngModel)]=\"challengeTimeDuration\" required>\n            </md-input-container>\n        </div>\n        <div class=\"full-width\">    \n            Challenge mode:\n            <md-radio-group class=\"full-width\" [(ngModel)]=\"challengeMode\" required>\n                <md-radio-button value=\"SYNC\" class=\"padding-left-6\">Sync. challenge</md-radio-button>\n                <md-radio-button value=\"ASYNC\" class=\"padding-left-6\">Async. challenge</md-radio-button>\n            </md-radio-group>\n        </div>\n    </div>\n    <div class=\"full-width\" *ngIf=\"joiningMessageError\">\n        <p style=\"color:darkred\"><em>Error: {{ joiningMessageError }}</em></p>\n    </div>\n    <div class=\"full-width margin-top-8\">\n        <button type=\"button\" md-raised-button color=\"primary\" \n                (click)=\"createChallenge()\" class=\"full-width\">Create challenge</button>\n    </div>\n</div>\n<div *ngIf=\"challengeId && !joinForm\" class=\"flex-grow-1 margin-top-8 margin-bottom-8\">Challenge id: {{ challengeId }}</div>\n<div *ngIf=\"challengeId && !joinForm\" class=\"flexibox-row margin-top-8 margin-bottom-8\">\n    <md-progress-bar mode=\"indeterminate\" *ngIf=\"isWaitingResponse\"></md-progress-bar>\n\n    <button type=\"button\" md-raised-button color=\"primary\" (click)=\"goToChallenge()\" \n        class=\"flex-grow-1\" style=\"margin-right: 6px\">Go to challenge</button>\n    <button type=\"button\" md-raised-button color=\"primary\" (click)=\"closeDialog()\" \n        class=\"flex-grow-1\" style=\"margin-left: 6px\">Close</button>\n</div>\n\n<!-- Form to insert the challengeId and go to challenge view -->\n<div *ngIf=\"joinForm\" class=\"padding-top-18\">\n    <h3 style=\"margin-bottom:0\">Challenge ID</h3>\n    <md-input-container class=\"full-width\">\n        <input mdInput placeholder=\"Write the challenge identifier\" #challengeInput=\"ngModel\" [(ngModel)]=\"challengeId\">\n    </md-input-container>\n\n    <div class=\"flexibox-row\" *ngIf=\"joiningMessageError || (!challengeInput.pristine  && !existsChallengeId)\">\n        <p style=\"color:darkred\"><em>Error: {{ joiningMessageError }}</em></p>\n    </div>\n    \n    <div class=\"flexibox-row\" *ngIf=\"!isWaitingResponse\">\n        <button type=\"button\" md-raised-button color=\"primary\" (click)=\"joinToChallenge()\" class=\"flex-grow-1\">Join!</button>\n    </div>\n</div>\n"

/***/ }),

/***/ 775:
/***/ (function(module, exports) {

module.exports = "<h1>Are you sure?</h1>\n<hr style=\"margin-top: -18px\" />\n<p>Are you sure to leave this kata?</p>\n\n<!-- Button options -->\n<div class=\"flexibox-row\">\n    <button type=\"button\" md-raised-button \n        color=\"primary\" \n        (click)=\"exit()\" \n        class=\"flex-grow-1 right-separator\">I'm sure</button>\n\n    <button type=\"button\" \n        md-raised-button \n        color=\"accent\" \n        (click)=\"dialogRef.close(null)\" \n        class=\"flex-grow-1 left-separator\">Cancel</button>\n</div>"

/***/ }),

/***/ 776:
/***/ (function(module, exports) {

module.exports = "<h1>Streaming mode</h1>\n<hr style=\"margin-top: -18px\" />\n\n<div class=\"flexibox-row-centered margin-12\">\n    Icono\n</div>\n\n<div class=\"padding-top-18\">\n    <p>In order to join and view a challenge, please, write here the challengeId:</p>\n    <md-input-container class=\"full-width\">\n        <input #challengeInput mdInput placeholder=\"Write the challenge identifier\" [(ngModel)]=\"challengeId\">\n    </md-input-container>\n    \n    <p *ngIf=\"isEmptyChallengeId\" style=\"color:darkred; margin-top:0\">\n        <em> Error: you should insert the challenge identifier</em>\n    </p>\n\n    <div class=\"flexibox-row\">\n        <button type=\"button\" md-raised-button color=\"primary\" (click)=\"joinToChallenge()\" class=\"flex-grow-1\">Join</button>\n        <div style=\"padding:0 3px;\"></div> \n        <button type=\"button\" md-raised-button color=\"accent\" (click)=\"cancel()\" class=\"flex-grow-1\">Cancel</button>\n    </div>\n</div>\n"

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = "<h1>Starting a training path!</h1>\n<hr class=\"margin-hr\" />\n<p>Select the path to train:</p>\n<md-select class=\"full-width\" placeholder=\"Training path\" \n    required=\"true\"\n    (change)=\"onSelectedChange($event)\" name=\"training-path\">\n    <md-option *ngFor=\"let tp of trainingPaths\" [value]=\"tp.topic\">\n        {{ tp.name }}\n    </md-option>\n</md-select>\n<div class=\"full-width margin-top-12\">\n    <p>{{ selected?.description }}</p>\n</div>\n\n<div class=\"full-width margin-top-12\" *ngIf=\"showError\">\n    <p style=\"color: red\"><em>Sorry, you have to select an option</em></p>\n</div>\n\n<div class=\"flexibox-row padding-top-18\">\n    <button type=\"button\" \n        md-raised-button \n        color=\"primary\" \n        (click)=\"startPath()\" \n        class=\"flex-grow-1 right-separator\">Start!</button>\n\n    <button type=\"button\" \n        md-raised-button \n        color=\"accent\" \n        (click)=\"dialogRef.close(null)\" \n        class=\"flex-grow-1 left-separator\">Cancel</button>\n</div>\n"

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-color-red\">{{ dialogTitle }}</h1>\n<hr class=\"margin-hr\" />\n\n<div class=\"margin-top-8 margin-bottom-8\"><p>{{ errorMessage }}</p></div>\n\n<button md-raised-button color=\"primary\" class=\"full-width\" (click)=\"dialogRef.close(null)\"> {{ textLabel }}</button>"

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "<div style=\"display:flex; flex-direction:row; justify-content:center; padding: 12px\">\n    <div class=\"animated slideInLeft\" style=\"width:50%; margin:6px 6px 0 0\">\n        <md-card class=\"example-card\">\n            <img md-card-image src=\"assets/images/challenge.jpg\">\n            <md-card-content>\n            <p>\n              The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n              A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n              bred for hunting.\n            </p>\n          </md-card-content>\n          <md-card-actions>\n              <a md-button routerLink=\"/individual\">START INDIVIDUAL</a>\n          </md-card-actions>\n      </md-card>\n    </div>\n\n    <div class=\"animated slideInDown\" *ngIf=\"!event\" style=\"width:50%; margin:6px 0 0 6px\">\n        <md-card class=\"example-card\">\n            <img md-card-image src=\"assets/images/training-by-levels.png\">\n            <md-card-content>\n                <p>\n                    The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n                    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n                    bred for hunting.\n                </p>\n            </md-card-content>\n            <md-card-actions>\n                <button md-button (click)=\"startTraining()\">START TRAINING</button>\n            </md-card-actions>\n        </md-card>\n    </div>\n\n    <div class=\"animated slideInRight\" style=\"width:50%; margin:6px 0 0 6px\">\n        <md-card class=\"example-card\">\n            <img md-card-image src=\"assets/images/fight.jpg\">\n            <md-card-content>\n                <p>\n                    The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n                    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n                    bred for hunting.\n                </p>\n            </md-card-content>\n            <md-card-actions>\n                <button md-button (click)=\"startChallenge()\">START CHALLENGE</button>\n            </md-card-actions>\n        </md-card>\n    </div>\n</div>"

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "\n<kata-player\n    [title]=\"kata?.name\"\n    [explanation]=\"kata?.description\"\n    [examples]=\"kata?.examples\"\n    [inputs]=\"kata?.inputs\"\n    [outputs]=\"kata?.outputs\"\n    [code]=\"kata?.initialBodyFunction\"\n    (success)=\"onSuccessKata()\"\n    (fail)=\"onFailedKataAttemp()\"\n    [next-button]=\"false\"\n    (next)=\"onNextExercise()\">\n</kata-player>"

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"second\">\n    <md-icon>watch_later</md-icon>\n    <kata-chronometer mode=\"SYNC\" duration=\"0\" direction=\"ASC\" (chronometer)=\"chronoEvent($event)\"></kata-chronometer>\n\n    <span class=\"spacer\"></span>\n\n    <span mdTooltip=\"Test kata!\" mdTooltipPosition=\"above\">\n        <button md-mini-fab (click)=\"testKata()\"><md-icon>play_arrow</md-icon></button>\n    </span>\n    \n    <span style=\"margin-left:6px\"></span>\n    \n    <span mdTooltip=\"Finish!\" mdTooltipPosition=\"above\">\n        <button md-mini-fab (click)=\"endKata()\"><md-icon>stop</md-icon></button>\n    </span>\n    \n    <span style=\"margin-left:6px\"></span>\n    <button md-mini-fab *ngIf=\"nextButton\" (click)=\"nextExercise()\"><md-icon>arrow_forward</md-icon></button>\n</md-toolbar>\n\n<div class=\"main-container\" style=\"height: calc(100% - (110px));\">\n    <!-- Kata description -->\n    <div class=\"enunciado animated bounce\" [style.flex-basis.%]=\"leftPaneWidth\">\n        <md-card class=\"example-card\">\n            <md-card-content>\n                <h1>{{ title }}</h1>\n                \n                <h2>Explanation</h2>\n                <p>{{ explanation }}</p>\n                \n                <h2>Examples</h2>\n                <p *ngFor=\"let example of examples\">* {{ example }}</p>\n                \n                <h2 *ngIf=\"inputs || outputs\">Inputs / Outputs</h2>\n                <!-- Inputs -->\n                <div *ngFor=\"let input of inputs\">\n                    <h3 class=\"h3-editor\">[Input] {{ input.type }} {{ input.parameter }}</h3>\n                    <span>{{ input.description }}</span>\n                    <h4 *ngIf=\"input.constraints.length > 0\" class=\"h4-editor\">Constraints</h4>\n                    <span class=\"full-line\" *ngFor=\"let constraint of input.constraints\">* {{ constraint }}</span>\n                </div>\n\n                <!-- Outputs -->\n                <div *ngFor=\"let output of outputs\">\n                    <h3 class=\"h3-editor\">[Output] {{ output.type }} {{ output.name }}</h3>\n                    <p>{{ output.description }}</p>\n                    <h4 *ngIf=\"output.constraints?.length > 0\" class=\"h4-editor\">Constraints</h4>\n                    <span class=\"full-line\" *ngFor=\"let constraint of output.constraints\">* {{ constraint }}</span>\n                </div>\n            </md-card-content>\n            <md-card-actions>\n                <a md-button (click)=\"startExercise()\"><md-icon>play_arrow</md-icon> Start exercise!</a>\n            </md-card-actions>\n        </md-card>\n    </div>\n\n    <!-- Editor -->\n    <div class=\"codigo\" [@startKata]=\"kataState\" [style.hidden]=\"true\" [style.flex-basis.%]=\"100 - leftPaneWidth\">\n        <div class=\"medio-panel-superior card-ang-mat\">\n            <codemirror class=\"editor-area\" \n                [(ngModel)]=\"bodyFunction\" \n                [config]=\"config\"\n                (change)=\"c($event)\">\n            </codemirror>\n        </div>\n        <div class=\"medio-panel-inferior card-ang-mat flexibox-column\">\n            <div class=\"full-width\" *ngIf=\"tests.output\">Passed tests: {{numberOfPassedTests}} out of {{numberOfTests}}</div>\n            <div class=\"full-width margin-6\" *ngFor=\"let test of tests.output; let i = index\">\n                <div #unitTest (click)=\"unitTest.status = openOrCloseTestCase(unitTest.status)\"\n                    class=\"flexibox-row padding-6 accordion-header\">\n                    <span class=\"align-s-center\">Test {{i+1}} / {{numberOfTests}}</span>\n                    <span class=\"fill-remaining-space\"></span>\n                    <i class=\"material-icons align-s-center\">\n                        {{ (unitTest.status === 'opened') ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}\n                    </i>\n                </div>\n                <div [@unitTestCase]=\"unitTest.status\">\n                    <p>Input: {{test.input}}</p>\n                    <p [style.color]=\"(test.result) ? 'green' : 'red'\">Expected output: {{test.output}}</p>\n                    <p *ngIf=\"test.message\" [style.color]=\"(test.result) ? 'green' : 'red'\">Failure message: {{test.message}}</p>\n                    <span>Log:</span>\n                    <p *ngFor=\"let log of test?.log.split('#')\" class=\"margin-0 padding-left-6 padding-top-8\">{{log}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Separator -->\n    <div id=\"playerSeparator\" [style.left.%]=\"leftPaneWidth\" style=\"position:absolute; width:4px; z-index:-99;\n                background: #1d1d1d; top:128px; bottom:0; margin-left:-2px; height:calc(100% - 110px)\"\n        (mousedown)=\"mousedown($event)\" (mousemove)=\"mousemove($event)\" (mouseup)=\"mouseup($event)\">\n    </div>\n</div>"

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = "<div style=\"display:flex; flex-direction:column; margin:50px 0; padding:0 30%\">\n  <div style=\"display:flex; flex-direction:row; align-items:center; justify-content:center; margin:10px 0 30px 0;\">\n    <img src=\"assets/images/logo_javascript.png\" width=\"50%\" height=\"50%\" />\n  </div>\n\n  <div style=\"display:flex; flex-direction:column; padding-bottom:20px\">\n    <md-input-container class=\"\">\n      <input mdInput placeholder=\"Username\" [(ngModel)]=\"username\" >\n    </md-input-container>\n    <md-input-container class=\"\">\n      <input type=\"password\" mdInput placeholder=\"Password\" [(ngModel)]=\"password\" (keypress)=\"onEnter($event)\">\n    </md-input-container>\n    <md-select placeholder=\"Select the event to join (optional)\" floatPlaceholder=\"never\" [(ngModel)]=\"eventSelected\" name=\"event\">\n      <md-option *ngFor=\"let event of events\" [value]=\"event.name\">{{ event.name }}</md-option>\n    </md-select>\n  </div>\n  \n  <div class=\"flexibox-column\">\n    <span class=\"flex-grow-1 text-color-red margin-6\"><em>{{ loginError }}</em></span>\n    <button md-raised-button color=\"primary\" (click)=\"standardLogin()\">\n      <i class=\"fa fa-key fa-lg\" aria-hidden=\"true\"></i> Standard login\n    </button>\n    <br /><hr class=\"full-width\" /><br />\n\n    <!-- Login with github credentials -->\n    <a md-raised-button color=\"accent\" href=\"/auth/github\">\n      <i class=\"fa fa-github fa-lg\" aria-hidden=\"true\"></i> Github login\n    </a><br />\n\n    <!-- Login with twitter credentials -->\n    <a md-raised-button color=\"accent\" href=\"/auth/twitter\">\n      <i class=\"fa fa-twitter fa-lg\" aria-hidden=\"true\"></i> Twitter login\n    </a><br />\n\n    <!-- Login with facebook credentials -->\n    <a md-raised-button color=\"accent\" href=\"/auth/facebook\">\n      <i class=\"fa fa-facebook-official fa-lg\" aria-hidden=\"true\"></i> Facebook login\n    </a><br />\n\n    <!-- Login with google credentials -->\n    <a md-raised-button color=\"accent\" href=\"/auth/facebook\">\n      <i class=\"fa fa-google fa-lg\" aria-hidden=\"true\"></i> Google login\n    </a><br />\n  </div>\n</div>"

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

module.exports = "\n<div style=\"padding: 0 18px;\">\n    <h1>Event: JSDayES 2017</h1>\n    <p>The best event of JavaScript in Spain!</p>\n\n    <div class=\"full-width padding-top-18 padding-left-6\">\n        <ag-grid-angular #agGrid \n            class=\"ag-material\" \n            style=\"width: 100%; height: 200px\"\n            [gridOptions]=\"gridOptions\">\n        </ag-grid-angular>\n    </div>\n</div>"

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow:hidden;\">\n    <h1 class=\"text-color-red\">Add a new event</h1>\n    <hr class=\"margin-hr\" />\n\n    <div class=\"flexibox-column\">\n        <md-input-container class=\"full-width\">\n            <input #eventName mdInput required [(ngModel)]=\"name\"\n                placeholder=\"Write event's name'\">\n        </md-input-container>\n\n        <div class=\"flexibox-row\">\n            <div class=\"flex-grow-1\">\n                <md-input-container>\n                    <input mdInput \n                        [mdDatepicker]=\"eventStartDate\" \n                        [mdDatepickerFilter]=\"filterAfterNow\"\n                        [(ngModel)]=\"startDate\"\n                        required placeholder=\"Start event date\">\n                    <button mdSuffix [mdDatepickerToggle]=\"eventStartDate\"></button>\n                </md-input-container>\n                <md-datepicker #eventStartDate></md-datepicker>\n            </div>\n            <div class=\"flex-grow-1 margin-left-6\" *ngIf=\"duration\">\n                <md-input-container [style.display]=\"(duration) ? 'block' : 'none'\">\n                    <input mdInput \n                        [mdDatepicker]=\"eventEndDate\"\n                        [mdDatepickerFilter]=\"filterAfterNow\"\n                        [(ngModel)]=\"endDate\"\n                        required placeholder=\"End event date\">\n                    <button mdSuffix [mdDatepickerToggle]=\"eventEndDate\"></button>\n                </md-input-container>\n                <md-datepicker #eventEndDate></md-datepicker>\n            </div>\n        </div>\n\n        <md-checkbox #eventDuration [(ngModel)]=\"duration\">The event takes more than a day</md-checkbox>    \n\n        <md-input-container class=\"full-width\">\n            <input #eventDescription mdInput required [(ngModel)]=\"description\"\n                placeholder=\"Write a brief description\">\n        </md-input-container>\n\n        <md-input-container class=\"full-width\">\n            <input #eventLoc mdInput [(ngModel)]=\"urlMaps\" placeholder=\"Insert the Google Maps URL\">\n        </md-input-container>\n        \n        <p class=\"text-color-red\" *ngIf=\"errorMessage\"><em>{{ errorMessage }}</em></p>\n    </div>\n\n\n    <!-- Buttons -->\n    <div class=\"flexibox-row padding-top-18\">\n        <div style=\"padding:0 3px;\"></div> \n        <button type=\"button\" md-raised-button color=\"accent\" class=\"flex-grow-1\" (click)=\"closeDialog()\">\n            Cancel\n        </button>\n        <div style=\"padding:0 3px;\"></div> \n        <button type=\"button\" md-raised-button color=\"primary\" class=\"flex-grow-1\" (click)=\"createEvent()\">\n            Create!\n        </button>\n    </div>\n</div>"

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = "<h2>Events</h2>\n<p><em>Lorem ipsum...</em></p>\n\n<div class=\"full-width flexibox-row\">\n    <div class=\"flex-grow-1 margin-6\" style=\"margin-left: 0\">\n        <button md-raised-button class=\"full-width\" color=\"accent\" (click)=\"createNewEvent()\">\n            <i class=\"material-icons\">add_circle</i> New event\n        </button>\n    </div>\n    <div class=\"flex-grow-1 margin-6\">\n        <button md-raised-button class=\"full-width\" color=\"accent\" (click)=\"editEvent()\">\n            <i class=\"material-icons\">edit</i> Edit event\n        </button>\n    </div>\n    <div class=\"flex-grow-1 margin-6\" style=\"margin-right: 0\">\n        <button md-raised-button class=\"full-width\" color=\"accent\" (click)=\"deleteEvents()\">\n            <i class=\"material-icons\">delete</i> Delete event \n        </button>\n    </div>\n</div>\n\n<div class=\"full-width padding-top-18 padding-left-6\">\n    <ag-grid-angular #agGrid \n        class=\"ag-material\" \n        style=\"width: 100%; height: 200px\"\n        [gridOptions]=\"gridOptions\">\n    </ag-grid-angular>\n</div>"

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow:hidden;\">\n    <h1 class=\"text-color-red\">Add a new kata ({{ stepIndex }})</h1>\n    <hr class=\"margin-hr\" />\n\n    <div class=\"step-wrapper\" [@formSteps]=\"stepIndex\">\n        <!-- Step 1 -->\n        <!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->\n        <div class=\"step\">\n            <md-input-container class=\"full-width\">\n                <input #kataName mdInput required [(ngModel)]=\"name\"\n                    placeholder=\"Write an identifier for the new training path\">\n            </md-input-container>\n            <md-input-container class=\"full-width\">\n                <input #kataDescription mdInput required [(ngModel)]=\"description\"\n                    placeholder=\"Also, you can write a brief description\">\n            </md-input-container>\n            <md-input-container class=\"full-width\">\n                <input #kataExamples mdInput required [(ngModel)]=\"examples\"\n                    placeholder=\"Write the examples for this kata (each example have to start with '*')\">\n            </md-input-container>\n            <md-input-container class=\"full-width\">\n                <input #kataInitialBodyImpl mdInput required [(ngModel)]=\"initialFnImpl\"\n                    placeholder=\"Write the base implementation signature of the kata\">\n            </md-input-container>\n            <!-- Buttons -->\n            <div class=\"padding-top-18\">\n                <div class=\"flexibox-row\">\n                    <button type=\"button\" md-raised-button color=\"accent\" class=\"flex-grow-1\" (click)=\"closeDialog()\">\n                        Cancel\n                    </button>\n                    <div style=\"padding:0 3px;\"></div> \n                    <button type=\"button\" md-raised-button color=\"primary\" class=\"flex-grow-1\" (click)=\"nextStep()\">\n                        Next step (2/3)\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <!-- Step 2 -->\n        <!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->\n        <div class=\"step\">\n            <!-- Package.json -->\n            <div class=\"flexibox-column full-width\" style=\"margin-top:12px;\">\n                <div class=\"flex-grow-1 flexibox-row\" style=\"color:gray; justify-content: flex-end\">\n                    <md-radio-group>\n                        <span mdTooltip=\"Write your own package.json\" mdTooltipPosition=\"above\">\n                            <md-radio-button value=\"write\">\n                                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                            </md-radio-button>\n                        </span>\n                        <span mdTooltip=\"Upload one\" mdTooltipPosition=\"above\">\n                            <md-radio-button value=\"upload\" checked=\"checked\">\n                                <i class=\"fa fa-file-text\" aria-hidden=\"true\"></i>\n                            </md-radio-button>\n                        </span>\n                    </md-radio-group>\n                </div>\n                <div class=\"flex-grow-1 flexibox-row-centered full-width padding-6\" style=\"border: 2.3px dashed gray\">\n                    <div class=\"\" style=\"color: gray\">Upload your package.json file</div>\n                </div>\n                <!-- click para eliminar + lógica para subir un fichero -->\n                <div class=\"flex-grow-1\" style=\"color:gray\">File Added: xxxx.xxx (delete)</div> \n            </div>\n            <!-- README.md -->\n            <div class=\"flexibox-column full-width\" style=\"margin-top:12px\">\n                <div class=\"flex-grow-1 flexibox-row\" style=\"color:gray; justify-content: flex-end\">\n                    <md-radio-group>\n                        <span mdTooltip=\"Write your own package.json\" mdTooltipPosition=\"above\">\n                            <md-radio-button value=\"write\">\n                                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                            </md-radio-button>\n                        </span>\n                        <span mdTooltip=\"Upload one\" mdTooltipPosition=\"above\">\n                            <md-radio-button value=\"upload\" checked=\"checked\">\n                                <i class=\"fa fa-file-text\" aria-hidden=\"true\"></i>\n                            </md-radio-button>\n                        </span>\n                    </md-radio-group>\n                </div>\n                <div class=\"flex-grow-1 flexibox-row-centered full-width padding-6\" \n                    style=\"border:3px dotted lightgray; background-color:#f5f5f5;\">\n                    <div class=\"flexibox-row-centered\" style=\"color:gray\">Upload your readme.md file</div>\n                </div>\n                <!-- click para eliminar + lógica para subir un fichero -->\n                <div class=\"flex-grow-1\" style=\"color:gray\">File Added: xxxx.xxx (delete)</div> \n            </div>\n            <!-- Buttons -->\n            <div class=\"padding-top-18\">\n                <div class=\"flexibox-row\">\n                    <button type=\"button\" md-raised-button color=\"primary\" class=\"flex-grow-1\" (click)=\"previousStep()\">\n                        Previous step (1/3)\n                    </button>\n                    <div style=\"padding:0 3px;\"></div> \n                    <button type=\"button\" md-raised-button color=\"accent\" class=\"flex-grow-1\" (click)=\"closeDialog()\">\n                        Cancel\n                    </button>\n                    <div style=\"padding:0 3px;\"></div> \n                    <button type=\"button\" md-raised-button color=\"primary\" class=\"flex-grow-1\" (click)=\"nextStep()\">\n                        Next step (3/3)\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <!-- Step 3 -->\n        <!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->\n        <div class=\"step\">\n            <!-- tests -->\n            <div class=\"flexibox-column full-width\" style=\"margin-top:12px\">\n                <div class=\"flex-grow-1 flexibox-row\" style=\"color:gray; justify-content: flex-end\">\n                    <md-radio-group>\n                        <span mdTooltip=\"Write your own package.json\" mdTooltipPosition=\"above\">\n                            <md-radio-button value=\"write\">\n                                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                            </md-radio-button>\n                        </span>\n                        <span mdTooltip=\"Upload one\" mdTooltipPosition=\"above\">\n                            <md-radio-button value=\"upload\" checked=\"checked\">\n                                <i class=\"fa fa-file-text\" aria-hidden=\"true\"></i>\n                            </md-radio-button>\n                        </span>\n                    </md-radio-group>\n                </div>\n                <div class=\"flex-grow-1 flexibox-row-centered full-width padding-6\" style=\"border: 2.3px dashed gray\">\n                    <div class=\"flexibox-row-centered\" style=\"color: gray\">Upload your kata.test.js file</div>\n                </div>\n                <!-- click para eliminar + lógica para subir un fichero -->\n                <div class=\"flex-grow-1\" style=\"color:gray\">File Added: xxxx.xxx (delete)</div> \n            </div>\n            <!-- hidden tests -->\n            <div class=\"flexibox-column full-width\" style=\"margin-top:12px\">\n                <div class=\"flex-grow-1 flexibox-row\" style=\"color:gray; justify-content: flex-end\">\n                    <md-radio-group>\n                        <span mdTooltip=\"Write your own package.json\" mdTooltipPosition=\"above\">\n                            <md-radio-button value=\"write\">\n                                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                            </md-radio-button>\n                        </span>\n                        <span mdTooltip=\"Upload one\" mdTooltipPosition=\"above\">\n                            <md-radio-button value=\"upload\" checked=\"checked\">\n                                <i class=\"fa fa-file-text\" aria-hidden=\"true\"></i>\n                            </md-radio-button>\n                        </span>\n                    </md-radio-group>\n                </div>\n                <div class=\"flex-grow-1 flexibox-row-centered full-width padding-6\" style=\"border: 2.3px dashed gray\">\n                    <div class=\"flexibox-row-centered\" style=\"color: gray\">Upload your kata.hiddenTest.js file</div>\n                </div>\n                <!-- click para eliminar + lógica para subir un fichero -->\n                <div class=\"flex-grow-1\" style=\"color:gray\">File Added: xxxx.xxx (delete)</div> \n            </div>\n            <!-- Buttons -->\n            <div class=\"padding-top-18\">\n                <div class=\"flexibox-row\">\n                    <button type=\"button\" md-raised-button color=\"primary\" class=\"flex-grow-1\" (click)=\"previousStep()\">\n                        Previous step (2/3)\n                    </button>\n                    <div style=\"padding:0 3px;\"></div> \n                    <button type=\"button\" md-raised-button color=\"accent\" class=\"flex-grow-1\" (click)=\"closeDialog()\">\n                        Cancel\n                    </button>\n                    <div style=\"padding:0 3px;\"></div> \n                    <button type=\"button\" md-raised-button color=\"primary\" class=\"flex-grow-1\" (click)=\"createLearningPath()\">\n                        Create!\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

module.exports = "<h2>Kata repository</h2>\n<p><em>Double click on a row in order to edit it.</em></p>\n\n<div class=\"full-width flexibox-row\">\n    <div class=\"flex-grow-1 margin-6\" style=\"margin-left: 0\">\n        <button md-raised-button class=\"full-width\" color=\"accent\" (click)=\"createNewKata()\">\n            <i class=\"material-icons\">add_circle</i> New kata\n        </button>\n    </div>\n    <div class=\"flex-grow-1 margin-6\">\n        <button md-raised-button class=\"full-width\" color=\"accent\" (click)=\"editKata()\">\n            <i class=\"material-icons\">edit</i> Edit kata\n        </button>\n    </div>\n    <div class=\"flex-grow-1 margin-6\" style=\"margin-right: 0\">\n        <button md-raised-button class=\"full-width\" color=\"accent\" (click)=\"deleteKatas()\">\n            <i class=\"material-icons\">delete</i> Delete kata \n        </button>\n    </div>\n</div>\n\n<div class=\"full-width padding-top-18 padding-left-6\">\n    <ag-grid-angular #agGrid \n        class=\"ag-material\" \n        style=\"width: 100%; height: 200px\"\n        [gridOptions]=\"gridOptions\">\n    </ag-grid-angular>\n</div>"

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

module.exports = "<p>\n  languages works!\n</p>\n"

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

module.exports = "<h2>Training Paths</h2>\n<p><em>Double click on a row in order to edit it.</em></p>\n\n<div class=\"full-width flexibox-row\">\n    <div class=\"flex-grow-1 margin-6\" style=\"margin-left: 0\">\n        <button md-raised-button class=\"full-width\" color=\"accent\" (click)=\"addNewTrainingPath()\">\n            <i class=\"material-icons\">add_circle</i> New training\n        </button>\n    </div>\n    <div class=\"flex-grow-1 margin-6\">\n        <button md-raised-button class=\"full-width\" color=\"accent\" (click)=\"startRowEditing()\">\n            <i class=\"material-icons\">edit</i> Edit training\n        </button>\n    </div>\n    <div class=\"flex-grow-1 margin-6\">\n        <button md-raised-button class=\"full-width\" color=\"accent\" (click)=\"deleteTrainingPath()\">\n            <i class=\"material-icons\">delete</i> Delete selected\n        </button>\n    </div>\n    <div class=\"flex-grow-1 margin-6\" style=\"margin-right: 0\">\n        <button md-raised-button class=\"full-width\" color=\"accent\" (click)=\"openKatasOfTrainingPath()\">\n            <i class=\"material-icons\">list</i> View katas\n        </button>\n    </div>\n</div>\n\n<div class=\"full-width padding-top-18 padding-left-6\">\n    <ag-grid-angular #agGrid \n        class=\"ag-material\" \n        style=\"width: 100%; height: 200px\"\n        [gridOptions]=\"gridOptions\">\n    </ag-grid-angular>\n</div>"

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-color-red\">Create new training path</h1>\n<hr class=\"margin-hr\" />\n\n<div class=\"margin-top-8 margin-bottom-8\">\n    <p><em>Fill the following fields in order to create a new training path.</em></p>\n</div>\n\n<!--<div class=\"flexbox full-width\">\n    Bla, bla, bla...\n</div>-->\n\n<!--<div class=\"flexibox-row-centered margin-12\">\n    Icono\n</div>-->\n\n<md-input-container class=\"full-width\">\n    <input #trainingPathTopic mdInput placeholder=\"Write an identifier for the new training path\" required [(ngModel)]=\"topic\">\n</md-input-container>\n\n<md-input-container class=\"full-width\">\n    <input #trainingPathName mdInput placeholder=\"Write the descriptive name for this training path\" required [(ngModel)]=\"name\">\n    <!--<div style=\"position:relative; right:0px; top:22px; text-align:right; font-size:12px\">0 / 50</div>-->\n</md-input-container>\n\n<md-input-container class=\"full-width\">\n    <input #trainingPathDescription mdInput placeholder=\"Also, you can write a brief description\" required [(ngModel)]=\"description\">\n</md-input-container>\n\n<div class=\"padding-top-18\" *ngIf=\"showError\">\n    <div class=\"flexibox-row text-color-red\">\n        Error: {{ errorMessage }}\n    </div>\n</div>\n\n<div class=\"padding-top-18\">\n    <div class=\"flexibox-row\">\n        <button type=\"button\" md-raised-button color=\"primary\" class=\"flex-grow-1\" (click)=\"createLearningPath()\">Create</button>\n        <div style=\"padding:0 3px;\"></div> \n        <button type=\"button\" md-raised-button color=\"accent\" class=\"flex-grow-1\" (click)=\"dialogRef.close(null)\">Cancel</button>\n    </div>\n</div>\n"

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-18\">\n    <h1>Settings</h1>\n    <hr />\n\n    <nav md-tab-nav-bar>\n        <a md-tab-link [routerLink]=\"['/settings/users']\" \n            routerLinkActive \n            #rla=\"routerLinkActive\">\n                <i class=\"fa fa-users fa-3x\" aria-hidden=\"true\"></i> Users\n        </a>\n        <a md-tab-link [routerLink]=\"['/settings/learning-paths']\" \n            routerLinkActive \n            #rla=\"routerLinkActive\">\n                <i class=\"fa fa-folder-open-o fa-3x\" aria-hidden=\"true\"></i> Learning Paths\n        </a>\n        <a md-tab-link\n            [routerLink]=\"['/settings/katas']\"\n            routerLinkActive \n            #rla=\"routerLinkActive\">\n                <i class=\"fa fa-files-o fa-3x\" aria-hidden=\"true\"></i> Katas repository\n        </a>\n        <a md-tab-link\n            [routerLink]=\"['/settings/events']\"\n            routerLinkActive \n            #rla=\"routerLinkActive\">\n                <i class=\"fa fa-flash fa-3x\" aria-hidden=\"true\"></i> Events\n        </a>\n        <a md-tab-link\n            [routerLink]=\"['/settings/languages']\"\n            routerLinkActive \n            #rla=\"routerLinkActive\">\n                <i class=\"fa fa-language fa-3x\" aria-hidden=\"true\"></i> Languages\n        </a>\n    </nav>\n\n    <div class=\"padding-12\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ 792:
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow:hidden;\">\n    <h1 class=\"text-color-red\">Create a new user</h1>\n    <hr class=\"margin-hr\" />\n\n    <form [formGroup]=\"createUserForm\" (ngSubmit)=\"onSubmittedForm()\" class=\"flexibox-column\" novalidate>\n        <!-- Firstname and surname -->\n        <md-input-container class=\"flex-grow-1\">\n            <input mdInput formControlName=\"name\" placeholder=\"Write firstname &amp; surname\">\n        </md-input-container>\n        <!--<p *ngIf=\"createUserForm.controls.name.errors\">This field is required!</p>-->\n\n        <!-- Username -->\n        <md-input-container class=\"flex-grow-1\">\n            <input mdInput formControlName=\"username\" placeholder=\"Write username\">\n        </md-input-container>\n\n        <!-- Password and confirmation -->\n        <md-input-container class=\"flex-grow-1\">\n            <input mdInput type=\"password\" \n                #pwd maxlength=\"12\" formControlName=\"password\" placeholder=\"Write your password\" />\n            <md-hint align=\"end\">{{ pwd.value.length }} / 12</md-hint>\n        </md-input-container>\n        <md-input-container class=\"flex-grow-1\">\n            <input mdInput type=\"password\" \n                #pwd2 maxlength=\"12\" formControlName=\"confirmPassword\" placeholder=\"Confirm your password\" />\n            <md-hint align=\"end\">{{ pwd2.value.length }} / 12</md-hint>\n        </md-input-container>\n        <div class=\"error margin-bottom-18\" *ngIf=\"createUserForm.get('confirmPassword').touched && (pwd.value !== pwd2.value)\">\n            <em class=\"error-field\">The passwords are different!</em>\n        </div>\n\n        <!-- Email -->\n        <md-input-container class=\"flex-grow-1\">\n            <input mdInput type=\"email\" formControlName=\"email\" placeholder=\"Write user's email\">\n        </md-input-container>\n\n        <!-- Rol -->\n        <md-select class=\"flex-grow-1\" placeholder=\"Write user's rol\" formControlName=\"rol\" name=\"rol\" required>\n            <md-option value=\"ADMIN\">ADMIN</md-option>\n            <md-option value=\"ADMIN\">USER</md-option>\n        </md-select>\n\n        <!-- Buttons -->\n        <div class=\"flexibox-row padding-top-18\">\n            <div style=\"padding:0 3px;\"></div> \n            <button type=\"button\" md-raised-button color=\"accent\" class=\"flex-grow-1\" (click)=\"closeDialog()\">\n                Cancel\n            </button>\n            <div style=\"padding:0 3px;\"></div> \n            <button type=\"submit\" md-raised-button color=\"primary\" class=\"flex-grow-1\"\n                [disabled]=\"createUserForm.invalid || createUserForm.get('confirmPassword').touched && (pwd.value !== pwd2.value)\">\n                Create!\n            </button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ 793:
/***/ (function(module, exports) {

module.exports = "<h2>Users</h2>\n<p><em>Lorem ipsum...</em></p>\n\n<div class=\"full-width flexibox-row\">\n    <div class=\"flex-grow-1 margin-6\" style=\"margin-left: 0\">\n        <button md-raised-button class=\"full-width\" color=\"accent\" (click)=\"createNewUser()\">\n            <i class=\"material-icons\">add_circle</i> New user\n        </button>\n    </div>\n    <div class=\"flex-grow-1 margin-6\">\n        <button md-raised-button class=\"full-width\" color=\"accent\" (click)=\"editUser()\">\n            <i class=\"material-icons\">edit</i> Edit user\n        </button>\n    </div>\n    <div class=\"flex-grow-1 margin-6\" style=\"margin-right: 0\">\n        <button md-raised-button class=\"full-width\" color=\"accent\" (click)=\"deleteUsers()\">\n            <i class=\"material-icons\">delete</i> Delete user \n        </button>\n    </div>\n</div>\n\n<div class=\"full-width padding-top-18 padding-left-6\">\n    <ag-grid-angular #agGrid \n        class=\"ag-material\" \n        style=\"width: 100%; height: 200px\"\n        [gridOptions]=\"gridOptions\">\n    </ag-grid-angular>\n</div>"

/***/ }),

/***/ 794:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"second\">\n    <span class=\"spacer\"></span>\n\n    <md-icon>watch_later</md-icon>\n    <kata-chronometer mode=\"SYNC\" duration=\"5\" direction=\"ASC\" style=\"padding-left:6px; padding-right:6px\"></kata-chronometer>\n    <md-icon>cast_connected</md-icon>\n\n    <span class=\"spacer\"></span>\n</md-toolbar>\n\n<div class=\"main-container\" style=\"height: calc(100% - (120px));\">\n    <!-- Player A -->\n    <div class=\"enunciado\" style=\"flex-basis:50%\">\n        <div style=\"padding:12px\">\n            <i class=\"fa fa-user-circle fa-5x\" aria-hidden=\"true\"></i>\n            <p>Player: {{ currentChallenge?.usernamePlayerA }}</p>\n        </div>\n        <div class=\"medio-panel-superior card-ang-mat\">\n            <codemirror class=\"editor-area\" \n                [(ngModel)]=\"codePlayerA\" \n                [config]=\"config\">\n            </codemirror>\n        </div>\n        <div>\n            Tests: \n            <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\" style=\"color:green\"></i> 0\n            <i class=\"fa fa-thumbs-o-down\" aria-hidden=\"true\" style=\"color:red\"></i> 3\n            |\n            <i class=\"fa fa-thumbs-up\" aria-hidden=\"true\" style=\"color:green\"></i> 0\n            <i class=\"fa fa-thumbs-down\" aria-hidden=\"true\" style=\"color:red\"></i> 3\n        </div>\n    </div>\n\n    <!-- Player B -->\n    <div class=\"enunciado\" style=\"flex-basis:50%\">\n        <div style=\"padding:12px\">\n            <i class=\"fa fa-user-circle-o fa-5x\" aria-hidden=\"true\"></i>\n            <p>Player: {{ currentChallenge?.usernamePlayerB }}</p>\n        </div>\n        <div class=\"medio-panel-superior card-ang-mat\">\n            <codemirror class=\"editor-area\" \n                [(ngModel)]=\"codePlayerB\" \n                [config]=\"config\">\n            </codemirror>\n        </div>\n    </div>\n\n    <!-- Separator -->\n    <div style=\"left:50%; position:absolute; width:4px; z-index:1;\n                background: #1d1d1d; top:128px; bottom:0; margin-left:-2px;\">\n    </div>\n</div>"

/***/ }),

/***/ 795:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"accent\">\n    <span>Your current training path: {{ trainingPath?.name }}</span>\n    <span class=\"fill-remaining-space\"></span>\n    <md-select class=\"margin-right-12\" [(ngModel)]=\"selectedValue\" (change)=\"onSelectedChange($event)\" name=\"kata\">\n        <md-option *ngFor=\"let exercise of trainingPath?.katas\" [value]=\"exercise.name\">\n            {{ exercise.name }}\n        </md-option>\n    </md-select>\n    <span>\n        <i class=\"fa fa-cubes\" aria-hidden=\"true\"></i> \n        <!-- X / Y -->\n        {{ currentExerciseIndex + 1 }}\n        /\n        <div *ngIf=\"trainingPathLength; then pathLength else pathLengthUnknown\"></div>\n        <ng-template #pathLength>{{ trainingPathLength }}</ng-template>\n        <ng-template #pathLengthUnknown>?</ng-template> \n    </span>\n</md-toolbar>\n\n<div class=\"flexbox-row\">\n    <kata-player\n        [title]=\"currentExercise?.name\"\n        [explanation]=\"currentExercise?.description\"\n        [examples]=\"currentExercise?.examples\"\n        [code]=\"currentExercise?.initialBodyFunction\"\n        (success)=\"onSuccessKata()\"\n        [next-button]=\"true\"\n        (fail)=\"onFailedKataAttemp()\"\n        (next)=\"onNextExercise()\">\n    </kata-player>\n</div>\n"

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_challenge_create_challenge_component__ = __webpack_require__(536);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__create_challenge_create_challenge_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__leave_challenge_leave_challenge_component__ = __webpack_require__(156);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__open_streaming_open_streaming_component__ = __webpack_require__(219);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__open_streaming_open_streaming_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_training_path_select_training_path_component__ = __webpack_require__(537);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__select_training_path_select_training_path_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__show_error_show_error_component__ = __webpack_require__(221);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__show_error_show_error_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__show_error_show_error_service__ = __webpack_require__(222);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__show_error_show_error_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__show_error_show_error_actions_enum__ = __webpack_require__(220);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__show_error_show_error_actions_enum__["a"]; });







//# sourceMappingURL=index.js.map

/***/ })

},[1068]);
//# sourceMappingURL=main.bundle.js.map