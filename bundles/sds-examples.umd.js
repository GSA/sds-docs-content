(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib'), require('@angular/core'), require('@gsa-sam/sds-examples/components/footer')) :
    typeof define === 'function' && define.amd ? define('@gsa-sam/sds-examples', ['exports', 'tslib', '@angular/core', '@gsa-sam/sds-examples/components/footer'], factory) :
    (global = global || self, factory((global.gsaSam = global.gsaSam || {}, global.gsaSam.sdsExamples = {}), global.tslib, global.ng.core, global.sds.sdsExamples.components.footer));
}(this, function (exports, tslib_1, core, footer) { 'use strict';

    /* tslint:disable */
    var EXAMPLE_COMPONENTS = { "footer-overview": { "title": "Footer overview", "component": footer.FooterOverviewExample, "additionalFiles": [], "selectorName": "" } };
    var EXAMPLE_MODULES = [footer.FooterExamplesModule];
    var EXAMPLE_LIST = [footer.FooterOverviewExample];
    var ExampleModule = /** @class */ (function () {
        function ExampleModule() {
        }
        ExampleModule.decorators = [
            { type: core.NgModule, args: [{
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
                (_a = this.exampleFiles).push.apply(_a, tslib_1.__spread(exampleConfig.additionalFiles));
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

    exports.FooterOverviewExample = footer.FooterOverviewExample;
    exports.ExampleData = ExampleData;
    exports.EXAMPLE_COMPONENTS = EXAMPLE_COMPONENTS;
    exports.EXAMPLE_MODULES = EXAMPLE_MODULES;
    exports.EXAMPLE_LIST = EXAMPLE_LIST;
    exports.ExampleModule = ExampleModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=sds-examples.umd.js.map
