import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Bx9nFool.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { c as classlist } from './p-DowIpD9s.js';
import { h as handleArrowNavigation, a as handleHomeEndNavigation } from './p-CF3ljWUs.js';
import { d as defineCustomElement$5 } from './p-Ixc4AGPB.js';
import { d as defineCustomElement$4 } from './p-C5bGvK_v.js';
import { d as defineCustomElement$3 } from './p-Cf5bpagt.js';
import { d as defineCustomElement$2 } from './p-DmKmq4RT.js';
import { d as defineCustomElement$1 } from './p-CDDohbWp.js';

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
const optionVariantsConfig = {
    variants: {
        active: {
            true: 'bg-active-light text-active',
            false: 'hover:bg-disabled-light bg-white',
        },
    },
};
const AtSelectComponent = /*@__PURE__*/ proxyCustomElement(class AtSelectComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
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
        if (this.isOpen && this.typeahead) {
            requestAnimationFrame(() => {
                if (this.searchInputEl) {
                    this.searchInputEl.focus();
                }
            });
        }
    }
    async handleChange(option) {
        var _a;
        if (this.autoclose) {
            await ((_a = this.menuRef) === null || _a === void 0 ? void 0 : _a.closeMenu());
        }
        this.value = option;
        this.inputEl.focus();
        this.atuiChange.emit(this.value);
    }
    async handleClear() {
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
        const menuContainer = this.el.querySelector('ul[id="at-select"]');
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
        return (h(Host, { key: '2e68480ce539aa19ba03736e5aaa3d7af2e83ca4', class: "group/select", onFocusout: async (event) => {
                await this.handleClear();
                const relatedTarget = event.relatedTarget;
                if (!relatedTarget || !this.el.contains(relatedTarget)) {
                    setTimeout(async () => {
                        var _a;
                        await ((_a = this.menuRef) === null || _a === void 0 ? void 0 : _a.closeMenu());
                    }, 100);
                }
            } }, this.renderLabel(), h("at-menu", { key: '2b7833207f4a1cdd0f6eaea380a536bb2bfc6b5b', ref: (el) => (this.menuRef = el), trigger: "click", align: "start", width: this.parentWidth, role: "listbox", disabled: this.disabled || this.readonly, onAtuiMenuStateChange: (event) => this.updateIsOpenState(event) }, this.renderInput(), !this.disabled || !this.readonly
            ? this.renderOptions()
            : null), h("div", { key: '535cf383becb0c0a37666b838719c9ae24736526' }, this.error_text && this.invalid && (h("span", { key: '231a1f72e7db191d957e00a0e4275791470d365c', class: "text-error", "data-name": "select-error" }, this.error_text)))));
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
        return (h("div", { class: "relative flex items-center gap-4", slot: "menu-trigger" }, h("input", { class: classname, role: "combobox", list: "at-select", "aria-expanded": this.isOpen, "aria-controls": this.menuId, type: "text", readonly: true, "aria-disabled": this.disabled, disabled: this.disabled, placeholder: this.placeholder, value: this.value, "data-name": "select-input", ref: (el) => (this.inputEl = el) }), !this.readonly && !this.disabled && (h("div", { class: "bg-surface1 absolute right-4 flex h-full cursor-pointer items-center rounded-md p-4 select-none", role: "presentation", tabindex: -1 }, h("span", { class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "button-icon-right" }, this.isOpen ? 'arrow_drop_up' : 'arrow_drop_down')))));
    }
    renderOptions() {
        var _a, _b, _c, _d, _e;
        return (h("ul", { class: "contents", id: "at-select", onKeyDown: async (event) => {
                await this.handleKeyDownMenu(event);
            } }, this.typeahead && (h("div", { class: "relative z-10 bg-white p-4" }, h("input", { type: "text", class: `transition[background-color,color] bg-surface-1 ring-active-foreground/30 mb-4 h-[28px] w-full flex-shrink flex-grow basis-0 rounded-md p-8 outline-0 duration-300 ease-in-out focus:ring-2 ${this.clearable ? 'pr-24' : ''} `, placeholder: ((_b = (_a = this.translations) === null || _a === void 0 ? void 0 : _a.ATUI) === null || _b === void 0 ? void 0 : _b.SEARCH) || 'Search', name: "", autoComplete: "off", "aria-autocomplete": "list", value: this.searchText, onInput: (event) => {
                event.stopPropagation();
                this.handleSearchInput(event);
            }, onClick: (e) => e.stopPropagation(), ref: (el) => (this.searchInputEl = el) }), this.clearable && this.searchText !== '' && (h("div", { class: "absolute top-4 right-4" }, h("at-button", { size: "sm", icon: "cancel", type: "secondaryText", onClick: async (event) => {
                event.stopPropagation();
                await this.handleClear();
            }, "data-name": "select-clear" }))))), (_c = this.options) === null || _c === void 0 ? void 0 :
            _c.filter((option) => !this.searchText ||
                option.value
                    .toLowerCase()
                    .includes(this.searchText)).map((option) => this.renderOption(option)), this.typeahead &&
            this.searchText &&
            !this.hasMatchingOptions && (h("div", { class: "text-body text-light w-full bg-white px-16 py-8" }, ((_e = (_d = this.translations) === null || _d === void 0 ? void 0 : _d.ATUI) === null || _e === void 0 ? void 0 : _e.NO_RESULTS_FOUND) ||
            'No results found'))));
    }
    renderOption(option) {
        const getOptionClassname = classlist('transition[background-color,color,box-shadow] text-body focus:ring-active-foreground/40 flex w-full cursor-pointer items-center truncate p-8 font-normal duration-300 ease-in-out focus:ring-2 focus:outline-0 focus:ring-inset', optionVariantsConfig);
        const classname = getOptionClassname({
            active: this.value === option.value,
        });
        const isSelected = this.value === option.value;
        return (h("li", { role: "option", value: option.value, "data-name": "select-option", "aria-selected": isSelected ? 'true' : 'false', tabIndex: 0, class: classname, onClick: () => this.handleChange(option.value) }, option.value));
    }
    get el() { return this; }
}, [260, "at-select", {
        "value": [1025],
        "options": [16],
        "label": [1],
        "hint_text": [1],
        "info_text": [1],
        "placeholder": [1],
        "error_text": [1],
        "required": [4],
        "invalid": [4],
        "disabled": [4],
        "readonly": [4],
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
    const components = ["at-select", "at-button", "at-form-label", "at-loading", "at-menu", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-select":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtSelectComponent);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "at-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtSelectComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-CxffRu7z.js.map

//# sourceMappingURL=p-CxffRu7z.js.map