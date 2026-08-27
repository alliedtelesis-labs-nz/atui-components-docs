import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-lWb16Ay7.js';
import { f as fetchTranslations } from './translation-3Gn82Eck.js';
import { c as classlist } from './classlist-COG8_R0C.js';
import { h as handleArrowNavigation, a as handleHomeEndNavigation } from './keyboard-navigation-CF3ljWUs.js';

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
const AtSelectComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
        this.atuiSearchChange = createEvent(this, "atuiSearchChange", 7);
    }
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
    get el() { return getElement(this); }
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
        return (h(Host, { key: '04f669a63437e64b76cdb6b8634c58922286b8ec', class: "group/select", onFocusout: async (event) => {
                const relatedTarget = event.relatedTarget;
                if (!relatedTarget || !this.el.contains(relatedTarget)) {
                    setTimeout(async () => {
                        await this.menuRef?.closeMenu();
                    }, 100);
                }
            } }, this.renderLabel(), h("at-menu", { key: '9c158076a85eb4899a734d817529102f9e31c31b', ref: (el) => (this.menuRef = el), trigger: "click", align: "start", width: this.parentWidth, max_height: this.menu_max_height, role: "presentation", disabled: this.disabled || this.readonly, onAtuiMenuStateChange: (event) => this.updateIsOpenState(event) }, this.renderInput(), !this.disabled && !this.readonly
            ? this.renderOptions()
            : null), h("div", { key: '86f3b7a708f4839be0b6d35663418a58d1c655ff' }, this.error_text && this.invalid && (h("span", { key: '6737b9c9c4d15492a4004b4b35ca904fc07878bc', class: "text-error", "data-name": "select-error" }, this.error_text)))));
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
    static get watchers() { return {
        "value": [{
                "watchValue": 0
            }],
        "searchText": [{
                "watchSearchText": 0
            }],
        "options": [{
                "watchFilterInputs": 0
            }]
    }; }
};

const AtSelectGroupComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Label for the group displayed as the group title
     */
    label;
    render() {
        return (h(Host, { key: '5d38e42118368dc356f8fb28b7748328d0e98bb4', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: 'f44579c2d2ad3ca3ef0ff1369abaa09c26ba5aef', role: "group", "aria-labelledby": this.label }, h("li", { key: '29cc954ce230fe8022ffb9f00c871d63b443c828', id: this.label, class: "text-muted border-muted border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: '74e611c40215e6873d3dc7c1277d7070bf383f7c' }))));
    }
};

const optionVariantsConfig = {
    variants: {
        active: {
            true: 'bg-active-background hover:bg-active-background text-active-foreground',
            false: 'hover:bg-surface-overlay/10 focus-within:bg-surface-overlay/10',
        },
        group_option: {
            true: 'px-16 ',
            false: null,
        },
    },
};
const AtSelectOptionComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiClick = createEvent(this, "atuiClick", 7);
    }
    /**
     * Value of the select option
     */
    value;
    /**
     * Displayed text value (optional) if not provided the value will be used as a fallback
     */
    label;
    /**
     * Indicates if the option is part of an option group
     */
    option_group = false;
    /**
     * Will apply the active styling to the select option
     */
    is_active = false;
    /**
     *  Will disable interaction if set
     */
    disabled = false;
    /**
     * Emitted when the select option is clicked
     */
    atuiClick;
    handleClick() {
        this.atuiClick.emit(this.value);
    }
    render() {
        const getOptionClassname = classlist('transition[background-color,color,box-shadow] text-body focus:ring-active-glow flex w-full min-w-0 items-center rounded-menu-item p-8 font-normal duration-300 ease-in-out focus:ring focus:outline-0 focus:ring-inset gap-4', optionVariantsConfig);
        const disabledClass = this.disabled
            ? 'pointer-events-none opacity-50 text-disabled-foreground'
            : 'cursor-pointer';
        const classname = `${getOptionClassname({
            active: this.is_active,
            group_option: this.option_group,
        })} ${disabledClass}`;
        return (h("li", { key: 'd5de580f2647df1d84f4bdd88f4abb4559d53caa', role: "option", value: this.value, "data-name": "select-option", "aria-selected": this.is_active ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', tabIndex: this.disabled ? -1 : 0, class: classname, onClick: this.disabled ? undefined : () => this.handleClick() }, h("slot", { key: 'c026023863242aa3dd333b2cb6dc347e5ffa9eaa' }), h("span", { key: '76d2bbf0a79abe4a955059041a79c2d81d139607', class: "min-w-0 flex-1 truncate", "data-name": "select-option-label" }, this.label || this.value), h("slot", { key: '6d6c36fb8b6bd133c4c5312911d60c53f2804db9', name: "after" })));
    }
};

export { AtSelectComponent as at_select, AtSelectGroupComponent as at_select_group, AtSelectOptionComponent as at_select_option };
