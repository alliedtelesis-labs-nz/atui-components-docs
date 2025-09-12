import { h, Host, } from "@stencil/core";
import { fetchTranslations } from "../../utils/translation";
import { classlist } from "../../utils/classlist";
import { handleArrowNavigation, handleHomeEndNavigation, } from "../../utils/keyboard-navigation";
const inputVariantsConfig = {
    variants: {
        disabled: {
            false: 'focus-within:ring-active-foreground/30 bg-white',
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
const optionVariantsConfig = {
    variants: {
        active: {
            true: 'bg-active-light text-active',
            false: 'hover:bg-disabled-light bg-white',
        },
    },
};
/**
 * @category Form Controls
 * @description A multi-selection dropdown component for choosing multiple values from a list of options. Features search functionality, keyboard navigation, and accessibility support.
 */
export class AtuiMultiSelectComponent {
    constructor() {
        /**
         * Label of the select.
         */
        this.label = '';
        /**
         * Short description or validation hint if required.
         */
        this.hint_text = '';
        /**
         * Error text for the select.
         */
        this.error_text = '';
        /**
         * Optional info icon with detailed tooltip description. Displayed at right of label.
         */
        this.info_text = '';
        /**
         * Placeholder text for the select.
         */
        this.placeholder = '';
        /**
         * The selected items
         */
        this.value = [];
        this.searchText = '';
        this.isOpen = false;
        this.hasMatchingOptions = false;
        this.parentWidth = '';
        this.menuId = `dropdown-${Math.random().toString(36).substring(2, 11)}`;
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    componentDidLoad() {
        const parentRect = this.el.getBoundingClientRect();
        this.parentWidth = `${parentRect.width}px`;
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
    }
    handleChange(option) {
        this.value = this.value.includes(option)
            ? this.value.filter((item) => item !== option)
            : [...this.value, option];
        this.atuiChange.emit(this.value);
    }
    handleClear() {
        this.searchText = '';
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
        var _a;
        const inputEl = event.target;
        this.searchText = inputEl.value.toLowerCase();
        const trimmedSearch = this.searchText.trim().toLowerCase();
        this.hasMatchingOptions = trimmedSearch
            ? (_a = this.options) === null || _a === void 0 ? void 0 : _a.some((option) => option.value.toLowerCase().includes(trimmedSearch))
            : true;
    }
    render() {
        return (h(Host, { key: 'ce3996dba0d807e80a3eb675c57cef08df743c03', class: "group/select", onFocusout: async (event) => {
                const relatedTarget = event.relatedTarget;
                if (!relatedTarget || !this.el.contains(relatedTarget)) {
                    this.handleClear();
                    setTimeout(async () => {
                        var _a;
                        await ((_a = this.menuRef) === null || _a === void 0 ? void 0 : _a.closeMenu());
                    }, 100);
                }
            } }, this.renderLabel(), h("atui-menu", { key: 'a4f1abe7de98d87d88f2ee8d7f921d7660a21e49', ref: (el) => (this.menuRef = el), trigger: "click", align: "start", width: this.parentWidth, role: "listbox", autoclose: false, disabled: this.disabled || this.readonly, onAtuiMenuStateChange: (event) => this.updateIsOpenState(event) }, this.renderInput(), !this.disabled || !this.readonly
            ? this.renderOptions()
            : null), h("div", { key: '36ac8db79962b08fad88a9c451aa241e9f25a999' }, this.error_text && this.invalid && (h("span", { key: '6fab56da3fc48690dbb4a06235be95133d7d6226', "data-name": "multi-select-error", class: "text-error" }, this.error_text)))));
    }
    renderLabel() {
        return (h("div", { class: "mb-4 flex flex-col" }, h("slot", { name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { for: this.menuId, label: this.label, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { class: "text-med text-xs leading-tight", "data-name": "multi-select-hint" }, this.hint_text))));
    }
    renderInput() {
        const getClassname = classlist('placeholder-text-light transition[background-color,color,box-shadow] relative flex min-h-36 min-h-[36px] w-full flex-shrink flex-grow basis-0 gap-4 rounded-md border border-solid py-4 pr-24 pl-8 duration-300 ease-in-out outline-none focus-within:ring-2 focus-within:outline-0', inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
            typeahead: this.typeahead,
        });
        return (h("div", { class: classname, slot: "menu-trigger", tabindex: 0 }, h("div", null, h("atui-chip-list", { size: "sm", class: "w-full focus-within:ring-0", readonly: this.readonly, disabled: this.disabled, show_clear_all: this.clearable, onAtuiRemoveChip: (event) => {
                this.value = this.value.filter((item) => !event.detail.includes(item));
                this.atuiChange.emit(this.value);
            }, chips: this.value, "data-name": "multi-select-chips-inside" }, this.value.length === 0 && (h("div", { class: "text-body text-disabled pointer-events-none select-none" }, this.placeholder)))), !this.readonly && !this.disabled && (h("div", { class: "absolute right-4 flex items-center" }, h("div", { class: "user-select-none text-foreground pointer-events-none flex h-full items-center bg-transparent p-4", role: "presentation", tabindex: -1 }, h("span", { class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "button-icon-right" }, this.isOpen
            ? 'arrow_drop_up'
            : 'arrow_drop_down'))))));
    }
    renderOptions() {
        var _a, _b, _c, _d, _e;
        return (h("ul", { id: this.menuId, role: "listbox", class: "contents", onKeyDown: async (event) => {
                await this.handleKeyDownMenu(event);
            } }, this.typeahead && (h("div", { class: "relative z-10 bg-white p-4" }, h("input", { "data-name": "multi-select-input", type: "text", class: `transition[background-color,color] bg-surface-1 ring-active-foreground/30 mb-4 h-[28px] w-full flex-shrink flex-grow basis-0 rounded-md p-8 outline-0 duration-300 ease-in-out focus:ring-2 ${this.clearable ? 'pr-24' : ''} `, placeholder: ((_b = (_a = this.translations) === null || _a === void 0 ? void 0 : _a.ATUI) === null || _b === void 0 ? void 0 : _b.SEARCH) || 'Search', name: "", value: this.searchText, onInput: (event) => {
                event.stopPropagation();
                this.handleSearchInput(event);
            }, onClick: (e) => e.stopPropagation(), ref: (el) => (this.searchInputEl = el) }), this.clearable && this.searchText !== '' && (h("div", { class: "absolute top-4 right-4" }, h("atui-button", { size: "sm", icon: "cancel", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.searchText = '';
                this.searchInputEl.value = '';
            }, "data-name": "multi-select-search-clear" }))))), (_c = this.options) === null || _c === void 0 ? void 0 :
            _c.filter((option) => !this.searchText ||
                option.value
                    .toLowerCase()
                    .includes(this.searchText)).map((option) => this.renderOption(option)), this.typeahead &&
            this.searchText &&
            !this.hasMatchingOptions && (h("div", { "data-name": "no-results-found", class: "text-body text-light w-full bg-white px-16 py-8" }, ((_e = (_d = this.translations) === null || _d === void 0 ? void 0 : _d.ATUI) === null || _e === void 0 ? void 0 : _e.NO_RESULTS_FOUND) ||
            'No results found'))));
    }
    renderOption(option) {
        const getOptionClassname = classlist('transition[background-color,color,box-shadow] text-body focus:ring-active-foreground/40 flex w-full cursor-pointer items-center truncate p-8 font-normal duration-300 ease-in-out focus:ring-2 focus:outline-0 focus:ring-inset', optionVariantsConfig);
        const classname = getOptionClassname({
            active: this.value.includes(option.value),
        });
        return (h("li", { role: "option", "data-name": "multi-select-option", "aria-selected": this.value.includes(option.value), tabIndex: 0, class: classname, onClick: () => this.handleChange(option.value) }, option.value));
    }
    static get is() { return "atui-multi-select"; }
    static get properties() {
        return {
            "options": {
                "type": "unknown",
                "attribute": "options",
                "mutable": false,
                "complexType": {
                    "original": "SelectOption[]",
                    "resolved": "SelectOption[]",
                    "references": {
                        "SelectOption": {
                            "location": "import",
                            "path": "../../types/select",
                            "id": "src/types/select.ts::SelectOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Options displayed in the dropdown menu."
                },
                "getter": false,
                "setter": false
            },
            "label": {
                "type": "string",
                "attribute": "label",
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
                    "text": "Label of the select."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "hint_text": {
                "type": "string",
                "attribute": "hint_text",
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
                "defaultValue": "''"
            },
            "error_text": {
                "type": "string",
                "attribute": "error_text",
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
                    "text": "Error text for the select."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "info_text": {
                "type": "string",
                "attribute": "info_text",
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
                "defaultValue": "''"
            },
            "placeholder": {
                "type": "string",
                "attribute": "placeholder",
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
                    "text": "Placeholder text for the select."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "required": {
                "type": "boolean",
                "attribute": "required",
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
                "reflect": false
            },
            "invalid": {
                "type": "boolean",
                "attribute": "invalid",
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
                    "text": "Set the select to appear invalid."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "clearable": {
                "type": "boolean",
                "attribute": "clearable",
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
                    "text": "Set the select to be clearable."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                "reflect": false
            },
            "readonly": {
                "type": "boolean",
                "attribute": "readonly",
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
                "reflect": false
            },
            "typeahead": {
                "type": "boolean",
                "attribute": "typeahead",
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
                    "text": "Set the select to enable typeahead search."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "value": {
                "type": "unknown",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The selected items"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "searchText": {},
            "isOpen": {},
            "translations": {},
            "hasMatchingOptions": {},
            "parentWidth": {}
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
                    "text": "Emits an event containing a list of the selected items when the selection changes."
                },
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-multi-select.js.map
