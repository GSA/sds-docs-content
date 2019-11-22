/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sort";
import * as i2 from "@angular/common";
function SortOverviewExample_tr_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dessert_r228 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dessert_r228.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dessert_r228.calories);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dessert_r228.fat);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dessert_r228.carbs);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dessert_r228.protein);
} }
/**
 * @record
 */
export function Dessert() { }
if (false) {
    /** @type {?} */
    Dessert.prototype.calories;
    /** @type {?} */
    Dessert.prototype.carbs;
    /** @type {?} */
    Dessert.prototype.fat;
    /** @type {?} */
    Dessert.prototype.name;
    /** @type {?} */
    Dessert.prototype.protein;
}
/**
 * \@title Sorting overview
 */
export class SortOverviewExample {
    constructor() {
        this.desserts = [
            { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
            { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
            { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
            { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
            { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
        ];
        this.sortedData = this.desserts.slice();
    }
    /**
     * @param {?} sort
     * @return {?}
     */
    sortData(sort) {
        /** @type {?} */
        const data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            /** @type {?} */
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'calories': return compare(a.calories, b.calories, isAsc);
                case 'fat': return compare(a.fat, b.fat, isAsc);
                case 'carbs': return compare(a.carbs, b.carbs, isAsc);
                case 'protein': return compare(a.protein, b.protein, isAsc);
                default: return 0;
            }
        }));
    }
}
SortOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'sort-overview-example',
                templateUrl: 'sort-overview-example.html',
                styleUrls: ['sort-overview-example.css'],
            },] },
];
/** @nocollapse */
SortOverviewExample.ctorParameters = () => [];
/** @nocollapse */ SortOverviewExample.ɵfac = function SortOverviewExample_Factory(t) { return new (t || SortOverviewExample)(); };
/** @nocollapse */ SortOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: SortOverviewExample, selectors: [["sort-overview-example"]], decls: 13, vars: 1, consts: [["matSort", "", 3, "matSortChange"], ["mat-sort-header", "name"], ["mat-sort-header", "calories"], ["mat-sort-header", "fat"], ["mat-sort-header", "carbs"], ["mat-sort-header", "protein"], [4, "ngFor", "ngForOf"]], template: function SortOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵlistener("matSortChange", function SortOverviewExample_Template_table_matSortChange_0_listener($event) { return ctx.sortData($event); });
        i0.ɵɵelementStart(1, "tr");
        i0.ɵɵelementStart(2, "th", 1);
        i0.ɵɵtext(3, "Dessert (100g)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "th", 2);
        i0.ɵɵtext(5, "Calories");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "th", 3);
        i0.ɵɵtext(7, "Fat (g)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "th", 4);
        i0.ɵɵtext(9, "Carbs (g)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "th", 5);
        i0.ɵɵtext(11, "Protein (g)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, SortOverviewExample_tr_12_Template, 11, 5, "tr", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("ngForOf", ctx.sortedData);
    } }, directives: [i1.MatSort, i1.MatSortHeader, i2.NgForOf], styles: [".mat-sort-header-container[_ngcontent-%COMP%] {\n  align-items: center;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SortOverviewExample, [{
        type: Component,
        args: [{
                selector: 'sort-overview-example',
                templateUrl: 'sort-overview-example.html',
                styleUrls: ['sort-overview-example.css'],
            }]
    }], function () { return []; }, null); })();
if (false) {
    /** @type {?} */
    SortOverviewExample.prototype.desserts;
    /** @type {?} */
    SortOverviewExample.prototype.sortedData;
}
/**
 * @param {?} a
 * @param {?} b
 * @param {?} isAsc
 * @return {?}
 */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc29ydC9zb3J0LW92ZXJ2aWV3L3NvcnQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NvcnQvc29ydC1vdmVydmlldy9zb3J0LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNTdEMsMEJBQ0U7SUFBQSwwQkFBSTtJQUFBLFlBQWdCO0lBQUEsaUJBQUs7SUFDekIsMEJBQUk7SUFBQSxZQUFvQjtJQUFBLGlCQUFLO0lBQzdCLDBCQUFJO0lBQUEsWUFBZTtJQUFBLGlCQUFLO0lBQ3hCLDBCQUFJO0lBQUEsWUFBaUI7SUFBQSxpQkFBSztJQUMxQiwwQkFBSTtJQUFBLGFBQW1CO0lBQUEsaUJBQUs7SUFDOUIsaUJBQUs7OztJQUxDLGVBQWdCO0lBQWhCLHVDQUFnQjtJQUNoQixlQUFvQjtJQUFwQiwyQ0FBb0I7SUFDcEIsZUFBZTtJQUFmLHNDQUFlO0lBQ2YsZUFBaUI7SUFBakIsd0NBQWlCO0lBQ2pCLGVBQW1CO0lBQW5CLDBDQUFtQjs7Ozs7QURYM0IsNkJBTUM7OztJQUxDLDJCQUFpQjs7SUFDakIsd0JBQWM7O0lBQ2Qsc0JBQVk7O0lBQ1osdUJBQWE7O0lBQ2IsMEJBQWdCOzs7OztBQVdsQixNQUFNLE9BQU8sbUJBQW1CO0lBVzlCO1FBVkEsYUFBUSxHQUFjO1lBQ3BCLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FB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QUFLO1FBRUwscUVBQ0U7UUFNSixpQkFBUTs7UUFQRixnQkFBa0M7UUFBbEMsd0NBQWtDOztrRERVM0IsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUN6Qzs7OztJQUVDLHVDQU1FOztJQUVGLHlDQUFzQjs7Ozs7Ozs7QUEyQnhCLFNBQVMsT0FBTyxDQUFDLENBQWtCLEVBQUUsQ0FBa0IsRUFBRSxLQUFjO0lBQ3JFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcblxuZXhwb3J0IGludGVyZmFjZSBEZXNzZXJ0IHtcbiAgY2Fsb3JpZXM6IG51bWJlcjtcbiAgY2FyYnM6IG51bWJlcjtcbiAgZmF0OiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJvdGVpbjogbnVtYmVyO1xufVxuXG4vKipcbiAqIEB0aXRsZSBTb3J0aW5nIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvcnQtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc29ydC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc29ydC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTb3J0T3ZlcnZpZXdFeGFtcGxlIHtcbiAgZGVzc2VydHM6IERlc3NlcnRbXSA9IFtcbiAgICB7bmFtZTogJ0Zyb3plbiB5b2d1cnQnLCBjYWxvcmllczogMTU5LCBmYXQ6IDYsIGNhcmJzOiAyNCwgcHJvdGVpbjogNH0sXG4gICAge25hbWU6ICdJY2UgY3JlYW0gc2FuZHdpY2gnLCBjYWxvcmllczogMjM3LCBmYXQ6IDksIGNhcmJzOiAzNywgcHJvdGVpbjogNH0sXG4gICAge25hbWU6ICdFY2xhaXInLCBjYWxvcmllczogMjYyLCBmYXQ6IDE2LCBjYXJiczogMjQsIHByb3RlaW46IDZ9LFxuICAgIHtuYW1lOiAnQ3VwY2FrZScsIGNhbG9yaWVzOiAzMDUsIGZhdDogNCwgY2FyYnM6IDY3LCBwcm90ZWluOiA0fSxcbiAgICB7bmFtZTogJ0dpbmdlcmJyZWFkJywgY2Fsb3JpZXM6IDM1NiwgZmF0OiAxNiwgY2FyYnM6IDQ5LCBwcm90ZWluOiA0fSxcbiAgXTtcblxuICBzb3J0ZWREYXRhOiBEZXNzZXJ0W107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zb3J0ZWREYXRhID0gdGhpcy5kZXNzZXJ0cy5zbGljZSgpO1xuICB9XG5cbiAgc29ydERhdGEoc29ydDogU29ydCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRlc3NlcnRzLnNsaWNlKCk7XG4gICAgaWYgKCFzb3J0LmFjdGl2ZSB8fCBzb3J0LmRpcmVjdGlvbiA9PT0gJycpIHtcbiAgICAgIHRoaXMuc29ydGVkRGF0YSA9IGRhdGE7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zb3J0ZWREYXRhID0gZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBpc0FzYyA9IHNvcnQuZGlyZWN0aW9uID09PSAnYXNjJztcbiAgICAgIHN3aXRjaCAoc29ydC5hY3RpdmUpIHtcbiAgICAgICAgY2FzZSAnbmFtZSc6IHJldHVybiBjb21wYXJlKGEubmFtZSwgYi5uYW1lLCBpc0FzYyk7XG4gICAgICAgIGNhc2UgJ2NhbG9yaWVzJzogcmV0dXJuIGNvbXBhcmUoYS5jYWxvcmllcywgYi5jYWxvcmllcywgaXNBc2MpO1xuICAgICAgICBjYXNlICdmYXQnOiByZXR1cm4gY29tcGFyZShhLmZhdCwgYi5mYXQsIGlzQXNjKTtcbiAgICAgICAgY2FzZSAnY2FyYnMnOiByZXR1cm4gY29tcGFyZShhLmNhcmJzLCBiLmNhcmJzLCBpc0FzYyk7XG4gICAgICAgIGNhc2UgJ3Byb3RlaW4nOiByZXR1cm4gY29tcGFyZShhLnByb3RlaW4sIGIucHJvdGVpbiwgaXNBc2MpO1xuICAgICAgICBkZWZhdWx0OiByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wYXJlKGE6IG51bWJlciB8IHN0cmluZywgYjogbnVtYmVyIHwgc3RyaW5nLCBpc0FzYzogYm9vbGVhbikge1xuICByZXR1cm4gKGEgPCBiID8gLTEgOiAxKSAqIChpc0FzYyA/IDEgOiAtMSk7XG59XG4iLCI8dGFibGUgbWF0U29ydCAobWF0U29ydENoYW5nZSk9XCJzb3J0RGF0YSgkZXZlbnQpXCI+XG4gIDx0cj5cbiAgICA8dGggbWF0LXNvcnQtaGVhZGVyPVwibmFtZVwiPkRlc3NlcnQgKDEwMGcpPC90aD5cbiAgICA8dGggbWF0LXNvcnQtaGVhZGVyPVwiY2Fsb3JpZXNcIj5DYWxvcmllczwvdGg+XG4gICAgPHRoIG1hdC1zb3J0LWhlYWRlcj1cImZhdFwiPkZhdCAoZyk8L3RoPlxuICAgIDx0aCBtYXQtc29ydC1oZWFkZXI9XCJjYXJic1wiPkNhcmJzIChnKTwvdGg+XG4gICAgPHRoIG1hdC1zb3J0LWhlYWRlcj1cInByb3RlaW5cIj5Qcm90ZWluIChnKTwvdGg+XG4gIDwvdHI+XG5cbiAgPHRyICpuZ0Zvcj1cImxldCBkZXNzZXJ0IG9mIHNvcnRlZERhdGFcIj5cbiAgICA8dGQ+e3tkZXNzZXJ0Lm5hbWV9fTwvdGQ+XG4gICAgPHRkPnt7ZGVzc2VydC5jYWxvcmllc319PC90ZD5cbiAgICA8dGQ+e3tkZXNzZXJ0LmZhdH19PC90ZD5cbiAgICA8dGQ+e3tkZXNzZXJ0LmNhcmJzfX08L3RkPlxuICAgIDx0ZD57e2Rlc3NlcnQucHJvdGVpbn19PC90ZD5cbiAgPC90cj5cbjwvdGFibGU+XG4iXX0=