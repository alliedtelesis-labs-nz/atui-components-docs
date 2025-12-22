import { p as proxyCustomElement, H, d as createEvent, h } from './p-89eupKrN.js';
import { d as defineCustomElement$4 } from './p-Dx91wqSp.js';
import { d as defineCustomElement$3 } from './p-CIL9MUFC.js';
import { d as defineCustomElement$2 } from './p-bn76tgB4.js';
import { d as defineCustomElement$1 } from './p-B8lZLFeC.js';

const AtSearch = /*@__PURE__*/ proxyCustomElement(class AtSearch extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atuiChange = createEvent(this, "atChange", 7);
    }
    /**
     * Label text above the search bar.
     */
    label;
    /**
     * Hint text for the input, appears below the search bar.
     */
    hint_text;
    /**
     * Tooltip description.
     */
    info_text;
    /**
     * Placeholder text inside the search component.
     */
    placeholder;
    /**
     * String content of the search.
     */
    model;
    searchEl;
    /**
     * Emits an event when the input is changed. Used by atui-table.
     */
    atuiChange;
    onChangeFn() {
        this.atuiChange.emit(this.searchEl.value);
        this.model = this.searchEl.value;
    }
    clearFn() {
        this.searchEl.value = '';
        this.atuiChange.emit(this.searchEl.value);
        this.model = '';
        this.searchEl.focus();
    }
    render() {
        return (h("div", { key: '0b6b06a5d5961502a5708211e27773f7ce29088c' }, (this.label || this.info_text) && (h("at-form-label", { key: 'c2fa0a14e7f6334f1f3b858a650aa851c6fa4b2d', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: 'e1a93052f772cfbc69b87385847fdefcc3c13f6e', class: "active-within:border-active-dark transition[background-color,color,box-shadow] border-med bg-surface-0 focus-within:border-active-dark focus-within:ring-active-foreground/40 relative flex h-[36px] flex-row items-center justify-center rounded-md border duration-300 ease-in-out focus-within:ring-2" }, h("span", { key: '0d65b029fb430adbfb2fa56950880007fb1f1687', class: "px-8" }, h("i", { key: '91832c550295aa654370a0e07f51772058ced9a0', class: "material-icons text-light !text-[16px] !leading-[30px]" }, "search")), h("input", { key: '8b788faec855bae92e820d9d58b38e5f634cc59b', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: '77bf932b98c66a7a09de1b4bf842f3ea9cb7f624', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("at-button", { key: '287428398f8216158010fde3ab9d77442eb8c56c', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), h("span", { key: '4c782338d19303a3e2d52072235e2360d2954ccb', class: "text-med mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
    }
}, [256, "at-search", {
        "label": [1],
        "hint_text": [1],
        "info_text": [1],
        "placeholder": [1],
        "model": [1025],
        "searchEl": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-search", "at-button", "at-form-label", "at-loading", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-search":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtSearch);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-loading":
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

export { AtSearch as A, defineCustomElement as d };
//# sourceMappingURL=p-CgPg7b0T.js.map

//# sourceMappingURL=p-CgPg7b0T.js.map