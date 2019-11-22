import { NgForOf, CurrencyPipe, NgIf, DatePipe, DecimalPipe, CommonModule } from '@angular/common';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, ɵɵelement, Component, ɵɵdefineComponent, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵproperty, ɵsetClassMetadata, ɵɵnextContext, ɵɵlistener, ɵɵpropertyInterpolate, ɵɵattribute, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵclassProp, ɵɵpureFunction0, ɵɵpipe, ɵɵpipeBind1, ɵɵtextInterpolate, ViewChild, ɵɵdirectiveInject, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵstyleProp, ɵɵstaticViewQuery, ɵɵreference, ContentChildren, Input, ɵɵcontentQuery, ɵɵprojectionDef, ɵɵprojection, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatButtonToggleGroup, MatButtonToggle, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortHeader, MatSortModule } from '@angular/material/sort';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatTableDataSource, MatFooterCellDef, MatFooterRowDef, MatFooterCell, MatFooterRow, MatTextColumn, MatTableModule } from '@angular/material/table';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatFormField } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { merge, of } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TableBasicFlexExample_mat_header_cell_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell");
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function TableBasicFlexExample_mat_cell_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r77 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r77.position, " ");
} }
function TableBasicFlexExample_mat_header_cell_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell");
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function TableBasicFlexExample_mat_cell_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r78 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r78.name, " ");
} }
function TableBasicFlexExample_mat_header_cell_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell");
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function TableBasicFlexExample_mat_cell_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r79 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r79.weight, " ");
} }
function TableBasicFlexExample_mat_header_cell_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell");
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function TableBasicFlexExample_mat_cell_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r80 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r80.symbol, " ");
} }
function TableBasicFlexExample_mat_header_row_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-header-row");
} }
function TableBasicFlexExample_mat_row_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-row");
} }
/**
 * @record
 */
function PeriodicElement() { }
if (false) {
    /** @type {?} */
    PeriodicElement.prototype.name;
    /** @type {?} */
    PeriodicElement.prototype.position;
    /** @type {?} */
    PeriodicElement.prototype.weight;
    /** @type {?} */
    PeriodicElement.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
/**
 * \@title Basic use of `<mat-table>` (uses display flex)
 */
class TableBasicFlexExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
}
TableBasicFlexExample.decorators = [
    { type: Component, args: [{
                selector: 'table-basic-flex-example',
                styleUrls: ['table-basic-flex-example.css'],
                templateUrl: 'table-basic-flex-example.html',
            },] },
];
/** @nocollapse */ TableBasicFlexExample.ɵfac = function TableBasicFlexExample_Factory(t) { return new (t || TableBasicFlexExample)(); };
/** @nocollapse */ TableBasicFlexExample.ɵcmp = ɵɵdefineComponent({ type: TableBasicFlexExample, selectors: [["table-basic-flex-example"]], decls: 15, vars: 3, consts: [[1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"]], template: function TableBasicFlexExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-table", 0);
        ɵɵelementContainerStart(1, 1);
        ɵɵtemplate(2, TableBasicFlexExample_mat_header_cell_2_Template, 2, 0, "mat-header-cell", 2);
        ɵɵtemplate(3, TableBasicFlexExample_mat_cell_3_Template, 2, 1, "mat-cell", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(4, 4);
        ɵɵtemplate(5, TableBasicFlexExample_mat_header_cell_5_Template, 2, 0, "mat-header-cell", 2);
        ɵɵtemplate(6, TableBasicFlexExample_mat_cell_6_Template, 2, 1, "mat-cell", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(7, 5);
        ɵɵtemplate(8, TableBasicFlexExample_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 2);
        ɵɵtemplate(9, TableBasicFlexExample_mat_cell_9_Template, 2, 1, "mat-cell", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(10, 6);
        ɵɵtemplate(11, TableBasicFlexExample_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 2);
        ɵɵtemplate(12, TableBasicFlexExample_mat_cell_12_Template, 2, 1, "mat-cell", 3);
        ɵɵelementContainerEnd();
        ɵɵtemplate(13, TableBasicFlexExample_mat_header_row_13_Template, 1, 0, "mat-header-row", 7);
        ɵɵtemplate(14, TableBasicFlexExample_mat_row_14_Template, 1, 0, "mat-row", 8);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(13);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableBasicFlexExample, [{
        type: Component,
        args: [{
                selector: 'table-basic-flex-example',
                styleUrls: ['table-basic-flex-example.css'],
                templateUrl: 'table-basic-flex-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableBasicFlexExample.prototype.displayedColumns;
    /** @type {?} */
    TableBasicFlexExample.prototype.dataSource;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TableBasicExample_th_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 9);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function TableBasicExample_td_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r92 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r92.position, " ");
} }
function TableBasicExample_th_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 9);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function TableBasicExample_td_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r93 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r93.name, " ");
} }
function TableBasicExample_th_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 9);
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function TableBasicExample_td_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r94 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r94.weight, " ");
} }
function TableBasicExample_th_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 9);
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function TableBasicExample_td_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r95 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r95.symbol, " ");
} }
function TableBasicExample_tr_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 11);
} }
function TableBasicExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 12);
} }
/**
 * @record
 */
function PeriodicElement$1() { }
if (false) {
    /** @type {?} */
    PeriodicElement$1.prototype.name;
    /** @type {?} */
    PeriodicElement$1.prototype.position;
    /** @type {?} */
    PeriodicElement$1.prototype.weight;
    /** @type {?} */
    PeriodicElement$1.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$1 = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
/**
 * \@title Basic use of `<table mat-table>`
 */
class TableBasicExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$1;
    }
}
TableBasicExample.decorators = [
    { type: Component, args: [{
                selector: 'table-basic-example',
                styleUrls: ['table-basic-example.css'],
                templateUrl: 'table-basic-example.html',
            },] },
];
/** @nocollapse */ TableBasicExample.ɵfac = function TableBasicExample_Factory(t) { return new (t || TableBasicExample)(); };
/** @nocollapse */ TableBasicExample.ɵcmp = ɵɵdefineComponent({ type: TableBasicExample, selectors: [["table-basic-example"]], decls: 15, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableBasicExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵelementContainerStart(1, 1);
        ɵɵtemplate(2, TableBasicExample_th_2_Template, 2, 0, "th", 2);
        ɵɵtemplate(3, TableBasicExample_td_3_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(4, 4);
        ɵɵtemplate(5, TableBasicExample_th_5_Template, 2, 0, "th", 2);
        ɵɵtemplate(6, TableBasicExample_td_6_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(7, 5);
        ɵɵtemplate(8, TableBasicExample_th_8_Template, 2, 0, "th", 2);
        ɵɵtemplate(9, TableBasicExample_td_9_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(10, 6);
        ɵɵtemplate(11, TableBasicExample_th_11_Template, 2, 0, "th", 2);
        ɵɵtemplate(12, TableBasicExample_td_12_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵtemplate(13, TableBasicExample_tr_13_Template, 1, 0, "tr", 7);
        ɵɵtemplate(14, TableBasicExample_tr_14_Template, 1, 0, "tr", 8);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(13);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableBasicExample, [{
        type: Component,
        args: [{
                selector: 'table-basic-example',
                styleUrls: ['table-basic-example.css'],
                templateUrl: 'table-basic-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableBasicExample.prototype.displayedColumns;
    /** @type {?} */
    TableBasicExample.prototype.dataSource;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TableDynamicColumnsExample_ng_container_7_th_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const column_r100 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", column_r100, " ");
} }
function TableDynamicColumnsExample_ng_container_7_td_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r104 = ctx.$implicit;
    const column_r100 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r104[column_r100], " ");
} }
function TableDynamicColumnsExample_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0, 5);
    ɵɵtemplate(1, TableDynamicColumnsExample_ng_container_7_th_1_Template, 2, 1, "th", 6);
    ɵɵtemplate(2, TableDynamicColumnsExample_ng_container_7_td_2_Template, 2, 1, "td", 7);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r100 = ctx.$implicit;
    ɵɵproperty("matColumnDef", column_r100);
} }
function TableDynamicColumnsExample_tr_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 10);
} }
function TableDynamicColumnsExample_tr_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 11);
} }
/**
 * @record
 */
function PeriodicElement$2() { }
if (false) {
    /** @type {?} */
    PeriodicElement$2.prototype.name;
    /** @type {?} */
    PeriodicElement$2.prototype.position;
    /** @type {?} */
    PeriodicElement$2.prototype.weight;
    /** @type {?} */
    PeriodicElement$2.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$2 = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
/**
 * \@title Table dynamically changing the columns displayed
 */
class TableDynamicColumnsExample {
    constructor() {
        this.displayedColumns = ['name', 'weight', 'symbol', 'position'];
        this.columnsToDisplay = this.displayedColumns.slice();
        this.data = ELEMENT_DATA$2;
    }
    /**
     * @return {?}
     */
    addColumn() {
        /** @type {?} */
        const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
        this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
    }
    /**
     * @return {?}
     */
    removeColumn() {
        if (this.columnsToDisplay.length) {
            this.columnsToDisplay.pop();
        }
    }
    /**
     * @return {?}
     */
    shuffle() {
        /** @type {?} */
        let currentIndex = this.columnsToDisplay.length;
        while (0 !== currentIndex) {
            /** @type {?} */
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // Swap
            /** @type {?} */
            let temp = this.columnsToDisplay[currentIndex];
            this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
            this.columnsToDisplay[randomIndex] = temp;
        }
    }
}
TableDynamicColumnsExample.decorators = [
    { type: Component, args: [{
                selector: 'table-dynamic-columns-example',
                styleUrls: ['table-dynamic-columns-example.css'],
                templateUrl: 'table-dynamic-columns-example.html',
            },] },
];
/** @nocollapse */ TableDynamicColumnsExample.ɵfac = function TableDynamicColumnsExample_Factory(t) { return new (t || TableDynamicColumnsExample)(); };
/** @nocollapse */ TableDynamicColumnsExample.ɵcmp = ɵɵdefineComponent({ type: TableDynamicColumnsExample, selectors: [["table-dynamic-columns-example"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableDynamicColumnsExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function TableDynamicColumnsExample_Template_button_click_0_listener($event) { return ctx.addColumn(); });
        ɵɵtext(1, " Add column ");
        ɵɵelementEnd();
        ɵɵelementStart(2, "button", 0);
        ɵɵlistener("click", function TableDynamicColumnsExample_Template_button_click_2_listener($event) { return ctx.removeColumn(); });
        ɵɵtext(3, " Remove column ");
        ɵɵelementEnd();
        ɵɵelementStart(4, "button", 0);
        ɵɵlistener("click", function TableDynamicColumnsExample_Template_button_click_4_listener($event) { return ctx.shuffle(); });
        ɵɵtext(5, " Shuffle ");
        ɵɵelementEnd();
        ɵɵelementStart(6, "table", 1);
        ɵɵtemplate(7, TableDynamicColumnsExample_ng_container_7_Template, 3, 1, "ng-container", 2);
        ɵɵtemplate(8, TableDynamicColumnsExample_tr_8_Template, 1, 0, "tr", 3);
        ɵɵtemplate(9, TableDynamicColumnsExample_tr_9_Template, 1, 0, "tr", 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(6);
        ɵɵproperty("dataSource", ctx.data);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matHeaderRowDef", ctx.columnsToDisplay);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.columnsToDisplay);
    } }, directives: [MatButton, MatTable, NgForOf, MatHeaderRowDef, MatRowDef, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 16px 8px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableDynamicColumnsExample, [{
        type: Component,
        args: [{
                selector: 'table-dynamic-columns-example',
                styleUrls: ['table-dynamic-columns-example.css'],
                templateUrl: 'table-dynamic-columns-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableDynamicColumnsExample.prototype.displayedColumns;
    /** @type {?} */
    TableDynamicColumnsExample.prototype.columnsToDisplay;
    /** @type {?} */
    TableDynamicColumnsExample.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TableExpandableRowsExample_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const column_r112 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", column_r112, " ");
} }
function TableExpandableRowsExample_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r116 = ctx.$implicit;
    const column_r112 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r116[column_r112], " ");
} }
function TableExpandableRowsExample_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0, 7);
    ɵɵtemplate(1, TableExpandableRowsExample_ng_container_1_th_1_Template, 2, 1, "th", 8);
    ɵɵtemplate(2, TableExpandableRowsExample_ng_container_1_td_2_Template, 2, 1, "td", 3);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r112 = ctx.$implicit;
    ɵɵpropertyInterpolate("matColumnDef", column_r112);
} }
function TableExpandableRowsExample_td_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵelementStart(1, "div", 11);
    ɵɵelementStart(2, "div", 12);
    ɵɵelementStart(3, "div", 13);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 14);
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 15);
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 16);
    ɵɵtext(10);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 17);
    ɵɵtext(12);
    ɵɵelementStart(13, "span", 18);
    ɵɵtext(14, " -- Wikipedia ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r118 = ctx.$implicit;
    const ctx_r108 = ɵɵnextContext();
    ɵɵattribute("colspan", ctx_r108.columnsToDisplay.length);
    ɵɵadvance(1);
    ɵɵproperty("@detailExpand", element_r118 == ctx_r108.expandedElement ? "expanded" : "collapsed");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", element_r118.position, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", element_r118.symbol, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", element_r118.name, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", element_r118.weight, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", element_r118.description, " ");
} }
function TableExpandableRowsExample_tr_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 19);
} }
function TableExpandableRowsExample_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r121 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 20);
    ɵɵlistener("click", function TableExpandableRowsExample_tr_5_Template_tr_click_0_listener($event) { ɵɵrestoreView(_r121); const element_r119 = ctx.$implicit; const ctx_r120 = ɵɵnextContext(); return ctx_r120.expandedElement = ctx_r120.expandedElement === element_r119 ? null : element_r119; });
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r119 = ctx.$implicit;
    const ctx_r110 = ɵɵnextContext();
    ɵɵclassProp("example-expanded-row", ctx_r110.expandedElement === element_r119);
} }
function TableExpandableRowsExample_tr_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 21);
} }
const _c0 = function () { return ["expandedDetail"]; };
/**
 * \@title Table with expandable rows
 */
class TableExpandableRowsExample {
    constructor() {
        this.dataSource = ELEMENT_DATA$3;
        this.columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
    }
}
TableExpandableRowsExample.decorators = [
    { type: Component, args: [{
                selector: 'table-expandable-rows-example',
                styleUrls: ['table-expandable-rows-example.css'],
                templateUrl: 'table-expandable-rows-example.html',
                animations: [
                    trigger('detailExpand', [
                        state('collapsed', style({ height: '0px', minHeight: '0' })),
                        state('expanded', style({ height: '*' })),
                        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ],
            },] },
];
/** @nocollapse */ TableExpandableRowsExample.ɵfac = function TableExpandableRowsExample_Factory(t) { return new (t || TableExpandableRowsExample)(); };
/** @nocollapse */ TableExpandableRowsExample.ɵcmp = ɵɵdefineComponent({ type: TableExpandableRowsExample, selectors: [["table-expandable-rows-example"]], decls: 7, vars: 6, consts: [["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "example-element-detail"], [1, "example-element-diagram"], [1, "example-element-position"], [1, "example-element-symbol"], [1, "example-element-name"], [1, "example-element-weight"], [1, "example-element-description"], [1, "example-element-description-attribution"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"]], template: function TableExpandableRowsExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵtemplate(1, TableExpandableRowsExample_ng_container_1_Template, 3, 1, "ng-container", 1);
        ɵɵelementContainerStart(2, 2);
        ɵɵtemplate(3, TableExpandableRowsExample_td_3_Template, 15, 7, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵtemplate(4, TableExpandableRowsExample_tr_4_Template, 1, 0, "tr", 4);
        ɵɵtemplate(5, TableExpandableRowsExample_tr_5_Template, 1, 1, "tr", 5);
        ɵɵtemplate(6, TableExpandableRowsExample_tr_6_Template, 1, 0, "tr", 6);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.columnsToDisplay);
        ɵɵadvance(3);
        ɵɵproperty("matHeaderRowDef", ctx.columnsToDisplay);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.columnsToDisplay);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ɵɵpureFunction0(5, _c0));
    } }, directives: [MatTable, NgForOf, MatColumnDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCellDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: #777;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}"], data: { animation: [
            trigger('detailExpand', [
                state('collapsed', style({ height: '0px', minHeight: '0' })),
                state('expanded', style({ height: '*' })),
                transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableExpandableRowsExample, [{
        type: Component,
        args: [{
                selector: 'table-expandable-rows-example',
                styleUrls: ['table-expandable-rows-example.css'],
                templateUrl: 'table-expandable-rows-example.html',
                animations: [
                    trigger('detailExpand', [
                        state('collapsed', style({ height: '0px', minHeight: '0' })),
                        state('expanded', style({ height: '*' })),
                        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableExpandableRowsExample.prototype.dataSource;
    /** @type {?} */
    TableExpandableRowsExample.prototype.columnsToDisplay;
    /** @type {?} */
    TableExpandableRowsExample.prototype.expandedElement;
}
/**
 * @record
 */
function PeriodicElement$3() { }
if (false) {
    /** @type {?} */
    PeriodicElement$3.prototype.name;
    /** @type {?} */
    PeriodicElement$3.prototype.position;
    /** @type {?} */
    PeriodicElement$3.prototype.weight;
    /** @type {?} */
    PeriodicElement$3.prototype.symbol;
    /** @type {?} */
    PeriodicElement$3.prototype.description;
}
/** @type {?} */
const ELEMENT_DATA$3 = [
    {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
    }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
    }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
    }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
    }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
    }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
    }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
    }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
    }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
    },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TableFilteringExample_th_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function TableFilteringExample_td_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r133 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r133.position, " ");
} }
function TableFilteringExample_th_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function TableFilteringExample_td_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r134 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r134.name, " ");
} }
function TableFilteringExample_th_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function TableFilteringExample_td_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r135 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r135.weight, " ");
} }
function TableFilteringExample_th_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function TableFilteringExample_td_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r136 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r136.symbol, " ");
} }
function TableFilteringExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 12);
} }
function TableFilteringExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 13);
} }
/**
 * @record
 */
function PeriodicElement$4() { }
if (false) {
    /** @type {?} */
    PeriodicElement$4.prototype.name;
    /** @type {?} */
    PeriodicElement$4.prototype.position;
    /** @type {?} */
    PeriodicElement$4.prototype.weight;
    /** @type {?} */
    PeriodicElement$4.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$4 = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
/**
 * \@title Table with filtering
 */
class TableFilteringExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$4);
    }
    /**
     * @param {?} filterValue
     * @return {?}
     */
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
TableFilteringExample.decorators = [
    { type: Component, args: [{
                selector: 'table-filtering-example',
                styleUrls: ['table-filtering-example.css'],
                templateUrl: 'table-filtering-example.html',
            },] },
];
/** @nocollapse */ TableFilteringExample.ɵfac = function TableFilteringExample_Factory(t) { return new (t || TableFilteringExample)(); };
/** @nocollapse */ TableFilteringExample.ɵcmp = ɵɵdefineComponent({ type: TableFilteringExample, selectors: [["table-filtering-example"]], decls: 17, vars: 3, consts: [["matInput", "", "placeholder", "Filter", 3, "keyup"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableFilteringExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field");
        ɵɵelementStart(1, "input", 0);
        ɵɵlistener("keyup", function TableFilteringExample_Template_input_keyup_1_listener($event) { return ctx.applyFilter($event.target.value); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(2, "table", 1);
        ɵɵelementContainerStart(3, 2);
        ɵɵtemplate(4, TableFilteringExample_th_4_Template, 2, 0, "th", 3);
        ɵɵtemplate(5, TableFilteringExample_td_5_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(6, 5);
        ɵɵtemplate(7, TableFilteringExample_th_7_Template, 2, 0, "th", 3);
        ɵɵtemplate(8, TableFilteringExample_td_8_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(9, 6);
        ɵɵtemplate(10, TableFilteringExample_th_10_Template, 2, 0, "th", 3);
        ɵɵtemplate(11, TableFilteringExample_td_11_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(12, 7);
        ɵɵtemplate(13, TableFilteringExample_th_13_Template, 2, 0, "th", 3);
        ɵɵtemplate(14, TableFilteringExample_td_14_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵtemplate(15, TableFilteringExample_tr_15_Template, 1, 0, "tr", 8);
        ɵɵtemplate(16, TableFilteringExample_tr_16_Template, 1, 0, "tr", 9);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(13);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [MatFormField, MatInput, MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableFilteringExample, [{
        type: Component,
        args: [{
                selector: 'table-filtering-example',
                styleUrls: ['table-filtering-example.css'],
                templateUrl: 'table-filtering-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableFilteringExample.prototype.displayedColumns;
    /** @type {?} */
    TableFilteringExample.prototype.dataSource;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TableFooterRowExample_th_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 9);
    ɵɵtext(1, " Item ");
    ɵɵelementEnd();
} }
function TableFooterRowExample_td_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r147 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", transaction_r147.item, " ");
} }
function TableFooterRowExample_td_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵtext(1, " Total ");
    ɵɵelementEnd();
} }
function TableFooterRowExample_th_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 9);
    ɵɵtext(1, " Cost ");
    ɵɵelementEnd();
} }
function TableFooterRowExample_td_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵpipe(2, "currency");
    ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r148 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, transaction_r148.cost), " ");
} }
function TableFooterRowExample_td_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵtext(1);
    ɵɵpipe(2, "currency");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r143 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ctx_r143.getTotalCost()), " ");
} }
function TableFooterRowExample_tr_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 12);
} }
function TableFooterRowExample_tr_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 13);
} }
function TableFooterRowExample_tr_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 14);
} }
/**
 * @record
 */
function Transaction() { }
if (false) {
    /** @type {?} */
    Transaction.prototype.item;
    /** @type {?} */
    Transaction.prototype.cost;
}
/**
 * \@title Footer row table
 */
class TableFooterRowExample {
    constructor() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /**
     * Gets the total cost of all transactions.
     * @return {?}
     */
    getTotalCost() {
        return this.transactions.map((/**
         * @param {?} t
         * @return {?}
         */
        t => t.cost)).reduce((/**
         * @param {?} acc
         * @param {?} value
         * @return {?}
         */
        (acc, value) => acc + value), 0);
    }
}
TableFooterRowExample.decorators = [
    { type: Component, args: [{
                selector: 'table-footer-row-example',
                styleUrls: ['table-footer-row-example.css'],
                templateUrl: 'table-footer-row-example.html',
            },] },
];
/** @nocollapse */ TableFooterRowExample.ɵfac = function TableFooterRowExample_Factory(t) { return new (t || TableFooterRowExample)(); };
/** @nocollapse */ TableFooterRowExample.ɵcmp = ɵɵdefineComponent({ type: TableFooterRowExample, selectors: [["table-footer-row-example"]], decls: 12, vars: 4, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "cost"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function TableFooterRowExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵelementContainerStart(1, 1);
        ɵɵtemplate(2, TableFooterRowExample_th_2_Template, 2, 0, "th", 2);
        ɵɵtemplate(3, TableFooterRowExample_td_3_Template, 2, 1, "td", 3);
        ɵɵtemplate(4, TableFooterRowExample_td_4_Template, 2, 0, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(5, 5);
        ɵɵtemplate(6, TableFooterRowExample_th_6_Template, 2, 0, "th", 2);
        ɵɵtemplate(7, TableFooterRowExample_td_7_Template, 3, 3, "td", 3);
        ɵɵtemplate(8, TableFooterRowExample_td_8_Template, 3, 3, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵtemplate(9, TableFooterRowExample_tr_9_Template, 1, 0, "tr", 6);
        ɵɵtemplate(10, TableFooterRowExample_tr_10_Template, 1, 0, "tr", 7);
        ɵɵtemplate(11, TableFooterRowExample_tr_11_Template, 1, 0, "tr", 8);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.transactions);
        ɵɵadvance(9);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matFooterRowDef", ctx.displayedColumns);
    } }, directives: [MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatFooterCellDef, MatHeaderRowDef, MatRowDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow], pipes: [CurrencyPipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.mat-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableFooterRowExample, [{
        type: Component,
        args: [{
                selector: 'table-footer-row-example',
                styleUrls: ['table-footer-row-example.css'],
                templateUrl: 'table-footer-row-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableFooterRowExample.prototype.displayedColumns;
    /** @type {?} */
    TableFooterRowExample.prototype.transactions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TableHttpExample_div_1_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-spinner");
} }
function TableHttpExample_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtext(1, " GitHub's API rate limit has been reached. It will be reset in one minute. ");
    ɵɵelementEnd();
} }
function TableHttpExample_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵtemplate(1, TableHttpExample_div_1_mat_spinner_1_Template, 1, 0, "mat-spinner", 15);
    ɵɵtemplate(2, TableHttpExample_div_1_div_2_Template, 2, 0, "div", 16);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r150 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r150.isLoadingResults);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r150.isRateLimitReached);
} }
function TableHttpExample_th_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 18);
    ɵɵtext(1, "#");
    ɵɵelementEnd();
} }
function TableHttpExample_td_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r163 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(row_r163.number);
} }
function TableHttpExample_th_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 18);
    ɵɵtext(1, "Title");
    ɵɵelementEnd();
} }
function TableHttpExample_td_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r164 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(row_r164.title);
} }
function TableHttpExample_th_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 18);
    ɵɵtext(1, "State");
    ɵɵelementEnd();
} }
function TableHttpExample_td_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r165 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(row_r165.state);
} }
function TableHttpExample_th_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 20);
    ɵɵtext(1, " Created ");
    ɵɵelementEnd();
} }
function TableHttpExample_td_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 19);
    ɵɵtext(1);
    ɵɵpipe(2, "date");
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r166 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, row_r166.created_at));
} }
function TableHttpExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 21);
} }
function TableHttpExample_tr_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 22);
} }
/**
 * \@title Table retrieving data through HTTP
 */
class TableHttpExample {
    /**
     * @param {?} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this.displayedColumns = ['created', 'state', 'number', 'title'];
        this.data = [];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe((/**
         * @return {?}
         */
        () => this.paginator.pageIndex = 0));
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(startWith({}), switchMap((/**
         * @return {?}
         */
        () => {
            this.isLoadingResults = true;
            return (/** @type {?} */ (this.exampleDatabase)).getRepoIssues(this.sort.active, this.sort.direction, this.paginator.pageIndex);
        })), map((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            // Flip flag to show that loading has finished.
            this.isLoadingResults = false;
            this.isRateLimitReached = false;
            this.resultsLength = data.total_count;
            return data.items;
        })), catchError((/**
         * @return {?}
         */
        () => {
            this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            this.isRateLimitReached = true;
            return of([]);
        }))).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => this.data = data));
    }
}
TableHttpExample.decorators = [
    { type: Component, args: [{
                selector: 'table-http-example',
                styleUrls: ['table-http-example.css'],
                templateUrl: 'table-http-example.html',
            },] },
];
/** @nocollapse */
TableHttpExample.ctorParameters = () => [
    { type: HttpClient }
];
TableHttpExample.propDecorators = {
    paginator: [{ type: ViewChild, args: [MatPaginator,] }],
    sort: [{ type: ViewChild, args: [MatSort,] }]
};
/** @nocollapse */ TableHttpExample.ɵfac = function TableHttpExample_Factory(t) { return new (t || TableHttpExample)(ɵɵdirectiveInject(HttpClient)); };
/** @nocollapse */ TableHttpExample.ɵcmp = ɵɵdefineComponent({ type: TableHttpExample, selectors: [["table-http-example"]], viewQuery: function TableHttpExample_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(MatPaginator, true);
        ɵɵviewQuery(MatSort, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.paginator = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sort = _t.first);
    } }, decls: 19, vars: 6, consts: [[1, "example-container", "mat-elevation-z8"], ["class", "example-loading-shade", 4, "ngIf"], [1, "example-table-container"], ["mat-table", "", "matSort", "", "matSortActive", "created", "matSortDisableClear", "", "matSortDirection", "desc", 1, "example-table", 3, "dataSource"], ["matColumnDef", "number"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "state"], ["matColumnDef", "created"], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageSize"], [1, "example-loading-shade"], [4, "ngIf"], ["class", "example-rate-limit-reached", 4, "ngIf"], [1, "example-rate-limit-reached"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableHttpExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, TableHttpExample_div_1_Template, 3, 2, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "table", 3);
        ɵɵelementContainerStart(4, 4);
        ɵɵtemplate(5, TableHttpExample_th_5_Template, 2, 0, "th", 5);
        ɵɵtemplate(6, TableHttpExample_td_6_Template, 2, 1, "td", 6);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(7, 7);
        ɵɵtemplate(8, TableHttpExample_th_8_Template, 2, 0, "th", 5);
        ɵɵtemplate(9, TableHttpExample_td_9_Template, 2, 1, "td", 6);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(10, 8);
        ɵɵtemplate(11, TableHttpExample_th_11_Template, 2, 0, "th", 5);
        ɵɵtemplate(12, TableHttpExample_td_12_Template, 2, 1, "td", 6);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(13, 9);
        ɵɵtemplate(14, TableHttpExample_th_14_Template, 2, 0, "th", 10);
        ɵɵtemplate(15, TableHttpExample_td_15_Template, 3, 3, "td", 6);
        ɵɵelementContainerEnd();
        ɵɵtemplate(16, TableHttpExample_tr_16_Template, 1, 0, "tr", 11);
        ɵɵtemplate(17, TableHttpExample_tr_17_Template, 1, 0, "tr", 12);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(18, "mat-paginator", 13);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isLoadingResults || ctx.isRateLimitReached);
        ɵɵadvance(2);
        ɵɵproperty("dataSource", ctx.data);
        ɵɵadvance(13);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("length", ctx.resultsLength)("pageSize", 30);
    } }, directives: [NgIf, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatPaginator, MatSpinner, MatHeaderCell, MatCell, MatSortHeader, MatHeaderRow, MatRow], pipes: [DatePipe], styles: [".example-container[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 200px;\n}\n\n.example-table-container[_ngcontent-%COMP%] {\n  position: relative;\n  max-height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-loading-shade[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-rate-limit-reached[_ngcontent-%COMP%] {\n  color: #980000;\n  max-width: 360px;\n  text-align: center;\n}\n\n\n.mat-column-number[_ngcontent-%COMP%], .mat-column-state[_ngcontent-%COMP%] {\n  max-width: 64px;\n}\n\n.mat-column-created[_ngcontent-%COMP%] {\n  max-width: 124px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableHttpExample, [{
        type: Component,
        args: [{
                selector: 'table-http-example',
                styleUrls: ['table-http-example.css'],
                templateUrl: 'table-http-example.html',
            }]
    }], function () { return [{ type: HttpClient }]; }, { paginator: [{
            type: ViewChild,
            args: [MatPaginator]
        }], sort: [{
            type: ViewChild,
            args: [MatSort]
        }] }); })();
if (false) {
    /** @type {?} */
    TableHttpExample.prototype.displayedColumns;
    /** @type {?} */
    TableHttpExample.prototype.exampleDatabase;
    /** @type {?} */
    TableHttpExample.prototype.data;
    /** @type {?} */
    TableHttpExample.prototype.resultsLength;
    /** @type {?} */
    TableHttpExample.prototype.isLoadingResults;
    /** @type {?} */
    TableHttpExample.prototype.isRateLimitReached;
    /** @type {?} */
    TableHttpExample.prototype.paginator;
    /** @type {?} */
    TableHttpExample.prototype.sort;
    /**
     * @type {?}
     * @private
     */
    TableHttpExample.prototype._httpClient;
}
/**
 * @record
 */
function GithubApi() { }
if (false) {
    /** @type {?} */
    GithubApi.prototype.items;
    /** @type {?} */
    GithubApi.prototype.total_count;
}
/**
 * @record
 */
function GithubIssue() { }
if (false) {
    /** @type {?} */
    GithubIssue.prototype.created_at;
    /** @type {?} */
    GithubIssue.prototype.number;
    /** @type {?} */
    GithubIssue.prototype.state;
    /** @type {?} */
    GithubIssue.prototype.title;
}
/**
 * An example database that the data source uses to retrieve data for the table.
 */
class ExampleHttpDatabase {
    /**
     * @param {?} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    /**
     * @param {?} sort
     * @param {?} order
     * @param {?} page
     * @return {?}
     */
    getRepoIssues(sort, order, page) {
        /** @type {?} */
        const href = 'https://api.github.com/search/issues';
        /** @type {?} */
        const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;
        return this._httpClient.get(requestUrl);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExampleHttpDatabase.prototype._httpClient;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TableMultipleHeaderFooterExample_th_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 15);
    ɵɵtext(1, " Item ");
    ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_td_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r182 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", transaction_r182.item, " ");
} }
function TableMultipleHeaderFooterExample_td_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 17);
    ɵɵtext(1, " Total ");
    ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_th_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 15);
    ɵɵtext(1, " Cost ");
    ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_td_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 16);
    ɵɵtext(1);
    ɵɵpipe(2, "currency");
    ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r183 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, transaction_r183.cost), " ");
} }
function TableMultipleHeaderFooterExample_td_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 17);
    ɵɵtext(1);
    ɵɵpipe(2, "currency");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r173 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ctx_r173.getTotalCost()), " ");
} }
function TableMultipleHeaderFooterExample_th_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 15);
    ɵɵtext(1, " Name of the item purchased ");
    ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_th_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 15);
    ɵɵtext(1, " Cost of the item in USD ");
    ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_td_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 18);
    ɵɵtext(1, " Please note that the cost of items displayed are completely and totally made up. ");
    ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 19);
} }
function TableMultipleHeaderFooterExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 20);
} }
function TableMultipleHeaderFooterExample_tr_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 21);
} }
function TableMultipleHeaderFooterExample_tr_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 22);
} }
function TableMultipleHeaderFooterExample_tr_19_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 23);
} }
const _c0$1 = function () { return ["item-description", "cost-description"]; };
const _c1 = function () { return ["disclaimer"]; };
/**
 * @record
 */
function Transaction$1() { }
if (false) {
    /** @type {?} */
    Transaction$1.prototype.item;
    /** @type {?} */
    Transaction$1.prototype.cost;
}
/**
 * \@title Table with multiple header and footer rows
 */
class TableMultipleHeaderFooterExample {
    constructor() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /**
     * Gets the total cost of all transactions.
     * @return {?}
     */
    getTotalCost() {
        return this.transactions.map((/**
         * @param {?} t
         * @return {?}
         */
        t => t.cost)).reduce((/**
         * @param {?} acc
         * @param {?} value
         * @return {?}
         */
        (acc, value) => acc + value), 0);
    }
}
TableMultipleHeaderFooterExample.decorators = [
    { type: Component, args: [{
                selector: 'table-multiple-header-footer-example',
                styleUrls: ['table-multiple-header-footer-example.css'],
                templateUrl: 'table-multiple-header-footer-example.html',
            },] },
];
/** @nocollapse */ TableMultipleHeaderFooterExample.ɵfac = function TableMultipleHeaderFooterExample_Factory(t) { return new (t || TableMultipleHeaderFooterExample)(); };
/** @nocollapse */ TableMultipleHeaderFooterExample.ɵcmp = ɵɵdefineComponent({ type: TableMultipleHeaderFooterExample, selectors: [["table-multiple-header-footer-example"]], decls: 20, vars: 8, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "cost"], ["matColumnDef", "item-description"], ["matColumnDef", "cost-description"], ["matColumnDef", "disclaimer"], ["mat-footer-cell", "", "colspan", "2", 4, "matFooterCellDef"], ["mat-header-row", "", "class", "example-first-header-row", 4, "matHeaderRowDef"], ["mat-header-row", "", "class", "example-second-header-row", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", "class", "example-first-footer-row", 4, "matFooterRowDef"], ["mat-footer-row", "", "class", "example-second-footer-row", 4, "matFooterRowDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-footer-cell", "", "colspan", "2"], ["mat-header-row", "", 1, "example-first-header-row"], ["mat-header-row", "", 1, "example-second-header-row"], ["mat-row", ""], ["mat-footer-row", "", 1, "example-first-footer-row"], ["mat-footer-row", "", 1, "example-second-footer-row"]], template: function TableMultipleHeaderFooterExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵelementContainerStart(1, 1);
        ɵɵtemplate(2, TableMultipleHeaderFooterExample_th_2_Template, 2, 0, "th", 2);
        ɵɵtemplate(3, TableMultipleHeaderFooterExample_td_3_Template, 2, 1, "td", 3);
        ɵɵtemplate(4, TableMultipleHeaderFooterExample_td_4_Template, 2, 0, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(5, 5);
        ɵɵtemplate(6, TableMultipleHeaderFooterExample_th_6_Template, 2, 0, "th", 2);
        ɵɵtemplate(7, TableMultipleHeaderFooterExample_td_7_Template, 3, 3, "td", 3);
        ɵɵtemplate(8, TableMultipleHeaderFooterExample_td_8_Template, 3, 3, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(9, 6);
        ɵɵtemplate(10, TableMultipleHeaderFooterExample_th_10_Template, 2, 0, "th", 2);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(11, 7);
        ɵɵtemplate(12, TableMultipleHeaderFooterExample_th_12_Template, 2, 0, "th", 2);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(13, 8);
        ɵɵtemplate(14, TableMultipleHeaderFooterExample_td_14_Template, 2, 0, "td", 9);
        ɵɵelementContainerEnd();
        ɵɵtemplate(15, TableMultipleHeaderFooterExample_tr_15_Template, 1, 0, "tr", 10);
        ɵɵtemplate(16, TableMultipleHeaderFooterExample_tr_16_Template, 1, 0, "tr", 11);
        ɵɵtemplate(17, TableMultipleHeaderFooterExample_tr_17_Template, 1, 0, "tr", 12);
        ɵɵtemplate(18, TableMultipleHeaderFooterExample_tr_18_Template, 1, 0, "tr", 13);
        ɵɵtemplate(19, TableMultipleHeaderFooterExample_tr_19_Template, 1, 0, "tr", 14);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.transactions);
        ɵɵadvance(15);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matHeaderRowDef", ɵɵpureFunction0(6, _c0$1));
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matFooterRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matFooterRowDef", ɵɵpureFunction0(7, _c1));
    } }, directives: [MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatFooterCellDef, MatHeaderRowDef, MatRowDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow], pipes: [CurrencyPipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-first-header-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.example-second-header-row[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.example-first-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.example-second-footer-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #900000;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableMultipleHeaderFooterExample, [{
        type: Component,
        args: [{
                selector: 'table-multiple-header-footer-example',
                styleUrls: ['table-multiple-header-footer-example.css'],
                templateUrl: 'table-multiple-header-footer-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableMultipleHeaderFooterExample.prototype.displayedColumns;
    /** @type {?} */
    TableMultipleHeaderFooterExample.prototype.transactions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TableOverviewExample_th_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 13);
    ɵɵtext(1, " ID ");
    ɵɵelementEnd();
} }
function TableOverviewExample_td_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r195 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", row_r195.id, " ");
} }
function TableOverviewExample_th_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 13);
    ɵɵtext(1, " Progress ");
    ɵɵelementEnd();
} }
function TableOverviewExample_td_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r196 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", row_r196.progress, "% ");
} }
function TableOverviewExample_th_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 13);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function TableOverviewExample_td_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r197 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", row_r197.name, " ");
} }
function TableOverviewExample_th_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 13);
    ɵɵtext(1, " Color ");
    ɵɵelementEnd();
} }
function TableOverviewExample_td_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r198 = ctx.$implicit;
    ɵɵstyleProp("color", row_r198.color);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", row_r198.color, " ");
} }
function TableOverviewExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 15);
} }
function TableOverviewExample_tr_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 16);
} }
const _c0$2 = function () { return [5, 10, 25, 100]; };
/**
 * @record
 */
function UserData() { }
if (false) {
    /** @type {?} */
    UserData.prototype.id;
    /** @type {?} */
    UserData.prototype.name;
    /** @type {?} */
    UserData.prototype.progress;
    /** @type {?} */
    UserData.prototype.color;
}
/**
 * Constants used to fill up our data base.
 * @type {?}
 */
const COLORS = [
    'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
    'aqua', 'blue', 'navy', 'black', 'gray'
];
/** @type {?} */
const NAMES = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
/**
 * \@title Data table with sorting, pagination, and filtering.
 */
class TableOverviewExample {
    constructor() {
        this.displayedColumns = ['id', 'name', 'progress', 'color'];
        // Create 100 users
        /** @type {?} */
        const users = Array.from({ length: 100 }, (/**
         * @param {?} _
         * @param {?} k
         * @return {?}
         */
        (_, k) => createNewUser(k + 1)));
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    /**
     * @param {?} filterValue
     * @return {?}
     */
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
TableOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'table-overview-example',
                styleUrls: ['table-overview-example.css'],
                templateUrl: 'table-overview-example.html',
            },] },
];
/** @nocollapse */
TableOverviewExample.ctorParameters = () => [];
TableOverviewExample.propDecorators = {
    paginator: [{ type: ViewChild, args: [MatPaginator, { static: true },] }],
    sort: [{ type: ViewChild, args: [MatSort, { static: true },] }]
};
/** @nocollapse */ TableOverviewExample.ɵfac = function TableOverviewExample_Factory(t) { return new (t || TableOverviewExample)(); };
/** @nocollapse */ TableOverviewExample.ɵcmp = ɵɵdefineComponent({ type: TableOverviewExample, selectors: [["table-overview-example"]], viewQuery: function TableOverviewExample_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(MatPaginator, true);
        ɵɵstaticViewQuery(MatSort, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.paginator = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sort = _t.first);
    } }, decls: 19, vars: 5, consts: [["matInput", "", "placeholder", "Filter", 3, "keyup"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "progress"], ["matColumnDef", "name"], ["matColumnDef", "color"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field");
        ɵɵelementStart(1, "input", 0);
        ɵɵlistener("keyup", function TableOverviewExample_Template_input_keyup_1_listener($event) { return ctx.applyFilter($event.target.value); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 1);
        ɵɵelementStart(3, "table", 2);
        ɵɵelementContainerStart(4, 3);
        ɵɵtemplate(5, TableOverviewExample_th_5_Template, 2, 0, "th", 4);
        ɵɵtemplate(6, TableOverviewExample_td_6_Template, 2, 1, "td", 5);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(7, 6);
        ɵɵtemplate(8, TableOverviewExample_th_8_Template, 2, 0, "th", 4);
        ɵɵtemplate(9, TableOverviewExample_td_9_Template, 2, 1, "td", 5);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(10, 7);
        ɵɵtemplate(11, TableOverviewExample_th_11_Template, 2, 0, "th", 4);
        ɵɵtemplate(12, TableOverviewExample_td_12_Template, 2, 1, "td", 5);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(13, 8);
        ɵɵtemplate(14, TableOverviewExample_th_14_Template, 2, 0, "th", 4);
        ɵɵtemplate(15, TableOverviewExample_td_15_Template, 2, 2, "td", 9);
        ɵɵelementContainerEnd();
        ɵɵtemplate(16, TableOverviewExample_tr_16_Template, 1, 0, "tr", 10);
        ɵɵtemplate(17, TableOverviewExample_tr_17_Template, 1, 0, "tr", 11);
        ɵɵelementEnd();
        ɵɵelement(18, "mat-paginator", 12);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(13);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("pageSizeOptions", ɵɵpureFunction0(4, _c0$2));
    } }, directives: [MatFormField, MatInput, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatPaginator, MatHeaderCell, MatSortHeader, MatCell, MatHeaderRow, MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  width: 25%;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableOverviewExample, [{
        type: Component,
        args: [{
                selector: 'table-overview-example',
                styleUrls: ['table-overview-example.css'],
                templateUrl: 'table-overview-example.html',
            }]
    }], function () { return []; }, { paginator: [{
            type: ViewChild,
            args: [MatPaginator, { static: true }]
        }], sort: [{
            type: ViewChild,
            args: [MatSort, { static: true }]
        }] }); })();
if (false) {
    /** @type {?} */
    TableOverviewExample.prototype.displayedColumns;
    /** @type {?} */
    TableOverviewExample.prototype.dataSource;
    /** @type {?} */
    TableOverviewExample.prototype.paginator;
    /** @type {?} */
    TableOverviewExample.prototype.sort;
}
/**
 * Builds and returns a new User.
 * @param {?} id
 * @return {?}
 */
function createNewUser(id) {
    /** @type {?} */
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TablePaginationExample_th_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 11);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function TablePaginationExample_td_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r210 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r210.position, " ");
} }
function TablePaginationExample_th_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 11);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function TablePaginationExample_td_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r211 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r211.name, " ");
} }
function TablePaginationExample_th_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 11);
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function TablePaginationExample_td_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r212 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r212.weight, " ");
} }
function TablePaginationExample_th_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 11);
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function TablePaginationExample_td_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r213 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r213.symbol, " ");
} }
function TablePaginationExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 13);
} }
function TablePaginationExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 14);
} }
const _c0$3 = function () { return [5, 10, 20]; };
/**
 * \@title Table with pagination
 */
class TablePaginationExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$5);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }
}
TablePaginationExample.decorators = [
    { type: Component, args: [{
                selector: 'table-pagination-example',
                styleUrls: ['table-pagination-example.css'],
                templateUrl: 'table-pagination-example.html',
            },] },
];
TablePaginationExample.propDecorators = {
    paginator: [{ type: ViewChild, args: [MatPaginator, { static: true },] }]
};
/** @nocollapse */ TablePaginationExample.ɵfac = function TablePaginationExample_Factory(t) { return new (t || TablePaginationExample)(); };
/** @nocollapse */ TablePaginationExample.ɵcmp = ɵɵdefineComponent({ type: TablePaginationExample, selectors: [["table-pagination-example"]], viewQuery: function TablePaginationExample_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(MatPaginator, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.paginator = _t.first);
    } }, decls: 17, vars: 5, consts: [[1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TablePaginationExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "table", 1);
        ɵɵelementContainerStart(2, 2);
        ɵɵtemplate(3, TablePaginationExample_th_3_Template, 2, 0, "th", 3);
        ɵɵtemplate(4, TablePaginationExample_td_4_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(5, 5);
        ɵɵtemplate(6, TablePaginationExample_th_6_Template, 2, 0, "th", 3);
        ɵɵtemplate(7, TablePaginationExample_td_7_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(8, 6);
        ɵɵtemplate(9, TablePaginationExample_th_9_Template, 2, 0, "th", 3);
        ɵɵtemplate(10, TablePaginationExample_td_10_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(11, 7);
        ɵɵtemplate(12, TablePaginationExample_th_12_Template, 2, 0, "th", 3);
        ɵɵtemplate(13, TablePaginationExample_td_13_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵtemplate(14, TablePaginationExample_tr_14_Template, 1, 0, "tr", 8);
        ɵɵtemplate(15, TablePaginationExample_tr_15_Template, 1, 0, "tr", 9);
        ɵɵelementEnd();
        ɵɵelement(16, "mat-paginator", 10);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(13);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("pageSizeOptions", ɵɵpureFunction0(4, _c0$3));
    } }, directives: [MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatPaginator, MatHeaderCell, MatCell, MatHeaderRow, MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TablePaginationExample, [{
        type: Component,
        args: [{
                selector: 'table-pagination-example',
                styleUrls: ['table-pagination-example.css'],
                templateUrl: 'table-pagination-example.html',
            }]
    }], null, { paginator: [{
            type: ViewChild,
            args: [MatPaginator, { static: true }]
        }] }); })();
if (false) {
    /** @type {?} */
    TablePaginationExample.prototype.displayedColumns;
    /** @type {?} */
    TablePaginationExample.prototype.dataSource;
    /** @type {?} */
    TablePaginationExample.prototype.paginator;
}
/**
 * @record
 */
function PeriodicElement$5() { }
if (false) {
    /** @type {?} */
    PeriodicElement$5.prototype.name;
    /** @type {?} */
    PeriodicElement$5.prototype.position;
    /** @type {?} */
    PeriodicElement$5.prototype.weight;
    /** @type {?} */
    PeriodicElement$5.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$5 = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TableRowContextExample_th_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 12);
    ɵɵtext(1, " $implicit ");
    ɵɵelementEnd();
} }
function TableRowContextExample_td_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const data_r231 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", data_r231, " ");
} }
function TableRowContextExample_th_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 12);
    ɵɵtext(1, " index ");
    ɵɵelementEnd();
} }
function TableRowContextExample_td_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const index_r232 = ctx.index;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", index_r232, " ");
} }
function TableRowContextExample_th_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 12);
    ɵɵtext(1, " count ");
    ɵɵelementEnd();
} }
function TableRowContextExample_td_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const count_r233 = ctx.count;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", count_r233, " ");
} }
function TableRowContextExample_th_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 12);
    ɵɵtext(1, " first ");
    ɵɵelementEnd();
} }
function TableRowContextExample_td_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const first_r234 = ctx.first;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", first_r234, " ");
} }
function TableRowContextExample_th_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 12);
    ɵɵtext(1, " last ");
    ɵɵelementEnd();
} }
function TableRowContextExample_td_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const last_r235 = ctx.last;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", last_r235, " ");
} }
function TableRowContextExample_th_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 12);
    ɵɵtext(1, " even ");
    ɵɵelementEnd();
} }
function TableRowContextExample_td_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const even_r236 = ctx.even;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", even_r236, " ");
} }
function TableRowContextExample_th_20_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 12);
    ɵɵtext(1, " odd ");
    ɵɵelementEnd();
} }
function TableRowContextExample_td_21_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const odd_r237 = ctx.odd;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", odd_r237, " ");
} }
function TableRowContextExample_tr_22_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 14);
} }
function TableRowContextExample_tr_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 15);
} }
/**
 * \@title Table showing each row context properties.
 */
class TableRowContextExample {
    constructor() {
        this.displayedColumns = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
        this.data = ['one', 'two', 'three', 'four', 'five'];
    }
}
TableRowContextExample.decorators = [
    { type: Component, args: [{
                selector: 'table-row-context-example',
                styleUrls: ['table-row-context-example.css'],
                templateUrl: 'table-row-context-example.html',
            },] },
];
/** @nocollapse */ TableRowContextExample.ɵfac = function TableRowContextExample_Factory(t) { return new (t || TableRowContextExample)(); };
/** @nocollapse */ TableRowContextExample.ɵcmp = ɵɵdefineComponent({ type: TableRowContextExample, selectors: [["table-row-context-example"]], decls: 24, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "$implicit"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "index"], ["matColumnDef", "count"], ["matColumnDef", "first"], ["matColumnDef", "last"], ["matColumnDef", "even"], ["matColumnDef", "odd"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableRowContextExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵelementContainerStart(1, 1);
        ɵɵtemplate(2, TableRowContextExample_th_2_Template, 2, 0, "th", 2);
        ɵɵtemplate(3, TableRowContextExample_td_3_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(4, 4);
        ɵɵtemplate(5, TableRowContextExample_th_5_Template, 2, 0, "th", 2);
        ɵɵtemplate(6, TableRowContextExample_td_6_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(7, 5);
        ɵɵtemplate(8, TableRowContextExample_th_8_Template, 2, 0, "th", 2);
        ɵɵtemplate(9, TableRowContextExample_td_9_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(10, 6);
        ɵɵtemplate(11, TableRowContextExample_th_11_Template, 2, 0, "th", 2);
        ɵɵtemplate(12, TableRowContextExample_td_12_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(13, 7);
        ɵɵtemplate(14, TableRowContextExample_th_14_Template, 2, 0, "th", 2);
        ɵɵtemplate(15, TableRowContextExample_td_15_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(16, 8);
        ɵɵtemplate(17, TableRowContextExample_th_17_Template, 2, 0, "th", 2);
        ɵɵtemplate(18, TableRowContextExample_td_18_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(19, 9);
        ɵɵtemplate(20, TableRowContextExample_th_20_Template, 2, 0, "th", 2);
        ɵɵtemplate(21, TableRowContextExample_td_21_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵtemplate(22, TableRowContextExample_tr_22_Template, 1, 0, "tr", 10);
        ɵɵtemplate(23, TableRowContextExample_tr_23_Template, 1, 0, "tr", 11);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.data);
        ɵɵadvance(22);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableRowContextExample, [{
        type: Component,
        args: [{
                selector: 'table-row-context-example',
                styleUrls: ['table-row-context-example.css'],
                templateUrl: 'table-row-context-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableRowContextExample.prototype.displayedColumns;
    /** @type {?} */
    TableRowContextExample.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TableSelectionExample_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r252 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "th", 10);
    ɵɵelementStart(1, "mat-checkbox", 11);
    ɵɵlistener("change", function TableSelectionExample_th_2_Template_mat_checkbox_change_1_listener($event) { ɵɵrestoreView(_r252); const ctx_r251 = ɵɵnextContext(); return $event ? ctx_r251.masterToggle() : null; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r239 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("checked", ctx_r239.selection.hasValue() && ctx_r239.isAllSelected())("indeterminate", ctx_r239.selection.hasValue() && !ctx_r239.isAllSelected())("aria-label", ctx_r239.checkboxLabel());
} }
function TableSelectionExample_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r255 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 12);
    ɵɵelementStart(1, "mat-checkbox", 13);
    ɵɵlistener("click", function TableSelectionExample_td_3_Template_mat_checkbox_click_1_listener($event) { ɵɵrestoreView(_r255); return $event.stopPropagation(); });
    ɵɵlistener("change", function TableSelectionExample_td_3_Template_mat_checkbox_change_1_listener($event) { ɵɵrestoreView(_r255); const row_r253 = ctx.$implicit; const ctx_r256 = ɵɵnextContext(); return $event ? ctx_r256.selection.toggle(row_r253) : null; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r253 = ctx.$implicit;
    const ctx_r240 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("checked", ctx_r240.selection.isSelected(row_r253))("aria-label", ctx_r240.checkboxLabel(row_r253));
} }
function TableSelectionExample_th_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function TableSelectionExample_td_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r257 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r257.position, " ");
} }
function TableSelectionExample_th_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function TableSelectionExample_td_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r258 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r258.name, " ");
} }
function TableSelectionExample_th_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function TableSelectionExample_td_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r259 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r259.weight, " ");
} }
function TableSelectionExample_th_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function TableSelectionExample_td_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r260 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r260.symbol, " ");
} }
function TableSelectionExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 14);
} }
function TableSelectionExample_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r263 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 15);
    ɵɵlistener("click", function TableSelectionExample_tr_17_Template_tr_click_0_listener($event) { ɵɵrestoreView(_r263); const row_r261 = ctx.$implicit; const ctx_r262 = ɵɵnextContext(); return ctx_r262.selection.toggle(row_r261); });
    ɵɵelementEnd();
} }
/**
 * @record
 */
function PeriodicElement$6() { }
if (false) {
    /** @type {?} */
    PeriodicElement$6.prototype.name;
    /** @type {?} */
    PeriodicElement$6.prototype.position;
    /** @type {?} */
    PeriodicElement$6.prototype.weight;
    /** @type {?} */
    PeriodicElement$6.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$6 = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
/**
 * \@title Table with selection
 */
class TableSelectionExample {
    constructor() {
        this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$6);
        this.selection = new SelectionModel(true, []);
    }
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    isAllSelected() {
        /** @type {?} */
        const numSelected = this.selection.selected.length;
        /** @type {?} */
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach((/**
             * @param {?} row
             * @return {?}
             */
            row => this.selection.select(row)));
    }
    /**
     * The label for the checkbox on the passed row
     * @param {?=} row
     * @return {?}
     */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
}
TableSelectionExample.decorators = [
    { type: Component, args: [{
                selector: 'table-selection-example',
                styleUrls: ['table-selection-example.css'],
                templateUrl: 'table-selection-example.html',
            },] },
];
/** @nocollapse */ TableSelectionExample.ɵfac = function TableSelectionExample_Factory(t) { return new (t || TableSelectionExample)(); };
/** @nocollapse */ TableSelectionExample.ɵcmp = ɵɵdefineComponent({ type: TableSelectionExample, selectors: [["table-selection-example"]], decls: 18, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "position"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "aria-label", "change"], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function TableSelectionExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵelementContainerStart(1, 1);
        ɵɵtemplate(2, TableSelectionExample_th_2_Template, 2, 3, "th", 2);
        ɵɵtemplate(3, TableSelectionExample_td_3_Template, 2, 2, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(4, 4);
        ɵɵtemplate(5, TableSelectionExample_th_5_Template, 2, 0, "th", 2);
        ɵɵtemplate(6, TableSelectionExample_td_6_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(7, 5);
        ɵɵtemplate(8, TableSelectionExample_th_8_Template, 2, 0, "th", 2);
        ɵɵtemplate(9, TableSelectionExample_td_9_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(10, 6);
        ɵɵtemplate(11, TableSelectionExample_th_11_Template, 2, 0, "th", 2);
        ɵɵtemplate(12, TableSelectionExample_td_12_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(13, 7);
        ɵɵtemplate(14, TableSelectionExample_th_14_Template, 2, 0, "th", 2);
        ɵɵtemplate(15, TableSelectionExample_td_15_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵtemplate(16, TableSelectionExample_tr_16_Template, 1, 0, "tr", 8);
        ɵɵtemplate(17, TableSelectionExample_tr_17_Template, 1, 0, "tr", 9);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(16);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCell, MatCheckbox, MatCell, MatHeaderRow, MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableSelectionExample, [{
        type: Component,
        args: [{
                selector: 'table-selection-example',
                styleUrls: ['table-selection-example.css'],
                templateUrl: 'table-selection-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableSelectionExample.prototype.displayedColumns;
    /** @type {?} */
    TableSelectionExample.prototype.dataSource;
    /** @type {?} */
    TableSelectionExample.prototype.selection;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TableSortingExample_th_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 9);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function TableSortingExample_td_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r274 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r274.position, " ");
} }
function TableSortingExample_th_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 9);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function TableSortingExample_td_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r275 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r275.name, " ");
} }
function TableSortingExample_th_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 9);
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function TableSortingExample_td_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r276 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r276.weight, " ");
} }
function TableSortingExample_th_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 9);
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function TableSortingExample_td_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r277 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r277.symbol, " ");
} }
function TableSortingExample_tr_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 11);
} }
function TableSortingExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 12);
} }
/**
 * @record
 */
function PeriodicElement$7() { }
if (false) {
    /** @type {?} */
    PeriodicElement$7.prototype.name;
    /** @type {?} */
    PeriodicElement$7.prototype.position;
    /** @type {?} */
    PeriodicElement$7.prototype.weight;
    /** @type {?} */
    PeriodicElement$7.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$7 = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
/**
 * \@title Table with sorting
 */
class TableSortingExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$7);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource.sort = this.sort;
    }
}
TableSortingExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sorting-example',
                styleUrls: ['table-sorting-example.css'],
                templateUrl: 'table-sorting-example.html',
            },] },
];
TableSortingExample.propDecorators = {
    sort: [{ type: ViewChild, args: [MatSort, { static: true },] }]
};
/** @nocollapse */ TableSortingExample.ɵfac = function TableSortingExample_Factory(t) { return new (t || TableSortingExample)(); };
/** @nocollapse */ TableSortingExample.ɵcmp = ɵɵdefineComponent({ type: TableSortingExample, selectors: [["table-sorting-example"]], viewQuery: function TableSortingExample_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(MatSort, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sort = _t.first);
    } }, decls: 15, vars: 3, consts: [["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableSortingExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵelementContainerStart(1, 1);
        ɵɵtemplate(2, TableSortingExample_th_2_Template, 2, 0, "th", 2);
        ɵɵtemplate(3, TableSortingExample_td_3_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(4, 4);
        ɵɵtemplate(5, TableSortingExample_th_5_Template, 2, 0, "th", 2);
        ɵɵtemplate(6, TableSortingExample_td_6_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(7, 5);
        ɵɵtemplate(8, TableSortingExample_th_8_Template, 2, 0, "th", 2);
        ɵɵtemplate(9, TableSortingExample_td_9_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(10, 6);
        ɵɵtemplate(11, TableSortingExample_th_11_Template, 2, 0, "th", 2);
        ɵɵtemplate(12, TableSortingExample_td_12_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵtemplate(13, TableSortingExample_tr_13_Template, 1, 0, "tr", 7);
        ɵɵtemplate(14, TableSortingExample_tr_14_Template, 1, 0, "tr", 8);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(13);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCell, MatSortHeader, MatCell, MatHeaderRow, MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableSortingExample, [{
        type: Component,
        args: [{
                selector: 'table-sorting-example',
                styleUrls: ['table-sorting-example.css'],
                templateUrl: 'table-sorting-example.html',
            }]
    }], null, { sort: [{
            type: ViewChild,
            args: [MatSort, { static: true }]
        }] }); })();
if (false) {
    /** @type {?} */
    TableSortingExample.prototype.displayedColumns;
    /** @type {?} */
    TableSortingExample.prototype.dataSource;
    /** @type {?} */
    TableSortingExample.prototype.sort;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TableStickyColumnsExample_th_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 11);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function TableStickyColumnsExample_td_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r291 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r291.name, " ");
} }
function TableStickyColumnsExample_th_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 11);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function TableStickyColumnsExample_td_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r292 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r292.position, " ");
} }
function TableStickyColumnsExample_th_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 11);
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function TableStickyColumnsExample_td_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r293 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r293.weight, " ");
} }
function TableStickyColumnsExample_th_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 11);
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function TableStickyColumnsExample_td_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r294 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r294.symbol, " ");
} }
function TableStickyColumnsExample_th_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "th", 11);
} }
function TableStickyColumnsExample_td_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 12);
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "more_vert");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function TableStickyColumnsExample_tr_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 13);
} }
function TableStickyColumnsExample_tr_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 14);
} }
/**
 * \@title Table with sticky columns
 */
class TableStickyColumnsExample {
    constructor() {
        this.displayedColumns = ['name', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'star'];
        this.dataSource = ELEMENT_DATA$8;
    }
}
TableStickyColumnsExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sticky-columns-example',
                styleUrls: ['table-sticky-columns-example.css'],
                templateUrl: 'table-sticky-columns-example.html',
            },] },
];
/** @nocollapse */ TableStickyColumnsExample.ɵfac = function TableStickyColumnsExample_Factory(t) { return new (t || TableStickyColumnsExample)(); };
/** @nocollapse */ TableStickyColumnsExample.ɵcmp = ɵɵdefineComponent({ type: TableStickyColumnsExample, selectors: [["table-sticky-columns-example"]], decls: 19, vars: 3, consts: [[1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name", "sticky", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "position"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["matColumnDef", "star", "stickyEnd", ""], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableStickyColumnsExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "table", 1);
        ɵɵelementContainerStart(2, 2);
        ɵɵtemplate(3, TableStickyColumnsExample_th_3_Template, 2, 0, "th", 3);
        ɵɵtemplate(4, TableStickyColumnsExample_td_4_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(5, 5);
        ɵɵtemplate(6, TableStickyColumnsExample_th_6_Template, 2, 0, "th", 3);
        ɵɵtemplate(7, TableStickyColumnsExample_td_7_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(8, 6);
        ɵɵtemplate(9, TableStickyColumnsExample_th_9_Template, 2, 0, "th", 3);
        ɵɵtemplate(10, TableStickyColumnsExample_td_10_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(11, 7);
        ɵɵtemplate(12, TableStickyColumnsExample_th_12_Template, 2, 0, "th", 3);
        ɵɵtemplate(13, TableStickyColumnsExample_td_13_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(14, 8);
        ɵɵtemplate(15, TableStickyColumnsExample_th_15_Template, 1, 0, "th", 3);
        ɵɵtemplate(16, TableStickyColumnsExample_td_16_Template, 3, 0, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵtemplate(17, TableStickyColumnsExample_tr_17_Template, 1, 0, "tr", 9);
        ɵɵtemplate(18, TableStickyColumnsExample_tr_18_Template, 1, 0, "tr", 10);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(16);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCell, MatCell, MatIcon, MatHeaderRow, MatRow], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 550px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 800px;\n}\n\ntd.mat-column-star[_ngcontent-%COMP%] {\n  width: 20px;\n  padding-right: 8px;\n}\n\nth.mat-column-position[_ngcontent-%COMP%], td.mat-column-position[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n\n.mat-table-sticky[_ngcontent-%COMP%]:first-child {\n  border-right: 1px solid #e0e0e0;\n}\n\n.mat-table-sticky[_ngcontent-%COMP%]:last-child {\n  border-left: 1px solid #e0e0e0;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableStickyColumnsExample, [{
        type: Component,
        args: [{
                selector: 'table-sticky-columns-example',
                styleUrls: ['table-sticky-columns-example.css'],
                templateUrl: 'table-sticky-columns-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableStickyColumnsExample.prototype.displayedColumns;
    /** @type {?} */
    TableStickyColumnsExample.prototype.dataSource;
}
/**
 * @record
 */
function PeriodicElement$8() { }
if (false) {
    /** @type {?} */
    PeriodicElement$8.prototype.name;
    /** @type {?} */
    PeriodicElement$8.prototype.position;
    /** @type {?} */
    PeriodicElement$8.prototype.weight;
    /** @type {?} */
    PeriodicElement$8.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$8 = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TableStickyComplexFlexExample_mat_table_34_mat_header_cell_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell");
    ɵɵtext(1, " Position ");
    ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_cell_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r322 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r322.position, " ");
} }
function TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-footer-cell");
    ɵɵtext(1, " Position Footer ");
    ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_header_cell_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell");
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_cell_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r323 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r323.name, " ");
} }
function TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-footer-cell");
    ɵɵtext(1, " Name Footer ");
    ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_header_cell_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell");
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_cell_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r324 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r324.weight, " ");
} }
function TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-footer-cell");
    ɵɵtext(1, " Weight Footer ");
    ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_header_cell_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell");
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_cell_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r325 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r325.symbol, " ");
} }
function TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-footer-cell");
    ɵɵtext(1, " Symbol Footer ");
    ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_header_cell_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell");
    ɵɵtext(1, " Filler header cell ");
    ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_cell_19_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell");
    ɵɵtext(1, " Filler data cell ");
    ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_20_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-footer-cell");
    ɵɵtext(1, " Filler footer cell ");
    ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_header_row_21_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-header-row");
} }
function TableStickyComplexFlexExample_mat_table_34_mat_header_row_22_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-header-row");
} }
function TableStickyComplexFlexExample_mat_table_34_mat_row_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-row");
} }
function TableStickyComplexFlexExample_mat_table_34_mat_footer_row_24_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-footer-row");
} }
function TableStickyComplexFlexExample_mat_table_34_mat_footer_row_25_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-footer-row");
} }
function TableStickyComplexFlexExample_mat_table_34_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-table", 15);
    ɵɵelementContainerStart(1, 16);
    ɵɵtemplate(2, TableStickyComplexFlexExample_mat_table_34_mat_header_cell_2_Template, 2, 0, "mat-header-cell", 17);
    ɵɵtemplate(3, TableStickyComplexFlexExample_mat_table_34_mat_cell_3_Template, 2, 1, "mat-cell", 18);
    ɵɵtemplate(4, TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_4_Template, 2, 0, "mat-footer-cell", 19);
    ɵɵelementContainerEnd();
    ɵɵelementContainerStart(5, 20);
    ɵɵtemplate(6, TableStickyComplexFlexExample_mat_table_34_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 17);
    ɵɵtemplate(7, TableStickyComplexFlexExample_mat_table_34_mat_cell_7_Template, 2, 1, "mat-cell", 18);
    ɵɵtemplate(8, TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_8_Template, 2, 0, "mat-footer-cell", 19);
    ɵɵelementContainerEnd();
    ɵɵelementContainerStart(9, 21);
    ɵɵtemplate(10, TableStickyComplexFlexExample_mat_table_34_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 17);
    ɵɵtemplate(11, TableStickyComplexFlexExample_mat_table_34_mat_cell_11_Template, 2, 1, "mat-cell", 18);
    ɵɵtemplate(12, TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_12_Template, 2, 0, "mat-footer-cell", 19);
    ɵɵelementContainerEnd();
    ɵɵelementContainerStart(13, 22);
    ɵɵtemplate(14, TableStickyComplexFlexExample_mat_table_34_mat_header_cell_14_Template, 2, 0, "mat-header-cell", 17);
    ɵɵtemplate(15, TableStickyComplexFlexExample_mat_table_34_mat_cell_15_Template, 2, 1, "mat-cell", 18);
    ɵɵtemplate(16, TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_16_Template, 2, 0, "mat-footer-cell", 19);
    ɵɵelementContainerEnd();
    ɵɵelementContainerStart(17, 23);
    ɵɵtemplate(18, TableStickyComplexFlexExample_mat_table_34_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 17);
    ɵɵtemplate(19, TableStickyComplexFlexExample_mat_table_34_mat_cell_19_Template, 2, 0, "mat-cell", 18);
    ɵɵtemplate(20, TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_20_Template, 2, 0, "mat-footer-cell", 19);
    ɵɵelementContainerEnd();
    ɵɵtemplate(21, TableStickyComplexFlexExample_mat_table_34_mat_header_row_21_Template, 1, 0, "mat-header-row", 24);
    ɵɵtemplate(22, TableStickyComplexFlexExample_mat_table_34_mat_header_row_22_Template, 1, 0, "mat-header-row", 24);
    ɵɵtemplate(23, TableStickyComplexFlexExample_mat_table_34_mat_row_23_Template, 1, 0, "mat-row", 25);
    ɵɵtemplate(24, TableStickyComplexFlexExample_mat_table_34_mat_footer_row_24_Template, 1, 0, "mat-footer-row", 26);
    ɵɵtemplate(25, TableStickyComplexFlexExample_mat_table_34_mat_footer_row_25_Template, 1, 0, "mat-footer-row", 26);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r300 = ɵɵnextContext();
    const _r299 = ɵɵreference(24);
    const _r297 = ɵɵreference(8);
    const _r298 = ɵɵreference(16);
    ɵɵproperty("dataSource", ctx_r300.dataSource);
    ɵɵadvance(1);
    ɵɵproperty("sticky", ctx_r300.isSticky(_r299, "position"));
    ɵɵadvance(4);
    ɵɵproperty("sticky", ctx_r300.isSticky(_r299, "name"));
    ɵɵadvance(4);
    ɵɵproperty("stickyEnd", ctx_r300.isSticky(_r299, "weight"));
    ɵɵadvance(4);
    ɵɵproperty("stickyEnd", ctx_r300.isSticky(_r299, "symbol"));
    ɵɵadvance(8);
    ɵɵproperty("matHeaderRowDef", ctx_r300.displayedColumns)("matHeaderRowDefSticky", ctx_r300.isSticky(_r297, "header-1"));
    ɵɵadvance(1);
    ɵɵproperty("matHeaderRowDef", ctx_r300.displayedColumns)("matHeaderRowDefSticky", ctx_r300.isSticky(_r297, "header-2"));
    ɵɵadvance(1);
    ɵɵproperty("matRowDefColumns", ctx_r300.displayedColumns);
    ɵɵadvance(1);
    ɵɵproperty("matFooterRowDef", ctx_r300.displayedColumns)("matFooterRowDefSticky", ctx_r300.isSticky(_r298, "footer-1"));
    ɵɵadvance(1);
    ɵɵproperty("matFooterRowDef", ctx_r300.displayedColumns)("matFooterRowDefSticky", ctx_r300.isSticky(_r298, "footer-2"));
} }
const _c0$4 = function () { return ["header-1"]; };
const _c1$1 = function () { return ["footer-1"]; };
const _c2 = function () { return ["position", "symbol"]; };
/**
 * \@title Flex-layout tables with toggle-able sticky headers, footers, and columns
 */
class TableStickyComplexFlexExample {
    constructor() {
        this.displayedColumns = [];
        this.dataSource = ELEMENT_DATA$9;
        this.tables = [0];
        this.displayedColumns.length = 24;
        this.displayedColumns.fill('filler');
        // The first two columns should be position and name; the last two columns: weight, symbol
        this.displayedColumns[0] = 'position';
        this.displayedColumns[1] = 'name';
        this.displayedColumns[22] = 'weight';
        this.displayedColumns[23] = 'symbol';
    }
    /**
     * Whether the button toggle group contains the id as an active value.
     * @param {?} buttonToggleGroup
     * @param {?} id
     * @return {?}
     */
    isSticky(buttonToggleGroup, id) {
        return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    }
}
TableStickyComplexFlexExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sticky-complex-flex-example',
                styleUrls: ['table-sticky-complex-flex-example.css'],
                templateUrl: 'table-sticky-complex-flex-example.html',
            },] },
];
/** @nocollapse */
TableStickyComplexFlexExample.ctorParameters = () => [];
/** @nocollapse */ TableStickyComplexFlexExample.ɵfac = function TableStickyComplexFlexExample_Factory(t) { return new (t || TableStickyComplexFlexExample)(); };
/** @nocollapse */ TableStickyComplexFlexExample.ɵcmp = ɵɵdefineComponent({ type: TableStickyComplexFlexExample, selectors: [["table-sticky-complex-flex-example"]], decls: 35, vars: 7, consts: [["mat-raised-button", "", 3, "click"], ["multiple", "", 1, "example-sticky-toggle-group", 3, "value"], ["stickyHeaders", "matButtonToggleGroup"], ["value", "header-1"], ["value", "header-2"], ["stickyFooters", "matButtonToggleGroup"], ["value", "footer-1"], ["value", "footer-2"], ["stickyColumns", "matButtonToggleGroup"], ["value", "position"], ["value", "name"], ["value", "weight"], ["value", "symbol"], [1, "example-container", "mat-elevation-z8"], [3, "dataSource", 4, "ngFor", "ngForOf"], [3, "dataSource"], ["matColumnDef", "position", 3, "sticky"], [4, "matHeaderCellDef"], [4, "matCellDef"], [4, "matFooterCellDef"], ["matColumnDef", "name", 3, "sticky"], ["matColumnDef", "weight", 3, "stickyEnd"], ["matColumnDef", "symbol", 3, "stickyEnd"], ["matColumnDef", "filler"], [4, "matHeaderRowDef", "matHeaderRowDefSticky"], [4, "matRowDef", "matRowDefColumns"], [4, "matFooterRowDef", "matFooterRowDefSticky"]], template: function TableStickyComplexFlexExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "button", 0);
        ɵɵlistener("click", function TableStickyComplexFlexExample_Template_button_click_1_listener($event) { return ctx.tables.push(ctx.tables.length); });
        ɵɵtext(2, "Add table");
        ɵɵelementEnd();
        ɵɵelementStart(3, "button", 0);
        ɵɵlistener("click", function TableStickyComplexFlexExample_Template_button_click_3_listener($event) { return ctx.tables.pop(); });
        ɵɵtext(4, "Remove table");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "div");
        ɵɵtext(6, " Sticky Headers: ");
        ɵɵelementStart(7, "mat-button-toggle-group", 1, 2);
        ɵɵelementStart(9, "mat-button-toggle", 3);
        ɵɵtext(10, " Row 1 ");
        ɵɵelementEnd();
        ɵɵelementStart(11, "mat-button-toggle", 4);
        ɵɵtext(12, " Row 2 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(13, "div");
        ɵɵtext(14, " Sticky Footers: ");
        ɵɵelementStart(15, "mat-button-toggle-group", 1, 5);
        ɵɵelementStart(17, "mat-button-toggle", 6);
        ɵɵtext(18, " Row 1 ");
        ɵɵelementEnd();
        ɵɵelementStart(19, "mat-button-toggle", 7);
        ɵɵtext(20, " Row 2 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(21, "div");
        ɵɵtext(22, " Sticky Columns: ");
        ɵɵelementStart(23, "mat-button-toggle-group", 1, 8);
        ɵɵelementStart(25, "mat-button-toggle", 9);
        ɵɵtext(26, " Position ");
        ɵɵelementEnd();
        ɵɵelementStart(27, "mat-button-toggle", 10);
        ɵɵtext(28, " Name ");
        ɵɵelementEnd();
        ɵɵelementStart(29, "mat-button-toggle", 11);
        ɵɵtext(30, " Weight ");
        ɵɵelementEnd();
        ɵɵelementStart(31, "mat-button-toggle", 12);
        ɵɵtext(32, " Symbol ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(33, "div", 13);
        ɵɵtemplate(34, TableStickyComplexFlexExample_mat_table_34_Template, 26, 14, "mat-table", 14);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(7);
        ɵɵproperty("value", ɵɵpureFunction0(4, _c0$4));
        ɵɵadvance(8);
        ɵɵproperty("value", ɵɵpureFunction0(5, _c1$1));
        ɵɵadvance(8);
        ɵɵproperty("value", ɵɵpureFunction0(6, _c2));
        ɵɵadvance(11);
        ɵɵproperty("ngForOf", ctx.tables);
    } }, directives: [MatButton, MatButtonToggleGroup, MatButtonToggle, NgForOf, MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatFooterCellDef, MatHeaderRowDef, MatRowDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-table-sticky[_ngcontent-%COMP%] {\n  background: #59abfd;\n  opacity: 1;\n}\n\n.example-sticky-toggle-group[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.mat-column-filler[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.mat-header-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%] {\n  min-width: 80px;\n  box-sizing: border-box;\n}\n\n.mat-header-row[_ngcontent-%COMP%], .mat-footer-row[_ngcontent-%COMP%], .mat-row[_ngcontent-%COMP%] {\n  min-width: 1920px; \n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableStickyComplexFlexExample, [{
        type: Component,
        args: [{
                selector: 'table-sticky-complex-flex-example',
                styleUrls: ['table-sticky-complex-flex-example.css'],
                templateUrl: 'table-sticky-complex-flex-example.html',
            }]
    }], function () { return []; }, null); })();
if (false) {
    /** @type {?} */
    TableStickyComplexFlexExample.prototype.displayedColumns;
    /** @type {?} */
    TableStickyComplexFlexExample.prototype.dataSource;
    /** @type {?} */
    TableStickyComplexFlexExample.prototype.tables;
}
/**
 * @record
 */
function PeriodicElement$9() { }
if (false) {
    /** @type {?} */
    PeriodicElement$9.prototype.name;
    /** @type {?} */
    PeriodicElement$9.prototype.position;
    /** @type {?} */
    PeriodicElement$9.prototype.weight;
    /** @type {?} */
    PeriodicElement$9.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$9 = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TableStickyComplexExample_table_34_th_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 27);
    ɵɵtext(1, " Position ");
    ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_td_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 28);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r353 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r353.position, " ");
} }
function TableStickyComplexExample_table_34_td_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 29);
    ɵɵtext(1, " Position Footer ");
    ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_th_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 27);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_td_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 28);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r354 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r354.name, " ");
} }
function TableStickyComplexExample_table_34_td_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 29);
    ɵɵtext(1, " Name Footer ");
    ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_th_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 27);
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_td_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 28);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r355 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r355.weight, " ");
} }
function TableStickyComplexExample_table_34_td_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 29);
    ɵɵtext(1, " Weight Footer ");
    ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_th_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 27);
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_td_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 28);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r356 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r356.symbol, " ");
} }
function TableStickyComplexExample_table_34_td_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 29);
    ɵɵtext(1, " Symbol Footer ");
    ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_th_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 27);
    ɵɵtext(1, " Filler header cell ");
    ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_td_19_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 28);
    ɵɵtext(1, " Filler data cell ");
    ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_td_20_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 29);
    ɵɵtext(1, " Filler footer cell ");
    ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_tr_21_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 30);
} }
function TableStickyComplexExample_table_34_tr_22_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 30);
} }
function TableStickyComplexExample_table_34_tr_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 31);
} }
function TableStickyComplexExample_table_34_tr_24_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 32);
} }
function TableStickyComplexExample_table_34_tr_25_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 32);
} }
function TableStickyComplexExample_table_34_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "table", 15);
    ɵɵelementContainerStart(1, 16);
    ɵɵtemplate(2, TableStickyComplexExample_table_34_th_2_Template, 2, 0, "th", 17);
    ɵɵtemplate(3, TableStickyComplexExample_table_34_td_3_Template, 2, 1, "td", 18);
    ɵɵtemplate(4, TableStickyComplexExample_table_34_td_4_Template, 2, 0, "td", 19);
    ɵɵelementContainerEnd();
    ɵɵelementContainerStart(5, 20);
    ɵɵtemplate(6, TableStickyComplexExample_table_34_th_6_Template, 2, 0, "th", 17);
    ɵɵtemplate(7, TableStickyComplexExample_table_34_td_7_Template, 2, 1, "td", 18);
    ɵɵtemplate(8, TableStickyComplexExample_table_34_td_8_Template, 2, 0, "td", 19);
    ɵɵelementContainerEnd();
    ɵɵelementContainerStart(9, 21);
    ɵɵtemplate(10, TableStickyComplexExample_table_34_th_10_Template, 2, 0, "th", 17);
    ɵɵtemplate(11, TableStickyComplexExample_table_34_td_11_Template, 2, 1, "td", 18);
    ɵɵtemplate(12, TableStickyComplexExample_table_34_td_12_Template, 2, 0, "td", 19);
    ɵɵelementContainerEnd();
    ɵɵelementContainerStart(13, 22);
    ɵɵtemplate(14, TableStickyComplexExample_table_34_th_14_Template, 2, 0, "th", 17);
    ɵɵtemplate(15, TableStickyComplexExample_table_34_td_15_Template, 2, 1, "td", 18);
    ɵɵtemplate(16, TableStickyComplexExample_table_34_td_16_Template, 2, 0, "td", 19);
    ɵɵelementContainerEnd();
    ɵɵelementContainerStart(17, 23);
    ɵɵtemplate(18, TableStickyComplexExample_table_34_th_18_Template, 2, 0, "th", 17);
    ɵɵtemplate(19, TableStickyComplexExample_table_34_td_19_Template, 2, 0, "td", 18);
    ɵɵtemplate(20, TableStickyComplexExample_table_34_td_20_Template, 2, 0, "td", 19);
    ɵɵelementContainerEnd();
    ɵɵtemplate(21, TableStickyComplexExample_table_34_tr_21_Template, 1, 0, "tr", 24);
    ɵɵtemplate(22, TableStickyComplexExample_table_34_tr_22_Template, 1, 0, "tr", 24);
    ɵɵtemplate(23, TableStickyComplexExample_table_34_tr_23_Template, 1, 0, "tr", 25);
    ɵɵtemplate(24, TableStickyComplexExample_table_34_tr_24_Template, 1, 0, "tr", 26);
    ɵɵtemplate(25, TableStickyComplexExample_table_34_tr_25_Template, 1, 0, "tr", 26);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r331 = ɵɵnextContext();
    const _r330 = ɵɵreference(24);
    const _r328 = ɵɵreference(8);
    const _r329 = ɵɵreference(16);
    ɵɵproperty("dataSource", ctx_r331.dataSource);
    ɵɵadvance(1);
    ɵɵproperty("sticky", ctx_r331.isSticky(_r330, "position"));
    ɵɵadvance(4);
    ɵɵproperty("sticky", ctx_r331.isSticky(_r330, "name"));
    ɵɵadvance(4);
    ɵɵproperty("stickyEnd", ctx_r331.isSticky(_r330, "weight"));
    ɵɵadvance(4);
    ɵɵproperty("stickyEnd", ctx_r331.isSticky(_r330, "symbol"));
    ɵɵadvance(8);
    ɵɵproperty("matHeaderRowDef", ctx_r331.displayedColumns)("matHeaderRowDefSticky", ctx_r331.isSticky(_r328, "header-1"));
    ɵɵadvance(1);
    ɵɵproperty("matHeaderRowDef", ctx_r331.displayedColumns)("matHeaderRowDefSticky", ctx_r331.isSticky(_r328, "header-2"));
    ɵɵadvance(1);
    ɵɵproperty("matRowDefColumns", ctx_r331.displayedColumns);
    ɵɵadvance(1);
    ɵɵproperty("matFooterRowDef", ctx_r331.displayedColumns)("matFooterRowDefSticky", ctx_r331.isSticky(_r329, "footer-1"));
    ɵɵadvance(1);
    ɵɵproperty("matFooterRowDef", ctx_r331.displayedColumns)("matFooterRowDefSticky", ctx_r331.isSticky(_r329, "footer-2"));
} }
const _c0$5 = function () { return ["header-1"]; };
const _c1$2 = function () { return ["footer-1"]; };
const _c2$1 = function () { return ["position", "symbol"]; };
/**
 * \@title Tables with toggle-able sticky headers, footers, and columns
 */
class TableStickyComplexExample {
    constructor() {
        this.displayedColumns = [];
        this.dataSource = ELEMENT_DATA$a;
        this.tables = [0];
        this.displayedColumns.length = 24;
        this.displayedColumns.fill('filler');
        // The first two columns should be position and name; the last two columns: weight, symbol
        this.displayedColumns[0] = 'position';
        this.displayedColumns[1] = 'name';
        this.displayedColumns[22] = 'weight';
        this.displayedColumns[23] = 'symbol';
    }
    /**
     * Whether the button toggle group contains the id as an active value.
     * @param {?} buttonToggleGroup
     * @param {?} id
     * @return {?}
     */
    isSticky(buttonToggleGroup, id) {
        return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    }
}
TableStickyComplexExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sticky-complex-example',
                styleUrls: ['table-sticky-complex-example.css'],
                templateUrl: 'table-sticky-complex-example.html',
            },] },
];
/** @nocollapse */
TableStickyComplexExample.ctorParameters = () => [];
/** @nocollapse */ TableStickyComplexExample.ɵfac = function TableStickyComplexExample_Factory(t) { return new (t || TableStickyComplexExample)(); };
/** @nocollapse */ TableStickyComplexExample.ɵcmp = ɵɵdefineComponent({ type: TableStickyComplexExample, selectors: [["table-sticky-complex-example"]], decls: 35, vars: 7, consts: [["mat-raised-button", "", 3, "click"], ["multiple", "", 1, "example-sticky-toggle-group", 3, "value"], ["stickyHeaders", "matButtonToggleGroup"], ["value", "header-1"], ["value", "header-2"], ["stickyFooters", "matButtonToggleGroup"], ["value", "footer-1"], ["value", "footer-2"], ["stickyColumns", "matButtonToggleGroup"], ["value", "position"], ["value", "name"], ["value", "weight"], ["value", "symbol"], [1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource", 4, "ngFor", "ngForOf"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "position", 3, "sticky"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "name", 3, "sticky"], ["matColumnDef", "weight", 3, "stickyEnd"], ["matColumnDef", "symbol", 3, "stickyEnd"], ["matColumnDef", "filler"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function TableStickyComplexExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "button", 0);
        ɵɵlistener("click", function TableStickyComplexExample_Template_button_click_1_listener($event) { return ctx.tables.push(ctx.tables.length); });
        ɵɵtext(2, "Add table");
        ɵɵelementEnd();
        ɵɵelementStart(3, "button", 0);
        ɵɵlistener("click", function TableStickyComplexExample_Template_button_click_3_listener($event) { return ctx.tables.pop(); });
        ɵɵtext(4, "Remove table");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "div");
        ɵɵtext(6, " Sticky Headers: ");
        ɵɵelementStart(7, "mat-button-toggle-group", 1, 2);
        ɵɵelementStart(9, "mat-button-toggle", 3);
        ɵɵtext(10, " Row 1 ");
        ɵɵelementEnd();
        ɵɵelementStart(11, "mat-button-toggle", 4);
        ɵɵtext(12, " Row 2 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(13, "div");
        ɵɵtext(14, " Sticky Footers: ");
        ɵɵelementStart(15, "mat-button-toggle-group", 1, 5);
        ɵɵelementStart(17, "mat-button-toggle", 6);
        ɵɵtext(18, " Row 1 ");
        ɵɵelementEnd();
        ɵɵelementStart(19, "mat-button-toggle", 7);
        ɵɵtext(20, " Row 2 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(21, "div");
        ɵɵtext(22, " Sticky Columns: ");
        ɵɵelementStart(23, "mat-button-toggle-group", 1, 8);
        ɵɵelementStart(25, "mat-button-toggle", 9);
        ɵɵtext(26, " Position ");
        ɵɵelementEnd();
        ɵɵelementStart(27, "mat-button-toggle", 10);
        ɵɵtext(28, " Name ");
        ɵɵelementEnd();
        ɵɵelementStart(29, "mat-button-toggle", 11);
        ɵɵtext(30, " Weight ");
        ɵɵelementEnd();
        ɵɵelementStart(31, "mat-button-toggle", 12);
        ɵɵtext(32, " Symbol ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(33, "div", 13);
        ɵɵtemplate(34, TableStickyComplexExample_table_34_Template, 26, 14, "table", 14);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(7);
        ɵɵproperty("value", ɵɵpureFunction0(4, _c0$5));
        ɵɵadvance(8);
        ɵɵproperty("value", ɵɵpureFunction0(5, _c1$2));
        ɵɵadvance(8);
        ɵɵproperty("value", ɵɵpureFunction0(6, _c2$1));
        ɵɵadvance(11);
        ɵɵproperty("ngForOf", ctx.tables);
    } }, directives: [MatButton, MatButtonToggleGroup, MatButtonToggle, NgForOf, MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatFooterCellDef, MatHeaderRowDef, MatRowDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-table-sticky[_ngcontent-%COMP%] {\n  background: #59abfd;\n  opacity: 1;\n}\n\n.example-sticky-toggle-group[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.mat-column-filler[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.mat-header-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%] {\n  min-width: 80px;\n  box-sizing: border-box;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableStickyComplexExample, [{
        type: Component,
        args: [{
                selector: 'table-sticky-complex-example',
                styleUrls: ['table-sticky-complex-example.css'],
                templateUrl: 'table-sticky-complex-example.html',
            }]
    }], function () { return []; }, null); })();
if (false) {
    /** @type {?} */
    TableStickyComplexExample.prototype.displayedColumns;
    /** @type {?} */
    TableStickyComplexExample.prototype.dataSource;
    /** @type {?} */
    TableStickyComplexExample.prototype.tables;
}
/**
 * @record
 */
function PeriodicElement$a() { }
if (false) {
    /** @type {?} */
    PeriodicElement$a.prototype.name;
    /** @type {?} */
    PeriodicElement$a.prototype.position;
    /** @type {?} */
    PeriodicElement$a.prototype.weight;
    /** @type {?} */
    PeriodicElement$a.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$a = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TableStickyFooterExample_th_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " Item ");
    ɵɵelementEnd();
} }
function TableStickyFooterExample_td_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r368 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", transaction_r368.item, " ");
} }
function TableStickyFooterExample_td_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 12);
    ɵɵtext(1, " Total ");
    ɵɵelementEnd();
} }
function TableStickyFooterExample_th_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " Cost ");
    ɵɵelementEnd();
} }
function TableStickyFooterExample_td_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵtext(1);
    ɵɵpipe(2, "currency");
    ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r369 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, transaction_r369.cost), " ");
} }
function TableStickyFooterExample_td_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 12);
    ɵɵtext(1);
    ɵɵpipe(2, "currency");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r364 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ctx_r364.getTotalCost()), " ");
} }
function TableStickyFooterExample_tr_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 13);
} }
function TableStickyFooterExample_tr_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 14);
} }
function TableStickyFooterExample_tr_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 15);
} }
/**
 * @record
 */
function Transaction$2() { }
if (false) {
    /** @type {?} */
    Transaction$2.prototype.item;
    /** @type {?} */
    Transaction$2.prototype.cost;
}
/**
 * \@title Table with a sticky footer
 */
class TableStickyFooterExample {
    constructor() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /**
     * Gets the total cost of all transactions.
     * @return {?}
     */
    getTotalCost() {
        return this.transactions.map((/**
         * @param {?} t
         * @return {?}
         */
        t => t.cost)).reduce((/**
         * @param {?} acc
         * @param {?} value
         * @return {?}
         */
        (acc, value) => acc + value), 0);
    }
}
TableStickyFooterExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sticky-footer-example',
                styleUrls: ['table-sticky-footer-example.css'],
                templateUrl: 'table-sticky-footer-example.html',
            },] },
];
/** @nocollapse */ TableStickyFooterExample.ɵfac = function TableStickyFooterExample_Factory(t) { return new (t || TableStickyFooterExample)(); };
/** @nocollapse */ TableStickyFooterExample.ɵcmp = ɵɵdefineComponent({ type: TableStickyFooterExample, selectors: [["table-sticky-footer-example"]], decls: 13, vars: 5, consts: [[1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "cost"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function TableStickyFooterExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "table", 1);
        ɵɵelementContainerStart(2, 2);
        ɵɵtemplate(3, TableStickyFooterExample_th_3_Template, 2, 0, "th", 3);
        ɵɵtemplate(4, TableStickyFooterExample_td_4_Template, 2, 1, "td", 4);
        ɵɵtemplate(5, TableStickyFooterExample_td_5_Template, 2, 0, "td", 5);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(6, 6);
        ɵɵtemplate(7, TableStickyFooterExample_th_7_Template, 2, 0, "th", 3);
        ɵɵtemplate(8, TableStickyFooterExample_td_8_Template, 3, 3, "td", 4);
        ɵɵtemplate(9, TableStickyFooterExample_td_9_Template, 3, 3, "td", 5);
        ɵɵelementContainerEnd();
        ɵɵtemplate(10, TableStickyFooterExample_tr_10_Template, 1, 0, "tr", 7);
        ɵɵtemplate(11, TableStickyFooterExample_tr_11_Template, 1, 0, "tr", 8);
        ɵɵtemplate(12, TableStickyFooterExample_tr_12_Template, 1, 0, "tr", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("dataSource", ctx.transactions);
        ɵɵadvance(9);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matFooterRowDef", ctx.displayedColumns)("matFooterRowDefSticky", true);
    } }, directives: [MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatFooterCellDef, MatHeaderRowDef, MatRowDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow], pipes: [CurrencyPipe], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 270px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.mat-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.mat-table-sticky[_ngcontent-%COMP%] {\n  border-top: 1px solid #e0e0e0;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableStickyFooterExample, [{
        type: Component,
        args: [{
                selector: 'table-sticky-footer-example',
                styleUrls: ['table-sticky-footer-example.css'],
                templateUrl: 'table-sticky-footer-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableStickyFooterExample.prototype.displayedColumns;
    /** @type {?} */
    TableStickyFooterExample.prototype.transactions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TableStickyHeaderExample_th_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function TableStickyHeaderExample_td_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r381 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r381.position, " ");
} }
function TableStickyHeaderExample_th_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function TableStickyHeaderExample_td_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r382 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r382.name, " ");
} }
function TableStickyHeaderExample_th_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function TableStickyHeaderExample_td_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r383 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r383.weight, " ");
} }
function TableStickyHeaderExample_th_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function TableStickyHeaderExample_td_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r384 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r384.symbol, " ");
} }
function TableStickyHeaderExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 12);
} }
function TableStickyHeaderExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 13);
} }
/**
 * \@title Table with sticky header
 */
class TableStickyHeaderExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$b;
    }
}
TableStickyHeaderExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sticky-header-example',
                styleUrls: ['table-sticky-header-example.css'],
                templateUrl: 'table-sticky-header-example.html',
            },] },
];
/** @nocollapse */ TableStickyHeaderExample.ɵfac = function TableStickyHeaderExample_Factory(t) { return new (t || TableStickyHeaderExample)(); };
/** @nocollapse */ TableStickyHeaderExample.ɵcmp = ɵɵdefineComponent({ type: TableStickyHeaderExample, selectors: [["table-sticky-header-example"]], decls: 16, vars: 4, consts: [[1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableStickyHeaderExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "table", 1);
        ɵɵelementContainerStart(2, 2);
        ɵɵtemplate(3, TableStickyHeaderExample_th_3_Template, 2, 0, "th", 3);
        ɵɵtemplate(4, TableStickyHeaderExample_td_4_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(5, 5);
        ɵɵtemplate(6, TableStickyHeaderExample_th_6_Template, 2, 0, "th", 3);
        ɵɵtemplate(7, TableStickyHeaderExample_td_7_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(8, 6);
        ɵɵtemplate(9, TableStickyHeaderExample_th_9_Template, 2, 0, "th", 3);
        ɵɵtemplate(10, TableStickyHeaderExample_td_10_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(11, 7);
        ɵɵtemplate(12, TableStickyHeaderExample_th_12_Template, 2, 0, "th", 3);
        ɵɵtemplate(13, TableStickyHeaderExample_td_13_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵtemplate(14, TableStickyHeaderExample_tr_14_Template, 1, 0, "tr", 8);
        ɵɵtemplate(15, TableStickyHeaderExample_tr_15_Template, 1, 0, "tr", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(13);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableStickyHeaderExample, [{
        type: Component,
        args: [{
                selector: 'table-sticky-header-example',
                styleUrls: ['table-sticky-header-example.css'],
                templateUrl: 'table-sticky-header-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableStickyHeaderExample.prototype.displayedColumns;
    /** @type {?} */
    TableStickyHeaderExample.prototype.dataSource;
}
/**
 * @record
 */
function PeriodicElement$b() { }
if (false) {
    /** @type {?} */
    PeriodicElement$b.prototype.name;
    /** @type {?} */
    PeriodicElement$b.prototype.position;
    /** @type {?} */
    PeriodicElement$b.prototype.weight;
    /** @type {?} */
    PeriodicElement$b.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$b = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TableTextColumnAdvancedExample_tr_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 7);
} }
function TableTextColumnAdvancedExample_tr_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 8);
} }
/**
 * @record
 */
function PeriodicElement$c() { }
if (false) {
    /** @type {?} */
    PeriodicElement$c.prototype.name;
    /** @type {?} */
    PeriodicElement$c.prototype.position;
    /** @type {?} */
    PeriodicElement$c.prototype.weight;
    /** @type {?} */
    PeriodicElement$c.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$c = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
/**
 * \@title Use of 'mat-text-column' with various configurations of the interface.
 */
class TableTextColumnAdvancedExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$c);
        this.decimalPipe = new DecimalPipe('en-US');
        /**
         * Data accessor function that transforms the weight value to have at most 2 decimal digits.
         */
        this.getWeight = (/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            /** @type {?} */
            const result = this.decimalPipe.transform(data.weight, '1.0-2');
            return result === null ? '' : result;
        });
    }
}
TableTextColumnAdvancedExample.decorators = [
    { type: Component, args: [{
                selector: 'table-text-column-advanced-example',
                styleUrls: ['table-text-column-advanced-example.css'],
                templateUrl: 'table-text-column-advanced-example.html',
            },] },
];
/** @nocollapse */ TableTextColumnAdvancedExample.ɵfac = function TableTextColumnAdvancedExample_Factory(t) { return new (t || TableTextColumnAdvancedExample)(); };
/** @nocollapse */ TableTextColumnAdvancedExample.ɵcmp = ɵɵdefineComponent({ type: TableTextColumnAdvancedExample, selectors: [["table-text-column-advanced-example"]], decls: 7, vars: 5, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["name", "position", 3, "headerText"], ["name", "name", "headerText", "Element"], ["name", "weight", 3, "dataAccessor"], ["name", "symbol", "justify", "end"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-row", ""], ["mat-row", ""]], template: function TableTextColumnAdvancedExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵelement(1, "mat-text-column", 1);
        ɵɵelement(2, "mat-text-column", 2);
        ɵɵelement(3, "mat-text-column", 3);
        ɵɵelement(4, "mat-text-column", 4);
        ɵɵtemplate(5, TableTextColumnAdvancedExample_tr_5_Template, 1, 0, "tr", 5);
        ɵɵtemplate(6, TableTextColumnAdvancedExample_tr_6_Template, 1, 0, "tr", 6);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(1);
        ɵɵproperty("headerText", ctx.headerText);
        ɵɵadvance(2);
        ɵɵproperty("dataAccessor", ctx.getWeight);
        ɵɵadvance(2);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [MatTable, MatTextColumn, MatHeaderRowDef, MatRowDef, MatHeaderRow, MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableTextColumnAdvancedExample, [{
        type: Component,
        args: [{
                selector: 'table-text-column-advanced-example',
                styleUrls: ['table-text-column-advanced-example.css'],
                templateUrl: 'table-text-column-advanced-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableTextColumnAdvancedExample.prototype.displayedColumns;
    /** @type {?} */
    TableTextColumnAdvancedExample.prototype.dataSource;
    /** @type {?} */
    TableTextColumnAdvancedExample.prototype.headerText;
    /** @type {?} */
    TableTextColumnAdvancedExample.prototype.decimalPipe;
    /**
     * Data accessor function that transforms the weight value to have at most 2 decimal digits.
     * @type {?}
     */
    TableTextColumnAdvancedExample.prototype.getWeight;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TableTextColumnExample_tr_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 7);
} }
function TableTextColumnExample_tr_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 8);
} }
/**
 * @record
 */
function PeriodicElement$d() { }
if (false) {
    /** @type {?} */
    PeriodicElement$d.prototype.name;
    /** @type {?} */
    PeriodicElement$d.prototype.position;
    /** @type {?} */
    PeriodicElement$d.prototype.weight;
    /** @type {?} */
    PeriodicElement$d.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$d = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
/**
 * \@title Use of `mat-text-column` which can be used for simple columns that only need to display
 * a text value for the header and cells.
 */
class TableTextColumnExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$d;
    }
}
TableTextColumnExample.decorators = [
    { type: Component, args: [{
                selector: 'table-text-column-example',
                styleUrls: ['table-text-column-example.css'],
                templateUrl: 'table-text-column-example.html',
            },] },
];
/** @nocollapse */ TableTextColumnExample.ɵfac = function TableTextColumnExample_Factory(t) { return new (t || TableTextColumnExample)(); };
/** @nocollapse */ TableTextColumnExample.ɵcmp = ɵɵdefineComponent({ type: TableTextColumnExample, selectors: [["table-text-column-example"]], decls: 7, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["name", "position"], ["name", "name"], ["name", "weight"], ["name", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-row", ""], ["mat-row", ""]], template: function TableTextColumnExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵelement(1, "mat-text-column", 1);
        ɵɵelement(2, "mat-text-column", 2);
        ɵɵelement(3, "mat-text-column", 3);
        ɵɵelement(4, "mat-text-column", 4);
        ɵɵtemplate(5, TableTextColumnExample_tr_5_Template, 1, 0, "tr", 5);
        ɵɵtemplate(6, TableTextColumnExample_tr_6_Template, 1, 0, "tr", 6);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(5);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [MatTable, MatTextColumn, MatHeaderRowDef, MatRowDef, MatHeaderRow, MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableTextColumnExample, [{
        type: Component,
        args: [{
                selector: 'table-text-column-example',
                styleUrls: ['table-text-column-example.css'],
                templateUrl: 'table-text-column-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableTextColumnExample.prototype.displayedColumns;
    /** @type {?} */
    TableTextColumnExample.prototype.dataSource;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const _c0$6 = ["sort"];
function TableWrappedExample_th_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 7);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function TableWrappedExample_td_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r397 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r397.name, " ");
} }
function TableWrappedExample_tr_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 9);
} }
function TableWrappedExample_tr_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 10);
} }
function WrapperTable_th_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 7);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function WrapperTable_td_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r405 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r405.position, " ");
} }
function WrapperTable_th_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 7);
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function WrapperTable_td_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r406 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r406.weight, " ");
} }
function WrapperTable_th_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 9);
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function WrapperTable_td_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r407 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r407.symbol, " ");
} }
const _c1$3 = ["*"];
/**
 * @record
 */
function PeriodicElement$e() { }
if (false) {
    /** @type {?} */
    PeriodicElement$e.prototype.name;
    /** @type {?} */
    PeriodicElement$e.prototype.position;
    /** @type {?} */
    PeriodicElement$e.prototype.weight;
    /** @type {?} */
    PeriodicElement$e.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA$e = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
/**
 * \@title Table example that shows how to wrap a table component for definition and behavior reuse.
 */
class TableWrappedExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$e);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource.sort = this.sort;
    }
}
TableWrappedExample.decorators = [
    { type: Component, args: [{
                selector: 'table-wrapped-example',
                styleUrls: ['table-wrapped-example.css'],
                templateUrl: 'table-wrapped-example.html',
            },] },
];
TableWrappedExample.propDecorators = {
    sort: [{ type: ViewChild, args: ['sort', { static: true },] }]
};
/** @nocollapse */ TableWrappedExample.ɵfac = function TableWrappedExample_Factory(t) { return new (t || TableWrappedExample)(); };
/** @nocollapse */ TableWrappedExample.ɵcmp = ɵɵdefineComponent({ type: TableWrappedExample, selectors: [["table-wrapped-example"]], viewQuery: function TableWrappedExample_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$6, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sort = _t.first);
    } }, decls: 7, vars: 4, consts: [["matSort", "", 3, "dataSource", "columns"], ["sort", "matSort"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableWrappedExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "wrapper-table", 0, 1);
        ɵɵelementContainerStart(2, 2);
        ɵɵtemplate(3, TableWrappedExample_th_3_Template, 2, 0, "th", 3);
        ɵɵtemplate(4, TableWrappedExample_td_4_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵtemplate(5, TableWrappedExample_tr_5_Template, 1, 0, "tr", 5);
        ɵɵtemplate(6, TableWrappedExample_tr_6_Template, 1, 0, "tr", 6);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource)("columns", ctx.displayedColumns);
        ɵɵadvance(5);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: function () { return [WrapperTable, MatSort, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow]; }, styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableWrappedExample, [{
        type: Component,
        args: [{
                selector: 'table-wrapped-example',
                styleUrls: ['table-wrapped-example.css'],
                templateUrl: 'table-wrapped-example.html',
            }]
    }], null, { sort: [{
            type: ViewChild,
            args: ['sort', { static: true }]
        }] }); })();
if (false) {
    /** @type {?} */
    TableWrappedExample.prototype.displayedColumns;
    /** @type {?} */
    TableWrappedExample.prototype.dataSource;
    /** @type {?} */
    TableWrappedExample.prototype.sort;
}
/**
 * Table component that accepts column and row definitions in its content to be registered to the
 * table.
 * @template T
 */
class WrapperTable {
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.columnDefs.forEach((/**
         * @param {?} columnDef
         * @return {?}
         */
        columnDef => this.table.addColumnDef(columnDef)));
        this.rowDefs.forEach((/**
         * @param {?} rowDef
         * @return {?}
         */
        rowDef => this.table.addRowDef(rowDef)));
        this.headerRowDefs.forEach((/**
         * @param {?} headerRowDef
         * @return {?}
         */
        headerRowDef => this.table.addHeaderRowDef(headerRowDef)));
    }
}
WrapperTable.decorators = [
    { type: Component, args: [{
                selector: 'wrapper-table',
                templateUrl: 'wrapper-table.html',
                styles: [`
    table {
      width: 100%;
    }
  `]
            },] },
];
WrapperTable.propDecorators = {
    headerRowDefs: [{ type: ContentChildren, args: [MatHeaderRowDef,] }],
    rowDefs: [{ type: ContentChildren, args: [MatRowDef,] }],
    columnDefs: [{ type: ContentChildren, args: [MatColumnDef,] }],
    table: [{ type: ViewChild, args: [MatTable, { static: true },] }],
    columns: [{ type: Input }],
    dataSource: [{ type: Input }]
};
/** @nocollapse */ WrapperTable.ɵfac = function WrapperTable_Factory(t) { return new (t || WrapperTable)(); };
/** @nocollapse */ WrapperTable.ɵcmp = ɵɵdefineComponent({ type: WrapperTable, selectors: [["wrapper-table"]], contentQueries: function WrapperTable_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, MatHeaderRowDef, false);
        ɵɵcontentQuery(dirIndex, MatRowDef, false);
        ɵɵcontentQuery(dirIndex, MatColumnDef, false);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerRowDefs = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rowDefs = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.columnDefs = _t);
    } }, viewQuery: function WrapperTable_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(MatTable, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.table = _t.first);
    } }, inputs: { columns: "columns", dataSource: "dataSource" }, ngContentSelectors: _c1$3, decls: 11, vars: 1, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""]], template: function WrapperTable_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "table", 0);
        ɵɵprojection(1);
        ɵɵelementContainerStart(2, 1);
        ɵɵtemplate(3, WrapperTable_th_3_Template, 2, 0, "th", 2);
        ɵɵtemplate(4, WrapperTable_td_4_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(5, 4);
        ɵɵtemplate(6, WrapperTable_th_6_Template, 2, 0, "th", 2);
        ɵɵtemplate(7, WrapperTable_td_7_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(8, 5);
        ɵɵtemplate(9, WrapperTable_th_9_Template, 2, 0, "th", 6);
        ɵɵtemplate(10, WrapperTable_td_10_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource);
    } }, directives: [MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderCell, MatSortHeader, MatCell], styles: ["table[_ngcontent-%COMP%] {\n      width: 100%;\n    }"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(WrapperTable, [{
        type: Component,
        args: [{
                selector: 'wrapper-table',
                templateUrl: 'wrapper-table.html',
                styles: [`
    table {
      width: 100%;
    }
  `]
            }]
    }], null, { headerRowDefs: [{
            type: ContentChildren,
            args: [MatHeaderRowDef]
        }], rowDefs: [{
            type: ContentChildren,
            args: [MatRowDef]
        }], columnDefs: [{
            type: ContentChildren,
            args: [MatColumnDef]
        }], table: [{
            type: ViewChild,
            args: [MatTable, { static: true }]
        }], columns: [{
            type: Input
        }], dataSource: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    WrapperTable.prototype.headerRowDefs;
    /** @type {?} */
    WrapperTable.prototype.rowDefs;
    /** @type {?} */
    WrapperTable.prototype.columnDefs;
    /** @type {?} */
    WrapperTable.prototype.table;
    /** @type {?} */
    WrapperTable.prototype.columns;
    /** @type {?} */
    WrapperTable.prototype.dataSource;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    TableBasicExample, TableBasicFlexExample,
    TableDynamicColumnsExample, TableExpandableRowsExample,
    TableFilteringExample, TableFooterRowExample,
    TableHttpExample, TableMultipleHeaderFooterExample,
    TableOverviewExample, TablePaginationExample,
    TableRowContextExample, TableSelectionExample,
    TableSortingExample, TableStickyColumnsExample,
    TableStickyComplexExample, TableStickyComplexFlexExample,
    TableStickyFooterExample, TableStickyHeaderExample,
    TableTextColumnExample, TableTextColumnAdvancedExample,
    TableWrappedExample, WrapperTable,
];
class TableExamplesModule {
}
TableExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatInputModule,
                    MatPaginatorModule,
                    MatProgressSpinnerModule,
                    MatSortModule,
                    MatTableModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ TableExamplesModule.ɵmod = ɵɵdefineNgModule({ type: TableExamplesModule });
/** @nocollapse */ TableExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function TableExamplesModule_Factory(t) { return new (t || TableExamplesModule)(); }, imports: [[
            CommonModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCheckboxModule,
            MatIconModule,
            MatInputModule,
            MatPaginatorModule,
            MatProgressSpinnerModule,
            MatSortModule,
            MatTableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TableExamplesModule, { declarations: [TableBasicExample, TableBasicFlexExample,
        TableDynamicColumnsExample, TableExpandableRowsExample,
        TableFilteringExample, TableFooterRowExample,
        TableHttpExample, TableMultipleHeaderFooterExample,
        TableOverviewExample, TablePaginationExample,
        TableRowContextExample, TableSelectionExample,
        TableSortingExample, TableStickyColumnsExample,
        TableStickyComplexExample, TableStickyComplexFlexExample,
        TableStickyFooterExample, TableStickyHeaderExample,
        TableTextColumnExample, TableTextColumnAdvancedExample,
        TableWrappedExample, WrapperTable], imports: [CommonModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSortModule,
        MatTableModule], exports: [TableBasicExample, TableBasicFlexExample,
        TableDynamicColumnsExample, TableExpandableRowsExample,
        TableFilteringExample, TableFooterRowExample,
        TableHttpExample, TableMultipleHeaderFooterExample,
        TableOverviewExample, TablePaginationExample,
        TableRowContextExample, TableSelectionExample,
        TableSortingExample, TableStickyColumnsExample,
        TableStickyComplexExample, TableStickyComplexFlexExample,
        TableStickyFooterExample, TableStickyHeaderExample,
        TableTextColumnExample, TableTextColumnAdvancedExample,
        TableWrappedExample, WrapperTable] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatInputModule,
                    MatPaginatorModule,
                    MatProgressSpinnerModule,
                    MatSortModule,
                    MatTableModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { TableBasicExample, TableBasicFlexExample, TableDynamicColumnsExample, TableExamplesModule, TableExpandableRowsExample, TableFilteringExample, TableFooterRowExample, TableHttpExample, TableMultipleHeaderFooterExample, TableOverviewExample, TablePaginationExample, TableRowContextExample, TableSelectionExample, TableSortingExample, TableStickyColumnsExample, TableStickyComplexExample, TableStickyComplexFlexExample, TableStickyFooterExample, TableStickyHeaderExample, TableTextColumnAdvancedExample, TableTextColumnExample, TableWrappedExample, WrapperTable };
//# sourceMappingURL=table.js.map
