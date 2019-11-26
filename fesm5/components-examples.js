import { __spread } from 'tslib';
import { ɵɵelement, ɵɵnextContext, ɵɵattribute, ɵɵsanitizeUrl, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelementContainer, ɵɵreference, ɵɵadvance, ɵɵproperty, ɵɵpureFunction1, ɵɵtemplate, ɵɵtextInterpolate, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, ɵɵdefineComponent, ɵɵtemplateRefExtractor, ɵɵtextInterpolate1, ɵsetClassMetadata, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { NgIf, NgForOf, NgTemplateOutlet, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

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
                        CommonModule,
                        SdsFooterModule
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    FooterExamplesModule.ɵmod = ɵɵdefineNgModule({ type: FooterExamplesModule });
    FooterExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function FooterExamplesModule_Factory(t) { return new (t || FooterExamplesModule)(); }, imports: [[
                CommonModule,
                SdsFooterModule
            ]] });
    return FooterExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FooterExamplesModule, { declarations: [FooterOverviewExample], imports: [CommonModule,
        SdsFooterModule], exports: [FooterOverviewExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(FooterExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    SdsFooterModule
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

/* tslint:disable */
var EXAMPLE_COMPONENTS = {};
var EXAMPLE_MODULES = [FooterExamplesModule];
var EXAMPLE_LIST = [];
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
            FooterExamplesModule] });
    return ExampleModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ExampleModule, { imports: [FooterExamplesModule], exports: [FooterExamplesModule] }); })();
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

export { EXAMPLE_COMPONENTS, EXAMPLE_LIST, EXAMPLE_MODULES, ExampleData, ExampleModule };
//# sourceMappingURL=components-examples.js.map
