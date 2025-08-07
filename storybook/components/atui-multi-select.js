import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-CHjIMSAP.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { c as cva } from './p-CVoOBWGd.js';
import { h as handleArrowNavigation, a as handleHomeEndNavigation } from './p-CF3ljWUs.js';
import { d as defineCustomElement$8 } from './p-Bq2RTHNk.js';
import { d as defineCustomElement$7 } from './p-DuXqj3_2.js';
import { d as defineCustomElement$6 } from './p-BrAtVhxe.js';
import { d as defineCustomElement$5 } from './p-DROFJHTo.js';
import { d as defineCustomElement$4 } from './p-DbhUEjmd.js';
import { d as defineCustomElement$3 } from './p-Yk76b9OE.js';
import { d as defineCustomElement$2 } from './p-Dl92gNAv.js';

const inputVariants = cva('min-h-36 placeholder-text-light transition[background-color,color,box-shadow] relative flex min-h-[36px] w-full flex-shrink flex-grow basis-0 gap-4 rounded-md border border-solid py-4 pl-8 pr-24 outline-none duration-300 ease-in-out focus-within:outline-0 focus-within:ring-2', {
    variants: {
        disabled: {
            false: 'bg-white focus-within:ring-active-foreground/30',
            true: 'pointer-events-none border-none bg-surface-1 !text-disabled',
        },
        readonly: {
            false: 'focus-within:ring-active-foreground/30',
            true: 'cursor-text border-none !bg-surface-1 !text-dark',
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
});
const optionVariants = cva('transition[background-color,color,box-shadow] flex w-full cursor-pointer items-center truncate p-8 text-body font-normal duration-300 ease-in-out focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-active-foreground/40', {
    variants: {
        active: {
            true: 'bg-active-light text-active',
            false: 'bg-white hover:bg-disabled-light',
        },
    },
});
const AtuiMultiSelectComponent = /*@__PURE__*/ proxyCustomElement(class AtuiMultiSelectComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
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
        return (h(Host, { key: 'b9d6c8937df024d066b5b00d860ebbc85189c90a', class: "group/select", onFocusout: async (event) => {
                const relatedTarget = event.relatedTarget;
                if (!relatedTarget || !this.el.contains(relatedTarget)) {
                    this.handleClear();
                    setTimeout(async () => {
                        var _a;
                        await ((_a = this.menuRef) === null || _a === void 0 ? void 0 : _a.closeMenu());
                    }, 100);
                }
            } }, this.renderLabel(), h("atui-menu", { key: '2e367c9a6469d24a57524773f3c64f25200699cc', ref: (el) => (this.menuRef = el), trigger: "click", align: "start", width: this.parentWidth, role: "listbox", autoclose: false, disabled: this.disabled || this.readonly, onAtuiMenuStateChange: (event) => this.updateIsOpenState(event) }, this.renderInput(), !this.disabled || !this.readonly
            ? this.renderOptions()
            : null), h("div", { key: '31aa97991a974932d240cd9941ed4724a2aecffc' }, this.error_text && this.invalid && (h("span", { key: '1381282422010f0c610315a8d5966a1cb3a40f15', "data-name": "multi-select-error", class: "text-error" }, this.error_text)))));
    }
    renderLabel() {
        return (h("div", { class: "mb-4 flex flex-col" }, h("slot", { name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { for: this.menuId, label: this.label, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { class: "text-xs leading-tight text-med", "data-name": "multi-select-hint" }, this.hint_text))));
    }
    renderInput() {
        const classname = inputVariants({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
            typeahead: this.typeahead,
        });
        return (h("div", { class: classname, slot: "menu-trigger", tabindex: 0 }, h("div", null, h("atui-chip-list", { size: "sm", class: "w-full focus-within:ring-0", readonly: this.readonly, disabled: this.disabled, show_clear_all: this.clearable, onAtuiRemoveChip: (event) => {
                this.value = this.value.filter((item) => !event.detail.includes(item));
                this.atuiChange.emit(this.value);
            }, chips: this.value, "data-name": "multi-select-chips-inside" }, this.value.length === 0 && (h("div", { class: "pointer-events-none select-none text-body text-disabled" }, this.placeholder)))), !this.readonly && !this.disabled && (h("div", { class: "absolute right-4 flex items-center" }, h("div", { class: "user-select-none pointer-events-none flex h-full items-center bg-transparent p-4 text-foreground", role: "presentation", tabindex: -1 }, h("span", { class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "button-icon-right" }, this.isOpen
            ? 'arrow_drop_up'
            : 'arrow_drop_down'))))));
    }
    renderOptions() {
        var _a, _b, _c, _d, _e;
        return (h("ul", { id: this.menuId, role: "listbox", class: "contents", slot: "menu-content", onKeyDown: async (event) => {
                await this.handleKeyDownMenu(event);
            } }, this.typeahead && (h("div", { class: "relative z-10 bg-white p-4" }, h("input", { "data-name": "multi-select-input", type: "text", class: `transition[background-color,color] mb-4 h-[28px] w-full flex-shrink flex-grow basis-0 rounded-md bg-surface-1 p-8 outline-0 ring-active-foreground/30 duration-300 ease-in-out focus:ring-2 ${this.clearable ? 'pr-24' : ''} `, placeholder: ((_b = (_a = this.translations) === null || _a === void 0 ? void 0 : _a.ATUI) === null || _b === void 0 ? void 0 : _b.SEARCH) || 'Search', name: "", value: this.searchText, onInput: (event) => {
                event.stopPropagation();
                this.handleSearchInput(event);
            }, onClick: (e) => e.stopPropagation(), ref: (el) => (this.searchInputEl = el) }), this.clearable && this.searchText !== '' && (h("div", { class: "absolute right-4 top-4" }, h("atui-button", { size: "sm", icon: "cancel", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.searchText = '';
                this.searchInputEl.value = '';
            }, "data-name": "multi-select-search-clear" }))))), (_c = this.options) === null || _c === void 0 ? void 0 :
            _c.filter((option) => !this.searchText ||
                option.value
                    .toLowerCase()
                    .includes(this.searchText)).map((option) => this.renderOption(option)), this.typeahead &&
            this.searchText &&
            !this.hasMatchingOptions && (h("div", { "data-name": "no-results-found", class: "w-full bg-white px-16 py-8 text-body text-light" }, ((_e = (_d = this.translations) === null || _d === void 0 ? void 0 : _d.ATUI) === null || _e === void 0 ? void 0 : _e.NO_RESULTS_FOUND) ||
            'No results found'))));
    }
    renderOption(option) {
        const classname = optionVariants({
            active: this.value.includes(option.value),
        });
        return (h("li", { role: "option", "data-name": "multi-select-option", "aria-selected": this.value.includes(option.value), tabIndex: 0, class: classname, onClick: () => this.handleChange(option.value) }, option.value));
    }
    get el() { return this; }
}, [260, "atui-multi-select", {
        "options": [16],
        "label": [1],
        "hint_text": [1],
        "error_text": [1],
        "info_text": [1],
        "placeholder": [1],
        "required": [4],
        "invalid": [4],
        "clearable": [4],
        "disabled": [4],
        "readonly": [4],
        "typeahead": [4],
        "value": [1040],
        "searchText": [32],
        "isOpen": [32],
        "translations": [32],
        "hasMatchingOptions": [32],
        "parentWidth": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-multi-select", "atui-badge", "atui-button", "atui-chip-list", "atui-form-label", "atui-loading", "atui-menu", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-multi-select":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiMultiSelectComponent);
            }
            break;
        case "atui-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "atui-chip-list":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtuiMultiSelect = AtuiMultiSelectComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiMultiSelect, defineCustomElement };
//# sourceMappingURL=atui-multi-select.js.map

//# sourceMappingURL=atui-multi-select.js.map