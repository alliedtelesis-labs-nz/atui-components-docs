import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-PDMXpTaC.js';
import { f as fetchTranslations } from './translation-DU7QdhZu.js';
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
     * Forwarded to the inner <at-menu> via max_height prop.
     */
    menu_max_height;
    inputEl;
    searchText = '';
    isOpen = false;
    translations;
    hasMatchingElOptions = false;
    parentWidth;
    filteredOptions = [];
    selectedLabel = '';
    get el() { return getElement(this); }
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
        handleArrowNavigation(event, menuContainer);
        handleHomeEndNavigation(event, menuContainer);
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
    get displayValue() {
        if (!this.value) {
            return '';
        }
        const computed = this.selectedLabel || this.findLabelByValue(this.value);
        return computed;
    }
    render() {
        return (h(Host, { key: 'fa118f2cc9866da7b5436e1cf6f5b5d960bc9074', class: "group/select", onFocusout: async (event) => {
                const relatedTarget = event.relatedTarget;
                if (!relatedTarget || !this.el.contains(relatedTarget)) {
                    setTimeout(async () => {
                        await this.menuRef?.closeMenu();
                    }, 100);
                }
            } }, this.renderLabel(), h("at-menu", { key: 'caacd6cff31946b19e92fa02cd081f6c9c9a152e', ref: (el) => (this.menuRef = el), trigger: "click", align: "start", width: this.parentWidth, max_height: this.menu_max_height, role: "listbox", disabled: this.disabled || this.readonly, onAtuiMenuStateChange: (event) => this.updateIsOpenState(event) }, this.renderInput(), !this.disabled && !this.readonly
            ? this.renderOptions()
            : null), h("div", { key: '62938ba04db552430025a807311e6df09fd6629a' }, this.error_text && this.invalid && (h("span", { key: '2868f0b463b68bcf61011245560dd6b1c3447c47', class: "text-error", "data-name": "select-error" }, this.error_text)))));
    }
    renderLabel() {
        return (h("div", { class: "mb-4 flex flex-col empty:hidden" }, h("slot", { name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { for: this.menuId, label: this.label, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { class: "text-muted inline-block text-xs leading-tight", "data-name": "select-hint" }, this.hint_text))));
    }
    renderInput() {
        const getClassname = classlist(`transition[background-color,color,box-shadow] placeholder-text-muted group/select:focus-within:ring w-full cursor-pointer rounded-input border border-solid h-input min-h-input py-input-y px-input-x outline-0 duration-300 ease-in-out select-none focus:ring focus:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (h("div", { class: "h-input min-h-input relative flex items-center gap-4", slot: "menu-trigger", "data-name": "select-input-container" }, h("input", { class: classname, role: "combobox", list: "at-select", "aria-expanded": this.isOpen, "aria-controls": this.menuId, type: "text", readonly: true, "aria-disabled": this.disabled, disabled: this.disabled, placeholder: this.placeholder, value: this.displayValue, "data-name": "select-input", ref: (el) => (this.inputEl = el) }), this.clearable &&
            this.value &&
            !this.readonly &&
            !this.disabled && (h("div", { class: "absolute top-4 right-24" }, h("at-button", { class: "m-2", size: "sm", type: "secondaryText", onClick: async (event) => {
                event.stopPropagation();
                this.value = '';
                this.atuiChange.emit(this.value);
                if (this.inputEl) {
                    this.inputEl.focus();
                }
            }, "data-name": "select-clear-main" }, h("at-icon", { slot: "icon", name: "cancel" })))), !this.readonly && !this.disabled && (h("div", { class: "bg-surface1 rounded-input absolute right-4 flex h-full cursor-pointer items-center p-4 select-none", role: "presentation", tabindex: -1 }, h("at-icon", { class: "fill-foreground", name: this.isOpen ? 'caret_up' : 'caret_down', "data-name": "button-icon-right" })))));
    }
    renderOptions() {
        return (h("ul", { class: "contents", id: "at-select", onKeyDown: async (event) => {
                await this.handleKeyDownMenu(event);
            } }, this.typeahead && this.hasAnyOptions && (h("div", { class: "relative z-10 p-4" }, h("input", { type: "text", class: "transition[background-color,color,box-shadow] bg-input-background h-input-md max-h-input-md rounded-input border-input focus:border-active-accent focus:ring-active-glow mb-4 w-full flex-shrink flex-grow basis-0 border border-solid p-8 pr-24 outline-0 duration-300 ease-in-out focus:ring focus:outline-0", placeholder: this.translations?.ATUI?.SEARCH || 'Search', name: "", autoComplete: "off", "aria-autocomplete": "list", value: this.searchText, onInput: (event) => {
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
            }, "data-name": "select-clear" }, h("at-icon", { slot: "icon", name: "cancel" })))))), this.filteredOptions
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
        return (h(Host, { key: '78d7381ee515c1768650fd2c87c48d24c2367a8d', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: '4c55484a208bc67616fbe823d4be22f1ff1c973c', role: "group", "aria-labelledby": this.label }, h("li", { key: 'a229ba56c8855db6b99279bb0683b10f90ff98cf', id: this.label, class: "text-muted border-muted border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: '94352923434e335a0d011a94ac0d410159dd2d8d' }))));
    }
};

const optionVariantsConfig = {
    variants: {
        active: {
            true: 'bg-active-accent/30 hover:bg-active-accent/20 text-active-foreground',
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
        const getOptionClassname = classlist('transition[background-color,color,box-shadow] text-body focus:ring-active-glow flex w-full items-center truncate rounded-menu-item p-8 font-normal duration-300 ease-in-out focus:ring focus:outline-0 focus:ring-inset gap-4', optionVariantsConfig);
        const disabledClass = this.disabled
            ? 'pointer-events-none opacity-50 text-disabled-foreground'
            : 'cursor-pointer';
        const classname = `${getOptionClassname({
            active: this.is_active,
            group_option: this.option_group,
        })} ${disabledClass}`;
        return (h("li", { key: 'fdf89f54933857d25a1300a11237a931afdadb4e', role: "option", value: this.value, "data-name": "select-option", "aria-selected": this.is_active ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', tabIndex: this.disabled ? -1 : 0, class: classname, onClick: this.disabled ? undefined : () => this.handleClick() }, h("slot", { key: 'e63a5dd02b6116266fbcfae0966da3fe0b1394e4' }), this.label || this.value, h("slot", { key: '1758c60148e1c33bfc6640439cfde3cc4e7055f2', name: "after" })));
    }
};

export { AtSelectComponent as at_select, AtSelectGroupComponent as at_select_group, AtSelectOptionComponent as at_select_option };
