/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/common";
function TableFooterRowExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Item ");
    i0.ɵɵelementEnd();
} }
function TableFooterRowExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r147 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", transaction_r147.item, " ");
} }
function TableFooterRowExample_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1, " Total ");
    i0.ɵɵelementEnd();
} }
function TableFooterRowExample_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Cost ");
    i0.ɵɵelementEnd();
} }
function TableFooterRowExample_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r148 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, transaction_r148.cost), " ");
} }
function TableFooterRowExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r143 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r143.getTotalCost()), " ");
} }
function TableFooterRowExample_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 12);
} }
function TableFooterRowExample_tr_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 13);
} }
function TableFooterRowExample_tr_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
/**
 * @record
 */
export function Transaction() { }
if (false) {
    /** @type {?} */
    Transaction.prototype.item;
    /** @type {?} */
    Transaction.prototype.cost;
}
/**
 * \@title Footer row table
 */
export class TableFooterRowExample {
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
/** @nocollapse */ TableFooterRowExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableFooterRowExample, selectors: [["table-footer-row-example"]], decls: 12, vars: 4, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "cost"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function TableFooterRowExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableFooterRowExample_th_2_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(3, TableFooterRowExample_td_3_Template, 2, 1, "td", 3);
        i0.ɵɵtemplate(4, TableFooterRowExample_td_4_Template, 2, 0, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(5, 5);
        i0.ɵɵtemplate(6, TableFooterRowExample_th_6_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(7, TableFooterRowExample_td_7_Template, 3, 3, "td", 3);
        i0.ɵɵtemplate(8, TableFooterRowExample_td_8_Template, 3, 3, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(9, TableFooterRowExample_tr_9_Template, 1, 0, "tr", 6);
        i0.ɵɵtemplate(10, TableFooterRowExample_tr_10_Template, 1, 0, "tr", 7);
        i0.ɵɵtemplate(11, TableFooterRowExample_tr_11_Template, 1, 0, "tr", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.transactions);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matFooterRowDef", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatFooterCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatFooterRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatFooterCell, i1.MatHeaderRow, i1.MatRow, i1.MatFooterRow], pipes: [i2.CurrencyPipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.mat-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableFooterRowExample, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZm9vdGVyLXJvdy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtZm9vdGVyLXJvdy90YWJsZS1mb290ZXItcm93LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1mb290ZXItcm93L3RhYmxlLWZvb3Rlci1yb3ctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0dwQyw2QkFBdUM7SUFBQSxzQkFBSztJQUFBLGlCQUFLOzs7SUFDakQsOEJBQTRDO0lBQUEsWUFBcUI7SUFBQSxpQkFBSzs7O0lBQTFCLGVBQXFCO0lBQXJCLHNEQUFxQjs7O0lBQ2pFLDhCQUF1QztJQUFBLHVCQUFNO0lBQUEsaUJBQUs7OztJQUtsRCw2QkFBdUM7SUFBQSxzQkFBSztJQUFBLGlCQUFLOzs7SUFDakQsOEJBQTRDO0lBQUEsWUFBZ0M7O0lBQUEsaUJBQUs7OztJQUFyQyxlQUFnQztJQUFoQyw0RUFBZ0M7OztJQUM1RSw4QkFBdUM7SUFBQSxZQUE4Qjs7SUFBQSxpQkFBSzs7O0lBQW5DLGVBQThCO0lBQTlCLDhFQUE4Qjs7O0lBR3ZFLHlCQUE0RDs7O0lBQzVELHlCQUFrRTs7O0lBQ2xFLHlCQUE0RDs7Ozs7QURmOUQsaUNBR0M7OztJQUZDLDJCQUFhOztJQUNiLDJCQUFhOzs7OztBQVdmLE1BQU0sT0FBTyxxQkFBcUI7SUFMbEM7UUFNRSxxQkFBZ0IsR0FBYSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QyxpQkFBWSxHQUFrQjtZQUM1QixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUN4QixFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUMxQixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUM1QixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztZQUMxQixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztTQUM5QixDQUFDO0tBTUg7Ozs7O0lBSEMsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDM0MsV0FBVyxFQUFFLCtCQUErQjthQUM3Qzs7MEZBQ1kscUJBQXFCOzBEQUFyQixxQkFBcUI7UUNmbEMsZ0NBQ0U7UUFDQSxnQ0FDRTtRQUFBLG9FQUF1QztRQUN2QyxvRUFBNEM7UUFDNUMsb0VBQXVDO1FBQ3pDLDBCQUFlO1FBR2YsZ0NBQ0U7UUFBQSxvRUFBdUM7UUFDdkMsb0VBQTRDO1FBQzVDLG9FQUF1QztRQUN6QywwQkFBZTtRQUVmLG9FQUF1RDtRQUN2RCxzRUFBNkQ7UUFDN0Qsc0VBQXVEO1FBQ3pELGlCQUFROztRQWxCUyw2Q0FBMkI7UUFldkIsZUFBbUM7UUFBbkMsc0RBQW1DO1FBQzFDLGVBQWdEO1FBQWhELHVEQUFnRDtRQUN6QyxlQUFtQztRQUFuQyxzREFBbUM7O2tEREYzQyxxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2dCQUMzQyxXQUFXLEVBQUUsK0JBQStCO2FBQzdDOzs7O0lBRUMsaURBQThDOztJQUM5Qyw2Q0FPRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2FjdGlvbiB7XG4gIGl0ZW06IHN0cmluZztcbiAgY29zdDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEB0aXRsZSBGb290ZXIgcm93IHRhYmxlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLWZvb3Rlci1yb3ctZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWyd0YWJsZS1mb290ZXItcm93LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtZm9vdGVyLXJvdy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUZvb3RlclJvd0V4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnaXRlbScsICdjb3N0J107XG4gIHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXSA9IFtcbiAgICB7aXRlbTogJ0JlYWNoIGJhbGwnLCBjb3N0OiA0fSxcbiAgICB7aXRlbTogJ1Rvd2VsJywgY29zdDogNX0sXG4gICAge2l0ZW06ICdGcmlzYmVlJywgY29zdDogMn0sXG4gICAge2l0ZW06ICdTdW5zY3JlZW4nLCBjb3N0OiA0fSxcbiAgICB7aXRlbTogJ0Nvb2xlcicsIGNvc3Q6IDI1fSxcbiAgICB7aXRlbTogJ1N3aW0gc3VpdCcsIGNvc3Q6IDE1fSxcbiAgXTtcblxuICAvKiogR2V0cyB0aGUgdG90YWwgY29zdCBvZiBhbGwgdHJhbnNhY3Rpb25zLiAqL1xuICBnZXRUb3RhbENvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNhY3Rpb25zLm1hcCh0ID0+IHQuY29zdCkucmVkdWNlKChhY2MsIHZhbHVlKSA9PiBhY2MgKyB2YWx1ZSwgMCk7XG4gIH1cbn1cbiIsIjx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwidHJhbnNhY3Rpb25zXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG4gIDwhLS0gSXRlbSBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiaXRlbVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IEl0ZW0gPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgdHJhbnNhY3Rpb25cIj4ge3t0cmFuc2FjdGlvbi5pdGVtfX0gPC90ZD5cbiAgICA8dGQgbWF0LWZvb3Rlci1jZWxsICptYXRGb290ZXJDZWxsRGVmPiBUb3RhbCA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIENvc3QgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImNvc3RcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBDb3N0IDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHRyYW5zYWN0aW9uXCI+IHt7dHJhbnNhY3Rpb24uY29zdCB8IGN1cnJlbmN5fX0gPC90ZD5cbiAgICA8dGQgbWF0LWZvb3Rlci1jZWxsICptYXRGb290ZXJDZWxsRGVmPiB7e2dldFRvdGFsQ29zdCgpIHwgY3VycmVuY3l9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuICA8dHIgbWF0LWZvb3Rlci1yb3cgKm1hdEZvb3RlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuPC90YWJsZT5cbiJdfQ==