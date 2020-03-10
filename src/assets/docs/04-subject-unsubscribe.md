## Subject

Tomando el código anterior, podríamos decir que todo está bien. Nos desubscribimos de ambas subscriones y ponemos nuestra _cleaner function_ que limpie el interval. Pero, ¿en realidad sucede así?

Ejecutemos el código anterior, pero añadiendo un log en el `clearInterval`; de esta manera sabremos si se ha ejecutado.

```typescript
import { Observable, Observer, Subscriber, Subject } from 'rxjs'

const obs$ = new Observable<number>((sub: Subscriber<number>) => {
  const intid = setInterval(() => {
    sub.next(Math.random())
  }, 3000)
  return () => {
    console.log('Clear interval')
    clearInterval(intid)
  }
})

const sub$ = new Subject<number>()
obs$.subscribe(sub$)

const sub1 = sub$.subscribe(n => console.log('Subscription 1:', n))
const sub2 = sub$.subscribe(n => console.log('Subscription 2:', n))

setTimeout(() => {
  sub1.unsubscribe()
  sub2.unsubscribe()
}, 6500)
```

Vemos en consola que no se muestra el mensaje 'Clear interval', lo que indica que nuestro `setInterval` sigue ejecutándose y consumiendo memoria. ¡Tenemos un memory leak!

Para arreglar esto, debemos de desubscribirnos **de la subscripción del `Subject`**:

```typescript
const subjectSub = obs$.subscribe(sub$)
...
setTimeout(() => {
  subjectSub.unsubscribe()
}, 6500)
```