# `skip`

Es un operador utilitario que permite ignorar las primeras `x` emisiones. Veamos un ejemplo:

```typescript
import { Observer, range } from 'rxjs';
import { skip, tap } from 'rxjs/operators';

const obs: Observer = {
  next(val: number) {
    console.log('Next:', val);
  },
  complete() {
    console.log('Complete');
  }
};

range(1, 5).pipe(
  tap(val => console.log(`Preparando para emitir ${val}`)),
  skip(3),
  tap(val => console.log(`Emitiendo ${val}`))
).subscribe(obs);
```

Si ejecutamos el código anterior obtendremos:

````
Preparando para emitir 1
Preparando para emitir 2
Preparando para emitir 3
Preparando para emitir 4
Emitiendo 4
Next: 4
Preparando para emitir 5
Emitiendo 5
Next: 5
````