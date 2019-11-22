import { FlatTreeControl, CdkTree, CdkTreeNodeDef, CdkTreeNode, CdkTreeNodePadding, CdkTreeNodeToggle, NestedTreeControl, CdkNestedTreeNode, CdkTreeNodeOutlet, CdkTreeModule } from '@angular/cdk/tree';
import { ɵɵelementStart, ɵɵelement, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵstyleProp, ɵɵadvance, ɵɵtextInterpolate1, ɵɵlistener, ɵɵattribute, Component, ɵɵdefineComponent, ɵɵtemplate, ɵɵproperty, ɵsetClassMetadata, ɵɵelementContainer, ɵɵclassProp, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ArrayDataSource } from '@angular/cdk/collections';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function CdkTreeFlatExample_cdk_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-tree-node", 3);
    ɵɵelement(1, "button", 4);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r598 = ctx.$implicit;
    const ctx_r596 = ɵɵnextContext();
    ɵɵstyleProp("display", ctx_r596.shouldRender(node_r598) ? "flex" : "none");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", node_r598.name, " ");
} }
function CdkTreeFlatExample_cdk_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-tree-node", 3);
    ɵɵelementStart(1, "button", 5);
    ɵɵlistener("click", function CdkTreeFlatExample_cdk_tree_node_2_Template_button_click_1_listener($event) { const node_r599 = ctx.$implicit; return node_r599.isExpanded = !node_r599.isExpanded; });
    ɵɵelementStart(2, "mat-icon", 6);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r599 = ctx.$implicit;
    const ctx_r597 = ɵɵnextContext();
    ɵɵstyleProp("display", ctx_r597.shouldRender(node_r599) ? "flex" : "none");
    ɵɵadvance(1);
    ɵɵstyleProp("visibility", node_r599.expandable ? "visible" : "hidden");
    ɵɵattribute("aria-label", "toggle " + node_r599.filename);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r597.treeControl.isExpanded(node_r599) ? "expand_more" : "chevron_right", " ");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", node_r599.name, " ");
} }
/** @type {?} */
const TREE_DATA = [
    {
        name: 'Fruit',
        expandable: true,
        level: 0,
    }, {
        name: 'Apple',
        expandable: false,
        level: 1,
    }, {
        name: 'Banana',
        expandable: false,
        level: 1,
    }, {
        name: 'Fruit loops',
        expandable: false,
        level: 1,
    }, {
        name: 'Vegetables',
        expandable: true,
        level: 0,
    }, {
        name: 'Green',
        expandable: true,
        level: 1,
    }, {
        name: 'Broccoli',
        expandable: false,
        level: 2,
    }, {
        name: 'Brussel sprouts',
        expandable: false,
        level: 2,
    }, {
        name: 'Orange',
        expandable: true,
        level: 1,
    }, {
        name: 'Pumpkins',
        expandable: false,
        level: 2,
    }, {
        name: 'Carrots',
        expandable: false,
        level: 2,
    }
];
/**
 * Flat node with expandable and level information
 * @record
 */
function ExampleFlatNode() { }
if (false) {
    /** @type {?} */
    ExampleFlatNode.prototype.expandable;
    /** @type {?} */
    ExampleFlatNode.prototype.name;
    /** @type {?} */
    ExampleFlatNode.prototype.level;
    /** @type {?|undefined} */
    ExampleFlatNode.prototype.isExpanded;
}
/**
 * \@title Tree with flat nodes
 */
class CdkTreeFlatExample {
    constructor() {
        this.treeControl = new FlatTreeControl((/**
         * @param {?} node
         * @return {?}
         */
        node => node.level), (/**
         * @param {?} node
         * @return {?}
         */
        node => node.expandable));
        this.dataSource = new ArrayDataSource(TREE_DATA);
        this.hasChild = (/**
         * @param {?} _
         * @param {?} node
         * @return {?}
         */
        (_, node) => node.expandable);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    getParentNode(node) {
        /** @type {?} */
        const nodeIndex = TREE_DATA.indexOf(node);
        for (let i = nodeIndex - 1; i >= 0; i--) {
            if (TREE_DATA[i].level === node.level - 1) {
                return TREE_DATA[i];
            }
        }
        return null;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    shouldRender(node) {
        /** @type {?} */
        const parent = this.getParentNode(node);
        return !parent || parent.isExpanded;
    }
}
CdkTreeFlatExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-tree-flat-example',
                templateUrl: 'cdk-tree-flat-example.html',
                styleUrls: ['cdk-tree-flat-example.css'],
            },] },
];
/** @nocollapse */ CdkTreeFlatExample.ɵfac = function CdkTreeFlatExample_Factory(t) { return new (t || CdkTreeFlatExample)(); };
/** @nocollapse */ CdkTreeFlatExample.ɵcmp = ɵɵdefineComponent({ type: CdkTreeFlatExample, selectors: [["cdk-tree-flat-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["cdkTreeNodePadding", "", "class", "example-tree-node", 3, "display", 4, "cdkTreeNodeDef"], ["cdkTreeNodePadding", "", "class", "example-tree-node", 3, "display", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], ["cdkTreeNodePadding", "", 1, "example-tree-node"], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "cdkTreeNodeToggle", "", 3, "click"], [1, "mat-icon-rtl-mirror"]], template: function CdkTreeFlatExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "cdk-tree", 0);
        ɵɵtemplate(1, CdkTreeFlatExample_cdk_tree_node_1_Template, 3, 2, "cdk-tree-node", 1);
        ɵɵtemplate(2, CdkTreeFlatExample_cdk_tree_node_2_Template, 5, 5, "cdk-tree-node", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        ɵɵadvance(2);
        ɵɵproperty("cdkTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [CdkTree, CdkTreeNodeDef, CdkTreeNode, CdkTreeNodePadding, MatButton, CdkTreeNodeToggle, MatIcon], styles: [".example-tree-node[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkTreeFlatExample, [{
        type: Component,
        args: [{
                selector: 'cdk-tree-flat-example',
                templateUrl: 'cdk-tree-flat-example.html',
                styleUrls: ['cdk-tree-flat-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkTreeFlatExample.prototype.treeControl;
    /** @type {?} */
    CdkTreeFlatExample.prototype.dataSource;
    /** @type {?} */
    CdkTreeFlatExample.prototype.hasChild;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function CdkTreeNestedExample_cdk_nested_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-nested-tree-node", 3);
    ɵɵelement(1, "button", 4);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r603 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", node_r603.name, " ");
} }
function CdkTreeNestedExample_cdk_nested_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-nested-tree-node", 3);
    ɵɵelementStart(1, "button", 5);
    ɵɵelementStart(2, "mat-icon", 6);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵelementStart(5, "div");
    ɵɵelementContainer(6, 7);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r604 = ctx.$implicit;
    const ctx_r602 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("aria-label", "toggle " + node_r604.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r602.treeControl.isExpanded(node_r604) ? "expand_more" : "chevron_right", " ");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", node_r604.name, " ");
    ɵɵadvance(1);
    ɵɵclassProp("example-tree-invisible", !ctx_r602.treeControl.isExpanded(node_r604));
} }
/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 * @record
 */
function FoodNode() { }
if (false) {
    /** @type {?} */
    FoodNode.prototype.name;
    /** @type {?|undefined} */
    FoodNode.prototype.children;
}
/** @type {?} */
const TREE_DATA$1 = [
    {
        name: 'Fruit',
        children: [
            { name: 'Apple' },
            { name: 'Banana' },
            { name: 'Fruit loops' },
        ]
    }, {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [
                    { name: 'Broccoli' },
                    { name: 'Brussel sprouts' },
                ]
            }, {
                name: 'Orange',
                children: [
                    { name: 'Pumpkins' },
                    { name: 'Carrots' },
                ]
            },
        ]
    },
];
/**
 * \@title Tree with nested nodes
 */
class CdkTreeNestedExample {
    constructor() {
        this.treeControl = new NestedTreeControl((/**
         * @param {?} node
         * @return {?}
         */
        node => node.children));
        this.dataSource = new ArrayDataSource(TREE_DATA$1);
        this.hasChild = (/**
         * @param {?} _
         * @param {?} node
         * @return {?}
         */
        (_, node) => !!node.children && node.children.length > 0);
    }
}
CdkTreeNestedExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-tree-nested-example',
                templateUrl: 'cdk-tree-nested-example.html',
                styleUrls: ['cdk-tree-nested-example.css'],
            },] },
];
/** @nocollapse */ CdkTreeNestedExample.ɵfac = function CdkTreeNestedExample_Factory(t) { return new (t || CdkTreeNestedExample)(); };
/** @nocollapse */ CdkTreeNestedExample.ɵcmp = ɵɵdefineComponent({ type: CdkTreeNestedExample, selectors: [["cdk-tree-nested-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["class", "example-tree-node", 4, "cdkTreeNodeDef"], ["class", "example-tree-node", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "example-tree-node"], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "cdkTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["cdkTreeNodeOutlet", ""]], template: function CdkTreeNestedExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "cdk-tree", 0);
        ɵɵtemplate(1, CdkTreeNestedExample_cdk_nested_tree_node_1_Template, 3, 1, "cdk-nested-tree-node", 1);
        ɵɵtemplate(2, CdkTreeNestedExample_cdk_nested_tree_node_2_Template, 7, 4, "cdk-nested-tree-node", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        ɵɵadvance(2);
        ɵɵproperty("cdkTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [CdkTree, CdkTreeNodeDef, CdkNestedTreeNode, MatButton, CdkTreeNodeToggle, MatIcon, CdkTreeNodeOutlet], styles: [".example-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.example-tree-node[_ngcontent-%COMP%]   .example-tree-node[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkTreeNestedExample, [{
        type: Component,
        args: [{
                selector: 'cdk-tree-nested-example',
                templateUrl: 'cdk-tree-nested-example.html',
                styleUrls: ['cdk-tree-nested-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkTreeNestedExample.prototype.treeControl;
    /** @type {?} */
    CdkTreeNestedExample.prototype.dataSource;
    /** @type {?} */
    CdkTreeNestedExample.prototype.hasChild;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    CdkTreeFlatExample,
    CdkTreeNestedExample,
];
class CdkTreeExamplesModule {
}
CdkTreeExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CdkTreeModule,
                    MatButtonModule,
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ CdkTreeExamplesModule.ɵmod = ɵɵdefineNgModule({ type: CdkTreeExamplesModule });
/** @nocollapse */ CdkTreeExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function CdkTreeExamplesModule_Factory(t) { return new (t || CdkTreeExamplesModule)(); }, imports: [[
            CdkTreeModule,
            MatButtonModule,
            MatIconModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CdkTreeExamplesModule, { declarations: [CdkTreeFlatExample,
        CdkTreeNestedExample], imports: [CdkTreeModule,
        MatButtonModule,
        MatIconModule], exports: [CdkTreeFlatExample,
        CdkTreeNestedExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkTreeExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CdkTreeModule,
                    MatButtonModule,
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { CdkTreeExamplesModule, CdkTreeFlatExample, CdkTreeNestedExample };
//# sourceMappingURL=tree.js.map
