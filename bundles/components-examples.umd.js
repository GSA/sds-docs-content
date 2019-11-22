(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib'), require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/router'), require('rxjs'), require('@angular/material/button'), require('@angular/material/checkbox'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/progress-bar'), require('@angular/material/tree'), require('@angular/cdk/collections'), require('@angular/cdk/tree'), require('@angular/material/form-field')) :
    typeof define === 'function' && define.amd ? define('@gsa-sam/components-examples', ['exports', 'tslib', '@angular/core', '@angular/common', '@angular/forms', '@angular/router', 'rxjs', '@angular/material/button', '@angular/material/checkbox', '@angular/material/icon', '@angular/material/input', '@angular/material/progress-bar', '@angular/material/tree', '@angular/cdk/collections', '@angular/cdk/tree', '@angular/material/form-field'], factory) :
    (global = global || self, factory((global.gsaSam = global.gsaSam || {}, global.gsaSam.componentsExamples = {}), global.tslib, global.ng.core, global.ng.common, global.ng.forms, global.ng.router, global.rxjs, global.ng.material.button, global.ng.material.checkbox, global.ng.material.icon, global.ng.material.input, global.ng.material.progressBar, global.ng.material.tree, global.ng.cdk.collections, global.ng.cdk.tree, global.ng.material.formField));
}(this, (function (exports, tslib, i0, i1, forms, i2, rxjs, i2$1, i3, i6, i5, progressBar, i1$1, collections, tree, i4) { 'use strict';

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
        i0.ɵɵelement(0, "img", 22);
    } if (rf & 2) {
        var ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵattribute("src", ctx_r0.model.footerLogo.imageSourcePath, i0.ɵɵsanitizeUrl)("alt", ctx_r0.model.footerLogo.imageAltText);
    } }
    function SdsFooter_a_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 23);
        i0.ɵɵtext(1, " GSA.gov ");
        i0.ɵɵelementEnd();
    } }
    var _c0 = function (a0) { return { $implicit: a0 }; };
    function SdsFooter_div_15_li_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "li", 29);
        i0.ɵɵelementContainer(1, 30);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var link_r11 = ctx.$implicit;
        var ctx_r10 = i0.ɵɵnextContext(2);
        var _r3 = i0.ɵɵreference(26);
        var _r5 = i0.ɵɵreference(28);
        var _r7 = i0.ɵɵreference(30);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r10.navigationHelper.isLinkInternal(link_r11) ? _r3 : ctx_r10.navigationHelper.isLinkExternal(link_r11) ? _r5 : _r7)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, link_r11));
    } }
    function SdsFooter_div_15_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 24);
        i0.ɵɵelementStart(1, "section", 25);
        i0.ɵɵelementStart(2, "span", 26);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "ul", 27);
        i0.ɵɵtemplate(5, SdsFooter_div_15_li_5_Template, 2, 4, "li", 28);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var section_r9 = ctx.$implicit;
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(section_r9.text);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", section_r9.links);
    } }
    var _c1 = function (a0) { return [a0]; };
    function SdsFooter_ng_template_25_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 31);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var link_r12 = ctx.$implicit;
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c1, link_r12.route));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(link_r12.text);
    } }
    function SdsFooter_ng_template_27_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "a");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var link_r13 = ctx.$implicit;
        i0.ɵɵattribute("href", i0.ɵɵpureFunction1(2, _c1, link_r13.route), i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(link_r13.text);
    } }
    function SdsFooter_ng_template_29_Template(rf, ctx) { if (rf & 1) {
        var _r16 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "a", 32);
        i0.ɵɵlistener("click", function SdsFooter_ng_template_29_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r16); var link_r14 = ctx.$implicit; var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.linkClickEvent(link_r14); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var link_r14 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(link_r14.text);
    } }
    var SdsFooter = /** @class */ (function () {
        function SdsFooter() {
            /** Navigation helper */
            this.navigationHelper = new NavigationHelper();
            /** Event for event based */
            this.linkEvent = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'sds-footer',
                        templateUrl: './footer.html',
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        SdsFooter.propDecorators = {
            model: [{ type: i0.Input }],
            linkEvent: [{ type: i0.Output }]
        };
        SdsFooter.ɵfac = function SdsFooter_Factory(t) { return new (t || SdsFooter)(); };
        SdsFooter.ɵcmp = i0.ɵɵdefineComponent({ type: SdsFooter, selectors: [["sds-footer"]], inputs: { model: "model" }, outputs: { linkEvent: "linkEvent" }, decls: 31, vars: 4, consts: [["role", "contentinfo", 1, "usa-footer", "usa-footer--big"], [1, "usa-footer__primary-section"], [1, "grid-container"], [1, "grid-row", "grid-gap"], [1, "mobile-lg:grid-col-12", "tablet:grid-col-4"], [1, "usa-footer__logo", "grid-row", "mobile-lg:grid-gap-1", "margin-top-3"], [1, "mobile-lg:grid-col-3", "mobile-lg:grid-offset-3", "tablet:grid-offset-none", "tablet:grid-col-auto"], ["class", "usa-footer__logo-img", 4, "ngIf"], ["class", "usa-footer__logo-text", "target", "_blank", "href", "http://gsa.gov", 4, "ngIf"], [1, "mobile-lg:grid-col-4", "tablet:grid-col-auto"], [1, "usa-footer__logo-heading"], [1, "mobile-lg:grid-col-12", "tablet:grid-col-8"], [1, "usa-footer__nav"], [1, "grid-row", "grid-gap-4"], ["class", "mobile-lg:grid-col-12 desktop:grid-col-4", 4, "ngFor", "ngForOf"], [1, "usa-footer__secondary-section"], [1, "grid-row"], [1, "grid-col-12"], [1, "font-body-2xs", "line-height-sans-4", "margin-top-0"], ["footerRouteLinkTemplate", ""], ["footerHREFLinkTemplate", ""], ["footerEVENTLinkTemplate", ""], [1, "usa-footer__logo-img"], ["target", "_blank", "href", "http://gsa.gov", 1, "usa-footer__logo-text"], [1, "mobile-lg:grid-col-12", "desktop:grid-col-4"], [1, "usa-footer__primary-content", "usa-footer__primary-content--collapsible"], [1, "usa-footer__primary-link"], [1, "usa-list", "usa-list--unstyled"], ["class", "usa-footer__secondary-link", 4, "ngFor", "ngForOf"], [1, "usa-footer__secondary-link"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "routerLink"], ["href", "javascript:void(0)", 3, "click"]], template: function SdsFooter_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "footer", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵelementStart(4, "div", 4);
                i0.ɵɵelementStart(5, "div", 5);
                i0.ɵɵelementStart(6, "div", 6);
                i0.ɵɵtemplate(7, SdsFooter_img_7_Template, 1, 2, "img", 7);
                i0.ɵɵtemplate(8, SdsFooter_a_8_Template, 2, 0, "a", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 9);
                i0.ɵɵelementStart(10, "span", 10);
                i0.ɵɵtext(11);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "div", 11);
                i0.ɵɵelementStart(13, "nav", 12);
                i0.ɵɵelementStart(14, "div", 13);
                i0.ɵɵtemplate(15, SdsFooter_div_15_Template, 6, 2, "div", 14);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "div", 15);
                i0.ɵɵelementStart(17, "div", 2);
                i0.ɵɵelementStart(18, "div", 16);
                i0.ɵɵelementStart(19, "div", 17);
                i0.ɵɵelementStart(20, "p", 18);
                i0.ɵɵtext(21, " This is a U.S. General Services Administration Federal Government computer system that is ");
                i0.ɵɵelementStart(22, "strong");
                i0.ɵɵtext(23, "\"FOR OFFICIAL USE ONLY.\"");
                i0.ɵɵelementEnd();
                i0.ɵɵtext(24, " This system is subject to monitoring. Individuals found performing unauthorized activities are subject to disciplinary action including criminal prosecution. ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(25, SdsFooter_ng_template_25_Template, 2, 4, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(27, SdsFooter_ng_template_27_Template, 2, 4, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(29, SdsFooter_ng_template_29_Template, 2, 1, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
            } if (rf & 2) {
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("ngIf", ctx.model.footerLogo);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.model.footerLogo);
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate1(" ", (ctx.model.footerLogo == null ? null : ctx.model.footerLogo.text) || "General Services Administration", " ");
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngForOf", ctx.model.linkSections);
            } }, directives: [i1.NgIf, i1.NgForOf, i1.NgTemplateOutlet, i2.RouterLinkWithHref], encapsulation: 2, changeDetection: 0 });
        return SdsFooter;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SdsFooter, [{
            type: i0.Component,
            args: [{
                    selector: 'sds-footer',
                    templateUrl: './footer.html',
                    encapsulation: i0.ViewEncapsulation.None,
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                }]
        }], null, { model: [{
                type: i0.Input
            }], linkEvent: [{
                type: i0.Output
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
            { type: i0.NgModule, args: [{
                        imports: [i1.CommonModule, forms.FormsModule, i2.RouterModule],
                        exports: [SdsFooter],
                        declarations: [SdsFooter],
                    },] },
        ];
        SdsFooterModule.ɵmod = i0.ɵɵdefineNgModule({ type: SdsFooterModule });
        SdsFooterModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SdsFooterModule_Factory(t) { return new (t || SdsFooterModule)(); }, imports: [[i1.CommonModule, forms.FormsModule, i2.RouterModule]] });
        return SdsFooterModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SdsFooterModule, { declarations: [SdsFooter], imports: [i1.CommonModule, forms.FormsModule, i2.RouterModule], exports: [SdsFooter] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SdsFooterModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [i1.CommonModule, forms.FormsModule, i2.RouterModule],
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
            this.linkEvent = new rxjs.BehaviorSubject({});
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
            { type: i0.Component, args: [{
                        selector: 'footer-overview-example',
                        templateUrl: 'footer-overview-example.html',
                        styleUrls: ['footer-overview-example.css']
                    },] },
        ];
        /** @nocollapse */
        FooterOverviewExample.ctorParameters = function () { return []; };
        FooterOverviewExample.ɵfac = function FooterOverviewExample_Factory(t) { return new (t || FooterOverviewExample)(); };
        FooterOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: FooterOverviewExample, selectors: [["footer-overview-example"]], decls: 1, vars: 1, consts: [[3, "model", "linkEvent"]], template: function FooterOverviewExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "sds-footer", 0);
                i0.ɵɵlistener("linkEvent", function FooterOverviewExample_Template_sds_footer_linkEvent_0_listener($event) { return ctx.linkEvent.next($event); });
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("model", ctx.modelFooter);
            } }, directives: [SdsFooter], styles: [""] });
        return FooterOverviewExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FooterOverviewExample, [{
            type: i0.Component,
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
            { type: i0.NgModule, args: [{
                        imports: [
                            SdsFooterModule
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] },
        ];
        FooterExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: FooterExamplesModule });
        FooterExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FooterExamplesModule_Factory(t) { return new (t || FooterExamplesModule)(); }, imports: [[
                    SdsFooterModule
                ]] });
        return FooterExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FooterExamplesModule, { declarations: [FooterOverviewExample], imports: [SdsFooterModule], exports: [FooterOverviewExample] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FooterExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        SdsFooterModule
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }], null, null); })();

    function TreeChecklistExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
        var _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-tree-node", 3);
        i0.ɵɵelement(1, "button", 4);
        i0.ɵɵelementStart(2, "mat-checkbox", 5);
        i0.ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_1_Template_mat_checkbox_change_2_listener($event) { i0.ɵɵrestoreView(_r5); var node_r3 = ctx.$implicit; var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.todoLeafItemSelectionToggle(node_r3); });
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var node_r3 = ctx.$implicit;
        var ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("checked", ctx_r0.checklistSelection.isSelected(node_r3));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(node_r3.item);
    } }
    function TreeChecklistExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
        var _r9 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-tree-node", 6);
        i0.ɵɵelement(1, "button", 4);
        i0.ɵɵelementStart(2, "mat-form-field");
        i0.ɵɵelement(3, "input", 7, 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 9);
        i0.ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_2_Template_button_click_5_listener($event) { i0.ɵɵrestoreView(_r9); var node_r6 = ctx.$implicit; var _r7 = i0.ɵɵreference(4); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.saveNode(node_r6, _r7.value); });
        i0.ɵɵtext(6, "Save");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function TreeChecklistExample_mat_tree_node_3_Template(rf, ctx) { if (rf & 1) {
        var _r12 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-tree-node", 6);
        i0.ɵɵelementStart(1, "button", 10);
        i0.ɵɵelementStart(2, "mat-icon", 11);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-checkbox", 12);
        i0.ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_3_Template_mat_checkbox_change_4_listener($event) { i0.ɵɵrestoreView(_r12); var node_r10 = ctx.$implicit; var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.todoItemSelectionToggle(node_r10); });
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 13);
        i0.ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_3_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r12); var node_r10 = ctx.$implicit; var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.addNewItem(node_r10); });
        i0.ɵɵelementStart(7, "mat-icon");
        i0.ɵɵtext(8, "add");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var node_r10 = ctx.$implicit;
        var ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("aria-label", "toggle " + node_r10.filename);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx_r2.treeControl.isExpanded(node_r10) ? "expand_more" : "chevron_right", " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("checked", ctx_r2.descendantsAllSelected(node_r10))("indeterminate", ctx_r2.descendantsPartiallySelected(node_r10));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(node_r10.item);
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
            this.dataChange = new rxjs.BehaviorSubject([]);
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
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        ChecklistDatabase.ctorParameters = function () { return []; };
        ChecklistDatabase.ɵfac = function ChecklistDatabase_Factory(t) { return new (t || ChecklistDatabase)(); };
        ChecklistDatabase.ɵprov = i0.ɵɵdefineInjectable({ token: ChecklistDatabase, factory: function (t) { return ChecklistDatabase.ɵfac(t); }, providedIn: null });
        return ChecklistDatabase;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChecklistDatabase, [{
            type: i0.Injectable
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
            this.checklistSelection = new collections.SelectionModel(true /* multiple */);
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
            this.treeFlattener = new i1$1.MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
            this.treeControl = new tree.FlatTreeControl(this.getLevel, this.isExpandable);
            this.dataSource = new i1$1.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
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
                ? (_a = this.checklistSelection).select.apply(_a, tslib.__spread(descendants)) : (_b = this.checklistSelection).deselect.apply(_b, tslib.__spread(descendants));
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
            { type: i0.Component, args: [{
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
        TreeChecklistExample.ɵfac = function TreeChecklistExample_Factory(t) { return new (t || TreeChecklistExample)(i0.ɵɵdirectiveInject(ChecklistDatabase)); };
        TreeChecklistExample.ɵcmp = i0.ɵɵdefineComponent({ type: TreeChecklistExample, selectors: [["tree-checklist-example"]], features: [i0.ɵɵProvidersFeature([ChecklistDatabase])], decls: 4, vars: 4, consts: [[3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", "", "matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], [1, "checklist-leaf-node", 3, "checked", "change"], ["matTreeNodePadding", ""], ["matInput", "", "placeholder", "New item..."], ["itemValue", ""], ["mat-button", "", 3, "click"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], [3, "checked", "indeterminate", "change"], ["mat-icon-button", "", 3, "click"]], template: function TreeChecklistExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-tree", 0);
                i0.ɵɵtemplate(1, TreeChecklistExample_mat_tree_node_1_Template, 4, 2, "mat-tree-node", 1);
                i0.ɵɵtemplate(2, TreeChecklistExample_mat_tree_node_2_Template, 7, 0, "mat-tree-node", 2);
                i0.ɵɵtemplate(3, TreeChecklistExample_mat_tree_node_3_Template, 9, 5, "mat-tree-node", 2);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasNoContent);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
            } }, directives: [i1$1.MatTree, i1$1.MatTreeNodeDef, i1$1.MatTreeNode, i1$1.MatTreeNodeToggle, i1$1.MatTreeNodePadding, i2$1.MatButton, i3.MatCheckbox, i4.MatFormField, i5.MatInput, i6.MatIcon], styles: [""] });
        return TreeChecklistExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TreeChecklistExample, [{
            type: i0.Component,
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
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CommonModule,
                            i2$1.MatButtonModule,
                            i3.MatCheckboxModule,
                            i6.MatIconModule,
                            i5.MatInputModule,
                            progressBar.MatProgressBarModule,
                            i1$1.MatTreeModule,
                        ],
                        declarations: EXAMPLES$1,
                        exports: EXAMPLES$1,
                    },] },
        ];
        TreeExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: TreeExamplesModule });
        TreeExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TreeExamplesModule_Factory(t) { return new (t || TreeExamplesModule)(); }, imports: [[
                    i1.CommonModule,
                    i2$1.MatButtonModule,
                    i3.MatCheckboxModule,
                    i6.MatIconModule,
                    i5.MatInputModule,
                    progressBar.MatProgressBarModule,
                    i1$1.MatTreeModule,
                ]] });
        return TreeExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TreeExamplesModule, { declarations: [TreeChecklistExample], imports: [i1.CommonModule,
            i2$1.MatButtonModule,
            i3.MatCheckboxModule,
            i6.MatIconModule,
            i5.MatInputModule,
            progressBar.MatProgressBarModule,
            i1$1.MatTreeModule], exports: [TreeChecklistExample] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TreeExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i1.CommonModule,
                        i2$1.MatButtonModule,
                        i3.MatCheckboxModule,
                        i6.MatIconModule,
                        i5.MatInputModule,
                        progressBar.MatProgressBarModule,
                        i1$1.MatTreeModule,
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
            { type: i0.NgModule, args: [{
                        imports: EXAMPLE_MODULES,
                        exports: EXAMPLE_MODULES,
                        entryComponents: EXAMPLE_LIST,
                    },] },
        ];
        ExampleModule.ɵmod = i0.ɵɵdefineNgModule({ type: ExampleModule });
        ExampleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ExampleModule_Factory(t) { return new (t || ExampleModule)(); }, imports: [EXAMPLE_MODULES,
                FooterExamplesModule, TreeExamplesModule] });
        return ExampleModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ExampleModule, { imports: [FooterExamplesModule, TreeExamplesModule], exports: [FooterExamplesModule, TreeExamplesModule] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExampleModule, [{
            type: i0.NgModule,
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
                (_a = this.exampleFiles).push.apply(_a, tslib.__spread(exampleConfig.additionalFiles));
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

    exports.EXAMPLE_COMPONENTS = EXAMPLE_COMPONENTS;
    exports.EXAMPLE_LIST = EXAMPLE_LIST;
    exports.EXAMPLE_MODULES = EXAMPLE_MODULES;
    exports.ExampleData = ExampleData;
    exports.ExampleModule = ExampleModule;
    exports.FooterOverviewExample = FooterOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples.umd.js.map
