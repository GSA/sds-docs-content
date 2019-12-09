import { EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright [COPYRIGHT HOLDER] All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at [LINK TO LICENSE]
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<footer class=\"usa-footer usa-footer--big\" role=\"contentinfo\">\n  <div class=\"usa-footer__primary-section\">\n    <div class=\"grid-container\">\n      <div class=\"grid-row grid-gap\">\n        <div class=\"mobile-lg:grid-col-12 tablet:grid-col-4\">\n          <div\n            class=\"usa-footer__logo grid-row mobile-lg:grid-gap-1 margin-top-3\"\n          >\n            <div\n              class=\"mobile-lg:grid-col-3 mobile-lg:grid-offset-3 tablet:grid-offset-none tablet:grid-col-auto\"\n            >\n              <img\n                *ngIf=\"model.footerLogo\"\n                class=\"usa-footer__logo-img\"\n                [attr.src]=\"model.footerLogo.imageSourcePath\"\n                [attr.alt]=\"model.footerLogo.imageAltText\"\n              />\n              <a\n                *ngIf=\"!model.footerLogo\"\n                class=\"usa-footer__logo-text\"\n                target=\"_blank\"\n                href=\"http://gsa.gov\"\n              >\n                GSA.gov\n              </a>\n            </div>\n            <div class=\"mobile-lg:grid-col-4 tablet:grid-col-auto\">\n              <span class=\"usa-footer__logo-heading\">\n                {{\n                  model.footerLogo?.text || 'General Services Administration'\n                }}\n              </span>\n            </div>\n          </div>\n        </div>\n        <div class=\"mobile-lg:grid-col-12 tablet:grid-col-8\">\n          <nav class=\"usa-footer__nav\">\n            <div class=\"grid-row grid-gap-4\">\n              <div\n                class=\"mobile-lg:grid-col-12 desktop:grid-col-4\"\n                *ngFor=\"let section of model.linkSections\"\n              >\n                <section\n                  class=\"usa-footer__primary-content usa-footer__primary-content--collapsible\"\n                >\n                  <span class=\"usa-footer__primary-link\">{{\n                    section.text\n                  }}</span>\n                  <ul class=\"usa-list usa-list--unstyled\">\n                    <li\n                      class=\"usa-footer__secondary-link\"\n                      *ngFor=\"let link of section.links\"\n                    >\n                      <ng-container\n                        [ngTemplateOutlet]=\"\n                          navigationHelper.isLinkInternal(link)\n                            ? footerRouteLinkTemplate\n                            : navigationHelper.isLinkExternal(link)\n                            ? footerHREFLinkTemplate\n                            : footerEVENTLinkTemplate\n                        \"\n                        [ngTemplateOutletContext]=\"{ $implicit: link }\"\n                      ></ng-container>\n                    </li>\n                  </ul>\n                </section>\n              </div>\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"usa-footer__secondary-section\">\n    <div class=\"grid-container\">\n      <div class=\"grid-row\">\n        <div class=\"grid-col-12\">\n          <p class=\"font-body-2xs line-height-sans-4 margin-top-0\">\n            This is a U.S. General Services Administration Federal Government\n            computer system that is\n            <strong>\"FOR OFFICIAL USE ONLY.\"</strong> This system is subject to\n            monitoring. Individuals found performing unauthorized activities are\n            subject to disciplinary action including criminal prosecution.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n\n<ng-template #footerRouteLinkTemplate let-link>\n  <a [routerLink]=\"[link.route]\">{{ link.text }}</a>\n</ng-template>\n\n<ng-template #footerHREFLinkTemplate let-link>\n  <a [attr.href]=\"[link.route]\">{{ link.text }}</a>\n</ng-template>\n\n<ng-template #footerEVENTLinkTemplate let-link>\n  <a href=\"javascript:void(0)\" (click)=\"linkClickEvent(link)\">{{\n    link.text\n  }}</a>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
SdsFooter.propDecorators = {
    model: [{ type: Input }],
    linkEvent: [{ type: Output }]
};
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SdsFooterModule {
}
SdsFooterModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, RouterModule],
                exports: [SdsFooter],
                declarations: [SdsFooter],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const EXAMPLE_COMPONENTS = { "footer-overview": { "title": "Footer overview", "component": FooterOverviewExample, "additionalFiles": [], "selectorName": "" } };
/** @type {?} */
const EXAMPLE_MODULES = [FooterExamplesModule];
/** @type {?} */
const EXAMPLE_LIST = [FooterOverviewExample];
class ExampleModule {
}
ExampleModule.decorators = [
    { type: NgModule, args: [{
                imports: EXAMPLE_MODULES,
                exports: EXAMPLE_MODULES,
                entryComponents: EXAMPLE_LIST,
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ExampleData, EXAMPLE_COMPONENTS, EXAMPLE_MODULES, EXAMPLE_LIST, ExampleModule, FooterOverviewExample };
//# sourceMappingURL=examples.js.map
