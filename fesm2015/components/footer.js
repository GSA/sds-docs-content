import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsFooterModule } from '@gsa-sam/components/footer';
import { NavigationMode } from '@gsa-sam/components/core';
import { BehaviorSubject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<sds-footer [model]=\"modelFooter\" (linkEvent)=\"linkEvent.next($event)\"></sds-footer>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
FooterOverviewExample.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    FooterOverviewExample.prototype.linkEvent;
    /** @type {?} */
    FooterOverviewExample.prototype.modelFooter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    CommonModule,
                    SdsFooterModule
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { FooterOverviewExample, FooterExamplesModule };
//# sourceMappingURL=footer.js.map
