import { h, Host, } from "@stencil/core";
import { fetchTranslations } from "../../utils/translation";
import { classlist } from "../../utils/classlist";
import { handleArrowNavigation, handleHomeEndNavigation, } from "../../utils/keyboard-navigation";
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
/**
 * @category Form Controls
 * @description A dropdown selection component for choosing single values from a list of options. Features search functionality, keyboard navigation, and accessibility support.
 * @slot - Use this slot to manually add <at-select-option> elements in your HTML. Options added via slot will appear in the dropdown alongside those provided via the 'options' prop. Both methods support search, selection, and display together (options being display before the manually added).
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
    inputEl;
    searchText = '';
    isOpen = false;
    translations;
    hasMatchingElOptions = false;
    parentWidth;
    filteredOptions = [];
    selectedLabel = '';
    el;
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
        return (h(Host, { key: 'd35e01fb67a5c46c2d54034fd9535bf036cf9170', class: "group/select", onFocusout: async (event) => {
                const relatedTarget = event.relatedTarget;
                if (!relatedTarget || !this.el.contains(relatedTarget)) {
                    setTimeout(async () => {
                        await this.menuRef?.closeMenu();
                    }, 100);
                }
            } }, this.renderLabel(), h("at-menu", { key: '4573dab274fb6c881dcaee0c3159226b67d481b9', ref: (el) => (this.menuRef = el), trigger: "click", align: "start", width: this.parentWidth, role: "listbox", disabled: this.disabled || this.readonly, onAtuiMenuStateChange: (event) => this.updateIsOpenState(event) }, this.renderInput(), !this.disabled && !this.readonly
            ? this.renderOptions()
            : null), h("div", { key: '2820428119d6cc40aca2c324bb60a99149d4057a' }, this.error_text && this.invalid && (h("span", { key: 'd92b62524a0c598f2f23b626d244d6558263b896', class: "text-error", "data-name": "select-error" }, this.error_text)))));
    }
    renderLabel() {
        return (h("div", { class: "mb-4 flex flex-col" }, h("slot", { name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { for: this.menuId, label: this.label, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { class: "text-light inline-block text-xs leading-tight", "data-name": "select-hint" }, this.hint_text))));
    }
    renderInput() {
        const getClassname = classlist('height-[36px] transition[background-color,color,box-shadow] placeholder-text-light group/select:focus-within:ring-2 w-full cursor-pointer rounded-md border border-solid p-8 outline-0 duration-300 ease-in-out select-none focus:ring-2', inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (h("div", { class: "relative flex items-center gap-4", slot: "menu-trigger", "data-name": "select-input-container" }, h("input", { class: classname, role: "combobox", list: "at-select", "aria-expanded": this.isOpen, "aria-controls": this.menuId, type: "text", readonly: true, "aria-disabled": this.disabled, disabled: this.disabled, placeholder: this.placeholder, value: this.selectedLabel || this.value, "data-name": "select-input", ref: (el) => (this.inputEl = el) }), this.clearable &&
            this.value &&
            !this.readonly &&
            !this.disabled && (h("div", { class: "absolute top-4 right-24" }, h("at-button", { class: "m-2", size: "sm", icon: "cancel", type: "secondaryText", onClick: async (event) => {
                event.stopPropagation();
                this.value = '';
                this.atuiChange.emit(this.value);
                if (this.inputEl) {
                    this.inputEl.focus();
                }
            }, "data-name": "select-clear-main" }))), !this.readonly && !this.disabled && (h("div", { class: "bg-surface1 absolute right-4 flex h-full cursor-pointer items-center rounded-md p-4 select-none", role: "presentation", tabindex: -1 }, h("span", { class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "button-icon-right" }, this.isOpen ? 'arrow_drop_up' : 'arrow_drop_down')))));
    }
    renderOptions() {
        return (h("ul", { class: "contents", id: "at-select", onKeyDown: async (event) => {
                await this.handleKeyDownMenu(event);
            } }, this.typeahead && this.hasAnyOptions && (h("div", { class: "relative z-10 bg-white p-4" }, h("input", { type: "text", class: `transition[background-color,color] bg-surface-1 ring-active-foreground/30 mb-4 h-[28px] w-full flex-shrink flex-grow basis-0 rounded-md p-8 pr-24 outline-0 duration-300 ease-in-out focus:ring-2`, placeholder: this.translations?.ATUI?.SEARCH || 'Search', name: "", autoComplete: "off", "aria-autocomplete": "list", value: this.searchText, onInput: (event) => {
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
            }, "data-name": "select-clear" }))))), this.filteredOptions
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
            }
        };
    }
    static get states() {
        return {
            "searchText": {},
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
