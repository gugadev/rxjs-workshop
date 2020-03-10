# timer e interval

## interval

Es un utilitario que sirve para emitir un valor cada cierto tiempo.

````typescript
import { interval } from 'rxjs'

const obs$ = interval(2000)
obs$.subscribe(console.log)
````

## timer

Es un utilitario que sirve para emitir un valor luego de un tiempo de espera. Luego de
éste, emite el valor y se completa.

````typescript
import { timer } from 'rxjs'

const obs$ = timer(2000)
obs$.subscribe(console.log)
````

Con `timer` también podemos crear un intérvalo de emisiones. El segundo parámetro nos indica el intérvalo
de tiempo en el que emitirán los subsiguientes valores.

````typescript
import { timer } from 'rxjs'

const obs$ = timer(2000, 1000) // la primera emisión se hace en 2s y luego emite cada 1s
obs$.subscribe(console.log)
````

Adicionalmente, podemos indicarle un objeto `Date` que sirva como referencia para que se empiece a emitir los valores.

````typescript
import { addDays } from 'date-fns'
import { timer } from 'rxjs'

const tomorrow = addDays(1, new Date())
const obs$ = timer(tomorrow, 1000) // la primera emisión empieza mañana y luego emite cada 1s
obs$.subscribe(console.log)
````
