# `sampleTime`

Emite la primera emisión al instante y la última luego de un tiempo determinado. Por ejemplo:

````typescript
import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

click$.pipe(
  sampleTime(2000),
  map(({ x, y }) => ({ x, y })),
).subscribe(console.log);
````

Si hacemos tres clicks, cada click bajanco un poco en el eje vertical, obtendremos las emisiones del primer click y luego de dos segundos, la emisión del último click.