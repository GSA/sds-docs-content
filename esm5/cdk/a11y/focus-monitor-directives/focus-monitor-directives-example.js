import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
/** @title Monitoring focus with FocusMonitor */
var FocusMonitorDirectivesExample = /** @class */ (function () {
    function FocusMonitorDirectivesExample(_ngZone, _cdr) {
        this._ngZone = _ngZone;
        this._cdr = _cdr;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    FocusMonitorDirectivesExample.prototype.formatOrigin = function (origin) {
        return origin ? origin + ' focused' : 'blurred';
    };
    // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
    FocusMonitorDirectivesExample.prototype.markForCheck = function () {
        var _this = this;
        this._ngZone.run(function () { return _this._cdr.markForCheck(); });
    };
    FocusMonitorDirectivesExample.decorators = [
        { type: Component, args: [{
                    selector: 'focus-monitor-directives-example',
                    templateUrl: 'focus-monitor-directives-example.html',
                    styleUrls: ['focus-monitor-directives-example.css']
                },] },
    ];
    /** @nocollapse */
    FocusMonitorDirectivesExample.ctorParameters = function () { return [
        { type: NgZone },
        { type: ChangeDetectorRef }
    ]; };
    FocusMonitorDirectivesExample.ɵfac = function FocusMonitorDirectivesExample_Factory(t) { return new (t || FocusMonitorDirectivesExample)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    FocusMonitorDirectivesExample.ɵcmp = i0.ɵɵdefineComponent({ type: FocusMonitorDirectivesExample, selectors: [["focus-monitor-directives-example"]], decls: 11, vars: 2, consts: [[1, "example-focus-monitor"], ["cdkMonitorSubtreeFocus", "", 3, "cdkFocusChange"]], template: function FocusMonitorDirectivesExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵlistener("cdkFocusChange", function FocusMonitorDirectivesExample_Template_button_cdkFocusChange_1_listener($event) { ctx.elementOrigin = ctx.formatOrigin($event); return ctx.markForCheck(); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 0);
            i0.ɵɵelementStart(4, "div", 1);
            i0.ɵɵlistener("cdkFocusChange", function FocusMonitorDirectivesExample_Template_div_cdkFocusChange_4_listener($event) { ctx.subtreeOrigin = ctx.formatOrigin($event); return ctx.markForCheck(); });
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button");
            i0.ɵɵtext(8, "Child Button 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "button");
            i0.ɵɵtext(10, "Child Button 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" Focus Monitored Element (", ctx.elementOrigin, ") ");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("Focus Monitored Subtree (", ctx.subtreeOrigin, ")");
        } }, directives: [i1.CdkMonitorFocus], styles: [".example-focus-monitor[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-mouse-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-touch-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    return FocusMonitorDirectivesExample;
}());
export { FocusMonitorDirectivesExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FocusMonitorDirectivesExample, [{
        type: Component,
        args: [{
                selector: 'focus-monitor-directives-example',
                templateUrl: 'focus-monitor-directives-example.html',
                styleUrls: ['focus-monitor-directives-example.css']
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvYTExeS9mb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMvZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvYTExeS9mb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMvZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRW5FLGdEQUFnRDtBQUNoRDtJQVNFLHVDQUFvQixPQUFlLEVBQVUsSUFBdUI7UUFBaEQsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQW1CO1FBSHBFLGtCQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxrQkFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFK0IsQ0FBQztJQUd4RSxvREFBWSxHQUFaLFVBQWEsTUFBbUI7UUFDOUIsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsc0VBQXNFO0lBQ3RFLG9EQUFZLEdBQVo7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0NBQWtDO29CQUM1QyxXQUFXLEVBQUUsdUNBQXVDO29CQUNwRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQztpQkFDcEQ7Ozs7Z0JBUHFDLE1BQU07Z0JBQXBDLGlCQUFpQjs7OEdBUVosNkJBQTZCO3NFQUE3Qiw2QkFBNkI7WUNUMUMsOEJBQ0U7WUFBQSxpQ0FFRTtZQURNLCtJQUFrQyx3QkFBb0IsU0FBRSxrQkFBYyxJQUFDO1lBQzdFLFlBQ0Y7WUFBQSxpQkFBUztZQUNYLGlCQUFNO1lBRU4sOEJBQ0U7WUFBQSw4QkFFRTtZQURHLDRJQUFrQyx3QkFBb0IsU0FBRSxrQkFBYyxJQUFDO1lBQzFFLHlCQUFHO1lBQUEsWUFBMkM7WUFBQSxpQkFBSTtZQUNsRCw4QkFBUTtZQUFBLDhCQUFjO1lBQUEsaUJBQVM7WUFDL0IsOEJBQVE7WUFBQSwrQkFBYztZQUFBLGlCQUFTO1lBQ2pDLGlCQUFNO1lBQ1IsaUJBQU07O1lBWEYsZUFDRjtZQURFLDRFQUNGO1lBTUssZUFBMkM7WUFBM0MsMEVBQTJDOzt3Q0RWbEQ7Q0F3QkMsQUFwQkQsSUFvQkM7U0FmWSw2QkFBNkI7a0RBQTdCLDZCQUE2QjtjQUx6QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsV0FBVyxFQUFFLHVDQUF1QztnQkFDcEQsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7YUFDcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZvY3VzT3JpZ2lufSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgTW9uaXRvcmluZyBmb2N1cyB3aXRoIEZvY3VzTW9uaXRvciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2ZvY3VzLW1vbml0b3ItZGlyZWN0aXZlcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9jdXNNb25pdG9yRGlyZWN0aXZlc0V4YW1wbGUge1xuICBlbGVtZW50T3JpZ2luID0gdGhpcy5mb3JtYXRPcmlnaW4obnVsbCk7XG4gIHN1YnRyZWVPcmlnaW4gPSB0aGlzLmZvcm1hdE9yaWdpbihudWxsKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuXG4gIGZvcm1hdE9yaWdpbihvcmlnaW46IEZvY3VzT3JpZ2luKTogc3RyaW5nIHtcbiAgICByZXR1cm4gb3JpZ2luID8gb3JpZ2luICsgJyBmb2N1c2VkJyA6ICdibHVycmVkJztcbiAgfVxuXG4gIC8vIFdvcmthcm91bmQgZm9yIHRoZSBmYWN0IHRoYXQgKGNka0ZvY3VzQ2hhbmdlKSBlbWl0cyBvdXRzaWRlIE5nWm9uZS5cbiAgbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4gdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtZm9jdXMtbW9uaXRvclwiPlxuICA8YnV0dG9uIGNka01vbml0b3JTdWJ0cmVlRm9jdXNcbiAgICAgICAgICAoY2RrRm9jdXNDaGFuZ2UpPVwiZWxlbWVudE9yaWdpbiA9IGZvcm1hdE9yaWdpbigkZXZlbnQpOyBtYXJrRm9yQ2hlY2soKVwiPlxuICAgIEZvY3VzIE1vbml0b3JlZCBFbGVtZW50ICh7e2VsZW1lbnRPcmlnaW59fSlcbiAgPC9idXR0b24+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImV4YW1wbGUtZm9jdXMtbW9uaXRvclwiPlxuICA8ZGl2IGNka01vbml0b3JTdWJ0cmVlRm9jdXNcbiAgICAgICAoY2RrRm9jdXNDaGFuZ2UpPVwic3VidHJlZU9yaWdpbiA9IGZvcm1hdE9yaWdpbigkZXZlbnQpOyBtYXJrRm9yQ2hlY2soKVwiPlxuICAgIDxwPkZvY3VzIE1vbml0b3JlZCBTdWJ0cmVlICh7e3N1YnRyZWVPcmlnaW59fSk8L3A+XG4gICAgPGJ1dHRvbj5DaGlsZCBCdXR0b24gMTwvYnV0dG9uPlxuICAgIDxidXR0b24+Q2hpbGQgQnV0dG9uIDI8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==