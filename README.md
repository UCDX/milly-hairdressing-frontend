# MillyHairdressingFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Componentes

Este proyecto diferencía entre dos tipos de compoenentes: **componentes que son vistas** y **componentes funcionales**. 

Los **componentes que son vistas** se utilizan para desplegar contenido en la pantalla. Normalmente son estáticos y no proveen mecanismos para
que otros componentes interactúen con ellos, aúnque los componentes que son vistas sí pueden interactuar con otros componentes que ofrezcan
alguna funcionalidad.

Los **componentes funcionales** suelen suelen ser dinámicos y proveen mecanismos para que otros componentes los puedan usar. Esta clase de
componentes acepta entradas y puede producir salidas. Esta característica hace que estos componentes puedan ser tratados como funciones,
lo cual abre la posibilidad de que se puedan reutilizar en diferentes escenarios si el componente es lo suficientemente general.

### Componente vista

Para crear un componente de este estilo se usa el comando:

```bash
ng generate component modules/views/[comp-name] --export
```

donde `[comp-name]` es el nombre que le quieras asignar al componente. Recuerda, este es una vista. Dale un nombre adecuado.

El componente se abrá creado en: `src/app/modules/views/[comp-name]`. Ahí puedes editar su código fuente.

Para que este componente se despliegue en una ruta, por ejemplo `/test`, debes editar el archivo `src/app/modules/routing/app-routing.module.ts`.
En este archivo se registran las rutas y los componentes asociados a esas rutas.

Para registrar una ruta primero hay que importar el componente que se quiere usar como vista, siguiente el siguiente formato:
`import { TestComponent } from '../views/test/test.component';`. Luego hay que agregar un nuevo elemento al arreglo `routes`, siguiendo el siguiente
formato: `{ path: 'test', component: TestComponent }`.

Es posible anidar rutas. Se puede tener por ejemplo: `/test/example1`. Para ello se sigue el siguiente formato:

```ts
{ path: 'test', component: TestComponent, children: [
    { path: 'example1', component: Example1Component }
  ]
}
```

Hay casos en los que la ruta padre (en este caso `test`) puede no tener un componente, y sólo tener sus rutas hijas.

Más información sobre las rutas en [este enlace](https://angular.io/guide/router).

### Componente funcional

Para crear un componente de este estilo se usa el comando:

```bash
ng generate component modules/components/[comp-name] --export
```

donde `[comp-name]` es el nombre que le quieras asignar al componente. Recuerda, normalmente estos componentes se reutilizan en varios casos.
Dale un nombre adecuado.

El componente se abrá creado en: `src/app/modules/components/[comp-name]`. Ahí puedes editar su código fuente.

Considera a este tipo de componentes como funciones. Es recomendable que los generalices haciendo que tengan entradas y salidad.

Ejemplo de cómo crear un componente funcional en [este enlace](https://docs.google.com/document/d/1nCE7S8wKRDL0pTACLO_Ho6Sq7JrnC-AiTQiE84MaCD0/edit?usp=sharing).
Ingnora la parte de creación del componente explicada en el archivo referenciado, pues eso ya lo cubrimos arriba en el archivo actual (este readme).

## Angular Material

Angular Material es una biblioteca para Angular que provee componentes funcionales con el estilo de **material design**, el cual es el
estilo de diseño de Google. Para revisar los componentes disponibles puedes ir a [este enlace](https://material.angular.io/components/categories).

Los componentes de Angular Material vienen en módulos que tienen que ser incluídos en esta aplicación para poder ser usado.
Para incluir un módulo de Angular Material que no ha sido incluído ya, debes ir al archivo `src/app/modules/material/material.module.ts`.
En este archivo debes hacer el *import* correspondiente al componente que se quiere incluir. Posteriormente debes agregar el módulo
importado al arreglo **modules**.

En la documentación de Angular Material, en la sección de cada componente, habrá tres pestañas: **Overview**, **API** y **Examples**.
En la pestaña de **Overview** se mostrarán ejemplos básicos e información general del componente. En la pestaña de **API** se mostrará cual es el
*import* correspondiente a ese componente, y más información sobre como usar dicho componente. En la pestaña de **Examples** se mostrará
diferentes formas de usar ese componentes y el código fuente correspondiente.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
