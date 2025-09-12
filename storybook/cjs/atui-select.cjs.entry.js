'use strict';

var index = require('./index-i7hIKTeN.js');
var translation = require('./translation-HqquF7bU.js');
var classlist = require('./classlist-BddvonaD.js');
var keyboardNavigation = require('./keyboard-navigation-DKLJuNMB.js');

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
        return (index.h(index.Host, { key: 'dedac843c3bf2509213f4fe4f5632c13d4365260', class: "group/select", onFocusout: async (event) => {
                await this.handleClear();
                const relatedTarget = event.relatedTarget;
                if (!relatedTarget || !this.el.contains(relatedTarget)) {
                    setTimeout(async () => {
                        var _a;
                        await ((_a = this.menuRef) === null || _a === void 0 ? void 0 : _a.closeMenu());
                    }, 100);
                }
            } }, this.renderLabel(), index.h("atui-menu", { key: 'b73eb4989a44f29563c1545bb3e712846fe04d48', ref: (el) => (this.menuRef = el), trigger: "click", align: "start", width: this.parentWidth, role: "listbox", disabled: this.disabled || this.readonly, onAtuiMenuStateChange: (event) => this.updateIsOpenState(event) }, this.renderInput(), !this.disabled || !this.readonly
            ? this.renderOptions()
            : null), index.h("div", { key: '827ebfa927c0ba85bc177f8b7902781a8989f58a' }, this.error_text && this.invalid && (index.h("span", { key: 'e574aa1c1980bce7337e57719c1005af0b9e140f', class: "text-error", "data-name": "select-error" }, this.error_text)))));
    }
    renderLabel() {
        return (index.h("div", { class: "mb-4 flex flex-col" }, index.h("slot", { name: "label" }), (this.label || this.required || this.info_text) && (index.h("atui-form-label", { for: this.menuId, label: this.label, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { class: "text-light inline-block text-xs leading-tight", "data-name": "select-hint" }, this.hint_text))));
    }
    renderInput() {
        const getClassname = classlist.classlist('height-[36px] transition[background-color,color,box-shadow] placeholder-text-light group/select:focus-within:ring-2 w-full cursor-pointer rounded-md border border-solid p-8 outline-0 duration-300 ease-in-out select-none focus:ring-2', inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (index.h("div", { class: "relative flex items-center gap-4", slot: "menu-trigger" }, index.h("input", { class: classname, role: "combobox", list: "atui-select", "aria-expanded": this.isOpen, "aria-controls": this.menuId, type: "text", readonly: true, "aria-disabled": this.disabled, disabled: this.disabled, placeholder: this.placeholder, value: this.value, "data-name": "select-input", ref: (el) => (this.inputEl = el) }), !this.readonly && !this.disabled && (index.h("div", { class: "bg-surface1 absolute right-4 flex h-full cursor-pointer items-center rounded-md p-4 select-none", role: "presentation", tabindex: -1 }, index.h("span", { class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "button-icon-right" }, this.isOpen ? 'arrow_drop_up' : 'arrow_drop_down')))));
    }
    renderOptions() {
        var _a, _b, _c, _d, _e;
        return (index.h("ul", { class: "contents", id: "atui-select", onKeyDown: async (event) => {
                await this.handleKeyDownMenu(event);
            } }, this.typeahead && (index.h("div", { class: "relative z-10 bg-white p-4" }, index.h("input", { type: "text", class: `transition[background-color,color] bg-surface-1 ring-active-foreground/30 mb-4 h-[28px] w-full flex-shrink flex-grow basis-0 rounded-md p-8 outline-0 duration-300 ease-in-out focus:ring-2 ${this.clearable ? 'pr-24' : ''} `, placeholder: ((_b = (_a = this.translations) === null || _a === void 0 ? void 0 : _a.ATUI) === null || _b === void 0 ? void 0 : _b.SEARCH) || 'Search', name: "", autoComplete: "off", "aria-autocomplete": "list", value: this.searchText, onInput: (event) => {
                event.stopPropagation();
                this.handleSearchInput(event);
            }, onClick: (e) => e.stopPropagation(), ref: (el) => (this.searchInputEl = el) }), this.clearable && this.searchText !== '' && (index.h("div", { class: "absolute top-4 right-4" }, index.h("atui-button", { size: "sm", icon: "cancel", type: "secondaryText", onClick: async (event) => {
                event.stopPropagation();
                await this.handleClear();
            }, "data-name": "select-clear" }))))), (_c = this.options) === null || _c === void 0 ? void 0 :
            _c.filter((option) => !this.searchText ||
                option.value
                    .toLowerCase()
                    .includes(this.searchText)).map((option) => this.renderOption(option)), this.typeahead &&
            this.searchText &&
            !this.hasMatchingOptions && (index.h("div", { class: "text-body text-light w-full bg-white px-16 py-8" }, ((_e = (_d = this.translations) === null || _d === void 0 ? void 0 : _d.ATUI) === null || _e === void 0 ? void 0 : _e.NO_RESULTS_FOUND) ||
            'No results found'))));
    }
    renderOption(option) {
        const getOptionClassname = classlist.classlist('transition[background-color,color,box-shadow] text-body focus:ring-active-foreground/40 flex w-full cursor-pointer items-center truncate p-8 font-normal duration-300 ease-in-out focus:ring-2 focus:outline-0 focus:ring-inset', optionVariantsConfig);
        const classname = getOptionClassname({
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