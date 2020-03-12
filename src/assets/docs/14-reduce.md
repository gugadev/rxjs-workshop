# `reduce`

Operador que nos permite transformar una serie de valores emitidos por un observable 
y además conjugarlo con un acumulador. Este operador es muy útil para operaciones numéricas.

Es importante aclarar que `reduce` no emite un valor hacia la subscripción hasta que
el observable fuente no haya sido completado. Veamos un ejemplo.

Supongamos que tenemos un observable que está emitiendo valores entre 1 y 10. Queremos como
salida la suma de todos esos valores.

```typescript
import { from } from 'rxjs'
import { reduce } from 'rxjs/operators'

from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .pipe(
      reduce((acc: number, val: number) => acc + val, 0)
    )
    .subscribe(console.log)
```

> Importante notar que el segundo parámetro de `reduce` es el valor inicial que tendrá `acc`.

Si nos fijamos, solo obtendremos una salida en lugar de las 10 que realiza `from`:

```
55
```

¿Qué tal si quisiésemos emitir el valor del acumulador actual en cada iteración? Para eso
existe el operador `scan`.
