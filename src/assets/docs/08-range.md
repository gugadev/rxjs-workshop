# range

Range es un operador que sirve para crear rangos de emisiones **síncronas**. Supongamos que queremos emitir de 1 al 10.
Para esto podemos usar `of`:

````typescript
import { of } from 'rxjs'

const obs$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
obs$.subscribe(console.log)
````

Pero es bastante tedioso, sobre todo si el rango se amplía. Para esto, podemos usar
el operador `range`:

````typescript
import { range } from 'rxjs'

const obs$ = range(1, 10)
obs$.subscribe(console.log)
````

Ten en cuenta que `range` no crear un rango de números y los emite desde el primero hasta el segundo.
Lo que hace es que crea un rango de emisiones, donde el primer número es en donde empieza y el segundo
la cantidad de emisiones consecutivas que hará.

````typescript
import { range } from 'rxjs'

console.log('Inicio')
const obs$ = range(-5, 10)
obs$.subscribe(console.log
console.log('Fin')
````

Si apreciamos la salida, veremos lo siguiente:

```
Inicio

-5
-4
-3
-2
-1
0
1
2
3
4

Fin
```

## async

Podemos hacer la ejecución de un `range` asíncrona por medio de un _SchedulerLike_:

````typescript
import { asyncScheduler, range } from 'rxjs';

console.log('Inicio')
const obs$ = range(-5, 10, asyncScheduler)
obs$.subscribe(console.log)
console.log('Fin')
````

Si apreciamos la salida, veremos lo siguiente:

```
Inicio
Fin

-5
-4
-3
-2
-1
0
1
2
3
4
```
