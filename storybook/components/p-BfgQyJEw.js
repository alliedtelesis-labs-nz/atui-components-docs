import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { c as classlist } from './p-COG8_R0C.js';
import { h as handleArrowNavigation, a as handleHomeEndNavigation } from './p-CF3ljWUs.js';
import { d as defineCustomElement$6 } from './p-Dx91wqSp.js';
import { d as defineCustomElement$5 } from './p-C267TtKm.js';
import { d as defineCustomElement$4 } from './p-bn76tgB4.js';
import { d as defineCustomElement$3 } from './p-DHT6iuTT.js';
import { d as defineCustomElement$2 } from './p-DZtNVY8n.js';
import { d as defineCustomElement$1 } from './p-DOs9EXMS.js';

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
const AtSelectComponent = /*@__PURE__*/ proxyCustomElement(class AtSelectComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    /**
     * Value of the currently selected option
     */
    value;
    /**
     * Sets the options in the dropdown
     */
    options;
    /**
     * Label of the input.
     */
    label;
    /**
     * Short description or validation hint if required.
     */
    hint_text;
    /**
     * Optional info icon with detailed tooltip description. Displayed at right of label.
     */
    info_text;
    /**
     * Placeholder for the select.
     */
    placeholder;
    /**
     * Error message visible when input is valid.
     */
    error_text;
    /**
     * Indicated form field is required.
     */
    required;
    /**
     * Set the input to appear valid.
     */
    invalid;
    /**
     * Disable user interaction. Disabled state should be applied via form control.
     */
    disabled;
    /**
     * Set input to readonly mode, allows users to select any active values.
     */
    readonly;
    /**
     * Set the select input to be clearable. Only enabled on typeahead selects.
     */
    clearable;
    /**
     * Set the select to appear as a typeahead input.
     */
    typeahead = false;
    /**
     * Close the menu when the user clicks within the menu panel. Default for single selection menus.
     */
    autoclose = true;
    inputEl;
    searchText = '';
    isOpen = false;
    translations;
    hasMatchingOptions = false;
    hasMatchingElOptions = false;
    parentWidth;
    get el() { return this; }
    menuId = `dropdown-${Math.random().toString(36).substring(2, 11)}`;
    menuRef;
    optionEls = [];
    searchInputEl;
    watchValue(newValue) {
        this.optionEls.forEach((optionEl) => {
            optionEl.is_active = newValue === optionEl.value;
        });
    }
    watchSearchText(newSearch) {
        const trimmedSearch = newSearch.trim().toLowerCase();
        if (this.options && this.options.length > 0) {
            this.hasMatchingOptions = this.hasMatchingItems(this.options, newSearch);
            return;
        }
        this.optionEls.forEach((optionEl) => {
            const matches = !trimmedSearch ||
                optionEl.value.toLowerCase().includes(trimmedSearch);
            optionEl.style.display = matches ? '' : 'none';
        });
        this.hasMatchingOptions = Array.from(this.optionEls).some((el) => el.style.display !== 'none');
    }
    /**
     * Emits an event containing the selected value when changed.
     */
    atuiChange;
    componentWillLoad() {
        fetchTranslations(this.el).then((translations) => {
            this.translations = translations;
        });
    }
    componentDidLoad() {
        this.setupOptionElements();
        const parentRect = this.el.getBoundingClientRect();
        this.parentWidth = `${parentRect.width}px`;
    }
    setupOptionElements() {
        this.el.querySelectorAll('at-select-option').forEach((option) => {
            const optionEl = option;
            optionEl.is_active = this.value === optionEl.value;
            optionEl.addEventListener('atuiClick', (event) => {
                this.handleChange(event.detail);
            });
            this.optionEls.push(optionEl);
        });
    }
    updateIsOpenState(event) {
        this.isOpen = event.detail;
        const triggerEl = this.el.querySelector('[slot="menu-trigger"]');
        const rect = triggerEl?.getBoundingClientRect();
        if (rect && rect.width > 0) {
            this.parentWidth = `${rect.width}px`;
        }
        if (this.isOpen && this.typeahead) {
            requestAnimationFrame(() => {
                if (this.searchInputEl) {
                    this.searchInputEl.focus();
                }
            });
        }
    }
    async handleChange(option) {
        if (this.autoclose) {
            await this.menuRef?.closeMenu();
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
    hasMatchingItems(items, searchText) {
        const trimmedSearch = searchText.trim().toLowerCase();
        return trimmedSearch
            ? (items?.some((item) => item.value.toLowerCase().includes(trimmedSearch)) ?? false)
            : true;
    }
    handleSearchInput(event) {
        const inputEl = event.target;
        this.searchText = inputEl.value.toLowerCase();
        this.hasMatchingOptions = this.hasMatchingItems(this.options, this.searchText);
        this.hasMatchingElOptions = this.hasMatchingItems(this.optionEls, this.searchText);
    }
    render() {
        return (h(Host, { key: '304859468c52a547c5e080eed637c779833d8be5', class: "group/select", onFocusout: async (event) => {
                await this.handleClear();
                const relatedTarget = event.relatedTarget;
                if (!relatedTarget || !this.el.contains(relatedTarget)) {
                    setTimeout(async () => {
                        await this.menuRef?.closeMenu();
                    }, 100);
                }
            } }, this.renderLabel(), h("at-menu", { key: '3968370cea837f0f4dca5ffbe7e5be88c02bff6f', ref: (el) => (this.menuRef = el), trigger: "click", align: "start", width: this.parentWidth, role: "listbox", disabled: this.disabled || this.readonly, onAtuiMenuStateChange: (event) => this.updateIsOpenState(event) }, this.renderInput(), !this.disabled || !this.readonly
            ? this.renderOptions()
            : null), h("div", { key: '1d273cd90fcddf3d9f93b9684b60547c7dab368e' }, this.error_text && this.invalid && (h("span", { key: '724574843b4db099e68b517a423cf4da2da4b3f7', class: "text-error", "data-name": "select-error" }, this.error_text)))));
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
        return (h("ul", { class: "contents", id: "at-select", onKeyDown: async (event) => {
                await this.handleKeyDownMenu(event);
            } }, this.typeahead && (h("div", { class: "relative z-10 bg-white p-4" }, h("input", { type: "text", class: `transition[background-color,color] bg-surface-1 ring-active-foreground/30 mb-4 h-[28px] w-full flex-shrink flex-grow basis-0 rounded-md p-8 outline-0 duration-300 ease-in-out focus:ring-2 ${this.clearable ? 'pr-24' : ''} `, placeholder: this.translations?.ATUI?.SEARCH || 'Search', name: "", autoComplete: "off", "aria-autocomplete": "list", value: this.searchText, onInput: (event) => {
                event.stopPropagation();
                this.handleSearchInput(event);
            }, onClick: (e) => e.stopPropagation(), ref: (el) => (this.searchInputEl = el) }), this.clearable && this.searchText !== '' && (h("div", { class: "absolute top-4 right-4" }, h("at-button", { class: "m-2", size: "sm", icon: "cancel", type: "secondaryText", onClick: async (event) => {
                event.stopPropagation();
                await this.handleClear();
            }, "data-name": "select-clear" }))))), this.options
            ?.filter((option) => !this.searchText ||
            option.value
                .toLowerCase()
                .includes(this.searchText.toLowerCase()))
            .map((option) => this.renderOption(option)), h("slot", null), this.typeahead &&
            this.searchText &&
            !this.hasMatchingOptions &&
            !this.hasMatchingElOptions && (h("div", { class: "text-body text-light w-full bg-white px-16 py-8" }, this.translations?.ATUI?.NO_RESULTS_FOUND ||
            'No results found'))));
    }
    renderOption(option) {
        return (h("at-select-option", { value: option.value, is_active: this.value === option.value, onAtuiClick: () => this.handleChange(option.value) }));
    }
    static get watchers() { return {
        "value": ["watchValue"],
        "searchText": ["watchSearchText"]
    }; }
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
        "hasMatchingElOptions": [32],
        "parentWidth": [32]
    }, undefined, {
        "value": ["watchValue"],
        "searchText": ["watchSearchText"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-select", "at-button", "at-form-label", "at-loading", "at-menu", "at-select-option", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-select":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtSelectComponent);
            }
            break;
        case "at-button":
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
        case "at-select-option":
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
//# sourceMappingURL=p-BfgQyJEw.js.map

//# sourceMappingURL=p-BfgQyJEw.js.map