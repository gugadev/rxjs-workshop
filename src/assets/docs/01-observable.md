# Observable

Representa un flujo de datos que serán emitidos en forma de cola. La manera de emitir un valor o evento es mediante un objeto Subscriber que es proporcionado por el constructor de Oservable.

```typescript
const obs$ = new Observable<string>((sub: Subscriber<string>) => {

})
```

Este objeto subscribe tiene tres métodos importantes:

- `next`: se usa para emitir un nuevo evento.
- `error`: se usa para emitir un error.
- `complete`: se usa para notificar que ya no se enviarán más eventos.

```typescript
const obs$ = new Observable<string>((sub: Subscriber<string>) => {
  sub.next('Hello')
  sub.next('World')
  sub.complete()
  sub.error(new Error('This message will never be sent'))
})
```

Un observable es una fuente de datos y como tal, debemos de **consumirla**. La manera de hacer esto es mediante `subscribe`.

Hay varias formas de subscribirse a un `Observable`. Una forma es crear un objeto que implemente los métodos `next`, `complete` y `error`.

```typescript
const observer: Observer<string> = {
  next(value: string) {
    console.log('Next value:', value)
  },
  complete() {
    console.log('No more values')
  },
  error(e: Error) {
    console.warn('Something went wrong:', e.message)  
  }
}

obs$.subscribe(observer) // start the flow
```
