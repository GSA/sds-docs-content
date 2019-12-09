import { FooterOverviewExample } from '@gsa-sam/sds-examples/components/footer';
import { FooterExamplesModule } from '@gsa-sam/sds-examples/components/footer';
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
export declare const EXAMPLE_LIST: (typeof FooterOverviewExample)[];
export declare class ExampleModule {
}
export { FooterOverviewExample };
