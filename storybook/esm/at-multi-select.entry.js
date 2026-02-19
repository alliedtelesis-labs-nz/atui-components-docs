import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-jvbUuQtg.js';
import { f as fetchTranslations } from './translation-DuLooPsr.js';
import { c as classlist } from './classlist-COG8_R0C.js';
import { h as handleArrowNavigation, a as handleHomeEndNavigation } from './keyboard-navigation-CF3ljWUs.js';

const inputVariantsConfig = {
    variants: {
        disabled: {
            false: 'focus-within:ring-active-foreground/40 bg-white',
            true: 'bg-surface-1 !text-disabled pointer-events-none border-none',
        },
        readonly: {
            false: 'focus-within:ring-active-foreground/40',
            true: '!bg-surface-1 !text-dark cursor-text border-none',
        },
        invalid: {
            false: 'border-med focus-within:border-active-dark focus-within:ring-active-foreground/40',
            true: 'border-error-base focus-within:border-error-base focus-within:ring-destructive-foreground/30',
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
        return (h(Host, { key: '1307149dae53d5ed04f614ea1efd30e7c5a49f8f', class: "group/select", onFocusout: async (event) => {
                const relatedTarget = event.relatedTarget;
                if (!relatedTarget || !this.el.contains(relatedTarget)) {
                    setTimeout(async () => {
                        await this.menuRef?.closeMenu();
                    }, 100);
                }
            } }, this.renderLabel(), h("at-menu", { key: '08a16a6fd8e563ff621f1a1ba1c21dcb4ee041cf', ref: (el) => (this.menuRef = el), trigger: "click", align: "start", width: this.parentWidth, role: "listbox", autoclose: false, disabled: this.disabled || this.readonly, onAtuiMenuStateChange: (event) => this.updateIsOpenState(event) }, this.renderInput(), !this.disabled && !this.readonly
            ? this.renderOptions()
            : null), h("div", { key: '343c9f4d9df6d5926ab7a99587809f07347ae1cb' }, this.error_text && this.invalid && (h("span", { key: '74854046346b287c44d8eae0121e134d0bcf48d5', "data-name": "multi-select-error", class: "text-error" }, this.error_text)))));
    }
    renderLabel() {
        return (h("div", { class: "mb-4 flex flex-col" }, h("slot", { name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { for: this.menuId, label: this.label, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { class: "text-med text-xs leading-tight", "data-name": "multi-select-hint" }, this.hint_text))));
    }
    renderInput() {
        const getClassname = classlist('placeholder-text-light transition[background-color,color,box-shadow] relative flex min-h-36 min-h-[36px] w-full flex-shrink flex-grow basis-0 gap-4 rounded-md border border-solid py-4 pr-24 pl-8 duration-300 ease-in-out outline-none focus-within:ring-2 focus-within:outline-0', inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
            typeahead: this.typeahead,
        });
        return (h("div", { class: classname, slot: "menu-trigger", "data-name": "multi-select-input-container", tabindex: 0 }, h("at-chip-list", { size: "sm", class: "w-full focus-within:ring-0", readonly: this.readonly, disabled: this.disabled, show_clear_all: this.clearable, onAtRemoveChip: (event) => this.handleRemoveChip(event), chips: this.getSelectedLabels(), "data-name": "multi-select-chips-inside" }, this.value.length === 0 && (h("div", { class: "text-body text-disabled pointer-events-none select-none" }, this.placeholder))), !this.readonly && !this.disabled && (h("div", { class: "absolute right-4 flex items-center" }, h("div", { class: "user-select-none text-foreground pointer-events-none flex h-full items-center bg-transparent p-4", role: "presentation", tabindex: -1 }, h("span", { class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "button-icon-right" }, this.isOpen
            ? 'arrow_drop_up'
            : 'arrow_drop_down'))))));
    }
    renderOptions() {
        return (h("ul", { id: this.menuId, role: "listbox", class: "contents", onKeyDown: async (event) => {
                await this.handleKeyDownMenu(event);
            } }, this.typeahead && this.hasAnyOptions && (h("div", { class: "relative z-10 bg-white p-4" }, h("input", { "data-name": "multi-select-search-input", autocomplete: "off", type: "text", class: `transition[background-color,color] bg-surface-1 ring-active-foreground/40 mb-4 h-[28px] w-full flex-shrink flex-grow basis-0 rounded-md p-8 pr-24 outline-0 duration-300 ease-in-out focus:ring-2`, placeholder: this.translations?.ATUI?.SEARCH || 'Search', value: this.searchText, onInput: (event) => {
                event.stopPropagation();
                this.handleSearchInput(event);
            }, onClick: (e) => e.stopPropagation(), ref: (el) => (this.searchInputEl = el) }), this.searchText !== '' && (h("div", { class: "absolute top-4 right-4" }, h("at-button", { class: "m-2", size: "sm", icon: "cancel", type: "secondaryText", onMouseDown: (e) => e.preventDefault(), onClick: (event) => {
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
            }, "data-name": "multi-select-search-clear" }))))), this.filteredOptions
            ?.map((option) => {
            if (this.isGroup(option)) {
                return this.renderGroupedOption(option);
            }
            return this.renderOption(option);
        })
            .filter(Boolean), h("slot", null), this.typeahead &&
            this.searchText &&
            this.hasAnyOptions &&
            !this.hasAnyMatchingOptions && (h("div", { "data-name": "no-results-found", class: "text-body text-light w-full bg-white px-16 py-8" }, this.translations?.ATUI?.NO_RESULTS_FOUND ||
            'No results found')), !this.hasAnyOptions && (h("div", { "data-name": "no-options-available", class: "text-body text-light w-full bg-white px-16 py-8" }, this.translations?.ATUI?.NO_OPTIONS_AVAILABLE ||
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
