import { EventEmitter } from '../../stencil-public-runtime';
import { AtISelectOption } from '../../types/select';
export type AtMultiSelectSelectionDisplay = 'chips' | 'count';
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
     * Maximum CSS height for the dropdown menu (e.g., '300px', '50vh').
     * Forwarded to the inner <at-menu> via max_height prop.
     */
    menu_max_height?: string;
    /**
     * How the trigger displays the current selection.
     *
     * `chips` renders the selected values as removable chips inside the trigger,
     * which grows with the selection - the right behaviour for a form field.
     * `count` renders the placeholder plus a badge carrying the number selected,
     * at a fixed height however much is selected. Use it in a filter bar, paired
     * with an external `at-chip-list` for the selection itself, so the bar does
     * not reflow as the user picks. In `count` the placeholder carries the field
     * name inside the trigger, so the outside label and hint text are not
     * rendered - set `label` anyway and it becomes the control's accessible name.
     * The badge says how many, never which, so `count` belongs on a surface that
     * displays the selection somewhere else - a chip row of its own, or a table's.
     */
    selection_display?: AtMultiSelectSelectionDisplay;
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
    private inputId;
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
    private renderChipSelection;
    private renderCountSelection;
    renderOptions(): any;
    private renderGroupedOption;
    renderOption(option: AtISelectOption): any;
}
