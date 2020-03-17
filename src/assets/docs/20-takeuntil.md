# `takeUntil`

Este operador permite seguir emitiendo valores hasta que otro observable realice una emisión. Supongamos que tenemos un `interval` que emite cada un segundo y queremos que se detenga cuando se haga click en un botón.

```typescript
import { Observer, fromEvent, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const obs: Observer = {
  next(value: number) {
    console.log('Next:', value);
  },
  complete() {
    console.log('Complete');
  }
};

const button = document.getElementById('stop');
const counter$ = interval(1000);
const click$ = fromEvent(button, 'click');

counter$.pipe(takeUntil(click$)).subscribe(obs);
```

Si ejecutamos el código y hacemos click luego de 5 segundos obtendremos la siguiente salida:

```
Next: 0
Next: 1
Next: 2
Next: 3
Next: 4
Next: 5
Complete
```

