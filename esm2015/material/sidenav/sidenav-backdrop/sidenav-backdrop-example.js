/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/button";
/**
 * \@title Drawer with explicit backdrop setting
 */
export class SidenavBackdropExample {
}
SidenavBackdropExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-backdrop-example',
                templateUrl: 'sidenav-backdrop-example.html',
                styleUrls: ['sidenav-backdrop-example.css'],
            },] },
];
/** @nocollapse */ SidenavBackdropExample.ɵfac = function SidenavBackdropExample_Factory(t) { return new (t || SidenavBackdropExample)(); };
/** @nocollapse */ SidenavBackdropExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavBackdropExample, selectors: [["sidenav-backdrop-example"]], decls: 29, vars: 4, consts: [[1, "example-container", 3, "hasBackdrop"], [3, "mode"], ["drawer", ""], ["value", "side"], ["mode", ""], ["value", "over"], ["value", "push"], ["hasBackdrop", ""], [3, "value"], ["mat-raised-button", "", 3, "click"]], template: function SidenavBackdropExample_Template(rf, ctx) { if (rf & 1) {
        const _r491 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-drawer-container", 0);
        i0.ɵɵelementStart(1, "mat-drawer", 1, 2);
        i0.ɵɵtext(3, "I'm a drawer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-drawer-content");
        i0.ɵɵelementStart(5, "mat-form-field");
        i0.ɵɵelementStart(6, "mat-label");
        i0.ɵɵtext(7, "Sidenav mode");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-select", 3, 4);
        i0.ɵɵelementStart(10, "mat-option", 3);
        i0.ɵɵtext(11, "Side");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-option", 5);
        i0.ɵɵtext(13, "Over");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-option", 6);
        i0.ɵɵtext(15, "Push");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-form-field");
        i0.ɵɵelementStart(17, "mat-label");
        i0.ɵɵtext(18, "Has backdrop");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "mat-select", null, 7);
        i0.ɵɵelementStart(21, "mat-option");
        i0.ɵɵtext(22, "Unset");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "mat-option", 8);
        i0.ɵɵtext(24, "True");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "mat-option", 8);
        i0.ɵɵtext(26, "False");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "button", 9);
        i0.ɵɵlistener("click", function SidenavBackdropExample_Template_button_click_27_listener($event) { i0.ɵɵrestoreView(_r491); const _r488 = i0.ɵɵreference(2); return _r488.toggle(); });
        i0.ɵɵtext(28, "Toggle drawer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r489 = i0.ɵɵreference(9);
        const _r490 = i0.ɵɵreference(20);
        i0.ɵɵproperty("hasBackdrop", _r490.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("mode", _r489.value);
        i0.ɵɵadvance(22);
        i0.ɵɵproperty("value", true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", false);
    } }, directives: [i1.MatDrawerContainer, i1.MatDrawer, i1.MatDrawerContent, i2.MatFormField, i2.MatLabel, i3.MatSelect, i4.MatOption, i5.MatButton], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 200px;\n  margin: 12px;\n  border: 1px solid #555;\n}\n\nmat-drawer-content[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SidenavBackdropExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-backdrop-example',
                templateUrl: 'sidenav-backdrop-example.html',
                styleUrls: ['sidenav-backdrop-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1iYWNrZHJvcC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LWJhY2tkcm9wL3NpZGVuYXYtYmFja2Ryb3AtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1iYWNrZHJvcC9zaWRlbmF2LWJhY2tkcm9wLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztBQVF4QyxNQUFNLE9BQU8sc0JBQXNCOzs7WUFMbEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDOzs0RkFDWSxzQkFBc0I7MkRBQXRCLHNCQUFzQjs7UUNSbkMsK0NBQ0U7UUFBQSx3Q0FBd0M7UUFBQSw0QkFBWTtRQUFBLGlCQUFhO1FBQ2pFLDBDQUNFO1FBQUEsc0NBQ0U7UUFBQSxpQ0FBVztRQUFBLDRCQUFZO1FBQUEsaUJBQVk7UUFDbkMsd0NBQ0U7UUFBQSxzQ0FBeUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFhO1FBQzFDLHNDQUF5QjtRQUFBLHFCQUFJO1FBQUEsaUJBQWE7UUFDMUMsc0NBQXlCO1FBQUEscUJBQUk7UUFBQSxpQkFBYTtRQUM1QyxpQkFBYTtRQUNmLGlCQUFpQjtRQUNqQix1Q0FDRTtRQUFBLGtDQUFXO1FBQUEsNkJBQVk7UUFBQSxpQkFBWTtRQUNuQyw0Q0FDRTtRQUFBLG1DQUFZO1FBQUEsc0JBQUs7UUFBQSxpQkFBYTtRQUM5QixzQ0FBMkI7UUFBQSxxQkFBSTtRQUFBLGlCQUFhO1FBQzVDLHNDQUE0QjtRQUFBLHNCQUFLO1FBQUEsaUJBQWE7UUFDaEQsaUJBQWE7UUFDZixpQkFBaUI7UUFDakIsa0NBQW9EO1FBQTFCLG9LQUFTLGNBQWUsSUFBQztRQUFDLDhCQUFhO1FBQUEsaUJBQVM7UUFDNUUsaUJBQXFCO1FBQ3ZCLGlCQUF1Qjs7OztRQXJCeUIseUNBQWlDO1FBQzNELGVBQW1CO1FBQW5CLGtDQUFtQjtRQWNyQixnQkFBYztRQUFkLDRCQUFjO1FBQ2QsZUFBZTtRQUFmLDZCQUFlOztrRERSdEIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEcmF3ZXIgd2l0aCBleHBsaWNpdCBiYWNrZHJvcCBzZXR0aW5nICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LWJhY2tkcm9wLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtYmFja2Ryb3AtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZGVuYXYtYmFja2Ryb3AtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZW5hdkJhY2tkcm9wRXhhbXBsZSB7fVxuIiwiPG1hdC1kcmF3ZXItY29udGFpbmVyIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIiBbaGFzQmFja2Ryb3BdPVwiaGFzQmFja2Ryb3AudmFsdWVcIj5cbiAgPG1hdC1kcmF3ZXIgI2RyYXdlciBbbW9kZV09XCJtb2RlLnZhbHVlXCI+SSdtIGEgZHJhd2VyPC9tYXQtZHJhd2VyPlxuICA8bWF0LWRyYXdlci1jb250ZW50PlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtbGFiZWw+U2lkZW5hdiBtb2RlPC9tYXQtbGFiZWw+XG4gICAgICA8bWF0LXNlbGVjdCAjbW9kZSB2YWx1ZT1cInNpZGVcIj5cbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJzaWRlXCI+U2lkZTwvbWF0LW9wdGlvbj5cbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvdmVyXCI+T3ZlcjwvbWF0LW9wdGlvbj5cbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJwdXNoXCI+UHVzaDwvbWF0LW9wdGlvbj5cbiAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtbGFiZWw+SGFzIGJhY2tkcm9wPC9tYXQtbGFiZWw+XG4gICAgICA8bWF0LXNlbGVjdCAjaGFzQmFja2Ryb3A+XG4gICAgICAgIDxtYXQtb3B0aW9uPlVuc2V0PC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwidHJ1ZVwiPlRydWU8L21hdC1vcHRpb24+XG4gICAgICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJmYWxzZVwiPkZhbHNlPC9tYXQtb3B0aW9uPlxuICAgICAgPC9tYXQtc2VsZWN0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiZHJhd2VyLnRvZ2dsZSgpXCI+VG9nZ2xlIGRyYXdlcjwvYnV0dG9uPlxuICA8L21hdC1kcmF3ZXItY29udGVudD5cbjwvbWF0LWRyYXdlci1jb250YWluZXI+XG4iXX0=