import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-jCYcKtgi.js';
import { f as fetchTranslations } from './translation-CxDdWBmt.js';
import { c as classlist } from './classlist-COG8_R0C.js';
import { h as handleArrowNavigation, a as handleHomeEndNavigation } from './keyboard-navigation-CF3ljWUs.js';

const inputVariantsConfig = {
    variants: {
        disabled: {
            false: 'focus-within:ring-active-glow bg-input-background',
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
        typeahead: {
            false: 'cursor-pointer caret-transparent',
            true: null,
        },
    },
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
        typeahead: false,
    },
};
const AtMultiSelectComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    /**
     * Options displayed in the dropdown menu.
     */
    options;
    /**
     * Label of the select.
     */
    label = '';
    /**
     * Short description or validation hint if required.
     */
    hint_text = '';
    /**
     * Error text for the select.
     */
    error_text = '';
    /**
     * Optional info icon with detailed tooltip description. Displayed at right of label.
     */
    info_text = '';
    /**
     * Placeholder text for the select.
     */
    placeholder = '';
    /**
     * Indicated form field is required.
     */
    required;
    /**
     * Set the select to appear invalid.
     */
    invalid;
    /**
     * Set the select to be clearable.
     */
    clearable;
    /**
     * Disable user interaction. Disabled state should be applied via form control.
     */
    disabled;
    /**
     * Set input to readonly mode, allows users to select any active values.
     */
    readonly;
    /**
     * Set the select to enable typeahead search.
     */
    typeahead;
    /**
     * Maximum CSS height for the dropdown menu (e.g., '300px', '50vh').
     * Forwarded to the inner <at-menu> via max_height prop.
     */
    menu_max_height;
    /**
     * The selected items
     */
    value = [];
    searchText = '';
    isOpen = false;
    translations;
    parentWidth = '';
    hasMatchingElOptions = false;
    filteredOptions = [];
    get el() { return getElement(this); }
    menuId = `dropdown-${Math.random().toString(36).substring(2, 11)}`;
    menuRef;
    optionEls = [];
    searchInputEl;
    slottedOptionLabels = new Map();
    watchValue(newValue) {
        const values = newValue ?? [];
        this.optionEls.forEach((optionEl) => {
            const shouldBeActive = values.includes(optionEl.value);
            if (optionEl.is_active !== shouldBeActive) {
                optionEl.is_active = shouldBeActive;
            }
        });
    }
    watchOptions() {
        this.filteredOptions = this.filterOptions(this.options || []);
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
    /**
     * Emits an event containing a list of the selected items when the selection changes.
     */
    atuiChange;
    componentWillLoad() {
        fetchTranslations(this.el).then((translations) => {
            this.translations = translations;
        });
    }
    componentDidLoad() {
        this.setupOptionElements();
        if (this.options && this.options.length > 0) {
            this.filteredOptions = this.options;
        }
        const parentRect = this.el.getBoundingClientRect();
        this.parentWidth = `${parentRect.width}px`;
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
    setupOptionElements() {
        this.slottedOptionLabels.clear();
        this.optionEls = [];
        this.el.querySelectorAll('at-select-option').forEach((option) => {
            const optionEl = option;
            const label = optionEl.label;
            if (label) {
                this.slottedOptionLabels.set(optionEl.value, label);
            }
            optionEl.is_active = (this.value ?? []).includes(optionEl.value);
            this.addListenerToOptionElements(optionEl);
            this.optionEls.push(optionEl);
        });
    }
    addListenerToOptionElements(optionEl) {
        optionEl.addEventListener('atuiClick', (event) => {
            this.handleChange(event.detail);
        });
    }
    findOptionByValue(value) {
        if (!value || !this.options || this.options.length === 0) {
            return undefined;
        }
        const allOptions = this.options.flatMap((opt) => opt.children ? [opt, ...opt.children] : [opt]);
        return allOptions.find((opt) => opt.value === value);
    }
    findLabelByValue(value) {
        if (!value)
            return '';
        if (this.options && this.options.length > 0) {
            const option = this.findOptionByValue(value);
            return option?.label || value;
        }
        if (this.slottedOptionLabels.has(value)) {
            return this.slottedOptionLabels.get(value);
        }
        return value;
    }
    getSelectedLabels() {
        if (!this.value || !Array.isArray(this.value)) {
            return [];
        }
        return this.value.map((val) => this.findLabelByValue(val));
    }
    updateIsOpenState(event) {
        this.isOpen = event.detail;
        if (this.isOpen && this.typeahead) {
            requestAnimationFrame(() => {
                if (this.searchInputEl) {
                    this.searchInputEl.focus();
                }
            });
        }
        else if (!this.isOpen) {
            this.searchText = '';
        }
    }
    handleChange(option) {
        this.value = this.value.includes(option)
            ? this.value.filter((item) => item !== option)
            : [...this.value, option];
        this.atuiChange.emit(this.value);
    }
    handleClear() {
        this.searchText = '';
        if (this.searchInputEl) {
            this.searchInputEl.value = '';
            this.searchInputEl.focus();
        }
    }
    async handleKeyDownMenu(event) {
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
        handleHomeEndNavigation(event, menuContainer);
    }
    handleSearchInput(event) {
        const inputEl = event.target;
        this.searchText = inputEl.value;
    }
    isGroup(option) {
        return !!(option.children && option.children.length > 0);
    }
    handleRemoveChip(event) {
        const removedLabels = event.detail;
        const selectedLabels = this.getSelectedLabels();
        const valuesToRemove = removedLabels
            .map((label) => {
            const idx = selectedLabels.indexOf(label);
            return idx >= 0 ? this.value[idx] : null;
        })
            .filter(Boolean);
        this.value = this.value.filter((v) => !valuesToRemove.includes(v));
        this.atuiChange.emit(this.value);
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
        const result = (this.options && this.options.length > 0) ||
            this.optionEls.length > 0;
        return result;
    }
    render() {
        return (h(Host, { key: '8fe3b828960e5add8f0fe409019939227959b3bb', class: "group/select", onFocusout: async (event) => {
                const relatedTarget = event.relatedTarget;
                if (!relatedTarget || !this.el.contains(relatedTarget)) {
                    setTimeout(async () => {
                        await this.menuRef?.closeMenu();
                    }, 100);
                }
            } }, this.renderLabel(), h("at-menu", { key: '39d6e1773864dda128a249eb61e872f73b9c79ec', ref: (el) => (this.menuRef = el), trigger: "click", align: "start", width: this.parentWidth, max_height: this.menu_max_height, role: "listbox", autoclose: false, disabled: this.disabled || this.readonly, onAtuiMenuStateChange: (event) => this.updateIsOpenState(event) }, this.renderInput(), !this.disabled && !this.readonly
            ? this.renderOptions()
            : null), h("div", { key: '912c645d458ecc04e2b65f070489b963f6d4d00e' }, this.error_text && this.invalid && (h("span", { key: '3c1eb3453d85dded679f2f4abb6fccc1237149ab', "data-name": "multi-select-error", class: "text-error" }, this.error_text)))));
    }
    renderLabel() {
        return (h("div", { class: "mb-4 flex flex-col empty:hidden" }, h("slot", { name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { for: this.menuId, label: this.label, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { class: "text-secondary text-xs leading-tight", "data-name": "multi-select-hint" }, this.hint_text))));
    }
    renderInput() {
        const getClassname = classlist(`placeholder-text-muted transition[background-color,color,box-shadow] relative flex h-input min-h-input w-full gap-4 rounded-input border border-solid py-4 pr-24 pl-input-x duration-300 ease-in-out outline-none focus-within:ring focus-within:outline-0 focus-within:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
            typeahead: this.typeahead,
        });
        return (h("div", { class: classname, slot: "menu-trigger", "data-name": "multi-select-input-container", tabindex: 0 }, h("at-chip-list", { size: "sm", class: "w-full focus-within:ring-0", readonly: this.readonly, disabled: this.disabled, show_clear_all: this.clearable, onAtRemoveChip: (event) => this.handleRemoveChip(event), chips: this.getSelectedLabels(), "data-name": "multi-select-chips-inside" }, this.value.length === 0 && (h("div", { class: "text-body text-disabled pointer-events-none select-none" }, this.placeholder))), !this.readonly && !this.disabled && (h("div", { class: "user-select-none fill-foreground pointer-events-none absolute right-4 flex items-center bg-transparent p-4", "data-name": "expand-button", role: "presentation", tabindex: -1 }, h("at-icon", { class: "fill-foreground", name: this.isOpen ? 'caret_up' : 'caret_down' })))));
    }
    renderOptions() {
        return (h("ul", { id: this.menuId, role: "listbox", class: "contents", onKeyDown: async (event) => {
                await this.handleKeyDownMenu(event);
            } }, this.typeahead && this.hasAnyOptions && (h("div", { class: "relative z-10 p-4" }, h("input", { "data-name": "multi-select-search-input", autocomplete: "off", type: "text", class: "transition[background-color,color,box-shadow] bg-input-background h-input-md max-h-input-md rounded-input border-input focus:border-active-accent focus:ring-active-glow mb-4 h-[28px] w-full flex-shrink flex-grow basis-0 border border-solid p-8 pr-24 outline-0 duration-300 ease-in-out focus:ring focus:outline-0", placeholder: this.translations?.ATUI?.SEARCH || 'Search', value: this.searchText, onInput: (event) => {
                event.stopPropagation();
                this.handleSearchInput(event);
            }, onClick: (e) => e.stopPropagation(), ref: (el) => (this.searchInputEl = el) }), this.searchText !== '' && (h("div", { class: "absolute top-4 right-4" }, h("at-button", { class: "m-2", size: "sm", type: "secondaryText", onMouseDown: (e) => e.preventDefault(), onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, onKeyDown: (e) => {
                if (e.key === 'Escape') {
                    return;
                }
                if (e.key === 'Enter' ||
                    e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    this.handleClear();
                    return;
                }
                e.stopPropagation();
            }, "data-name": "multi-select-search-clear" }, h("at-icon", { slot: "icon", name: "cancel" })))))), this.filteredOptions
            ?.map((option) => {
            if (this.isGroup(option)) {
                return this.renderGroupedOption(option);
            }
            return this.renderOption(option);
        })
            .filter(Boolean), h("slot", null), this.typeahead &&
            this.searchText &&
            this.hasAnyOptions &&
            !this.hasAnyMatchingOptions && (h("div", { "data-name": "no-results-found", class: "text-body text-muted bg-input-background w-full px-16 py-8" }, this.translations?.ATUI?.NO_RESULTS_FOUND ||
            'No results found')), !this.hasAnyOptions && (h("div", { "data-name": "no-options-available", class: "text-body text-muted bg-input-background w-full px-16 py-8" }, this.translations?.ATUI?.NO_OPTIONS_AVAILABLE ||
            'No options available'))));
    }
    renderGroupedOption(option) {
        if (!this.isGroup(option) ||
            !option.children ||
            option.children.length === 0) {
            return null;
        }
        return (h("at-select-group", { key: option.value, label: option.label || option.value }, option.children.map((child) => (h("at-select-option", { key: child.value, value: child.value, label: child.label || child.value, disabled: child.disabled, is_active: this.value.includes(child.value), "data-name": "multi-select-option", option_group: true, onAtuiClick: () => this.handleChange(child.value) })))));
    }
    renderOption(option) {
        return (h("at-select-option", { key: option.value, value: option.value, label: option.label || option.value, disabled: option.disabled, is_active: this.value.includes(option.value), "data-name": "multi-select-option", onAtuiClick: () => this.handleChange(option.value) }));
    }
    static get watchers() { return {
        "value": [{
                "watchValue": 0
            }],
        "options": [{
                "watchOptions": 0
            }],
        "searchText": [{
                "watchSearchText": 0
            }]
    }; }
};

export { AtMultiSelectComponent as at_multi_select };
