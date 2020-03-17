# `take`

Este operador permite tomar solo las primeras `x` emisiones de un observable. Una vez que se han tomado, el observable se completa.

Veamos un ejemplo:

```typescript
import { range, Observer } from 'rxjs';
import { take } from 'rxjs/operators';

const observer: Observer = {
  next(value: number) {
    console.log('Value:', value);
  },
  complete() {
    console.log('Completed');
  }
};

range(1, 5).pipe(
	take(3)
).subscribe(console.log);
```

Si ejecutamos el código,  veremos la siguiente salida:

```
Value: 1
Value: 2
Value: 3
Completed
```

