## Subject

Se usa para siempre hacer referencia al ultimo valor emitido por un observable, aún cuando hayan múltiples subscripciones.

Imaginemos que tenemos un observable que emite un valor aleatorio entre 0 y 1 cada tres segundos. A este observable se subscriben dos observers:

```typescript
import { Observable, Subscriber } from 'rxjs'

const obs$ = new Observable<number>((sub: Subscriber<number>) => {
  const intid = setInterval(() => {
    sub.next(Math.random())
  }, 3000)
  return () => {
    clearInterval(intid)
  }
})

const sub1 = obs$.subscribe(n => console.log('Subscription 1:', n))
const sub2 = obs$.subscribe(n => console.log('Subscription 2:', n))

setTimeout(() => {
  sub1.unsubscribe()
  sub2.unsubscribe()
}, 9500)
```

Si vemos la consola, veremos algo como lo siguiente:

```
Subscription 1: 0.10123965785262556 
 
Subscription 2: 0.12400826100587392 
 
Subscription 1: 0.0037970692669038186 
 
Subscription 2: 0.6371273684547896 
 
Subscription 1: 0.25426459820832426 
 
Subscription 2: 0.8632976500138196
```

Pero, ¿Qué pasaría si quisiéramos que ambos observers reciban el mismo valor? Es decir, el último valor generado por el observer.

Aquí es donde entra a tallar `Subject`. Lo que hace es actuar como **intermediario** entre el `Observable` y nuestros `Observers`.

```typescript
onst sub$ = new Subject<number>()
obs$.subscribe(sub$)
```

Y en lugar de subscribirnos al `Observable` nos subscribimos al `Subject`.

```typescript
const sub1 = sub$.subscribe(n => console.log('Subscription 1:', n))
const sub2 = sub$.subscribe(n => console.log('Subscription 2:', n))
```

Si ejecutamos el código veremos una salida como la siguiente:

```
Subscription 1: 0.9517635722258722 
 
Subscription 2: 0.9517635722258722 
 
Subscription 1: 0.5614755469916757 
 
Subscription 2: 0.5614755469916757 
 
Subscription 1: 0.7402204914107662 
 
Subscription 2: 0.7402204914107662 
```

