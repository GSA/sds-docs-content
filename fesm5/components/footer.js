import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsFooterModule } from '@gsa-sam/components/footer';
import { NavigationMode } from '@gsa-sam/components/core';
import { BehaviorSubject } from 'rxjs';

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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
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

export { FooterOverviewExample, FooterExamplesModule };
//# sourceMappingURL=footer.js.map
