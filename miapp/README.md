# miapp – NativeScript + Angular (drawer navigation)

Proyecto basado en el template
[template-drawer-navigation-ng](https://github.com/NativeScript/template-drawer-navigation-ng).

## Requisitos implementados
1. Basado en el template drawer-navigation-ng (enrutador modular por features + side drawer).
2. Dos componentes nuevos: `ListaComponent` y `DetalleComponent` (`src/app/productos`).
3. Nuevo módulo de feature: `ProductosModule`.
4. Submódulo de ruteo propio: `ProductosRoutingModule`.
5. Navegación integrada al side drawer (`app.component.html` y `app-routing.module.ts`).
6. Service nuevo `ProductosService` (`providedIn: 'root'`), inyectado por DI.
7. `*ngFor` en `lista.component.html`.
8. CSS por plataforma: `lista.component.css`, `lista.component.android.css`, `lista.component.ios.css`.
9. Ícono personalizado en `App_Resources` (launcher Android/iOS e `icono_productos`).
10. Asignación solo en Android: `if (isAndroid) { this.mensajePlataforma = ... }` en `lista.component.ts`.

## Cómo ejecutar
```bash
npm install
ns preview        # o: ns run android
```
