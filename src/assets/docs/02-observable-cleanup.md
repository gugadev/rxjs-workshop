# Observable cleanup

Algunas veces necesitaremos emitir valores cada cierta cantidad de tiempo. En este caso nos viene siendo útil los ya conocidos `setTimeout` y `setInterval`.

Veamos un ejemplo. Supongamos que queremos emitir
del 1 al 10 esperando un segundo entre emisión.

Para esto, podemos usar `setInterval`:

```typescript
import { Observable, Observer } from 'rxjs'

const observer: Observer = {
  next(val: number) {
    console.log('Next value:', val)
  },
  complete(): void {
    console.log('Completed')
  }
}

const obs$ = new Observable<number>((sub: Subscripter<number>) => {
  let n = 1;
  setInterval(() => {
    if (n <= 10) {
      sub.next(n++);
    } else {
      sub.complete()
    }
  }, 1000);
});

obs$.subscribe(console.log)
```

Si ahora ejecutamos el código, veremos la siguiente salida:

```bash
Next value: 1
Next value: 2
Next value: 3
Next value: 4
Next value: 5
Next value: 6
Next value: 7
Next value: 8
Next value: 9
Next value: 10
Completed
```

Logramos nuestro objetivo. Sin embargo, si observamos el código nos daremos cuenta que el `setInterval` se está ejecutando infinitamente**; la condición **solo sirve para emitir o no un valor**, mas no para volver a iterar.

Esto puede derivar en problemas de memoria. Entonces, ¿Qué hacemos?

Un `Observable` nos permite una función denominada **limpiadora**. Esta función se dispara al completarse el observable y aquí debemos llegar a cabo la limpieza del `setInterval`. Veamos cómo:

```diff
const obs$ = new Observable<number>((sub: Subscripter<number>) => {
  let n = 1;
  const intid = setInterval(() => {
    if (n <= 10) {
      sub.next(n++);
    } else {
      sub.complete()
    }
  }, 1000);
  +return () => {
  +  clearInterval(intid)
  +}
});
```

De esta manera, limpiamos el `setInterval` con `clearInterval` cuando el observable se haya completado 😉.
