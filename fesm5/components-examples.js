import { __spread } from 'tslib';
import { ɵɵelement, ɵɵnextContext, ɵɵattribute, ɵɵsanitizeUrl, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelementContainer, ɵɵreference, ɵɵadvance, ɵɵproperty, ɵɵpureFunction1, ɵɵtemplate, ɵɵtextInterpolate, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, ɵɵdefineComponent, ɵɵtemplateRefExtractor, ɵɵtextInterpolate1, ɵsetClassMetadata, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, Injectable, ɵɵdefineInjectable, ɵɵdirectiveInject, ɵɵProvidersFeature } from '@angular/core';
import { NgIf, NgForOf, NgTemplateOutlet, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTreeFlattener, MatTreeFlatDataSource, MatTree, MatTreeNodeDef, MatTreeNode, MatTreeNodeToggle, MatTreeNodePadding, MatTreeModule } from '@angular/material/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatFormField } from '@angular/material/form-field';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var FooterModel = /** @class */ (function () {
    function FooterModel() {
    }
    return FooterModel;
}());
var FooterLinkSection = /** @class */ (function () {
    function FooterLinkSection() {
    }
    return FooterLinkSection;
}());
var FooterLink = /** @class */ (function () {
    function FooterLink() {
    }
    return FooterLink;
}());

var NavigationMode;
(function (NavigationMode) {
    NavigationMode[NavigationMode["INTERNAL"] = 0] = "INTERNAL";
    NavigationMode[NavigationMode["EXTERNAL"] = 1] = "EXTERNAL";
    NavigationMode[NavigationMode["EVENT"] = 2] = "EVENT";
    NavigationMode[NavigationMode["LABEL"] = 3] = "LABEL";
})(NavigationMode || (NavigationMode = {}));

var NavigationHelper = /** @class */ (function () {
    function NavigationHelper() {
    }
    /**
     * checks if link is internal
     * @param link
     */
    NavigationHelper.prototype.isLinkInternal = function (link) {
        return link.mode === NavigationMode.INTERNAL;
    };
    /**
     * checks if link is external
     * @param link
     */
    NavigationHelper.prototype.isLinkExternal = function (link) {
        return link.mode === NavigationMode.EXTERNAL;
    };
    return NavigationHelper;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function SdsFooter_img_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "img", 22);
} if (rf & 2) {
    var ctx_r0 = ɵɵnextContext();
    ɵɵattribute("src", ctx_r0.model.footerLogo.imageSourcePath, ɵɵsanitizeUrl)("alt", ctx_r0.model.footerLogo.imageAltText);
} }
function SdsFooter_a_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 23);
    ɵɵtext(1, " GSA.gov ");
    ɵɵelementEnd();
} }
var _c0 = function (a0) { return { $implicit: a0 }; };
function SdsFooter_div_15_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 29);
    ɵɵelementContainer(1, 30);
    ɵɵelementEnd();
} if (rf & 2) {
    var link_r11 = ctx.$implicit;
    var ctx_r10 = ɵɵnextContext(2);
    var _r3 = ɵɵreference(26);
    var _r5 = ɵɵreference(28);
    var _r7 = ɵɵreference(30);
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
    var section_r9 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate(section_r9.text);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", section_r9.links);
} }
var _c1 = function (a0) { return [a0]; };
function SdsFooter_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var link_r12 = ctx.$implicit;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c1, link_r12.route));
    ɵɵadvance(1);
    ɵɵtextInterpolate(link_r12.text);
} }
function SdsFooter_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var link_r13 = ctx.$implicit;
    ɵɵattribute("href", ɵɵpureFunction1(2, _c1, link_r13.route), ɵɵsanitizeUrl);
    ɵɵadvance(1);
    ɵɵtextInterpolate(link_r13.text);
} }
function SdsFooter_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    var _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 32);
    ɵɵlistener("click", function SdsFooter_ng_template_29_Template_a_click_0_listener($event) { ɵɵrestoreView(_r16); var link_r14 = ctx.$implicit; var ctx_r15 = ɵɵnextContext(); return ctx_r15.linkClickEvent(link_r14); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var link_r14 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(link_r14.text);
} }
var SdsFooter = /** @class */ (function () {
    function SdsFooter() {
        /** Navigation helper */
        this.navigationHelper = new NavigationHelper();
        /** Event for event based */
        this.linkEvent = new EventEmitter();
    }
    /**
     * Link clicked and emits the link data into an event
     * @param link
     */
    SdsFooter.prototype.linkClickEvent = function (link) {
        this.linkEvent.emit(link);
        return false;
    };
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
    SdsFooter.ɵfac = function SdsFooter_Factory(t) { return new (t || SdsFooter)(); };
    SdsFooter.ɵcmp = ɵɵdefineComponent({ type: SdsFooter, selectors: [["sds-footer"]], inputs: { model: "model" }, outputs: { linkEvent: "linkEvent" }, decls: 31, vars: 4, consts: [["role", "contentinfo", 1, "usa-footer", "usa-footer--big"], [1, "usa-footer__primary-section"], [1, "grid-container"], [1, "grid-row", "grid-gap"], [1, "mobile-lg:grid-col-12", "tablet:grid-col-4"], [1, "usa-footer__logo", "grid-row", "mobile-lg:grid-gap-1", "margin-top-3"], [1, "mobile-lg:grid-col-3", "mobile-lg:grid-offset-3", "tablet:grid-offset-none", "tablet:grid-col-auto"], ["class", "usa-footer__logo-img", 4, "ngIf"], ["class", "usa-footer__logo-text", "target", "_blank", "href", "http://gsa.gov", 4, "ngIf"], [1, "mobile-lg:grid-col-4", "tablet:grid-col-auto"], [1, "usa-footer__logo-heading"], [1, "mobile-lg:grid-col-12", "tablet:grid-col-8"], [1, "usa-footer__nav"], [1, "grid-row", "grid-gap-4"], ["class", "mobile-lg:grid-col-12 desktop:grid-col-4", 4, "ngFor", "ngForOf"], [1, "usa-footer__secondary-section"], [1, "grid-row"], [1, "grid-col-12"], [1, "font-body-2xs", "line-height-sans-4", "margin-top-0"], ["footerRouteLinkTemplate", ""], ["footerHREFLinkTemplate", ""], ["footerEVENTLinkTemplate", ""], [1, "usa-footer__logo-img"], ["target", "_blank", "href", "http://gsa.gov", 1, "usa-footer__logo-text"], [1, "mobile-lg:grid-col-12", "desktop:grid-col-4"], [1, "usa-footer__primary-content", "usa-footer__primary-content--collapsible"], [1, "usa-footer__primary-link"], [1, "usa-list", "usa-list--unstyled"], ["class", "usa-footer__secondary-link", 4, "ngFor", "ngForOf"], [1, "usa-footer__secondary-link"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "routerLink"], ["href", "javascript:void(0)", 3, "click"]], template: function SdsFooter_Template(rf, ctx) { if (rf & 1) {
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
    return SdsFooter;
}());
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

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SdsFooterModule = /** @class */ (function () {
    function SdsFooterModule() {
    }
    SdsFooterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, RouterModule],
                    exports: [SdsFooter],
                    declarations: [SdsFooter],
                },] },
    ];
    SdsFooterModule.ɵmod = ɵɵdefineNgModule({ type: SdsFooterModule });
    SdsFooterModule.ɵinj = ɵɵdefineInjector({ factory: function SdsFooterModule_Factory(t) { return new (t || SdsFooterModule)(); }, imports: [[CommonModule, FormsModule, RouterModule]] });
    return SdsFooterModule;
}());
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
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */

/**
 * @title Footer overview
 */
var FooterOverviewExample = /** @class */ (function () {
    function FooterOverviewExample() {
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
    FooterOverviewExample.prototype.ngOnInit = function () {
        this.linkEvent.subscribe(function (value) {
            console.log('Link Event Clicked Change');
            console.log(value);
        });
    };
    FooterOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'footer-overview-example',
                    templateUrl: 'footer-overview-example.html',
                    styleUrls: ['footer-overview-example.css']
                },] },
    ];
    /** @nocollapse */
    FooterOverviewExample.ctorParameters = function () { return []; };
    FooterOverviewExample.ɵfac = function FooterOverviewExample_Factory(t) { return new (t || FooterOverviewExample)(); };
    FooterOverviewExample.ɵcmp = ɵɵdefineComponent({ type: FooterOverviewExample, selectors: [["footer-overview-example"]], decls: 1, vars: 1, consts: [[3, "model", "linkEvent"]], template: function FooterOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "sds-footer", 0);
            ɵɵlistener("linkEvent", function FooterOverviewExample_Template_sds_footer_linkEvent_0_listener($event) { return ctx.linkEvent.next($event); });
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("model", ctx.modelFooter);
        } }, directives: [SdsFooter], styles: [""] });
    return FooterOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(FooterOverviewExample, [{
        type: Component,
        args: [{
                selector: 'footer-overview-example',
                templateUrl: 'footer-overview-example.html',
                styleUrls: ['footer-overview-example.css']
            }]
    }], function () { return []; }, null); })();

var EXAMPLES = [
    FooterOverviewExample,
];
var FooterExamplesModule = /** @class */ (function () {
    function FooterExamplesModule() {
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
    FooterExamplesModule.ɵmod = ɵɵdefineNgModule({ type: FooterExamplesModule });
    FooterExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function FooterExamplesModule_Factory(t) { return new (t || FooterExamplesModule)(); }, imports: [[
                SdsFooterModule
            ]] });
    return FooterExamplesModule;
}());
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

function TreeChecklistExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tree-node", 3);
    ɵɵelement(1, "button", 4);
    ɵɵelementStart(2, "mat-checkbox", 5);
    ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_1_Template_mat_checkbox_change_2_listener($event) { ɵɵrestoreView(_r5); var node_r3 = ctx.$implicit; var ctx_r4 = ɵɵnextContext(); return ctx_r4.todoLeafItemSelectionToggle(node_r3); });
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var node_r3 = ctx.$implicit;
    var ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("checked", ctx_r0.checklistSelection.isSelected(node_r3));
    ɵɵadvance(1);
    ɵɵtextInterpolate(node_r3.item);
} }
function TreeChecklistExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tree-node", 6);
    ɵɵelement(1, "button", 4);
    ɵɵelementStart(2, "mat-form-field");
    ɵɵelement(3, "input", 7, 8);
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 9);
    ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_2_Template_button_click_5_listener($event) { ɵɵrestoreView(_r9); var node_r6 = ctx.$implicit; var _r7 = ɵɵreference(4); var ctx_r8 = ɵɵnextContext(); return ctx_r8.saveNode(node_r6, _r7.value); });
    ɵɵtext(6, "Save");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function TreeChecklistExample_mat_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tree-node", 6);
    ɵɵelementStart(1, "button", 10);
    ɵɵelementStart(2, "mat-icon", 11);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-checkbox", 12);
    ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_3_Template_mat_checkbox_change_4_listener($event) { ɵɵrestoreView(_r12); var node_r10 = ctx.$implicit; var ctx_r11 = ɵɵnextContext(); return ctx_r11.todoItemSelectionToggle(node_r10); });
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 13);
    ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_3_Template_button_click_6_listener($event) { ɵɵrestoreView(_r12); var node_r10 = ctx.$implicit; var ctx_r13 = ɵɵnextContext(); return ctx_r13.addNewItem(node_r10); });
    ɵɵelementStart(7, "mat-icon");
    ɵɵtext(8, "add");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var node_r10 = ctx.$implicit;
    var ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("aria-label", "toggle " + node_r10.filename);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r2.treeControl.isExpanded(node_r10) ? "expand_more" : "chevron_right", " ");
    ɵɵadvance(1);
    ɵɵproperty("checked", ctx_r2.descendantsAllSelected(node_r10))("indeterminate", ctx_r2.descendantsPartiallySelected(node_r10));
    ɵɵadvance(1);
    ɵɵtextInterpolate(node_r10.item);
} }
/**
 * Node for to-do item
 */
var TodoItemNode = /** @class */ (function () {
    function TodoItemNode() {
    }
    return TodoItemNode;
}());
/** Flat to-do item node with expandable and level information */
var TodoItemFlatNode = /** @class */ (function () {
    function TodoItemFlatNode() {
    }
    return TodoItemFlatNode;
}());
/**
 * The Json object for to-do list data.
 */
var TREE_DATA = {
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
var ChecklistDatabase = /** @class */ (function () {
    function ChecklistDatabase() {
        this.dataChange = new BehaviorSubject([]);
        this.initialize();
    }
    Object.defineProperty(ChecklistDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ChecklistDatabase.prototype.initialize = function () {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        var data = this.buildFileTree(TREE_DATA, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    ChecklistDatabase.prototype.buildFileTree = function (obj, level) {
        var _this = this;
        return Object.keys(obj).reduce(function (accumulator, key) {
            var value = obj[key];
            var node = new TodoItemNode();
            node.item = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = _this.buildFileTree(value, level + 1);
                }
                else {
                    node.item = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    };
    /** Add an item to to-do list */
    ChecklistDatabase.prototype.insertItem = function (parent, name) {
        if (parent.children) {
            parent.children.push({ item: name });
            this.dataChange.next(this.data);
        }
    };
    ChecklistDatabase.prototype.updateItem = function (node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    };
    ChecklistDatabase.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ChecklistDatabase.ctorParameters = function () { return []; };
    ChecklistDatabase.ɵfac = function ChecklistDatabase_Factory(t) { return new (t || ChecklistDatabase)(); };
    ChecklistDatabase.ɵprov = ɵɵdefineInjectable({ token: ChecklistDatabase, factory: function (t) { return ChecklistDatabase.ɵfac(t); }, providedIn: null });
    return ChecklistDatabase;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChecklistDatabase, [{
        type: Injectable
    }], function () { return []; }, null); })();
/**
 * @title Tree with checkboxes
 */
var TreeChecklistExample = /** @class */ (function () {
    function TreeChecklistExample(_database) {
        var _this = this;
        this._database = _database;
        /** Map from flat node to nested node. This helps us finding the nested node to be modified */
        this.flatNodeMap = new Map();
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */
        this.nestedNodeMap = new Map();
        /** A selected parent node to be inserted */
        this.selectedParent = null;
        /** The new item's name */
        this.newItemName = '';
        /** The selection for checklist */
        this.checklistSelection = new SelectionModel(true /* multiple */);
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.getChildren = function (node) { return node.children; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.hasNoContent = function (_, _nodeData) { return _nodeData.item === ''; };
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = function (node, level) {
            var existingNode = _this.nestedNodeMap.get(node);
            var flatNode = existingNode && existingNode.item === node.item
                ? existingNode
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            _this.flatNodeMap.set(flatNode, node);
            _this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        };
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        _database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
    }
    /** Whether all the descendants of the node are selected. */
    TreeChecklistExample.prototype.descendantsAllSelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        var descAllSelected = descendants.every(function (child) {
            return _this.checklistSelection.isSelected(child);
        });
        return descAllSelected;
    };
    /** Whether part of the descendants are selected */
    TreeChecklistExample.prototype.descendantsPartiallySelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        var result = descendants.some(function (child) { return _this.checklistSelection.isSelected(child); });
        return result && !this.descendantsAllSelected(node);
    };
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    TreeChecklistExample.prototype.todoItemSelectionToggle = function (node) {
        var _a, _b;
        var _this = this;
        this.checklistSelection.toggle(node);
        var descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? (_a = this.checklistSelection).select.apply(_a, __spread(descendants)) : (_b = this.checklistSelection).deselect.apply(_b, __spread(descendants));
        // Force update for the parent
        descendants.every(function (child) {
            return _this.checklistSelection.isSelected(child);
        });
        this.checkAllParentsSelection(node);
    };
    /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
    TreeChecklistExample.prototype.todoLeafItemSelectionToggle = function (node) {
        this.checklistSelection.toggle(node);
        this.checkAllParentsSelection(node);
    };
    /* Checks all the parents when a leaf node is selected/unselected */
    TreeChecklistExample.prototype.checkAllParentsSelection = function (node) {
        var parent = this.getParentNode(node);
        while (parent) {
            this.checkRootNodeSelection(parent);
            parent = this.getParentNode(parent);
        }
    };
    /** Check root node checked state and change it accordingly */
    TreeChecklistExample.prototype.checkRootNodeSelection = function (node) {
        var _this = this;
        var nodeSelected = this.checklistSelection.isSelected(node);
        var descendants = this.treeControl.getDescendants(node);
        var descAllSelected = descendants.every(function (child) {
            return _this.checklistSelection.isSelected(child);
        });
        if (nodeSelected && !descAllSelected) {
            this.checklistSelection.deselect(node);
        }
        else if (!nodeSelected && descAllSelected) {
            this.checklistSelection.select(node);
        }
    };
    /* Get the parent node of a node */
    TreeChecklistExample.prototype.getParentNode = function (node) {
        var currentLevel = this.getLevel(node);
        if (currentLevel < 1) {
            return null;
        }
        var startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        for (var i = startIndex; i >= 0; i--) {
            var currentNode = this.treeControl.dataNodes[i];
            if (this.getLevel(currentNode) < currentLevel) {
                return currentNode;
            }
        }
        return null;
    };
    /** Select the category so we can insert the new item. */
    TreeChecklistExample.prototype.addNewItem = function (node) {
        var parentNode = this.flatNodeMap.get(node);
        this._database.insertItem(parentNode, '');
        this.treeControl.expand(node);
    };
    /** Save the node to database */
    TreeChecklistExample.prototype.saveNode = function (node, itemValue) {
        var nestedNode = this.flatNodeMap.get(node);
        this._database.updateItem(nestedNode, itemValue);
    };
    TreeChecklistExample.decorators = [
        { type: Component, args: [{
                    selector: 'tree-checklist-example',
                    templateUrl: 'tree-checklist-example.html',
                    styleUrls: ['tree-checklist-example.css'],
                    providers: [ChecklistDatabase]
                },] },
    ];
    /** @nocollapse */
    TreeChecklistExample.ctorParameters = function () { return [
        { type: ChecklistDatabase }
    ]; };
    TreeChecklistExample.ɵfac = function TreeChecklistExample_Factory(t) { return new (t || TreeChecklistExample)(ɵɵdirectiveInject(ChecklistDatabase)); };
    TreeChecklistExample.ɵcmp = ɵɵdefineComponent({ type: TreeChecklistExample, selectors: [["tree-checklist-example"]], features: [ɵɵProvidersFeature([ChecklistDatabase])], decls: 4, vars: 4, consts: [[3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", "", "matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], [1, "checklist-leaf-node", 3, "checked", "change"], ["matTreeNodePadding", ""], ["matInput", "", "placeholder", "New item..."], ["itemValue", ""], ["mat-button", "", 3, "click"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], [3, "checked", "indeterminate", "change"], ["mat-icon-button", "", 3, "click"]], template: function TreeChecklistExample_Template(rf, ctx) { if (rf & 1) {
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
    return TreeChecklistExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TreeChecklistExample, [{
        type: Component,
        args: [{
                selector: 'tree-checklist-example',
                templateUrl: 'tree-checklist-example.html',
                styleUrls: ['tree-checklist-example.css'],
                providers: [ChecklistDatabase]
            }]
    }], function () { return [{ type: ChecklistDatabase }]; }, null); })();

var EXAMPLES$1 = [
    TreeChecklistExample,
];
var TreeExamplesModule = /** @class */ (function () {
    function TreeExamplesModule() {
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
    TreeExamplesModule.ɵmod = ɵɵdefineNgModule({ type: TreeExamplesModule });
    TreeExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function TreeExamplesModule_Factory(t) { return new (t || TreeExamplesModule)(); }, imports: [[
                CommonModule,
                MatButtonModule,
                MatCheckboxModule,
                MatIconModule,
                MatInputModule,
                MatProgressBarModule,
                MatTreeModule,
            ]] });
    return TreeExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TreeExamplesModule, { declarations: [TreeChecklistExample], imports: [CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatTreeModule], exports: [TreeChecklistExample] }); })();
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

/* tslint:disable */
var EXAMPLE_COMPONENTS = { "footer-overview": { "title": "Footer overview", "component": FooterOverviewExample, "additionalFiles": [], "selectorName": "" } };
var EXAMPLE_MODULES = [FooterExamplesModule, TreeExamplesModule];
var EXAMPLE_LIST = [FooterOverviewExample];
var ExampleModule = /** @class */ (function () {
    function ExampleModule() {
    }
    ExampleModule.decorators = [
        { type: NgModule, args: [{
                    imports: EXAMPLE_MODULES,
                    exports: EXAMPLE_MODULES,
                    entryComponents: EXAMPLE_LIST,
                },] },
    ];
    ExampleModule.ɵmod = ɵɵdefineNgModule({ type: ExampleModule });
    ExampleModule.ɵinj = ɵɵdefineInjector({ factory: function ExampleModule_Factory(t) { return new (t || ExampleModule)(); }, imports: [EXAMPLE_MODULES,
            FooterExamplesModule, TreeExamplesModule] });
    return ExampleModule;
}());
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
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
var ExampleData = /** @class */ (function () {
    function ExampleData(example) {
        var _a;
        if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
            return;
        }
        var exampleConfig = EXAMPLE_COMPONENTS[example];
        // TODO(tinayuangao): Do not hard-code extensions
        this.exampleFiles = ['html', 'ts', 'css'].map(function (extension) { return example + "-example." + extension; });
        this.selectorName = this.indexFilename = example + "-example";
        if (exampleConfig.additionalFiles) {
            (_a = this.exampleFiles).push.apply(_a, __spread(exampleConfig.additionalFiles));
        }
        var exampleName = example.replace(/(?:^\w|\b\w)/g, function (letter) { return letter.toUpperCase(); });
        this.description = exampleConfig.title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
        this.componentName = exampleConfig.selectorName ||
            exampleName.replace(/[\-]+/g, '') + 'Example';
    }
    return ExampleData;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { EXAMPLE_COMPONENTS, EXAMPLE_LIST, EXAMPLE_MODULES, ExampleData, ExampleModule, FooterOverviewExample };
//# sourceMappingURL=components-examples.js.map
