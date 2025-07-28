import { EventEmitter } from '../../stencil-public-runtime';
import { SelectOption } from '../../types/select';
/**
 * @category Form Controls
 * @description A multi-selection dropdown component for choosing multiple values from a list of options. Features search functionality, keyboard navigation, and accessibility support.
 */
export declare class AtuiMultiSelectComponent {
    /**
     * Options displayed in the dropdown menu.
     */
    options: SelectOption[];
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
     * Display selected options outside of input. In readonly mode selected options are displayed as chips within input.
     */
    chip_list?: boolean;
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
    hasMatchingOptions: boolean;
    parentWidth: string;
    el: HTMLElement;
    private inputEl;
    private menuId;
    private menuRef;
    private optionEls;
    /**
     * Emits an event containing a list of the selected items when the selection changes.
     */
    atuiChange: EventEmitter<string[]>;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    private updateIsOpenState;
    private handleChange;
    handleClear(): void;
    private focusOption;
    private handleSearchChange;
    private handleKeyDownInput;
    private handleKeyDownMenu;
    render(): any;
    renderLabel(): any;
    renderInput(): any;
    renderOptions(): any;
    renderOption(option: SelectOption): any;
}
