'use strict';

var index = require('./index-s6Ut5Yq6.js');
var translation = require('./translation-HqquF7bU.js');
var index$1 = require('./index-palgSxc9.js');
var keyboardNavigation = require('./keyboard-navigation-DKLJuNMB.js');

const inputVariants = index$1.cva('min-h-36 placeholder-text-light transition[background-color,color,box-shadow] relative flex min-h-[36px] w-full flex-shrink flex-grow basis-0 gap-4 rounded-md border border-solid py-4 pl-8 pr-24 outline-none duration-300 ease-in-out focus-within:outline-0 focus-within:ring-2', {
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
const optionVariants = index$1.cva('transition[background-color,color,box-shadow] flex w-full cursor-pointer items-center truncate p-8 text-body font-normal duration-300 ease-in-out focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-active-foreground/40', {
    variants: {
        active: {
            true: 'bg-active-light text-active',
            false: 'bg-white hover:bg-disabled-light',
        },
    },
});
const AtuiMultiSelectComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
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
        this.translations = await translation.fetchTranslations(this.el);
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
        keyboardNavigation.handleArrowNavigation(event, menuContainer);
        keyboardNavigation.handleHomeEndNavigation(event, menuContainer);
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
        return (index.h(index.Host, { key: 'b9d6c8937df024d066b5b00d860ebbc85189c90a', class: "group/select", onFocusout: async (event) => {
                const relatedTarget = event.relatedTarget;
                if (!relatedTarget || !this.el.contains(relatedTarget)) {
                    this.handleClear();
                    setTimeout(async () => {
                        var _a;
                        await ((_a = this.menuRef) === null || _a === void 0 ? void 0 : _a.closeMenu());
                    }, 100);
                }
            } }, this.renderLabel(), index.h("atui-menu", { key: '2e367c9a6469d24a57524773f3c64f25200699cc', ref: (el) => (this.menuRef = el), trigger: "click", align: "start", width: this.parentWidth, role: "listbox", autoclose: false, disabled: this.disabled || this.readonly, onAtuiMenuStateChange: (event) => this.updateIsOpenState(event) }, this.renderInput(), !this.disabled || !this.readonly
            ? this.renderOptions()
            : null), index.h("div", { key: '31aa97991a974932d240cd9941ed4724a2aecffc' }, this.error_text && this.invalid && (index.h("span", { key: '1381282422010f0c610315a8d5966a1cb3a40f15', "data-name": "multi-select-error", class: "text-error" }, this.error_text)))));
    }
    renderLabel() {
        return (index.h("div", { class: "mb-4 flex flex-col" }, index.h("slot", { name: "label" }), (this.label || this.required || this.info_text) && (index.h("atui-form-label", { for: this.menuId, label: this.label, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { class: "text-xs leading-tight text-med", "data-name": "multi-select-hint" }, this.hint_text))));
    }
    renderInput() {
        const classname = inputVariants({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
            typeahead: this.typeahead,
        });
        return (index.h("div", { class: classname, slot: "menu-trigger", tabindex: 0 }, index.h("div", null, index.h("atui-chip-list", { size: "sm", class: "w-full focus-within:ring-0", readonly: this.readonly, disabled: this.disabled, show_clear_all: this.clearable, onAtuiRemoveChip: (event) => {
                this.value = this.value.filter((item) => !event.detail.includes(item));
                this.atuiChange.emit(this.value);
            }, chips: this.value, "data-name": "multi-select-chips-inside" }, this.value.length === 0 && (index.h("div", { class: "pointer-events-none select-none text-body text-disabled" }, this.placeholder)))), !this.readonly && !this.disabled && (index.h("div", { class: "absolute right-4 flex items-center" }, index.h("div", { class: "user-select-none pointer-events-none flex h-full items-center bg-transparent p-4 text-foreground", role: "presentation", tabindex: -1 }, index.h("span", { class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "button-icon-right" }, this.isOpen
            ? 'arrow_drop_up'
            : 'arrow_drop_down'))))));
    }
    renderOptions() {
        var _a, _b, _c, _d, _e;
        return (index.h("ul", { id: this.menuId, role: "listbox", class: "contents", slot: "menu-content", onKeyDown: async (event) => {
                await this.handleKeyDownMenu(event);
            } }, this.typeahead && (index.h("div", { class: "relative z-10 bg-white p-4" }, index.h("input", { "data-name": "multi-select-input", type: "text", class: `transition[background-color,color] mb-4 h-[28px] w-full flex-shrink flex-grow basis-0 rounded-md bg-surface-1 p-8 outline-0 ring-active-foreground/30 duration-300 ease-in-out focus:ring-2 ${this.clearable ? 'pr-24' : ''} `, placeholder: ((_b = (_a = this.translations) === null || _a === void 0 ? void 0 : _a.ATUI) === null || _b === void 0 ? void 0 : _b.SEARCH) || 'Search', name: "", value: this.searchText, onInput: (event) => {
                event.stopPropagation();
                this.handleSearchInput(event);
            }, onClick: (e) => e.stopPropagation(), ref: (el) => (this.searchInputEl = el) }), this.clearable && this.searchText !== '' && (index.h("div", { class: "absolute right-4 top-4" }, index.h("atui-button", { size: "sm", icon: "cancel", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.searchText = '';
                this.searchInputEl.value = '';
            }, "data-name": "multi-select-search-clear" }))))), (_c = this.options) === null || _c === void 0 ? void 0 :
            _c.filter((option) => !this.searchText ||
                option.value
                    .toLowerCase()
                    .includes(this.searchText)).map((option) => this.renderOption(option)), this.typeahead &&
            this.searchText &&
            !this.hasMatchingOptions && (index.h("div", { "data-name": "no-results-found", class: "w-full bg-white px-16 py-8 text-body text-light" }, ((_e = (_d = this.translations) === null || _d === void 0 ? void 0 : _d.ATUI) === null || _e === void 0 ? void 0 : _e.NO_RESULTS_FOUND) ||
            'No results found'))));
    }
    renderOption(option) {
        const classname = optionVariants({
            active: this.value.includes(option.value),
        });
        return (index.h("li", { role: "option", "data-name": "multi-select-option", "aria-selected": this.value.includes(option.value), tabIndex: 0, class: classname, onClick: () => this.handleChange(option.value) }, option.value));
    }
    get el() { return index.getElement(this); }
};

exports.atui_multi_select = AtuiMultiSelectComponent;
//# sourceMappingURL=atui-multi-select.entry.cjs.js.map

//# sourceMappingURL=atui-multi-select.cjs.entry.js.map