import { type E2EPage } from '@stencil/playwright';
/**
 * Opens the window in which the custom-elements build has not yet armed a
 * component's `@Watch` handlers, and keeps it open until `armWatchers` runs.
 * Call before `goto`; the fixture must load the component from
 * `dist-components` (the custom-elements build), not the lazy loader.
 */
export declare const holdWatcherArming: (page: E2EPage) => Promise<import("playwright-core").Disposable>;
export declare const armWatchers: (page: E2EPage) => Promise<any>;
