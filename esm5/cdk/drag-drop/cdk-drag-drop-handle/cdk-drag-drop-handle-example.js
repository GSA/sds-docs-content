import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
/**
 * @title Drag&Drop with a handle
 */
var CdkDragDropHandleExample = /** @class */ (function () {
    function CdkDragDropHandleExample() {
    }
    CdkDragDropHandleExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-drag-drop-handle-example',
                    templateUrl: 'cdk-drag-drop-handle-example.html',
                    styleUrls: ['cdk-drag-drop-handle-example.css'],
                },] },
    ];
    CdkDragDropHandleExample.ɵfac = function CdkDragDropHandleExample_Factory(t) { return new (t || CdkDragDropHandleExample)(); };
    CdkDragDropHandleExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropHandleExample, selectors: [["cdk-drag-drop-handle-example"]], decls: 6, vars: 0, consts: [["cdkDrag", "", 1, "example-box"], ["cdkDragHandle", "", 1, "example-handle"], ["width", "24px", "fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"], ["d", "M0 0h24v24H0z", "fill", "none"]], template: function CdkDragDropHandleExample_Template(rf, ctx) { if (rf & 1) {
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
    return CdkDragDropHandleExample;
}());
export { CdkDragDropHandleExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropHandleExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-handle-example',
                templateUrl: 'cdk-drag-drop-handle-example.html',
                styleUrls: ['cdk-drag-drop-handle-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1oYW5kbGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1oYW5kbGUvY2RrLWRyYWctZHJvcC1oYW5kbGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1oYW5kbGUvY2RrLWRyYWctZHJvcC1oYW5kbGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7S0FLd0M7O2dCQUx2QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsV0FBVyxFQUFFLG1DQUFtQztvQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7aUJBQ2hEOztvR0FDWSx3QkFBd0I7aUVBQXhCLHdCQUF3QjtZQ1ZyQyw4QkFDRTtZQUFBLHdEQUVBO1lBQUEsOEJBQ0U7WUFBQSxtQkFDRTtZQURGLDhCQUNFO1lBQUEsMEJBQTJIO1lBQzNILDBCQUEyQztZQUM3QyxpQkFBTTtZQUNSLGlCQUFNO1lBQ1IsaUJBQU07O21DRFROO0NBVXdDLEFBTHhDLElBS3dDO1NBQTNCLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgRHJhZyZEcm9wIHdpdGggYSBoYW5kbGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWRyYWctZHJvcC1oYW5kbGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRyYWctZHJvcC1oYW5kbGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1kcmFnLWRyb3AtaGFuZGxlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdEcm9wSGFuZGxlRXhhbXBsZSB7fVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtYm94XCIgY2RrRHJhZz5cbiAgSSBjYW4gb25seSBiZSBkcmFnZ2VkIHVzaW5nIHRoZSBoYW5kbGVcblxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1oYW5kbGVcIiBjZGtEcmFnSGFuZGxlPlxuICAgIDxzdmcgd2lkdGg9XCIyNHB4XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgIDxwYXRoIGQ9XCJNMTAgOWg0VjZoM2wtNS01LTUgNWgzdjN6bS0xIDFINlY3bC01IDUgNSA1di0zaDN2LTR6bTE0IDJsLTUtNXYzaC0zdjRoM3YzbDUtNXptLTkgM2gtNHYzSDdsNSA1IDUtNWgtM3YtM3pcIj48L3BhdGg+XG4gICAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCI+PC9wYXRoPlxuICAgIDwvc3ZnPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19