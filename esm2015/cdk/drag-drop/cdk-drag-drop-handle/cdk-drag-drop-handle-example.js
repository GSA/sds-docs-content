/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
/**
 * \@title Drag&Drop with a handle
 */
export class CdkDragDropHandleExample {
}
CdkDragDropHandleExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-handle-example',
                templateUrl: 'cdk-drag-drop-handle-example.html',
                styleUrls: ['cdk-drag-drop-handle-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropHandleExample.ɵfac = function CdkDragDropHandleExample_Factory(t) { return new (t || CdkDragDropHandleExample)(); };
/** @nocollapse */ CdkDragDropHandleExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropHandleExample, selectors: [["cdk-drag-drop-handle-example"]], decls: 6, vars: 0, consts: [["cdkDrag", "", 1, "example-box"], ["cdkDragHandle", "", 1, "example-handle"], ["width", "24px", "fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"], ["d", "M0 0h24v24H0z", "fill", "none"]], template: function CdkDragDropHandleExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1, " I can only be dragged using the handle ");
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(3, "svg", 2);
        i0.ɵɵelement(4, "path", 3);
        i0.ɵɵelement(5, "path", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.CdkDrag, i1.CdkDragHandle], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  padding: 10px;\n  box-sizing: border-box;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.example-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #ccc;\n  cursor: move;\n  width: 24px;\n  height: 24px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropHandleExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-handle-example',
                templateUrl: 'cdk-drag-drop-handle-example.html',
                styleUrls: ['cdk-drag-drop-handle-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1oYW5kbGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1oYW5kbGUvY2RrLWRyYWctZHJvcC1oYW5kbGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1oYW5kbGUvY2RrLWRyYWctZHJvcC1oYW5kbGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFVeEMsTUFBTSxPQUFPLHdCQUF3Qjs7O1lBTHBDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRDs7Z0dBQ1ksd0JBQXdCOzZEQUF4Qix3QkFBd0I7UUNWckMsOEJBQ0U7UUFBQSx3REFFQTtRQUFBLDhCQUNFO1FBQUEsbUJBQ0U7UUFERiw4QkFDRTtRQUFBLDBCQUEySDtRQUMzSCwwQkFBMkM7UUFDN0MsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNOztrRERDTyx3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBEcmFnJkRyb3Agd2l0aCBhIGhhbmRsZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLWhhbmRsZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLWhhbmRsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWRyYWctZHJvcC1oYW5kbGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BIYW5kbGVFeGFtcGxlIHt9XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1ib3hcIiBjZGtEcmFnPlxuICBJIGNhbiBvbmx5IGJlIGRyYWdnZWQgdXNpbmcgdGhlIGhhbmRsZVxuXG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWhhbmRsZVwiIGNka0RyYWdIYW5kbGU+XG4gICAgPHN2ZyB3aWR0aD1cIjI0cHhcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgPHBhdGggZD1cIk0xMCA5aDRWNmgzbC01LTUtNSA1aDN2M3ptLTEgMUg2VjdsLTUgNSA1IDV2LTNoM3YtNHptMTQgMmwtNS01djNoLTN2NGgzdjNsNS01em0tOSAzaC00djNIN2w1IDUgNS01aC0zdi0zelwiPjwvcGF0aD5cbiAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIj48L3BhdGg+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=