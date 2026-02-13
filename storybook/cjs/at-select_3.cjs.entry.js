'use strict';

var index = require('./index-CzDB71Wy.js');
var translation = require('./translation-HqquF7bU.js');
var classlist = require('./classlist-BPb95vgj.js');
var keyboardNavigation = require('./keyboard-navigation-DKLJuNMB.js');

const inputVariantsConfig = {
    variants: {
        focused: {
            false: 'ring-active-foreground/30',
            true: 'pointer-events-none',
        },
        disabled: {
            false: 'focus-within:ring-active-foreground/30 cursor-pointer bg-white',
            true: 'bg-surface-1 !text-disabled pointer-events-none border-none',
        },
        readonly: {
            false: 'focus-within:ring-active-foreground/30',
            true: '!bg-surface-1 !text-dark cursor-text border-none',
        },
        invalid: {
            false: 'border-med focus-within:border-active-dark focus-within:ring-active-foreground/30',
            true: 'border-error-base focus-within:border-error-base focus-within:ring-destructive-foreground/30',
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
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
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
    inputEl;
    searchText = '';
    isOpen = false;
    translations;
    hasMatchingElOptions = false;
    parentWidth;
    filteredOptions = [];
    selectedLabel = '';
    selectedLabel = '';
    get el() { return index.getElement(this); }
    menuId = `dropdown-${Math.random().toString(36).substring(2, 11)}`;
    menuRef;
    optionEls = [];
    searchInputEl;
    slottedOptionLabels = new Map();
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
    componentWillLoad() {
        translation.fetchTranslations(this.el).then((translations) => {
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
        this.isOpen = event.detail;
        const triggerEl = this.el.querySelector('[slot="menu-trigger"]');
        const rect = triggerEl?.getBoundingClientRect();
        if (rect && rect.width > 0) {
            this.parentWidth = `${rect.width}px`;
        }
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
    async handleChange(option) {
        if (this.autoclose) {
            await this.menuRef?.closeMenu();
        }
        this.value = option;
        this.selectedLabel = this.findLabelByValue(option);
        this.inputEl.focus();
        this.atuiChange.emit(this.value);
    }
    handleClear() {
        this.searchText = '';
        this.searchInputEl.focus();
    }
    async handleKeyDownMenu(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            if (event.target instanceof HTMLLIElement) {
                event.preventDefault();
                event.target.click();
            }
            return;
        }
        const menuContainer = this.el.querySelector('ul[id="at-select"]');
        if (!menuContainer)
            return;
        keyboardNavigation.handleArrowNavigation(event, menuContainer);
        keyboardNavigation.handleHomeEndNavigation(event, menuContainer);
    }
    handleSearchInput(event) {
        const inputEl = event.target;
        this.searchText = inputEl.value.toLowerCase();
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
    render() {
        return (index.h(index.Host, { key: '9a25aeed30ea7ba8cb5ac5476948ffc9b03fea2a', class: "group/select", onFocusout: async (event) => {
                const relatedTarget = event.relatedTarget;
                if (!relatedTarget || !this.el.contains(relatedTarget)) {
                    setTimeout(async () => {
                        await this.menuRef?.closeMenu();
                    }, 100);
                }
            } }, this.renderLabel(), index.h("at-menu", { key: '11126cc683424c8ceca818433cafd0afb39267e3', ref: (el) => (this.menuRef = el), trigger: "click", align: "start", width: this.parentWidth, role: "listbox", disabled: this.disabled || this.readonly, onAtuiMenuStateChange: (event) => this.updateIsOpenState(event) }, this.renderInput(), !this.disabled && !this.readonly
            ? this.renderOptions()
            : null), index.h("div", { key: '98f84479bcc7f3aa7254dede720447bf5f35fd26' }, this.error_text && this.invalid && (index.h("span", { key: '17bd3d618151593601e3579b9f55a1b802ae2e87', class: "text-error", "data-name": "select-error" }, this.error_text)))));
    }
    renderLabel() {
        return (index.h("div", { class: "mb-4 flex flex-col" }, index.h("slot", { name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { for: this.menuId, label: this.label, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { class: "text-light inline-block text-xs leading-tight", "data-name": "select-hint" }, this.hint_text))));
    }
    renderInput() {
        const getClassname = classlist.classlist('height-[36px] transition[background-color,color,box-shadow] placeholder-text-light group/select:focus-within:ring-2 w-full cursor-pointer rounded-md border border-solid p-8 outline-0 duration-300 ease-in-out select-none focus:ring-2', inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (index.h("div", { class: "relative flex items-center gap-4", slot: "menu-trigger", "data-name": "select-input-container" }, index.h("input", { class: classname, role: "combobox", list: "at-select", "aria-expanded": this.isOpen, "aria-controls": this.menuId, type: "text", readonly: true, "aria-disabled": this.disabled, disabled: this.disabled, placeholder: this.placeholder, value: this.selectedLabel || this.value, "data-name": "select-input", ref: (el) => (this.inputEl = el) }), this.clearable &&
            this.value &&
            !this.readonly &&
            !this.disabled && (index.h("div", { class: "absolute top-4 right-24" }, index.h("at-button", { class: "m-2", size: "sm", icon: "cancel", type: "secondaryText", onClick: async (event) => {
                event.stopPropagation();
                this.value = '';
                this.atuiChange.emit(this.value);
                if (this.inputEl) {
                    this.inputEl.focus();
                }
            }, "data-name": "select-clear-main" }))), !this.readonly && !this.disabled && (index.h("div", { class: "bg-surface1 absolute right-4 flex h-full cursor-pointer items-center rounded-md p-4 select-none", role: "presentation", tabindex: -1 }, index.h("span", { class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "button-icon-right" }, this.isOpen ? 'arrow_drop_up' : 'arrow_drop_down')))));
    }
    renderOptions() {
        return (index.h("ul", { class: "contents", id: "at-select", onKeyDown: async (event) => {
                await this.handleKeyDownMenu(event);
            } }, this.typeahead && this.hasAnyOptions && (index.h("div", { class: "relative z-10 bg-white p-4" }, index.h("input", { type: "text", class: `transition[background-color,color] bg-surface-1 ring-active-foreground/30 mb-4 h-[28px] w-full flex-shrink flex-grow basis-0 rounded-md p-8 pr-24 outline-0 duration-300 ease-in-out focus:ring-2`, placeholder: this.translations?.ATUI?.SEARCH || 'Search', name: "", autoComplete: "off", "aria-autocomplete": "list", value: this.searchText, onInput: (event) => {
                event.stopPropagation();
                this.handleSearchInput(event);
            }, onClick: (e) => e.stopPropagation(), ref: (el) => (this.searchInputEl = el) }), this.searchText !== '' && (index.h("div", { class: "absolute top-4 right-4" }, index.h("at-button", { class: "m-2", size: "sm", icon: "cancel", type: "secondaryText", onMouseDown: (e) => e.preventDefault(), onClick: (event) => {
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
            }, "data-name": "select-clear" }))))), this.filteredOptions
            ?.map((option) => {
            if (this.isGroup(option)) {
                return this.renderGroupedOption(option);
            }
            return this.renderOption(option);
        })
            .filter(Boolean), index.h("slot", null), this.typeahead &&
            this.searchText &&
            this.hasAnyOptions &&
            !this.hasAnyMatchingOptions && (index.h("div", { "data-name": "no-results-found", class: "text-body text-light w-full bg-white px-16 py-8" }, this.translations?.ATUI?.NO_RESULTS_FOUND ||
            'No results found')), !this.hasAnyOptions && (index.h("div", { "data-name": "no-options-available", class: "text-body text-light w-full bg-white px-16 py-8" }, this.translations?.ATUI?.NO_OPTIONS_AVAILABLE ||
            'No options available'))));
    }
    renderOption(option) {
        return (index.h("at-select-option", { key: option.value, value: option.value, label: option.label || option.value, is_active: this.value === option.value, disabled: option.disabled, onAtuiClick: () => this.handleChange(option.value), onMouseDown: () => {
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
        return (index.h("at-select-group", { key: option.value, label: option.label || option.value }, option.children.map((child) => (index.h("at-select-option", { value: child.value, label: child.label || child.value, is_active: this.value === child.value, disabled: child.disabled, option_group: true, onAtuiClick: () => this.handleChange(child.value) })))));
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
        index.registerInstance(this, hostRef);
    }
    /**
     * Label for the group displayed as the group title
     */
    label;
    render() {
        return (index.h(index.Host, { key: 'd2bae2c6bea92a3b478a8e24f5c1e74a632cd2e0', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, index.h("div", { key: 'fff67205506493a1ae6c0842c0e7f2683a8deba4', role: "group", "aria-labelledby": this.label }, index.h("li", { key: '07e9c72e0e08f2c78651772993c1262a157d8070', id: this.label, class: "text-light border-light border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), index.h("slot", { key: 'a4fd93766a77a8287aaddce4855541d0339813ce' }))));
    }
};

const optionVariantsConfig = {
    variants: {
        active: {
            true: 'bg-active-light text-active',
            false: 'hover:bg-disabled-light bg-white',
        },
        group_option: {
            true: 'px-16 ',
            false: null,
        },
    },
};
const AtSelectOptionComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiClick = index.createEvent(this, "atuiClick", 7);
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
        const getOptionClassname = classlist.classlist('transition[background-color,color,box-shadow] text-body focus:ring-active-foreground/40 flex w-full items-center truncate p-8 font-normal duration-300 ease-in-out focus:ring-2 focus:outline-0 focus:ring-inset gap-4', optionVariantsConfig);
        const disabledClass = this.disabled
            ? 'pointer-events-none opacity-50 bg-gray-100 text-gray-400'
            : 'cursor-pointer';
        const classname = `${getOptionClassname({
            active: this.is_active,
            group_option: this.option_group,
        })} ${disabledClass}`;
        return (index.h("li", { key: '1da1562e44fd187bc4f0955d4a39d09c3669f038', role: "option", value: this.value, "data-name": "select-option", "aria-selected": this.is_active ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', tabIndex: this.disabled ? -1 : 0, class: classname, onClick: this.disabled ? undefined : () => this.handleClick() }, index.h("slot", { key: '7a346ccf383859c844cc89511b157be624014d97' }), this.label || this.value, index.h("slot", { key: 'bcdceaac9c09598789e64fc5431acfb4e619c0d3', name: "after" })));
    }
};

exports.at_select = AtSelectComponent;
exports.at_select_group = AtSelectGroupComponent;
exports.at_select_option = AtSelectOptionComponent;
