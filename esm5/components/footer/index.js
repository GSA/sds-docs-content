import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsFooterModule } from '@gsa-sam/components/footer';
import { FooterOverviewExample } from './overview/footer-overview-example';
import * as i0 from "@angular/core";
export { FooterOverviewExample, };
var EXAMPLES = [
    FooterOverviewExample,
];
var FooterExamplesModule = /** @class */ (function () {
    function FooterExamplesModule() {
    }
    FooterExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        SdsFooterModule
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    FooterExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: FooterExamplesModule });
    FooterExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FooterExamplesModule_Factory(t) { return new (t || FooterExamplesModule)(); }, imports: [[
                CommonModule,
                SdsFooterModule
            ]] });
    return FooterExamplesModule;
}());
export { FooterExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FooterExamplesModule, { declarations: [FooterOverviewExample], imports: [CommonModule,
        SdsFooterModule], exports: [FooterOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FooterExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    SdsFooterModule
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jb21wb25lbnRzL2Zvb3Rlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7O0FBRXpFLE9BQU8sRUFDTCxxQkFBcUIsR0FDdEIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2YscUJBQXFCO0NBQ3RCLENBQUM7QUFFRjtJQUFBO0tBU0M7O2dCQVRBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3FCQUNoQjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCOzs0REFDWSxvQkFBb0I7MkhBQXBCLG9CQUFvQixrQkFQdEI7Z0JBQ1AsWUFBWTtnQkFDWixlQUFlO2FBQ2hCOytCQWpCSDtDQXNCQyxBQVRELElBU0M7U0FEWSxvQkFBb0I7d0ZBQXBCLG9CQUFvQixtQkFYL0IscUJBQXFCLGFBS25CLFlBQVk7UUFDWixlQUFlLGFBTmpCLHFCQUFxQjtrREFXVixvQkFBb0I7Y0FSaEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGVBQWU7aUJBQ2hCO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1Nkc0Zvb3Rlck1vZHVsZX0gZnJvbSAnQGdzYS1zYW0vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IHtGb290ZXJPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vb3ZlcnZpZXcvZm9vdGVyLW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBGb290ZXJPdmVydmlld0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgRm9vdGVyT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBTZHNGb290ZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==