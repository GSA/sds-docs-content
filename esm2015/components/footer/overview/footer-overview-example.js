/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { NavigationMode } from '@gsa-sam/components/core';
import { BehaviorSubject } from 'rxjs';
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
                template: "<sds-footer [model]=\"modelFooter\" (linkEvent)=\"linkEvent.next($event)\"></sds-footer>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
FooterOverviewExample.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    FooterOverviewExample.prototype.linkEvent;
    /** @type {?} */
    FooterOverviewExample.prototype.modelFooter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc2RzLWV4YW1wbGVzL2NvbXBvbmVudHMvZm9vdGVyL292ZXJ2aWV3L2Zvb3Rlci1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7O0FBVXJDLE1BQU0sT0FBTyxxQkFBcUI7SUFDaEM7UUFDQSxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQVMsRUFBRSxDQUFDLENBQUM7UUFFNUMsZ0JBQVcsR0FBZ0I7WUFDekIsWUFBWSxFQUFFO2dCQUNaO29CQUNFLElBQUksRUFBRSxvQkFBb0I7b0JBQzFCLEtBQUssRUFBRTt3QkFDTDs0QkFDRSxJQUFJLEVBQUUsdUJBQXVCOzRCQUM3QixLQUFLLEVBQUUsR0FBRzs0QkFDVixJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVE7eUJBQzlCO3dCQUNELEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUSxFQUFFO3FCQUNyRTtpQkFDRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsY0FBYztvQkFDcEIsS0FBSyxFQUFFO3dCQUNMLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRLEVBQUU7d0JBQ3JFOzRCQUNFLElBQUksRUFBRSxpQkFBaUI7NEJBQ3ZCLEtBQUssRUFBRSxHQUFHOzRCQUNWLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUTt5QkFDOUI7d0JBQ0QsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRLEVBQUU7d0JBQ2pFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUSxFQUFFO3FCQUNyRTtpQkFDRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsa0JBQWtCO29CQUN4QixLQUFLLEVBQUU7d0JBQ0w7NEJBQ0UsSUFBSSxFQUFFLGlCQUFpQjs0QkFDdkIsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRO3lCQUM5Qjt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsOEJBQThCOzRCQUNwQyxLQUFLLEVBQUUsR0FBRzs0QkFDVixJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVE7eUJBQzlCO3dCQUNELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUSxFQUFFO3dCQUNoRTs0QkFDRSxJQUFJLEVBQUUsNEJBQTRCOzRCQUNsQyxLQUFLLEVBQUUsR0FBRzs0QkFDVixJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVE7eUJBQzlCO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO0lBbkRhLENBQUM7Ozs7SUFxRGhCLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsc0dBQTJDOzthQUU1Qzs7Ozs7O0lBR0MsMENBQTRDOztJQUU1Qyw0Q0FnREUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9vdGVyTW9kZWx9IGZyb20gJ0Bnc2Etc2FtL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJ0Bnc2Etc2FtL2NvbXBvbmVudHMvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQHRpdGxlIEZvb3RlciBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb290ZXItb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9vdGVyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb290ZXItb3ZlcnZpZXctZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJPdmVydmlld0V4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIGxpbmtFdmVudCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8b2JqZWN0Pih7fSk7XG5cbiAgbW9kZWxGb290ZXI6IEZvb3Rlck1vZGVsID0ge1xuICAgIGxpbmtTZWN0aW9uczogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnQWJvdXQgYmV0YS5TQU0uZ292JyxcbiAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnRXhwbG9yZSBPdXIgQ29tbXVuaXR5JyxcbiAgICAgICAgICAgIHJvdXRlOiAnLycsXG4gICAgICAgICAgICBtb2RlOiBOYXZpZ2F0aW9uTW9kZS5JTlRFUk5BTFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUmVsZWFzZSBOb3RlcycsIHJvdXRlOiAnLycsIG1vZGU6IE5hdmlnYXRpb25Nb2RlLklOVEVSTkFMIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ091ciBQYXJ0bmVycycsXG4gICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnQXF1aXNpdGlvbi5nb3YnLCByb3V0ZTogJy8nLCBtb2RlOiBOYXZpZ2F0aW9uTW9kZS5JTlRFUk5BTCB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdVU0FTcGVuZGluZy5nb3YnLFxuICAgICAgICAgICAgcm91dGU6ICcvJyxcbiAgICAgICAgICAgIG1vZGU6IE5hdmlnYXRpb25Nb2RlLklOVEVSTkFMXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHRleHQ6ICdHcmFudHMuZ292Jywgcm91dGU6ICcvJywgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUwgfSxcbiAgICAgICAgICB7IHRleHQ6ICdNb3JlIFBhcnRuZXJzJywgcm91dGU6ICcvJywgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUwgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnQ3VzdG9tZXIgU2VydmljZScsXG4gICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0xlYXJuaW5nIENlbnRlcicsXG4gICAgICAgICAgICByb3V0ZTogJy8nLFxuICAgICAgICAgICAgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdDb250YWN0IEZlZGVyYWwgU2VydmljZSBEZXNrJyxcbiAgICAgICAgICAgIHJvdXRlOiAnLycsXG4gICAgICAgICAgICBtb2RlOiBOYXZpZ2F0aW9uTW9kZS5JTlRFUk5BTFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUmVzb3VyY2VzJywgcm91dGU6ICcvJywgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUwgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnRnJlZWRvbSBvZiBJbmZvcm1hdGlvbiBBY3QnLFxuICAgICAgICAgICAgcm91dGU6ICcvJyxcbiAgICAgICAgICAgIG1vZGU6IE5hdmlnYXRpb25Nb2RlLklOVEVSTkFMXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGlua0V2ZW50LnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnTGluayBFdmVudCBDbGlja2VkIENoYW5nZScpO1xuICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=
