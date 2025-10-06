import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-_-xuBOrs.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { c as classlist } from './p-COG8_R0C.js';
import { h as handleArrowNavigation, a as handleHomeEndNavigation } from './p-CF3ljWUs.js';
import { d as defineCustomElement$8 } from './p-C1ISvew5.js';
import { d as defineCustomElement$7 } from './p-BXHzlZWJ.js';
import { d as defineCustomElement$6 } from './p-BzzRGGXm.js';
import { d as defineCustomElement$5 } from './p-KBQbLxfU.js';
import { d as defineCustomElement$4 } from './p-DnZAJRYA.js';
import { d as defineCustomElement$3 } from './p-cDxARn9R.js';
import { d as defineCustomElement$2 } from './p-DZJmpk4T.js';

const inputVariantsConfig = {
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
};
const optionVariantsConfig = {
    variants: {
        active: {
            true: 'bg-active-light text-active',
            false: 'hover:bg-disabled-light bg-white',
        },
    },
};
const AtMultiSelectComponent = /*@__PURE__*/ proxyCustomElement(class AtMultiSelectComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    /**
     * Options displayed in the dropdown menu.
     */
    options;
    /**
     * Label of the select.
     */
    label = '';
    /**
     * Short description or validation hint if required.
     */
    hint_text = '';
    /**
     * Error text for the select.
     */
    error_text = '';
    /**
     * Optional info icon with detailed tooltip description. Displayed at right of label.
     */
    info_text = '';
    /**
     * Placeholder text for the select.
     */
    placeholder = '';
    /**
     * Indicated form field is required.
     */
    required;
    /**
     * Set the select to appear invalid.
     */
    invalid;
    /**
     * Set the select to be clearable.
     */
    clearable;
    /**
     * Disable user interaction. Disabled state should be applied via form control.
     */
    disabled;
    /**
     * Set input to readonly mode, allows users to select any active values.
     */
    readonly;
    /**
     * Set the select to enable typeahead search.
     */
    typeahead;
    /**
     * The selected items
     */
    value = [];
    searchText = '';
    isOpen = false;
    translations;
    hasMatchingOptions = false;
    parentWidth = '';
    get el() { return this; }
    menuId = `dropdown-${Math.random().toString(36).substring(2, 11)}`;
    menuRef;
    searchInputEl;
    /**
     * Emits an event containing a list of the selected items when the selection changes.
     */
    atuiChange;
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
        const inputEl = event.target;
        this.searchText = inputEl.value.toLowerCase();
        const trimmedSearch = this.searchText.trim().toLowerCase();
        this.hasMatchingOptions = trimmedSearch
            ? this.options?.some((option) => option.value.toLowerCase().includes(trimmedSearch))
            : true;
    }
    render() {
        return (h(Host, { key: '76cacca2a1c67893add4544dfeca4944f9a80182', class: "group/select", onFocusout: async (event) => {
                const relatedTarget = event.relatedTarget;
                if (!relatedTarget || !this.el.contains(relatedTarget)) {
                    this.handleClear();
                    setTimeout(async () => {
                        await this.menuRef?.closeMenu();
                    }, 100);
                }
            } }, this.renderLabel(), h("at-menu", { key: '6b13a41a3090891e8e4312937ff7dc618d93358b', ref: (el) => (this.menuRef = el), trigger: "click", align: "start", width: this.parentWidth, role: "listbox", autoclose: false, disabled: this.disabled || this.readonly, onAtuiMenuStateChange: (event) => this.updateIsOpenState(event) }, this.renderInput(), !this.disabled || !this.readonly
            ? this.renderOptions()
            : null), h("div", { key: '4271907f3b133521d599167c0f164f540165ce8f' }, this.error_text && this.invalid && (h("span", { key: '601cf1a98d849e5b0892655653339258a7c1244b', "data-name": "multi-select-error", class: "text-error" }, this.error_text)))));
    }
    renderLabel() {
        return (h("div", { class: "mb-4 flex flex-col" }, h("slot", { name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { for: this.menuId, label: this.label, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { class: "text-med text-xs leading-tight", "data-name": "multi-select-hint" }, this.hint_text))));
    }
    renderInput() {
        const getClassname = classlist('placeholder-text-light transition[background-color,color,box-shadow] relative flex min-h-36 min-h-[36px] w-full flex-shrink flex-grow basis-0 gap-4 rounded-md border border-solid py-4 pr-24 pl-8 duration-300 ease-in-out outline-none focus-within:ring-2 focus-within:outline-0', inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
            typeahead: this.typeahead,
        });
        return (h("div", { class: classname, slot: "menu-trigger", tabindex: 0 }, h("div", null, h("at-chip-list", { size: "sm", class: "w-full focus-within:ring-0", readonly: this.readonly, disabled: this.disabled, show_clear_all: this.clearable, onAtRemoveChip: (event) => {
                this.value = this.value.filter((item) => !event.detail.includes(item));
                this.atuiChange.emit(this.value);
            }, chips: this.value, "data-name": "multi-select-chips-inside" }, this.value.length === 0 && (h("div", { class: "text-body text-disabled pointer-events-none select-none" }, this.placeholder)))), !this.readonly && !this.disabled && (h("div", { class: "absolute right-4 flex items-center" }, h("div", { class: "user-select-none text-foreground pointer-events-none flex h-full items-center bg-transparent p-4", role: "presentation", tabindex: -1 }, h("span", { class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "button-icon-right" }, this.isOpen
            ? 'arrow_drop_up'
            : 'arrow_drop_down'))))));
    }
    renderOptions() {
        return (h("ul", { id: this.menuId, role: "listbox", class: "contents", onKeyDown: async (event) => {
                await this.handleKeyDownMenu(event);
            } }, this.typeahead && (h("div", { class: "relative z-10 bg-white p-4" }, h("input", { "data-name": "multi-select-input", type: "text", class: `transition[background-color,color] bg-surface-1 ring-active-foreground/30 mb-4 h-[28px] w-full flex-shrink flex-grow basis-0 rounded-md p-8 outline-0 duration-300 ease-in-out focus:ring-2 ${this.clearable ? 'pr-24' : ''} `, placeholder: this.translations?.ATUI?.SEARCH || 'Search', name: "", value: this.searchText, onInput: (event) => {
                event.stopPropagation();
                this.handleSearchInput(event);
            }, onClick: (e) => e.stopPropagation(), ref: (el) => (this.searchInputEl = el) }), this.clearable && this.searchText !== '' && (h("div", { class: "absolute top-4 right-4" }, h("at-button", { size: "sm", icon: "cancel", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.searchText = '';
                this.searchInputEl.value = '';
            }, "data-name": "multi-select-search-clear" }))))), this.options
            ?.filter((option) => !this.searchText ||
            option.value
                .toLowerCase()
                .includes(this.searchText))
            .map((option) => this.renderOption(option)), this.typeahead &&
            this.searchText &&
            !this.hasMatchingOptions && (h("div", { "data-name": "no-results-found", class: "text-body text-light w-full bg-white px-16 py-8" }, this.translations?.ATUI?.NO_RESULTS_FOUND ||
            'No results found'))));
    }
    renderOption(option) {
        const getOptionClassname = classlist('transition[background-color,color,box-shadow] text-body focus:ring-active-foreground/40 flex w-full cursor-pointer items-center truncate p-8 font-normal duration-300 ease-in-out focus:ring-2 focus:outline-0 focus:ring-inset', optionVariantsConfig);
        const classname = getOptionClassname({
            active: this.value.includes(option.value),
        });
        return (h("li", { role: "option", "data-name": "multi-select-option", "aria-selected": this.value.includes(option.value), tabIndex: 0, class: classname, onClick: () => this.handleChange(option.value) }, option.value));
    }
}, [260, "at-multi-select", {
        "options": [16],
        "label": [1],
        "hint_text": [1],
        "error_text": [1],
        "info_text": [1],
        "placeholder": [1],
        "required": [4],
        "invalid": [4],
        "clearable": [4],
        "disabled": [4],
        "readonly": [4],
        "typeahead": [4],
        "value": [1040],
        "searchText": [32],
        "isOpen": [32],
        "translations": [32],
        "hasMatchingOptions": [32],
        "parentWidth": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-multi-select", "at-badge", "at-button", "at-chip-list", "at-form-label", "at-loading", "at-menu", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-multi-select":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtMultiSelectComponent);
            }
            break;
        case "at-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "at-chip-list":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "at-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtMultiSelect = AtMultiSelectComponent;
const defineCustomElement = defineCustomElement$1;

export { AtMultiSelect, defineCustomElement };
//# sourceMappingURL=at-multi-select.js.map

//# sourceMappingURL=at-multi-select.js.map