# `auditTime`

Emite el último valor emitido por el observable luego de un tiempo. Este operador
es muy parecido al `debounceTime`.

````typescript
import { fromEvent } from 'rxjs';
import { map, auditTime } from 'rxjs/operators';

fromEvent(document, 'click').pipe(
  map(({ x }) => x),
  auditTime(2000)
).subscribe(console.log);
````

Si ejecutas el código y haces muchos clicks rápidos moviendo el cursor hacia la derecha, verás que se emite al cabo de los dos segundos el último click realizado.