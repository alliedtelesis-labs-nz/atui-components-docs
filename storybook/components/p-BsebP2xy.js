import { p as proxyCustomElement, H, d as createEvent, h } from './p-_-xuBOrs.js';
import { d as defineCustomElement$4 } from './p-BXHzlZWJ.js';
import { d as defineCustomElement$3 } from './p-BXRgp8Gw.js';
import { d as defineCustomElement$2 } from './p-DnZAJRYA.js';
import { d as defineCustomElement$1 } from './p-Dz-BF1zu.js';

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
        return (h("div", { key: 'a21eb0988151f4f2f6c59f77053ff661888c05f6' }, (this.label || this.info_text) && (h("at-form-label", { key: '503354533d1b5a3fe7c020470d953fa2c88a1837', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: 'e3570ca7b14f454a0661a06a223525de995719a4', class: "active-within:border-active-dark transition[background-color,color,box-shadow] border-med bg-surface-0 focus-within:border-active-dark focus-within:ring-active-foreground/30 relative flex h-[36px] flex-row items-center justify-center rounded-md border duration-300 ease-in-out focus-within:ring-2" }, h("span", { key: '0718b3bb49e1bd98392c1746a9507ffdbec45222', class: "px-8" }, h("i", { key: 'f29213ef45c8c1c879fa4193dd6472889c9ec9b1', class: "material-icons text-light !text-[16px] !leading-[30px]" }, "search")), h("input", { key: 'c31ff327e88614e67a42132a889ade265c2912bf', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: '53b504fa5a346d1ec0d090f1d9516d89d3d8d2b5', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("at-button", { key: '164ac4271630766f1ae04497b1fab0b7247ae64d', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), h("span", { key: '1abe9527f3d5bcb61e1aaada1704c8ff6f9bbd3f', class: "text-med mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
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
//# sourceMappingURL=p-BsebP2xy.js.map

//# sourceMappingURL=p-BsebP2xy.js.map