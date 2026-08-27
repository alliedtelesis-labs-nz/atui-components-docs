import { EventEmitter } from '../../stencil-public-runtime';
import { AtISelectOption } from '../../types/select';
/**
 * @category Form Controls
 * @description A dropdown selection component for choosing single values from a list of options. Features search functionality, keyboard navigation, and accessibility support.
 * @slot - Use this slot to manually add <at-select-option> elements in your HTML. Options added via slot will appear in the dropdown alongside those provided via the 'options' prop. Both methods support search, selection, and display together (options being display before the manually added).
 * @slot input-actions - Place inside the input container to add custom action elements (e.g., icons, buttons) next to the input field.
 */
export declare class AtSelectComponent {
    /**
     * Value of the currently selected option
     */
    value: string;
    /**
     * Sets the options in the dropdown
     */
    options: AtISelectOption[];
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
    /**
     * Maximum CSS height for the dropdown menu (e.g., '300px', '50vh').
     * Forwarded to the inner <at-menu> via max_height prop. Defaults to 400px.
     */
    menu_max_height?: string;
    /**
     * Accessible name for the input. Use when a shared column header supplies the
     * visible label and `label` is therefore left unset.
     */
    aria_label: string;
    /**
     * Accept a value that is not one of the options. The dropdown offers the text
     * entered in the search field as an entry, and the input shows it verbatim.
     */
    allow_custom?: boolean;
    /**
     * Maximum number of matching entries rendered at once. Any remainder is
     * summarised in a trailing row. Leave unset to render every match.
     *
     * This is a render cap over the options already supplied, not lazy loading:
     * the full list still lives in `options` and the capped entries are reachable
     * only by narrowing the search. The component never fetches; lazy loading is
     * the consumer's responsibility. `atuiSearchChange` is provided as the hook to
     * build it on.
     */
    max_rendered_options?: number;
    /**
     * Delay in milliseconds before text entered in the search field is applied.
     * Defaults to 0, which applies each keystroke immediately.
     *
     * Set this when `atuiSearchChange` drives a consumer-side fetch, so a request
     * is issued once the operator pauses rather than on every keystroke.
     */
    search_debounce_ms?: number;
    inputEl: HTMLInputElement;
    searchText: string;
    searchDraft: string;
    isSearching: boolean;
    isOpen: boolean;
    translations: any;
    hasMatchingElOptions: boolean;
    parentWidth: string;
    filteredOptions: AtISelectOption[];
    selectedLabel: string;
    el: HTMLElement;
    private menuId;
    private inputId;
    private menuRef;
    private optionEls;
    private searchInputEl;
    private slottedOptionLabels;
    private searchDebounceHandle;
    watchValue(newValue: string): void;
    watchSearchText(newSearch: string): void;
    watchFilterInputs(): void;
    /**
     * Emits an event containing the selected value when changed.
     */
    atuiChange: EventEmitter<string>;
    /**
     * Emits the text entered in the search field.
     */
    atuiSearchChange: EventEmitter<string>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private setupOptionElements;
    addListenerToOptionElements(optionEl: HTMLAtSelectOptionElement): void;
    private findLabelByValue;
    private filterOptions;
    private filterSlottedContent;
    private updateIsOpenState;
    private handleChange;
    private handleClear;
    /**
     * The trigger sits outside the menu's key handler, and at-menu treats Enter and
     * Space as toggles, which an editable trigger needs for typing instead.
     */
    private handleKeyDownInput;
    private handleKeyDownMenu;
    private handleSearchInput;
    private applySearchText;
    private cancelPendingSearch;
    /** Applies a debounced keystroke early, so Enter acts on what is on screen. */
    private flushPendingSearch;
    private isGroup;
    private findOptionByValue;
    get hasMatchingOptions(): boolean;
    get hasAnyMatchingOptions(): boolean;
    get hasAnyOptions(): boolean;
    /** The trigger doubles as the search field whenever searching is offered. */
    private get isEditable();
    private get inputValue();
    private get displayValue();
    /**
     * The search text when it is a value no option already carries, which is what
     * the custom entry offers. Empty whenever there is nothing to offer.
     */
    private get customEntryText();
    private get visibleOptions();
    private get hiddenOptionCount();
    render(): any;
    renderLabel(): any;
    renderInput(): any;
    renderOptions(): any;
    private renderOption;
    private renderGroupedOption;
}
