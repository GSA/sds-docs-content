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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXItb3ZlcnZpZXcvZm9vdGVyLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXItb3ZlcnZpZXcvZm9vdGVyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7QUFFckM7O0dBRUc7QUFDSDtJQU1FO1FBQ0EsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRTVDLGdCQUFXLEdBQWdCO1lBQ3pCLFlBQVksRUFBRTtnQkFDWjtvQkFDRSxJQUFJLEVBQUUsb0JBQW9CO29CQUMxQixLQUFLLEVBQUU7d0JBQ0w7NEJBQ0UsSUFBSSxFQUFFLHVCQUF1Qjs0QkFDN0IsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRO3lCQUM5Qjt3QkFDRCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVEsRUFBRTtxQkFDckU7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLGNBQWM7b0JBQ3BCLEtBQUssRUFBRTt3QkFDTCxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUSxFQUFFO3dCQUNyRTs0QkFDRSxJQUFJLEVBQUUsaUJBQWlCOzRCQUN2QixLQUFLLEVBQUUsR0FBRzs0QkFDVixJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVE7eUJBQzlCO3dCQUNELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUSxFQUFFO3dCQUNqRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVEsRUFBRTtxQkFDckU7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLGtCQUFrQjtvQkFDeEIsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLElBQUksRUFBRSxpQkFBaUI7NEJBQ3ZCLEtBQUssRUFBRSxHQUFHOzRCQUNWLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUTt5QkFDOUI7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLDhCQUE4Qjs0QkFDcEMsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRO3lCQUM5Qjt3QkFDRCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVEsRUFBRTt3QkFDaEU7NEJBQ0UsSUFBSSxFQUFFLDRCQUE0Qjs0QkFDbEMsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRO3lCQUM5QjtxQkFDRjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQW5EYSxDQUFDO0lBcURoQix3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBaEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxXQUFXLEVBQUUsOEJBQThCO29CQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDM0M7Ozs7OEZBQ1kscUJBQXFCOzhEQUFyQixxQkFBcUI7WUNibEMscUNBQW9GO1lBQWxELG9IQUFhLDBCQUFzQixJQUFDO1lBQUMsaUJBQWE7O1lBQXhFLHVDQUFxQjs7Z0NEQWpDO0NBeUVDLEFBakVELElBaUVDO1NBNURZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb290ZXJNb2RlbH0gZnJvbSAnQGdzYS1zYW0vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnQGdzYS1zYW0vY29tcG9uZW50cy9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAdGl0bGUgRm9vdGVyIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvb3Rlci1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb290ZXItb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Zvb3Rlci1vdmVydmlldy1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvb3Rlck92ZXJ2aWV3RXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgY29uc3RydWN0b3IoKSB7fVxuICBsaW5rRXZlbnQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG9iamVjdD4oe30pO1xuXG4gIG1vZGVsRm9vdGVyOiBGb290ZXJNb2RlbCA9IHtcbiAgICBsaW5rU2VjdGlvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0Fib3V0IGJldGEuU0FNLmdvdicsXG4gICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0V4cGxvcmUgT3VyIENvbW11bml0eScsXG4gICAgICAgICAgICByb3V0ZTogJy8nLFxuICAgICAgICAgICAgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgdGV4dDogJ1JlbGVhc2UgTm90ZXMnLCByb3V0ZTogJy8nLCBtb2RlOiBOYXZpZ2F0aW9uTW9kZS5JTlRFUk5BTCB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdPdXIgUGFydG5lcnMnLFxuICAgICAgICBsaW5rczogW1xuICAgICAgICAgIHsgdGV4dDogJ0FxdWlzaXRpb24uZ292Jywgcm91dGU6ICcvJywgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUwgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnVVNBU3BlbmRpbmcuZ292JyxcbiAgICAgICAgICAgIHJvdXRlOiAnLycsXG4gICAgICAgICAgICBtb2RlOiBOYXZpZ2F0aW9uTW9kZS5JTlRFUk5BTFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnR3JhbnRzLmdvdicsIHJvdXRlOiAnLycsIG1vZGU6IE5hdmlnYXRpb25Nb2RlLklOVEVSTkFMIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnTW9yZSBQYXJ0bmVycycsIHJvdXRlOiAnLycsIG1vZGU6IE5hdmlnYXRpb25Nb2RlLklOVEVSTkFMIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0N1c3RvbWVyIFNlcnZpY2UnLFxuICAgICAgICBsaW5rczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdMZWFybmluZyBDZW50ZXInLFxuICAgICAgICAgICAgcm91dGU6ICcvJyxcbiAgICAgICAgICAgIG1vZGU6IE5hdmlnYXRpb25Nb2RlLklOVEVSTkFMXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnQ29udGFjdCBGZWRlcmFsIFNlcnZpY2UgRGVzaycsXG4gICAgICAgICAgICByb3V0ZTogJy8nLFxuICAgICAgICAgICAgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgdGV4dDogJ1Jlc291cmNlcycsIHJvdXRlOiAnLycsIG1vZGU6IE5hdmlnYXRpb25Nb2RlLklOVEVSTkFMIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0ZyZWVkb20gb2YgSW5mb3JtYXRpb24gQWN0JyxcbiAgICAgICAgICAgIHJvdXRlOiAnLycsXG4gICAgICAgICAgICBtb2RlOiBOYXZpZ2F0aW9uTW9kZS5JTlRFUk5BTFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxpbmtFdmVudC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0xpbmsgRXZlbnQgQ2xpY2tlZCBDaGFuZ2UnKTtcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPHNkcy1mb290ZXIgW21vZGVsXT1cIm1vZGVsRm9vdGVyXCIgKGxpbmtFdmVudCk9XCJsaW5rRXZlbnQubmV4dCgkZXZlbnQpXCI+PC9zZHMtZm9vdGVyPlxuIl19