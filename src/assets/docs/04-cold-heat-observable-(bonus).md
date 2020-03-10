## Observable y Subject

Existen dos tipos de `Observable`: _cold_ y _heat_. ¿Cuál es la diferencia?

La diferencia es que un _cold Observable_ emite valores dentro de su propio cuerpo en el momento de la creación; es decir, por medio del `Subscriber`:

```typescript
const obs$ = new Observable<number>((sub: Subscriber<number>) => {
  sub.next(1)
  sub.next(2)
})
```

Mientras que un _Heat Observable_ emite valores luego de la creación del mismo. Y para esto es útil `Subject` y sus variantes.

```typescript
const obs$ = new Observable<number>((sub: Subscriber<number>) => {
  sub.next(1)
  sub.next(2)
})
const sub$ = new Subject<number>()
const subjectSub = $obs.subscribe(sub$)

$sub.next(3)
$sub.complete()
```

Dado que `Subject` implementa la interface `Observer` al igual que `Subscriber` se puede hacer uso de dichos métodos.