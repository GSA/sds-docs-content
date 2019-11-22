/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
import * as i2 from "@angular/common";
function CdkDragDropDisabledSortingExample_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r736 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r736);
} }
function CdkDragDropDisabledSortingExample_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r737 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r737);
} }
/**
 * \@title Drag&Drop disabled sorting
 */
export class CdkDragDropDisabledSortingExample {
    constructor() {
        this.items = [
            'Carrots',
            'Tomatoes',
            'Onions',
            'Apples',
            'Avocados'
        ];
        this.basket = [
            'Oranges',
            'Bananas',
            'Cucumbers'
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
}
CdkDragDropDisabledSortingExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-disabled-sorting-example',
                templateUrl: 'cdk-drag-drop-disabled-sorting-example.html',
                styleUrls: ['cdk-drag-drop-disabled-sorting-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropDisabledSortingExample.ɵfac = function CdkDragDropDisabledSortingExample_Factory(t) { return new (t || CdkDragDropDisabledSortingExample)(); };
/** @nocollapse */ CdkDragDropDisabledSortingExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropDisabledSortingExample, selectors: [["cdk-drag-drop-disabled-sorting-example"]], decls: 11, vars: 4, consts: [["cdkDropListGroup", ""], [1, "example-container"], ["cdkDropList", "", "cdkDropListSortingDisabled", "", 1, "example-list", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListData", "cdkDropListDropped"], ["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropDisabledSortingExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "h2");
        i0.ɵɵtext(3, "Available items");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 2);
        i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropDisabledSortingExample_Template_div_cdkDropListDropped_4_listener($event) { return ctx.drop($event); });
        i0.ɵɵtemplate(5, CdkDragDropDisabledSortingExample_div_5_Template, 2, 1, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 1);
        i0.ɵɵelementStart(7, "h2");
        i0.ɵɵtext(8, "Shopping basket");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 4);
        i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropDisabledSortingExample_Template_div_cdkDropListDropped_9_listener($event) { return ctx.drop($event); });
        i0.ɵɵtemplate(10, CdkDragDropDisabledSortingExample_div_10_Template, 2, 1, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("cdkDropListData", ctx.items);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.items);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("cdkDropListData", ctx.basket);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.basket);
    } }, directives: [i1.CdkDropListGroup, i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropDisabledSortingExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-disabled-sorting-example',
                templateUrl: 'cdk-drag-drop-disabled-sorting-example.html',
                styleUrls: ['cdk-drag-drop-disabled-sorting-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkDragDropDisabledSortingExample.prototype.items;
    /** @type {?} */
    CdkDragDropDisabledSortingExample.prototype.basket;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1zb3J0aW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtc29ydGluZy9jZGstZHJhZy1kcm9wLWRpc2FibGVkLXNvcnRpbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1zb3J0aW5nL2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtc29ydGluZy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFjLGVBQWUsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7OztJQ1NqRiw4QkFBNEQ7SUFBQSxZQUFRO0lBQUEsaUJBQU07OztJQUFkLGVBQVE7SUFBUiwrQkFBUTs7O0lBWXBFLDhCQUE2RDtJQUFBLFlBQVE7SUFBQSxpQkFBTTs7O0lBQWQsZUFBUTtJQUFSLCtCQUFROzs7OztBRFgzRSxNQUFNLE9BQU8saUNBQWlDO0lBTDlDO1FBTUUsVUFBSyxHQUFHO1lBQ04sU0FBUztZQUNULFVBQVU7WUFDVixRQUFRO1lBQ1IsUUFBUTtZQUNSLFVBQVU7U0FDWCxDQUFDO1FBRUYsV0FBTSxHQUFHO1lBQ1AsU0FBUztZQUNULFNBQVM7WUFDVCxXQUFXO1NBQ1osQ0FBQztLQVlIOzs7OztJQVZDLElBQUksQ0FBQyxLQUE0QjtRQUMvQixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsS0FBSyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQy9DLGVBQWUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRjthQUFNO1lBQ0wsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFDNUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQ3BCLEtBQUssQ0FBQyxhQUFhLEVBQ25CLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7OztZQTdCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdDQUF3QztnQkFDbEQsV0FBVyxFQUFFLDZDQUE2QztnQkFDMUQsU0FBUyxFQUFFLENBQUMsNENBQTRDLENBQUM7YUFDMUQ7O2tIQUNZLGlDQUFpQztzRUFBakMsaUNBQWlDO1FDWDlDLDhCQUNFO1FBQUEsOEJBQ0U7UUFBQSwwQkFBSTtRQUFBLCtCQUFlO1FBQUEsaUJBQUs7UUFFeEIsOEJBTUU7UUFEQSwySUFBc0IsZ0JBQVksSUFBQztRQUNuQyxrRkFBNEQ7UUFDOUQsaUJBQU07UUFDUixpQkFBTTtRQUVOLDhCQUNFO1FBQUEsMEJBQUk7UUFBQSwrQkFBZTtRQUFBLGlCQUFLO1FBRXhCLDhCQUtFO1FBREEsMklBQXNCLGdCQUFZLElBQUM7UUFDbkMsb0ZBQTZEO1FBQy9ELGlCQUFNO1FBQ1IsaUJBQU07UUFDUixpQkFBTTs7UUFuQkEsZUFBeUI7UUFBekIsMkNBQXlCO1FBSUEsZUFBMEI7UUFBMUIsbUNBQTBCO1FBU25ELGVBQTBCO1FBQTFCLDRDQUEwQjtRQUdELGVBQTJCO1FBQTNCLG9DQUEyQjs7a0REWDdDLGlDQUFpQztjQUw3QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdDQUF3QztnQkFDbEQsV0FBVyxFQUFFLDZDQUE2QztnQkFDMUQsU0FBUyxFQUFFLENBQUMsNENBQTRDLENBQUM7YUFDMUQ7Ozs7SUFFQyxrREFNRTs7SUFFRixtREFJRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSwgdHJhbnNmZXJBcnJheUl0ZW19IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG4vKipcbiAqIEB0aXRsZSBEcmFnJkRyb3AgZGlzYWJsZWQgc29ydGluZ1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLWRpc2FibGVkLXNvcnRpbmctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1zb3J0aW5nLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWRpc2FibGVkLXNvcnRpbmctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BEaXNhYmxlZFNvcnRpbmdFeGFtcGxlIHtcbiAgaXRlbXMgPSBbXG4gICAgJ0NhcnJvdHMnLFxuICAgICdUb21hdG9lcycsXG4gICAgJ09uaW9ucycsXG4gICAgJ0FwcGxlcycsXG4gICAgJ0F2b2NhZG9zJ1xuICBdO1xuXG4gIGJhc2tldCA9IFtcbiAgICAnT3JhbmdlcycsXG4gICAgJ0JhbmFuYXMnLFxuICAgICdDdWN1bWJlcnMnXG4gIF07XG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XG4gICAgaWYgKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyID09PSBldmVudC5jb250YWluZXIpIHtcbiAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmZXJBcnJheUl0ZW0oZXZlbnQucHJldmlvdXNDb250YWluZXIuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmNvbnRhaW5lci5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmlvdXNJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNka0Ryb3BMaXN0R3JvdXA+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICAgIDxoMj5BdmFpbGFibGUgaXRlbXM8L2gyPlxuXG4gICAgPGRpdlxuICAgICAgY2RrRHJvcExpc3RcbiAgICAgIFtjZGtEcm9wTGlzdERhdGFdPVwiaXRlbXNcIlxuICAgICAgY2xhc3M9XCJleGFtcGxlLWxpc3RcIlxuICAgICAgY2RrRHJvcExpc3RTb3J0aW5nRGlzYWJsZWRcbiAgICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1ib3hcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiIGNka0RyYWc+e3tpdGVtfX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gICAgPGgyPlNob3BwaW5nIGJhc2tldDwvaDI+XG5cbiAgICA8ZGl2XG4gICAgICBjZGtEcm9wTGlzdFxuICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJiYXNrZXRcIlxuICAgICAgY2xhc3M9XCJleGFtcGxlLWxpc3RcIlxuICAgICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJveFwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGJhc2tldFwiIGNka0RyYWc+e3tpdGVtfX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==