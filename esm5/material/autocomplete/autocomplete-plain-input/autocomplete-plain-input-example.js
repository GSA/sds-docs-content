import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/autocomplete";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/core";
function AutocompletePlainInputExample_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var street_r19 = ctx.$implicit;
    i0.ɵɵproperty("value", street_r19);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", street_r19, " ");
} }
/**
 * @title Plain input autocomplete
 */
var AutocompletePlainInputExample = /** @class */ (function () {
    function AutocompletePlainInputExample() {
        this.control = new FormControl();
        this.streets = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
    }
    AutocompletePlainInputExample.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredStreets = this.control.valueChanges.pipe(startWith(''), map(function (value) { return _this._filter(value); }));
    };
    AutocompletePlainInputExample.prototype._filter = function (value) {
        var _this = this;
        var filterValue = this._normalizeValue(value);
        return this.streets.filter(function (street) { return _this._normalizeValue(street).includes(filterValue); });
    };
    AutocompletePlainInputExample.prototype._normalizeValue = function (value) {
        return value.toLowerCase().replace(/\s/g, '');
    };
    AutocompletePlainInputExample.decorators = [
        { type: Component, args: [{
                    selector: 'autocomplete-plain-input-example',
                    templateUrl: 'autocomplete-plain-input-example.html',
                    styleUrls: ['autocomplete-plain-input-example.css'],
                },] },
    ];
    AutocompletePlainInputExample.ɵfac = function AutocompletePlainInputExample_Factory(t) { return new (t || AutocompletePlainInputExample)(); };
    AutocompletePlainInputExample.ɵcmp = i0.ɵɵdefineComponent({ type: AutocompletePlainInputExample, selectors: [["autocomplete-plain-input-example"]], decls: 6, vars: 5, consts: [[1, "example-form"], ["type", "text", "placeholder", "Search for a street", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompletePlainInputExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵelement(1, "input", 1);
            i0.ɵɵelementStart(2, "mat-autocomplete", null, 2);
            i0.ɵɵtemplate(4, AutocompletePlainInputExample_mat_option_4_Template, 2, 2, "mat-option", 3);
            i0.ɵɵpipe(5, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r17 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formControl", ctx.control)("matAutocomplete", _r17);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(5, 3, ctx.filteredStreets));
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i1.DefaultValueAccessor, i2.MatAutocompleteTrigger, i1.NgControlStatus, i1.FormControlDirective, i2.MatAutocomplete, i3.NgForOf, i4.MatOption], pipes: [i3.AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return AutocompletePlainInputExample;
}());
export { AutocompletePlainInputExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AutocompletePlainInputExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-plain-input-example',
                templateUrl: 'autocomplete-plain-input-example.html',
                styleUrls: ['autocomplete-plain-input-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXBsYWluLWlucHV0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLXBsYWluLWlucHV0L2F1dG9jb21wbGV0ZS1wbGFpbi1pbnB1dC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1wbGFpbi1pbnB1dC9hdXRvY29tcGxldGUtcGxhaW4taW5wdXQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7SUNBMUMscUNBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQWE7OztJQUY4QyxrQ0FBZ0I7SUFDekUsZUFDRjtJQURFLDJDQUNGOztBREFKOztHQUVHO0FBQ0g7SUFBQTtRQU1FLFlBQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzVCLFlBQU8sR0FBYSxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztLQWtCeEY7SUFmQyxnREFBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDbkQsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FDbEMsQ0FBQztJQUNKLENBQUM7SUFFTywrQ0FBTyxHQUFmLFVBQWdCLEtBQWE7UUFBN0IsaUJBR0M7UUFGQyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBbEQsQ0FBa0QsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFTyx1REFBZSxHQUF2QixVQUF3QixLQUFhO1FBQ25DLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0NBQWtDO29CQUM1QyxXQUFXLEVBQUUsdUNBQXVDO29CQUNwRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQztpQkFDcEQ7OzhHQUNZLDZCQUE2QjtzRUFBN0IsNkJBQTZCO1lDYjFDLCtCQUNFO1lBQUEsMkJBQ0E7WUFBQSxpREFDRTtZQUFBLDRGQUNFOztZQUVKLGlCQUFtQjtZQUNyQixpQkFBTzs7O1lBTmdELGVBQXVCO1lBQXZCLHlDQUF1Qix5QkFBQTtZQUU5RCxlQUE4QztZQUE5QyxtRUFBOEM7O3dDREg5RDtDQWlDQyxBQXpCRCxJQXlCQztTQXBCWSw2QkFBNkI7a0RBQTdCLDZCQUE2QjtjQUx6QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsV0FBVyxFQUFFLHVDQUF1QztnQkFDcEQsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7YUFDcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3N0YXJ0V2l0aCwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogQHRpdGxlIFBsYWluIGlucHV0IGF1dG9jb21wbGV0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdXRvY29tcGxldGUtcGxhaW4taW5wdXQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYXV0b2NvbXBsZXRlLXBsYWluLWlucHV0LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhdXRvY29tcGxldGUtcGxhaW4taW5wdXQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlUGxhaW5JbnB1dEV4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIHN0cmVldHM6IHN0cmluZ1tdID0gWydDaGFtcHMtw4lseXPDqWVzJywgJ0xvbWJhcmQgU3RyZWV0JywgJ0FiYmV5IFJvYWQnLCAnRmlmdGggQXZlbnVlJ107XG4gIGZpbHRlcmVkU3RyZWV0czogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5maWx0ZXJlZFN0cmVldHMgPSB0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgbWFwKHZhbHVlID0+IHRoaXMuX2ZpbHRlcih2YWx1ZSkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdGhpcy5fbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICAgIHJldHVybiB0aGlzLnN0cmVldHMuZmlsdGVyKHN0cmVldCA9PiB0aGlzLl9ub3JtYWxpemVWYWx1ZShzdHJlZXQpLmluY2x1ZGVzKGZpbHRlclZhbHVlKSk7XG4gIH1cblxuICBwcml2YXRlIF9ub3JtYWxpemVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICB9XG59XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYSBzdHJlZXRcIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiPlxuICA8bWF0LWF1dG9jb21wbGV0ZSAjYXV0bz1cIm1hdEF1dG9jb21wbGV0ZVwiPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBzdHJlZXQgb2YgZmlsdGVyZWRTdHJlZXRzIHwgYXN5bmNcIiBbdmFsdWVdPVwic3RyZWV0XCI+XG4gICAgICB7e3N0cmVldH19XG4gICAgPC9tYXQtb3B0aW9uPlxuICA8L21hdC1hdXRvY29tcGxldGU+XG48L2Zvcm0+XG4iXX0=