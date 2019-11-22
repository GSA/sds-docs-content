import { NgForOf, CommonModule } from '@angular/common';
import { Component, ɵɵdefineComponent, ɵɵgetCurrentView, ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵɵlistener, ɵɵrestoreView, ɵɵreference, ɵɵtext, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, ChangeDetectionStrategy, Inject, ChangeDetectorRef, ɵɵdirectiveInject, ɵɵtextInterpolate, ViewEncapsulation, ɵɵtemplate, ɵɵProvidersFeature, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { FormControl, DefaultValueAccessor, NgControlStatus, FormControlDirective, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerInput, MatDatepicker, MatDatepickerToggle, MatCalendar, MatDatepickerToggleIcon, MatDatepickerModule } from '@angular/material/datepicker';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import * as _rollupMoment from 'moment';
import _rollupMoment__default, {  } from 'moment';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker open method
 */
class DatepickerApiExample {
}
DatepickerApiExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-api-example',
                templateUrl: 'datepicker-api-example.html',
                styleUrls: ['datepicker-api-example.css'],
            },] },
];
/** @nocollapse */ DatepickerApiExample.ɵfac = function DatepickerApiExample_Factory(t) { return new (t || DatepickerApiExample)(); };
/** @nocollapse */ DatepickerApiExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerApiExample, selectors: [["datepicker-api-example"]], decls: 6, vars: 1, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["picker", ""], ["mat-raised-button", "", 3, "click"]], template: function DatepickerApiExample_Template(rf, ctx) { if (rf & 1) {
        const _r329 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelement(1, "input", 1);
        ɵɵelement(2, "mat-datepicker", null, 2);
        ɵɵelementEnd();
        ɵɵelementStart(4, "button", 3);
        ɵɵlistener("click", function DatepickerApiExample_Template_button_click_4_listener($event) { ɵɵrestoreView(_r329); const _r328 = ɵɵreference(3); return _r328.open(); });
        ɵɵtext(5, "Open");
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r328 = ɵɵreference(3);
        ɵɵadvance(1);
        ɵɵproperty("matDatepicker", _r328);
    } }, directives: [MatFormField, MatInput, MatDatepickerInput, MatDatepicker, MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerApiExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-api-example',
                templateUrl: 'datepicker-api-example.html',
                styleUrls: ['datepicker-api-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker palette colors
 */
class DatepickerColorExample {
}
DatepickerColorExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-color-example',
                templateUrl: 'datepicker-color-example.html',
                styleUrls: ['datepicker-color-example.css'],
            },] },
];
/** @nocollapse */ DatepickerColorExample.ɵfac = function DatepickerColorExample_Factory(t) { return new (t || DatepickerColorExample)(); };
/** @nocollapse */ DatepickerColorExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerColorExample, selectors: [["datepicker-color-example"]], decls: 14, vars: 4, consts: [["color", "accent"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["color", "primary"], ["picker2", ""]], template: function DatepickerColorExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Inherited calendar color");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 1);
        ɵɵelement(4, "mat-datepicker-toggle", 2);
        ɵɵelement(5, "mat-datepicker", null, 3);
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-form-field", 0);
        ɵɵelementStart(8, "mat-label");
        ɵɵtext(9, "Custom calendar color");
        ɵɵelementEnd();
        ɵɵelement(10, "input", 1);
        ɵɵelement(11, "mat-datepicker-toggle", 2);
        ɵɵelement(12, "mat-datepicker", 4, 5);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r330 = ɵɵreference(6);
        const _r331 = ɵɵreference(13);
        ɵɵadvance(3);
        ɵɵproperty("matDatepicker", _r330);
        ɵɵadvance(1);
        ɵɵproperty("for", _r330);
        ɵɵadvance(6);
        ɵɵproperty("matDatepicker", _r331);
        ɵɵadvance(1);
        ɵɵproperty("for", _r331);
    } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerColorExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-color-example',
                templateUrl: 'datepicker-color-example.html',
                styleUrls: ['datepicker-color-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker with custom calendar header
 */
class DatepickerCustomHeaderExample {
    constructor() {
        this.exampleHeader = ExampleHeader;
    }
}
DatepickerCustomHeaderExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-custom-header-example',
                templateUrl: 'datepicker-custom-header-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */ DatepickerCustomHeaderExample.ɵfac = function DatepickerCustomHeaderExample_Factory(t) { return new (t || DatepickerCustomHeaderExample)(); };
/** @nocollapse */ DatepickerCustomHeaderExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerCustomHeaderExample, selectors: [["datepicker-custom-header-example"]], decls: 7, vars: 3, consts: [["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [3, "calendarHeaderComponent"], ["picker", ""]], template: function DatepickerCustomHeaderExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field");
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Custom calendar header");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 0);
        ɵɵelement(4, "mat-datepicker-toggle", 1);
        ɵɵelement(5, "mat-datepicker", 2, 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r332 = ɵɵreference(6);
        ɵɵadvance(3);
        ɵɵproperty("matDatepicker", _r332);
        ɵɵadvance(1);
        ɵɵproperty("for", _r332);
        ɵɵadvance(1);
        ɵɵproperty("calendarHeaderComponent", ctx.exampleHeader);
    } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerCustomHeaderExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-custom-header-example',
                templateUrl: 'datepicker-custom-header-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    DatepickerCustomHeaderExample.prototype.exampleHeader;
}
/**
 * Custom header component for datepicker.
 * @template D
 */
class ExampleHeader {
    /**
     * @param {?} _calendar
     * @param {?} _dateAdapter
     * @param {?} _dateFormats
     * @param {?} cdr
     */
    constructor(_calendar, _dateAdapter, _dateFormats, cdr) {
        this._calendar = _calendar;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._destroyed = new Subject();
        _calendar.stateChanges
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        () => cdr.markForCheck()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * @return {?}
     */
    get periodLabel() {
        return this._dateAdapter
            .format(this._calendar.activeDate, this._dateFormats.display.monthYearLabel)
            .toLocaleUpperCase();
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    previousClicked(mode) {
        this._calendar.activeDate = mode === 'month' ?
            this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1) :
            this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    nextClicked(mode) {
        this._calendar.activeDate = mode === 'month' ?
            this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1) :
            this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
    }
}
ExampleHeader.decorators = [
    { type: Component, args: [{
                selector: 'example-header',
                styles: [`
    .example-header {
      display: flex;
      align-items: center;
      padding: 0.5em;
    }

    .example-header-label {
      flex: 1;
      height: 1em;
      font-weight: 500;
      text-align: center;
    }

    .example-double-arrow .mat-icon {
      margin: -22%;
    }
  `],
                template: `
    <div class="example-header">
      <button mat-icon-button class="example-double-arrow" (click)="previousClicked('year')">
        <mat-icon>keyboard_arrow_left</mat-icon>
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <button mat-icon-button (click)="previousClicked('month')">
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <span class="example-header-label">{{periodLabel}}</span>
      <button mat-icon-button (click)="nextClicked('month')">
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
      <button mat-icon-button class="example-double-arrow" (click)="nextClicked('year')">
        <mat-icon>keyboard_arrow_right</mat-icon>
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
ExampleHeader.ctorParameters = () => [
    { type: MatCalendar },
    { type: DateAdapter },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DATE_FORMATS,] }] },
    { type: ChangeDetectorRef }
];
/** @nocollapse */ ExampleHeader.ɵfac = function ExampleHeader_Factory(t) { return new (t || ExampleHeader)(ɵɵdirectiveInject(MatCalendar), ɵɵdirectiveInject(DateAdapter), ɵɵdirectiveInject(MAT_DATE_FORMATS), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ ExampleHeader.ɵcmp = ɵɵdefineComponent({ type: ExampleHeader, selectors: [["example-header"]], decls: 19, vars: 1, consts: [[1, "example-header"], ["mat-icon-button", "", 1, "example-double-arrow", 3, "click"], ["mat-icon-button", "", 3, "click"], [1, "example-header-label"]], template: function ExampleHeader_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "button", 1);
        ɵɵlistener("click", function ExampleHeader_Template_button_click_1_listener($event) { return ctx.previousClicked("year"); });
        ɵɵelementStart(2, "mat-icon");
        ɵɵtext(3, "keyboard_arrow_left");
        ɵɵelementEnd();
        ɵɵelementStart(4, "mat-icon");
        ɵɵtext(5, "keyboard_arrow_left");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "button", 2);
        ɵɵlistener("click", function ExampleHeader_Template_button_click_6_listener($event) { return ctx.previousClicked("month"); });
        ɵɵelementStart(7, "mat-icon");
        ɵɵtext(8, "keyboard_arrow_left");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "span", 3);
        ɵɵtext(10);
        ɵɵelementEnd();
        ɵɵelementStart(11, "button", 2);
        ɵɵlistener("click", function ExampleHeader_Template_button_click_11_listener($event) { return ctx.nextClicked("month"); });
        ɵɵelementStart(12, "mat-icon");
        ɵɵtext(13, "keyboard_arrow_right");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(14, "button", 1);
        ɵɵlistener("click", function ExampleHeader_Template_button_click_14_listener($event) { return ctx.nextClicked("year"); });
        ɵɵelementStart(15, "mat-icon");
        ɵɵtext(16, "keyboard_arrow_right");
        ɵɵelementEnd();
        ɵɵelementStart(17, "mat-icon");
        ɵɵtext(18, "keyboard_arrow_right");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(10);
        ɵɵtextInterpolate(ctx.periodLabel);
    } }, directives: [MatButton, MatIcon], styles: [".example-header[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label[_ngcontent-%COMP%] {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n      margin: -22%;\n    }"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ExampleHeader, [{
        type: Component,
        args: [{
                selector: 'example-header',
                styles: [`
    .example-header {
      display: flex;
      align-items: center;
      padding: 0.5em;
    }

    .example-header-label {
      flex: 1;
      height: 1em;
      font-weight: 500;
      text-align: center;
    }

    .example-double-arrow .mat-icon {
      margin: -22%;
    }
  `],
                template: `
    <div class="example-header">
      <button mat-icon-button class="example-double-arrow" (click)="previousClicked('year')">
        <mat-icon>keyboard_arrow_left</mat-icon>
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <button mat-icon-button (click)="previousClicked('month')">
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <span class="example-header-label">{{periodLabel}}</span>
      <button mat-icon-button (click)="nextClicked('month')">
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
      <button mat-icon-button class="example-double-arrow" (click)="nextClicked('year')">
        <mat-icon>keyboard_arrow_right</mat-icon>
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: MatCalendar }, { type: DateAdapter }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DATE_FORMATS]
            }] }, { type: ChangeDetectorRef }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExampleHeader.prototype._destroyed;
    /**
     * @type {?}
     * @private
     */
    ExampleHeader.prototype._calendar;
    /**
     * @type {?}
     * @private
     */
    ExampleHeader.prototype._dateAdapter;
    /**
     * @type {?}
     * @private
     */
    ExampleHeader.prototype._dateFormats;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker with custom icon
 */
class DatepickerCustomIconExample {
}
DatepickerCustomIconExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-custom-icon-example',
                templateUrl: 'datepicker-custom-icon-example.html',
                styleUrls: ['datepicker-custom-icon-example.css'],
            },] },
];
/** @nocollapse */ DatepickerCustomIconExample.ɵfac = function DatepickerCustomIconExample_Factory(t) { return new (t || DatepickerCustomIconExample)(); };
/** @nocollapse */ DatepickerCustomIconExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerCustomIconExample, selectors: [["datepicker-custom-icon-example"]], decls: 7, vars: 2, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["matDatepickerToggleIcon", ""], ["picker", ""]], template: function DatepickerCustomIconExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelement(1, "input", 1);
        ɵɵelementStart(2, "mat-datepicker-toggle", 2);
        ɵɵelementStart(3, "mat-icon", 3);
        ɵɵtext(4, "keyboard_arrow_down");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(5, "mat-datepicker", null, 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r333 = ɵɵreference(6);
        ɵɵadvance(1);
        ɵɵproperty("matDatepicker", _r333);
        ɵɵadvance(1);
        ɵɵproperty("for", _r333);
    } }, directives: [MatFormField, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatIcon, MatDatepickerToggleIcon, MatDatepicker], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerCustomIconExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-custom-icon-example',
                templateUrl: 'datepicker-custom-icon-example.html',
                styleUrls: ['datepicker-custom-icon-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker with custom date classes
 */
class DatepickerDateClassExample {
    constructor() {
        this.dateClass = (/**
         * @param {?} d
         * @return {?}
         */
        (d) => {
            /** @type {?} */
            const date = d.getDate();
            // Highlight the 1st and 20th day of each month.
            return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
        });
    }
}
DatepickerDateClassExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-date-class-example',
                templateUrl: 'datepicker-date-class-example.html',
                styleUrls: ['datepicker-date-class-example.css'],
                encapsulation: ViewEncapsulation.None,
            },] },
];
/** @nocollapse */ DatepickerDateClassExample.ɵfac = function DatepickerDateClassExample_Factory(t) { return new (t || DatepickerDateClassExample)(); };
/** @nocollapse */ DatepickerDateClassExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerDateClassExample, selectors: [["datepicker-date-class-example"]], decls: 5, vars: 3, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [3, "dateClass"], ["picker", ""]], template: function DatepickerDateClassExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelement(1, "input", 1);
        ɵɵelement(2, "mat-datepicker-toggle", 2);
        ɵɵelement(3, "mat-datepicker", 3, 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r334 = ɵɵreference(4);
        ɵɵadvance(1);
        ɵɵproperty("matDatepicker", _r334);
        ɵɵadvance(1);
        ɵɵproperty("for", _r334);
        ɵɵadvance(1);
        ɵɵproperty("dateClass", ctx.dateClass);
    } }, directives: [MatFormField, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [".example-custom-date-class {\n  background: orange;\n  border-radius: 100%;\n}\n"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerDateClassExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-date-class-example',
                templateUrl: 'datepicker-date-class-example.html',
                styleUrls: ['datepicker-date-class-example.css'],
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    DatepickerDateClassExample.prototype.dateClass;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Disabled datepicker
 */
class DatepickerDisabledExample {
}
DatepickerDisabledExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-disabled-example',
                templateUrl: 'datepicker-disabled-example.html',
                styleUrls: ['datepicker-disabled-example.css'],
            },] },
];
/** @nocollapse */ DatepickerDisabledExample.ɵfac = function DatepickerDisabledExample_Factory(t) { return new (t || DatepickerDisabledExample)(); };
/** @nocollapse */ DatepickerDisabledExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerDisabledExample, selectors: [["datepicker-disabled-example"]], decls: 18, vars: 6, consts: [["matInput", "", "placeholder", "Completely disabled", "disabled", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dp1", ""], ["matInput", "", "placeholder", "Popup disabled", 3, "matDatepicker"], ["matSuffix", "", "disabled", "", 3, "for"], ["dp2", ""], ["matInput", "", "placeholder", "Input disabled", "disabled", "", 3, "matDatepicker"], ["disabled", "false"], ["dp3", ""]], template: function DatepickerDisabledExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵelementStart(1, "mat-form-field");
        ɵɵelement(2, "input", 0);
        ɵɵelement(3, "mat-datepicker-toggle", 1);
        ɵɵelement(4, "mat-datepicker", null, 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "p");
        ɵɵelementStart(7, "mat-form-field");
        ɵɵelement(8, "input", 3);
        ɵɵelement(9, "mat-datepicker-toggle", 4);
        ɵɵelement(10, "mat-datepicker", null, 5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "p");
        ɵɵelementStart(13, "mat-form-field");
        ɵɵelement(14, "input", 6);
        ɵɵelement(15, "mat-datepicker-toggle", 1);
        ɵɵelement(16, "mat-datepicker", 7, 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r335 = ɵɵreference(5);
        const _r336 = ɵɵreference(11);
        const _r337 = ɵɵreference(17);
        ɵɵadvance(2);
        ɵɵproperty("matDatepicker", _r335);
        ɵɵadvance(1);
        ɵɵproperty("for", _r335);
        ɵɵadvance(5);
        ɵɵproperty("matDatepicker", _r336);
        ɵɵadvance(1);
        ɵɵproperty("for", _r336);
        ɵɵadvance(5);
        ɵɵproperty("matDatepicker", _r337);
        ɵɵadvance(1);
        ɵɵproperty("for", _r337);
    } }, directives: [MatFormField, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerDisabledExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-disabled-example',
                templateUrl: 'datepicker-disabled-example.html',
                styleUrls: ['datepicker-disabled-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function DatepickerEventsExample_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const e_r340 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(e_r340);
} }
/**
 * \@title Datepicker input and change events
 */
class DatepickerEventsExample {
    constructor() {
        this.events = [];
    }
    /**
     * @param {?} type
     * @param {?} event
     * @return {?}
     */
    addEvent(type, event) {
        this.events.push(`${type}: ${event.value}`);
    }
}
DatepickerEventsExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-events-example',
                templateUrl: 'datepicker-events-example.html',
                styleUrls: ['datepicker-events-example.css'],
            },] },
];
/** @nocollapse */ DatepickerEventsExample.ɵfac = function DatepickerEventsExample_Factory(t) { return new (t || DatepickerEventsExample)(); };
/** @nocollapse */ DatepickerEventsExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerEventsExample, selectors: [["datepicker-events-example"]], decls: 7, vars: 3, consts: [["matInput", "", "placeholder", "Input & change events", 3, "matDatepicker", "dateInput", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "example-events"], [4, "ngFor", "ngForOf"]], template: function DatepickerEventsExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field");
        ɵɵelementStart(1, "input", 0);
        ɵɵlistener("dateInput", function DatepickerEventsExample_Template_input_dateInput_1_listener($event) { return ctx.addEvent("input", $event); });
        ɵɵlistener("dateChange", function DatepickerEventsExample_Template_input_dateChange_1_listener($event) { return ctx.addEvent("change", $event); });
        ɵɵelementEnd();
        ɵɵelement(2, "mat-datepicker-toggle", 1);
        ɵɵelement(3, "mat-datepicker", null, 2);
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 3);
        ɵɵtemplate(6, DatepickerEventsExample_div_6_Template, 2, 1, "div", 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r338 = ɵɵreference(4);
        ɵɵadvance(1);
        ɵɵproperty("matDatepicker", _r338);
        ɵɵadvance(1);
        ɵɵproperty("for", _r338);
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.events);
    } }, directives: [MatFormField, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgForOf], styles: [".example-events[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 200px;\n  border: 1px solid #555;\n  overflow: auto;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerEventsExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-events-example',
                templateUrl: 'datepicker-events-example.html',
                styleUrls: ['datepicker-events-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    DatepickerEventsExample.prototype.events;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker with filter validation
 */
class DatepickerFilterExample {
    constructor() {
        this.myFilter = (/**
         * @param {?} d
         * @return {?}
         */
        (d) => {
            /** @type {?} */
            const day = (d || new Date()).getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        });
    }
}
DatepickerFilterExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-filter-example',
                templateUrl: 'datepicker-filter-example.html',
                styleUrls: ['datepicker-filter-example.css'],
            },] },
];
/** @nocollapse */ DatepickerFilterExample.ɵfac = function DatepickerFilterExample_Factory(t) { return new (t || DatepickerFilterExample)(); };
/** @nocollapse */ DatepickerFilterExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerFilterExample, selectors: [["datepicker-filter-example"]], decls: 5, vars: 3, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepickerFilter", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerFilterExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelement(1, "input", 1);
        ɵɵelement(2, "mat-datepicker-toggle", 2);
        ɵɵelement(3, "mat-datepicker", null, 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r341 = ɵɵreference(4);
        ɵɵadvance(1);
        ɵɵproperty("matDatepickerFilter", ctx.myFilter)("matDatepicker", _r341);
        ɵɵadvance(1);
        ɵɵproperty("for", _r341);
    } }, directives: [MatFormField, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerFilterExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-filter-example',
                templateUrl: 'datepicker-filter-example.html',
                styleUrls: ['datepicker-filter-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    DatepickerFilterExample.prototype.myFilter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moment = _rollupMoment__default || _rollupMoment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
/** @type {?} */
const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
/**
 * \@title Datepicker with custom formats
 */
class DatepickerFormatsExample {
    constructor() {
        this.date = new FormControl(moment());
    }
}
DatepickerFormatsExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-formats-example',
                templateUrl: 'datepicker-formats-example.html',
                styleUrls: ['datepicker-formats-example.css'],
                providers: [
                    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                    // application's root module. We provide it at the component level here, due to limitations of
                    // our example generation script.
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                ],
            },] },
];
/** @nocollapse */ DatepickerFormatsExample.ɵfac = function DatepickerFormatsExample_Factory(t) { return new (t || DatepickerFormatsExample)(); };
/** @nocollapse */ DatepickerFormatsExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerFormatsExample, selectors: [["datepicker-formats-example"]], features: [ɵɵProvidersFeature([
            // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
            // application's root module. We provide it at the component level here, due to limitations of
            // our example generation script.
            {
                provide: DateAdapter,
                useClass: MomentDateAdapter,
                deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
            },
            { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
        ])], decls: 5, vars: 3, consts: [["matInput", "", "placeholder", "Verbose datepicker", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["dp", ""]], template: function DatepickerFormatsExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field");
        ɵɵelement(1, "input", 0);
        ɵɵelement(2, "mat-datepicker-toggle", 1);
        ɵɵelement(3, "mat-datepicker", null, 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r342 = ɵɵreference(4);
        ɵɵadvance(1);
        ɵɵproperty("matDatepicker", _r342)("formControl", ctx.date);
        ɵɵadvance(1);
        ɵɵproperty("for", _r342);
    } }, directives: [MatFormField, MatInput, MatDatepickerInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerFormatsExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-formats-example',
                templateUrl: 'datepicker-formats-example.html',
                styleUrls: ['datepicker-formats-example.css'],
                providers: [
                    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                    // application's root module. We provide it at the component level here, due to limitations of
                    // our example generation script.
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                ],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    DatepickerFormatsExample.prototype.date;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker with different locale
 */
class DatepickerLocaleExample {
    /**
     * @param {?} _adapter
     */
    constructor(_adapter) {
        this._adapter = _adapter;
    }
    /**
     * @return {?}
     */
    french() {
        this._adapter.setLocale('fr');
    }
}
DatepickerLocaleExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-locale-example',
                templateUrl: 'datepicker-locale-example.html',
                styleUrls: ['datepicker-locale-example.css'],
                providers: [
                    // The locale would typically be provided on the root module of your application. We do it at
                    // the component level here, due to limitations of our example generation script.
                    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
                    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                    // `MatMomentDateModule` in your applications root module. We provide it at the component level
                    // here, due to limitations of our example generation script.
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                ],
            },] },
];
/** @nocollapse */
DatepickerLocaleExample.ctorParameters = () => [
    { type: DateAdapter }
];
/** @nocollapse */ DatepickerLocaleExample.ɵfac = function DatepickerLocaleExample_Factory(t) { return new (t || DatepickerLocaleExample)(ɵɵdirectiveInject(DateAdapter)); };
/** @nocollapse */ DatepickerLocaleExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerLocaleExample, selectors: [["datepicker-locale-example"]], features: [ɵɵProvidersFeature([
            // The locale would typically be provided on the root module of your application. We do it at
            // the component level here, due to limitations of our example generation script.
            { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
            // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
            // `MatMomentDateModule` in your applications root module. We provide it at the component level
            // here, due to limitations of our example generation script.
            {
                provide: DateAdapter,
                useClass: MomentDateAdapter,
                deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
            },
            { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
        ])], decls: 7, vars: 2, consts: [["matInput", "", "placeholder", "Different locale", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dp", ""], ["mat-button", "", 3, "click"]], template: function DatepickerLocaleExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field");
        ɵɵelement(1, "input", 0);
        ɵɵelement(2, "mat-datepicker-toggle", 1);
        ɵɵelement(3, "mat-datepicker", null, 2);
        ɵɵelementEnd();
        ɵɵelementStart(5, "button", 3);
        ɵɵlistener("click", function DatepickerLocaleExample_Template_button_click_5_listener($event) { return ctx.french(); });
        ɵɵtext(6, "Dynamically switch to French");
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r343 = ɵɵreference(4);
        ɵɵadvance(1);
        ɵɵproperty("matDatepicker", _r343);
        ɵɵadvance(1);
        ɵɵproperty("for", _r343);
    } }, directives: [MatFormField, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerLocaleExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-locale-example',
                templateUrl: 'datepicker-locale-example.html',
                styleUrls: ['datepicker-locale-example.css'],
                providers: [
                    // The locale would typically be provided on the root module of your application. We do it at
                    // the component level here, due to limitations of our example generation script.
                    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
                    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                    // `MatMomentDateModule` in your applications root module. We provide it at the component level
                    // here, due to limitations of our example generation script.
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                ],
            }]
    }], function () { return [{ type: DateAdapter }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    DatepickerLocaleExample.prototype._adapter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker with min & max validation
 */
class DatepickerMinMaxExample {
    constructor() {
        // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
        /** @type {?} */
        const currentYear = new Date().getFullYear();
        this.minDate = new Date(currentYear - 20, 0, 1);
        this.maxDate = new Date(currentYear + 1, 11, 31);
    }
}
DatepickerMinMaxExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-min-max-example',
                templateUrl: 'datepicker-min-max-example.html',
                styleUrls: ['datepicker-min-max-example.css'],
            },] },
];
/** @nocollapse */
DatepickerMinMaxExample.ctorParameters = () => [];
/** @nocollapse */ DatepickerMinMaxExample.ɵfac = function DatepickerMinMaxExample_Factory(t) { return new (t || DatepickerMinMaxExample)(); };
/** @nocollapse */ DatepickerMinMaxExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerMinMaxExample, selectors: [["datepicker-min-max-example"]], decls: 5, vars: 4, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerMinMaxExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelement(1, "input", 1);
        ɵɵelement(2, "mat-datepicker-toggle", 2);
        ɵɵelement(3, "mat-datepicker", null, 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r344 = ɵɵreference(4);
        ɵɵadvance(1);
        ɵɵproperty("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r344);
        ɵɵadvance(1);
        ɵɵproperty("for", _r344);
    } }, directives: [MatFormField, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerMinMaxExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-min-max-example',
                templateUrl: 'datepicker-min-max-example.html',
                styleUrls: ['datepicker-min-max-example.css'],
            }]
    }], function () { return []; }, null); })();
if (false) {
    /** @type {?} */
    DatepickerMinMaxExample.prototype.minDate;
    /** @type {?} */
    DatepickerMinMaxExample.prototype.maxDate;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moment$1 = _rollupMoment__default || _rollupMoment;
/**
 * \@title Datepicker that uses Moment.js dates
 */
class DatepickerMomentExample {
    constructor() {
        // Datepicker takes `Moment` objects instead of `Date` objects.
        this.date = new FormControl(moment$1([2017, 0, 1]));
    }
}
DatepickerMomentExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-moment-example',
                templateUrl: 'datepicker-moment-example.html',
                styleUrls: ['datepicker-moment-example.css'],
                providers: [
                    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                    // `MatMomentDateModule` in your applications root module. We provide it at the component level
                    // here, due to limitations of our example generation script.
                    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                ],
            },] },
];
/** @nocollapse */ DatepickerMomentExample.ɵfac = function DatepickerMomentExample_Factory(t) { return new (t || DatepickerMomentExample)(); };
/** @nocollapse */ DatepickerMomentExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerMomentExample, selectors: [["datepicker-moment-example"]], features: [ɵɵProvidersFeature([
            // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
            // `MatMomentDateModule` in your applications root module. We provide it at the component level
            // here, due to limitations of our example generation script.
            { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
            { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
        ])], decls: 5, vars: 3, consts: [["matInput", "", "placeholder", "Moment.js datepicker", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["dp", ""]], template: function DatepickerMomentExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field");
        ɵɵelement(1, "input", 0);
        ɵɵelement(2, "mat-datepicker-toggle", 1);
        ɵɵelement(3, "mat-datepicker", null, 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r345 = ɵɵreference(4);
        ɵɵadvance(1);
        ɵɵproperty("matDatepicker", _r345)("formControl", ctx.date);
        ɵɵadvance(1);
        ɵɵproperty("for", _r345);
    } }, directives: [MatFormField, MatInput, MatDatepickerInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerMomentExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-moment-example',
                templateUrl: 'datepicker-moment-example.html',
                styleUrls: ['datepicker-moment-example.css'],
                providers: [
                    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                    // `MatMomentDateModule` in your applications root module. We provide it at the component level
                    // here, due to limitations of our example generation script.
                    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                ],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    DatepickerMomentExample.prototype.date;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic datepicker
 */
class DatepickerOverviewExample {
}
DatepickerOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-overview-example',
                templateUrl: 'datepicker-overview-example.html',
                styleUrls: ['datepicker-overview-example.css'],
            },] },
];
/** @nocollapse */ DatepickerOverviewExample.ɵfac = function DatepickerOverviewExample_Factory(t) { return new (t || DatepickerOverviewExample)(); };
/** @nocollapse */ DatepickerOverviewExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerOverviewExample, selectors: [["datepicker-overview-example"]], decls: 5, vars: 2, consts: [["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field");
        ɵɵelement(1, "input", 0);
        ɵɵelement(2, "mat-datepicker-toggle", 1);
        ɵɵelement(3, "mat-datepicker", null, 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r346 = ɵɵreference(4);
        ɵɵadvance(1);
        ɵɵproperty("matDatepicker", _r346);
        ɵɵadvance(1);
        ɵɵproperty("for", _r346);
    } }, directives: [MatFormField, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerOverviewExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-overview-example',
                templateUrl: 'datepicker-overview-example.html',
                styleUrls: ['datepicker-overview-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker start date
 */
class DatepickerStartViewExample {
    constructor() {
        this.startDate = new Date(1990, 0, 1);
    }
}
DatepickerStartViewExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-start-view-example',
                templateUrl: 'datepicker-start-view-example.html',
                styleUrls: ['datepicker-start-view-example.css'],
            },] },
];
/** @nocollapse */ DatepickerStartViewExample.ɵfac = function DatepickerStartViewExample_Factory(t) { return new (t || DatepickerStartViewExample)(); };
/** @nocollapse */ DatepickerStartViewExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerStartViewExample, selectors: [["datepicker-start-view-example"]], decls: 5, vars: 3, consts: [["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["startView", "year", 3, "startAt"], ["picker", ""]], template: function DatepickerStartViewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field");
        ɵɵelement(1, "input", 0);
        ɵɵelement(2, "mat-datepicker-toggle", 1);
        ɵɵelement(3, "mat-datepicker", 2, 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r347 = ɵɵreference(4);
        ɵɵadvance(1);
        ɵɵproperty("matDatepicker", _r347);
        ɵɵadvance(1);
        ɵɵproperty("for", _r347);
        ɵɵadvance(1);
        ɵɵproperty("startAt", ctx.startDate);
    } }, directives: [MatFormField, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerStartViewExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-start-view-example',
                templateUrl: 'datepicker-start-view-example.html',
                styleUrls: ['datepicker-start-view-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    DatepickerStartViewExample.prototype.startDate;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker touch UI
 */
class DatepickerTouchExample {
}
DatepickerTouchExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-touch-example',
                templateUrl: 'datepicker-touch-example.html',
                styleUrls: ['datepicker-touch-example.css'],
            },] },
];
/** @nocollapse */ DatepickerTouchExample.ɵfac = function DatepickerTouchExample_Factory(t) { return new (t || DatepickerTouchExample)(); };
/** @nocollapse */ DatepickerTouchExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerTouchExample, selectors: [["datepicker-touch-example"]], decls: 5, vars: 2, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["picker", ""]], template: function DatepickerTouchExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelement(1, "input", 1);
        ɵɵelement(2, "mat-datepicker-toggle", 2);
        ɵɵelement(3, "mat-datepicker", 3, 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r348 = ɵɵreference(4);
        ɵɵadvance(1);
        ɵɵproperty("matDatepicker", _r348);
        ɵɵadvance(1);
        ɵɵproperty("for", _r348);
    } }, directives: [MatFormField, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerTouchExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-touch-example',
                templateUrl: 'datepicker-touch-example.html',
                styleUrls: ['datepicker-touch-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Datepicker selected value
 */
class DatepickerValueExample {
    constructor() {
        this.date = new FormControl(new Date());
        this.serializedDate = new FormControl((new Date()).toISOString());
    }
}
DatepickerValueExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-value-example',
                templateUrl: 'datepicker-value-example.html',
                styleUrls: ['datepicker-value-example.css'],
            },] },
];
/** @nocollapse */ DatepickerValueExample.ɵfac = function DatepickerValueExample_Factory(t) { return new (t || DatepickerValueExample)(); };
/** @nocollapse */ DatepickerValueExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerValueExample, selectors: [["datepicker-value-example"]], decls: 15, vars: 9, consts: [["matInput", "", "placeholder", "Angular forms", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "placeholder", "Angular forms (w/ deserialization)", 3, "matDatepicker", "formControl"], ["picker2", ""], ["matInput", "", "placeholder", "Value binding", 3, "matDatepicker", "value"], ["picker3", ""]], template: function DatepickerValueExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field");
        ɵɵelement(1, "input", 0);
        ɵɵelement(2, "mat-datepicker-toggle", 1);
        ɵɵelement(3, "mat-datepicker", null, 2);
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-form-field");
        ɵɵelement(6, "input", 3);
        ɵɵelement(7, "mat-datepicker-toggle", 1);
        ɵɵelement(8, "mat-datepicker", null, 4);
        ɵɵelementEnd();
        ɵɵelementStart(10, "mat-form-field");
        ɵɵelement(11, "input", 5);
        ɵɵelement(12, "mat-datepicker-toggle", 1);
        ɵɵelement(13, "mat-datepicker", null, 6);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r349 = ɵɵreference(4);
        const _r350 = ɵɵreference(9);
        const _r351 = ɵɵreference(14);
        ɵɵadvance(1);
        ɵɵproperty("matDatepicker", _r349)("formControl", ctx.date);
        ɵɵadvance(1);
        ɵɵproperty("for", _r349);
        ɵɵadvance(4);
        ɵɵproperty("matDatepicker", _r350)("formControl", ctx.serializedDate);
        ɵɵadvance(1);
        ɵɵproperty("for", _r350);
        ɵɵadvance(4);
        ɵɵproperty("matDatepicker", _r351)("value", ctx.date.value);
        ɵɵadvance(1);
        ɵɵproperty("for", _r351);
    } }, directives: [MatFormField, MatInput, MatDatepickerInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerValueExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-value-example',
                templateUrl: 'datepicker-value-example.html',
                styleUrls: ['datepicker-value-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    DatepickerValueExample.prototype.date;
    /** @type {?} */
    DatepickerValueExample.prototype.serializedDate;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moment$2 = _rollupMoment__default || _rollupMoment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
/** @type {?} */
const MY_FORMATS$1 = {
    parse: {
        dateInput: 'MM/YYYY',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
/**
 * \@title Datepicker emulating a Year and month picker
 */
class DatepickerViewsSelectionExample {
    constructor() {
        this.date = new FormControl(moment$2());
    }
    /**
     * @param {?} normalizedYear
     * @return {?}
     */
    chosenYearHandler(normalizedYear) {
        /** @type {?} */
        const ctrlValue = this.date.value;
        ctrlValue.year(normalizedYear.year());
        this.date.setValue(ctrlValue);
    }
    /**
     * @param {?} normalizedMonth
     * @param {?} datepicker
     * @return {?}
     */
    chosenMonthHandler(normalizedMonth, datepicker) {
        /** @type {?} */
        const ctrlValue = this.date.value;
        ctrlValue.month(normalizedMonth.month());
        this.date.setValue(ctrlValue);
        datepicker.close();
    }
}
DatepickerViewsSelectionExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-views-selection-example',
                templateUrl: 'datepicker-views-selection-example.html',
                styleUrls: ['datepicker-views-selection-example.css'],
                providers: [
                    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                    // application's root module. We provide it at the component level here, due to limitations of
                    // our example generation script.
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
                ],
            },] },
];
/** @nocollapse */ DatepickerViewsSelectionExample.ɵfac = function DatepickerViewsSelectionExample_Factory(t) { return new (t || DatepickerViewsSelectionExample)(); };
/** @nocollapse */ DatepickerViewsSelectionExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerViewsSelectionExample, selectors: [["datepicker-views-selection-example"]], features: [ɵɵProvidersFeature([
            // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
            // application's root module. We provide it at the component level here, due to limitations of
            // our example generation script.
            {
                provide: DateAdapter,
                useClass: MomentDateAdapter,
                deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
            },
            { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
        ])], decls: 5, vars: 3, consts: [["matInput", "", "placeholder", "Month and Year", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["startView", "multi-year", "panelClass", "example-month-picker", 3, "yearSelected", "monthSelected"], ["dp", ""]], template: function DatepickerViewsSelectionExample_Template(rf, ctx) { if (rf & 1) {
        const _r353 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "mat-form-field");
        ɵɵelement(1, "input", 0);
        ɵɵelement(2, "mat-datepicker-toggle", 1);
        ɵɵelementStart(3, "mat-datepicker", 2, 3);
        ɵɵlistener("yearSelected", function DatepickerViewsSelectionExample_Template_mat_datepicker_yearSelected_3_listener($event) { return ctx.chosenYearHandler($event); });
        ɵɵlistener("monthSelected", function DatepickerViewsSelectionExample_Template_mat_datepicker_monthSelected_3_listener($event) { ɵɵrestoreView(_r353); const _r352 = ɵɵreference(4); return ctx.chosenMonthHandler($event, _r352); });
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r352 = ɵɵreference(4);
        ɵɵadvance(1);
        ɵɵproperty("matDatepicker", _r352)("formControl", ctx.date);
        ɵɵadvance(1);
        ɵɵproperty("for", _r352);
    } }, directives: [MatFormField, MatInput, MatDatepickerInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [".example-month-picker[_ngcontent-%COMP%]   .mat-calendar-period-button[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.example-month-picker[_ngcontent-%COMP%]   .mat-calendar-arrow[_ngcontent-%COMP%] {\n  display: none;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerViewsSelectionExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-views-selection-example',
                templateUrl: 'datepicker-views-selection-example.html',
                styleUrls: ['datepicker-views-selection-example.css'],
                providers: [
                    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                    // application's root module. We provide it at the component level here, due to limitations of
                    // our example generation script.
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
                ],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    DatepickerViewsSelectionExample.prototype.date;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    DatepickerApiExample,
    DatepickerColorExample,
    DatepickerCustomHeaderExample,
    DatepickerCustomIconExample,
    DatepickerDateClassExample,
    DatepickerDisabledExample,
    DatepickerEventsExample,
    DatepickerFilterExample,
    DatepickerFormatsExample,
    DatepickerLocaleExample,
    DatepickerMinMaxExample,
    DatepickerMomentExample,
    DatepickerOverviewExample,
    DatepickerStartViewExample,
    DatepickerTouchExample,
    DatepickerValueExample,
    DatepickerViewsSelectionExample,
    ExampleHeader,
];
class DatepickerExamplesModule {
}
DatepickerExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatDatepickerModule,
                    MatInputModule,
                    MatIconModule,
                    MatNativeDateModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ DatepickerExamplesModule.ɵmod = ɵɵdefineNgModule({ type: DatepickerExamplesModule });
/** @nocollapse */ DatepickerExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function DatepickerExamplesModule_Factory(t) { return new (t || DatepickerExamplesModule)(); }, imports: [[
            CommonModule,
            MatButtonModule,
            MatDatepickerModule,
            MatInputModule,
            MatIconModule,
            MatNativeDateModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(DatepickerExamplesModule, { declarations: [DatepickerApiExample,
        DatepickerColorExample,
        DatepickerCustomHeaderExample,
        DatepickerCustomIconExample,
        DatepickerDateClassExample,
        DatepickerDisabledExample,
        DatepickerEventsExample,
        DatepickerFilterExample,
        DatepickerFormatsExample,
        DatepickerLocaleExample,
        DatepickerMinMaxExample,
        DatepickerMomentExample,
        DatepickerOverviewExample,
        DatepickerStartViewExample,
        DatepickerTouchExample,
        DatepickerValueExample,
        DatepickerViewsSelectionExample,
        ExampleHeader], imports: [CommonModule,
        MatButtonModule,
        MatDatepickerModule,
        MatInputModule,
        MatIconModule,
        MatNativeDateModule,
        ReactiveFormsModule], exports: [DatepickerApiExample,
        DatepickerColorExample,
        DatepickerCustomHeaderExample,
        DatepickerCustomIconExample,
        DatepickerDateClassExample,
        DatepickerDisabledExample,
        DatepickerEventsExample,
        DatepickerFilterExample,
        DatepickerFormatsExample,
        DatepickerLocaleExample,
        DatepickerMinMaxExample,
        DatepickerMomentExample,
        DatepickerOverviewExample,
        DatepickerStartViewExample,
        DatepickerTouchExample,
        DatepickerValueExample,
        DatepickerViewsSelectionExample,
        ExampleHeader] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatDatepickerModule,
                    MatInputModule,
                    MatIconModule,
                    MatNativeDateModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { DatepickerApiExample, DatepickerColorExample, DatepickerCustomHeaderExample, DatepickerCustomIconExample, DatepickerDateClassExample, DatepickerDisabledExample, DatepickerEventsExample, DatepickerExamplesModule, DatepickerFilterExample, DatepickerFormatsExample, DatepickerLocaleExample, DatepickerMinMaxExample, DatepickerMomentExample, DatepickerOverviewExample, DatepickerStartViewExample, DatepickerTouchExample, DatepickerValueExample, DatepickerViewsSelectionExample, ExampleHeader };
//# sourceMappingURL=datepicker.js.map
