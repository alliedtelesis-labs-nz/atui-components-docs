import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-CaGsJoRH.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { c as cva } from './p-CVoOBWGd.js';
import { h as handleArrowNavigation, a as handleHomeEndNavigation, d as defineCustomElement$2 } from './p-DesEWVbY.js';
import { d as defineCustomElement$5 } from './p-C9eqBXeS.js';
import { d as defineCustomElement$4 } from './p-BenHHUgN.js';
import { d as defineCustomElement$3 } from './p-BmgpvZ_L.js';
import { d as defineCustomElement$1 } from './p-D9Wtum9m.js';

const inputVariants = cva('height-[36px] transition[background-color,color,box-shadow] placeholder-text-light group/select:focus-within:ring-2 w-full cursor-pointer rounded-md border border-solid p-8 outline-0 duration-300 ease-in-out focus:ring-2', {
    variants: {
        focused: {
            false: 'ring-active-foreground/30',
            true: 'pointer-events-none',
        },
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
    },
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
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
const AtuiSelectComponent = /*@__PURE__*/ proxyCustomElement(class AtuiSelectComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
        /**
         * Set the select to appear as a typeahead input.
         */
        this.typeahead = false;
        /**
         * Close the menu when the user clicks within the menu panel. Default for single selection menus.
         */
        this.autoclose = true;
        this.searchText = '';
        this.isOpen = false;
        this.hasMatchingOptions = false;
        this.menuId = `dropdown-${Math.random().toString(36).substring(2, 11)}`;
        this.optionEls = [];
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    componentDidLoad() {
        this.el
            .querySelectorAll('li[data-name="select-option"]')
            .forEach((option) => {
            this.optionEls.push(option);
        });
        const parentRect = this.el.getBoundingClientRect();
        this.parentWidth = `${parentRect.width}px`;
    }
    updateIsOpenState(event) {
        this.isOpen = event.detail;
    }
    async handleChange(option) {
        var _a;
        if (this.autoclose) {
            await ((_a = this.menuRef) === null || _a === void 0 ? void 0 : _a.closeMenu());
        }
        this.value = option;
        this.searchText = '';
        this.inputEl.focus();
        this.atuiChange.emit(this.value);
    }
    async handleClear() {
        this.searchText = '';
    }
    async handleKeyDownMenu(event) {
        if (event.key === 'Escape') {
            event.preventDefault();
            await this.menuRef.closeMenu();
            this.inputEl.focus();
            return;
        }
        if (event.key === 'Enter' || event.key === ' ') {
            if (event.target instanceof HTMLLIElement) {
                event.preventDefault();
                event.target.click();
            }
            return;
        }
        if (event.key === 'Tab') {
            return;
        }
        const menuContainer = this.el.querySelector('ul[id="atui-select"]');
        if (!menuContainer)
            return;
        handleArrowNavigation(event, menuContainer);
        handleHomeEndNavigation(event, menuContainer);
    }
    render() {
        return (h(Host, { key: '58deee56f8d6ab3ea1d779b45686c11bbaf64c21', class: "group/select", onFocusout: async (event) => {
                await this.handleClear();
                const relatedTarget = event.relatedTarget;
                if (!relatedTarget ||
                    (!this.el.contains(relatedTarget) &&
                        !relatedTarget.closest('[data-atui-menu-portal]'))) {
                    setTimeout(async () => {
                        var _a;
                        await ((_a = this.menuRef) === null || _a === void 0 ? void 0 : _a.closeMenu());
                    }, 100);
                }
            } }, this.renderlabel(), h("atui-menu", { key: '6165bc8488e64a7aa761f444788202be2657020d', ref: (el) => (this.menuRef = el), trigger: "click", align: "start", width: this.parentWidth, role: "listbox", portal: true, disabled: this.disabled || this.readonly, onAtuiMenuStateChange: (event) => this.updateIsOpenState(event) }, this.renderInput(), !this.disabled || !this.readonly
            ? this.renderOptions()
            : null), h("div", { key: '18d998354c477ff1d690043bc98d3be86e51086e' }, this.error_text && this.invalid && (h("span", { key: '163d5c88c2e27d003b8bb3d60b24201bb05f8af9', class: "text-error", "data-name": "select-error" }, this.error_text)))));
    }
    renderlabel() {
        return (h("div", { class: "mb-4 flex flex-col" }, h("slot", { name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { for: this.menuId, label: this.label, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { class: "inline-block text-xs leading-tight text-light", "data-name": "select-hint" }, this.hint_text))));
    }
    renderInput() {
        const classname = inputVariants({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (h("div", { class: "relative flex items-center gap-4", slot: "menu-trigger" }, h("input", { class: classname, role: "combobox", list: "atui-select", autoComplete: "off", "aria-autocomplete": this.typeahead ? 'list' : undefined, "aria-expanded": this.isOpen, "aria-controls": this.menuId, type: "text", readonly: true, disabled: this.disabled, placeholder: this.placeholder, value: this.value, onInput: (e) => e.preventDefault(), "data-name": "select-input", ref: (el) => (this.inputEl = el) }), !this.readonly && !this.disabled && (h("div", { class: "user-select-none pointer-events-none absolute right-4 flex h-full items-center bg-transparent p-4 text-foreground", role: "presentation", tabindex: -1 }, h("span", { class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "button-icon-right" }, this.isOpen ? 'arrow_drop_up' : 'arrow_drop_down')))));
    }
    renderOptions() {
        var _a, _b, _c;
        return (h("ul", { slot: "menu-content", class: "contents", id: "atui-select", onKeyDown: async (event) => {
                await this.handleKeyDownMenu(event);
            } }, this.typeahead && (h("div", { class: "relative z-10 bg-white p-4" }, h("input", { type: "text", class: `transition[background-color,color] mb-4 h-24 w-full flex-shrink flex-grow basis-0 rounded-md bg-surface-1 p-8 outline-0 ring-active-foreground/30 duration-300 ease-in-out focus:ring-2 ${this.clearable ? 'pr-24' : ''} `, placeholder: "Search...", value: this.searchText, onInput: (event) => {
                var _a;
                this.searchText = event.target.value.toLowerCase();
                const trimmedSearch = this.searchText
                    .trim()
                    .toLowerCase();
                this.hasMatchingOptions = trimmedSearch
                    ? (_a = this.options) === null || _a === void 0 ? void 0 : _a.some((option) => option.value
                        .toLowerCase()
                        .includes(trimmedSearch))
                    : true;
            }, onClick: (e) => e.stopPropagation() }), this.clearable && this.searchText !== '' && (h("div", { class: "absolute right-4 top-4" }, h("atui-button", { size: "sm", icon: "cancel", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, "data-name": "select-clear" }))))), (_a = this.options) === null || _a === void 0 ? void 0 :
            _a.filter((option) => !this.searchText ||
                option.value
                    .toLowerCase()
                    .includes(this.searchText)).map((option) => this.renderOption(option)), this.typeahead &&
            this.searchText &&
            !this.hasMatchingOptions && (h("div", { class: "w-full bg-white px-16 py-8 text-body text-light" }, ((_c = (_b = this.translations) === null || _b === void 0 ? void 0 : _b.ATUI) === null || _c === void 0 ? void 0 : _c.NO_RESULTS_FOUND) ||
            'No results found'))));
    }
    renderOption(option) {
        const classname = optionVariants({
            active: this.value === option.value,
        });
        const isSelected = this.value === option.value;
        return (h("li", { role: "option", value: option.value, "data-name": "select-option", "aria-selected": isSelected ? 'true' : 'false', tabIndex: 0, class: classname, onClick: () => this.handleChange(option.value) }, option.value));
    }
    get el() { return this; }
}, [260, "atui-select", {
        "value": [1025],
        "options": [16],
        "label": [1],
        "hint_text": [1],
        "info_text": [1],
        "placeholder": [1],
        "error_text": [1],
        "required": [4],
        "invalid": [4],
        "readonly": [4],
        "disabled": [4],
        "clearable": [4],
        "typeahead": [4],
        "autoclose": [4],
        "searchText": [32],
        "isOpen": [32],
        "translations": [32],
        "hasMatchingOptions": [32],
        "parentWidth": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-select", "atui-button", "atui-form-label", "atui-loading", "atui-menu", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-select":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiSelectComponent);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiSelectComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-Dvsq86-w.js.map

//# sourceMappingURL=p-Dvsq86-w.js.map