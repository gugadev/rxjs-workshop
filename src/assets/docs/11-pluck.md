# `pluck`

El operador `pluck` permite seleccionar solo una parte de un objeto proveniente de un `Observable`. Por ejemplo, imaginemos que queremos obtener el nombre de cada tecla que se pulsa. En este caso podemos usar `pluck` para seleccionar la propiedad `key`de `KeyboardEvent`:

```typescript
import { fromEvent } from 'rxjs'
import { pluck } from 'rxjs/operators'

fromEvent<KeyboardEvent>(document, 'keyup')
  .pipe(
    pluck('key')
  )
).subscribe(console.log)
```

Este operador también nos permite seleccionar una propiedad que está anidada. Por ejemplo, imaginemos que tenemos el siguiente objeto:

```typescript
interface HeroHability {
  life: number
  strength: number
}
interface Hero {
  name: string
  powers: string[]
  hability: HeroHability
}
const hero: Hero = {
  name: 'Superman',
  powers: ['Fly', 'Frozen breath', 'X laser vision', 'Super strength', 'Super velocity'],
  hability: {
    life: 1000000,
    strength: 1000000
  }
}
```

Del cual, una vez emitido por nuestro observable, queremos obtener la fuerza (`strength`). Entonces, podemos hacer:

```typescript
of(Hero)
  .pipe(
    pluck('hability', 'strength')
  )
  .subscribe(console.log)
```

Lo que nos dará como salida:

```
1000000
```