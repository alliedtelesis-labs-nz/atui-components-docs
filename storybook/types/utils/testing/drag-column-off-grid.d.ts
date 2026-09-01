import { type E2EPage } from '@stencil/playwright';
/**
 * Reproduces the user gesture: pick a column header up and drop it clear of the grid,
 * which is what makes AG Grid hide the column on its own.
 */
export declare function dragColumnOffGrid(page: E2EPage, field: string): Promise<void>;
