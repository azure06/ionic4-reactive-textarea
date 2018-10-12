import { ElementRef, OnInit, OnDestroy } from '@angular/core';
export declare class ReactiveTextAreaDirective implements OnInit, OnDestroy {
    element: ElementRef;
    mutationObserver: MutationObserver;
    constructor(element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
