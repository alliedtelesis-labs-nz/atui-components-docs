import { h, Host, } from "@stencil/core";
import { fetchTranslations } from "../../utils/translation";
import { classlist } from "../../utils/classlist";
import { handleArrowNavigation, handleHomeEndNavigation, } from "../../utils/keyboard-navigation";
const inputVariantsConfig = {
    variants: {
        focused: {
            false: 'ring-active',
            true: 'pointer-events-none',
        },
        disabled: {
            false: 'focus-within:ring-active-glow cursor-pointer bg-input-background',
            true: 'bg-surface-1 !text-disabled pointer-events-none border-none',
        },
        readonly: {
            false: 'focus-within:ring-active-glow',
            true: '!bg-surface-1 !text-foreground cursor-text border-none',
        },
        invalid: {
            false: 'border-input focus-within:border-active-accent focus-within:ring-active-glow',
            true: 'border-error-base focus-within:border-error-base focus-within:ring-error-glow',
        },
    },
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
    },
};
/**
 * @category Form Controls
 * @description A dropdown selection component for choosing single values from a list of options. Features search functionality, keyboard navigation, and accessibility support.
 * @slot - Use this slot to manually add <at-select-option> elements in your HTML. Options added via slot will appear in the dropdown alongside those provided via the 'options' prop. Both methods support search, selection, and display together (options being display before the manually added).
 * @slot input-actions - Place inside the input container to add custom action elements (e.g., icons, buttons) next to the input field.
 */
export class AtSelectComponent {
    /**
     * Value of the currently selected option
     */
    value;
    /**
     * Sets the options in the dropdown
     */
    options;
    /**
     * Label of the input.
     */
    label;
    /**
     * Short description or validation hint if required.
     */
    hint_text;
    /**
     * Optional info icon with detailed tooltip description. Displayed at right of label.
     */
    info_text;
    /**
     * Placeholder for the select.
     */
    placeholder;
    /**
     * Error message visible when input is valid.
     */
    error_text;
    /**
     * Indicated form field is required.
     */
    required;
    /**
     * Set the input to appear valid.
     */
    invalid;
    /**
     * Disable user interaction. Disabled state should be applied via form control.
     */
    disabled;
    /**
     * Set input to readonly mode, allows users to select any active values.
     */
    readonly;
    /**
     * Set the select to appear as a typeahead input.
     */
    typeahead = false;
    /**
     * Set the select to allow clearing the selected value.
     */
    clearable = false;
    /**
     * Close the menu when the user clicks within the menu panel. Default for single selection menus.
     */
    autoclose = true;
    /**
     * Maximum CSS height for the dropdown menu (e.g., '300px', '50vh').
     * Forwarded to the inner <at-menu> via max_height prop. Defaults to 400px.
     */
    menu_max_height = '400px';
    /**
     * Accessible name for the input. Use when a shared column header supplies the
     * visible label and `label` is therefore left unset.
     */
    aria_label;
    /**
     * Accept a value that is not one of the options. The dropdown offers the text
     * entered in the search field as an entry, and the input shows it verbatim.
     */
    allow_custom = false;
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
    max_rendered_options;
    /**
     * Delay in milliseconds before text entered in the search field is applied.
     * Defaults to 0, which applies each keystroke immediately.
     *
     * Set this when `atuiSearchChange` drives a consumer-side fetch, so a request
     * is issued once the operator pauses rather than on every keystroke.
     */
    search_debounce_ms = 0;
    inputEl;
    searchText = '';
    searchDraft = '';
    isSearching = false;
    isOpen = false;
    translations;
    hasMatchingElOptions = false;
    parentWidth;
    filteredOptions = [];
    selectedLabel = '';
    el;
    menuId = `dropdown-${Math.random().toString(36).substring(2, 11)}`;
    inputId = `${this.menuId}-input`;
    menuRef;
    optionEls = [];
    searchInputEl;
    slottedOptionLabels = new Map();
    searchDebounceHandle;
    watchValue(newValue) {
        this.selectedLabel = this.findLabelByValue(newValue);
        this.optionEls.forEach((optionEl) => {
            optionEl.is_active = newValue === optionEl.value;
        });
    }
    watchSearchText(newSearch) {
        const trimmedSearch = newSearch.trim().toLowerCase();
        if (this.options && this.options.length > 0) {
            this.filteredOptions = this.filterOptions(this.options);
            this.hasMatchingElOptions = this.filteredOptions.length > 0;
            return;
        }
        this.filterSlottedContent(trimmedSearch);
        this.hasMatchingElOptions = Array.from(this.optionEls).some((el) => el.style.display !== 'none');
    }
    watchFilterInputs() {
        this.filteredOptions = this.filterOptions(this.options || []);
        if (this.value) {
            this.selectedLabel = this.findLabelByValue(this.value);
        }
    }
    /**
     * Emits an event containing the selected value when changed.
     */
    atuiChange;
    /**
     * Emits the text entered in the search field.
     */
    atuiSearchChange;
    componentWillLoad() {
        this.selectedLabel = this.findLabelByValue(this.value);
        fetchTranslations(this.el).then((translations) => {
            this.translations = translations;
        });
    }
    componentDidLoad() {
        this.setupOptionElements();
        if (this.options && this.options.length > 0) {
            this.filteredOptions = this.options;
        }
        if (this.value) {
            this.selectedLabel = this.findLabelByValue(this.value);
        }
        const parentRect = this.el.getBoundingClientRect();
        this.parentWidth = `${parentRect.width}px`;
    }
    setupOptionElements() {
        this.slottedOptionLabels.clear();
        this.el.querySelectorAll('at-select-option').forEach((option) => {
            const optionEl = option;
            const label = optionEl.label;
            if (label) {
                this.slottedOptionLabels.set(optionEl.value, label);
            }
            optionEl.is_active = this.value === optionEl.value;
            this.addListenerToOptionElements(optionEl);
            this.optionEls.push(optionEl);
        });
    }
    addListenerToOptionElements(optionEl) {
        optionEl.addEventListener('atuiClick', (event) => {
            this.handleChange(event.detail);
        });
        optionEl.addEventListener('mousedown', () => {
            if (!optionEl.disabled) {
                this.handleChange(optionEl.value);
            }
        });
    }
    findLabelByValue(value) {
        if (!value)
            return '';
        if (this.options && this.options.length > 0) {
            const option = this.findOptionByValue(value);
            if (option) {
                return option.label || option.value;
            }
        }
        if (this.slottedOptionLabels.has(value)) {
            return this.slottedOptionLabels.get(value);
        }
        return '';
    }
    filterOptions(options) {
        const trimmedSearch = this.searchText.trim().toLowerCase();
        if (!trimmedSearch)
            return options;
        return options
            .map((option) => {
            if (this.isGroup(option)) {
                const filteredChildren = option.children.filter((child) => {
                    const searchableText = (child.label || child.value).toLowerCase();
                    return (searchableText.includes(trimmedSearch) ||
                        child.value.toLowerCase().includes(trimmedSearch));
                });
                if (filteredChildren.length > 0) {
                    return { ...option, children: filteredChildren };
                }
                return null;
            }
            const searchableText = (option.label || option.value).toLowerCase();
            return searchableText.includes(trimmedSearch) ||
                option.value.toLowerCase().includes(trimmedSearch)
                ? option
                : null;
        })
            .filter(Boolean);
    }
    filterSlottedContent(trimmedSearch) {
        this.optionEls.forEach((optionEl) => {
            const label = optionEl.label || optionEl.value;
            const matches = !trimmedSearch ||
                label.toLowerCase().includes(trimmedSearch) ||
                optionEl.value.toLowerCase().includes(trimmedSearch);
            optionEl.style.display = matches ? '' : 'none';
        });
        this.el.querySelectorAll('at-select-group').forEach((groupEl) => {
            const hasVisibleChild = Array.from(groupEl.querySelectorAll('at-select-option')).some((optionEl) => optionEl.style.display !== 'none');
            groupEl.style.display = hasVisibleChild ? '' : 'none';
        });
    }
    updateIsOpenState(event) {
        const wasOpen = this.isOpen;
        this.isOpen = event.detail;
        const triggerEl = this.el.querySelector('[slot="menu-trigger"]');
        const rect = triggerEl?.getBoundingClientRect();
        if (rect && rect.width > 0) {
            this.parentWidth = `${rect.width}px`;
        }
        // Opening emits twice (the popover's own toggle event, then openMenu's
        // explicit emit). Resetting on the second one races the operator: under
        // load it lands after the first keystrokes, blanking the field while
        // searchText stays applied to the filter.
        if (this.isOpen && !wasOpen && this.typeahead) {
            this.isSearching = false;
            requestAnimationFrame(() => {
                this.searchInputEl?.focus();
                this.searchInputEl?.select();
            });
        }
        else if (!this.isOpen) {
            this.cancelPendingSearch();
            this.searchText = '';
            this.searchDraft = '';
            this.isSearching = false;
        }
    }
    async handleChange(option) {
        if (this.autoclose) {
            await this.menuRef?.closeMenu();
        }
        this.value = option;
        this.selectedLabel = this.findLabelByValue(option);
        this.cancelPendingSearch();
        this.searchText = '';
        this.searchDraft = '';
        this.isSearching = false;
        this.inputEl.focus();
        this.atuiChange.emit(this.value);
    }
    handleClear() {
        this.cancelPendingSearch();
        this.searchDraft = '';
        this.applySearchText('');
        this.searchInputEl?.focus();
    }
    /**
     * The trigger sits outside the menu's key handler, and at-menu treats Enter and
     * Space as toggles, which an editable trigger needs for typing instead.
     */
    async handleKeyDownInput(event) {
        if (!this.isEditable || event.key === 'Escape') {
            return;
        }
        if (event.key === ' ') {
            event.stopPropagation();
            return;
        }
        if (event.key === 'Enter') {
            event.stopPropagation();
            await this.handleKeyDownMenu(event);
            return;
        }
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            if (!this.isOpen) {
                event.preventDefault();
                await this.menuRef?.openMenu();
                return;
            }
            await this.handleKeyDownMenu(event);
        }
    }
    async handleKeyDownMenu(event) {
        if (event.key === 'Enter' && event.target === this.searchInputEl) {
            this.flushPendingSearch();
            const custom = this.hasAnyMatchingOptions
                ? ''
                : this.customEntryText;
            if (custom) {
                event.preventDefault();
                await this.handleChange(custom);
                return;
            }
        }
        if (event.key === 'Enter' || event.key === ' ') {
            if (event.target instanceof HTMLLIElement) {
                event.preventDefault();
                event.target.click();
            }
            return;
        }
        const menuContainer = this.el.querySelector(`ul[id="${this.menuId}"]`);
        if (!menuContainer)
            return;
        handleArrowNavigation(event, menuContainer);
        if (event.target !== this.inputEl) {
            handleHomeEndNavigation(event, menuContainer);
        }
    }
    handleSearchInput(event) {
        const text = event.target.value;
        this.cancelPendingSearch();
        this.searchDraft = text;
        this.isSearching = true;
        if (!this.isOpen) {
            this.menuRef?.openMenu();
        }
        if (!this.search_debounce_ms) {
            this.applySearchText(text);
            return;
        }
        this.searchDebounceHandle = window.setTimeout(() => {
            this.searchDebounceHandle = undefined;
            this.applySearchText(text);
        }, this.search_debounce_ms);
    }
    applySearchText(text) {
        this.searchText = text;
        this.atuiSearchChange.emit(text);
    }
    cancelPendingSearch() {
        if (this.searchDebounceHandle === undefined)
            return;
        window.clearTimeout(this.searchDebounceHandle);
        this.searchDebounceHandle = undefined;
    }
    /** Applies a debounced keystroke early, so Enter acts on what is on screen. */
    flushPendingSearch() {
        if (this.searchDebounceHandle === undefined)
            return;
        this.cancelPendingSearch();
        this.applySearchText(this.searchDraft);
    }
    isGroup(option) {
        return !!(option.children && option.children.length > 0);
    }
    findOptionByValue(value) {
        if (!value || !this.options || this.options.length === 0) {
            return undefined;
        }
        const allOptions = this.options.flatMap((opt) => opt.children ? [opt, ...opt.children] : [opt]);
        return allOptions.find((opt) => opt.value === value);
    }
    get hasMatchingOptions() {
        return this.filteredOptions.length > 0;
    }
    get hasAnyMatchingOptions() {
        if (this.options && this.options.length > 0) {
            return this.hasMatchingOptions;
        }
        return this.hasMatchingElOptions;
    }
    get hasAnyOptions() {
        return ((this.options && this.options.length > 0) ||
            this.optionEls.length > 0);
    }
    /** The trigger doubles as the search field whenever searching is offered. */
    get isEditable() {
        return this.typeahead && !this.readonly && !this.disabled;
    }
    get inputValue() {
        return this.isSearching ? this.searchDraft : this.displayValue;
    }
    get displayValue() {
        if (!this.value) {
            return '';
        }
        const computed = this.selectedLabel || this.findLabelByValue(this.value);
        if (computed) {
            return computed;
        }
        return this.allow_custom ? this.value : '';
    }
    /**
     * The search text when it is a value no option already carries, which is what
     * the custom entry offers. Empty whenever there is nothing to offer.
     */
    get customEntryText() {
        if (!this.allow_custom)
            return '';
        const trimmed = this.searchText.trim();
        if (!trimmed)
            return '';
        const lowered = trimmed.toLowerCase();
        const covers = (value, label) => value.toLowerCase() === lowered || label.toLowerCase() === lowered;
        const inOptions = (this.filteredOptions ?? []).some((option) => {
            const entries = this.isGroup(option) ? option.children : [option];
            return entries.some((entry) => covers(entry.value, entry.label || ''));
        });
        if (inOptions)
            return '';
        const inSlotted = this.optionEls.some((optionEl) => covers(optionEl.value, optionEl.label || ''));
        if (inSlotted)
            return '';
        return trimmed;
    }
    get visibleOptions() {
        const options = this.filteredOptions ?? [];
        if (!this.max_rendered_options || this.max_rendered_options < 0) {
            return options;
        }
        return options.slice(0, this.max_rendered_options);
    }
    get hiddenOptionCount() {
        return (this.filteredOptions?.length ?? 0) - this.visibleOptions.length;
    }
    render() {
        return (h(Host, { key: '0ff96511659892ab9d4d97bcdb9e69dcf5195b34', class: "group/select", onFocusout: async (event) => {
                const relatedTarget = event.relatedTarget;
                if (!relatedTarget || !this.el.contains(relatedTarget)) {
                    setTimeout(async () => {
                        await this.menuRef?.closeMenu();
                    }, 100);
                }
            } }, this.renderLabel(), h("at-menu", { key: 'e34d123263ff88aa6c332eafdf95a9234185d139', ref: (el) => (this.menuRef = el), trigger: "click", align: "start", width: this.parentWidth, max_height: this.menu_max_height, role: "presentation", disabled: this.disabled || this.readonly, onAtuiMenuStateChange: (event) => this.updateIsOpenState(event) }, this.renderInput(), !this.disabled && !this.readonly
            ? this.renderOptions()
            : null), h("div", { key: '053d8665d210d003976858e5dc5be938f9f8c434' }, this.error_text && this.invalid && (h("span", { key: 'e5fc5f8a5701e5011c54763581b981f65c755052', class: "text-error", "data-name": "select-error" }, this.error_text)))));
    }
    renderLabel() {
        return (h("div", { class: "mb-4 flex flex-col empty:hidden" }, h("slot", { name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { for: this.inputId, label: this.label, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { class: "text-muted inline-block text-xs leading-tight", "data-name": "select-hint" }, this.hint_text))));
    }
    renderInput() {
        const getClassname = classlist(`transition[background-color,color,box-shadow] placeholder-text-muted group/select:focus-within:ring w-full cursor-pointer rounded-input border border-solid h-input min-h-input py-input-y px-input-x text-ellipsis outline-0 duration-300 ease-in-out select-none focus:ring focus:z-10`, inputVariantsConfig);
        const hasClearButton = this.clearable && !!this.value && !this.readonly && !this.disabled;
        const hasCaret = !this.readonly && !this.disabled;
        const trailingPaddingClass = hasClearButton
            ? 'pr-48'
            : hasCaret
                ? 'pr-32'
                : '';
        const classname = `${getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        })} ${trailingPaddingClass}`;
        return (h("div", { class: "h-input min-h-input relative flex items-center gap-4", slot: "menu-trigger", "data-name": "select-input-container" }, h("input", { id: this.inputId, class: classname, role: "combobox", "aria-label": this.aria_label ?? undefined, "aria-haspopup": "listbox", "aria-expanded": this.isOpen, "aria-controls": this.menuId, "aria-autocomplete": this.isEditable ? 'list' : undefined, autoComplete: "off", type: "text", readonly: !this.isEditable, "aria-disabled": this.disabled, disabled: this.disabled, placeholder: this.placeholder, value: this.inputValue, "data-name": "select-input", onInput: (event) => this.handleSearchInput(event), onClick: (event) => {
                if (this.isEditable && this.isOpen) {
                    event.stopPropagation();
                }
            }, onKeyDown: (event) => this.handleKeyDownInput(event), ref: (el) => {
                this.inputEl = el;
                this.searchInputEl = el;
            } }), this.clearable &&
            this.value &&
            !this.readonly &&
            !this.disabled && (h("div", { class: "absolute top-2 right-24 z-20" }, h("at-button", { class: "m-2", size: "sm", type: "secondaryText", "aria-label": "Clear selection", onClick: async (event) => {
                event.stopPropagation();
                this.value = '';
                this.handleClear();
                this.atuiChange.emit(this.value);
                if (this.inputEl) {
                    this.inputEl.focus();
                }
            }, "data-name": "select-clear-main" }, h("at-icon", { slot: "icon", name: "cancel" })))), !this.readonly && !this.disabled && (h("div", { class: "bg-surface1 rounded-input absolute right-4 z-20 flex h-full cursor-pointer items-center p-4 select-none", role: "presentation", tabindex: -1 }, h("at-icon", { class: "fill-foreground", name: this.isOpen ? 'caret_up' : 'caret_down', "data-name": "button-icon-right" }), h("slot", { name: "input-actions" })))));
    }
    renderOptions() {
        return (h("div", { class: "contents", onKeyDown: async (event) => {
                await this.handleKeyDownMenu(event);
            } }, h("ul", { class: "contents", id: this.menuId, role: "listbox" }, this.visibleOptions
            ?.map((option) => {
            if (this.isGroup(option)) {
                return this.renderGroupedOption(option);
            }
            return this.renderOption(option);
        })
            .filter(Boolean), h("slot", null), this.customEntryText && (h("at-select-option", { key: "select-custom-entry", "data-name": "select-custom-option", value: this.customEntryText, label: `${this.translations?.ATUI?.USE || 'Use'} "${this.customEntryText}"`, is_active: this.value === this.customEntryText, onAtuiClick: () => this.handleChange(this.customEntryText), onMouseDown: () => this.handleChange(this.customEntryText) }))), this.hiddenOptionCount > 0 && (h("div", { "data-name": "select-more-matches", class: "text-body text-muted bg-input-background w-full px-16 py-8" }, `${this.hiddenOptionCount} ${this.translations?.ATUI
            ?.MORE_MATCHES_REFINE_SEARCH ||
            'more matches. Refine your search.'}`)), this.typeahead &&
            this.searchText &&
            this.hasAnyOptions &&
            !this.hasAnyMatchingOptions && (h("div", { "data-name": "no-results-found", class: "text-body text-muted bg-input-background w-full px-16 py-8" }, this.translations?.ATUI?.NO_RESULTS_FOUND ||
            'No results found')), !this.hasAnyOptions && (h("div", { "data-name": "no-options-available", class: "text-body text-muted bg-input-background w-full px-16 py-8" }, this.translations?.ATUI?.NO_OPTIONS_AVAILABLE ||
            'No options available'))));
    }
    renderOption(option) {
        return (h("at-select-option", { key: option.value, value: option.value, label: option.label || option.value, is_active: this.value === option.value, disabled: option.disabled, onAtuiClick: () => this.handleChange(option.value), onMouseDown: () => {
                if (!option.disabled)
                    this.handleChange(option.value);
            } }));
    }
    renderGroupedOption(option) {
        if (!this.isGroup(option) ||
            !option.children ||
            option.children.length === 0) {
            return null;
        }
        return (h("at-select-group", { key: option.value, label: option.label || option.value }, option.children.map((child) => (h("at-select-option", { value: child.value, label: child.label || child.value, is_active: this.value === child.value, disabled: child.disabled, option_group: true, onAtuiClick: () => this.handleChange(child.value) })))));
    }
    static get is() { return "at-select"; }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Value of the currently selected option"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value"
            },
            "options": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AtISelectOption[]",
                    "resolved": "AtISelectOption[]",
                    "references": {
                        "AtISelectOption": {
                            "location": "import",
                            "path": "../../types/select",
                            "id": "src/types/select.ts::AtISelectOption",
                            "referenceLocation": "AtISelectOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Sets the options in the dropdown"
                },
                "getter": false,
                "setter": false
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Label of the input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "hint_text": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Short description or validation hint if required."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hint_text"
            },
            "info_text": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional info icon with detailed tooltip description. Displayed at right of label."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "info_text"
            },
            "placeholder": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Placeholder for the select."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder"
            },
            "error_text": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Error message visible when input is valid."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error_text"
            },
            "required": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Indicated form field is required."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required"
            },
            "invalid": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the input to appear valid."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "invalid"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Disable user interaction. Disabled state should be applied via form control."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled"
            },
            "readonly": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set input to readonly mode, allows users to select any active values."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "readonly"
            },
            "typeahead": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the select to appear as a typeahead input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "typeahead",
                "defaultValue": "false"
            },
            "clearable": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the select to allow clearing the selected value."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "clearable",
                "defaultValue": "false"
            },
            "autoclose": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Close the menu when the user clicks within the menu panel. Default for single selection menus."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "autoclose",
                "defaultValue": "true"
            },
            "menu_max_height": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Maximum CSS height for the dropdown menu (e.g., '300px', '50vh').\nForwarded to the inner <at-menu> via max_height prop. Defaults to 400px."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "menu_max_height",
                "defaultValue": "'400px'"
            },
            "aria_label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accessible name for the input. Use when a shared column header supplies the\nvisible label and `label` is therefore left unset."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "aria_label"
            },
            "allow_custom": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Accept a value that is not one of the options. The dropdown offers the text\nentered in the search field as an entry, and the input shows it verbatim."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "allow_custom",
                "defaultValue": "false"
            },
            "max_rendered_options": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Maximum number of matching entries rendered at once. Any remainder is\nsummarised in a trailing row. Leave unset to render every match.\n\nThis is a render cap over the options already supplied, not lazy loading:\nthe full list still lives in `options` and the capped entries are reachable\nonly by narrowing the search. The component never fetches; lazy loading is\nthe consumer's responsibility. `atuiSearchChange` is provided as the hook to\nbuild it on."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max_rendered_options"
            },
            "search_debounce_ms": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Delay in milliseconds before text entered in the search field is applied.\nDefaults to 0, which applies each keystroke immediately.\n\nSet this when `atuiSearchChange` drives a consumer-side fetch, so a request\nis issued once the operator pauses rather than on every keystroke."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "search_debounce_ms",
                "defaultValue": "0"
            }
        };
    }
    static get states() {
        return {
            "searchText": {},
            "searchDraft": {},
            "isSearching": {},
            "isOpen": {},
            "translations": {},
            "hasMatchingElOptions": {},
            "parentWidth": {},
            "filteredOptions": {},
            "selectedLabel": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiChange",
                "name": "atuiChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits an event containing the selected value when changed."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "atuiSearchChange",
                "name": "atuiSearchChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits the text entered in the search field."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "watchValue"
            }, {
                "propName": "searchText",
                "methodName": "watchSearchText"
            }, {
                "propName": "options",
                "methodName": "watchFilterInputs"
            }];
    }
}
