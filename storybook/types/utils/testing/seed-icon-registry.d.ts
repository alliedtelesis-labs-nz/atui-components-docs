import { type E2EPage } from '@stencil/playwright';
/**
 * Registers stub icons before the app boots, so icon-dependent e2e tests have
 * visible, hoverable icons to interact with. Fixture pages load no icons —
 * consuming apps populate `window.__atIconRegistry` at bootstrap, and an
 * unregistered `at-icon` renders empty at zero size.
 *
 * Call before `page.goto`, or follow with `page.reload()` when the page is
 * already loaded.
 */
export declare const seedIconRegistry: (page: E2EPage, names: string[]) => Promise<void>;
