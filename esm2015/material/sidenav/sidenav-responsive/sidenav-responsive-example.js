/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/toolbar";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
import * as i6 from "@angular/material/sidenav";
import * as i7 from "@angular/material/list";
function SidenavResponsiveExample_div_0_a_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const nav_r531 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(nav_r531);
} }
function SidenavResponsiveExample_div_0_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const content_r532 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(content_r532);
} }
function SidenavResponsiveExample_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r534 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "mat-toolbar", 3);
    i0.ɵɵelementStart(2, "button", 4);
    i0.ɵɵlistener("click", function SidenavResponsiveExample_div_0_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r534); const _r528 = i0.ɵɵreference(9); return _r528.toggle(); });
    i0.ɵɵelementStart(3, "mat-icon");
    i0.ɵɵtext(4, "menu");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h1", 5);
    i0.ɵɵtext(6, "Responsive App");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-sidenav-container", 6);
    i0.ɵɵelementStart(8, "mat-sidenav", 7, 8);
    i0.ɵɵelementStart(10, "mat-nav-list");
    i0.ɵɵtemplate(11, SidenavResponsiveExample_div_0_a_11_Template, 2, 1, "a", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "mat-sidenav-content");
    i0.ɵɵtemplate(13, SidenavResponsiveExample_div_0_p_13_Template, 2, 1, "p", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r526 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("example-is-mobile", ctx_r526.mobileQuery.matches);
    i0.ɵɵadvance(7);
    i0.ɵɵstyleProp("margin-top", ctx_r526.mobileQuery.matches ? 56 : 0, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("mode", ctx_r526.mobileQuery.matches ? "over" : "side")("fixedInViewport", ctx_r526.mobileQuery.matches);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r526.fillerNav);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r526.fillerContent);
} }
function SidenavResponsiveExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Please open on Stackblitz to see result");
    i0.ɵɵelementEnd();
} }
/**
 * \@title Responsive sidenav
 */
export class SidenavResponsiveExample {
    /**
     * @param {?} changeDetectorRef
     * @param {?} media
     */
    constructor(changeDetectorRef, media) {
        this.fillerNav = Array.from({ length: 50 }, (/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => `Nav Item ${i + 1}`));
        this.fillerContent = Array.from({ length: 50 }, (/**
         * @return {?}
         */
        () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`));
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some((/**
         * @param {?} h
         * @return {?}
         */
        h => h.test(window.location.host)));
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = (/**
         * @return {?}
         */
        () => changeDetectorRef.detectChanges());
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
SidenavResponsiveExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-responsive-example',
                templateUrl: 'sidenav-responsive-example.html',
                styleUrls: ['sidenav-responsive-example.css'],
            },] },
];
/** @nocollapse */
SidenavResponsiveExample.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: MediaMatcher }
];
/** @nocollapse */ SidenavResponsiveExample.ɵfac = function SidenavResponsiveExample_Factory(t) { return new (t || SidenavResponsiveExample)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.MediaMatcher)); };
/** @nocollapse */ SidenavResponsiveExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavResponsiveExample, selectors: [["sidenav-responsive-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 3, "example-is-mobile", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], ["color", "primary", 1, "example-toolbar"], ["mat-icon-button", "", 3, "click"], [1, "example-app-name"], [1, "example-sidenav-container"], ["fixedTopGap", "56", 3, "mode", "fixedInViewport"], ["snav", ""], ["mat-list-item", "", "routerLink", ".", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["mat-list-item", "", "routerLink", "."]], template: function SidenavResponsiveExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SidenavResponsiveExample_div_0_Template, 14, 6, "div", 0);
        i0.ɵɵtemplate(1, SidenavResponsiveExample_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.shouldRun);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.shouldRun);
    } }, directives: [i2.NgIf, i3.MatToolbar, i4.MatButton, i5.MatIcon, i6.MatSidenavContainer, i6.MatSidenav, i7.MatNavList, i2.NgForOf, i6.MatSidenavContent, i7.MatListItem], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-is-mobile[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  z-index: 2;\n}\n\nh1.example-app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n\n.example-is-mobile[_ngcontent-%COMP%]   .example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1 0 auto;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SidenavResponsiveExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-responsive-example',
                templateUrl: 'sidenav-responsive-example.html',
                styleUrls: ['sidenav-responsive-example.css'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.MediaMatcher }]; }, null); })();
if (false) {
    /** @type {?} */
    SidenavResponsiveExample.prototype.mobileQuery;
    /** @type {?} */
    SidenavResponsiveExample.prototype.fillerNav;
    /** @type {?} */
    SidenavResponsiveExample.prototype.fillerContent;
    /**
     * @type {?}
     * @private
     */
    SidenavResponsiveExample.prototype._mobileQueryListener;
    /** @type {?} */
    SidenavResponsiveExample.prototype.shouldRun;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1yZXNwb25zaXZlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtcmVzcG9uc2l2ZS9zaWRlbmF2LXJlc3BvbnNpdmUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1yZXNwb25zaXZlL3NpZGVuYXYtcmVzcG9uc2l2ZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFZLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0lDVTlELDZCQUE4RDtJQUFBLFlBQU87SUFBQSxpQkFBSTs7O0lBQVgsZUFBTztJQUFQLDhCQUFPOzs7SUFLdkUseUJBQXlDO0lBQUEsWUFBVztJQUFBLGlCQUFJOzs7SUFBZixlQUFXO0lBQVgsa0NBQVc7Ozs7SUFoQjFELDhCQUNFO0lBQUEsc0NBQ0U7SUFBQSxpQ0FBZ0Q7SUFBeEIsMktBQVMsY0FBYSxJQUFDO0lBQUMsZ0NBQVU7SUFBQSxvQkFBSTtJQUFBLGlCQUFXO0lBQUEsaUJBQVM7SUFDbEYsNkJBQTZCO0lBQUEsOEJBQWM7SUFBQSxpQkFBSztJQUNsRCxpQkFBYztJQUVkLGdEQUVFO0lBQUEseUNBRUU7SUFBQSxxQ0FDRTtJQUFBLDZFQUE4RDtJQUNoRSxpQkFBZTtJQUNqQixpQkFBYztJQUVkLDRDQUNFO0lBQUEsOEVBQXlDO0lBQzNDLGlCQUFzQjtJQUN4QixpQkFBd0I7SUFDMUIsaUJBQU07OztJQW5CeUIsaUVBQStDO0lBT3JELGVBQW1EO0lBQW5ELHlFQUFtRDtJQUNyRCxlQUE4QztJQUE5QyxxRUFBOEMsaURBQUE7SUFHN0IsZUFBNkI7SUFBN0IsNENBQTZCO0lBSzVELGVBQXFDO0lBQXJDLGdEQUFxQzs7O0lBSzlDLDJCQUF3QjtJQUFBLHVEQUF1QztJQUFBLGlCQUFNOzs7OztBRFpyRSxNQUFNLE9BQU8sd0JBQXdCOzs7OztJQWNuQyxZQUFZLGlCQUFvQyxFQUFFLEtBQW1CO1FBWHJFLGNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBQzs7Ozs7UUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFDLENBQUM7UUFFcEUsa0JBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBQzs7O1FBQUUsR0FBRyxFQUFFLENBQzFDOzs7OzhGQUl3RixFQUFDLENBQUM7UUFjOUYsY0FBUyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztRQVRoRyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsb0JBQW9COzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDN0QsQ0FBQzs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5Qzs7OztZQVBPLGlCQUFpQjtZQURqQixZQUFZOztnR0FTUCx3QkFBd0I7NkRBQXhCLHdCQUF3QjtRQ1RyQywwRUFDRTtRQW9CRix5RUFBd0I7O1FBckJ1RCxvQ0FBaUI7UUFxQjNGLGVBQWtCO1FBQWxCLHFDQUFrQjs7a0REWlYsd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5Qzs7OztJQUVDLCtDQUE0Qjs7SUFFNUIsNkNBQW9FOztJQUVwRSxpREFLOEY7Ozs7O0lBRTlGLHdEQUF5Qzs7SUFZekMsNkNBQWtHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZWRpYU1hdGNoZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIFJlc3BvbnNpdmUgc2lkZW5hdiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZW5hdi1yZXNwb25zaXZlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtcmVzcG9uc2l2ZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2lkZW5hdi1yZXNwb25zaXZlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZSZXNwb25zaXZlRXhhbXBsZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIG1vYmlsZVF1ZXJ5OiBNZWRpYVF1ZXJ5TGlzdDtcblxuICBmaWxsZXJOYXYgPSBBcnJheS5mcm9tKHtsZW5ndGg6IDUwfSwgKF8sIGkpID0+IGBOYXYgSXRlbSAke2kgKyAxfWApO1xuXG4gIGZpbGxlckNvbnRlbnQgPSBBcnJheS5mcm9tKHtsZW5ndGg6IDUwfSwgKCkgPT5cbiAgICAgIGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dFxuICAgICAgIGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvXG4gICAgICAgbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluXG4gICAgICAgdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0XG4gICAgICAgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5gKTtcblxuICBwcml2YXRlIF9tb2JpbGVRdWVyeUxpc3RlbmVyOiAoKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgbWVkaWE6IE1lZGlhTWF0Y2hlcikge1xuICAgIHRoaXMubW9iaWxlUXVlcnkgPSBtZWRpYS5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA2MDBweCknKTtcbiAgICB0aGlzLl9tb2JpbGVRdWVyeUxpc3RlbmVyID0gKCkgPT4gY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMubW9iaWxlUXVlcnkuYWRkTGlzdGVuZXIodGhpcy5fbW9iaWxlUXVlcnlMaXN0ZW5lcik7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm1vYmlsZVF1ZXJ5LnJlbW92ZUxpc3RlbmVyKHRoaXMuX21vYmlsZVF1ZXJ5TGlzdGVuZXIpO1xuICB9XG5cbiAgc2hvdWxkUnVuID0gWy8oXnxcXC4pcGxua3JcXC5jbyQvLCAvKF58XFwuKXN0YWNrYmxpdHpcXC5pbyQvXS5zb21lKGggPT4gaC50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ob3N0KSk7XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIiBbY2xhc3MuZXhhbXBsZS1pcy1tb2JpbGVdPVwibW9iaWxlUXVlcnkubWF0Y2hlc1wiICpuZ0lmPVwic2hvdWxkUnVuXCI+XG4gIDxtYXQtdG9vbGJhciBjb2xvcj1cInByaW1hcnlcIiBjbGFzcz1cImV4YW1wbGUtdG9vbGJhclwiPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJzbmF2LnRvZ2dsZSgpXCI+PG1hdC1pY29uPm1lbnU8L21hdC1pY29uPjwvYnV0dG9uPlxuICAgIDxoMSBjbGFzcz1cImV4YW1wbGUtYXBwLW5hbWVcIj5SZXNwb25zaXZlIEFwcDwvaDE+XG4gIDwvbWF0LXRvb2xiYXI+XG5cbiAgPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBjbGFzcz1cImV4YW1wbGUtc2lkZW5hdi1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS5tYXJnaW5Ub3AucHhdPVwibW9iaWxlUXVlcnkubWF0Y2hlcyA/IDU2IDogMFwiPlxuICAgIDxtYXQtc2lkZW5hdiAjc25hdiBbbW9kZV09XCJtb2JpbGVRdWVyeS5tYXRjaGVzID8gJ292ZXInIDogJ3NpZGUnXCJcbiAgICAgICAgICAgICAgICAgW2ZpeGVkSW5WaWV3cG9ydF09XCJtb2JpbGVRdWVyeS5tYXRjaGVzXCIgZml4ZWRUb3BHYXA9XCI1NlwiPlxuICAgICAgPG1hdC1uYXYtbGlzdD5cbiAgICAgICAgPGEgbWF0LWxpc3QtaXRlbSByb3V0ZXJMaW5rPVwiLlwiICpuZ0Zvcj1cImxldCBuYXYgb2YgZmlsbGVyTmF2XCI+e3tuYXZ9fTwvYT5cbiAgICAgIDwvbWF0LW5hdi1saXN0PlxuICAgIDwvbWF0LXNpZGVuYXY+XG5cbiAgICA8bWF0LXNpZGVuYXYtY29udGVudD5cbiAgICAgIDxwICpuZ0Zvcj1cImxldCBjb250ZW50IG9mIGZpbGxlckNvbnRlbnRcIj57e2NvbnRlbnR9fTwvcD5cbiAgICA8L21hdC1zaWRlbmF2LWNvbnRlbnQ+XG4gIDwvbWF0LXNpZGVuYXYtY29udGFpbmVyPlxuPC9kaXY+XG5cbjxkaXYgKm5nSWY9XCIhc2hvdWxkUnVuXCI+UGxlYXNlIG9wZW4gb24gU3RhY2tibGl0eiB0byBzZWUgcmVzdWx0PC9kaXY+XG4iXX0=