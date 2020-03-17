# `distinctUntilKeyChanged`

Este operador nos permite emitir valores hasta que un valor se repita (según la propiedad especificada) con su antecesor. Tomemos como ejemplo el código anterior:

````diff
-import { distinctUntilChanged } from 'rxjs/operators';
+import { distinctUntilChanged } from 'rxjs/operators';


from(heros).pipe(
-  distinctUntilChanged((prev, current) => prev.name === current.name)
+  distinctUntilChanged('name')
).subscribe(obs);
````

Si ejecutamos el código anterior obtendremos lo siguiente:

````
Next: { name: Superman, universe: 'DC' }
Next: { name: Batman, universe: 'DC' }
Next: { name: Spiderman, universe: 'Marvel' }
Complete
````
