'use strict';

var index = require('./index-DGivrgtr.js');
var translation = require('./translation-HqquF7bU.js');
var index$1 = require('./index-palgSxc9.js');

const inputVariants = index$1.cva('min-h-36 placeholder-text-light relative flex min-h-[36px] w-full flex-shrink flex-grow basis-0 gap-4 rounded-md border border-solid py-4 pl-8 pr-24 outline-none transition-colors duration-300 ease-in-out focus-within:outline-0 focus-within:ring-2', {
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
const searchVariants = index$1.cva('transition[background-color,color] h-24 flex-shrink flex-grow basis-0 rounded-md p-8 outline-0 duration-300 ease-in-out', {
    variants: {
        typeahead: {
            true: 'focus:bg-surface-1',
            false: 'cursor-pointer bg-transparent caret-transparent',
        },
        disabled: {
            true: 'pointer-events-none bg-transparent',
            false: 'bg-surface-base',
        },
    },
    defaultVariants: {
        disabled: false,
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
    handleChange(option) {
        this.value = this.value.includes(option)
            ? this.value.filter((item) => item !== option)
            : [...this.value, option];
        this.inputEl.value = '';
        this.searchText = '';
        this.atuiChange.emit(this.value);
    }
    handleClear() {
        this.searchText = '';
        this.value = [];
        this.inputEl.value = '';
        this.inputEl.focus();
        this.atuiChange.emit(this.value);
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
        return (index.h(index.Host, { key: 'b617bade43254a39e79d23893b037db748531035', class: "relative", onFocusout: async (event) => {
                var _a;
                if (!this.el.contains(event.relatedTarget)) {
                    await ((_a = this.menuRef) === null || _a === void 0 ? void 0 : _a.closeMenu());
                }
            } }, this.renderLabel(), index.h("atui-menu", { key: 'c240e61997b7e1b59cf4f2db4bfeda83ffc8afbd', ref: (el) => (this.menuRef = el), trigger: "click", align: "start", role: "listbox", width: this.parentWidth, autoclose: false, disabled: this.disabled || this.readonly, onMenuStateChange: (event) => this.updateIsOpenState(event) }, this.renderInput(), !this.disabled || !this.readonly
            ? this.renderOptions()
            : null), index.h("div", { key: '8c3b9c1e7a47ffdec97f7ea41e6d59fc3e65c323' }, this.error_text && this.invalid && (index.h("span", { key: '76bb057970fffb2b6d30f1dd5f6e79a6ba91040d', "data-name": "multi-select-error", class: "text-error" }, this.error_text)), this.chip_list && (index.h("atui-chip-list", { key: '2a2181587b9444dda08fbb8dd257c8ebec63bd21', onAtuiRemoveChip: (event) => (this.value = this.value.filter((item) => !event.detail.includes(item))), chips: this.value, "data-name": "multi-select-chips-outside" })))));
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
        const searchClassname = searchVariants({
            typeahead: this.typeahead,
        });
        return (index.h("div", { class: classname, tabIndex: -1, slot: "menu-trigger" }, index.h("atui-chip-list", { size: "sm", class: "w-full", readonly: this.readonly, disabled: this.disabled, show_clear_all: false, onAtuiRemoveChip: (event) => {
                if (!this.disabled &&
                    !this.readonly &&
                    this.typeahead) {
                    this.inputEl.focus();
                }
                this.value = this.value.filter((item) => !event.detail.includes(item));
            }, chips: this.chip_list ? [] : this.value, tabIndex: -1, "data-name": "multi-select-chips-inside" }, this.typeahead && (index.h("input", { id: `input-${this.menuId}`, role: "combobox", "aria-autocomplete": this.typeahead ? 'list' : undefined, "aria-haspopup": !this.chip_list ? true : undefined, "aria-controls": this.menuId, class: searchClassname, type: "text", readOnly: this.readonly, placeholder: this.placeholder, onKeyDown: async (event) => {
                await this.handleKeyDownInput(event);
            }, "data-name": "multi-select-search-input", ref: (el) => (this.inputEl = el) }))), !this.readonly && !this.disabled && (index.h("div", { class: "absolute right-4 flex items-center" }, this.clearable && (index.h("atui-button", { class: `transition-all duration-300 ease-in-out ${!!this.value.length || this.searchText
                ? 'scale-100 opacity-100'
                : 'pointer-events-none scale-90 opacity-0'}`, size: "sm", icon: "cancel", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, "data-name": "multi-select-clear" })), index.h("atui-button", { size: "sm", class: "!i>text-light h-[18pz] w-[18px]", icon: this.isOpen
                ? 'arrow_drop_up'
                : 'arrow_drop_down', type: "secondaryText", onClick: async () => {
                await this.menuRef.toggleMenu;
            } })))));
    }
    renderOptions() {
        var _a;
        return (index.h("ul", { id: this.menuId, role: "listbox", class: "contents", slot: "menu-content", onKeyDown: async (event) => {
                await this.handleKeyDownMenu(event);
            } }, (_a = this.options) === null || _a === void 0 ? void 0 :
            _a.filter((option) => option.value.toLowerCase().includes(this.searchText)).map((option) => this.renderOption(option)), this.typeahead && !this.hasMatchingOptions && (index.h("div", { class: "w-full bg-white px-16 py-8 text-body text-light" }, this.translations.ATUI.NO_RESULTS_FOUND))));
    }
    renderOption(option) {
        const classname = optionVariants({
            active: this.value.includes(option.value),
        });
        return (index.h("li", { role: "option", "data-name": "multi-select-option", "aria-selected": this.value.includes(option.value), tabIndex: 0, class: classname, onClick: () => this.handleChange(option.value) }, index.h("i", { role: "presentation", class: `material-icons h-16 w-16 text-sm ease-in-out ${this.value.includes(option.value) ? 'visible' : 'hidden'}` }, "check"), option.value));
    }
    get el() { return index.getElement(this); }
};

exports.atui_multi_select = AtuiMultiSelectComponent;
//# sourceMappingURL=atui-multi-select.entry.cjs.js.map

//# sourceMappingURL=atui-multi-select.cjs.entry.js.map