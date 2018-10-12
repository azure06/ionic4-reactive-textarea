import { NgModule } from '@angular/core';
import { ReactiveTextAreaDirective } from './reactive-textarea.directive';

@NgModule({
  declarations: [ReactiveTextAreaDirective],
  exports: [ReactiveTextAreaDirective],
})
export class ReactiveTextAreaDirectiveModule {}
