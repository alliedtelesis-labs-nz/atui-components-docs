import { EventEmitter } from '../../stencil-public-runtime';
import { AtISelectOption } from '../../types/select';
/**
 * @category Form Controls
 * @description A multi-selection dropdown component for choosing multiple values from a list of options. Features search functionality, keyboard navigation, and accessibility support.
 */
export declare class AtMultiSelectComponent {
    /**
     * Options displayed in the dropdown menu.
     */
    options: AtISelectOption[];
    /**
     * Label of the select.
     */
    label?: string;
    /**
     * Short description or validation hint if required.
     */
    hint_text?: string;
    /**
     * Error text for the select.
     */
    error_text?: string;
    /**
     * Optional info icon with detailed tooltip description. Displayed at right of label.
     */
    info_text?: string;
    /**
     * Placeholder text for the select.
     */
    placeholder?: string;
    /**
     * Indicated form field is required.
     */
    required?: boolean;
    /**
     * Set the select to appear invalid.
     */
    invalid?: boolean;
    /**
     * Set the select to be clearable.
     */
    clearable?: boolean;
    /**
     * Disable user interaction. Disabled state should be applied via form control.
     */
    disabled?: boolean;
    /**
     * Set input to readonly mode, allows users to select any active values.
     */
    readonly?: boolean;
    /**
     * Set the select to enable typeahead search.
     */
    typeahead?: boolean;
    /**
     * The selected items
     */
    value: string[];
    searchText: string;
    isOpen: boolean;
    translations: any;
    parentWidth: string;
    hasMatchingElOptions: boolean;
    filteredOptions: AtISelectOption[];
    el: HTMLElement;
    private menuId;
    private menuRef;
    private optionEls;
    private searchInputEl;
    private slottedOptionLabels;
    watchValue(newValue: string[]): void;
    watchOptions(): void;
    watchSearchText(newSearch: string): void;
    /**
     * Emits an event containing a list of the selected items when the selection changes.
     */
    atuiChange: EventEmitter<string[]>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private filterOptions;
    private filterSlottedContent;
    private setupOptionElements;
    addListenerToOptionElements(optionEl: HTMLAtSelectOptionElement): void;
    private findOptionByValue;
    private findLabelByValue;
    private getSelectedLabels;
    private updateIsOpenState;
    private handleChange;
    private handleClear;
    private handleKeyDownMenu;
    private handleSearchInput;
    private isGroup;
    private handleRemoveChip;
    get hasMatchingOptions(): boolean;
    get hasAnyMatchingOptions(): boolean;
    get hasAnyOptions(): boolean;
    render(): any;
    renderLabel(): any;
    renderInput(): any;
    renderOptions(): any;
    private renderGroupedOption;
    renderOption(option: AtISelectOption): any;
}
