import { ElementRef, Directive, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: 'ion-textarea[reactive]',
})
export class ReactiveTextAreaDirective implements OnInit, OnDestroy {
  mutationObserver: MutationObserver;

  constructor(public element: ElementRef) {
    const resize = () => {
      setTimeout(() => {
        const shadowRoot: ShadowRoot = this.element.nativeElement.shadowRoot;
        const textArea = shadowRoot.children.item(1) as HTMLTextAreaElement;
        const resizeHeight = this.element.nativeElement.getAttribute(
          'reactive',
        );
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

  ngOnInit(): void {
    this.mutationObserver.observe(this.element.nativeElement.shadowRoot, {
      characterData: true,
      childList: true,
      subtree: true,
    });
  }

  ngOnDestroy(): void {
    this.mutationObserver.disconnect();
  }
}
