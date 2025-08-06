'use strict';

var index = require('./index-43B6Ydvl.js');
var translation = require('./translation-HqquF7bU.js');
var index$1 = require('./index-palgSxc9.js');
var keyboardNavigation = require('./keyboard-navigation-C86hnC6q.js');

const inputVariants = index$1.cva('height-[36px] transition[background-color,color,box-shadow] placeholder-text-light group/select:focus-within:ring-2 w-full cursor-pointer rounded-md border border-solid p-8 outline-0 duration-300 ease-in-out focus:ring-2', {
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
const optionVariants = index$1.cva('transition[background-color,color,box-shadow] flex w-full cursor-pointer items-center truncate p-8 text-body font-normal duration-300 ease-in-out focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-active-foreground/40', {
    variants: {
        active: {
            true: 'bg-active-light text-active',
            false: 'bg-white hover:bg-disabled-light',
        },
    },
});
const AtuiSelectComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
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
        this.translations = await translation.fetchTranslations(this.el);
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
        keyboardNavigation.handleArrowNavigation(event, menuContainer);
        keyboardNavigation.handleHomeEndNavigation(event, menuContainer);
    }
    render() {
        return (index.h(index.Host, { key: '58deee56f8d6ab3ea1d779b45686c11bbaf64c21', class: "group/select", onFocusout: async (event) => {
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
            } }, this.renderlabel(), index.h("atui-menu", { key: '6165bc8488e64a7aa761f444788202be2657020d', ref: (el) => (this.menuRef = el), trigger: "click", align: "start", width: this.parentWidth, role: "listbox", portal: true, disabled: this.disabled || this.readonly, onAtuiMenuStateChange: (event) => this.updateIsOpenState(event) }, this.renderInput(), !this.disabled || !this.readonly
            ? this.renderOptions()
            : null), index.h("div", { key: '18d998354c477ff1d690043bc98d3be86e51086e' }, this.error_text && this.invalid && (index.h("span", { key: '163d5c88c2e27d003b8bb3d60b24201bb05f8af9', class: "text-error", "data-name": "select-error" }, this.error_text)))));
    }
    renderlabel() {
        return (index.h("div", { class: "mb-4 flex flex-col" }, index.h("slot", { name: "label" }), (this.label || this.required || this.info_text) && (index.h("atui-form-label", { for: this.menuId, label: this.label, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { class: "inline-block text-xs leading-tight text-light", "data-name": "select-hint" }, this.hint_text))));
    }
    renderInput() {
        const classname = inputVariants({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (index.h("div", { class: "relative flex items-center gap-4", slot: "menu-trigger" }, index.h("input", { class: classname, role: "combobox", list: "atui-select", autoComplete: "off", "aria-autocomplete": this.typeahead ? 'list' : undefined, "aria-expanded": this.isOpen, "aria-controls": this.menuId, type: "text", readonly: true, disabled: this.disabled, placeholder: this.placeholder, value: this.value, onInput: (e) => e.preventDefault(), "data-name": "select-input", ref: (el) => (this.inputEl = el) }), !this.readonly && !this.disabled && (index.h("div", { class: "user-select-none pointer-events-none absolute right-4 flex h-full items-center bg-transparent p-4 text-foreground", role: "presentation", tabindex: -1 }, index.h("span", { class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "button-icon-right" }, this.isOpen ? 'arrow_drop_up' : 'arrow_drop_down')))));
    }
    renderOptions() {
        var _a, _b, _c;
        return (index.h("ul", { slot: "menu-content", class: "contents", id: "atui-select", onKeyDown: async (event) => {
                await this.handleKeyDownMenu(event);
            } }, this.typeahead && (index.h("div", { class: "relative z-10 bg-white p-4" }, index.h("input", { type: "text", class: `transition[background-color,color] mb-4 h-24 w-full flex-shrink flex-grow basis-0 rounded-md bg-surface-1 p-8 outline-0 ring-active-foreground/30 duration-300 ease-in-out focus:ring-2 ${this.clearable ? 'pr-24' : ''} `, placeholder: "Search...", value: this.searchText, onInput: (event) => {
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
            }, onClick: (e) => e.stopPropagation() }), this.clearable && this.searchText !== '' && (index.h("div", { class: "absolute right-4 top-4" }, index.h("atui-button", { size: "sm", icon: "cancel", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, "data-name": "select-clear" }))))), (_a = this.options) === null || _a === void 0 ? void 0 :
            _a.filter((option) => !this.searchText ||
                option.value
                    .toLowerCase()
                    .includes(this.searchText)).map((option) => this.renderOption(option)), this.typeahead &&
            this.searchText &&
            !this.hasMatchingOptions && (index.h("div", { class: "w-full bg-white px-16 py-8 text-body text-light" }, ((_c = (_b = this.translations) === null || _b === void 0 ? void 0 : _b.ATUI) === null || _c === void 0 ? void 0 : _c.NO_RESULTS_FOUND) ||
            'No results found'))));
    }
    renderOption(option) {
        const classname = optionVariants({
            active: this.value === option.value,
        });
        const isSelected = this.value === option.value;
        return (index.h("li", { role: "option", value: option.value, "data-name": "select-option", "aria-selected": isSelected ? 'true' : 'false', tabIndex: 0, class: classname, onClick: () => this.handleChange(option.value) }, option.value));
    }
    get el() { return index.getElement(this); }
};

exports.atui_select = AtuiSelectComponent;
//# sourceMappingURL=atui-select.entry.cjs.js.map

//# sourceMappingURL=atui-select.cjs.entry.js.map