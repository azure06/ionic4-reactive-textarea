var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ElementRef, Directive } from '@angular/core';
var ReactiveTextAreaDirective = /** @class */ (function () {
    function ReactiveTextAreaDirective(element) {
        var _this = this;
        this.element = element;
        var resize = function () {
            setTimeout(function () {
                var shadowRoot = _this.element.nativeElement.shadowRoot;
                var textArea = shadowRoot.children.item(1);
                var resizeHeight = _this.element.nativeElement.getAttribute('reactive');
                textArea.style.overflow = 'hidden';
                textArea.style.height = 'auto';
                textArea.style.height =
                    +textArea.scrollHeight > +resizeHeight
                        ? resizeHeight + 'px'
                        : textArea.scrollHeight + 'px';
            });
        };
        this.mutationObserver = new MutationObserver(resize);
    }
    ReactiveTextAreaDirective.prototype.ngOnInit = function () {
        this.mutationObserver.observe(this.element.nativeElement.shadowRoot, {
            characterData: true,
            childList: true,
            subtree: true,
        });
    };
    ReactiveTextAreaDirective.prototype.ngOnDestroy = function () {
        this.mutationObserver.disconnect();
    };
    ReactiveTextAreaDirective = __decorate([
        Directive({
            selector: 'ion-textarea[reactive]',
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], ReactiveTextAreaDirective);
    return ReactiveTextAreaDirective;
}());
export { ReactiveTextAreaDirective };
//# sourceMappingURL=reactive-textarea.directive.js.map