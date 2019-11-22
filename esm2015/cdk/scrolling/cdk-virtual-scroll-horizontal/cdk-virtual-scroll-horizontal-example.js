/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
function CdkVirtualScrollHorizontalExample_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r803 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r803);
} }
/**
 * \@title Horizontal virtual scroll
 */
export class CdkVirtualScrollHorizontalExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => `Item #${i}`));
    }
}
CdkVirtualScrollHorizontalExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-horizontal-example',
                styleUrls: ['cdk-virtual-scroll-horizontal-example.css'],
                templateUrl: 'cdk-virtual-scroll-horizontal-example.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */ CdkVirtualScrollHorizontalExample.ɵfac = function CdkVirtualScrollHorizontalExample_Factory(t) { return new (t || CdkVirtualScrollHorizontalExample)(); };
/** @nocollapse */ CdkVirtualScrollHorizontalExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkVirtualScrollHorizontalExample, selectors: [["cdk-virtual-scroll-horizontal-example"]], decls: 3, vars: 1, consts: [[1, "cdk-virtual-scroll-data-source-example"], ["orientation", "horizontal", "itemSize", "50", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollHorizontalExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "cdk-virtual-scroll-viewport", 1);
        i0.ɵɵtemplate(2, CdkVirtualScrollHorizontalExample_div_2_Template, 2, 1, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("cdkVirtualForOf", ctx.items);
    } }, directives: [i1.CdkVirtualScrollViewport, i1.CdkFixedSizeVirtualScroll, i1.CdkVirtualForOf], styles: [".cdk-virtual-scroll-data-source-example .example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.cdk-virtual-scroll-data-source-example .example-viewport .cdk-virtual-scroll-content-wrapper {\n  display: flex;\n  flex-direction: row;\n}\n\n.cdk-virtual-scroll-data-source-example .example-item {\n  width: 50px;\n  height: 100%;\n  writing-mode: vertical-lr;\n}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkVirtualScrollHorizontalExample, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-horizontal-example',
                styleUrls: ['cdk-virtual-scroll-horizontal-example.css'],
                templateUrl: 'cdk-virtual-scroll-horizontal-example.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkVirtualScrollHorizontalExample.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWhvcml6b250YWwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWhvcml6b250YWwvY2RrLXZpcnR1YWwtc2Nyb2xsLWhvcml6b250YWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWhvcml6b250YWwvY2RrLXZpcnR1YWwtc2Nyb2xsLWhvcml6b250YWwtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0lDRWhGLDhCQUE2RDtJQUFBLFlBQVE7SUFBQSxpQkFBTTs7O0lBQWQsZUFBUTtJQUFSLCtCQUFROzs7OztBRFF6RSxNQUFNLE9BQU8saUNBQWlDO0lBUDlDO1FBUUUsVUFBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBQyxDQUFDO0tBQ2xFOzs7WUFUQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztnQkFDakQsU0FBUyxFQUFFLENBQUMsMkNBQTJDLENBQUM7Z0JBQ3hELFdBQVcsRUFBRSw0Q0FBNEM7Z0JBQ3pELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0hBQ1ksaUNBQWlDO3NFQUFqQyxpQ0FBaUM7UUNWOUMsOEJBQ0U7UUFBQSxzREFDRTtRQUFBLGtGQUE2RDtRQUMvRCxpQkFBOEI7UUFDaEMsaUJBQU07O1FBRkcsZUFBa0M7UUFBbEMsMkNBQWtDOztrRERROUIsaUNBQWlDO2NBUDdDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUNBQXVDO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQztnQkFDeEQsV0FBVyxFQUFFLDRDQUE0QztnQkFDekQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O0lBRUMsa0RBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgSG9yaXpvbnRhbCB2aXJ0dWFsIHNjcm9sbCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLWhvcml6b250YWwtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstdmlydHVhbC1zY3JvbGwtaG9yaXpvbnRhbC1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay12aXJ0dWFsLXNjcm9sbC1ob3Jpem9udGFsLWV4YW1wbGUuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtWaXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbEV4YW1wbGUge1xuICBpdGVtcyA9IEFycmF5LmZyb20oe2xlbmd0aDogMTAwMDAwfSkubWFwKChfLCBpKSA9PiBgSXRlbSAjJHtpfWApO1xufVxuIiwiPGRpdiBjbGFzcz1cImNkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS1leGFtcGxlXCI+XG4gIDxjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgaXRlbVNpemU9XCI1MFwiIGNsYXNzPVwiZXhhbXBsZS12aWV3cG9ydFwiPlxuICAgIDxkaXYgKmNka1ZpcnR1YWxGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiIGNsYXNzPVwiZXhhbXBsZS1pdGVtXCI+e3tpdGVtfX08L2Rpdj5cbiAgPC9jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ+XG48L2Rpdj5cbiJdfQ==