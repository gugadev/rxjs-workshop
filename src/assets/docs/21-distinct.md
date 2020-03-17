# `distinct`

Es un operador que permite ignorar los valores que hayan sido emitidos anteriormente en la línea de tiempo del Observable.
Este operador se utiliza principalmente para tipos primitivos como números y cadenas. Ejemplo:

```typescript
import { of, Observer } from 'rxjs';
import { distinct } from 'rxjs/operators';

const obs: Observer = {
  next(val: number|string) {
    console.log('Next:', val);
  },
  complete() {
    console.log('Complete');
  }
};

const source$ = of<number|string>(1, 2, 3, 4, 5, 1, 2, 6, '4');
source$.pipe(distinct()).subscribe(obs);
```

La salida será:

````
Next: 1
Next: 2
Next: 3
Next: 4
Next: 5
Next: 6
Next: '1'
Complete
````

También se puede usar con objetos. Por ejemplo:

````typescript
import { from, Observer } from 'rxjs';
import { distinct } from 'rxjs/operators';

const obs: Observer = {
  next(val: number|string) {
    console.log('Next:', val);
  },
  complete() {
    console.log('Complete');
  }
};

enum Universe {
  Marvel = 'Marvel',
  DC = 'DC'
}

interface Hero {
  name: string,
  universe: Universe
}

const heros: Hero[] = [
  { name: 'Superman', universe: Universe.DC },
  { name: 'Batman', universe: Universe.DC },
  { name: 'Spiderman', universe: Universe.Marvel },
  { name: 'Superman', universe: Universe.Marvel }
];

from(heros).pipe(distinct(p => p.name)).subscribe(obs);
````

Si ejecutamos el código anterior obtendremos:

````
Next: { name: Superman, universe: 'DC' }
Next: { name: Batman, universe: 'DC' }
Next: { name: Spiderman, universe: 'Marvel' }
Complete
````