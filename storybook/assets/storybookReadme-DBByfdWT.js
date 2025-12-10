import{j as n,M as o,e as s}from"./index-68h-xc-u.js";import{useMDXComponents as a}from"./index-DEHCH0ZK.js";import"./iframe-Ds37EtMU.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const l=`[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMUokeWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

# ATUI Components Stencil (v0.0.34)

ATUI Components is a comprehensive web component library built with [Stencil](https://stenciljs.com/), designed to work seamlessly across all modern web frameworks.

## Documentation

- **[Angular Demo](https://alliedtelesis-labs-nz.github.io/atui-components-docs/demo-angular/)** - Full featured Angular application
- **[Nuxt Demo](../examples/nuxt/)** - Local Nuxt.js demo with SSR support (see [setup guide](../examples/nuxt/README.md))
- **[Storybook Documentation](https://alliedtelesis-labs-nz.github.io/atui-components-docs/storybook/)** - Interactive component documentation
- **[Github Docs](https://github.com/alliedtelesis-labs-nz/atui-components)** - Developer guidelines

## Quick Links

- [Angular Integration](#angular) (Recommended)
- [React Integration](#react)
- [Vue/Nuxt Integration](#vue)
- [Svelte Integration](#svelte)
- [Vanilla JS Integration](#vanilla-js)

## Framework Examples

Example applications are available in the \`/examples\` directory:

- **Angular**: \`/examples/angular\` - Complete Angular application with routing and forms
- **React**: \`/examples/react\` - React application with hooks and state management
- **Vue**: \`/examples/vue\` - Vue 3 composition API examples
- **Nuxt**: \`/examples/nuxt\` - Server-side rendered Nuxt application
- **Svelte**: \`/examples/svelte\` - SvelteKit application

## Development

### Quick Setup

\`\`\`bash
# Install dependencies
yarn install

# Set up build environment (recommended)
source ../scripts/setup-build-env.sh

# Start development server
yarn dev

# Fast development builds (see BUILD_OPTIMIZATION.md)
yarn build:dev      # ~18s - Angular development
yarn build:minimal  # ~12s - Component validation
\`\`\`

### Build Performance

For faster development builds, see [BUILD_OPTIMIZATION.md](../documentation/development-guidelines/BUILD_OPTIMIZATION.md) which provides:

- **Development builds**: 42% faster than production builds
- **Minimal builds**: 61% faster for component validation
- **Angular workflow**: Optimized Stencil + Angular build pipeline
- **Component-specific builds**: Build only what you need

### Standard Commands

\`\`\`bash
# Build components (full production build)
yarn build

# Run tests
yarn test

# Start Storybook
yarn storybook
\`\`\`

## Installation

### Styles

Some components require the **Material Icons** font to display icons. Add this to your HTML head or import in CSS:

\`\`\`html
<link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
/>
\`\`\`

Or in CSS:

\`\`\`css
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
\`\`\`

---

## Angular

The aAngular output wrappr provides full TypeScript support and Angular-specific optimizations.

### Installation

\`\`\`bash
npm install @alliedtelesis-labs-nz/atui-components-angular
\`\`\`

### Setup

Import components directly in your standalone components:

\`\`\`typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
    AtuiButton,
    AtuiSelect,
    AtuiTable,
} from '@alliedtelesis-labs-nz/atui-components-angular';

@Component({
    selector: 'app-example',
    standalone: true,
    imports: [AtuiButton, AtuiSelect, AtuiTable],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './example.component.html',
})
export class ExampleComponent {
    // Component logic here
}
\`\`\`

### Usage

Use components directly in your templates with full Angular binding support:

\`\`\`html
<atui-select
    [options]="['Option 1', 'Option 2', 'Option 3']"
    (atuiChange)="onSelectionChange($event)"
>
</atui-select>

<atui-button
    label="Click Me"
    icon="home"
    (atuiClick)="handleClick()"
>
</atui-button>

<atui-table
    [data]="tableData"
    [col_defs]="columns"
>
</atui-table>
\`\`\`

### Component Library Features

- **Full TypeScript support** with proper type definitions
- **Angular-specific bindings** for two-way data binding
- **Event handling** with Angular's standard event syntax
- **Reactive forms support** for form controls
- **Tree shaking** for optimal bundle sizes

**📋 See demos for comprehensive examples: [Angular Demo](https://alliedtelesis-labs-nz.github.io/atui-components-docs/demo-angular/) | [Nuxt Demo](../examples/nuxt/)**

---

## React

React integration provides component wrappers for seamless integration with React applications.

### Installation

\`\`\`bash
npm install @alliedtelesis-labs-nz/atui-components-stencil
\`\`\`

### Setup

Import components and styles:

\`\`\`typescript
import 'atui-components-stencil/styles';
import {
    AtuiSelect,
    AtuiButton,
    AtuiTable,
} from 'atui-components-stencil/react';
\`\`\`

### Usage

\`\`\`jsx
function App() {
    const [selected, setSelected] = useState('');

    return (
        <div>
            <AtuiSelect
                options={['Option 1', 'Option 2', 'Option 3']}
                onAtuiChange={(e) => setSelected(e.detail)}
            />

            <AtuiButton
                label="Click Me"
                icon="home"
                onAtuiClick={() => console.log('clicked')}
            />
        </div>
    );
}
\`\`\`

---

## Vue

Vue integration supports both Vue 3 and Nuxt applications.

### Installation

\`\`\`bash
npm install @alliedtelesis-labs-nz/atui-components-vue
\`\`\`

### Setup (Vue 3)

\`\`\`typescript
import { createApp } from 'vue';
import AtuiComponents from '@alliedtelesis-labs-nz/atui-components-vue';
import '@alliedtelesis-labs-nz/atui-components-stencil/styles';

const app = createApp(App);
app.use(AtuiComponents);
\`\`\`

### Usage

\`\`\`vue
<template>
    <div>
        <atui-select
            :options="['Option 1', 'Option 2', 'Option 3']"
            @atuiChange="handleChange"
        />

        <atui-button
            label="Click Me"
            icon="home"
            @atuiClick="handleClick"
        />
    </div>
</template>
\`\`\`

---

## Svelte

Svelte has excellent web component support with easy object/array passing, making it particularly well-suited for our component library.

### Installation

\`\`\`bash
npm install @alliedtelesis-labs-nz/atui-components-stencil
\`\`\`

### Setup

Import styles in your \`+layout.svelte\`:

\`\`\`html
<script lang="ts">
    import 'atui-components-stencil/styles';
<\/script>
\`\`\`

### Usage

Web components must be dynamically imported and registered using \`$effect\` to ensure they're available before the DOM renders. This prevents "unknown element" errors and ensures proper component initialization:

\`\`\`html
<script lang="ts">
  import { tick } from "svelte";

  let isReady = false;

  // $effect runs after component mount and handles async component registration
  $effect(() => {
    Promise.all([
      import("atui-components-stencil/atui-select"),
      import("atui-components-stencil/atui-button")
    ]).then((components) => {
      // Register each component as a custom element
      components.forEach(({ defineCustomElement }) => defineCustomElement());
      // Wait for Svelte to process the DOM changes
      tick().then(() => { isReady = true; });
    });
  });
<\/script>

<!-- Only render components after they're properly registered -->
{#if isReady}
  <atui-select options={["Option 1", "Option 2", "Option 3"]} />
  <atui-button label="Click Me" icon="home" />
{/if}
\`\`\`

**Why \`$effect\` is required:**

- **Timing**: Web components must be registered before they appear in the DOM
- **SSR compatibility**: Prevents server-side rendering issues with undefined custom elements
- **Error prevention**: Avoids "unknown element" warnings and ensures proper component behavior
- **Async handling**: Manages the asynchronous nature of dynamic imports and component registration

## Vanilla JS

For projects without a framework, use web components directly.

### Installation

\`\`\`bash
npm install @alliedtelesis-labs-nz/atui-components-stencil
\`\`\`

### Setup

\`\`\`html
<link
    rel="stylesheet"
    href="atui-components-stencil/styles"
/>
<script
    type="module"
    src="atui-components-stencil/dist/atui-components-stencil/atui-components-stencil.esm.js"
><\/script>
<script
    nomodule
    src="atui-components-stencil/dist/atui-components-stencil/atui-components-stencil.js"
><\/script>
\`\`\`

### Usage

\`\`\`html
<atui-button
    label="Hello World"
    icon="home"
></atui-button>

<script>
    // For complex props (objects/arrays), set via JavaScript
    const select = document.querySelector('atui-select');
    select.options = ['Option 1', 'Option 2', 'Option 3'];
<\/script>
<atui-select></atui-select>
\`\`\`

## 📄 License

See LICENSE file for details.
`;function i(e){return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Read Me"}),`
`,n.jsx(s,{children:l})]})}function d(e={}){const{wrapper:t}={...a(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(i,{...e})}):i()}export{d as default};
