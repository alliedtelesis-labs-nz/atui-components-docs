import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-DV1DLMEm.js';
import { f as fetchTranslations } from './translation-DuLooPsr.js';
import { c as cva } from './index-CVoOBWGd.js';

const inputVariants = cva('min-h-36 placeholder-text-light relative flex min-h-[36px] w-full flex-shrink flex-grow basis-0 gap-4 rounded-md border border-solid py-4 pl-8 pr-24 outline-none transition-colors duration-300 ease-in-out focus-within:outline-0 focus-within:ring-2', {
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
const searchVariants = cva('transition[background-color,color] h-24 flex-shrink flex-grow basis-0 rounded-md p-8 outline-0 duration-300 ease-in-out', {
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
const optionVariants = cva('transition[background-color,color,box-shadow] flex w-full cursor-pointer items-center truncate p-8 text-body font-normal duration-300 ease-in-out focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-active-foreground/40', {
    variants: {
        active: {
            true: 'bg-active-light text-active',
            false: 'bg-white hover:bg-disabled-light',
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
        return (h(Host, { key: '0c4532cb6b8da829e7543ac729ae9ebac6eb7b84', class: "relative", onFocusout: async (event) => {
                var _a;
                if (!this.el.contains(event.relatedTarget)) {
                    await ((_a = this.menuRef) === null || _a === void 0 ? void 0 : _a.closeMenu());
                }
            } }, this.renderLabel(), h("atui-menu", { key: '5e95505e4b47854665592910eb6d95b847de1922', ref: (el) => (this.menuRef = el), trigger: "click", align: "start", role: "listbox", width: this.parentWidth, autoclose: false, portal: true, disabled: this.disabled || this.readonly, onAtuiMenuStateChange: (event) => this.updateIsOpenState(event) }, this.renderInput(), !this.disabled || !this.readonly
            ? this.renderOptions()
            : null), h("div", { key: '7e553b33977d0c40adb6a82c7c2ec299ad57e16f' }, this.error_text && this.invalid && (h("span", { key: '8e0dacfd466ea006ff04381ac3e64fba37bc69df', "data-name": "multi-select-error", class: "text-error" }, this.error_text)), this.chip_list && (h("atui-chip-list", { key: 'fe3157e0bce58c2b335476879a8480d08c6b786b', onAtuiRemoveChip: (event) => (this.value = this.value.filter((item) => !event.detail.includes(item))), chips: this.value, "data-name": "multi-select-chips-outside" })))));
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
        const searchClassname = searchVariants({
            typeahead: this.typeahead,
        });
        return (h("div", { class: classname, tabIndex: -1, slot: "menu-trigger" }, h("atui-chip-list", { size: "sm", class: "w-full", readonly: this.readonly, disabled: this.disabled, show_clear_all: false, onAtuiRemoveChip: (event) => {
                if (!this.disabled &&
                    !this.readonly &&
                    this.typeahead) {
                    this.inputEl.focus();
                }
                this.value = this.value.filter((item) => !event.detail.includes(item));
            }, chips: this.chip_list ? [] : this.value, tabIndex: -1, "data-name": "multi-select-chips-inside" }, this.typeahead && (h("input", { id: `input-${this.menuId}`, role: "combobox", "aria-autocomplete": this.typeahead ? 'list' : undefined, "aria-haspopup": !this.chip_list ? true : undefined, "aria-controls": this.menuId, class: searchClassname, type: "text", readOnly: this.readonly, placeholder: this.placeholder, onKeyDown: async (event) => {
                await this.handleKeyDownInput(event);
            }, "data-name": "multi-select-search-input", ref: (el) => (this.inputEl = el) }))), !this.readonly && !this.disabled && (h("div", { class: "absolute right-4 flex items-center" }, this.clearable && (h("atui-button", { class: `transition-all duration-300 ease-in-out ${!!this.value.length || this.searchText
                ? 'scale-100 opacity-100'
                : 'pointer-events-none scale-90 opacity-0'}`, size: "sm", icon: "cancel", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, "data-name": "multi-select-clear" })), h("atui-button", { size: "sm", class: "!i>text-light h-[18pz] w-[18px]", icon: this.isOpen
                ? 'arrow_drop_up'
                : 'arrow_drop_down', type: "secondaryText", onClick: async () => {
                await this.menuRef.toggleMenu;
            } })))));
    }
    renderOptions() {
        var _a;
        return (h("ul", { id: this.menuId, role: "listbox", class: "contents", slot: "menu-content", onKeyDown: async (event) => {
                await this.handleKeyDownMenu(event);
            } }, (_a = this.options) === null || _a === void 0 ? void 0 :
            _a.filter((option) => option.value.toLowerCase().includes(this.searchText)).map((option) => this.renderOption(option)), this.typeahead && !this.hasMatchingOptions && (h("div", { class: "w-full bg-white px-16 py-8 text-body text-light" }, this.translations.ATUI.NO_RESULTS_FOUND))));
    }
    renderOption(option) {
        const classname = optionVariants({
            active: this.value.includes(option.value),
        });
        return (h("li", { role: "option", "data-name": "multi-select-option", "aria-selected": this.value.includes(option.value), tabIndex: 0, class: classname, onClick: () => this.handleChange(option.value) }, h("i", { role: "presentation", class: `material-icons h-16 w-16 text-sm ease-in-out ${this.value.includes(option.value) ? 'visible' : 'hidden'}` }, "check"), option.value));
    }
    get el() { return getElement(this); }
};

export { AtuiMultiSelectComponent as atui_multi_select };
//# sourceMappingURL=atui-multi-select.entry.js.map

//# sourceMappingURL=atui-multi-select.entry.js.map