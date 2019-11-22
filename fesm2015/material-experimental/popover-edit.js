import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵreference, ɵɵnextContext, ɵɵelement, ɵɵelementEnd, ɵɵtext, ɵɵadvance, ɵɵproperty, ɵɵattribute, ɵɵtextInterpolate1, ɵɵtemplate, ɵɵpureFunction1, ɵɵpureFunction0, Component, ɵɵdefineComponent, ɵɵtemplateRefExtractor, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵsetClassMetadata, ɵɵdirectiveInject, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, NumberValueAccessor, FormsModule } from '@angular/forms';
import { MatEditLens, MatPopoverEdit, MatRowHoverContent, MatEditOpen, MatEditRevert, MatEditClose, MatPopoverEditTabOut, MatPopoverEditModule } from '@angular/material-experimental/popover-edit';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatTableModule } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs';
import { CdkEditable, FormValueContainer } from '@angular/cdk-experimental/popover-edit';
import { MatFormField } from '@angular/material/form-field';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function PopoverEditCellSpanMatTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r94 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "form", 11, 12);
    ɵɵlistener("ngSubmit", function PopoverEditCellSpanMatTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r94); const ctx_r91 = ctx.$implicit; const _r92 = ɵɵreference(2); const ctx_r93 = ɵɵnextContext(); return ctx_r93.onSubmit(ctx_r91.person, _r92); });
    ɵɵlistener("matEditLensPreservedFormValueChange", function PopoverEditCellSpanMatTableExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r94); const ctx_r91 = ctx.$implicit; const ctx_r95 = ɵɵnextContext(); return ctx_r95.preservedValues.set(ctx_r91.person, $event); });
    ɵɵelementStart(3, "div", 13);
    ɵɵelementStart(4, "mat-form-field");
    ɵɵelement(5, "input", 14);
    ɵɵelementEnd();
    ɵɵelementStart(6, "mat-form-field");
    ɵɵelement(7, "input", 15);
    ɵɵelementEnd();
    ɵɵelementStart(8, "mat-form-field");
    ɵɵelement(9, "input", 16);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 17);
    ɵɵelementStart(11, "button", 18);
    ɵɵtext(12, "Confirm");
    ɵɵelementEnd();
    ɵɵelementStart(13, "button", 19);
    ɵɵtext(14, "Revert");
    ɵɵelementEnd();
    ɵɵelementStart(15, "button", 20);
    ɵɵtext(16, "Close");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r91 = ctx.$implicit;
    const ctx_r80 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("matEditLensPreservedFormValue", ctx_r80.preservedValues.get(ctx_r91.person));
    ɵɵadvance(4);
    ɵɵproperty("ngModel", ctx_r91.person.firstName);
    ɵɵattribute("cdkFocusInitial", ctx_r91.focus === "firstName" || null);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r91.person.middleName);
    ɵɵattribute("cdkFocusInitial", ctx_r91.focus === "middleName" || null);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r91.person.lastName);
    ɵɵattribute("cdkFocusInitial", ctx_r91.focus === "lastName" || null);
} }
function PopoverEditCellSpanMatTableExample_th_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 21);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function PopoverEditCellSpanMatTableExample_td_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const person_r96 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", person_r96.id, " ");
} }
function PopoverEditCellSpanMatTableExample_th_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 21);
    ɵɵtext(1, " First Name ");
    ɵɵelementEnd();
} }
function PopoverEditCellSpanMatTableExample_td_8_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 25);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
const _c0 = function (a0) { return { person: a0, focus: "firstName" }; };
const _c1 = function () { return { after: 2 }; };
function PopoverEditCellSpanMatTableExample_td_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 23);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditCellSpanMatTableExample_td_8_span_2_Template, 4, 0, "span", 24);
    ɵɵelementEnd();
} if (rf & 2) {
    const person_r97 = ctx.$implicit;
    ɵɵnextContext();
    const _r79 = ɵɵreference(2);
    ɵɵproperty("matPopoverEdit", _r79)("matPopoverEditContext", ɵɵpureFunction1(4, _c0, person_r97))("matPopoverEditColspan", ɵɵpureFunction0(6, _c1));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", person_r97.firstName, " ");
} }
function PopoverEditCellSpanMatTableExample_th_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 21);
    ɵɵtext(1, " Middle Name ");
    ɵɵelementEnd();
} }
function PopoverEditCellSpanMatTableExample_td_11_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 25);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
const _c2 = function (a0) { return { person: a0, focus: "middleName" }; };
const _c3 = function () { return { before: 1, after: 1 }; };
function PopoverEditCellSpanMatTableExample_td_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 23);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditCellSpanMatTableExample_td_11_span_2_Template, 4, 0, "span", 24);
    ɵɵelementEnd();
} if (rf & 2) {
    const person_r99 = ctx.$implicit;
    ɵɵnextContext();
    const _r79 = ɵɵreference(2);
    ɵɵproperty("matPopoverEdit", _r79)("matPopoverEditContext", ɵɵpureFunction1(4, _c2, person_r99))("matPopoverEditColspan", ɵɵpureFunction0(6, _c3));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", person_r99.middleName, " ");
} }
function PopoverEditCellSpanMatTableExample_th_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 21);
    ɵɵtext(1, " Last Name ");
    ɵɵelementEnd();
} }
function PopoverEditCellSpanMatTableExample_td_14_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 25);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
const _c4 = function (a0) { return { person: a0, focus: "lastName" }; };
const _c5 = function () { return { before: 2 }; };
function PopoverEditCellSpanMatTableExample_td_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 23);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditCellSpanMatTableExample_td_14_span_2_Template, 4, 0, "span", 24);
    ɵɵelementEnd();
} if (rf & 2) {
    const person_r101 = ctx.$implicit;
    ɵɵnextContext();
    const _r79 = ɵɵreference(2);
    ɵɵproperty("matPopoverEdit", _r79)("matPopoverEditContext", ɵɵpureFunction1(4, _c4, person_r101))("matPopoverEditColspan", ɵɵpureFunction0(6, _c5));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", person_r101.lastName, " ");
} }
function PopoverEditCellSpanMatTableExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 26);
} }
function PopoverEditCellSpanMatTableExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 27);
} }
/**
 * @record
 */
function Person() { }
if (false) {
    /** @type {?} */
    Person.prototype.id;
    /** @type {?} */
    Person.prototype.firstName;
    /** @type {?} */
    Person.prototype.middleName;
    /** @type {?} */
    Person.prototype.lastName;
}
/** @type {?} */
const PERSON_DATA = [
    { id: 1, firstName: 'Terra', middleName: 'Maduin', lastName: 'Branford' },
    { id: 2, firstName: 'Locke', middleName: '', lastName: 'Cole' },
    { id: 3, firstName: 'Celes', middleName: 'Gestahl', lastName: 'Chere' },
    { id: 4, firstName: 'Edgar', middleName: 'Roni', lastName: 'Figaro' },
    { id: 5, firstName: 'Sabin', middleName: 'Rene', lastName: 'Figaro' },
    { id: 6, firstName: 'Clyde', middleName: '"Shadow"', lastName: 'Arrowny' },
    { id: 7, firstName: 'Setzer', middleName: '', lastName: 'Gabbiani' },
    { id: 8, firstName: 'Cid', middleName: 'Del Norte', lastName: 'Marquez' },
    { id: 9, firstName: 'Mog', middleName: '', lastName: 'McMoogle' },
];
/**
 * \@title Material Popover Edit spanning multiple columns on a Material data-table
 */
class PopoverEditCellSpanMatTableExample {
    constructor() {
        this.displayedColumns = ['id', 'firstName', 'middleName', 'lastName'];
        this.dataSource = new ExampleDataSource();
        this.preservedValues = new WeakMap();
    }
    /**
     * @param {?} person
     * @param {?} f
     * @return {?}
     */
    onSubmit(person, f) {
        if (!f.valid) {
            return;
        }
        person.firstName = f.value['firstName'];
        person.middleName = f.value['middleName'];
        person.lastName = f.value['lastName'];
    }
}
PopoverEditCellSpanMatTableExample.decorators = [
    { type: Component, args: [{
                selector: 'popover-edit-cell-span-mat-table-example',
                styleUrls: ['popover-edit-cell-span-mat-table-example.css'],
                templateUrl: 'popover-edit-cell-span-mat-table-example.html',
            },] },
];
/** @nocollapse */ PopoverEditCellSpanMatTableExample.ɵfac = function PopoverEditCellSpanMatTableExample_Factory(t) { return new (t || PopoverEditCellSpanMatTableExample)(); };
/** @nocollapse */ PopoverEditCellSpanMatTableExample.ɵcmp = ɵɵdefineComponent({ type: PopoverEditCellSpanMatTableExample, selectors: [["popover-edit-cell-span-mat-table-example"]], decls: 17, vars: 3, consts: [["mat-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["nameEdit", ""], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "firstName"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan", 4, "matCellDef"], ["matColumnDef", "middleName"], ["matColumnDef", "lastName"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matEditLens", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", "", 1, "example-input-container"], ["matInput", "", "name", "firstName", "required", "", 3, "ngModel"], ["matInput", "", "name", "middleName", 3, "ngModel"], ["matInput", "", "name", "lastName", "required", "", 3, "ngModel"], ["mat-edit-actions", ""], ["mat-button", "", "type", "submit"], ["mat-button", "", "cdkEditRevert", ""], ["mat-button", "", "cdkEditClose", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan"], [4, "matRowHoverContent"], ["mat-icon-button", "", "matEditOpen", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function PopoverEditCellSpanMatTableExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵtemplate(1, PopoverEditCellSpanMatTableExample_ng_template_1_Template, 17, 7, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵelementContainerStart(3, 2);
        ɵɵtemplate(4, PopoverEditCellSpanMatTableExample_th_4_Template, 2, 0, "th", 3);
        ɵɵtemplate(5, PopoverEditCellSpanMatTableExample_td_5_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(6, 5);
        ɵɵtemplate(7, PopoverEditCellSpanMatTableExample_th_7_Template, 2, 0, "th", 3);
        ɵɵtemplate(8, PopoverEditCellSpanMatTableExample_td_8_Template, 3, 7, "td", 6);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(9, 7);
        ɵɵtemplate(10, PopoverEditCellSpanMatTableExample_th_10_Template, 2, 0, "th", 3);
        ɵɵtemplate(11, PopoverEditCellSpanMatTableExample_td_11_Template, 3, 7, "td", 6);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(12, 8);
        ɵɵtemplate(13, PopoverEditCellSpanMatTableExample_th_13_Template, 2, 0, "th", 3);
        ɵɵtemplate(14, PopoverEditCellSpanMatTableExample_td_14_Template, 3, 7, "td", 6);
        ɵɵelementContainerEnd();
        ɵɵtemplate(15, PopoverEditCellSpanMatTableExample_tr_15_Template, 1, 0, "tr", 9);
        ɵɵtemplate(16, PopoverEditCellSpanMatTableExample_tr_16_Template, 1, 0, "tr", 10);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(15);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [MatTable, CdkEditable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatEditLens, MatFormField, MatInput, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, MatButton, MatHeaderCell, MatCell, MatPopoverEdit, MatRowHoverContent, MatEditOpen, MatIcon, MatHeaderRow, MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PopoverEditCellSpanMatTableExample, [{
        type: Component,
        args: [{
                selector: 'popover-edit-cell-span-mat-table-example',
                styleUrls: ['popover-edit-cell-span-mat-table-example.css'],
                templateUrl: 'popover-edit-cell-span-mat-table-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    PopoverEditCellSpanMatTableExample.prototype.displayedColumns;
    /** @type {?} */
    PopoverEditCellSpanMatTableExample.prototype.dataSource;
    /** @type {?} */
    PopoverEditCellSpanMatTableExample.prototype.preservedValues;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class ExampleDataSource extends DataSource {
    constructor() {
        super(...arguments);
        /**
         * Stream of data that is provided to the table.
         */
        this.data = new BehaviorSubject(PERSON_DATA);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function PopoverEditMatTableFlexExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r119 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "form", 12, 13);
    ɵɵlistener("ngSubmit", function PopoverEditMatTableFlexExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r119); const element_r116 = ctx.$implicit; const _r117 = ɵɵreference(2); const ctx_r118 = ɵɵnextContext(); return ctx_r118.onSubmitWeight(element_r116, _r117); });
    ɵɵlistener("matEditLensPreservedFormValueChange", function PopoverEditMatTableFlexExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r119); const element_r116 = ctx.$implicit; const ctx_r120 = ɵɵnextContext(); return ctx_r120.preservedWeightValues.set(element_r116, $event); });
    ɵɵelementStart(3, "div", 14);
    ɵɵelementStart(4, "mat-form-field");
    ɵɵelement(5, "input", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r116 = ctx.$implicit;
    const ctx_r105 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("matEditLensPreservedFormValue", ctx_r105.preservedWeightValues.get(element_r116));
    ɵɵadvance(4);
    ɵɵproperty("ngModel", element_r116.weight);
} }
function PopoverEditMatTableFlexExample_mat_header_cell_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell");
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function PopoverEditMatTableFlexExample_mat_cell_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r121 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r121.position, " ");
} }
function PopoverEditMatTableFlexExample_mat_header_cell_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell");
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function PopoverEditMatTableFlexExample_mat_cell_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r129 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "form", 12, 13);
    ɵɵlistener("ngSubmit", function PopoverEditMatTableFlexExample_mat_cell_8_ng_template_2_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r129); const _r126 = ɵɵreference(2); const element_r122 = ɵɵnextContext().$implicit; const ctx_r127 = ɵɵnextContext(); return ctx_r127.onSubmitName(element_r122, _r126); });
    ɵɵlistener("matEditLensPreservedFormValueChange", function PopoverEditMatTableFlexExample_mat_cell_8_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r129); const element_r122 = ɵɵnextContext().$implicit; const ctx_r130 = ɵɵnextContext(); return ctx_r130.preservedNameValues.set(element_r122, $event); });
    ɵɵelementStart(3, "h2", 19);
    ɵɵtext(4, "Name");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 14);
    ɵɵelementStart(6, "mat-form-field");
    ɵɵelement(7, "input", 20);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 21);
    ɵɵelementStart(9, "button", 22);
    ɵɵtext(10, "Confirm");
    ɵɵelementEnd();
    ɵɵelementStart(11, "button", 23);
    ɵɵtext(12, "Revert");
    ɵɵelementEnd();
    ɵɵelementStart(13, "button", 24);
    ɵɵtext(14, "Close");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r122 = ɵɵnextContext().$implicit;
    const ctx_r124 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("matEditLensPreservedFormValue", ctx_r124.preservedNameValues.get(element_r122));
    ɵɵadvance(6);
    ɵɵproperty("ngModel", element_r122.name);
} }
function PopoverEditMatTableFlexExample_mat_cell_8_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 25);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PopoverEditMatTableFlexExample_mat_cell_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell", 16);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditMatTableFlexExample_mat_cell_8_ng_template_2_Template, 15, 2, "ng-template", null, 17, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PopoverEditMatTableFlexExample_mat_cell_8_span_4_Template, 4, 0, "span", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r122 = ctx.$implicit;
    const _r123 = ɵɵreference(3);
    ɵɵproperty("matPopoverEdit", _r123);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r122.name, " ");
} }
function PopoverEditMatTableFlexExample_mat_header_cell_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell");
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function PopoverEditMatTableFlexExample_mat_cell_11_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 25);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PopoverEditMatTableFlexExample_mat_cell_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell", 26);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditMatTableFlexExample_mat_cell_11_span_2_Template, 4, 0, "span", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r133 = ctx.$implicit;
    ɵɵnextContext();
    const _r104 = ɵɵreference(2);
    ɵɵproperty("matPopoverEdit", _r104)("matPopoverEditContext", element_r133);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r133.weight, " ");
} }
function PopoverEditMatTableFlexExample_mat_header_cell_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell");
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function PopoverEditMatTableFlexExample_mat_cell_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r135 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r135.symbol, " ");
} }
function PopoverEditMatTableFlexExample_mat_header_row_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-header-row");
} }
function PopoverEditMatTableFlexExample_mat_row_16_Template(rf, ctx) { if (rf & 1) {
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
 * \@title Material Popover Edit on a flex Material data-table
 */
class PopoverEditMatTableFlexExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource$1();
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
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
}
PopoverEditMatTableFlexExample.decorators = [
    { type: Component, args: [{
                selector: 'popover-edit-mat-table-flex-example',
                styleUrls: ['popover-edit-mat-table-flex-example.css'],
                templateUrl: 'popover-edit-mat-table-flex-example.html',
            },] },
];
/** @nocollapse */ PopoverEditMatTableFlexExample.ɵfac = function PopoverEditMatTableFlexExample_Factory(t) { return new (t || PopoverEditMatTableFlexExample)(); };
/** @nocollapse */ PopoverEditMatTableFlexExample.ɵcmp = ɵɵdefineComponent({ type: PopoverEditMatTableFlexExample, selectors: [["popover-edit-mat-table-flex-example"]], decls: 17, vars: 3, consts: [["editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["matColumnDef", "position"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], [3, "matPopoverEdit", 4, "matCellDef"], ["matColumnDef", "weight"], [3, "matPopoverEdit", "matPopoverEditContext", 4, "matCellDef"], ["matColumnDef", "symbol"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["matEditLens", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", ""], ["matInput", "", "type", "number", "name", "weight", "required", "", 3, "ngModel"], [3, "matPopoverEdit"], ["nameEdit", ""], [4, "matRowHoverContent"], ["mat-edit-title", ""], ["matInput", "", "name", "name", "required", "", 3, "ngModel"], ["mat-edit-actions", ""], ["mat-button", "", "type", "submit"], ["mat-button", "", "matEditRevert", ""], ["mat-button", "", "matEditClose", ""], ["mat-icon-button", "", "matEditOpen", ""], [3, "matPopoverEdit", "matPopoverEditContext"]], template: function PopoverEditMatTableFlexExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-table", 0);
        ɵɵtemplate(1, PopoverEditMatTableFlexExample_ng_template_1_Template, 6, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵelementContainerStart(3, 2);
        ɵɵtemplate(4, PopoverEditMatTableFlexExample_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 3);
        ɵɵtemplate(5, PopoverEditMatTableFlexExample_mat_cell_5_Template, 2, 1, "mat-cell", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(6, 5);
        ɵɵtemplate(7, PopoverEditMatTableFlexExample_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 3);
        ɵɵtemplate(8, PopoverEditMatTableFlexExample_mat_cell_8_Template, 5, 2, "mat-cell", 6);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(9, 7);
        ɵɵtemplate(10, PopoverEditMatTableFlexExample_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 3);
        ɵɵtemplate(11, PopoverEditMatTableFlexExample_mat_cell_11_Template, 3, 3, "mat-cell", 8);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(12, 9);
        ɵɵtemplate(13, PopoverEditMatTableFlexExample_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 3);
        ɵɵtemplate(14, PopoverEditMatTableFlexExample_mat_cell_14_Template, 2, 1, "mat-cell", 4);
        ɵɵelementContainerEnd();
        ɵɵtemplate(15, PopoverEditMatTableFlexExample_mat_header_row_15_Template, 1, 0, "mat-header-row", 10);
        ɵɵtemplate(16, PopoverEditMatTableFlexExample_mat_row_16_Template, 1, 0, "mat-row", 11);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(15);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [MatTable, CdkEditable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatEditLens, MatFormField, MatInput, NumberValueAccessor, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, MatHeaderCell, MatCell, MatPopoverEdit, MatRowHoverContent, MatButton, MatEditRevert, MatEditClose, MatEditOpen, MatIcon, MatHeaderRow, MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PopoverEditMatTableFlexExample, [{
        type: Component,
        args: [{
                selector: 'popover-edit-mat-table-flex-example',
                styleUrls: ['popover-edit-mat-table-flex-example.css'],
                templateUrl: 'popover-edit-mat-table-flex-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    PopoverEditMatTableFlexExample.prototype.displayedColumns;
    /** @type {?} */
    PopoverEditMatTableFlexExample.prototype.dataSource;
    /** @type {?} */
    PopoverEditMatTableFlexExample.prototype.preservedNameValues;
    /** @type {?} */
    PopoverEditMatTableFlexExample.prototype.preservedWeightValues;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class ExampleDataSource$1 extends DataSource {
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
    ExampleDataSource$1.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function PopoverEditMatTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r152 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "form", 12, 13);
    ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r152); const element_r149 = ctx.$implicit; const _r150 = ɵɵreference(2); const ctx_r151 = ɵɵnextContext(); return ctx_r151.onSubmitWeight(element_r149, _r150); });
    ɵɵlistener("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r152); const element_r149 = ctx.$implicit; const ctx_r153 = ɵɵnextContext(); return ctx_r153.weightValues.for(element_r149).value = $event; });
    ɵɵelementStart(3, "div", 14);
    ɵɵelementStart(4, "mat-form-field");
    ɵɵelement(5, "input", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r149 = ctx.$implicit;
    const ctx_r138 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("matEditLensPreservedFormValue", ctx_r138.weightValues.for(element_r149).value);
    ɵɵadvance(4);
    ɵɵproperty("ngModel", element_r149.weight);
} }
function PopoverEditMatTableExample_th_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 16);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_5_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r158 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 19);
    ɵɵlistener("click", function PopoverEditMatTableExample_td_5_span_2_Template_button_click_1_listener($event) { ɵɵrestoreView(_r158); const element_r154 = ɵɵnextContext().$implicit; const ctx_r156 = ɵɵnextContext(); return ctx_r156.goodJob(element_r154); });
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "thumb_up");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 19);
    ɵɵlistener("click", function PopoverEditMatTableExample_td_5_span_2_Template_button_click_4_listener($event) { ɵɵrestoreView(_r158); const element_r154 = ɵɵnextContext().$implicit; const ctx_r159 = ɵɵnextContext(); return ctx_r159.badJob(element_r154); });
    ɵɵelementStart(5, "mat-icon");
    ɵɵtext(6, "thumb_down");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 17);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditMatTableExample_td_5_span_2_Template, 7, 0, "span", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r154 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r154.position, " ");
} }
function PopoverEditMatTableExample_th_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 16);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r168 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "form", 12, 13);
    ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_8_ng_template_2_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r168); const _r165 = ɵɵreference(2); const element_r161 = ɵɵnextContext().$implicit; const ctx_r166 = ɵɵnextContext(); return ctx_r166.onSubmitName(element_r161, _r165); });
    ɵɵlistener("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_8_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r168); const element_r161 = ɵɵnextContext().$implicit; const ctx_r169 = ɵɵnextContext(); return ctx_r169.nameValues.for(element_r161).value = $event; });
    ɵɵelementStart(3, "h2", 22);
    ɵɵtext(4, "Name");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 14);
    ɵɵelementStart(6, "mat-form-field");
    ɵɵelement(7, "input", 23);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 24);
    ɵɵelementStart(9, "button", 25);
    ɵɵtext(10, "Confirm");
    ɵɵelementEnd();
    ɵɵelementStart(11, "button", 26);
    ɵɵtext(12, "Revert");
    ɵɵelementEnd();
    ɵɵelementStart(13, "button", 27);
    ɵɵtext(14, "Close");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r161 = ɵɵnextContext().$implicit;
    const ctx_r163 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("matEditLensPreservedFormValue", ctx_r163.nameValues.for(element_r161).value);
    ɵɵadvance(6);
    ɵɵproperty("ngModel", element_r161.name);
} }
function PopoverEditMatTableExample_td_8_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 28);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 20);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditMatTableExample_td_8_ng_template_2_Template, 15, 2, "ng-template", null, 21, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PopoverEditMatTableExample_td_8_span_4_Template, 4, 0, "span", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r161 = ctx.$implicit;
    const _r162 = ɵɵreference(3);
    ɵɵproperty("matPopoverEdit", _r162);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r161.name, " ");
} }
function PopoverEditMatTableExample_th_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 16);
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_11_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "button", 28);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 29);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditMatTableExample_td_11_span_2_Template, 4, 0, "span", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r172 = ctx.$implicit;
    ɵɵnextContext();
    const _r137 = ɵɵreference(2);
    ɵɵproperty("matPopoverEdit", _r137)("matPopoverEditContext", element_r172);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r172.weight, " ");
} }
function PopoverEditMatTableExample_th_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 16);
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function PopoverEditMatTableExample_td_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 17);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r174 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r174.symbol, " ");
} }
function PopoverEditMatTableExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 30);
} }
function PopoverEditMatTableExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 31);
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
class PopoverEditMatTableExample {
    /**
     * @param {?} _snackBar
     */
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource$2();
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
/** @nocollapse */ PopoverEditMatTableExample.ɵfac = function PopoverEditMatTableExample_Factory(t) { return new (t || PopoverEditMatTableExample)(ɵɵdirectiveInject(MatSnackBar)); };
/** @nocollapse */ PopoverEditMatTableExample.ɵcmp = ɵɵdefineComponent({ type: PopoverEditMatTableExample, selectors: [["popover-edit-mat-table-example"]], decls: 17, vars: 3, consts: [["mat-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", 3, "matPopoverEdit", 4, "matCellDef"], ["matColumnDef", "weight"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext", 4, "matCellDef"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matEditLens", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", ""], ["matInput", "", "type", "number", "name", "weight", "required", "", 3, "ngModel"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "matRowHoverContent"], ["mat-icon-button", "", 3, "click"], ["mat-cell", "", 3, "matPopoverEdit"], ["nameEdit", ""], ["mat-edit-title", ""], ["matInput", "", "name", "name", "required", "", 3, "ngModel"], ["mat-edit-actions", ""], ["mat-button", "", "type", "submit"], ["mat-button", "", "matEditRevert", ""], ["mat-button", "", "matEditClose", ""], ["mat-icon-button", "", "matEditOpen", ""], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext"], ["mat-header-row", ""], ["mat-row", ""]], template: function PopoverEditMatTableExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵtemplate(1, PopoverEditMatTableExample_ng_template_1_Template, 6, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵelementContainerStart(3, 2);
        ɵɵtemplate(4, PopoverEditMatTableExample_th_4_Template, 2, 0, "th", 3);
        ɵɵtemplate(5, PopoverEditMatTableExample_td_5_Template, 3, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(6, 5);
        ɵɵtemplate(7, PopoverEditMatTableExample_th_7_Template, 2, 0, "th", 3);
        ɵɵtemplate(8, PopoverEditMatTableExample_td_8_Template, 5, 2, "td", 6);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(9, 7);
        ɵɵtemplate(10, PopoverEditMatTableExample_th_10_Template, 2, 0, "th", 3);
        ɵɵtemplate(11, PopoverEditMatTableExample_td_11_Template, 3, 3, "td", 8);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(12, 9);
        ɵɵtemplate(13, PopoverEditMatTableExample_th_13_Template, 2, 0, "th", 3);
        ɵɵtemplate(14, PopoverEditMatTableExample_td_14_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵtemplate(15, PopoverEditMatTableExample_tr_15_Template, 1, 0, "tr", 10);
        ɵɵtemplate(16, PopoverEditMatTableExample_tr_16_Template, 1, 0, "tr", 11);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(15);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [MatTable, CdkEditable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatEditLens, MatFormField, MatInput, NumberValueAccessor, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, MatHeaderCell, MatCell, MatRowHoverContent, MatButton, MatIcon, MatPopoverEdit, MatEditRevert, MatEditClose, MatEditOpen, MatHeaderRow, MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 25%;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PopoverEditMatTableExample, [{
        type: Component,
        args: [{
                selector: 'popover-edit-mat-table-example',
                styleUrls: ['popover-edit-mat-table-example.css'],
                templateUrl: 'popover-edit-mat-table-example.html',
            }]
    }], function () { return [{ type: MatSnackBar }]; }, null); })();
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
class ExampleDataSource$2 extends DataSource {
    constructor() {
        super(...arguments);
        /**
         * Stream of data that is provided to the table.
         */
        this.data = new BehaviorSubject(ELEMENT_DATA$1);
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
    ExampleDataSource$2.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function PopoverEditTabOutMatTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r191 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "form", 12, 13);
    ɵɵlistener("ngSubmit", function PopoverEditTabOutMatTableExample_ng_template_1_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r191); const element_r188 = ctx.$implicit; const _r189 = ɵɵreference(2); const ctx_r190 = ɵɵnextContext(); return ctx_r190.onSubmitWeight(element_r188, _r189); });
    ɵɵlistener("matEditLensPreservedFormValueChange", function PopoverEditTabOutMatTableExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r191); const element_r188 = ctx.$implicit; const ctx_r192 = ɵɵnextContext(); return ctx_r192.preservedWeightValues.set(element_r188, $event); });
    ɵɵelementStart(3, "div", 14);
    ɵɵelementStart(4, "mat-form-field");
    ɵɵelement(5, "input", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r188 = ctx.$implicit;
    const ctx_r177 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("matEditLensPreservedFormValue", ctx_r177.preservedWeightValues.get(element_r188));
    ɵɵadvance(4);
    ɵɵproperty("ngModel", element_r188.weight);
} }
function PopoverEditTabOutMatTableExample_th_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 16);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function PopoverEditTabOutMatTableExample_td_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 17);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r193 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r193.position, " ");
} }
function PopoverEditTabOutMatTableExample_th_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 16);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function PopoverEditTabOutMatTableExample_td_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r201 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "form", 12, 13);
    ɵɵlistener("ngSubmit", function PopoverEditTabOutMatTableExample_td_8_ng_template_2_Template_form_ngSubmit_1_listener($event) { ɵɵrestoreView(_r201); const _r198 = ɵɵreference(2); const element_r194 = ɵɵnextContext().$implicit; const ctx_r199 = ɵɵnextContext(); return ctx_r199.onSubmitName(element_r194, _r198); });
    ɵɵlistener("matEditLensPreservedFormValueChange", function PopoverEditTabOutMatTableExample_td_8_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { ɵɵrestoreView(_r201); const element_r194 = ɵɵnextContext().$implicit; const ctx_r202 = ɵɵnextContext(); return ctx_r202.preservedNameValues.set(element_r194, $event); });
    ɵɵelementStart(3, "div", 14);
    ɵɵelementStart(4, "mat-form-field");
    ɵɵelement(5, "input", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r194 = ɵɵnextContext().$implicit;
    const ctx_r196 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("matEditLensPreservedFormValue", ctx_r196.preservedNameValues.get(element_r194));
    ɵɵadvance(4);
    ɵɵproperty("ngModel", element_r194.name);
} }
function PopoverEditTabOutMatTableExample_td_8_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PopoverEditTabOutMatTableExample_td_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 18);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditTabOutMatTableExample_td_8_ng_template_2_Template, 6, 2, "ng-template", null, 19, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PopoverEditTabOutMatTableExample_td_8_span_4_Template, 3, 0, "span", 20);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r194 = ctx.$implicit;
    const _r195 = ɵɵreference(3);
    ɵɵproperty("matPopoverEdit", _r195);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r194.name, " ");
} }
function PopoverEditTabOutMatTableExample_th_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 16);
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function PopoverEditTabOutMatTableExample_td_11_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PopoverEditTabOutMatTableExample_td_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 22);
    ɵɵtext(1);
    ɵɵtemplate(2, PopoverEditTabOutMatTableExample_td_11_span_2_Template, 3, 0, "span", 20);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r205 = ctx.$implicit;
    ɵɵnextContext();
    const _r176 = ɵɵreference(2);
    ɵɵproperty("matPopoverEdit", _r176)("matPopoverEditContext", element_r205);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r205.weight, " ");
} }
function PopoverEditTabOutMatTableExample_th_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 16);
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function PopoverEditTabOutMatTableExample_td_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 17);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r207 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r207.symbol, " ");
} }
function PopoverEditTabOutMatTableExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 23);
} }
function PopoverEditTabOutMatTableExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 24);
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
 * \@title Material Popover Edit with spreadsheet-like configuration on a Material data-table
 */
class PopoverEditTabOutMatTableExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource$3();
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
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
}
PopoverEditTabOutMatTableExample.decorators = [
    { type: Component, args: [{
                selector: 'popover-edit-tab-out-mat-table-example',
                styleUrls: ['popover-edit-tab-out-mat-table-example.css'],
                templateUrl: 'popover-edit-tab-out-mat-table-example.html',
            },] },
];
/** @nocollapse */ PopoverEditTabOutMatTableExample.ɵfac = function PopoverEditTabOutMatTableExample_Factory(t) { return new (t || PopoverEditTabOutMatTableExample)(); };
/** @nocollapse */ PopoverEditTabOutMatTableExample.ɵcmp = ɵɵdefineComponent({ type: PopoverEditTabOutMatTableExample, selectors: [["popover-edit-tab-out-mat-table-example"]], decls: 17, vars: 3, consts: [["mat-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", "matPopoverEditTabOut", "", "matEditOpen", "", 3, "matPopoverEdit", 4, "matCellDef"], ["matColumnDef", "weight"], ["mat-cell", "", "matPopoverEditTabOut", "", "matEditOpen", "", 3, "matPopoverEdit", "matPopoverEditContext", 4, "matCellDef"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matEditLens", "", "matEditLensClickOutBehavior", "submit", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", ""], ["matInput", "", "type", "number", "name", "weight", "required", "", 3, "ngModel"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", "matPopoverEditTabOut", "", "matEditOpen", "", 3, "matPopoverEdit"], ["nameEdit", ""], [4, "matRowHoverContent"], ["matInput", "", "name", "name", "required", "", 3, "ngModel"], ["mat-cell", "", "matPopoverEditTabOut", "", "matEditOpen", "", 3, "matPopoverEdit", "matPopoverEditContext"], ["mat-header-row", ""], ["mat-row", ""]], template: function PopoverEditTabOutMatTableExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵtemplate(1, PopoverEditTabOutMatTableExample_ng_template_1_Template, 6, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵelementContainerStart(3, 2);
        ɵɵtemplate(4, PopoverEditTabOutMatTableExample_th_4_Template, 2, 0, "th", 3);
        ɵɵtemplate(5, PopoverEditTabOutMatTableExample_td_5_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(6, 5);
        ɵɵtemplate(7, PopoverEditTabOutMatTableExample_th_7_Template, 2, 0, "th", 3);
        ɵɵtemplate(8, PopoverEditTabOutMatTableExample_td_8_Template, 5, 2, "td", 6);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(9, 7);
        ɵɵtemplate(10, PopoverEditTabOutMatTableExample_th_10_Template, 2, 0, "th", 3);
        ɵɵtemplate(11, PopoverEditTabOutMatTableExample_td_11_Template, 3, 3, "td", 8);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(12, 9);
        ɵɵtemplate(13, PopoverEditTabOutMatTableExample_th_13_Template, 2, 0, "th", 3);
        ɵɵtemplate(14, PopoverEditTabOutMatTableExample_td_14_Template, 2, 1, "td", 4);
        ɵɵelementContainerEnd();
        ɵɵtemplate(15, PopoverEditTabOutMatTableExample_tr_15_Template, 1, 0, "tr", 10);
        ɵɵtemplate(16, PopoverEditTabOutMatTableExample_tr_16_Template, 1, 0, "tr", 11);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(15);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [MatTable, CdkEditable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatEditLens, MatFormField, MatInput, NumberValueAccessor, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, MatHeaderCell, MatCell, MatEditOpen, MatPopoverEditTabOut, MatRowHoverContent, MatIcon, MatHeaderRow, MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 25%;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PopoverEditTabOutMatTableExample, [{
        type: Component,
        args: [{
                selector: 'popover-edit-tab-out-mat-table-example',
                styleUrls: ['popover-edit-tab-out-mat-table-example.css'],
                templateUrl: 'popover-edit-tab-out-mat-table-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    PopoverEditTabOutMatTableExample.prototype.displayedColumns;
    /** @type {?} */
    PopoverEditTabOutMatTableExample.prototype.dataSource;
    /** @type {?} */
    PopoverEditTabOutMatTableExample.prototype.preservedNameValues;
    /** @type {?} */
    PopoverEditTabOutMatTableExample.prototype.preservedWeightValues;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class ExampleDataSource$3 extends DataSource {
    constructor() {
        super(...arguments);
        /**
         * Stream of data that is provided to the table.
         */
        this.data = new BehaviorSubject(ELEMENT_DATA$2);
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
    ExampleDataSource$3.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    PopoverEditCellSpanMatTableExample,
    PopoverEditMatTableExample,
    PopoverEditMatTableFlexExample,
    PopoverEditTabOutMatTableExample,
];
class PopoverEditExamplesModule {
}
PopoverEditExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MatButtonModule,
                    MatIconModule,
                    MatInputModule,
                    MatPopoverEditModule,
                    MatSnackBarModule,
                    MatTableModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ PopoverEditExamplesModule.ɵmod = ɵɵdefineNgModule({ type: PopoverEditExamplesModule });
/** @nocollapse */ PopoverEditExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function PopoverEditExamplesModule_Factory(t) { return new (t || PopoverEditExamplesModule)(); }, imports: [[
            MatButtonModule,
            MatIconModule,
            MatInputModule,
            MatPopoverEditModule,
            MatSnackBarModule,
            MatTableModule,
            FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PopoverEditExamplesModule, { declarations: [PopoverEditCellSpanMatTableExample,
        PopoverEditMatTableExample,
        PopoverEditMatTableFlexExample,
        PopoverEditTabOutMatTableExample], imports: [MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatPopoverEditModule,
        MatSnackBarModule,
        MatTableModule,
        FormsModule], exports: [PopoverEditCellSpanMatTableExample,
        PopoverEditMatTableExample,
        PopoverEditMatTableFlexExample,
        PopoverEditTabOutMatTableExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PopoverEditExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatIconModule,
                    MatInputModule,
                    MatPopoverEditModule,
                    MatSnackBarModule,
                    MatTableModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { PopoverEditCellSpanMatTableExample, PopoverEditExamplesModule, PopoverEditMatTableExample, PopoverEditMatTableFlexExample, PopoverEditTabOutMatTableExample };
//# sourceMappingURL=popover-edit.js.map
