# `of` y `from`

## `of `

Crea un `Observable` a partir de un valor y emite una sola vez sea el dato que le pases.

````typescript
import { of } from 'rxjs'

const obs$ = of([1, 2, 3, 4, 5])
obs$.subscribe(console.log) // [1, 2, 3, 4, 5] 
````

## `from`

Por otro lado, `from` recibe un argumento que puede ser un array, una promesa o un iterable y emite valor por valor.
Por ejemplo si le pasas un array, emitirá valor por valor de dicho array. Si le pasas una
promesa, emitirá el valor resuelto. Si le pasas una estructura de datos que implemente el patrón
_Iterable_ también procederá a emitir valor por valor.

````typescript
import {from  } from 'rxjs';

const array$ = from([1, 2, 3, 4, 5]);
const promise$ = from(Promise.resolve('Hello'));
const generator$ = from(function *generate() {
  yield 1;
  yield 'a';
  yield true;
}());

array$.subscribe(console.log); // 1, 2, 3, 4, 5
promise$.subscribe(console.log); // 'Hello'
generator$.subscribe(console.log) // 1, 'a', true
````

