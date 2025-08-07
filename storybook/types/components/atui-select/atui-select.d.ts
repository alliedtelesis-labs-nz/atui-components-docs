import { EventEmitter } from '../../stencil-public-runtime';
import { SelectOption } from '../../types/select';
/**
 * @category Form Controls
 * @description A dropdown selection component for choosing single values from a list of options. Features search functionality, keyboard navigation, and accessibility support.
 */
export declare class AtuiSelectComponent {
    /**
     * Value of the currently selected option
     */
    value: string;
    /**
     * Sets the options in the dropdown
     */
    options: SelectOption[];
    /**
     * Label of the input.
     */
    label?: string;
    /**
     * Short description or validation hint if required.
     */
    hint_text?: string;
    /**
     * Optional info icon with detailed tooltip description. Displayed at right of label.
     */
    info_text?: string;
    /**
     * Placeholder for the select.
     */
    placeholder?: string;
    /**
     * Error message visible when input is valid.
     */
    error_text?: string;
    /**
     * Indicated form field is required.
     */
    required?: boolean;
    /**
     * Set the input to appear valid.
     */
    invalid?: boolean;
    /**
     * Set input to readonly mode, allows users to select any active values.
     */
    readonly?: boolean;
    /**
     * Disable user interaction. Disabled state should be applied via form control.
     */
    disabled?: boolean;
    /**
     * Set the select input to be clearable. Only enabled on typeahead selects.
     */
    clearable?: boolean;
    /**
     * Set the select to appear as a typeahead input.
     */
    typeahead?: boolean;
    /**
     * Close the menu when the user clicks within the menu panel. Default for single selection menus.
     */
    autoclose?: boolean;
    inputEl: HTMLInputElement;
    searchText: string;
    isOpen: boolean;
    translations: any;
    hasMatchingOptions: boolean;
    parentWidth: string;
    el: HTMLElement;
    private menuId;
    private menuRef;
    private optionEls;
    private searchInputEl;
    /**
     * Emits an event containing the selected value when changed.
     */
    atuiChange: EventEmitter<string>;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    private updateIsOpenState;
    private handleChange;
    private handleClear;
    private handleKeyDownMenu;
    private handleSearchInput;
    render(): any;
    renderLabel(): any;
    renderInput(): any;
    renderOptions(): any;
    renderOption(option: SelectOption): any;
}
