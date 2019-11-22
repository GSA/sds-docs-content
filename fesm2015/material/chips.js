import { moveItemInArray, CdkDropList, CdkDrag, DragDropModule } from '@angular/cdk/drag-drop';
import { NgForOf, NgIf, AsyncPipe, CommonModule } from '@angular/common';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtemplate, ɵɵproperty, ɵɵadvance, ɵɵtextInterpolate1, Component, ViewChild, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵpipe, ɵɵreference, ɵɵpipeBind1, ɵsetClassMetadata, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { FormControl, DefaultValueAccessor, NgControlStatus, FormControlDirective, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteTrigger, MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipList, MatChipInput, MatChip, MatChipRemove, MatChipsModule } from '@angular/material/chips';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { startWith, map } from 'rxjs/operators';
import { MatOption } from '@angular/material/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const _c0 = ["fruitInput"];
const _c1 = ["auto"];
function ChipsAutocompleteExample_mat_chip_3_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon", 11);
    ɵɵtext(1, "cancel");
    ɵɵelementEnd();
} }
function ChipsAutocompleteExample_mat_chip_3_Template(rf, ctx) { if (rf & 1) {
    const _r262 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-chip", 9);
    ɵɵlistener("removed", function ChipsAutocompleteExample_mat_chip_3_Template_mat_chip_removed_0_listener($event) { ɵɵrestoreView(_r262); const fruit_r259 = ctx.$implicit; const ctx_r261 = ɵɵnextContext(); return ctx_r261.remove(fruit_r259); });
    ɵɵtext(1);
    ɵɵtemplate(2, ChipsAutocompleteExample_mat_chip_3_mat_icon_2_Template, 2, 0, "mat-icon", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const fruit_r259 = ctx.$implicit;
    const ctx_r255 = ɵɵnextContext();
    ɵɵproperty("selectable", ctx_r255.selectable)("removable", ctx_r255.removable);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", fruit_r259, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r255.removable);
} }
function ChipsAutocompleteExample_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const fruit_r263 = ctx.$implicit;
    ɵɵproperty("value", fruit_r263);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", fruit_r263, " ");
} }
/**
 * \@title Chips Autocomplete
 */
class ChipsAutocompleteExample {
    constructor() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruitCtrl = new FormControl();
        this.fruits = ['Lemon'];
        this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(startWith(null), map((/**
         * @param {?} fruit
         * @return {?}
         */
        (fruit) => fruit ? this._filter(fruit) : this.allFruits.slice())));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    add(event) {
        /** @type {?} */
        const input = event.input;
        /** @type {?} */
        const value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
        this.fruitCtrl.setValue(null);
    }
    /**
     * @param {?} fruit
     * @return {?}
     */
    remove(fruit) {
        /** @type {?} */
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selected(event) {
        this.fruits.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        /** @type {?} */
        const filterValue = value.toLowerCase();
        return this.allFruits.filter((/**
         * @param {?} fruit
         * @return {?}
         */
        fruit => fruit.toLowerCase().indexOf(filterValue) === 0));
    }
}
ChipsAutocompleteExample.decorators = [
    { type: Component, args: [{
                selector: 'chips-autocomplete-example',
                templateUrl: 'chips-autocomplete-example.html',
                styleUrls: ['chips-autocomplete-example.css'],
            },] },
];
/** @nocollapse */
ChipsAutocompleteExample.ctorParameters = () => [];
ChipsAutocompleteExample.propDecorators = {
    fruitInput: [{ type: ViewChild, args: ['fruitInput',] }],
    matAutocomplete: [{ type: ViewChild, args: ['auto',] }]
};
/** @nocollapse */ ChipsAutocompleteExample.ɵfac = function ChipsAutocompleteExample_Factory(t) { return new (t || ChipsAutocompleteExample)(); };
/** @nocollapse */ ChipsAutocompleteExample.ɵcmp = ɵɵdefineComponent({ type: ChipsAutocompleteExample, selectors: [["chips-autocomplete-example"]], viewQuery: function ChipsAutocompleteExample_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
        ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fruitInput = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.matAutocomplete = _t.first);
    } }, decls: 10, vars: 8, consts: [[1, "example-chip-list"], ["aria-label", "Fruit selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New fruit...", 3, "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd"], ["fruitInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [3, "value"]], template: function ChipsAutocompleteExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-chip-list", 1, 2);
        ɵɵtemplate(3, ChipsAutocompleteExample_mat_chip_3_Template, 3, 4, "mat-chip", 3);
        ɵɵelementStart(4, "input", 4, 5);
        ɵɵlistener("matChipInputTokenEnd", function ChipsAutocompleteExample_Template_input_matChipInputTokenEnd_4_listener($event) { return ctx.add($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "mat-autocomplete", 6, 7);
        ɵɵlistener("optionSelected", function ChipsAutocompleteExample_Template_mat_autocomplete_optionSelected_6_listener($event) { return ctx.selected($event); });
        ɵɵtemplate(8, ChipsAutocompleteExample_mat_option_8_Template, 2, 2, "mat-option", 8);
        ɵɵpipe(9, "async");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r254 = ɵɵreference(2);
        const _r257 = ɵɵreference(7);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.fruits);
        ɵɵadvance(1);
        ɵɵproperty("formControl", ctx.fruitCtrl)("matAutocomplete", _r257)("matChipInputFor", _r254)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ɵɵpipeBind1(9, 6, ctx.filteredFruits));
    } }, directives: [MatFormField, MatChipList, NgForOf, DefaultValueAccessor, MatAutocompleteTrigger, MatChipInput, NgControlStatus, FormControlDirective, MatAutocomplete, MatChip, NgIf, MatIcon, MatChipRemove, MatOption], pipes: [AsyncPipe], styles: [".example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChipsAutocompleteExample, [{
        type: Component,
        args: [{
                selector: 'chips-autocomplete-example',
                templateUrl: 'chips-autocomplete-example.html',
                styleUrls: ['chips-autocomplete-example.css'],
            }]
    }], function () { return []; }, { fruitInput: [{
            type: ViewChild,
            args: ['fruitInput']
        }], matAutocomplete: [{
            type: ViewChild,
            args: ['auto']
        }] }); })();
if (false) {
    /** @type {?} */
    ChipsAutocompleteExample.prototype.visible;
    /** @type {?} */
    ChipsAutocompleteExample.prototype.selectable;
    /** @type {?} */
    ChipsAutocompleteExample.prototype.removable;
    /** @type {?} */
    ChipsAutocompleteExample.prototype.separatorKeysCodes;
    /** @type {?} */
    ChipsAutocompleteExample.prototype.fruitCtrl;
    /** @type {?} */
    ChipsAutocompleteExample.prototype.filteredFruits;
    /** @type {?} */
    ChipsAutocompleteExample.prototype.fruits;
    /** @type {?} */
    ChipsAutocompleteExample.prototype.allFruits;
    /** @type {?} */
    ChipsAutocompleteExample.prototype.fruitInput;
    /** @type {?} */
    ChipsAutocompleteExample.prototype.matAutocomplete;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function ChipsDragDropExample_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-chip", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const vegetable_r265 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", vegetable_r265.name, " ");
} }
/**
 * @record
 */
function Vegetable() { }
if (false) {
    /** @type {?} */
    Vegetable.prototype.name;
}
/**
 * \@title Chips Drag and Drop
 */
class ChipsDragDropExample {
    constructor() {
        this.vegetables = [
            { name: 'apple' },
            { name: 'banana' },
            { name: 'strawberry' },
            { name: 'orange' },
            { name: 'kiwi' },
            { name: 'cherry' },
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
    }
}
ChipsDragDropExample.decorators = [
    { type: Component, args: [{
                selector: 'chips-drag-drop-example',
                templateUrl: 'chips-drag-drop-example.html',
                styleUrls: ['chips-drag-drop-example.css']
            },] },
];
/** @nocollapse */ ChipsDragDropExample.ɵfac = function ChipsDragDropExample_Factory(t) { return new (t || ChipsDragDropExample)(); };
/** @nocollapse */ ChipsDragDropExample.ɵcmp = ɵɵdefineComponent({ type: ChipsDragDropExample, selectors: [["chips-drag-drop-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "example-chip", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"]], template: function ChipsDragDropExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-chip-list", 0);
        ɵɵlistener("cdkDropListDropped", function ChipsDragDropExample_Template_mat_chip_list_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        ɵɵtemplate(1, ChipsDragDropExample_mat_chip_1_Template, 2, 1, "mat-chip", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.vegetables);
    } }, directives: [MatChipList, CdkDropList, NgForOf, MatChip, CdkDrag], styles: [".example-box.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-chip[_ngcontent-%COMP%]   .cdk-drop-list-dragging[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChipsDragDropExample, [{
        type: Component,
        args: [{
                selector: 'chips-drag-drop-example',
                templateUrl: 'chips-drag-drop-example.html',
                styleUrls: ['chips-drag-drop-example.css']
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    ChipsDragDropExample.prototype.vegetables;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function ChipsInputExample_mat_chip_3_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon", 7);
    ɵɵtext(1, "cancel");
    ɵɵelementEnd();
} }
function ChipsInputExample_mat_chip_3_Template(rf, ctx) { if (rf & 1) {
    const _r271 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-chip", 5);
    ɵɵlistener("removed", function ChipsInputExample_mat_chip_3_Template_mat_chip_removed_0_listener($event) { ɵɵrestoreView(_r271); const fruit_r268 = ctx.$implicit; const ctx_r270 = ɵɵnextContext(); return ctx_r270.remove(fruit_r268); });
    ɵɵtext(1);
    ɵɵtemplate(2, ChipsInputExample_mat_chip_3_mat_icon_2_Template, 2, 0, "mat-icon", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    const fruit_r268 = ctx.$implicit;
    const ctx_r267 = ɵɵnextContext();
    ɵɵproperty("selectable", ctx_r267.selectable)("removable", ctx_r267.removable);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", fruit_r268.name, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r267.removable);
} }
/**
 * @record
 */
function Fruit() { }
if (false) {
    /** @type {?} */
    Fruit.prototype.name;
}
/**
 * \@title Chips with input
 */
class ChipsInputExample {
    constructor() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruits = [
            { name: 'Lemon' },
            { name: 'Lime' },
            { name: 'Apple' },
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    add(event) {
        /** @type {?} */
        const input = event.input;
        /** @type {?} */
        const value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    /**
     * @param {?} fruit
     * @return {?}
     */
    remove(fruit) {
        /** @type {?} */
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }
}
ChipsInputExample.decorators = [
    { type: Component, args: [{
                selector: 'chips-input-example',
                templateUrl: 'chips-input-example.html',
                styleUrls: ['chips-input-example.css'],
            },] },
];
/** @nocollapse */ ChipsInputExample.ɵfac = function ChipsInputExample_Factory(t) { return new (t || ChipsInputExample)(); };
/** @nocollapse */ ChipsInputExample.ɵcmp = ɵɵdefineComponent({ type: ChipsInputExample, selectors: [["chips-input-example"]], decls: 5, vars: 4, consts: [[1, "example-chip-list"], ["aria-label", "Fruit selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New fruit...", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""]], template: function ChipsInputExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-chip-list", 1, 2);
        ɵɵtemplate(3, ChipsInputExample_mat_chip_3_Template, 3, 4, "mat-chip", 3);
        ɵɵelementStart(4, "input", 4);
        ɵɵlistener("matChipInputTokenEnd", function ChipsInputExample_Template_input_matChipInputTokenEnd_4_listener($event) { return ctx.add($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r266 = ɵɵreference(2);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.fruits);
        ɵɵadvance(1);
        ɵɵproperty("matChipInputFor", _r266)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", ctx.addOnBlur);
    } }, directives: [MatFormField, MatChipList, NgForOf, MatChipInput, MatChip, NgIf, MatIcon, MatChipRemove], styles: [".example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChipsInputExample, [{
        type: Component,
        args: [{
                selector: 'chips-input-example',
                templateUrl: 'chips-input-example.html',
                styleUrls: ['chips-input-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    ChipsInputExample.prototype.visible;
    /** @type {?} */
    ChipsInputExample.prototype.selectable;
    /** @type {?} */
    ChipsInputExample.prototype.removable;
    /** @type {?} */
    ChipsInputExample.prototype.addOnBlur;
    /** @type {?} */
    ChipsInputExample.prototype.separatorKeysCodes;
    /** @type {?} */
    ChipsInputExample.prototype.fruits;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic chips
 */
class ChipsOverviewExample {
}
ChipsOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'chips-overview-example',
                templateUrl: 'chips-overview-example.html',
                styleUrls: ['chips-overview-example.css'],
            },] },
];
/** @nocollapse */ ChipsOverviewExample.ɵfac = function ChipsOverviewExample_Factory(t) { return new (t || ChipsOverviewExample)(); };
/** @nocollapse */ ChipsOverviewExample.ɵcmp = ɵɵdefineComponent({ type: ChipsOverviewExample, selectors: [["chips-overview-example"]], decls: 9, vars: 0, consts: [["aria-label", "Fish selection"], ["color", "primary", "selected", ""], ["color", "accent", "selected", ""]], template: function ChipsOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-chip-list", 0);
        ɵɵelementStart(1, "mat-chip");
        ɵɵtext(2, "One fish");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-chip");
        ɵɵtext(4, "Two fish");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-chip", 1);
        ɵɵtext(6, "Primary fish");
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-chip", 2);
        ɵɵtext(8, "Accent fish");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatChipList, MatChip], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChipsOverviewExample, [{
        type: Component,
        args: [{
                selector: 'chips-overview-example',
                templateUrl: 'chips-overview-example.html',
                styleUrls: ['chips-overview-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function ChipsStackedExample_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-chip", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const chip_r273 = ctx.$implicit;
    ɵɵproperty("color", chip_r273.color);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", chip_r273.name, " ");
} }
/**
 * @record
 */
function ChipColor() { }
if (false) {
    /** @type {?} */
    ChipColor.prototype.name;
    /** @type {?} */
    ChipColor.prototype.color;
}
/**
 * \@title Stacked chips
 */
class ChipsStackedExample {
    constructor() {
        this.availableColors = [
            { name: 'none', color: undefined },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
}
ChipsStackedExample.decorators = [
    { type: Component, args: [{
                selector: 'chips-stacked-example',
                templateUrl: 'chips-stacked-example.html',
                styleUrls: ['chips-stacked-example.css'],
            },] },
];
/** @nocollapse */ ChipsStackedExample.ɵfac = function ChipsStackedExample_Factory(t) { return new (t || ChipsStackedExample)(); };
/** @nocollapse */ ChipsStackedExample.ɵcmp = ɵɵdefineComponent({ type: ChipsStackedExample, selectors: [["chips-stacked-example"]], decls: 2, vars: 1, consts: [["aria-label", "Color selection", 1, "mat-chip-list-stacked"], ["selected", "", 3, "color", 4, "ngFor", "ngForOf"], ["selected", "", 3, "color"]], template: function ChipsStackedExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-chip-list", 0);
        ɵɵtemplate(1, ChipsStackedExample_mat_chip_1_Template, 2, 2, "mat-chip", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.availableColors);
    } }, directives: [MatChipList, NgForOf, MatChip], styles: ["mat-chip[_ngcontent-%COMP%] {\n  max-width: 200px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChipsStackedExample, [{
        type: Component,
        args: [{
                selector: 'chips-stacked-example',
                templateUrl: 'chips-stacked-example.html',
                styleUrls: ['chips-stacked-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    ChipsStackedExample.prototype.availableColors;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    ChipsAutocompleteExample,
    ChipsDragDropExample,
    ChipsInputExample,
    ChipsOverviewExample,
    ChipsStackedExample,
];
class ChipsExamplesModule {
}
ChipsExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    DragDropModule,
                    MatAutocompleteModule,
                    MatChipsModule,
                    MatIconModule,
                    MatFormFieldModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ ChipsExamplesModule.ɵmod = ɵɵdefineNgModule({ type: ChipsExamplesModule });
/** @nocollapse */ ChipsExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function ChipsExamplesModule_Factory(t) { return new (t || ChipsExamplesModule)(); }, imports: [[
            CommonModule,
            DragDropModule,
            MatAutocompleteModule,
            MatChipsModule,
            MatIconModule,
            MatFormFieldModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ChipsExamplesModule, { declarations: [ChipsAutocompleteExample,
        ChipsDragDropExample,
        ChipsInputExample,
        ChipsOverviewExample,
        ChipsStackedExample], imports: [CommonModule,
        DragDropModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule], exports: [ChipsAutocompleteExample,
        ChipsDragDropExample,
        ChipsInputExample,
        ChipsOverviewExample,
        ChipsStackedExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChipsExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    DragDropModule,
                    MatAutocompleteModule,
                    MatChipsModule,
                    MatIconModule,
                    MatFormFieldModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { ChipsAutocompleteExample, ChipsDragDropExample, ChipsExamplesModule, ChipsInputExample, ChipsOverviewExample, ChipsStackedExample };
//# sourceMappingURL=chips.js.map
