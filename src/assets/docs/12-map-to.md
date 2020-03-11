# `mapTo`

Este operador emite un valor constante cada vez que el observable emite un valor, ignorando el mismo.

Veamos un ejemplo:

```typescript
import { fromEvent } from 'rxjs'
import { mapTo } from 'rxjs/operators'

fromEvent(document, 'click')
  .pipe(
    mapTo('hi there!')
  )
).subscribe(console.log)
```

El resultado, cada vez que se haga click, será:

```
hi there!
```