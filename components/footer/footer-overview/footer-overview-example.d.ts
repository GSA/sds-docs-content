import { OnInit } from '@angular/core';
import { FooterModel } from '@gsa-sam/components/footer';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @title Footer overview
 */
export declare class FooterOverviewExample implements OnInit {
    constructor();
    linkEvent: BehaviorSubject<object>;
    modelFooter: FooterModel;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<FooterOverviewExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FooterOverviewExample, "footer-overview-example", never, {}, {}, never>;
}
