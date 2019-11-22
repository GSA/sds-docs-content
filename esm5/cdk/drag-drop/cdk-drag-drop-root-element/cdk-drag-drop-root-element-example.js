import { Component, ViewChild, TemplateRef, ViewContainerRef, } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/cdk/drag-drop";
function CdkDragDropRootElementExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtext(1, " Drag the dialog around! ");
    i0.ɵɵelementEnd();
} }
/**
 * @title Drag&Drop with alternate root element
 */
var CdkDragDropRootElementExample = /** @class */ (function () {
    function CdkDragDropRootElementExample(_overlay, _viewContainerRef) {
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
    }
    CdkDragDropRootElementExample.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._portal = new TemplatePortal(this._dialogTemplate, this._viewContainerRef);
        this._overlayRef = this._overlay.create({
            positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
            hasBackdrop: true
        });
        this._overlayRef.backdropClick().subscribe(function () { return _this._overlayRef.detach(); });
    };
    CdkDragDropRootElementExample.prototype.ngOnDestroy = function () {
        this._overlayRef.dispose();
    };
    CdkDragDropRootElementExample.prototype.openDialog = function () {
        this._overlayRef.attach(this._portal);
    };
    CdkDragDropRootElementExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-drag-drop-root-element-example',
                    templateUrl: 'cdk-drag-drop-root-element-example.html',
                    styleUrls: ['cdk-drag-drop-root-element-example.css'],
                },] },
    ];
    /** @nocollapse */
    CdkDragDropRootElementExample.ctorParameters = function () { return [
        { type: Overlay },
        { type: ViewContainerRef }
    ]; };
    CdkDragDropRootElementExample.propDecorators = {
        _dialogTemplate: [{ type: ViewChild, args: [TemplateRef,] }]
    };
    CdkDragDropRootElementExample.ɵfac = function CdkDragDropRootElementExample_Factory(t) { return new (t || CdkDragDropRootElementExample)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    CdkDragDropRootElementExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropRootElementExample, selectors: [["cdk-drag-drop-root-element-example"]], viewQuery: function CdkDragDropRootElementExample_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(TemplateRef, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._dialogTemplate = _t.first);
        } }, decls: 3, vars: 0, consts: [[3, "click"], ["cdkDrag", "", "cdkDragRootElement", ".cdk-overlay-pane", 1, "example-dialog-content"]], template: function CdkDragDropRootElementExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function CdkDragDropRootElementExample_Template_button_click_0_listener($event) { return ctx.openDialog(); });
            i0.ɵɵtext(1, "Open a draggable dialog");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, CdkDragDropRootElementExample_ng_template_2_Template, 2, 0, "ng-template");
        } }, directives: [i2.CdkDrag], styles: [".example-dialog-content[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  border-radius: 4px;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-dialog-content[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
    return CdkDragDropRootElementExample;
}());
export { CdkDragDropRootElementExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropRootElementExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-root-element-example',
                templateUrl: 'cdk-drag-drop-root-element-example.html',
                styleUrls: ['cdk-drag-drop-root-element-example.css'],
            }]
    }], function () { return [{ type: i1.Overlay }, { type: i0.ViewContainerRef }]; }, { _dialogTemplate: [{
            type: ViewChild,
            args: [TemplateRef]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQvY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQvY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFFWCxnQkFBZ0IsR0FFakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLE9BQU8sRUFBYSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7SUNOakQsOEJBQ0U7SUFBQSx5Q0FDRjtJQUFBLGlCQUFNOztBRE1SOztHQUVHO0FBQ0g7SUFVRSx1Q0FBb0IsUUFBaUIsRUFBVSxpQkFBbUM7UUFBOUQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFBRyxDQUFDO0lBRXRGLHVEQUFlLEdBQWY7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3RDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzRixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxtREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsa0RBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDOztnQkEzQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQ0FBb0M7b0JBQzlDLFdBQVcsRUFBRSx5Q0FBeUM7b0JBQ3RELFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO2lCQUN0RDs7OztnQkFWTyxPQUFPO2dCQUhiLGdCQUFnQjs7O2tDQWVmLFNBQVMsU0FBQyxXQUFXOzs4R0FEWCw2QkFBNkI7c0VBQTdCLDZCQUE2QjsyQkFDN0IsV0FBVzs7Ozs7WUNwQnhCLGlDQUErQjtZQUF2QixnSEFBUyxnQkFBWSxJQUFDO1lBQUMsdUNBQXVCO1lBQUEsaUJBQVM7WUFFL0QsMkZBQ0U7O3dDREhGO0NBMENDLEFBNUJELElBNEJDO1NBdkJZLDZCQUE2QjtrREFBN0IsNkJBQTZCO2NBTHpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0NBQW9DO2dCQUM5QyxXQUFXLEVBQUUseUNBQXlDO2dCQUN0RCxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQzthQUN0RDs7a0JBRUUsU0FBUzttQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBWaWV3Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPdmVybGF5LCBPdmVybGF5UmVmfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1RlbXBsYXRlUG9ydGFsfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuLyoqXG4gKiBAdGl0bGUgRHJhZyZEcm9wIHdpdGggYWx0ZXJuYXRlIHJvb3QgZWxlbWVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLXJvb3QtZWxlbWVudC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLXJvb3QtZWxlbWVudC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BSb290RWxlbWVudEV4YW1wbGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBfZGlhbG9nVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG4gIHByaXZhdGUgX3BvcnRhbDogVGVtcGxhdGVQb3J0YWw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fcG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuX2RpYWxvZ1RlbXBsYXRlLCB0aGlzLl92aWV3Q29udGFpbmVyUmVmKTtcbiAgICB0aGlzLl9vdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5fb3ZlcmxheS5wb3NpdGlvbigpLmdsb2JhbCgpLmNlbnRlckhvcml6b250YWxseSgpLmNlbnRlclZlcnRpY2FsbHkoKSxcbiAgICAgIGhhc0JhY2tkcm9wOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5fb3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX292ZXJsYXlSZWYuZGV0YWNoKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fb3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gIH1cblxuICBvcGVuRGlhbG9nKCkge1xuICAgIHRoaXMuX292ZXJsYXlSZWYuYXR0YWNoKHRoaXMuX3BvcnRhbCk7XG4gIH1cbn1cbiIsIjxidXR0b24gKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPk9wZW4gYSBkcmFnZ2FibGUgZGlhbG9nPC9idXR0b24+XG5cbjxuZy10ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtZGlhbG9nLWNvbnRlbnRcIiBjZGtEcmFnIGNka0RyYWdSb290RWxlbWVudD1cIi5jZGstb3ZlcmxheS1wYW5lXCI+XG4gICAgRHJhZyB0aGUgZGlhbG9nIGFyb3VuZCFcbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19