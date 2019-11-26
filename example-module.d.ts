import { FooterExamplesModule } from '@gsa-sam/components-examples/components/footer';
import * as i0 from "@angular/core";
import * as i1 from "@gsa-sam/components-examples/components/footer";
export interface LiveExample {
    title: string;
    component: any;
    additionalFiles?: string[];
    selectorName?: string;
}
export declare const EXAMPLE_COMPONENTS: {
    [key: string]: LiveExample;
};
export declare const EXAMPLE_MODULES: (typeof FooterExamplesModule)[];
export declare const EXAMPLE_LIST: never[];
export declare class ExampleModule {
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ExampleModule, never, [typeof i1.FooterExamplesModule], [typeof i1.FooterExamplesModule]>;
    static ɵinj: i0.ɵɵInjectorDef<ExampleModule>;
}
export {};
