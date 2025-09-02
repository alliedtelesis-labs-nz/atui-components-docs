import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-D3rwhcmG.js';
import { f as fetchTranslations } from './translation-DuLooPsr.js';
import { c as cva } from './index-CVoOBWGd.js';
import { h as handleArrowNavigation, a as handleHomeEndNavigation } from './keyboard-navigation-CF3ljWUs.js';

const inputVariants = cva('placeholder-text-light transition[background-color,color,box-shadow] relative flex min-h-36 min-h-[36px] w-full flex-shrink flex-grow basis-0 gap-4 rounded-md border border-solid py-4 pr-24 pl-8 duration-300 ease-in-out outline-none focus-within:ring-2 focus-within:outline-0', {
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
});
const optionVariants = cva('transition[background-color,color,box-shadow] text-body focus:ring-active-foreground/40 flex w-full cursor-pointer items-center truncate p-8 font-normal duration-300 ease-in-out focus:ring-2 focus:outline-0 focus:ring-inset', {
    variants: {
        active: {
            true: 'bg-active-light text-active',
            false: 'hover:bg-disabled-light bg-white',
        },
    },
});
const AtuiMultiSelectComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { class: "mb-4 flex flex-col" }, h("slot", { name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { for: this.menuId, label: this.label, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { class: "text-med text-xs leading-tight", "data-name": "multi-select-hint" }, this.hint_text))));
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
        const classname = optionVariants({
            active: this.value.includes(option.value),
        });
        return (h("li", { role: "option", "data-name": "multi-select-option", "aria-selected": this.value.includes(option.value), tabIndex: 0, class: classname, onClick: () => this.handleChange(option.value) }, option.value));
    }
    get el() { return getElement(this); }
};

export { AtuiMultiSelectComponent as atui_multi_select };
//# sourceMappingURL=atui-multi-select.entry.js.map

//# sourceMappingURL=atui-multi-select.entry.js.map