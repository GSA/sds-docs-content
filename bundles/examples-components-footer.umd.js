(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/router'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@gsa-sam/sds-examples/components/footer', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/router', 'rxjs'], factory) :
    (global = global || self, factory((global.gsaSam = global.gsaSam || {}, global.gsaSam.sdsExamples = global.gsaSam.sdsExamples || {}, global.gsaSam.sdsExamples.components = global.gsaSam.sdsExamples.components || {}, global.gsaSam.sdsExamples.components.footer = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.router, global.rxjs));
}(this, function (exports, core, common, forms, router, rxjs) { 'use strict';

    /**
     * @license
     * Copyright [COPYRIGHT HOLDER] All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at [LINK TO LICENSE]
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
     * Copyright [COPYRIGHT HOLDER] All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at [LINK TO LICENSE]
     */

    /**
     * @license
     * Copyright [COPYRIGHT HOLDER] All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at [LINK TO LICENSE]
     */

    /**
     * Generated bundle index. Do not edit.
     */

    /**
     * @license
     * Copyright [COPYRIGHT HOLDER] All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at [LINK TO LICENSE]
     */
    var SdsFooter = /** @class */ (function () {
        function SdsFooter() {
            /** Navigation helper */
            this.navigationHelper = new NavigationHelper();
            /** Event for event based */
            this.linkEvent = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'sds-footer',
                        template: "<footer class=\"usa-footer usa-footer--big\" role=\"contentinfo\">\n  <div class=\"usa-footer__primary-section\">\n    <div class=\"grid-container\">\n      <div class=\"grid-row grid-gap\">\n        <div class=\"mobile-lg:grid-col-12 tablet:grid-col-4\">\n          <div\n            class=\"usa-footer__logo grid-row mobile-lg:grid-gap-1 margin-top-3\"\n          >\n            <div\n              class=\"mobile-lg:grid-col-3 mobile-lg:grid-offset-3 tablet:grid-offset-none tablet:grid-col-auto\"\n            >\n              <img\n                *ngIf=\"model.footerLogo\"\n                class=\"usa-footer__logo-img\"\n                [attr.src]=\"model.footerLogo.imageSourcePath\"\n                [attr.alt]=\"model.footerLogo.imageAltText\"\n              />\n              <a\n                *ngIf=\"!model.footerLogo\"\n                class=\"usa-footer__logo-text\"\n                target=\"_blank\"\n                href=\"http://gsa.gov\"\n              >\n                GSA.gov\n              </a>\n            </div>\n            <div class=\"mobile-lg:grid-col-4 tablet:grid-col-auto\">\n              <span class=\"usa-footer__logo-heading\">\n                {{\n                  model.footerLogo?.text || 'General Services Administration'\n                }}\n              </span>\n            </div>\n          </div>\n        </div>\n        <div class=\"mobile-lg:grid-col-12 tablet:grid-col-8\">\n          <nav class=\"usa-footer__nav\">\n            <div class=\"grid-row grid-gap-4\">\n              <div\n                class=\"mobile-lg:grid-col-12 desktop:grid-col-4\"\n                *ngFor=\"let section of model.linkSections\"\n              >\n                <section\n                  class=\"usa-footer__primary-content usa-footer__primary-content--collapsible\"\n                >\n                  <span class=\"usa-footer__primary-link\">{{\n                    section.text\n                  }}</span>\n                  <ul class=\"usa-list usa-list--unstyled\">\n                    <li\n                      class=\"usa-footer__secondary-link\"\n                      *ngFor=\"let link of section.links\"\n                    >\n                      <ng-container\n                        [ngTemplateOutlet]=\"\n                          navigationHelper.isLinkInternal(link)\n                            ? footerRouteLinkTemplate\n                            : navigationHelper.isLinkExternal(link)\n                            ? footerHREFLinkTemplate\n                            : footerEVENTLinkTemplate\n                        \"\n                        [ngTemplateOutletContext]=\"{ $implicit: link }\"\n                      ></ng-container>\n                    </li>\n                  </ul>\n                </section>\n              </div>\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"usa-footer__secondary-section\">\n    <div class=\"grid-container\">\n      <div class=\"grid-row\">\n        <div class=\"grid-col-12\">\n          <p class=\"font-body-2xs line-height-sans-4 margin-top-0\">\n            This is a U.S. General Services Administration Federal Government\n            computer system that is\n            <strong>\"FOR OFFICIAL USE ONLY.\"</strong> This system is subject to\n            monitoring. Individuals found performing unauthorized activities are\n            subject to disciplinary action including criminal prosecution.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n\n<ng-template #footerRouteLinkTemplate let-link>\n  <a [routerLink]=\"[link.route]\">{{ link.text }}</a>\n</ng-template>\n\n<ng-template #footerHREFLinkTemplate let-link>\n  <a [attr.href]=\"[link.route]\">{{ link.text }}</a>\n</ng-template>\n\n<ng-template #footerEVENTLinkTemplate let-link>\n  <a href=\"javascript:void(0)\" (click)=\"linkClickEvent(link)\">{{\n    link.text\n  }}</a>\n</ng-template>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        SdsFooter.propDecorators = {
            model: [{ type: core.Input }],
            linkEvent: [{ type: core.Output }]
        };
        return SdsFooter;
    }());

    /**
     * @license
     * Copyright [COPYRIGHT HOLDER] All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at [LINK TO LICENSE]
     */
    var SdsFooterModule = /** @class */ (function () {
        function SdsFooterModule() {
        }
        SdsFooterModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, router.RouterModule],
                        exports: [SdsFooter],
                        declarations: [SdsFooter],
                    },] }
        ];
        return SdsFooterModule;
    }());

    /**
     * @license
     * Copyright [COPYRIGHT HOLDER] All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at [LINK TO LICENSE]
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
            { type: core.Component, args: [{
                        selector: 'footer-overview-example',
                        template: "<sds-footer [model]=\"modelFooter\" (linkEvent)=\"linkEvent.next($event)\"></sds-footer>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        /** @nocollapse */
        FooterOverviewExample.ctorParameters = function () { return []; };
        return FooterOverviewExample;
    }());

    var EXAMPLES = [
        FooterOverviewExample,
    ];
    var FooterExamplesModule = /** @class */ (function () {
        function FooterExamplesModule() {
        }
        FooterExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            SdsFooterModule
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return FooterExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FooterOverviewExample = FooterOverviewExample;
    exports.FooterExamplesModule = FooterExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=examples-components-footer.umd.js.map
