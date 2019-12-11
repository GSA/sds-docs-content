import { Component } from '@angular/core';
import { NavigationMode } from '@gsa-sam/components/core';
import { BehaviorSubject } from 'rxjs';
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
                    template: "<sds-footer [model]=\"modelFooter\" (linkEvent)=\"linkEvent.next($event)\"></sds-footer>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    /** @nocollapse */
    FooterOverviewExample.ctorParameters = function () { return []; };
    return FooterOverviewExample;
}());
export { FooterOverviewExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc2RzLWV4YW1wbGVzL2NvbXBvbmVudHMvZm9vdGVyL292ZXJ2aWV3L2Zvb3Rlci1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFaEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFckM7O0dBRUc7QUFDSDtJQU1FO1FBQ0EsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRTVDLGdCQUFXLEdBQWdCO1lBQ3pCLFlBQVksRUFBRTtnQkFDWjtvQkFDRSxJQUFJLEVBQUUsb0JBQW9CO29CQUMxQixLQUFLLEVBQUU7d0JBQ0w7NEJBQ0UsSUFBSSxFQUFFLHVCQUF1Qjs0QkFDN0IsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRO3lCQUM5Qjt3QkFDRCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVEsRUFBRTtxQkFDckU7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLGNBQWM7b0JBQ3BCLEtBQUssRUFBRTt3QkFDTCxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUSxFQUFFO3dCQUNyRTs0QkFDRSxJQUFJLEVBQUUsaUJBQWlCOzRCQUN2QixLQUFLLEVBQUUsR0FBRzs0QkFDVixJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVE7eUJBQzlCO3dCQUNELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUSxFQUFFO3dCQUNqRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVEsRUFBRTtxQkFDckU7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLGtCQUFrQjtvQkFDeEIsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLElBQUksRUFBRSxpQkFBaUI7NEJBQ3ZCLEtBQUssRUFBRSxHQUFHOzRCQUNWLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUTt5QkFDOUI7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLDhCQUE4Qjs0QkFDcEMsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRO3lCQUM5Qjt3QkFDRCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLFFBQVEsRUFBRTt3QkFDaEU7NEJBQ0UsSUFBSSxFQUFFLDRCQUE0Qjs0QkFDbEMsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsSUFBSSxFQUFFLGNBQWMsQ0FBQyxRQUFRO3lCQUM5QjtxQkFDRjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQW5EYSxDQUFDO0lBcURoQix3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBaEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxzR0FBMkM7O2lCQUU1Qzs7OztJQTZERCw0QkFBQztDQUFBLEFBakVELElBaUVDO1NBNURZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb290ZXJNb2RlbH0gZnJvbSAnQGdzYS1zYW0vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnQGdzYS1zYW0vY29tcG9uZW50cy9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAdGl0bGUgRm9vdGVyIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvb3Rlci1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb290ZXItb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Zvb3Rlci1vdmVydmlldy1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvb3Rlck92ZXJ2aWV3RXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgbGlua0V2ZW50ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxvYmplY3Q+KHt9KTtcblxuICBtb2RlbEZvb3RlcjogRm9vdGVyTW9kZWwgPSB7XG4gICAgbGlua1NlY3Rpb25zOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdBYm91dCBiZXRhLlNBTS5nb3YnLFxuICAgICAgICBsaW5rczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdFeHBsb3JlIE91ciBDb21tdW5pdHknLFxuICAgICAgICAgICAgcm91dGU6ICcvJyxcbiAgICAgICAgICAgIG1vZGU6IE5hdmlnYXRpb25Nb2RlLklOVEVSTkFMXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHRleHQ6ICdSZWxlYXNlIE5vdGVzJywgcm91dGU6ICcvJywgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUwgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnT3VyIFBhcnRuZXJzJyxcbiAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICB7IHRleHQ6ICdBcXVpc2l0aW9uLmdvdicsIHJvdXRlOiAnLycsIG1vZGU6IE5hdmlnYXRpb25Nb2RlLklOVEVSTkFMIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1VTQVNwZW5kaW5nLmdvdicsXG4gICAgICAgICAgICByb3V0ZTogJy8nLFxuICAgICAgICAgICAgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgdGV4dDogJ0dyYW50cy5nb3YnLCByb3V0ZTogJy8nLCBtb2RlOiBOYXZpZ2F0aW9uTW9kZS5JTlRFUk5BTCB9LFxuICAgICAgICAgIHsgdGV4dDogJ01vcmUgUGFydG5lcnMnLCByb3V0ZTogJy8nLCBtb2RlOiBOYXZpZ2F0aW9uTW9kZS5JTlRFUk5BTCB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdDdXN0b21lciBTZXJ2aWNlJyxcbiAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnTGVhcm5pbmcgQ2VudGVyJyxcbiAgICAgICAgICAgIHJvdXRlOiAnLycsXG4gICAgICAgICAgICBtb2RlOiBOYXZpZ2F0aW9uTW9kZS5JTlRFUk5BTFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0NvbnRhY3QgRmVkZXJhbCBTZXJ2aWNlIERlc2snLFxuICAgICAgICAgICAgcm91dGU6ICcvJyxcbiAgICAgICAgICAgIG1vZGU6IE5hdmlnYXRpb25Nb2RlLklOVEVSTkFMXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHRleHQ6ICdSZXNvdXJjZXMnLCByb3V0ZTogJy8nLCBtb2RlOiBOYXZpZ2F0aW9uTW9kZS5JTlRFUk5BTCB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdGcmVlZG9tIG9mIEluZm9ybWF0aW9uIEFjdCcsXG4gICAgICAgICAgICByb3V0ZTogJy8nLFxuICAgICAgICAgICAgbW9kZTogTmF2aWdhdGlvbk1vZGUuSU5URVJOQUxcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5saW5rRXZlbnQuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdMaW5rIEV2ZW50IENsaWNrZWQgQ2hhbmdlJyk7XG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
