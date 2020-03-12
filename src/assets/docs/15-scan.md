# `scan`

Este operador funciona igual que `reduce`, con una diferencia sustancial: _emite en cada iteración el valor del acumulador_. Si tomamos como referencia el ejemplo anterior, podemos ver la diferencia al usar `scan`:

```diff
import { from } from 'rxjs'
import { scan } from 'rxjs/operators'

from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .pipe(
-      reduce((acc: number, val: number) => acc + val, 0)
+			 scan((acc: number, val: number) => acc + val, 0)
    )
    .subscribe(console.log)
```

Si ejecutamos el código tendremos la siguiente salida:

```
1
3
6
10
15
21
28
36
45
55
```

