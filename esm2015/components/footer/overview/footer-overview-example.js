/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { NavigationMode } from '@gsa-sam/components/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@gsa-sam/components/footer";
/**
 * \@title Footer overview
 */
export class FooterOverviewExample {
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
                templateUrl: 'footer-overview-example.html',
                styleUrls: ['footer-overview-example.css']
            },] },
];
/** @nocollapse */
FooterOverviewExample.ctorParameters = () => [];
/** @nocollapse */ FooterOverviewExample.ɵfac = function FooterOverviewExample_Factory(t) { return new (t || FooterOverviewExample)(); };
/** @nocollapse */ FooterOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: FooterOverviewExample, selectors: [["footer-overview-example"]], decls: 1, vars: 1, consts: [[3, "model", "linkEvent"]], template: function FooterOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "sds-footer", 0);
        i0.ɵɵlistener("linkEvent", function FooterOverviewExample_Template_sds_footer_linkEvent_0_listener($event) { return ctx.linkEvent.next($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("model", ctx.modelFooter);
    } }, directives: [i1.SdsFooter], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FooterOverviewExample, [{
        type: Component,
        args: [{
                selector: 'footer-overview-example',
                templateUrl: 'footer-overview-example.html',
                styleUrls: ['footer-overview-example.css']
            }]
    }], function () { return []; }, null); })();
if (false) {
    /** @type {?} */
    FooterOverviewExample.prototype.linkEvent;
    /** @type {?} */
    FooterOverviewExample.prototype.modelFooter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jb21wb25lbnRzL2Zvb3Rlci9vdmVydmlldy9mb290ZXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2NvbXBvbmVudHMvZm9vdGVyL292ZXJ2aWV3L2Zvb3Rlci1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFaEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7OztBQVVyQyxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDO1FBQ0EsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRTVDLGdCQUFXLEdBQWdCO1lBQ3pCLFlBQVksRUFBRTtnQkFDWjtvQkFDRSxJQUFJLEVBQUUsb0JBQW9CO29CQUMxQixLQUFLLEVBQUU7d0JBQ0w7NEJBQ0UsSUFBSSxFQUFFLHVCQUF1Qjs0QkFDN0IsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRO3lCQUM5Qjt3QkFDRCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVEsRUFBRTtxQkFDckU7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLGNBQWM7b0JBQ3BCLEtBQUssRUFBRTt3QkFDTCxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUSxFQUFFO3dCQUNyRTs0QkFDRSxJQUFJLEVBQUUsaUJBQWlCOzRCQUN2QixLQUFLLEVBQUUsR0FBRzs0QkFDVixJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVE7eUJBQzlCO3dCQUNELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUSxFQUFFO3dCQUNqRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVEsRUFBRTtxQkFDckU7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLGtCQUFrQjtvQkFDeEIsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLElBQUksRUFBRSxpQkFBaUI7NEJBQ3ZCLEtBQUssRUFBRSxHQUFHOzRCQUNWLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUTt5QkFDOUI7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLDhCQUE4Qjs0QkFDcEMsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRO3lCQUM5Qjt3QkFDRCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVEsRUFBRTt3QkFDaEU7NEJBQ0UsSUFBSSxFQUFFLDRCQUE0Qjs0QkFDbEMsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRO3lCQUM5QjtxQkFDRjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQW5EYSxDQUFDOzs7O0lBcURoQixRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFoRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOzs7OzBGQUNZLHFCQUFxQjswREFBckIscUJBQXFCO1FDYmxDLHFDQUFvRjtRQUFsRCxvSEFBYSwwQkFBc0IsSUFBQztRQUFDLGlCQUFhOztRQUF4RSx1Q0FBcUI7O2tERGFwQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOzs7O0lBR0MsMENBQTRDOztJQUU1Qyw0Q0FnREUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9vdGVyTW9kZWx9IGZyb20gJ0Bnc2Etc2FtL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJ0Bnc2Etc2FtL2NvbXBvbmVudHMvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQHRpdGxlIEZvb3RlciBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb290ZXItb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9vdGVyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb290ZXItb3ZlcnZpZXctZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJPdmVydmlld0V4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIGxpbmtFdmVudCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8b2JqZWN0Pih7fSk7XG5cbiAgbW9kZWxGb290ZXI6IEZvb3Rlck1vZGVsID0ge1xuICAgIGxpbmtTZWN0aW9uczogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnQWJvdXQgYmV0YS5TQU0uZ292JyxcbiAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnRXhwbG9yZSBPdXIgQ29tbXVuaXR5JyxcbiAgICAgICAgICAgIHJvdXRlOiAnLycsXG4gICAgICAgICAgICBtb2RlOiBOYXZpZ2F0aW9uTW9kZS5JTlRFUk5BTFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUmVsZWFzZSBOb3RlcycsIHJvdXRlOiAnLycsIG1vZGU6IE5hdmlnYXRpb25Nb2RlLklOVEVSTkFMIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ091ciBQYXJ0bmVycycsXG4gICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnQXF1aXNpdGlvbi5nb3YnLCByb3V0ZTogJy8nLCBtb2RlOiBOYXZpZ2F0aW9uTW9kZS5JTlRFUk5BTCB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdVU0FTcGVuZGluZy5nb3YnLFxuICAgICAgICAgICAgcm91dGU6ICcvJyxcbiAgICAgICAgICAgIG1vZGU6IE5hdmlnYXRpb25Nb2RlLklOVEVSTkFMXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHRleHQ6ICdHcmFudHMuZ292Jywgcm91dGU6ICcvJywgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUwgfSxcbiAgICAgICAgICB7IHRleHQ6ICdNb3JlIFBhcnRuZXJzJywgcm91dGU6ICcvJywgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUwgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnQ3VzdG9tZXIgU2VydmljZScsXG4gICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0xlYXJuaW5nIENlbnRlcicsXG4gICAgICAgICAgICByb3V0ZTogJy8nLFxuICAgICAgICAgICAgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdDb250YWN0IEZlZGVyYWwgU2VydmljZSBEZXNrJyxcbiAgICAgICAgICAgIHJvdXRlOiAnLycsXG4gICAgICAgICAgICBtb2RlOiBOYXZpZ2F0aW9uTW9kZS5JTlRFUk5BTFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUmVzb3VyY2VzJywgcm91dGU6ICcvJywgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUwgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnRnJlZWRvbSBvZiBJbmZvcm1hdGlvbiBBY3QnLFxuICAgICAgICAgICAgcm91dGU6ICcvJyxcbiAgICAgICAgICAgIG1vZGU6IE5hdmlnYXRpb25Nb2RlLklOVEVSTkFMXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGlua0V2ZW50LnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnTGluayBFdmVudCBDbGlja2VkIENoYW5nZScpO1xuICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgIH0pO1xuICB9XG59XG4iLCI8c2RzLWZvb3RlciBbbW9kZWxdPVwibW9kZWxGb290ZXJcIiAobGlua0V2ZW50KT1cImxpbmtFdmVudC5uZXh0KCRldmVudClcIj48L3Nkcy1mb290ZXI+XG4iXX0=