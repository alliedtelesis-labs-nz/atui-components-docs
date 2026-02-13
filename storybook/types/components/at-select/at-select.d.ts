import { EventEmitter } from '../../stencil-public-runtime';
import { AtSelectOptionI } from '../../types/select';
/**
 * @category Form Controls
 * @description A dropdown selection component for choosing single values from a list of options. Features search functionality, keyboard navigation, and accessibility support.
 * @slot - Use this slot to manually add <at-select-option> elements in your HTML. Options added via slot will appear in the dropdown alongside those provided via the 'options' prop. Both methods support search, selection, and display together (options being display before the manually added).
 */
export declare class AtSelectComponent {
    /**
     * Value of the currently selected option
     */
    value: string;
    /**
     * Sets the options in the dropdown
     */
    options: AtSelectOptionI[];
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
     * Disable user interaction. Disabled state should be applied via form control.
     */
    disabled?: boolean;
    /**
     * Set input to readonly mode, allows users to select any active values.
     */
    readonly?: boolean;
    /**
     * Set the select to appear as a typeahead input.
     */
    typeahead?: boolean;
    /**
     * Set the select to allow clearing the selected value.
     */
    clearable?: boolean;
    /**
     * Close the menu when the user clicks within the menu panel. Default for single selection menus.
     */
    autoclose?: boolean;
    inputEl: HTMLInputElement;
    searchText: string;
    isOpen: boolean;
    translations: any;
    hasMatchingElOptions: boolean;
    parentWidth: string;
    filteredOptions: AtSelectOptionI[];
    selectedLabel: string;
    selectedLabel: string;
    el: HTMLElement;
    private menuId;
    private menuRef;
    private optionEls;
    private searchInputEl;
    private slottedOptionLabels;
    watchValue(newValue: string): void;
    watchSearchText(newSearch: string): void;
    watchFilterInputs(): void;
    /**
     * Emits an event containing the selected value when changed.
     */
    atuiChange: EventEmitter<string>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private setupOptionElements;
    addListenerToOptionElements(optionEl: HTMLAtSelectOptionElement): void;
    private filterOptions;
    private filterSlottedContent;
    private updateIsOpenState;
    private handleChange;
    private handleClear;
    private handleKeyDownMenu;
    private handleSearchInput;
    private isGroup;
    private findOptionByValue;
    private findLabelByValue;
    get hasMatchingOptions(): boolean;
    get hasAnyMatchingOptions(): boolean;
    get hasAnyOptions(): boolean;
    render(): any;
    renderLabel(): any;
    renderInput(): any;
    renderOptions(): any;
    private renderOption;
    private renderGroupedOption;
}
