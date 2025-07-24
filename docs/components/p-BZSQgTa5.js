import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-kcU6cSzl.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { c as cva } from './p-CVoOBWGd.js';
import { d as defineCustomElement$5 } from './p-VjTTylTi.js';
import { d as defineCustomElement$4 } from './p-DKz0HNdG.js';
import { d as defineCustomElement$3 } from './p-CHkT-iof.js';
import { d as defineCustomElement$2 } from './p-q1ydcm97.js';
import { d as defineCustomElement$1 } from './p-DRSCT2MW.js';

const inputVariants = cva('height-[36px] transition[background-color,color,box-shadow] placeholder-text-light group/select:focus-within:ring-2 w-full rounded-md border border-solid p-8 outline-0 duration-300 ease-in-out focus:ring-2', {
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
        typeahead: {
            false: 'cursor-pointer caret-transparent',
            true: 'cursor-text',
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
        if (!this.autoclose) {
            await ((_a = this.menuRef) === null || _a === void 0 ? void 0 : _a.closeMenu());
        }
        this.value = option;
        this.inputEl.value = '';
        this.searchText = '';
        this.atuiChange.emit(this.value);
        this.inputEl.focus();
    }
    async handleClear() {
        var _a;
        await ((_a = this.menuRef) === null || _a === void 0 ? void 0 : _a.closeMenu());
        this.searchText = '';
        this.value = '';
        this.inputEl.value = '';
        this.atuiChange.emit(this.value);
        this.inputEl.focus();
    }
    focusOption(relativePosition) {
        const indexOfActiveOption = this.optionEls.indexOf(this.el.ownerDocument.activeElement);
        const nextOptionEl = this.optionEls[(indexOfActiveOption +
            relativePosition +
            this.optionEls.length) %
            this.optionEls.length];
        nextOptionEl.focus();
    }
    handleSearchChange(event) {
        var _a;
        this.searchText = event.target.value.toLowerCase();
        const trimmedSearch = this.searchText.trim().toLowerCase();
        this.hasMatchingOptions = trimmedSearch
            ? (_a = this.options) === null || _a === void 0 ? void 0 : _a.some((option) => option.value.toLowerCase().includes(trimmedSearch))
            : false;
    }
    async handleKeyDownInput(event) {
        switch (event.key) {
            case 'Enter':
            case 'Space':
                await this.menuRef.toggleMenu();
                break;
            case 'Escape':
                await this.menuRef.closeMenu();
                break;
            default:
                this.handleSearchChange(event);
                await this.menuRef.openMenu();
                break;
        }
    }
    async handleKeyDownMenu(event) {
        switch (event.key) {
            case 'Escape':
                await this.menuRef.closeMenu;
                break;
            case 'Enter':
            case ' ':
                if (event.target instanceof HTMLLIElement) {
                    event.target.click();
                }
                break;
            case 'ArrowUp':
            case 'ArrowLeft':
                event.preventDefault();
                this.focusOption(-1);
                break;
            case 'ArrowDown':
            case 'ArrowRight':
                event.preventDefault();
                this.focusOption(1);
                break;
        }
    }
    render() {
        return (h(Host, { key: '2fd089fa843e8c6df8474d58f758d6222b2d79dd', class: "group/select", onFocusout: async (event) => {
                if (!this.el.contains(event.relatedTarget)) {
                    await this.menuRef.closeMenu();
                }
            } }, this.renderlabel(), h("atui-menu", { key: '0e5185672d10a3900624aaa5d4c759b9621ca4d9', ref: (el) => (this.menuRef = el), trigger: "click", align: "start", width: this.parentWidth, role: "listbox", disabled: this.disabled || this.readonly, onAtuiMenuStateChange: (event) => this.updateIsOpenState(event) }, this.renderInput(), !this.disabled || !this.readonly
            ? this.renderOptions()
            : null), h("div", { key: '2cc36f5821b8b51cc3a00ea5fb70b2952379d8a8' }, this.error_text && this.invalid && (h("span", { key: '06d8fecf72538b6abda15840cf53536c7f00b742', class: "text-error", "data-name": "select-error" }, this.error_text)))));
    }
    renderlabel() {
        return (h("div", { class: "mb-4 flex flex-col" }, h("slot", { name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { for: this.menuId, label: this.label, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { class: "inline-block text-xs leading-tight text-light", "data-name": "select-hint" }, this.hint_text))));
    }
    renderInput() {
        const classname = inputVariants({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
            typeahead: this.typeahead,
        });
        return (h("div", { class: "relative flex items-center gap-4", slot: "menu-trigger" }, h("input", { class: classname, role: "combobox", list: "atui-select", autoComplete: "off", "aria-autocomplete": this.typeahead ? 'list' : undefined, "aria-expanded": this.isOpen, "aria-controls": this.menuId, type: "text", readonly: this.readonly, disabled: this.disabled, placeholder: this.placeholder, value: this.value, onKeyDown: async (event) => {
                await this.handleKeyDownInput(event);
            }, onBlur: () => (this.searchText = ''), "data-name": "select-input", ref: (el) => (this.inputEl = el) }), h("div", { class: "absolute right-4 flex h-full items-center bg-transparent" }, this.clearable && !this.readonly && !this.disabled && (h("div", { class: `transition-all duration-300 ease-in-out ${!!this.value || this.searchText
                ? 'scale-100 opacity-100'
                : 'pointer-events-none scale-90 opacity-0'}` }, h("atui-button", { size: "sm", icon: "cancel", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, "data-name": "select-clear" }))), !this.readonly && !this.disabled && (h("atui-button", { size: "sm", class: "!i>text-light h-[18pz] w-[18px]", icon: this.isOpen
                ? 'arrow_drop_up'
                : 'arrow_drop_down', type: "secondaryText", onClick: async () => {
                console.log('arrow');
                await this.menuRef.toggleMenu;
            }, "data-name": "select-toggle" })))));
    }
    renderOptions() {
        var _a;
        return (h("ul", { slot: "menu-content", class: "contents", id: "atui-select", onKeyDown: async (event) => {
                await this.handleKeyDownMenu(event);
            } }, (_a = this.options) === null || _a === void 0 ? void 0 :
            _a.filter((option) => option.value.toLowerCase().includes(this.searchText)).map((option) => this.renderOption(option)), this.typeahead && !this.hasMatchingOptions && (h("div", { class: "w-full bg-white px-16 py-8 text-body text-light" }, this.translations.ATUI.NO_RESULTS_FOUND))));
    }
    renderOption(option) {
        const classname = optionVariants({
            active: this.value === option.value,
        });
        return (h("li", { role: "option", value: option.value, "data-name": "select-option", "aria-selected": this.value === option.value, tabIndex: 0, class: classname, onClick: () => this.handleChange(option.value) }, h("i", { role: "presentation", class: `material-icons h-16 w-16 text-sm ease-in-out ${this.value === option.value ? 'visible' : 'hidden'}` }, "check"), option.value));
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
//# sourceMappingURL=p-BZSQgTa5.js.map

//# sourceMappingURL=p-BZSQgTa5.js.map