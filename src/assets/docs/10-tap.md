# `tap`

Es un operador usado para monitorear el flujo de las emisiones de un observable. 
Si se antepone a otro operador de transformación, este se ejecutará antes de la emisión de este operador; si se pone luego del operador, se ejecutará después del operador.

```typescript
import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

range(1, 3)
  .pipe(
    tap(v => console.log('Antes del map:', v)),
    map(v => v * 2),
    map(v => console.log('Después del map:', v))
  )
  .subscribe(console.log);
```
