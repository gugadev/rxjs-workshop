#  `first`

Este operador toma la primera emisión que cumpla con la condición y luego completa el observable.

Veamos un ejemplo. Supongamos que quiero que la primera vez que se pulse sobre una caja de texto el `enter` ejecute un validación.

```typescript
import { fromEvent, Observer } from 'rxjs';
import { map, first } from 'rxjs/operators';

const input = document.getElementById('txtdni') as HTMLInputElement;
const validateDNI = () => /[0-9]{8}/.test(input.value);

const obs: Observer<string> = {
  complete() {
    validateDNI();
  }
};

fromEvent<KeyboardEvent>(input, 'keyup').pipe(
  map(e => e.key),
  first(key => key === 'Enter')
).subscribe(obs);
```

