# ionic4-reactive-textarea
Angular auto-resize text-area directive
=============

ionic4-reactive-textarea is an Angular directive that automatically resize the height of text-area to fit the content.

Installation
-----------------

To use with node:

```console
npm install ionic4-reactive-textarea
```


Usage
-----------------

```import in .module.ts file
import { ReactiveTextAreaDirectiveModule } from 'ionic4-reactive-textarea/lib/reactive-textarea.directive.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveTextAreaDirectiveModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
  ],
})

```



Acknowledgements
-----------------

Inspired from Steve Papa's [angular2-autosize](https://github.com/stevepapa/angular2-autosize)
and flivni's [ionic2-autosize](https://github.com/flivni/ionic2-autosize)
