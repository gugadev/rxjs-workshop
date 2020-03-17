# `distinctUntilChanged`

Este operador nos permite emitir valores hasta que un valor se repita con su antecesor. Tomemos como ejemplo el código anterior:

````typescript
import { from, Observer } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

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
  { name: 'Spiderman', universe: Universe.DC }
];

from(heros).pipe(
  distinctUntilChanged((prev, current) => prev.name === current.name)
).subscribe(obs);
````

Si ejecutamos el código anterior obtendremos lo siguiente:

````
Next: { name: Superman, universe: 'DC' }
Next: { name: Batman, universe: 'DC' }
Next: { name: Spiderman, universe: 'Marvel' }
Complete
````

Existe un operador más útil para estos casos, en donde solo nos interesa que se observe la propiedad a comparar. Lo veremos en el próximo capítulo.