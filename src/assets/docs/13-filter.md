# `filter`

Es un operador que sirve para filtrar mediante una condición las emisiones que realize un observable.
Funciona igual que `filter` de `Array`. Veamos un ejemplo.

Supongamos que queremos ejecutar la subscripción solo cuando la tecla presionada sea Enter.

````typescript
import { fromEvent } from 'rxjs'
import { pluck, filter } from 'rxjs/operators'

fromEvent<KeyboardEvent>(document, 'keyup')
    .pipe(
      pluck('key'),
      filter(key => key === 'Enter')   
    )
    .subscribe(console.log)
````
