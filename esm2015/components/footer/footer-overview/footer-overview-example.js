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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXItb3ZlcnZpZXcvZm9vdGVyLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXItb3ZlcnZpZXcvZm9vdGVyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUVoRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0FBVXJDLE1BQU0sT0FBTyxxQkFBcUI7SUFDaEM7UUFDQSxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQVMsRUFBRSxDQUFDLENBQUM7UUFFNUMsZ0JBQVcsR0FBZ0I7WUFDekIsWUFBWSxFQUFFO2dCQUNaO29CQUNFLElBQUksRUFBRSxvQkFBb0I7b0JBQzFCLEtBQUssRUFBRTt3QkFDTDs0QkFDRSxJQUFJLEVBQUUsdUJBQXVCOzRCQUM3QixLQUFLLEVBQUUsR0FBRzs0QkFDVixJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVE7eUJBQzlCO3dCQUNELEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUSxFQUFFO3FCQUNyRTtpQkFDRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsY0FBYztvQkFDcEIsS0FBSyxFQUFFO3dCQUNMLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRLEVBQUU7d0JBQ3JFOzRCQUNFLElBQUksRUFBRSxpQkFBaUI7NEJBQ3ZCLEtBQUssRUFBRSxHQUFHOzRCQUNWLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUTt5QkFDOUI7d0JBQ0QsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRLEVBQUU7d0JBQ2pFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUSxFQUFFO3FCQUNyRTtpQkFDRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsa0JBQWtCO29CQUN4QixLQUFLLEVBQUU7d0JBQ0w7NEJBQ0UsSUFBSSxFQUFFLGlCQUFpQjs0QkFDdkIsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRO3lCQUM5Qjt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsOEJBQThCOzRCQUNwQyxLQUFLLEVBQUUsR0FBRzs0QkFDVixJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVE7eUJBQzlCO3dCQUNELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUSxFQUFFO3dCQUNoRTs0QkFDRSxJQUFJLEVBQUUsNEJBQTRCOzRCQUNsQyxLQUFLLEVBQUUsR0FBRzs0QkFDVixJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVE7eUJBQzlCO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO0lBbkRhLENBQUM7Ozs7SUFxRGhCLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7Ozs7MEZBQ1kscUJBQXFCOzBEQUFyQixxQkFBcUI7UUNibEMscUNBQW9GO1FBQWxELG9IQUFhLDBCQUFzQixJQUFDO1FBQUMsaUJBQWE7O1FBQXhFLHVDQUFxQjs7a0REYXBCLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7Ozs7SUFHQywwQ0FBNEM7O0lBRTVDLDRDQWdERSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb290ZXJNb2RlbH0gZnJvbSAnQGdzYS1zYW0vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnQGdzYS1zYW0vY29tcG9uZW50cy9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAdGl0bGUgRm9vdGVyIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvb3Rlci1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb290ZXItb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Zvb3Rlci1vdmVydmlldy1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvb3Rlck92ZXJ2aWV3RXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgY29uc3RydWN0b3IoKSB7fVxuICBsaW5rRXZlbnQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG9iamVjdD4oe30pO1xuXG4gIG1vZGVsRm9vdGVyOiBGb290ZXJNb2RlbCA9IHtcbiAgICBsaW5rU2VjdGlvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0Fib3V0IGJldGEuU0FNLmdvdicsXG4gICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0V4cGxvcmUgT3VyIENvbW11bml0eScsXG4gICAgICAgICAgICByb3V0ZTogJy8nLFxuICAgICAgICAgICAgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgdGV4dDogJ1JlbGVhc2UgTm90ZXMnLCByb3V0ZTogJy8nLCBtb2RlOiBOYXZpZ2F0aW9uTW9kZS5JTlRFUk5BTCB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdPdXIgUGFydG5lcnMnLFxuICAgICAgICBsaW5rczogW1xuICAgICAgICAgIHsgdGV4dDogJ0FxdWlzaXRpb24uZ292Jywgcm91dGU6ICcvJywgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUwgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnVVNBU3BlbmRpbmcuZ292JyxcbiAgICAgICAgICAgIHJvdXRlOiAnLycsXG4gICAgICAgICAgICBtb2RlOiBOYXZpZ2F0aW9uTW9kZS5JTlRFUk5BTFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnR3JhbnRzLmdvdicsIHJvdXRlOiAnLycsIG1vZGU6IE5hdmlnYXRpb25Nb2RlLklOVEVSTkFMIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnTW9yZSBQYXJ0bmVycycsIHJvdXRlOiAnLycsIG1vZGU6IE5hdmlnYXRpb25Nb2RlLklOVEVSTkFMIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0N1c3RvbWVyIFNlcnZpY2UnLFxuICAgICAgICBsaW5rczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdMZWFybmluZyBDZW50ZXInLFxuICAgICAgICAgICAgcm91dGU6ICcvJyxcbiAgICAgICAgICAgIG1vZGU6IE5hdmlnYXRpb25Nb2RlLklOVEVSTkFMXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnQ29udGFjdCBGZWRlcmFsIFNlcnZpY2UgRGVzaycsXG4gICAgICAgICAgICByb3V0ZTogJy8nLFxuICAgICAgICAgICAgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgdGV4dDogJ1Jlc291cmNlcycsIHJvdXRlOiAnLycsIG1vZGU6IE5hdmlnYXRpb25Nb2RlLklOVEVSTkFMIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0ZyZWVkb20gb2YgSW5mb3JtYXRpb24gQWN0JyxcbiAgICAgICAgICAgIHJvdXRlOiAnLycsXG4gICAgICAgICAgICBtb2RlOiBOYXZpZ2F0aW9uTW9kZS5JTlRFUk5BTFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxpbmtFdmVudC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0xpbmsgRXZlbnQgQ2xpY2tlZCBDaGFuZ2UnKTtcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPHNkcy1mb290ZXIgW21vZGVsXT1cIm1vZGVsRm9vdGVyXCIgKGxpbmtFdmVudCk9XCJsaW5rRXZlbnQubmV4dCgkZXZlbnQpXCI+PC9zZHMtZm9vdGVyPlxuIl19