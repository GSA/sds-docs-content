import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { CdkVirtualScrollContextExample } from './cdk-virtual-scroll-context/cdk-virtual-scroll-context-example';
import { CdkVirtualScrollCustomStrategyExample } from './cdk-virtual-scroll-custom-strategy/cdk-virtual-scroll-custom-strategy-example';
import { CdkVirtualScrollDataSourceExample } from './cdk-virtual-scroll-data-source/cdk-virtual-scroll-data-source-example';
import { CdkVirtualScrollDlExample } from './cdk-virtual-scroll-dl/cdk-virtual-scroll-dl-example';
import { CdkVirtualScrollFixedBufferExample } from './cdk-virtual-scroll-fixed-buffer/cdk-virtual-scroll-fixed-buffer-example';
import { CdkVirtualScrollHorizontalExample } from './cdk-virtual-scroll-horizontal/cdk-virtual-scroll-horizontal-example';
import { CdkVirtualScrollOverviewExample } from './cdk-virtual-scroll-overview/cdk-virtual-scroll-overview-example';
import { CdkVirtualScrollTemplateCacheExample } from './cdk-virtual-scroll-template-cache/cdk-virtual-scroll-template-cache-example';
import * as i0 from "@angular/core";
export { CdkVirtualScrollContextExample, CdkVirtualScrollCustomStrategyExample, CdkVirtualScrollDataSourceExample, CdkVirtualScrollDlExample, CdkVirtualScrollFixedBufferExample, CdkVirtualScrollHorizontalExample, CdkVirtualScrollOverviewExample, CdkVirtualScrollTemplateCacheExample, };
var EXAMPLES = [
    CdkVirtualScrollContextExample,
    CdkVirtualScrollCustomStrategyExample,
    CdkVirtualScrollDataSourceExample,
    CdkVirtualScrollDlExample,
    CdkVirtualScrollFixedBufferExample,
    CdkVirtualScrollHorizontalExample,
    CdkVirtualScrollOverviewExample,
    CdkVirtualScrollTemplateCacheExample,
];
var CdkScrollingExamplesModule = /** @class */ (function () {
    function CdkScrollingExamplesModule() {
    }
    CdkScrollingExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ScrollingModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    CdkScrollingExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkScrollingExamplesModule });
    CdkScrollingExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkScrollingExamplesModule_Factory(t) { return new (t || CdkScrollingExamplesModule)(); }, imports: [[
                ScrollingModule,
            ]] });
    return CdkScrollingExamplesModule;
}());
export { CdkScrollingExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkScrollingExamplesModule, { declarations: [CdkVirtualScrollContextExample,
        CdkVirtualScrollCustomStrategyExample,
        CdkVirtualScrollDataSourceExample,
        CdkVirtualScrollDlExample,
        CdkVirtualScrollFixedBufferExample,
        CdkVirtualScrollHorizontalExample,
        CdkVirtualScrollOverviewExample,
        CdkVirtualScrollTemplateCacheExample], imports: [ScrollingModule], exports: [CdkVirtualScrollContextExample,
        CdkVirtualScrollCustomStrategyExample,
        CdkVirtualScrollDataSourceExample,
        CdkVirtualScrollDlExample,
        CdkVirtualScrollFixedBufferExample,
        CdkVirtualScrollHorizontalExample,
        CdkVirtualScrollOverviewExample,
        CdkVirtualScrollTemplateCacheExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkScrollingExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    ScrollingModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc2Nyb2xsaW5nL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFDTCw4QkFBOEIsRUFDL0IsTUFBTSxpRUFBaUUsQ0FBQztBQUN6RSxPQUFPLEVBQ0wscUNBQXFDLEVBQ3RDLE1BQU0saUZBQWlGLENBQUM7QUFDekYsT0FBTyxFQUNMLGlDQUFpQyxFQUNsQyxNQUFNLHlFQUF5RSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ2hHLE9BQU8sRUFDTCxrQ0FBa0MsRUFDbkMsTUFBTSwyRUFBMkUsQ0FBQztBQUNuRixPQUFPLEVBQ0wsaUNBQWlDLEVBQ2xDLE1BQU0sdUVBQXVFLENBQUM7QUFDL0UsT0FBTyxFQUNMLCtCQUErQixFQUNoQyxNQUFNLG1FQUFtRSxDQUFDO0FBQzNFLE9BQU8sRUFDTCxvQ0FBb0MsRUFDckMsTUFBTSwrRUFBK0UsQ0FBQzs7QUFFdkYsT0FBTyxFQUNMLDhCQUE4QixFQUM5QixxQ0FBcUMsRUFDckMsaUNBQWlDLEVBQ2pDLHlCQUF5QixFQUN6QixrQ0FBa0MsRUFDbEMsaUNBQWlDLEVBQ2pDLCtCQUErQixFQUMvQixvQ0FBb0MsR0FDckMsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2YsOEJBQThCO0lBQzlCLHFDQUFxQztJQUNyQyxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLG9DQUFvQztDQUNyQyxDQUFDO0FBRUY7SUFBQTtLQVFDOztnQkFSQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGVBQWU7cUJBQ2hCO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7O2tFQUNZLDBCQUEwQjt1SUFBMUIsMEJBQTBCLGtCQU41QjtnQkFDUCxlQUFlO2FBQ2hCO3FDQWxESDtDQXVEQyxBQVJELElBUUM7U0FEWSwwQkFBMEI7d0ZBQTFCLDBCQUEwQixtQkFqQnJDLDhCQUE4QjtRQUM5QixxQ0FBcUM7UUFDckMsaUNBQWlDO1FBQ2pDLHlCQUF5QjtRQUN6QixrQ0FBa0M7UUFDbEMsaUNBQWlDO1FBQ2pDLCtCQUErQjtRQUMvQixvQ0FBb0MsYUFLbEMsZUFBZSxhQVpqQiw4QkFBOEI7UUFDOUIscUNBQXFDO1FBQ3JDLGlDQUFpQztRQUNqQyx5QkFBeUI7UUFDekIsa0NBQWtDO1FBQ2xDLGlDQUFpQztRQUNqQywrQkFBK0I7UUFDL0Isb0NBQW9DO2tEQVV6QiwwQkFBMEI7Y0FQdEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxlQUFlO2lCQUNoQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Njcm9sbGluZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENka1ZpcnR1YWxTY3JvbGxDb250ZXh0RXhhbXBsZVxufSBmcm9tICcuL2Nkay12aXJ0dWFsLXNjcm9sbC1jb250ZXh0L2Nkay12aXJ0dWFsLXNjcm9sbC1jb250ZXh0LWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrVmlydHVhbFNjcm9sbEN1c3RvbVN0cmF0ZWd5RXhhbXBsZVxufSBmcm9tICcuL2Nkay12aXJ0dWFsLXNjcm9sbC1jdXN0b20tc3RyYXRlZ3kvY2RrLXZpcnR1YWwtc2Nyb2xsLWN1c3RvbS1zdHJhdGVneS1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka1ZpcnR1YWxTY3JvbGxEYXRhU291cmNlRXhhbXBsZVxufSBmcm9tICcuL2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS9jZGstdmlydHVhbC1zY3JvbGwtZGF0YS1zb3VyY2UtZXhhbXBsZSc7XG5pbXBvcnQge0Nka1ZpcnR1YWxTY3JvbGxEbEV4YW1wbGV9IGZyb20gJy4vY2RrLXZpcnR1YWwtc2Nyb2xsLWRsL2Nkay12aXJ0dWFsLXNjcm9sbC1kbC1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka1ZpcnR1YWxTY3JvbGxGaXhlZEJ1ZmZlckV4YW1wbGVcbn0gZnJvbSAnLi9jZGstdmlydHVhbC1zY3JvbGwtZml4ZWQtYnVmZmVyL2Nkay12aXJ0dWFsLXNjcm9sbC1maXhlZC1idWZmZXItZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtWaXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbEV4YW1wbGVcbn0gZnJvbSAnLi9jZGstdmlydHVhbC1zY3JvbGwtaG9yaXpvbnRhbC9jZGstdmlydHVhbC1zY3JvbGwtaG9yaXpvbnRhbC1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka1ZpcnR1YWxTY3JvbGxPdmVydmlld0V4YW1wbGVcbn0gZnJvbSAnLi9jZGstdmlydHVhbC1zY3JvbGwtb3ZlcnZpZXcvY2RrLXZpcnR1YWwtc2Nyb2xsLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrVmlydHVhbFNjcm9sbFRlbXBsYXRlQ2FjaGVFeGFtcGxlXG59IGZyb20gJy4vY2RrLXZpcnR1YWwtc2Nyb2xsLXRlbXBsYXRlLWNhY2hlL2Nkay12aXJ0dWFsLXNjcm9sbC10ZW1wbGF0ZS1jYWNoZS1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQ2RrVmlydHVhbFNjcm9sbENvbnRleHRFeGFtcGxlLFxuICBDZGtWaXJ0dWFsU2Nyb2xsQ3VzdG9tU3RyYXRlZ3lFeGFtcGxlLFxuICBDZGtWaXJ0dWFsU2Nyb2xsRGF0YVNvdXJjZUV4YW1wbGUsXG4gIENka1ZpcnR1YWxTY3JvbGxEbEV4YW1wbGUsXG4gIENka1ZpcnR1YWxTY3JvbGxGaXhlZEJ1ZmZlckV4YW1wbGUsXG4gIENka1ZpcnR1YWxTY3JvbGxIb3Jpem9udGFsRXhhbXBsZSxcbiAgQ2RrVmlydHVhbFNjcm9sbE92ZXJ2aWV3RXhhbXBsZSxcbiAgQ2RrVmlydHVhbFNjcm9sbFRlbXBsYXRlQ2FjaGVFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENka1ZpcnR1YWxTY3JvbGxDb250ZXh0RXhhbXBsZSxcbiAgQ2RrVmlydHVhbFNjcm9sbEN1c3RvbVN0cmF0ZWd5RXhhbXBsZSxcbiAgQ2RrVmlydHVhbFNjcm9sbERhdGFTb3VyY2VFeGFtcGxlLFxuICBDZGtWaXJ0dWFsU2Nyb2xsRGxFeGFtcGxlLFxuICBDZGtWaXJ0dWFsU2Nyb2xsRml4ZWRCdWZmZXJFeGFtcGxlLFxuICBDZGtWaXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbEV4YW1wbGUsXG4gIENka1ZpcnR1YWxTY3JvbGxPdmVydmlld0V4YW1wbGUsXG4gIENka1ZpcnR1YWxTY3JvbGxUZW1wbGF0ZUNhY2hlRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTY3JvbGxpbmdNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtTY3JvbGxpbmdFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=