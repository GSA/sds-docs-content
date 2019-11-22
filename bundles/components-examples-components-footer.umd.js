(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/router'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@gsa-sam/components-examples/components/footer', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/router', 'rxjs'], factory) :
    (global = global || self, factory((global.gsaSam = global.gsaSam || {}, global.gsaSam.componentsExamples = global.gsaSam.componentsExamples || {}, global.gsaSam.componentsExamples.components = global.gsaSam.componentsExamples.components || {}, global.gsaSam.componentsExamples.components.footer = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.router, global.rxjs));
}(this, (function (exports, i0, i1, forms, i2, rxjs) { 'use strict';

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

    exports.FooterExamplesModule = FooterExamplesModule;
    exports.FooterOverviewExample = FooterOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-components-footer.umd.js.map
