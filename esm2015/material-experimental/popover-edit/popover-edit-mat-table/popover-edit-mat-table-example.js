/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { FormValueContainer } from '@angular/cdk-experimental/popover-edit';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "@angular/material/table";
import * as i3 from "@angular/cdk-experimental/popover-edit";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material-experimental/popover-edit";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/input";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/icon";
function PopoverEditMatTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r152 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 12, 13);
    i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r152); const element_r149 = ctx.$implicit; const _r150 = i0.ɵɵreference(2); const ctx_r151 = i0.ɵɵnextContext(); return ctx_r151.onSubmitWeight(element_r149, _r150); });
    i0.ɵɵlistener("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r152); const element_r149 = ctx.$implicit; const ctx_r153 = i0.ɵɵnextContext(); return ctx_r153.weightValues.for(element_r149).value = $event; });
    i0.ɵɵelementStart(3, "div", 14);
    i0.ɵɵelementStart(4, "mat-form-field");
    i0.ɵɵelement(5, "input", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r149 = ctx.$implicit;
    const ctx_r138 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r138.weightValues.for(element_r149).value);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", element_r149.weight);
} }
function PopoverEditMatTableExample_th_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 16);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_5_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r158 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 19);
    i0.ɵɵlistener("click", function PopoverEditMatTableExample_td_5_span_2_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r158); const element_r154 = i0.ɵɵnextContext().$implicit; const ctx_r156 = i0.ɵɵnextContext(); return ctx_r156.goodJob(element_r154); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "thumb_up");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 19);
    i0.ɵɵlistener("click", function PopoverEditMatTableExample_td_5_span_2_Template_button_click_4_listener($event) { i0.ɵɵrestoreView(_r158); const element_r154 = i0.ɵɵnextContext().$implicit; const ctx_r159 = i0.ɵɵnextContext(); return ctx_r159.badJob(element_r154); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "thumb_down");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 17);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_5_span_2_Template, 7, 0, "span", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r154 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r154.position, " ");
} }
function PopoverEditMatTableExample_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 16);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r168 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 12, 13);
    i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_8_ng_template_2_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r168); const _r165 = i0.ɵɵreference(2); const element_r161 = i0.ɵɵnextContext().$implicit; const ctx_r166 = i0.ɵɵnextContext(); return ctx_r166.onSubmitName(element_r161, _r165); });
    i0.ɵɵlistener("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_8_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r168); const element_r161 = i0.ɵɵnextContext().$implicit; const ctx_r169 = i0.ɵɵnextContext(); return ctx_r169.nameValues.for(element_r161).value = $event; });
    i0.ɵɵelementStart(3, "h2", 22);
    i0.ɵɵtext(4, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 14);
    i0.ɵɵelementStart(6, "mat-form-field");
    i0.ɵɵelement(7, "input", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 24);
    i0.ɵɵelementStart(9, "button", 25);
    i0.ɵɵtext(10, "Confirm");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 26);
    i0.ɵɵtext(12, "Revert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 27);
    i0.ɵɵtext(14, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r161 = i0.ɵɵnextContext().$implicit;
    const ctx_r163 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r163.nameValues.for(element_r161).value);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", element_r161.name);
} }
function PopoverEditMatTableExample_td_8_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 28);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 20);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_8_ng_template_2_Template, 15, 2, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PopoverEditMatTableExample_td_8_span_4_Template, 4, 0, "span", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r161 = ctx.$implicit;
    const _r162 = i0.ɵɵreference(3);
    i0.ɵɵproperty("matPopoverEdit", _r162);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r161.name, " ");
} }
function PopoverEditMatTableExample_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 16);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_11_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 28);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 29);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_11_span_2_Template, 4, 0, "span", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r172 = ctx.$implicit;
    i0.ɵɵnextContext();
    const _r137 = i0.ɵɵreference(2);
    i0.ɵɵproperty("matPopoverEdit", _r137)("matPopoverEditContext", element_r172);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r172.weight, " ");
} }
function PopoverEditMatTableExample_th_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 16);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r174 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r174.symbol, " ");
} }
function PopoverEditMatTableExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 30);
} }
function PopoverEditMatTableExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 31);
} }
/**
 * @record
 */
export function PeriodicElement() { }
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
 * \@title Material Popover Edit on a Material data-table
 */
export class PopoverEditMatTableExample {
    /**
     * @param {?} _snackBar
     */
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource();
        this.nameValues = new FormValueContainer();
        this.weightValues = new FormValueContainer();
    }
    /**
     * @param {?} element
     * @param {?} f
     * @return {?}
     */
    onSubmitName(element, f) {
        if (!f.valid) {
            return;
        }
        element.name = f.value.name;
    }
    /**
     * @param {?} element
     * @param {?} f
     * @return {?}
     */
    onSubmitWeight(element, f) {
        if (!f.valid) {
            return;
        }
        element.weight = f.value.weight;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    goodJob(element) {
        this._snackBar.open(`Way to go, ${element.name}!`, undefined, { duration: 2000 });
    }
    /**
     * @param {?} element
     * @return {?}
     */
    badJob(element) {
        this._snackBar.open(`You have failed me for the last time, #${element.position}.`, undefined, { duration: 2000 });
    }
}
PopoverEditMatTableExample.decorators = [
    { type: Component, args: [{
                selector: 'popover-edit-mat-table-example',
                styleUrls: ['popover-edit-mat-table-example.css'],
                templateUrl: 'popover-edit-mat-table-example.html',
            },] },
];
/** @nocollapse */
PopoverEditMatTableExample.ctorParameters = () => [
    { type: MatSnackBar }
];
/** @nocollapse */ PopoverEditMatTableExample.ɵfac = function PopoverEditMatTableExample_Factory(t) { return new (t || PopoverEditMatTableExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
/** @nocollapse */ PopoverEditMatTableExample.ɵcmp = i0.ɵɵdefineComponent({ type: PopoverEditMatTableExample, selectors: [["popover-edit-mat-table-example"]], decls: 17, vars: 3, consts: [["mat-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", 3, "matPopoverEdit", 4, "matCellDef"], ["matColumnDef", "weight"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext", 4, "matCellDef"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matEditLens", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", ""], ["matInput", "", "type", "number", "name", "weight", "required", "", 3, "ngModel"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "matRowHoverContent"], ["mat-icon-button", "", 3, "click"], ["mat-cell", "", 3, "matPopoverEdit"], ["nameEdit", ""], ["mat-edit-title", ""], ["matInput", "", "name", "name", "required", "", 3, "ngModel"], ["mat-edit-actions", ""], ["mat-button", "", "type", "submit"], ["mat-button", "", "matEditRevert", ""], ["mat-button", "", "matEditClose", ""], ["mat-icon-button", "", "matEditOpen", ""], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext"], ["mat-header-row", ""], ["mat-row", ""]], template: function PopoverEditMatTableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵtemplate(1, PopoverEditMatTableExample_ng_template_1_Template, 6, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementContainerStart(3, 2);
        i0.ɵɵtemplate(4, PopoverEditMatTableExample_th_4_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(5, PopoverEditMatTableExample_td_5_Template, 3, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(6, 5);
        i0.ɵɵtemplate(7, PopoverEditMatTableExample_th_7_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(8, PopoverEditMatTableExample_td_8_Template, 5, 2, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(9, 7);
        i0.ɵɵtemplate(10, PopoverEditMatTableExample_th_10_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(11, PopoverEditMatTableExample_td_11_Template, 3, 3, "td", 8);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(12, 9);
        i0.ɵɵtemplate(13, PopoverEditMatTableExample_th_13_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(14, PopoverEditMatTableExample_td_14_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(15, PopoverEditMatTableExample_tr_15_Template, 1, 0, "tr", 10);
        i0.ɵɵtemplate(16, PopoverEditMatTableExample_tr_16_Template, 1, 0, "tr", 11);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(15);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i2.MatTable, i3.CdkEditable, i2.MatColumnDef, i2.MatHeaderCellDef, i2.MatCellDef, i2.MatHeaderRowDef, i2.MatRowDef, i4.ɵangular_packages_forms_forms_y, i4.NgControlStatusGroup, i4.NgForm, i5.MatEditLens, i6.MatFormField, i7.MatInput, i4.NumberValueAccessor, i4.DefaultValueAccessor, i4.RequiredValidator, i4.NgControlStatus, i4.NgModel, i2.MatHeaderCell, i2.MatCell, i5.MatRowHoverContent, i8.MatButton, i9.MatIcon, i5.MatPopoverEdit, i5.MatEditRevert, i5.MatEditClose, i5.MatEditOpen, i2.MatHeaderRow, i2.MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 25%;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PopoverEditMatTableExample, [{
        type: Component,
        args: [{
                selector: 'popover-edit-mat-table-example',
                styleUrls: ['popover-edit-mat-table-example.css'],
                templateUrl: 'popover-edit-mat-table-example.html',
            }]
    }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();
if (false) {
    /** @type {?} */
    PopoverEditMatTableExample.prototype.displayedColumns;
    /** @type {?} */
    PopoverEditMatTableExample.prototype.dataSource;
    /** @type {?} */
    PopoverEditMatTableExample.prototype.nameValues;
    /** @type {?} */
    PopoverEditMatTableExample.prototype.weightValues;
    /**
     * @type {?}
     * @private
     */
    PopoverEditMatTableExample.prototype._snackBar;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource {
    constructor() {
        super(...arguments);
        /**
         * Stream of data that is provided to the table.
         */
        this.data = new BehaviorSubject(ELEMENT_DATA);
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    connect() {
        return this.data;
    }
    /**
     * @return {?}
     */
    disconnect() { }
}
if (false) {
    /**
     * Stream of data that is provided to the table.
     * @type {?}
     */
    ExampleDataSource.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1lZGl0LW1hdC10YWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlL3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvcG9wb3Zlci1lZGl0LW1hdC10YWJsZS9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFFMUUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNDN0MsMkJBQ0U7SUFBQSxvQ0FJRTtJQUZFLGtUQUF1QztJQUN2Qyx1UkFBbUMsdUNBQXlCLG1CQUFPO0lBQ3JFLCtCQUNFO0lBQUEsc0NBQ0U7SUFBQSw0QkFDRjtJQUFBLGlCQUFpQjtJQUNuQixpQkFBTTtJQUNSLGlCQUFPO0lBQ1QsaUJBQU07Ozs7SUFQQSxlQUFtRTtJQUFuRSw2RkFBbUU7SUFHbkMsZUFBMEI7SUFBMUIsNkNBQTBCOzs7SUFTaEUsOEJBQXVDO0lBQUEscUJBQUk7SUFBQSxpQkFBSzs7OztJQUs5Qyw0QkFDRTtJQUFBLGtDQUNFO0lBRHNCLDRRQUEwQjtJQUNoRCxnQ0FB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QU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMvRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDL0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUNoRSxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1B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REFBcUU7O0lBQ3JFLGtEQUF1RTs7Ozs7SUFFM0QsK0NBQXVDOzs7Ozs7Ozs7QUErQnJELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUEyQjtJQUFsRTs7Ozs7UUFFRSxTQUFJLEdBQUcsSUFBSSxlQUFlLENBQW9CLFlBQVksQ0FBQyxDQUFDO0lBUTlELENBQUM7Ozs7O0lBTEMsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsVUFBVSxLQUFJLENBQUM7Q0FDaEI7Ozs7OztJQVJDLGlDQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7Rm9ybVZhbHVlQ29udGFpbmVyfSBmcm9tICdAYW5ndWxhci9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdCc7XG5pbXBvcnQge05nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRTbmFja0Jhcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXG4gIHtwb3NpdGlvbjogMTEsIG5hbWU6ICdTb2RpdW0nLCB3ZWlnaHQ6IDIyLjk4OTcsIHN5bWJvbDogJ05hJ30sXG4gIHtwb3NpdGlvbjogMTIsIG5hbWU6ICdNYWduZXNpdW0nLCB3ZWlnaHQ6IDI0LjMwNSwgc3ltYm9sOiAnTWcnfSxcbiAge3Bvc2l0aW9uOiAxMywgbmFtZTogJ0FsdW1pbnVtJywgd2VpZ2h0OiAyNi45ODE1LCBzeW1ib2w6ICdBbCd9LFxuICB7cG9zaXRpb246IDE0LCBuYW1lOiAnU2lsaWNvbicsIHdlaWdodDogMjguMDg1NSwgc3ltYm9sOiAnU2knfSxcbiAge3Bvc2l0aW9uOiAxNSwgbmFtZTogJ1Bob3NwaG9ydXMnLCB3ZWlnaHQ6IDMwLjk3MzgsIHN5bWJvbDogJ1AnfSxcbiAge3Bvc2l0aW9uOiAxNiwgbmFtZTogJ1N1bGZ1cicsIHdlaWdodDogMzIuMDY1LCBzeW1ib2w6ICdTJ30sXG4gIHtwb3NpdGlvbjogMTcsIG5hbWU6ICdDaGxvcmluZScsIHdlaWdodDogMzUuNDUzLCBzeW1ib2w6ICdDbCd9LFxuICB7cG9zaXRpb246IDE4LCBuYW1lOiAnQXJnb24nLCB3ZWlnaHQ6IDM5Ljk0OCwgc3ltYm9sOiAnQXInfSxcbiAge3Bvc2l0aW9uOiAxOSwgbmFtZTogJ1BvdGFzc2l1bScsIHdlaWdodDogMzkuMDk4Mywgc3ltYm9sOiAnSyd9LFxuICB7cG9zaXRpb246IDIwLCBuYW1lOiAnQ2FsY2l1bScsIHdlaWdodDogNDAuMDc4LCBzeW1ib2w6ICdDYSd9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgTWF0ZXJpYWwgUG9wb3ZlciBFZGl0IG9uIGEgTWF0ZXJpYWwgZGF0YS10YWJsZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsncG9wb3Zlci1lZGl0LW1hdC10YWJsZS1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckVkaXRNYXRUYWJsZUV4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsncG9zaXRpb24nLCAnbmFtZScsICd3ZWlnaHQnLCAnc3ltYm9sJ107XG4gIGRhdGFTb3VyY2UgPSBuZXcgRXhhbXBsZURhdGFTb3VyY2UoKTtcblxuICByZWFkb25seSBuYW1lVmFsdWVzID0gbmV3IEZvcm1WYWx1ZUNvbnRhaW5lcjxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcbiAgcmVhZG9ubHkgd2VpZ2h0VmFsdWVzID0gbmV3IEZvcm1WYWx1ZUNvbnRhaW5lcjxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9zbmFja0JhcjogTWF0U25hY2tCYXIpIHt9XG5cbiAgb25TdWJtaXROYW1lKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCwgZjogTmdGb3JtKSB7XG4gICAgaWYgKCFmLnZhbGlkKSB7IHJldHVybjsgfVxuXG4gICAgZWxlbWVudC5uYW1lID0gZi52YWx1ZS5uYW1lO1xuICB9XG5cbiAgb25TdWJtaXRXZWlnaHQoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50LCBmOiBOZ0Zvcm0pIHtcbiAgICBpZiAoIWYudmFsaWQpIHsgcmV0dXJuOyB9XG5cbiAgICBlbGVtZW50LndlaWdodCA9IGYudmFsdWUud2VpZ2h0O1xuICB9XG5cbiAgZ29vZEpvYihlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQpIHtcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuKGBXYXkgdG8gZ28sICR7ZWxlbWVudC5uYW1lfSFgLCB1bmRlZmluZWQsIHtkdXJhdGlvbjogMjAwMH0pO1xuICB9XG5cbiAgYmFkSm9iKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCkge1xuICAgIHRoaXMuX3NuYWNrQmFyLm9wZW4oYFlvdSBoYXZlIGZhaWxlZCBtZSBmb3IgdGhlIGxhc3QgdGltZSwgIyR7ZWxlbWVudC5wb3NpdGlvbn0uYCwgdW5kZWZpbmVkLFxuICAgICAgICB7ZHVyYXRpb246IDIwMDB9KTtcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgc291cmNlIHRvIHByb3ZpZGUgd2hhdCBkYXRhIHNob3VsZCBiZSByZW5kZXJlZCBpbiB0aGUgdGFibGUuIE5vdGUgdGhhdCB0aGUgZGF0YSBzb3VyY2VcbiAqIGNhbiByZXRyaWV2ZSBpdHMgZGF0YSBpbiBhbnkgd2F5LiBJbiB0aGlzIGNhc2UsIHRoZSBkYXRhIHNvdXJjZSBpcyBwcm92aWRlZCBhIHJlZmVyZW5jZVxuICogdG8gYSBjb21tb24gZGF0YSBiYXNlLCBFeGFtcGxlRGF0YWJhc2UuIEl0IGlzIG5vdCB0aGUgZGF0YSBzb3VyY2UncyByZXNwb25zaWJpbGl0eSB0byBtYW5hZ2VcbiAqIHRoZSB1bmRlcmx5aW5nIGRhdGEuIEluc3RlYWQsIGl0IG9ubHkgbmVlZHMgdG8gdGFrZSB0aGUgZGF0YSBhbmQgc2VuZCB0aGUgdGFibGUgZXhhY3RseSB3aGF0XG4gKiBzaG91bGQgYmUgcmVuZGVyZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBFeGFtcGxlRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2U8UGVyaW9kaWNFbGVtZW50PiB7XG4gIC8qKiBTdHJlYW0gb2YgZGF0YSB0aGF0IGlzIHByb3ZpZGVkIHRvIHRoZSB0YWJsZS4gKi9cbiAgZGF0YSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UGVyaW9kaWNFbGVtZW50W10+KEVMRU1FTlRfREFUQSk7XG5cbiAgLyoqIENvbm5lY3QgZnVuY3Rpb24gY2FsbGVkIGJ5IHRoZSB0YWJsZSB0byByZXRyaWV2ZSBvbmUgc3RyZWFtIGNvbnRhaW5pbmcgdGhlIGRhdGEgdG8gcmVuZGVyLiAqL1xuICBjb25uZWN0KCk6IE9ic2VydmFibGU8UGVyaW9kaWNFbGVtZW50W10+IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpIHt9XG59XG4iLCI8dGFibGUgY2xhc3M9XCJleGFtcGxlLXRhYmxlXCIgbWF0LXRhYmxlIGVkaXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIj5cbiAgPCEtLVxuICAgIFRoaXMgZWRpdCBsZW5zIGlzIHNwZWNpZmllZCBvdXRzaWRlIG9mIHRoZSBjZWxsIGFuZCBtdXN0IGV4cGxpY2l0bHkgZGVjbGFyZVxuICAgIGl0cyBjb250ZXh0LiBJdCBjb3VsZCBiZSByZXVzZWQgaW4gbXVsdGlwbGUgY2VsbHMuXG4gIC0tPlxuICA8bmctdGVtcGxhdGUgI3dlaWdodEVkaXQgbGV0LWVsZW1lbnQ+XG4gICAgPGRpdj5cbiAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICBtYXRFZGl0TGVuc1xuICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdFdlaWdodChlbGVtZW50LCBmKVwiXG4gICAgICAgICAgWyhtYXRFZGl0TGVuc1ByZXNlcnZlZEZvcm1WYWx1ZSldPVwid2VpZ2h0VmFsdWVzLmZvcihlbGVtZW50KS52YWx1ZVwiPlxuICAgICAgICA8ZGl2IG1hdC1lZGl0LWNvbnRlbnQ+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbbmdNb2RlbF09XCJlbGVtZW50LndlaWdodFwiIG5hbWU9XCJ3ZWlnaHRcIiByZXF1aXJlZD5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJwb3NpdGlvblwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE5vLiA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+XG4gICAgICB7e2VsZW1lbnQucG9zaXRpb259fVxuXG4gICAgICA8IS0tIFJvdyBob3ZlciBjb250ZW50IGluIGEgbm9uLWVkaXQgY2VsbC4gLS0+XG4gICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZ29vZEpvYihlbGVtZW50KVwiPlxuICAgICAgICAgIDxtYXQtaWNvbj50aHVtYl91cDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiYmFkSm9iKGVsZW1lbnQpXCI+XG4gICAgICAgICAgPG1hdC1pY29uPnRodW1iX2Rvd248L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBOYW1lIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRdPVwibmFtZUVkaXRcIj5cbiAgICAgIHt7ZWxlbWVudC5uYW1lfX1cbiAgICAgIFxuICAgICAgPCEtLSBUaGlzIGVkaXQgaXMgZGVmaW5lZCBpbiB0aGUgY2VsbCBhbmQgY2FuIGltcGxpY2l0bHkgYWNjZXNzIGVsZW1lbnQgLS0+XG4gICAgICA8bmctdGVtcGxhdGUgI25hbWVFZGl0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICAgICAgbWF0RWRpdExlbnNcbiAgICAgICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0TmFtZShlbGVtZW50LCBmKVwiXG4gICAgICAgICAgICAgIFsobWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWUpXT1cIm5hbWVWYWx1ZXMuZm9yKGVsZW1lbnQpLnZhbHVlXCI+XG4gICAgICAgICAgICA8aDIgbWF0LWVkaXQtdGl0bGU+TmFtZTwvaDI+XG4gICAgICAgICAgICA8ZGl2IG1hdC1lZGl0LWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW25nTW9kZWxdPVwiZWxlbWVudC5uYW1lXCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBtYXQtZWRpdC1hY3Rpb25zPlxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdEVkaXRSZXZlcnQ+UmV2ZXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRFZGl0Q2xvc2U+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRFZGl0T3Blbj48bWF0LWljb24+ZWRpdDwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBXZWlnaHQgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIndlaWdodFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFdlaWdodCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0XT1cIndlaWdodEVkaXRcIiBbbWF0UG9wb3ZlckVkaXRDb250ZXh0XT1cImVsZW1lbnRcIj5cbiAgICAgIHt7ZWxlbWVudC53ZWlnaHR9fVxuICAgICAgXG4gICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRFZGl0T3Blbj48bWF0LWljb24+ZWRpdDwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBTeW1ib2wgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInN5bWJvbFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFN5bWJvbCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5zeW1ib2x9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuPC90YWJsZT5cbiJdfQ==