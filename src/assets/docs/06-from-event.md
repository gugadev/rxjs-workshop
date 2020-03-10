# fromEvent

Es un utilitario de `RxJs` que nos permite subscribinos a cualquier evento sobre un determinado elemento.

Para usarlo, debemos importar `fromEvent`:

````typescript
import { fromEvent } from 'rxjs';
````

Para utilizarlo necesitamos pasarle dos parámetros:

1. El elemento de donde se escuchará el evento.
2. El nombre del evento

````typescript
import { fromEvent } from 'rxjs';

const click$ = fromEvent(document,'click')
click$.subscribe(() => console.log('Click!'))
````

Ten en cuenta que si usas  _TypeScript_ es importante que tengas encuenta el tipo de evento.
Por ejemplo; si quieres subscribirte al evento `keyup` y quieres obtener la propiedad `key`,
debes especificar que ese `fromEvent` manejará un evento de tipo `KeyboardEvent`.

````typescript
import { fromEvent } from 'rxjs';

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
keyup$.subscribe(e => console.log(e.key))
````
