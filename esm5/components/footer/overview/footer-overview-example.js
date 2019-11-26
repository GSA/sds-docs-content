import { Component } from '@angular/core';
import { NavigationMode } from '@gsa-sam/components/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@gsa-sam/components/footer";
/**
 * @title Footer overview
 */
var FooterOverviewExample = /** @class */ (function () {
    function FooterOverviewExample() {
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
    FooterOverviewExample.prototype.ngOnInit = function () {
        this.linkEvent.subscribe(function (value) {
            console.log('Link Event Clicked Change');
            console.log(value);
        });
    };
    FooterOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'footer-overview-example',
                    templateUrl: 'footer-overview-example.html',
                    styleUrls: ['footer-overview-example.css']
                },] },
    ];
    /** @nocollapse */
    FooterOverviewExample.ctorParameters = function () { return []; };
    FooterOverviewExample.ɵfac = function FooterOverviewExample_Factory(t) { return new (t || FooterOverviewExample)(); };
    FooterOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: FooterOverviewExample, selectors: [["footer-overview-example"]], decls: 1, vars: 1, consts: [[3, "model", "linkEvent"]], template: function FooterOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "sds-footer", 0);
            i0.ɵɵlistener("linkEvent", function FooterOverviewExample_Template_sds_footer_linkEvent_0_listener($event) { return ctx.linkEvent.next($event); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("model", ctx.modelFooter);
        } }, directives: [i1.SdsFooter], styles: [""] });
    return FooterOverviewExample;
}());
export { FooterOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FooterOverviewExample, [{
        type: Component,
        args: [{
                selector: 'footer-overview-example',
                templateUrl: 'footer-overview-example.html',
                styleUrls: ['footer-overview-example.css']
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jb21wb25lbnRzL2Zvb3Rlci9vdmVydmlldy9mb290ZXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2NvbXBvbmVudHMvZm9vdGVyL292ZXJ2aWV3L2Zvb3Rlci1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUVoRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7O0FBRXJDOztHQUVHO0FBQ0g7SUFNRTtRQUNBLGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUU1QyxnQkFBVyxHQUFnQjtZQUN6QixZQUFZLEVBQUU7Z0JBQ1o7b0JBQ0UsSUFBSSxFQUFFLG9CQUFvQjtvQkFDMUIsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLElBQUksRUFBRSx1QkFBdUI7NEJBQzdCLEtBQUssRUFBRSxHQUFHOzRCQUNWLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUTt5QkFDOUI7d0JBQ0QsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRLEVBQUU7cUJBQ3JFO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxjQUFjO29CQUNwQixLQUFLLEVBQUU7d0JBQ0wsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVEsRUFBRTt3QkFDckU7NEJBQ0UsSUFBSSxFQUFFLGlCQUFpQjs0QkFDdkIsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRO3lCQUM5Qjt3QkFDRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVEsRUFBRTt3QkFDakUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRLEVBQUU7cUJBQ3JFO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxrQkFBa0I7b0JBQ3hCLEtBQUssRUFBRTt3QkFDTDs0QkFDRSxJQUFJLEVBQUUsaUJBQWlCOzRCQUN2QixLQUFLLEVBQUUsR0FBRzs0QkFDVixJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVE7eUJBQzlCO3dCQUNEOzRCQUNFLElBQUksRUFBRSw4QkFBOEI7NEJBQ3BDLEtBQUssRUFBRSxHQUFHOzRCQUNWLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUTt5QkFDOUI7d0JBQ0QsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRLEVBQUU7d0JBQ2hFOzRCQUNFLElBQUksRUFBRSw0QkFBNEI7NEJBQ2xDLEtBQUssRUFBRSxHQUFHOzRCQUNWLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUTt5QkFDOUI7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFuRGEsQ0FBQztJQXFEaEIsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWhFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtvQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7aUJBQzNDOzs7OzhGQUNZLHFCQUFxQjs4REFBckIscUJBQXFCO1lDYmxDLHFDQUFvRjtZQUFsRCxvSEFBYSwwQkFBc0IsSUFBQztZQUFDLGlCQUFhOztZQUF4RSx1Q0FBcUI7O2dDREFqQztDQXlFQyxBQWpFRCxJQWlFQztTQTVEWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9vdGVyTW9kZWx9IGZyb20gJ0Bnc2Etc2FtL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJ0Bnc2Etc2FtL2NvbXBvbmVudHMvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQHRpdGxlIEZvb3RlciBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb290ZXItb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9vdGVyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb290ZXItb3ZlcnZpZXctZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJPdmVydmlld0V4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIGxpbmtFdmVudCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8b2JqZWN0Pih7fSk7XG5cbiAgbW9kZWxGb290ZXI6IEZvb3Rlck1vZGVsID0ge1xuICAgIGxpbmtTZWN0aW9uczogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnQWJvdXQgYmV0YS5TQU0uZ292JyxcbiAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnRXhwbG9yZSBPdXIgQ29tbXVuaXR5JyxcbiAgICAgICAgICAgIHJvdXRlOiAnLycsXG4gICAgICAgICAgICBtb2RlOiBOYXZpZ2F0aW9uTW9kZS5JTlRFUk5BTFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUmVsZWFzZSBOb3RlcycsIHJvdXRlOiAnLycsIG1vZGU6IE5hdmlnYXRpb25Nb2RlLklOVEVSTkFMIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ091ciBQYXJ0bmVycycsXG4gICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnQXF1aXNpdGlvbi5nb3YnLCByb3V0ZTogJy8nLCBtb2RlOiBOYXZpZ2F0aW9uTW9kZS5JTlRFUk5BTCB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdVU0FTcGVuZGluZy5nb3YnLFxuICAgICAgICAgICAgcm91dGU6ICcvJyxcbiAgICAgICAgICAgIG1vZGU6IE5hdmlnYXRpb25Nb2RlLklOVEVSTkFMXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHRleHQ6ICdHcmFudHMuZ292Jywgcm91dGU6ICcvJywgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUwgfSxcbiAgICAgICAgICB7IHRleHQ6ICdNb3JlIFBhcnRuZXJzJywgcm91dGU6ICcvJywgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUwgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnQ3VzdG9tZXIgU2VydmljZScsXG4gICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0xlYXJuaW5nIENlbnRlcicsXG4gICAgICAgICAgICByb3V0ZTogJy8nLFxuICAgICAgICAgICAgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdDb250YWN0IEZlZGVyYWwgU2VydmljZSBEZXNrJyxcbiAgICAgICAgICAgIHJvdXRlOiAnLycsXG4gICAgICAgICAgICBtb2RlOiBOYXZpZ2F0aW9uTW9kZS5JTlRFUk5BTFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUmVzb3VyY2VzJywgcm91dGU6ICcvJywgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUwgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnRnJlZWRvbSBvZiBJbmZvcm1hdGlvbiBBY3QnLFxuICAgICAgICAgICAgcm91dGU6ICcvJyxcbiAgICAgICAgICAgIG1vZGU6IE5hdmlnYXRpb25Nb2RlLklOVEVSTkFMXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGlua0V2ZW50LnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnTGluayBFdmVudCBDbGlja2VkIENoYW5nZScpO1xuICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgIH0pO1xuICB9XG59XG4iLCI8c2RzLWZvb3RlciBbbW9kZWxdPVwibW9kZWxGb290ZXJcIiAobGlua0V2ZW50KT1cImxpbmtFdmVudC5uZXh0KCRldmVudClcIj48L3Nkcy1mb290ZXI+XG4iXX0=