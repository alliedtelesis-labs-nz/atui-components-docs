import{j as n,M as i,e as s}from"./index-lk0VIocu.js";import{useMDXComponents as a}from"./index-BZ-WbQW8.js";import"./iframe-BLGK-kH0.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const r=`[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

# atui-components-stencil

This is web component library created using [https://stenciljs.com/](stencil).

The web components will work in any JS framework, as if they were HTML elements.

Additionally, we've provided wrappers for a few of the most popular frameworks, that allow the web components to be used as if they were native to that framework. Allowing you to take advantage of their template bindings.

There are demo apps showcasing this library in the \`design-guidelines\` repo.

## Table of Contents

1. [Usage in different frameworks](#paragraph1)
    1. [in Vanilla JS](#vanilla-js)
    2. [in Svelte](#svelte)
    3. [in React](#react)
        1. [with React component wrapper](#using-react-component-wrappers)
        2. [without React component wrapper](#consuming-web-components-in-react)
    4. [in Angular](#angular)
        1. [method 1 for importing components](#components)
        2. [method 2 for importing components (this is how the demo app does it)](#standalone-this-is-how-the-demo-app-does-it)

## Usage

For each of these, you will need the "Material Icons" font and class, which is provided by adding this link to the HTML of your page.

\`\`\`html
<link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
/>
\`\`\`

It can also be imported in a CSS file.

\`\`\`css
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
\`\`\`

### Vanilla JS (no framework)

To use these components with vanilla JS, add 2 script tags to load the components and link the stylesheet:

\`\`\`javascript
<link rel="stylesheet" href="atui-components-stencil/styles" />

<script type="module" src="atui-components-stencil/dist/atui-components-stencil/atui-components-stencil.esm.js"><\/script>
<script nomodule src="atui-components-stencil/dist/atui-components-stencil/atui-components-stencil.js"><\/script>
\`\`\`

Then you will be able to use our components like any HTML element.

\`\`\`html
<atui-button
    label="hello world"
    icon="home"
></atui-button>
\`\`\`

#### Note:

In most cases, when using web components, you will be unable to directly pass object or array props like this:

\`\`\`jsx
<atui-select options={['one', 'two', 'three']}></atui-select>
\`\`\`

Instead, you have to manually set array or object props like this:

\`\`\`html
<script>
    document.querySelector('atui-select').options = ['one', 'two', 'three'];
<\/script>
<atui-select></atui-select>
\`\`\`

This is also the case when using web components in most JavaScript frameworks, but this library includes some
workarounds via the aforementioned framework component wrappers.

### Svelte

Web components will work in any framework, but they're especially nice in Svelte because
you can pass objects and arrays to them, without any workarounds!

The stylesheet can be loaded through the +layout.svelte file:

\`\`\`html
<script lang="ts">
    import 'atui-components-stencil/styles';
    // rest of layout logic.
<\/script>
\`\`\`

On the page you would like to use the components, you must import and define the custom elements in the onMount hook, e.g.

\`\`\`html
<script lang="ts">
  import { tick } from "svelte";
  let isReady = false;
  $effect(() => {
      Promise.all([
          import("atui-components-stencil/atui-select"),
          // ... more components
      ]).then((components) => {
          components.forEach(({ defineCustomElement }) => defineCustomElement());
          tick().then(() => {
              pageReady = true;
          });
      });
  });
<\/script>

{#if isReady}
  <atui-select options={["one", "two", "three"]}></atui-select>
{/if}
\`\`\`

#### Demo Svelte App

You can find a demo Svelte app in \`design-guidelines/atui-components-demo-svelte\` for more examples.

### React

#### Using React Component Wrappers

This library comes with generated React component wrappers for the Stencil web components, allowing you to use our web
components exactly as if they were React components.

You can import the generated React components from \`atui-components-stencil/react\`:

\`\`\`typescript jsx
import { AtuiSelect } from 'atui-components-stencil/react';
\`\`\`

This has the benefit of allowing you to pass object and array props before the component has mounted, which normally can't be done with web components.

Example usage:

\`\`\`typescript jsx
import { AtuiSelect } from "atui-components-stencil/react"

function App() {
    return <AtuiSelect options={["one", "two", "three"]} />;
}
\`\`\`

The stylesheet can be imported by adding the following line to your index.css

\`\`\`css
@import 'atui-components-stencil/styles';
\`\`\`

#### Consuming Web Components in React

Due to the smoother developer experience, it is highly recommended that you use the generated React wrappers if you're going
to use atui-components-stencil within a React application.

However the web-components will work just fine, so if you prefer to use them, this is how:

To import the stylesheet in React, add the following to the top of your index.js (or similar)

\`\`\`typescript jsx
import 'atui-components-stencil/styles';
\`\`\`

Components can then be imported using the following at the top of the file (below imports):

\`\`\`typescript jsx
const components = await Promise.all([
    import('atui-components-stencil/atui-badge'),
]);

components.forEach(({ defineCustomElement }) => defineCustomElement());
\`\`\`

Example usage:

\`\`\`typescript jsx
function App() {
    const selectRef = useRef(null);

    useEffect(() => {
        (selectRef.current! as HTMLAtuiSelectElement).options = ["one", "two", "three"]
    });

    return <atui-select ref={selectRef}/>;
}
\`\`\`

#### Demo React App

You can find a demo React app in \`design-guidelines/atui-components-demo-react\` for more examples.

### Angular

Similar to what we've done with the React component wrappers, this project
generates Angular component wrappers for our web components.

Unlike the React output which is built to the \`/dist\` folder of this library,
the Angular output can be found in \`design-guidelines/angular-workspace\`
along with a demo application.

Global stylesheet is provided at \`atui-components/assets/styles.css\`

Once imported, you can use our web components like Angular components, with Angular binding syntax.

\`app.component.html\`

\`\`\`angular2html
<atui-select [options]="['one', 'two', 'three']"></atui-select>
\`\`\`

#### But there are multiple ways to import components into an Angular app.

Method 1

#### components

Add ComponentLibraryModule to the \`imports\` array of an ngModule to use your components.

e.g. \`app.component.ts\`

\`\`\`ts
import { Component } from '@angular/core';
import { ComponentLibraryModule } from 'component-library';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ComponentLibraryModule],
    templateUrl: './app.component.html',
})
export class AppComponent {}
\`\`\`

Method 2

#### standalone

This is how the demo app imports the components.

\`app.config.ts\`

\`\`\`ts
import {
    ApplicationConfig,
    importProvidersFrom,
    provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { ComponentLibraryModule } from 'atui-components';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        importProvidersFrom(ComponentLibraryModule),
    ],
};
\`\`\`

\`main.ts\`

\`\`\`ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err),
);
\`\`\`
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Read Me"}),`
`,n.jsx(s,{children:r})]})}function h(e={}){const{wrapper:t}={...a(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{h as default};
