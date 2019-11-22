import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ElevationOverviewExample } from './elevation-overview/elevation-overview-example';
import { RippleOverviewExample } from './ripple-overview/ripple-overview-example';
import * as i0 from "@angular/core";
export { ElevationOverviewExample, RippleOverviewExample, };
var EXAMPLES = [
    ElevationOverviewExample,
    RippleOverviewExample,
];
var CoreExamplesModule = /** @class */ (function () {
    function CoreExamplesModule() {
    }
    CoreExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatButtonModule,
                        MatCheckboxModule,
                        MatInputModule,
                        MatRippleModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    CoreExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CoreExamplesModule });
    CoreExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CoreExamplesModule_Factory(t) { return new (t || CoreExamplesModule)(); }, imports: [[
                MatButtonModule,
                MatCheckboxModule,
                MatInputModule,
                MatRippleModule,
                FormsModule,
            ]] });
    return CoreExamplesModule;
}());
export { CoreExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoreExamplesModule, { declarations: [ElevationOverviewExample,
        RippleOverviewExample], imports: [MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatRippleModule,
        FormsModule], exports: [ElevationOverviewExample,
        RippleOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CoreExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatCheckboxModule,
                    MatInputModule,
                    MatRippleModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jb3JlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDOztBQUVoRixPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLHFCQUFxQixHQUN0QixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZix3QkFBd0I7SUFDeEIscUJBQXFCO0NBQ3RCLENBQUM7QUFFRjtJQUFBO0tBWUM7O2dCQVpBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7OzBEQUNZLGtCQUFrQjt1SEFBbEIsa0JBQWtCLGtCQVZwQjtnQkFDUCxlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakIsY0FBYztnQkFDZCxlQUFlO2dCQUNmLFdBQVc7YUFDWjs2QkExQkg7Q0ErQkMsQUFaRCxJQVlDO1NBRFksa0JBQWtCO3dGQUFsQixrQkFBa0IsbUJBZjdCLHdCQUF3QjtRQUN4QixxQkFBcUIsYUFLbkIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsZUFBZTtRQUNmLFdBQVcsYUFWYix3QkFBd0I7UUFDeEIscUJBQXFCO2tEQWNWLGtCQUFrQjtjQVg5QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsV0FBVztpQkFDWjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRSaXBwbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtFbGV2YXRpb25PdmVydmlld0V4YW1wbGV9IGZyb20gJy4vZWxldmF0aW9uLW92ZXJ2aWV3L2VsZXZhdGlvbi1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7UmlwcGxlT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3JpcHBsZS1vdmVydmlldy9yaXBwbGUtb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIEVsZXZhdGlvbk92ZXJ2aWV3RXhhbXBsZSxcbiAgUmlwcGxlT3ZlcnZpZXdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEVsZXZhdGlvbk92ZXJ2aWV3RXhhbXBsZSxcbiAgUmlwcGxlT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDb3JlRXhhbXBsZXNNb2R1bGUge1xufVxuIl19