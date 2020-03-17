#`takeWhile`

Este operador emitirá valores mientras una condición se cumpla. Caso contrario, completará el observable.

Supongamos que queremos subscribirnos a un stream del evento `keyup` mientras que la tecla presionada no sea `Enter`, `Escape` o `Tab`:

```typescript
import { fromEvent, Observer } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const obs: Observer = {
  next(val: string) {
    console.log('Value:', val);
  },
  complete() {
    console.log('Complete');
  }
};

const notAllowedKeys = ['Enter', 'Escape', 'Tab'];
fromEvent<KeyboardEvent>(document, 'keyup').pipe(
	map(e => e.key),
  takeWhile(key => !notAllowedKeys.includes(key))
).subscribe(obs);
```

Si ejecutamos el código y presionamos <kbd>a</kbd>, <kbd>t</kbd>, <kbd>p</kbd>, <kbd>Enter</kbd>, obtendremos:

```
Value: a
Value: t
Value: p
Complete
```

## `inclusive`

El operador `takeWhile` admite también un segundo parámetro el cual es un boolean que indica si también queremos emitir el valor que ha roto la condición. Es decir, si le pasamos true:

```diff
-takeWhile(key => !notAllowedKeys.includes(key))
+takeWhile(key => !notAllowedKeys.includes(key), true)
```

Obtendremos la siguiente salida:

```
Value: a
Value: t
Value: p
Value: Enter
Complete
```

