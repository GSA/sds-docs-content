import { __spread } from 'tslib';
import { NgModule } from '@angular/core';
import { FooterOverviewExample, FooterExamplesModule } from '@gsa-sam/sds-examples/components/footer';
export { FooterOverviewExample } from '@gsa-sam/sds-examples/components/footer';

/* tslint:disable */
var EXAMPLE_COMPONENTS = { "footer-overview": { "title": "Footer overview", "component": FooterOverviewExample, "additionalFiles": [], "selectorName": "" } };
var EXAMPLE_MODULES = [FooterExamplesModule];
var EXAMPLE_LIST = [FooterOverviewExample];
var ExampleModule = /** @class */ (function () {
    function ExampleModule() {
    }
    ExampleModule.decorators = [
        { type: NgModule, args: [{
                    imports: EXAMPLE_MODULES,
                    exports: EXAMPLE_MODULES,
                    entryComponents: EXAMPLE_LIST,
                },] }
    ];
    return ExampleModule;
}());

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

export { ExampleData, EXAMPLE_COMPONENTS, EXAMPLE_MODULES, EXAMPLE_LIST, ExampleModule };
//# sourceMappingURL=sds-examples.js.map
