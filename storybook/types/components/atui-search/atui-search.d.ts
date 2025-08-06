import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @category Form Controls
 * @description A search component for filtering data.
 */
export declare class AtuiSearch {
    /**
     * Label text above the search bar.
     */
    label?: string;
    /**
     * Hint text for the input, appears below the search bar.
     */
    hint_text?: string;
    /**
     * Tooltip description.
     */
    info_text?: string;
    /**
     * Placeholder text inside the search component.
     */
    placeholder?: string;
    /**
     * String content of the search.
     */
    model?: string;
    searchEl: HTMLInputElement;
    /**
     * Emits an event when the input is changed. Used by atui-table.
     */
    atuiChange: EventEmitter;
    onChangeFn(): void;
    clearFn(): void;
    render(): any;
}
