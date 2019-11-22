import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/material/button";
/** @title Datepicker open method */
var DatepickerApiExample = /** @class */ (function () {
    function DatepickerApiExample() {
    }
    DatepickerApiExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-api-example',
                    templateUrl: 'datepicker-api-example.html',
                    styleUrls: ['datepicker-api-example.css'],
                },] },
    ];
    DatepickerApiExample.ɵfac = function DatepickerApiExample_Factory(t) { return new (t || DatepickerApiExample)(); };
    DatepickerApiExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerApiExample, selectors: [["datepicker-api-example"]], decls: 6, vars: 1, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["picker", ""], ["mat-raised-button", "", 3, "click"]], template: function DatepickerApiExample_Template(rf, ctx) { if (rf & 1) {
            var _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelement(1, "input", 1);
            i0.ɵɵelement(2, "mat-datepicker", null, 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 3);
            i0.ɵɵlistener("click", function DatepickerApiExample_Template_button_click_4_listener($event) { i0.ɵɵrestoreView(_r1); var _r0 = i0.ɵɵreference(3); return _r0.open(); });
            i0.ɵɵtext(5, "Open");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matDatepicker", _r0);
        } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepicker, i4.MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    return DatepickerApiExample;
}());
export { DatepickerApiExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerApiExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-api-example',
                templateUrl: 'datepicker-api-example.html',
                styleUrls: ['datepicker-api-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1hcGktZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1hcGkvZGF0ZXBpY2tlci1hcGktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1hcGkvZGF0ZXBpY2tlci1hcGktZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUV4QyxvQ0FBb0M7QUFDcEM7SUFBQTtLQUtvQzs7Z0JBTG5DLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxXQUFXLEVBQUUsNkJBQTZCO29CQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztpQkFDMUM7OzRGQUNZLG9CQUFvQjs2REFBcEIsb0JBQW9COztZQ1JqQyx5Q0FDRTtZQUFBLDJCQUNBO1lBQUEsMENBQXlDO1lBQzNDLGlCQUFpQjtZQUNqQixpQ0FBa0Q7WUFBeEIsMkpBQVMsVUFBYSxJQUFDO1lBQUMsb0JBQUk7WUFBQSxpQkFBUzs7O1lBSDdDLGVBQXdCO1lBQXhCLG1DQUF3Qjs7K0JERDFDO0NBUW9DLEFBTHBDLElBS29DO1NBQXZCLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzthQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIG9wZW4gbWV0aG9kICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWFwaS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWFwaS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci1hcGktZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckFwaUV4YW1wbGUge31cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCIgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSBkYXRlXCI+XG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwicGlja2VyLm9wZW4oKVwiPk9wZW48L2J1dHRvbj5cbiJdfQ==