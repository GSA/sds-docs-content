import { ɵɵelement, ɵɵnextContext, ɵɵattribute, ɵɵsanitizeUrl, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelementContainer, ɵɵreference, ɵɵadvance, ɵɵproperty, ɵɵpureFunction1, ɵɵtemplate, ɵɵtextInterpolate, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, ɵɵdefineComponent, ɵɵtemplateRefExtractor, ɵɵtextInterpolate1, ɵsetClassMetadata, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, Injectable, ɵɵdefineInjectable, ɵɵdirectiveInject, ɵɵProvidersFeature, ɵɵinject, ɵɵclassProp } from '@angular/core';
import { NgIf, NgForOf, NgTemplateOutlet, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { BehaviorSubject, merge } from 'rxjs';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTreeFlattener, MatTreeFlatDataSource, MatTree, MatTreeNodeDef, MatTreeNode, MatTreeNodeToggle, MatTreeNodePadding, MatTreeNestedDataSource, MatNestedTreeNode, MatTreeNodeOutlet, MatTreeModule } from '@angular/material/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { MatFormField } from '@angular/material/form-field';
import { map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class FooterModel {
}
if (false) {
    /**
     * List of sections and their links
     * @type {?}
     */
    FooterModel.prototype.linkSections;
    /**
     * Footer text and logo
     * @type {?}
     */
    FooterModel.prototype.footerLogo;
}
class FooterLinkSection {
}
if (false) {
    /**
     * Title text for the section
     * @type {?}
     */
    FooterLinkSection.prototype.text;
    /**
     * Links in the section
     * @type {?}
     */
    FooterLinkSection.prototype.links;
}
class FooterLink {
}
if (false) {
    /**
     * Internal Angualr Routes, External HREF, EVENT: event on parent component
     * @type {?}
     */
    FooterLink.prototype.mode;
    /**
     * Text to be displayed in the link
     * @type {?}
     */
    FooterLink.prototype.text;
    /**
     * Navigation Route
     * @type {?}
     */
    FooterLink.prototype.route;
}
/**
 * @record
 */
function FooterLogo() { }
if (false) {
    /**
     * Text for the Header
     * @type {?}
     */
    FooterLogo.prototype.text;
    /**
     * Image Source Path for the Image button
     * @type {?}
     */
    FooterLogo.prototype.imageSourcePath;
    /**
     * Alt text for image
     * @type {?}
     */
    FooterLogo.prototype.imageAltText;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function INavigationLink() { }
if (false) {
    /**
     * Text to be displayed in the link
     * @type {?}
     */
    INavigationLink.prototype.text;
    /**
     * Navigation Route
     * @type {?}
     */
    INavigationLink.prototype.route;
    /**
     * Internal Angualr Routes, External HREF, EVENT: event on parent component
     * @type {?}
     */
    INavigationLink.prototype.mode;
}
/** @enum {number} */
const NavigationMode = {
    INTERNAL: 0,
    EXTERNAL: 1,
    EVENT: 2,
    LABEL: 3,
};
NavigationMode[NavigationMode.INTERNAL] = 'INTERNAL';
NavigationMode[NavigationMode.EXTERNAL] = 'EXTERNAL';
NavigationMode[NavigationMode.EVENT] = 'EVENT';
NavigationMode[NavigationMode.LABEL] = 'LABEL';
/**
 * @record
 */
function Selectable() { }
if (false) {
    /**
     * Identifier for the item when search for selected
     * @type {?}
     */
    Selectable.prototype.id;
    /**
     * Status of if the item is selected
     * @type {?|undefined}
     */
    Selectable.prototype.selected;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavigationHelper {
    /**
     * checks if link is internal
     * @param {?} link
     * @return {?}
     */
    isLinkInternal(link) {
        return link.mode === NavigationMode.INTERNAL;
    }
    /**
     * checks if link is external
     * @param {?} link
     * @return {?}
     */
    isLinkExternal(link) {
        return link.mode === NavigationMode.EXTERNAL;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function SdsFooter_img_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "img", 22);
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("src", ctx_r0.model.footerLogo.imageSourcePath, ɵɵsanitizeUrl)("alt", ctx_r0.model.footerLogo.imageAltText);
} }
function SdsFooter_a_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 23);
    ɵɵtext(1, " GSA.gov ");
    ɵɵelementEnd();
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function SdsFooter_div_15_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 29);
    ɵɵelementContainer(1, 30);
    ɵɵelementEnd();
} if (rf & 2) {
    const link_r11 = ctx.$implicit;
    const ctx_r10 = ɵɵnextContext(2);
    const _r3 = ɵɵreference(26);
    const _r5 = ɵɵreference(28);
    const _r7 = ɵɵreference(30);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r10.navigationHelper.isLinkInternal(link_r11) ? _r3 : ctx_r10.navigationHelper.isLinkExternal(link_r11) ? _r5 : _r7)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, link_r11));
} }
function SdsFooter_div_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵelementStart(1, "section", 25);
    ɵɵelementStart(2, "span", 26);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "ul", 27);
    ɵɵtemplate(5, SdsFooter_div_15_li_5_Template, 2, 4, "li", 28);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const section_r9 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate(section_r9.text);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", section_r9.links);
} }
const _c1 = function (a0) { return [a0]; };
function SdsFooter_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const link_r12 = ctx.$implicit;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c1, link_r12.route));
    ɵɵadvance(1);
    ɵɵtextInterpolate(link_r12.text);
} }
function SdsFooter_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const link_r13 = ctx.$implicit;
    ɵɵattribute("href", ɵɵpureFunction1(2, _c1, link_r13.route), ɵɵsanitizeUrl);
    ɵɵadvance(1);
    ɵɵtextInterpolate(link_r13.text);
} }
function SdsFooter_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 32);
    ɵɵlistener("click", function SdsFooter_ng_template_29_Template_a_click_0_listener($event) { ɵɵrestoreView(_r16); const link_r14 = ctx.$implicit; const ctx_r15 = ɵɵnextContext(); return ctx_r15.linkClickEvent(link_r14); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const link_r14 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(link_r14.text);
} }
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class SdsFooter {
    constructor() {
        /**
         * Navigation helper
         */
        this.navigationHelper = new NavigationHelper();
        /**
         * Event for event based
         */
        this.linkEvent = new EventEmitter();
    }
    /**
     * Link clicked and emits the link data into an event
     * @param {?} link
     * @return {?}
     */
    linkClickEvent(link) {
        this.linkEvent.emit(link);
        return false;
    }
}
SdsFooter.decorators = [
    { type: Component, args: [{
                selector: 'sds-footer',
                templateUrl: './footer.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
SdsFooter.propDecorators = {
    model: [{ type: Input }],
    linkEvent: [{ type: Output }]
};
/** @nocollapse */ SdsFooter.ɵfac = function SdsFooter_Factory(t) { return new (t || SdsFooter)(); };
/** @nocollapse */ SdsFooter.ɵcmp = ɵɵdefineComponent({ type: SdsFooter, selectors: [["sds-footer"]], inputs: { model: "model" }, outputs: { linkEvent: "linkEvent" }, decls: 31, vars: 4, consts: [["role", "contentinfo", 1, "usa-footer", "usa-footer--big"], [1, "usa-footer__primary-section"], [1, "grid-container"], [1, "grid-row", "grid-gap"], [1, "mobile-lg:grid-col-12", "tablet:grid-col-4"], [1, "usa-footer__logo", "grid-row", "mobile-lg:grid-gap-1", "margin-top-3"], [1, "mobile-lg:grid-col-3", "mobile-lg:grid-offset-3", "tablet:grid-offset-none", "tablet:grid-col-auto"], ["class", "usa-footer__logo-img", 4, "ngIf"], ["class", "usa-footer__logo-text", "target", "_blank", "href", "http://gsa.gov", 4, "ngIf"], [1, "mobile-lg:grid-col-4", "tablet:grid-col-auto"], [1, "usa-footer__logo-heading"], [1, "mobile-lg:grid-col-12", "tablet:grid-col-8"], [1, "usa-footer__nav"], [1, "grid-row", "grid-gap-4"], ["class", "mobile-lg:grid-col-12 desktop:grid-col-4", 4, "ngFor", "ngForOf"], [1, "usa-footer__secondary-section"], [1, "grid-row"], [1, "grid-col-12"], [1, "font-body-2xs", "line-height-sans-4", "margin-top-0"], ["footerRouteLinkTemplate", ""], ["footerHREFLinkTemplate", ""], ["footerEVENTLinkTemplate", ""], [1, "usa-footer__logo-img"], ["target", "_blank", "href", "http://gsa.gov", 1, "usa-footer__logo-text"], [1, "mobile-lg:grid-col-12", "desktop:grid-col-4"], [1, "usa-footer__primary-content", "usa-footer__primary-content--collapsible"], [1, "usa-footer__primary-link"], [1, "usa-list", "usa-list--unstyled"], ["class", "usa-footer__secondary-link", 4, "ngFor", "ngForOf"], [1, "usa-footer__secondary-link"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "routerLink"], ["href", "javascript:void(0)", 3, "click"]], template: function SdsFooter_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "footer", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵelementStart(4, "div", 4);
        ɵɵelementStart(5, "div", 5);
        ɵɵelementStart(6, "div", 6);
        ɵɵtemplate(7, SdsFooter_img_7_Template, 1, 2, "img", 7);
        ɵɵtemplate(8, SdsFooter_a_8_Template, 2, 0, "a", 8);
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 9);
        ɵɵelementStart(10, "span", 10);
        ɵɵtext(11);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "div", 11);
        ɵɵelementStart(13, "nav", 12);
        ɵɵelementStart(14, "div", 13);
        ɵɵtemplate(15, SdsFooter_div_15_Template, 6, 2, "div", 14);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(16, "div", 15);
        ɵɵelementStart(17, "div", 2);
        ɵɵelementStart(18, "div", 16);
        ɵɵelementStart(19, "div", 17);
        ɵɵelementStart(20, "p", 18);
        ɵɵtext(21, " This is a U.S. General Services Administration Federal Government computer system that is ");
        ɵɵelementStart(22, "strong");
        ɵɵtext(23, "\"FOR OFFICIAL USE ONLY.\"");
        ɵɵelementEnd();
        ɵɵtext(24, " This system is subject to monitoring. Individuals found performing unauthorized activities are subject to disciplinary action including criminal prosecution. ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(25, SdsFooter_ng_template_25_Template, 2, 4, "ng-template", null, 19, ɵɵtemplateRefExtractor);
        ɵɵtemplate(27, SdsFooter_ng_template_27_Template, 2, 4, "ng-template", null, 20, ɵɵtemplateRefExtractor);
        ɵɵtemplate(29, SdsFooter_ng_template_29_Template, 2, 1, "ng-template", null, 21, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵɵadvance(7);
        ɵɵproperty("ngIf", ctx.model.footerLogo);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.model.footerLogo);
        ɵɵadvance(3);
        ɵɵtextInterpolate1(" ", (ctx.model.footerLogo == null ? null : ctx.model.footerLogo.text) || "General Services Administration", " ");
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.model.linkSections);
    } }, directives: [NgIf, NgForOf, NgTemplateOutlet, RouterLinkWithHref], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SdsFooter, [{
        type: Component,
        args: [{
                selector: 'sds-footer',
                templateUrl: './footer.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { model: [{
            type: Input
        }], linkEvent: [{
            type: Output
        }] }); })();
if (false) {
    /**
     * Navigation helper
     * @type {?}
     */
    SdsFooter.prototype.navigationHelper;
    /**
     * Model used for the different display portions of the footer
     * @type {?}
     */
    SdsFooter.prototype.model;
    /**
     * Event for event based
     * @type {?}
     */
    SdsFooter.prototype.linkEvent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class SdsFooterModule {
}
SdsFooterModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, RouterModule],
                exports: [SdsFooter],
                declarations: [SdsFooter],
            },] },
];
/** @nocollapse */ SdsFooterModule.ɵmod = ɵɵdefineNgModule({ type: SdsFooterModule });
/** @nocollapse */ SdsFooterModule.ɵinj = ɵɵdefineInjector({ factory: function SdsFooterModule_Factory(t) { return new (t || SdsFooterModule)(); }, imports: [[CommonModule, FormsModule, RouterModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SdsFooterModule, { declarations: [SdsFooter], imports: [CommonModule, FormsModule, RouterModule], exports: [SdsFooter] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SdsFooterModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, RouterModule],
                exports: [SdsFooter],
                declarations: [SdsFooter],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Footer overview
 */
class FooterOverviewExample {
    constructor() {
        this.linkEvent = new BehaviorSubject({});
        this.modelFooter = {
            linkSections: [
                {
                    text: 'About beta.SAM.gov',
                    links: [
                        {
                            text: 'Explore Our Community',
                            route: '/',
                            mode: NavigationMode.INTERNAL
                        },
                        { text: 'Release Notes', route: '/', mode: NavigationMode.INTERNAL }
                    ]
                },
                {
                    text: 'Our Partners',
                    links: [
                        { text: 'Aquisition.gov', route: '/', mode: NavigationMode.INTERNAL },
                        {
                            text: 'USASpending.gov',
                            route: '/',
                            mode: NavigationMode.INTERNAL
                        },
                        { text: 'Grants.gov', route: '/', mode: NavigationMode.INTERNAL },
                        { text: 'More Partners', route: '/', mode: NavigationMode.INTERNAL }
                    ]
                },
                {
                    text: 'Customer Service',
                    links: [
                        {
                            text: 'Learning Center',
                            route: '/',
                            mode: NavigationMode.INTERNAL
                        },
                        {
                            text: 'Contact Federal Service Desk',
                            route: '/',
                            mode: NavigationMode.INTERNAL
                        },
                        { text: 'Resources', route: '/', mode: NavigationMode.INTERNAL },
                        {
                            text: 'Freedom of Information Act',
                            route: '/',
                            mode: NavigationMode.INTERNAL
                        }
                    ]
                }
            ]
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.linkEvent.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            console.log('Link Event Clicked Change');
            console.log(value);
        }));
    }
}
FooterOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'footer-overview-example',
                templateUrl: 'footer-overview-example.html',
                styleUrls: ['footer-overview-example.css']
            },] },
];
/** @nocollapse */
FooterOverviewExample.ctorParameters = () => [];
/** @nocollapse */ FooterOverviewExample.ɵfac = function FooterOverviewExample_Factory(t) { return new (t || FooterOverviewExample)(); };
/** @nocollapse */ FooterOverviewExample.ɵcmp = ɵɵdefineComponent({ type: FooterOverviewExample, selectors: [["footer-overview-example"]], decls: 1, vars: 1, consts: [[3, "model", "linkEvent"]], template: function FooterOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "sds-footer", 0);
        ɵɵlistener("linkEvent", function FooterOverviewExample_Template_sds_footer_linkEvent_0_listener($event) { return ctx.linkEvent.next($event); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("model", ctx.modelFooter);
    } }, directives: [SdsFooter], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FooterOverviewExample, [{
        type: Component,
        args: [{
                selector: 'footer-overview-example',
                templateUrl: 'footer-overview-example.html',
                styleUrls: ['footer-overview-example.css']
            }]
    }], function () { return []; }, null); })();
if (false) {
    /** @type {?} */
    FooterOverviewExample.prototype.linkEvent;
    /** @type {?} */
    FooterOverviewExample.prototype.modelFooter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    FooterOverviewExample,
];
class FooterExamplesModule {
}
FooterExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    SdsFooterModule
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ FooterExamplesModule.ɵmod = ɵɵdefineNgModule({ type: FooterExamplesModule });
/** @nocollapse */ FooterExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function FooterExamplesModule_Factory(t) { return new (t || FooterExamplesModule)(); }, imports: [[
            SdsFooterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FooterExamplesModule, { declarations: [FooterOverviewExample], imports: [SdsFooterModule], exports: [FooterOverviewExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(FooterExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    SdsFooterModule
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TreeChecklistExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    const _r56 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tree-node", 3);
    ɵɵelement(1, "button", 4);
    ɵɵelementStart(2, "mat-checkbox", 5);
    ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_1_Template_mat_checkbox_change_2_listener($event) { ɵɵrestoreView(_r56); const node_r54 = ctx.$implicit; const ctx_r55 = ɵɵnextContext(); return ctx_r55.todoLeafItemSelectionToggle(node_r54); });
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r54 = ctx.$implicit;
    const ctx_r51 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("checked", ctx_r51.checklistSelection.isSelected(node_r54));
    ɵɵadvance(1);
    ɵɵtextInterpolate(node_r54.item);
} }
function TreeChecklistExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    const _r60 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tree-node", 6);
    ɵɵelement(1, "button", 4);
    ɵɵelementStart(2, "mat-form-field");
    ɵɵelement(3, "input", 7, 8);
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 9);
    ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_2_Template_button_click_5_listener($event) { ɵɵrestoreView(_r60); const node_r57 = ctx.$implicit; const _r58 = ɵɵreference(4); const ctx_r59 = ɵɵnextContext(); return ctx_r59.saveNode(node_r57, _r58.value); });
    ɵɵtext(6, "Save");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function TreeChecklistExample_mat_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    const _r63 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tree-node", 6);
    ɵɵelementStart(1, "button", 10);
    ɵɵelementStart(2, "mat-icon", 11);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-checkbox", 12);
    ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_3_Template_mat_checkbox_change_4_listener($event) { ɵɵrestoreView(_r63); const node_r61 = ctx.$implicit; const ctx_r62 = ɵɵnextContext(); return ctx_r62.todoItemSelectionToggle(node_r61); });
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 13);
    ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_3_Template_button_click_6_listener($event) { ɵɵrestoreView(_r63); const node_r61 = ctx.$implicit; const ctx_r64 = ɵɵnextContext(); return ctx_r64.addNewItem(node_r61); });
    ɵɵelementStart(7, "mat-icon");
    ɵɵtext(8, "add");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r61 = ctx.$implicit;
    const ctx_r53 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("aria-label", "toggle " + node_r61.filename);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r53.treeControl.isExpanded(node_r61) ? "expand_more" : "chevron_right", " ");
    ɵɵadvance(1);
    ɵɵproperty("checked", ctx_r53.descendantsAllSelected(node_r61))("indeterminate", ctx_r53.descendantsPartiallySelected(node_r61));
    ɵɵadvance(1);
    ɵɵtextInterpolate(node_r61.item);
} }
/**
 * Node for to-do item
 */
class TodoItemNode {
}
if (false) {
    /** @type {?} */
    TodoItemNode.prototype.children;
    /** @type {?} */
    TodoItemNode.prototype.item;
}
/**
 * Flat to-do item node with expandable and level information
 */
class TodoItemFlatNode {
}
if (false) {
    /** @type {?} */
    TodoItemFlatNode.prototype.item;
    /** @type {?} */
    TodoItemFlatNode.prototype.level;
    /** @type {?} */
    TodoItemFlatNode.prototype.expandable;
}
/**
 * The Json object for to-do list data.
 * @type {?}
 */
const TREE_DATA = {
    Groceries: {
        'Almond Meal flour': null,
        'Organic eggs': null,
        'Protein Powder': null,
        Fruits: {
            Apple: null,
            Berries: ['Blueberry', 'Raspberry'],
            Orange: null
        }
    },
    Reminders: [
        'Cook dinner',
        'Read the Material Design spec',
        'Upgrade Application to Angular'
    ]
};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
class ChecklistDatabase {
    constructor() {
        this.dataChange = new BehaviorSubject([]);
        this.initialize();
    }
    /**
     * @return {?}
     */
    get data() { return this.dataChange.value; }
    /**
     * @return {?}
     */
    initialize() {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        /** @type {?} */
        const data = this.buildFileTree(TREE_DATA, 0);
        // Notify the change.
        this.dataChange.next(data);
    }
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     * @param {?} obj
     * @param {?} level
     * @return {?}
     */
    buildFileTree(obj, level) {
        return Object.keys(obj).reduce((/**
         * @param {?} accumulator
         * @param {?} key
         * @return {?}
         */
        (accumulator, key) => {
            /** @type {?} */
            const value = obj[key];
            /** @type {?} */
            const node = new TodoItemNode();
            node.item = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = this.buildFileTree(value, level + 1);
                }
                else {
                    node.item = value;
                }
            }
            return accumulator.concat(node);
        }), []);
    }
    /**
     * Add an item to to-do list
     * @param {?} parent
     * @param {?} name
     * @return {?}
     */
    insertItem(parent, name) {
        if (parent.children) {
            parent.children.push((/** @type {?} */ ({ item: name })));
            this.dataChange.next(this.data);
        }
    }
    /**
     * @param {?} node
     * @param {?} name
     * @return {?}
     */
    updateItem(node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    }
}
ChecklistDatabase.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ChecklistDatabase.ctorParameters = () => [];
/** @nocollapse */ ChecklistDatabase.ɵfac = function ChecklistDatabase_Factory(t) { return new (t || ChecklistDatabase)(); };
/** @nocollapse */ ChecklistDatabase.ɵprov = ɵɵdefineInjectable({ token: ChecklistDatabase, factory: function (t) { return ChecklistDatabase.ɵfac(t); }, providedIn: null });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChecklistDatabase, [{
        type: Injectable
    }], function () { return []; }, null); })();
if (false) {
    /** @type {?} */
    ChecklistDatabase.prototype.dataChange;
}
/**
 * \@title Tree with checkboxes
 */
class TreeChecklistExample {
    /**
     * @param {?} _database
     */
    constructor(_database) {
        this._database = _database;
        /**
         * Map from flat node to nested node. This helps us finding the nested node to be modified
         */
        this.flatNodeMap = new Map();
        /**
         * Map from nested node to flattened node. This helps us to keep the same object for selection
         */
        this.nestedNodeMap = new Map();
        /**
         * A selected parent node to be inserted
         */
        this.selectedParent = null;
        /**
         * The new item's name
         */
        this.newItemName = '';
        /**
         * The selection for checklist
         */
        this.checklistSelection = new SelectionModel(true /* multiple */);
        this.getLevel = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.level);
        this.isExpandable = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.expandable);
        this.getChildren = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.children);
        this.hasChild = (/**
         * @param {?} _
         * @param {?} _nodeData
         * @return {?}
         */
        (_, _nodeData) => _nodeData.expandable);
        this.hasNoContent = (/**
         * @param {?} _
         * @param {?} _nodeData
         * @return {?}
         */
        (_, _nodeData) => _nodeData.item === '');
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = (/**
         * @param {?} node
         * @param {?} level
         * @return {?}
         */
        (node, level) => {
            /** @type {?} */
            const existingNode = this.nestedNodeMap.get(node);
            /** @type {?} */
            const flatNode = existingNode && existingNode.item === node.item
                ? existingNode
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            this.flatNodeMap.set(flatNode, node);
            this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        });
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        _database.dataChange.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.dataSource.data = data;
        }));
    }
    /**
     * Whether all the descendants of the node are selected.
     * @param {?} node
     * @return {?}
     */
    descendantsAllSelected(node) {
        /** @type {?} */
        const descendants = this.treeControl.getDescendants(node);
        /** @type {?} */
        const descAllSelected = descendants.every((/**
         * @param {?} child
         * @return {?}
         */
        child => this.checklistSelection.isSelected(child)));
        return descAllSelected;
    }
    /**
     * Whether part of the descendants are selected
     * @param {?} node
     * @return {?}
     */
    descendantsPartiallySelected(node) {
        /** @type {?} */
        const descendants = this.treeControl.getDescendants(node);
        /** @type {?} */
        const result = descendants.some((/**
         * @param {?} child
         * @return {?}
         */
        child => this.checklistSelection.isSelected(child)));
        return result && !this.descendantsAllSelected(node);
    }
    /**
     * Toggle the to-do item selection. Select/deselect all the descendants node
     * @param {?} node
     * @return {?}
     */
    todoItemSelectionToggle(node) {
        this.checklistSelection.toggle(node);
        /** @type {?} */
        const descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? this.checklistSelection.select(...descendants)
            : this.checklistSelection.deselect(...descendants);
        // Force update for the parent
        descendants.every((/**
         * @param {?} child
         * @return {?}
         */
        child => this.checklistSelection.isSelected(child)));
        this.checkAllParentsSelection(node);
    }
    /**
     * Toggle a leaf to-do item selection. Check all the parents to see if they changed
     * @param {?} node
     * @return {?}
     */
    todoLeafItemSelectionToggle(node) {
        this.checklistSelection.toggle(node);
        this.checkAllParentsSelection(node);
    }
    /* Checks all the parents when a leaf node is selected/unselected */
    /**
     * @param {?} node
     * @return {?}
     */
    checkAllParentsSelection(node) {
        /** @type {?} */
        let parent = this.getParentNode(node);
        while (parent) {
            this.checkRootNodeSelection(parent);
            parent = this.getParentNode(parent);
        }
    }
    /**
     * Check root node checked state and change it accordingly
     * @param {?} node
     * @return {?}
     */
    checkRootNodeSelection(node) {
        /** @type {?} */
        const nodeSelected = this.checklistSelection.isSelected(node);
        /** @type {?} */
        const descendants = this.treeControl.getDescendants(node);
        /** @type {?} */
        const descAllSelected = descendants.every((/**
         * @param {?} child
         * @return {?}
         */
        child => this.checklistSelection.isSelected(child)));
        if (nodeSelected && !descAllSelected) {
            this.checklistSelection.deselect(node);
        }
        else if (!nodeSelected && descAllSelected) {
            this.checklistSelection.select(node);
        }
    }
    /* Get the parent node of a node */
    /**
     * @param {?} node
     * @return {?}
     */
    getParentNode(node) {
        /** @type {?} */
        const currentLevel = this.getLevel(node);
        if (currentLevel < 1) {
            return null;
        }
        /** @type {?} */
        const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        for (let i = startIndex; i >= 0; i--) {
            /** @type {?} */
            const currentNode = this.treeControl.dataNodes[i];
            if (this.getLevel(currentNode) < currentLevel) {
                return currentNode;
            }
        }
        return null;
    }
    /**
     * Select the category so we can insert the new item.
     * @param {?} node
     * @return {?}
     */
    addNewItem(node) {
        /** @type {?} */
        const parentNode = this.flatNodeMap.get(node);
        this._database.insertItem((/** @type {?} */ (parentNode)), '');
        this.treeControl.expand(node);
    }
    /**
     * Save the node to database
     * @param {?} node
     * @param {?} itemValue
     * @return {?}
     */
    saveNode(node, itemValue) {
        /** @type {?} */
        const nestedNode = this.flatNodeMap.get(node);
        this._database.updateItem((/** @type {?} */ (nestedNode)), itemValue);
    }
}
TreeChecklistExample.decorators = [
    { type: Component, args: [{
                selector: 'tree-checklist-example',
                templateUrl: 'tree-checklist-example.html',
                styleUrls: ['tree-checklist-example.css'],
                providers: [ChecklistDatabase]
            },] },
];
/** @nocollapse */
TreeChecklistExample.ctorParameters = () => [
    { type: ChecklistDatabase }
];
/** @nocollapse */ TreeChecklistExample.ɵfac = function TreeChecklistExample_Factory(t) { return new (t || TreeChecklistExample)(ɵɵdirectiveInject(ChecklistDatabase)); };
/** @nocollapse */ TreeChecklistExample.ɵcmp = ɵɵdefineComponent({ type: TreeChecklistExample, selectors: [["tree-checklist-example"]], features: [ɵɵProvidersFeature([ChecklistDatabase])], decls: 4, vars: 4, consts: [[3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", "", "matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], [1, "checklist-leaf-node", 3, "checked", "change"], ["matTreeNodePadding", ""], ["matInput", "", "placeholder", "New item..."], ["itemValue", ""], ["mat-button", "", 3, "click"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], [3, "checked", "indeterminate", "change"], ["mat-icon-button", "", 3, "click"]], template: function TreeChecklistExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tree", 0);
        ɵɵtemplate(1, TreeChecklistExample_mat_tree_node_1_Template, 4, 2, "mat-tree-node", 1);
        ɵɵtemplate(2, TreeChecklistExample_mat_tree_node_2_Template, 7, 0, "mat-tree-node", 2);
        ɵɵtemplate(3, TreeChecklistExample_mat_tree_node_3_Template, 9, 5, "mat-tree-node", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        ɵɵadvance(2);
        ɵɵproperty("matTreeNodeDefWhen", ctx.hasNoContent);
        ɵɵadvance(1);
        ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [MatTree, MatTreeNodeDef, MatTreeNode, MatTreeNodeToggle, MatTreeNodePadding, MatButton, MatCheckbox, MatFormField, MatInput, MatIcon], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TreeChecklistExample, [{
        type: Component,
        args: [{
                selector: 'tree-checklist-example',
                templateUrl: 'tree-checklist-example.html',
                styleUrls: ['tree-checklist-example.css'],
                providers: [ChecklistDatabase]
            }]
    }], function () { return [{ type: ChecklistDatabase }]; }, null); })();
if (false) {
    /**
     * Map from flat node to nested node. This helps us finding the nested node to be modified
     * @type {?}
     */
    TreeChecklistExample.prototype.flatNodeMap;
    /**
     * Map from nested node to flattened node. This helps us to keep the same object for selection
     * @type {?}
     */
    TreeChecklistExample.prototype.nestedNodeMap;
    /**
     * A selected parent node to be inserted
     * @type {?}
     */
    TreeChecklistExample.prototype.selectedParent;
    /**
     * The new item's name
     * @type {?}
     */
    TreeChecklistExample.prototype.newItemName;
    /** @type {?} */
    TreeChecklistExample.prototype.treeControl;
    /** @type {?} */
    TreeChecklistExample.prototype.treeFlattener;
    /** @type {?} */
    TreeChecklistExample.prototype.dataSource;
    /**
     * The selection for checklist
     * @type {?}
     */
    TreeChecklistExample.prototype.checklistSelection;
    /** @type {?} */
    TreeChecklistExample.prototype.getLevel;
    /** @type {?} */
    TreeChecklistExample.prototype.isExpandable;
    /** @type {?} */
    TreeChecklistExample.prototype.getChildren;
    /** @type {?} */
    TreeChecklistExample.prototype.hasChild;
    /** @type {?} */
    TreeChecklistExample.prototype.hasNoContent;
    /**
     * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
     * @type {?}
     */
    TreeChecklistExample.prototype.transformer;
    /**
     * @type {?}
     * @private
     */
    TreeChecklistExample.prototype._database;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TreeDynamicExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tree-node", 3);
    ɵɵelement(1, "button", 4);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r67 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", node_r67.item, " ");
} }
function TreeDynamicExample_mat_tree_node_2_mat_progress_bar_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-progress-bar", 8);
} }
function TreeDynamicExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tree-node", 3);
    ɵɵelementStart(1, "button", 5);
    ɵɵelementStart(2, "mat-icon", 6);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵtemplate(5, TreeDynamicExample_mat_tree_node_2_mat_progress_bar_5_Template, 1, 0, "mat-progress-bar", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r68 = ctx.$implicit;
    const ctx_r66 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("aria-label", "toggle " + node_r68.filename);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r66.treeControl.isExpanded(node_r68) ? "expand_more" : "chevron_right", " ");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", node_r68.item, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", node_r68.isLoading);
} }
/**
 * Flat node with expandable and level information
 */
class DynamicFlatNode {
    /**
     * @param {?} item
     * @param {?=} level
     * @param {?=} expandable
     * @param {?=} isLoading
     */
    constructor(item, level = 1, expandable = false, isLoading = false) {
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
}
if (false) {
    /** @type {?} */
    DynamicFlatNode.prototype.item;
    /** @type {?} */
    DynamicFlatNode.prototype.level;
    /** @type {?} */
    DynamicFlatNode.prototype.expandable;
    /** @type {?} */
    DynamicFlatNode.prototype.isLoading;
}
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
class DynamicDatabase {
    constructor() {
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple']]
        ]);
        this.rootLevelNodes = ['Fruits', 'Vegetables'];
    }
    /**
     * Initial data from database
     * @return {?}
     */
    initialData() {
        return this.rootLevelNodes.map((/**
         * @param {?} name
         * @return {?}
         */
        name => new DynamicFlatNode(name, 0, true)));
    }
    /**
     * @param {?} node
     * @return {?}
     */
    getChildren(node) {
        return this.dataMap.get(node);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    isExpandable(node) {
        return this.dataMap.has(node);
    }
}
if (false) {
    /** @type {?} */
    DynamicDatabase.prototype.dataMap;
    /** @type {?} */
    DynamicDatabase.prototype.rootLevelNodes;
}
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
class DynamicDataSource {
    /**
     * @param {?} _treeControl
     * @param {?} _database
     */
    constructor(_treeControl, _database) {
        this._treeControl = _treeControl;
        this._database = _database;
        this.dataChange = new BehaviorSubject([]);
    }
    /**
     * @return {?}
     */
    get data() { return this.dataChange.value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        this._treeControl.dataNodes = value;
        this.dataChange.next(value);
    }
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    connect(collectionViewer) {
        this._treeControl.expansionModel.changed.subscribe((/**
         * @param {?} change
         * @return {?}
         */
        change => {
            if (((/** @type {?} */ (change))).added ||
                ((/** @type {?} */ (change))).removed) {
                this.handleTreeControl((/** @type {?} */ (change)));
            }
        }));
        return merge(collectionViewer.viewChange, this.dataChange).pipe(map((/**
         * @return {?}
         */
        () => this.data)));
    }
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    disconnect(collectionViewer) { }
    /**
     * Handle expand/collapse behaviors
     * @param {?} change
     * @return {?}
     */
    handleTreeControl(change) {
        if (change.added) {
            change.added.forEach((/**
             * @param {?} node
             * @return {?}
             */
            node => this.toggleNode(node, true)));
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach((/**
             * @param {?} node
             * @return {?}
             */
            node => this.toggleNode(node, false)));
        }
    }
    /**
     * Toggle the node, remove from display list
     * @param {?} node
     * @param {?} expand
     * @return {?}
     */
    toggleNode(node, expand) {
        /** @type {?} */
        const children = this._database.getChildren(node.item);
        /** @type {?} */
        const index = this.data.indexOf(node);
        if (!children || index < 0) { // If no children, or cannot find the node, no op
            return;
        }
        node.isLoading = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (expand) {
                /** @type {?} */
                const nodes = children.map((/**
                 * @param {?} name
                 * @return {?}
                 */
                name => new DynamicFlatNode(name, node.level + 1, this._database.isExpandable(name))));
                this.data.splice(index + 1, 0, ...nodes);
            }
            else {
                /** @type {?} */
                let count = 0;
                for (let i = index + 1; i < this.data.length
                    && this.data[i].level > node.level; i++, count++) { }
                this.data.splice(index + 1, count);
            }
            // notify the change
            this.dataChange.next(this.data);
            node.isLoading = false;
        }), 1000);
    }
}
DynamicDataSource.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DynamicDataSource.ctorParameters = () => [
    { type: FlatTreeControl },
    { type: DynamicDatabase }
];
/** @nocollapse */ DynamicDataSource.ɵfac = function DynamicDataSource_Factory(t) { return new (t || DynamicDataSource)(ɵɵinject(FlatTreeControl), ɵɵinject(DynamicDatabase)); };
/** @nocollapse */ DynamicDataSource.ɵprov = ɵɵdefineInjectable({ token: DynamicDataSource, factory: function (t) { return DynamicDataSource.ɵfac(t); }, providedIn: null });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DynamicDataSource, [{
        type: Injectable
    }], function () { return [{ type: FlatTreeControl }, { type: DynamicDatabase }]; }, null); })();
if (false) {
    /** @type {?} */
    DynamicDataSource.prototype.dataChange;
    /**
     * @type {?}
     * @private
     */
    DynamicDataSource.prototype._treeControl;
    /**
     * @type {?}
     * @private
     */
    DynamicDataSource.prototype._database;
}
/**
 * \@title Tree with dynamic data
 */
class TreeDynamicExample {
    /**
     * @param {?} database
     */
    constructor(database) {
        this.getLevel = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.level);
        this.isExpandable = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.expandable);
        this.hasChild = (/**
         * @param {?} _
         * @param {?} _nodeData
         * @return {?}
         */
        (_, _nodeData) => _nodeData.expandable);
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        this.dataSource.data = database.initialData();
    }
}
TreeDynamicExample.decorators = [
    { type: Component, args: [{
                selector: 'tree-dynamic-example',
                templateUrl: 'tree-dynamic-example.html',
                styleUrls: ['tree-dynamic-example.css'],
                providers: [DynamicDatabase]
            },] },
];
/** @nocollapse */
TreeDynamicExample.ctorParameters = () => [
    { type: DynamicDatabase }
];
/** @nocollapse */ TreeDynamicExample.ɵfac = function TreeDynamicExample_Factory(t) { return new (t || TreeDynamicExample)(ɵɵdirectiveInject(DynamicDatabase)); };
/** @nocollapse */ TreeDynamicExample.ɵcmp = ɵɵdefineComponent({ type: TreeDynamicExample, selectors: [["tree-dynamic-example"]], features: [ɵɵProvidersFeature([DynamicDatabase])], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["mode", "indeterminate", "class", "example-tree-progress-bar", 4, "ngIf"], ["mode", "indeterminate", 1, "example-tree-progress-bar"]], template: function TreeDynamicExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tree", 0);
        ɵɵtemplate(1, TreeDynamicExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
        ɵɵtemplate(2, TreeDynamicExample_mat_tree_node_2_Template, 6, 4, "mat-tree-node", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        ɵɵadvance(2);
        ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [MatTree, MatTreeNodeDef, MatTreeNode, MatTreeNodePadding, MatButton, MatTreeNodeToggle, MatIcon, NgIf, MatProgressBar], styles: [".example-tree-progress-bar[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TreeDynamicExample, [{
        type: Component,
        args: [{
                selector: 'tree-dynamic-example',
                templateUrl: 'tree-dynamic-example.html',
                styleUrls: ['tree-dynamic-example.css'],
                providers: [DynamicDatabase]
            }]
    }], function () { return [{ type: DynamicDatabase }]; }, null); })();
if (false) {
    /** @type {?} */
    TreeDynamicExample.prototype.treeControl;
    /** @type {?} */
    TreeDynamicExample.prototype.dataSource;
    /** @type {?} */
    TreeDynamicExample.prototype.getLevel;
    /** @type {?} */
    TreeDynamicExample.prototype.isExpandable;
    /** @type {?} */
    TreeDynamicExample.prototype.hasChild;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TreeFlatOverviewExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tree-node", 3);
    ɵɵelement(1, "button", 4);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r72 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", node_r72.name, " ");
} }
function TreeFlatOverviewExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tree-node", 3);
    ɵɵelementStart(1, "button", 5);
    ɵɵelementStart(2, "mat-icon", 6);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r73 = ctx.$implicit;
    const ctx_r71 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("aria-label", "toggle " + node_r73.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r71.treeControl.isExpanded(node_r73) ? "expand_more" : "chevron_right", " ");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", node_r73.name, " ");
} }
/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 * @record
 */
function FoodNode() { }
if (false) {
    /** @type {?} */
    FoodNode.prototype.name;
    /** @type {?|undefined} */
    FoodNode.prototype.children;
}
/** @type {?} */
const TREE_DATA$1 = [
    {
        name: 'Fruit',
        children: [
            { name: 'Apple' },
            { name: 'Banana' },
            { name: 'Fruit loops' },
        ]
    }, {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [
                    { name: 'Broccoli' },
                    { name: 'Brussel sprouts' },
                ]
            }, {
                name: 'Orange',
                children: [
                    { name: 'Pumpkins' },
                    { name: 'Carrots' },
                ]
            },
        ]
    },
];
/**
 * Flat node with expandable and level information
 * @record
 */
function ExampleFlatNode() { }
if (false) {
    /** @type {?} */
    ExampleFlatNode.prototype.expandable;
    /** @type {?} */
    ExampleFlatNode.prototype.name;
    /** @type {?} */
    ExampleFlatNode.prototype.level;
}
/**
 * \@title Tree with flat nodes
 */
class TreeFlatOverviewExample {
    constructor() {
        this._transformer = (/**
         * @param {?} node
         * @param {?} level
         * @return {?}
         */
        (node, level) => {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                level: level,
            };
        });
        this.treeControl = new FlatTreeControl((/**
         * @param {?} node
         * @return {?}
         */
        node => node.level), (/**
         * @param {?} node
         * @return {?}
         */
        node => node.expandable));
        this.treeFlattener = new MatTreeFlattener(this._transformer, (/**
         * @param {?} node
         * @return {?}
         */
        node => node.level), (/**
         * @param {?} node
         * @return {?}
         */
        node => node.expandable), (/**
         * @param {?} node
         * @return {?}
         */
        node => node.children));
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.hasChild = (/**
         * @param {?} _
         * @param {?} node
         * @return {?}
         */
        (_, node) => node.expandable);
        this.dataSource.data = TREE_DATA$1;
    }
}
TreeFlatOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'tree-flat-overview-example',
                templateUrl: 'tree-flat-overview-example.html',
                styleUrls: ['tree-flat-overview-example.css'],
            },] },
];
/** @nocollapse */
TreeFlatOverviewExample.ctorParameters = () => [];
/** @nocollapse */ TreeFlatOverviewExample.ɵfac = function TreeFlatOverviewExample_Factory(t) { return new (t || TreeFlatOverviewExample)(); };
/** @nocollapse */ TreeFlatOverviewExample.ɵcmp = ɵɵdefineComponent({ type: TreeFlatOverviewExample, selectors: [["tree-flat-overview-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"]], template: function TreeFlatOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tree", 0);
        ɵɵtemplate(1, TreeFlatOverviewExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
        ɵɵtemplate(2, TreeFlatOverviewExample_mat_tree_node_2_Template, 5, 3, "mat-tree-node", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        ɵɵadvance(2);
        ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [MatTree, MatTreeNodeDef, MatTreeNode, MatTreeNodePadding, MatButton, MatTreeNodeToggle, MatIcon], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TreeFlatOverviewExample, [{
        type: Component,
        args: [{
                selector: 'tree-flat-overview-example',
                templateUrl: 'tree-flat-overview-example.html',
                styleUrls: ['tree-flat-overview-example.css'],
            }]
    }], function () { return []; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    TreeFlatOverviewExample.prototype._transformer;
    /** @type {?} */
    TreeFlatOverviewExample.prototype.treeControl;
    /** @type {?} */
    TreeFlatOverviewExample.prototype.treeFlattener;
    /** @type {?} */
    TreeFlatOverviewExample.prototype.dataSource;
    /** @type {?} */
    TreeFlatOverviewExample.prototype.hasChild;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TreeLoadmoreExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tree-node", 4);
    ɵɵelement(1, "button", 5);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r77 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", node_r77.item, " ");
} }
function TreeLoadmoreExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    const _r80 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tree-node", 4);
    ɵɵelementStart(1, "button", 6);
    ɵɵlistener("click", function TreeLoadmoreExample_mat_tree_node_2_Template_button_click_1_listener($event) { ɵɵrestoreView(_r80); const node_r78 = ctx.$implicit; const ctx_r79 = ɵɵnextContext(); return ctx_r79.loadChildren(node_r78); });
    ɵɵelementStart(2, "mat-icon", 7);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r78 = ctx.$implicit;
    const ctx_r75 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("aria-label", "toggle " + node_r78.filename);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r75.treeControl.isExpanded(node_r78) ? "expand_more" : "chevron_right", " ");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", node_r78.item, " ");
} }
function TreeLoadmoreExample_mat_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    const _r83 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tree-node");
    ɵɵelementStart(1, "button", 8);
    ɵɵlistener("click", function TreeLoadmoreExample_mat_tree_node_3_Template_button_click_1_listener($event) { ɵɵrestoreView(_r83); const node_r81 = ctx.$implicit; const ctx_r82 = ɵɵnextContext(); return ctx_r82.loadMore(node_r81.loadMoreParentItem); });
    ɵɵtext(2, " Load more... ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
/** @type {?} */
const LOAD_MORE = 'LOAD_MORE';
/**
 * Nested node
 */
class LoadmoreNode {
    /**
     * @param {?} item
     * @param {?=} hasChildren
     * @param {?=} loadMoreParentItem
     */
    constructor(item, hasChildren = false, loadMoreParentItem = null) {
        this.item = item;
        this.hasChildren = hasChildren;
        this.loadMoreParentItem = loadMoreParentItem;
        this.childrenChange = new BehaviorSubject([]);
    }
    /**
     * @return {?}
     */
    get children() {
        return this.childrenChange.value;
    }
}
if (false) {
    /** @type {?} */
    LoadmoreNode.prototype.childrenChange;
    /** @type {?} */
    LoadmoreNode.prototype.item;
    /** @type {?} */
    LoadmoreNode.prototype.hasChildren;
    /** @type {?} */
    LoadmoreNode.prototype.loadMoreParentItem;
}
/**
 * Flat node with expandable and level information
 */
class LoadmoreFlatNode {
    /**
     * @param {?} item
     * @param {?=} level
     * @param {?=} expandable
     * @param {?=} loadMoreParentItem
     */
    constructor(item, level = 1, expandable = false, loadMoreParentItem = null) {
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.loadMoreParentItem = loadMoreParentItem;
    }
}
if (false) {
    /** @type {?} */
    LoadmoreFlatNode.prototype.item;
    /** @type {?} */
    LoadmoreFlatNode.prototype.level;
    /** @type {?} */
    LoadmoreFlatNode.prototype.expandable;
    /** @type {?} */
    LoadmoreFlatNode.prototype.loadMoreParentItem;
}
/**
 * A database that only load part of the data initially. After user clicks on the `Load more`
 * button, more data will be loaded.
 */
class LoadmoreDatabase {
    constructor() {
        this.batchNumber = 5;
        this.dataChange = new BehaviorSubject([]);
        this.nodeMap = new Map();
        /**
         * The data
         */
        this.rootLevelNodes = ['Vegetables', 'Fruits'];
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],
        ]);
    }
    /**
     * @return {?}
     */
    initialize() {
        /** @type {?} */
        const data = this.rootLevelNodes.map((/**
         * @param {?} name
         * @return {?}
         */
        name => this._generateNode(name)));
        this.dataChange.next(data);
    }
    /**
     * Expand a node whose children are not loaded
     * @param {?} item
     * @param {?=} onlyFirstTime
     * @return {?}
     */
    loadMore(item, onlyFirstTime = false) {
        if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
            return;
        }
        /** @type {?} */
        const parent = (/** @type {?} */ (this.nodeMap.get(item)));
        /** @type {?} */
        const children = (/** @type {?} */ (this.dataMap.get(item)));
        if (onlyFirstTime && (/** @type {?} */ (parent.children)).length > 0) {
            return;
        }
        /** @type {?} */
        const newChildrenNumber = (/** @type {?} */ (parent.children)).length + this.batchNumber;
        /** @type {?} */
        const nodes = children.slice(0, newChildrenNumber)
            .map((/**
         * @param {?} name
         * @return {?}
         */
        name => this._generateNode(name)));
        if (newChildrenNumber < children.length) {
            // Need a new load more node
            nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
        }
        parent.childrenChange.next(nodes);
        this.dataChange.next(this.dataChange.value);
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    _generateNode(item) {
        if (this.nodeMap.has(item)) {
            return (/** @type {?} */ (this.nodeMap.get(item)));
        }
        /** @type {?} */
        const result = new LoadmoreNode(item, this.dataMap.has(item));
        this.nodeMap.set(item, result);
        return result;
    }
}
LoadmoreDatabase.decorators = [
    { type: Injectable },
];
/** @nocollapse */ LoadmoreDatabase.ɵfac = function LoadmoreDatabase_Factory(t) { return new (t || LoadmoreDatabase)(); };
/** @nocollapse */ LoadmoreDatabase.ɵprov = ɵɵdefineInjectable({ token: LoadmoreDatabase, factory: function (t) { return LoadmoreDatabase.ɵfac(t); }, providedIn: null });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LoadmoreDatabase, [{
        type: Injectable
    }], null, null); })();
if (false) {
    /** @type {?} */
    LoadmoreDatabase.prototype.batchNumber;
    /** @type {?} */
    LoadmoreDatabase.prototype.dataChange;
    /** @type {?} */
    LoadmoreDatabase.prototype.nodeMap;
    /**
     * The data
     * @type {?}
     */
    LoadmoreDatabase.prototype.rootLevelNodes;
    /** @type {?} */
    LoadmoreDatabase.prototype.dataMap;
}
/**
 * \@title Tree with partially loaded data
 */
class TreeLoadmoreExample {
    /**
     * @param {?} _database
     */
    constructor(_database) {
        this._database = _database;
        this.nodeMap = new Map();
        this.getChildren = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.childrenChange);
        this.transformer = (/**
         * @param {?} node
         * @param {?} level
         * @return {?}
         */
        (node, level) => {
            /** @type {?} */
            const existingNode = this.nodeMap.get(node.item);
            if (existingNode) {
                return existingNode;
            }
            /** @type {?} */
            const newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
            this.nodeMap.set(node.item, newNode);
            return newNode;
        });
        this.getLevel = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.level);
        this.isExpandable = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.expandable);
        this.hasChild = (/**
         * @param {?} _
         * @param {?} _nodeData
         * @return {?}
         */
        (_, _nodeData) => _nodeData.expandable);
        this.isLoadMore = (/**
         * @param {?} _
         * @param {?} _nodeData
         * @return {?}
         */
        (_, _nodeData) => _nodeData.item === LOAD_MORE);
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        _database.dataChange.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.dataSource.data = data;
        }));
        _database.initialize();
    }
    /**
     * Load more nodes from data source
     * @param {?} item
     * @return {?}
     */
    loadMore(item) {
        this._database.loadMore(item);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    loadChildren(node) {
        this._database.loadMore(node.item, true);
    }
}
TreeLoadmoreExample.decorators = [
    { type: Component, args: [{
                selector: 'tree-loadmore-example',
                templateUrl: 'tree-loadmore-example.html',
                styleUrls: ['tree-loadmore-example.css'],
                providers: [LoadmoreDatabase]
            },] },
];
/** @nocollapse */
TreeLoadmoreExample.ctorParameters = () => [
    { type: LoadmoreDatabase }
];
/** @nocollapse */ TreeLoadmoreExample.ɵfac = function TreeLoadmoreExample_Factory(t) { return new (t || TreeLoadmoreExample)(ɵɵdirectiveInject(LoadmoreDatabase)); };
/** @nocollapse */ TreeLoadmoreExample.ɵcmp = ɵɵdefineComponent({ type: TreeLoadmoreExample, selectors: [["tree-loadmore-example"]], features: [ɵɵProvidersFeature([LoadmoreDatabase])], decls: 4, vars: 4, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", "", 3, "click"], [1, "mat-icon-rtl-mirror"], ["mat-button", "", 3, "click"]], template: function TreeLoadmoreExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tree", 0);
        ɵɵtemplate(1, TreeLoadmoreExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
        ɵɵtemplate(2, TreeLoadmoreExample_mat_tree_node_2_Template, 5, 3, "mat-tree-node", 2);
        ɵɵtemplate(3, TreeLoadmoreExample_mat_tree_node_3_Template, 3, 0, "mat-tree-node", 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        ɵɵadvance(2);
        ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
        ɵɵadvance(1);
        ɵɵproperty("matTreeNodeDefWhen", ctx.isLoadMore);
    } }, directives: [MatTree, MatTreeNodeDef, MatTreeNode, MatTreeNodePadding, MatButton, MatTreeNodeToggle, MatIcon], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TreeLoadmoreExample, [{
        type: Component,
        args: [{
                selector: 'tree-loadmore-example',
                templateUrl: 'tree-loadmore-example.html',
                styleUrls: ['tree-loadmore-example.css'],
                providers: [LoadmoreDatabase]
            }]
    }], function () { return [{ type: LoadmoreDatabase }]; }, null); })();
if (false) {
    /** @type {?} */
    TreeLoadmoreExample.prototype.nodeMap;
    /** @type {?} */
    TreeLoadmoreExample.prototype.treeControl;
    /** @type {?} */
    TreeLoadmoreExample.prototype.treeFlattener;
    /** @type {?} */
    TreeLoadmoreExample.prototype.dataSource;
    /** @type {?} */
    TreeLoadmoreExample.prototype.getChildren;
    /** @type {?} */
    TreeLoadmoreExample.prototype.transformer;
    /** @type {?} */
    TreeLoadmoreExample.prototype.getLevel;
    /** @type {?} */
    TreeLoadmoreExample.prototype.isExpandable;
    /** @type {?} */
    TreeLoadmoreExample.prototype.hasChild;
    /** @type {?} */
    TreeLoadmoreExample.prototype.isLoadMore;
    /**
     * @type {?}
     * @private
     */
    TreeLoadmoreExample.prototype._database;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function TreeNestedOverviewExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tree-node", 3);
    ɵɵelementStart(1, "li", 4);
    ɵɵelement(2, "button", 5);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r86 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", node_r86.name, " ");
} }
function TreeNestedOverviewExample_mat_nested_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-nested-tree-node");
    ɵɵelementStart(1, "li");
    ɵɵelementStart(2, "div", 4);
    ɵɵelementStart(3, "button", 6);
    ɵɵelementStart(4, "mat-icon", 7);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "ul");
    ɵɵelementContainer(8, 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r87 = ctx.$implicit;
    const ctx_r85 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵattribute("aria-label", "toggle " + node_r87.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r85.treeControl.isExpanded(node_r87) ? "expand_more" : "chevron_right", " ");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", node_r87.name, " ");
    ɵɵadvance(1);
    ɵɵclassProp("example-tree-invisible", !ctx_r85.treeControl.isExpanded(node_r87));
} }
/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 * @record
 */
function FoodNode$1() { }
if (false) {
    /** @type {?} */
    FoodNode$1.prototype.name;
    /** @type {?|undefined} */
    FoodNode$1.prototype.children;
}
/** @type {?} */
const TREE_DATA$2 = [
    {
        name: 'Fruit',
        children: [
            { name: 'Apple' },
            { name: 'Banana' },
            { name: 'Fruit loops' },
        ]
    }, {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [
                    { name: 'Broccoli' },
                    { name: 'Brussel sprouts' },
                ]
            }, {
                name: 'Orange',
                children: [
                    { name: 'Pumpkins' },
                    { name: 'Carrots' },
                ]
            },
        ]
    },
];
/**
 * \@title Tree with nested nodes
 */
class TreeNestedOverviewExample {
    constructor() {
        this.treeControl = new NestedTreeControl((/**
         * @param {?} node
         * @return {?}
         */
        node => node.children));
        this.dataSource = new MatTreeNestedDataSource();
        this.hasChild = (/**
         * @param {?} _
         * @param {?} node
         * @return {?}
         */
        (_, node) => !!node.children && node.children.length > 0);
        this.dataSource.data = TREE_DATA$2;
    }
}
TreeNestedOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'tree-nested-overview-example',
                templateUrl: 'tree-nested-overview-example.html',
                styleUrls: ['tree-nested-overview-example.css'],
            },] },
];
/** @nocollapse */
TreeNestedOverviewExample.ctorParameters = () => [];
/** @nocollapse */ TreeNestedOverviewExample.ɵfac = function TreeNestedOverviewExample_Factory(t) { return new (t || TreeNestedOverviewExample)(); };
/** @nocollapse */ TreeNestedOverviewExample.ɵcmp = ɵɵdefineComponent({ type: TreeNestedOverviewExample, selectors: [["tree-nested-overview-example"]], decls: 3, vars: 3, consts: [[1, "example-tree", 3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", 4, "matTreeNodeDef"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", ""], [1, "mat-tree-node"], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["matTreeNodeOutlet", ""]], template: function TreeNestedOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-tree", 0);
        ɵɵtemplate(1, TreeNestedOverviewExample_mat_tree_node_1_Template, 4, 1, "mat-tree-node", 1);
        ɵɵtemplate(2, TreeNestedOverviewExample_mat_nested_tree_node_2_Template, 9, 4, "mat-nested-tree-node", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        ɵɵadvance(2);
        ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [MatTree, MatTreeNodeDef, MatTreeNode, MatTreeNodeToggle, MatButton, MatNestedTreeNode, MatIcon, MatTreeNodeOutlet], styles: [".example-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TreeNestedOverviewExample, [{
        type: Component,
        args: [{
                selector: 'tree-nested-overview-example',
                templateUrl: 'tree-nested-overview-example.html',
                styleUrls: ['tree-nested-overview-example.css'],
            }]
    }], function () { return []; }, null); })();
if (false) {
    /** @type {?} */
    TreeNestedOverviewExample.prototype.treeControl;
    /** @type {?} */
    TreeNestedOverviewExample.prototype.dataSource;
    /** @type {?} */
    TreeNestedOverviewExample.prototype.hasChild;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES$1 = [
    TreeChecklistExample,
    TreeDynamicExample,
    TreeFlatOverviewExample,
    TreeLoadmoreExample,
    TreeNestedOverviewExample,
];
class TreeExamplesModule {
}
TreeExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatInputModule,
                    MatProgressBarModule,
                    MatTreeModule,
                ],
                declarations: EXAMPLES$1,
                exports: EXAMPLES$1,
            },] },
];
/** @nocollapse */ TreeExamplesModule.ɵmod = ɵɵdefineNgModule({ type: TreeExamplesModule });
/** @nocollapse */ TreeExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function TreeExamplesModule_Factory(t) { return new (t || TreeExamplesModule)(); }, imports: [[
            CommonModule,
            MatButtonModule,
            MatCheckboxModule,
            MatIconModule,
            MatInputModule,
            MatProgressBarModule,
            MatTreeModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TreeExamplesModule, { declarations: [TreeChecklistExample,
        TreeDynamicExample,
        TreeFlatOverviewExample,
        TreeLoadmoreExample,
        TreeNestedOverviewExample], imports: [CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatTreeModule], exports: [TreeChecklistExample,
        TreeDynamicExample,
        TreeFlatOverviewExample,
        TreeLoadmoreExample,
        TreeNestedOverviewExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(TreeExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatInputModule,
                    MatProgressBarModule,
                    MatTreeModule,
                ],
                declarations: EXAMPLES$1,
                exports: EXAMPLES$1,
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
/**
 ******************************************************************************
 * DO NOT MANUALLY EDIT THIS FILE. THIS FILE IS AUTOMATICALLY GENERATED.
 *
 * IMPORTANT: Due to a bug with the bazel ng_module rule, this file is now
 * checked into the repository. Please rebuild the example module by running
 * the following command: "yarn gulp build-examples-module"
 *
 * BUG: https://github.com/angular/angular/issues/30259
 ******************************************************************************/
/**
 * @record
 */
function LiveExample() { }
if (false) {
    /** @type {?} */
    LiveExample.prototype.title;
    /** @type {?} */
    LiveExample.prototype.component;
    /** @type {?|undefined} */
    LiveExample.prototype.additionalFiles;
    /** @type {?|undefined} */
    LiveExample.prototype.selectorName;
}
/** @type {?} */
const EXAMPLE_COMPONENTS = { "footer-overview": { "title": "Footer overview", "component": FooterOverviewExample, "additionalFiles": [], "selectorName": "" }, "tree-checklist": { "title": "Tree with checkboxes", "component": TreeChecklistExample, "additionalFiles": [], "selectorName": "" }, "tree-dynamic": { "title": "Tree with dynamic data", "component": TreeDynamicExample, "additionalFiles": [], "selectorName": "" }, "tree-flat-overview": { "title": "Tree with flat nodes", "component": TreeFlatOverviewExample, "additionalFiles": [], "selectorName": "" }, "tree-loadmore": { "title": "Tree with partially loaded data", "component": TreeLoadmoreExample, "additionalFiles": [], "selectorName": "" } };
/** @type {?} */
const EXAMPLE_MODULES = [FooterExamplesModule, TreeExamplesModule];
/** @type {?} */
const EXAMPLE_LIST = [FooterOverviewExample, TreeChecklistExample, TreeDynamicExample, TreeFlatOverviewExample, TreeLoadmoreExample];
class ExampleModule {
}
ExampleModule.decorators = [
    { type: NgModule, args: [{
                imports: EXAMPLE_MODULES,
                exports: EXAMPLE_MODULES,
                entryComponents: EXAMPLE_LIST,
            },] },
];
/** @nocollapse */ ExampleModule.ɵmod = ɵɵdefineNgModule({ type: ExampleModule });
/** @nocollapse */ ExampleModule.ɵinj = ɵɵdefineInjector({ factory: function ExampleModule_Factory(t) { return new (t || ExampleModule)(); }, imports: [EXAMPLE_MODULES,
        FooterExamplesModule, TreeExamplesModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ExampleModule, { imports: [FooterExamplesModule, TreeExamplesModule], exports: [FooterExamplesModule, TreeExamplesModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ExampleModule, [{
        type: NgModule,
        args: [{
                imports: EXAMPLE_MODULES,
                exports: EXAMPLE_MODULES,
                entryComponents: EXAMPLE_LIST,
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
class ExampleData {
    /**
     * @param {?} example
     */
    constructor(example) {
        if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
            return;
        }
        /** @type {?} */
        const exampleConfig = EXAMPLE_COMPONENTS[example];
        // TODO(tinayuangao): Do not hard-code extensions
        this.exampleFiles = ['html', 'ts', 'css'].map((/**
         * @param {?} extension
         * @return {?}
         */
        extension => `${example}-example.${extension}`));
        this.selectorName = this.indexFilename = `${example}-example`;
        if (exampleConfig.additionalFiles) {
            this.exampleFiles.push(...exampleConfig.additionalFiles);
        }
        /** @type {?} */
        const exampleName = example.replace(/(?:^\w|\b\w)/g, (/**
         * @param {?} letter
         * @return {?}
         */
        letter => letter.toUpperCase()));
        this.description = exampleConfig.title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
        this.componentName = exampleConfig.selectorName ||
            exampleName.replace(/[\-]+/g, '') + 'Example';
    }
}
if (false) {
    /**
     * Description of the example.
     * @type {?}
     */
    ExampleData.prototype.description;
    /**
     * List of files that are part of this example.
     * @type {?}
     */
    ExampleData.prototype.exampleFiles;
    /**
     * Selector name of the example component.
     * @type {?}
     */
    ExampleData.prototype.selectorName;
    /**
     * Name of the file that contains the example component.
     * @type {?}
     */
    ExampleData.prototype.indexFilename;
    /**
     * Name of the example component. For examples with multiple components, this property will
     * include multiple components that are comma separated (e.g. dialog-overview)
     * @type {?}
     */
    ExampleData.prototype.componentName;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { EXAMPLE_COMPONENTS, EXAMPLE_LIST, EXAMPLE_MODULES, ExampleData, ExampleModule, FooterOverviewExample, TreeChecklistExample, TreeDynamicExample, TreeFlatOverviewExample, TreeLoadmoreExample };
//# sourceMappingURL=components-examples.js.map
