# `debounceTime`

Este operador permite realizar una emisión luego de un **lapso de tiempo de inactividad**. Es muy útil por ejemplo en barras de búsqueda para realizar la petición al API luego que el usuario haya dejado de escribir. Veamos un ejemplo.

````typescript
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';

const input = document.getElementById('#searchtxt');
const input$ = fromEvent(input, 'keyup');

$input.pipe(
  debounceTime(650),
  pluck('target', 'value'),
  distinctUntilChanged()
).subscribe(console.log);
````

Imagina que escribes _"coca cola"_, entonces, cuando dejes de escribir, luego de 0.65 segundos se emitirá dicho valor.