/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/radio";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/progress-bar";
import * as i6 from "@angular/material/slider";
function ProgressBarConfigurableExample_section_26_Template(rf, ctx) { if (rf & 1) {
    const _r251 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 1);
    i0.ɵɵelementStart(1, "label", 2);
    i0.ɵɵtext(2, "Progress:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slider", 13);
    i0.ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_section_26_Template_mat_slider_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r251); const ctx_r250 = i0.ɵɵnextContext(); return ctx_r250.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r248 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r248.value);
} }
function ProgressBarConfigurableExample_section_27_Template(rf, ctx) { if (rf & 1) {
    const _r253 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 1);
    i0.ɵɵelementStart(1, "label", 2);
    i0.ɵɵtext(2, "Buffer:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slider", 13);
    i0.ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_section_27_Template_mat_slider_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r253); const ctx_r252 = i0.ɵɵnextContext(); return ctx_r252.bufferValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r249 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r249.bufferValue);
} }
/**
 * \@title Configurable progress-bar
 */
export class ProgressBarConfigurableExample {
    constructor() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
    }
}
ProgressBarConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'progress-bar-configurable-example',
                templateUrl: 'progress-bar-configurable-example.html',
                styleUrls: ['progress-bar-configurable-example.css'],
            },] },
];
/** @nocollapse */ ProgressBarConfigurableExample.ɵfac = function ProgressBarConfigurableExample_Factory(t) { return new (t || ProgressBarConfigurableExample)(); };
/** @nocollapse */ ProgressBarConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressBarConfigurableExample, selectors: [["progress-bar-configurable-example"]], decls: 34, vars: 8, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], ["value", "determinate", 1, "example-margin"], ["value", "indeterminate", 1, "example-margin"], ["value", "buffer", 1, "example-margin"], ["value", "query", 1, "example-margin"], ["class", "example-section", 4, "ngIf"], [1, "example-margin", 3, "color", "mode", "value", "bufferValue"], [1, "example-margin", 3, "ngModel", "ngModelChange"]], template: function ProgressBarConfigurableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card");
        i0.ɵɵelementStart(1, "mat-card-content");
        i0.ɵɵelementStart(2, "h2", 0);
        i0.ɵɵtext(3, "Progress bar configuration");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "section", 1);
        i0.ɵɵelementStart(5, "label", 2);
        i0.ɵɵtext(6, "Color:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-radio-group", 3);
        i0.ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_Template_mat_radio_group_ngModelChange_7_listener($event) { return ctx.color = $event; });
        i0.ɵɵelementStart(8, "mat-radio-button", 4);
        i0.ɵɵtext(9, " Primary ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-radio-button", 5);
        i0.ɵɵtext(11, " Accent ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-radio-button", 6);
        i0.ɵɵtext(13, " Warn ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "section", 1);
        i0.ɵɵelementStart(15, "label", 2);
        i0.ɵɵtext(16, "Mode:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-radio-group", 3);
        i0.ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_Template_mat_radio_group_ngModelChange_17_listener($event) { return ctx.mode = $event; });
        i0.ɵɵelementStart(18, "mat-radio-button", 7);
        i0.ɵɵtext(19, " Determinate ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "mat-radio-button", 8);
        i0.ɵɵtext(21, " Indeterminate ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "mat-radio-button", 9);
        i0.ɵɵtext(23, " Buffer ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "mat-radio-button", 10);
        i0.ɵɵtext(25, " Query ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(26, ProgressBarConfigurableExample_section_26_Template, 4, 1, "section", 11);
        i0.ɵɵtemplate(27, ProgressBarConfigurableExample_section_27_Template, 4, 1, "section", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "mat-card");
        i0.ɵɵelementStart(29, "mat-card-content");
        i0.ɵɵelementStart(30, "h2", 0);
        i0.ɵɵtext(31, "Result");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "section", 1);
        i0.ɵɵelement(33, "mat-progress-bar", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngModel", ctx.color);
        i0.ɵɵadvance(10);
        i0.ɵɵproperty("ngModel", ctx.mode);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngIf", ctx.mode === "determinate" || ctx.mode === "buffer");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.mode === "buffer");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("color", ctx.color)("mode", ctx.mode)("value", ctx.value)("bufferValue", ctx.bufferValue);
    } }, directives: [i1.MatCard, i1.MatCardContent, i2.MatRadioGroup, i3.NgControlStatus, i3.NgModel, i2.MatRadioButton, i4.NgIf, i5.MatProgressBar, i6.MatSlider], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProgressBarConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'progress-bar-configurable-example',
                templateUrl: 'progress-bar-configurable-example.html',
                styleUrls: ['progress-bar-configurable-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    ProgressBarConfigurableExample.prototype.color;
    /** @type {?} */
    ProgressBarConfigurableExample.prototype.mode;
    /** @type {?} */
    ProgressBarConfigurableExample.prototype.value;
    /** @type {?} */
    ProgressBarConfigurableExample.prototype.bufferValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci1jb25maWd1cmFibGUvcHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci1jb25maWd1cmFibGUvcHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7SUNxQ3BDLGtDQUNFO0lBQUEsZ0NBQThCO0lBQUEseUJBQVM7SUFBQSxpQkFBUTtJQUMvQyxzQ0FBb0U7SUFBakMseU9BQW1CO0lBQUMsaUJBQWE7SUFDdEUsaUJBQVU7OztJQUQyQixlQUFtQjtJQUFuQix3Q0FBbUI7Ozs7SUFFeEQsa0NBQ0U7SUFBQSxnQ0FBOEI7SUFBQSx1QkFBTztJQUFBLGlCQUFRO0lBQzdDLHNDQUEwRTtJQUF2QywrT0FBeUI7SUFBQyxpQkFBYTtJQUM1RSxpQkFBVTs7O0lBRDJCLGVBQXlCO0lBQXpCLDhDQUF5Qjs7Ozs7QUQvQmxFLE1BQU0sT0FBTyw4QkFBOEI7SUFMM0M7UUFNRSxVQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUNoQyxTQUFJLEdBQW9CLGFBQWEsQ0FBQztRQUN0QyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsZ0JBQVcsR0FBRyxFQUFFLENBQUM7S0FDbEI7OztZQVZBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxXQUFXLEVBQUUsd0NBQXdDO2dCQUNyRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQzthQUNyRDs7NEdBQ1ksOEJBQThCO21FQUE5Qiw4QkFBOEI7UUNaM0MsZ0NBQ0U7UUFBQSx3Q0FDRTtRQUFBLDZCQUF1QjtRQUFBLDBDQUEwQjtRQUFBLGlCQUFLO1FBRXRELGtDQUNFO1FBQUEsZ0NBQThCO1FBQUEsc0JBQU07UUFBQSxpQkFBUTtRQUM1QywwQ0FDRTtRQURlLGdLQUFtQjtRQUNsQywyQ0FDRTtRQUFBLHlCQUNGO1FBQUEsaUJBQW1CO1FBQ25CLDRDQUNFO1FBQUEseUJBQ0Y7UUFBQSxpQkFBbUI7UUFDbkIsNENBQ0U7UUFBQSx1QkFDRjtRQUFBLGlCQUFtQjtRQUNyQixpQkFBa0I7UUFDcEIsaUJBQVU7UUFFVixtQ0FDRTtRQUFBLGlDQUE4QjtRQUFBLHNCQUFLO1FBQUEsaUJBQVE7UUFDM0MsMkNBQ0U7UUFEZSxnS0FBa0I7UUFDakMsNENBQ0U7UUFBQSw4QkFDRjtRQUFBLGlCQUFtQjtRQUNuQiw0Q0FDRTtRQUFBLGdDQUNGO1FBQUEsaUJBQW1CO1FBQ25CLDRDQUNFO1FBQUEseUJBQ0Y7UUFBQSxpQkFBbUI7UUFDbkIsNkNBQ0U7UUFBQSx3QkFDRjtRQUFBLGlCQUFtQjtRQUNyQixpQkFBa0I7UUFDcEIsaUJBQVU7UUFFViwwRkFDRTtRQUdGLDBGQUNFO1FBR0osaUJBQW1CO1FBQ3JCLGlCQUFXO1FBRVgsaUNBQ0U7UUFBQSx5Q0FDRTtRQUFBLDhCQUF1QjtRQUFBLHVCQUFNO1FBQUEsaUJBQUs7UUFFbEMsbUNBQ0U7UUFBQSx3Q0FNbUI7UUFDckIsaUJBQVU7UUFDWixpQkFBbUI7UUFDckIsaUJBQVc7O1FBeERZLGVBQW1CO1FBQW5CLG1DQUFtQjtRQWVuQixnQkFBa0I7UUFBbEIsa0NBQWtCO1FBZ0JKLGVBQW1EO1FBQW5ELDBFQUFtRDtRQUluRCxlQUF5QjtRQUF6Qiw0Q0FBeUI7UUFjcEQsZUFBZTtRQUFmLGlDQUFlLGtCQUFBLG9CQUFBLGdDQUFBOztrREQzQ1osOEJBQThCO2NBTDFDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxXQUFXLEVBQUUsd0NBQXdDO2dCQUNyRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQzthQUNyRDs7OztJQUVDLCtDQUFnQzs7SUFDaEMsOENBQXNDOztJQUN0QywrQ0FBVzs7SUFDWCxxREFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge1Byb2dyZXNzQmFyTW9kZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcblxuLyoqXG4gKiBAdGl0bGUgQ29uZmlndXJhYmxlIHByb2dyZXNzLWJhclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcm9ncmVzcy1iYXItY29uZmlndXJhYmxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Byb2dyZXNzLWJhci1jb25maWd1cmFibGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Byb2dyZXNzLWJhci1jb25maWd1cmFibGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJDb25maWd1cmFibGVFeGFtcGxlIHtcbiAgY29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5JztcbiAgbW9kZTogUHJvZ3Jlc3NCYXJNb2RlID0gJ2RldGVybWluYXRlJztcbiAgdmFsdWUgPSA1MDtcbiAgYnVmZmVyVmFsdWUgPSA3NTtcbn1cbiIsIjxtYXQtY2FyZD5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgPGgyIGNsYXNzPVwiZXhhbXBsZS1oMlwiPlByb2dyZXNzIGJhciBjb25maWd1cmF0aW9uPC9oMj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPkNvbG9yOjwvbGFiZWw+XG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIFsobmdNb2RlbCldPVwiY29sb3JcIj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIHZhbHVlPVwicHJpbWFyeVwiPlxuICAgICAgICAgIFByaW1hcnlcbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgdmFsdWU9XCJhY2NlbnRcIj5cbiAgICAgICAgICBBY2NlbnRcbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgdmFsdWU9XCJ3YXJuXCI+XG4gICAgICAgICAgV2FyblxuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5Nb2RlOjwvbGFiZWw+XG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIFsobmdNb2RlbCldPVwibW9kZVwiPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgdmFsdWU9XCJkZXRlcm1pbmF0ZVwiPlxuICAgICAgICAgIERldGVybWluYXRlXG4gICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIHZhbHVlPVwiaW5kZXRlcm1pbmF0ZVwiPlxuICAgICAgICAgIEluZGV0ZXJtaW5hdGVcbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgdmFsdWU9XCJidWZmZXJcIj5cbiAgICAgICAgICBCdWZmZXJcbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgdmFsdWU9XCJxdWVyeVwiPlxuICAgICAgICAgIFF1ZXJ5XG4gICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCIgKm5nSWY9XCJtb2RlID09PSAnZGV0ZXJtaW5hdGUnIHx8IG1vZGUgPT09ICdidWZmZXInXCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPlByb2dyZXNzOjwvbGFiZWw+XG4gICAgICA8bWF0LXNsaWRlciBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiPjwvbWF0LXNsaWRlcj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIiAqbmdJZj1cIm1vZGUgPT09ICdidWZmZXInXCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPkJ1ZmZlcjo8L2xhYmVsPlxuICAgICAgPG1hdC1zbGlkZXIgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwiYnVmZmVyVmFsdWVcIj48L21hdC1zbGlkZXI+XG4gICAgPC9zZWN0aW9uPlxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuXG48bWF0LWNhcmQ+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIDxoMiBjbGFzcz1cImV4YW1wbGUtaDJcIj5SZXN1bHQ8L2gyPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxtYXQtcHJvZ3Jlc3MtYmFyXG4gICAgICAgICAgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiXG4gICAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgICBbbW9kZV09XCJtb2RlXCJcbiAgICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxuICAgICAgICAgIFtidWZmZXJWYWx1ZV09XCJidWZmZXJWYWx1ZVwiPlxuICAgICAgPC9tYXQtcHJvZ3Jlc3MtYmFyPlxuICAgIDwvc2VjdGlvbj5cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD5cbiJdfQ==