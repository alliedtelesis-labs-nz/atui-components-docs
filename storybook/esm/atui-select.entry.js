import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-CIq6mZ3i.js';
import { f as fetchTranslations } from './translation-DuLooPsr.js';
import { c as cva } from './index-CVoOBWGd.js';
import { h as handleArrowNavigation, a as handleHomeEndNavigation } from './keyboard-navigation-CF3ljWUs.js';

const inputVariants = cva('height-[36px] transition[background-color,color,box-shadow] placeholder-text-light group/select:focus-within:ring-2 w-full cursor-pointer select-none rounded-md border border-solid p-8 outline-0 duration-300 ease-in-out focus:ring-2', {
    variants: {
        focused: {
            false: 'ring-active-foreground/30',
            true: 'pointer-events-none',
        },
        disabled: {
            false: 'cursor-pointer bg-white focus-within:ring-active-foreground/30',
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
const AtuiSelectComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        const menuContainer = this.el.querySelector('ul[id="atui-select"]');
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
        return (h(Host, { key: '0ee1e70949339d9efee11f0d96a6533ce9b7244c', class: "group/select", onFocusout: async (event) => {
                await this.handleClear();
                const relatedTarget = event.relatedTarget;
                if (!relatedTarget || !this.el.contains(relatedTarget)) {
                    setTimeout(async () => {
                        var _a;
                        await ((_a = this.menuRef) === null || _a === void 0 ? void 0 : _a.closeMenu());
                    }, 100);
                }
            } }, this.renderLabel(), h("atui-menu", { key: '71be687e805e467c0ad4b00f9d41671230f1846c', ref: (el) => (this.menuRef = el), trigger: "click", align: "start", width: this.parentWidth, role: "listbox", disabled: this.disabled || this.readonly, onAtuiMenuStateChange: (event) => this.updateIsOpenState(event) }, this.renderInput(), !this.disabled || !this.readonly
            ? this.renderOptions()
            : null), h("div", { key: 'f4f3063c1caf7f1494b5610516178ce35b1963be' }, this.error_text && this.invalid && (h("span", { key: '2c08596c95c852bab3883a32b50f73dacd997a51', class: "text-error", "data-name": "select-error" }, this.error_text)))));
    }
    renderLabel() {
        return (h("div", { class: "mb-4 flex flex-col" }, h("slot", { name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { for: this.menuId, label: this.label, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { class: "inline-block text-xs leading-tight text-light", "data-name": "select-hint" }, this.hint_text))));
    }
    renderInput() {
        const classname = inputVariants({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (h("div", { class: "relative flex items-center gap-4", slot: "menu-trigger" }, h("input", { class: classname, role: "combobox", list: "atui-select", "aria-expanded": this.isOpen, "aria-controls": this.menuId, type: "text", readonly: true, "aria-disabled": this.disabled, disabled: this.disabled, placeholder: this.placeholder, value: this.value, "data-name": "select-input", ref: (el) => (this.inputEl = el) }), !this.readonly && !this.disabled && (h("div", { class: "bg-surface1 absolute right-4 flex h-full cursor-pointer select-none items-center rounded-md p-4", role: "presentation", tabindex: -1 }, h("span", { class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "button-icon-right" }, this.isOpen ? 'arrow_drop_up' : 'arrow_drop_down')))));
    }
    renderOptions() {
        var _a, _b, _c, _d, _e;
        return (h("ul", { slot: "menu-content", class: "contents", id: "atui-select", onKeyDown: async (event) => {
                await this.handleKeyDownMenu(event);
            } }, this.typeahead && (h("div", { class: "relative z-10 bg-white p-4" }, h("input", { type: "text", class: `transition[background-color,color] mb-4 h-[28px] w-full flex-shrink flex-grow basis-0 rounded-md bg-surface-1 p-8 outline-0 ring-active-foreground/30 duration-300 ease-in-out focus:ring-2 ${this.clearable ? 'pr-24' : ''} `, placeholder: ((_b = (_a = this.translations) === null || _a === void 0 ? void 0 : _a.ATUI) === null || _b === void 0 ? void 0 : _b.SEARCH) || 'Search', name: "", autoComplete: "off", "aria-autocomplete": "list", value: this.searchText, onInput: (event) => {
                event.stopPropagation();
                this.handleSearchInput(event);
            }, onClick: (e) => e.stopPropagation(), ref: (el) => (this.searchInputEl = el) }), this.clearable && this.searchText !== '' && (h("div", { class: "absolute right-4 top-4" }, h("atui-button", { size: "sm", icon: "cancel", type: "secondaryText", onClick: async (event) => {
                event.stopPropagation();
                await this.handleClear();
            }, "data-name": "select-clear" }))))), (_c = this.options) === null || _c === void 0 ? void 0 :
            _c.filter((option) => !this.searchText ||
                option.value
                    .toLowerCase()
                    .includes(this.searchText)).map((option) => this.renderOption(option)), this.typeahead &&
            this.searchText &&
            !this.hasMatchingOptions && (h("div", { class: "w-full bg-white px-16 py-8 text-body text-light" }, ((_e = (_d = this.translations) === null || _d === void 0 ? void 0 : _d.ATUI) === null || _e === void 0 ? void 0 : _e.NO_RESULTS_FOUND) ||
            'No results found'))));
    }
    renderOption(option) {
        const classname = optionVariants({
            active: this.value === option.value,
        });
        const isSelected = this.value === option.value;
        return (h("li", { role: "option", value: option.value, "data-name": "select-option", "aria-selected": isSelected ? 'true' : 'false', tabIndex: 0, class: classname, onClick: () => this.handleChange(option.value) }, option.value));
    }
    get el() { return getElement(this); }
};

export { AtuiSelectComponent as atui_select };
//# sourceMappingURL=atui-select.entry.js.map

//# sourceMappingURL=atui-select.entry.js.map