#  `throttleTime`

Este operador funciona parecido a `debounceTime`. Realiza la primera emisión y luego espera un determinado tiempo para poder emitir el siguiente valor. Es importante tener en cuenta que **luego de que haya pasado el tiempo y realiza la segunda emisión, recordará el último valor durante ese lapso de tiempo**.

Supongamos que escribo _abc_ y mi `throttleTime` es de 1 segundo, el observable emitirá _a_ solamente. Luego que pase ese segundo y escriba _def_, se emitirá _abcd_.

````typescript
import { fromEvent } from 'rxjs';
import { pluck, throttleTime } from 'rxjs/operators';

const input = document.getElementById('#searchtxt');
const input$ = fromEvent(input, 'keyup');

$input.pipe(
  throttleTime(10000),
  pluck('target', 'value')
).subscribe(console.log);
````