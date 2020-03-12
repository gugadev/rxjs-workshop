# `map`

Map es un operador de transformación que nos recibe un dato y puede devolver otro, dando así pie a la transformación de dicho dato. Veamos un ejemplo:

```typescript
import { Observer, of } from 'rxjs';
import { map } from 'rxjs/operators';

const obs: Observer<number> = {
  next(value: number) {
    console.log('Next:', value);
  },
  complete() {
    console.log('Completed');
  }
};

of(1, 2, 3, 4, 5)
  .pipe(
    map(n => n * 2)
  ).subscribe(obs);
```

El `map` que hemos colocado, recibirá cada una de las emisiones y las multiplicará por 2. El resultado de esta subscripción entonces será:

````
Next: 2
Next: 4
Next: 6
Next: 8
Next: 10
Completed
````

Veamos otro ejemplo. Supongamos que queremos que cuando se haga click se obtenga las coordenadas `clientX` y `clientY`.

````typescript
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

fromEvent<MouseEvent>(document, 'click')
  .pipe(
    map(e => ({
      x: e.clientX,
      y: e.clientY
    }))
  )
  .subscribe(console.log);
````

En este caso, cada que se haga click la salida será algo como:

`````
{ x: 10, y: 18 }
{ x: 22, y: 37 }
```
