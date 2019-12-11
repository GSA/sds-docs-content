(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@gsa-sam/components/footer'), require('@gsa-sam/components/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@gsa-sam/sds-examples/components/footer', ['exports', '@angular/core', '@angular/common', '@gsa-sam/components/footer', '@gsa-sam/components/core', 'rxjs'], factory) :
    (global = global || self, factory((global.gsaSam = global.gsaSam || {}, global.gsaSam.sdsExamples = global.gsaSam.sdsExamples || {}, global.gsaSam.sdsExamples.components = global.gsaSam.sdsExamples.components || {}, global.gsaSam.sdsExamples.components.footer = {}), global.ng.core, global.ng.common, global.sds.components.footer, global.sds.components.core, global.rxjs));
}(this, function (exports, core, common, footer, core$1, rxjs) { 'use strict';

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
                                mode: core$1.NavigationMode.INTERNAL
                            },
                            { text: 'Release Notes', route: '/', mode: core$1.NavigationMode.INTERNAL }
                        ]
                    },
                    {
                        text: 'Our Partners',
                        links: [
                            { text: 'Aquisition.gov', route: '/', mode: core$1.NavigationMode.INTERNAL },
                            {
                                text: 'USASpending.gov',
                                route: '/',
                                mode: core$1.NavigationMode.INTERNAL
                            },
                            { text: 'Grants.gov', route: '/', mode: core$1.NavigationMode.INTERNAL },
                            { text: 'More Partners', route: '/', mode: core$1.NavigationMode.INTERNAL }
                        ]
                    },
                    {
                        text: 'Customer Service',
                        links: [
                            {
                                text: 'Learning Center',
                                route: '/',
                                mode: core$1.NavigationMode.INTERNAL
                            },
                            {
                                text: 'Contact Federal Service Desk',
                                route: '/',
                                mode: core$1.NavigationMode.INTERNAL
                            },
                            { text: 'Resources', route: '/', mode: core$1.NavigationMode.INTERNAL },
                            {
                                text: 'Freedom of Information Act',
                                route: '/',
                                mode: core$1.NavigationMode.INTERNAL
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
                            footer.SdsFooterModule
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
//# sourceMappingURL=sds-examples-components-footer.umd.js.map
