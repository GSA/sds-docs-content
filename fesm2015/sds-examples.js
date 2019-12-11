import { NgModule } from '@angular/core';
import { FooterOverviewExample, FooterExamplesModule } from '@gsa-sam/sds-examples/components/footer';
export { FooterOverviewExample } from '@gsa-sam/sds-examples/components/footer';

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

export { ExampleData, EXAMPLE_COMPONENTS, EXAMPLE_MODULES, EXAMPLE_LIST, ExampleModule };
//# sourceMappingURL=sds-examples.js.map
