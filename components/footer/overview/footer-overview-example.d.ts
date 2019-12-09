import { OnInit } from '@angular/core';
import { FooterModel } from '@gsa-sam/components/footer';
import { BehaviorSubject } from 'rxjs';
/**
 * @title Footer overview
 */
export declare class FooterOverviewExample implements OnInit {
    constructor();
    linkEvent: BehaviorSubject<object>;
    modelFooter: FooterModel;
    ngOnInit(): void;
}
