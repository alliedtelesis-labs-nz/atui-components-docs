import { p as proxyCustomElement, H, d as createEvent, h } from './p-DJD-7SVX.js';
import { d as defineCustomElement$4 } from './p-CGoVUV9r.js';
import { d as defineCustomElement$3 } from './p-BYrz7h7d.js';
import { d as defineCustomElement$2 } from './p-ByK4-pDJ.js';
import { d as defineCustomElement$1 } from './p-BLBTk09G.js';

const AtuiSearch = /*@__PURE__*/ proxyCustomElement(class AtuiSearch extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
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
        return (h("div", { key: '92aeadbb6e82ef57874abdbad39d8061eb34ad22' }, (this.label || this.info_text) && (h("atui-form-label", { key: '383105c142f0bf65fd6e949c6130a3c961f82846', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: '11c106d2dd0077bc7aaaf9fa3465621da4aead84', class: "active-within:border-active-dark transition[background-color,color,box-shadow] relative flex h-[36px] flex-row items-center justify-center rounded-md border border-med bg-surface-0 duration-300 ease-in-out focus-within:border-active-dark focus-within:ring-2 focus-within:ring-active-foreground/30" }, h("span", { key: '433f71bbc98a469262e5bd12bd2d16e1e6a05688', class: "px-8" }, h("i", { key: 'ede4cf03a5750030b89c64d29f9951014ffa2efc', class: "material-icons !text-[16px] !leading-[30px] text-light" }, "search")), h("input", { key: '20b05a3cd26893bef97209217740487b0b9e6de9', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: 'c13bbf3dd680c220442a355a46a0124f210789fd', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("atui-button", { key: 'b19c0582cd1d1dfa81fe0babd0fc4c38da47dcb6', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), h("span", { key: '1754452bc11649b946b633eddc77209d112f81ee', class: "mt-4 truncate text-xs font-normal !leading-normal text-med", "data-name": "search-hint" }, this.hint_text)));
    }
}, [0, "atui-search", {
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
    const components = ["atui-search", "atui-button", "atui-form-label", "atui-loading", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-search":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiSearch);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiSearch as A, defineCustomElement as d };
//# sourceMappingURL=p-D749WjEu.js.map

//# sourceMappingURL=p-D749WjEu.js.map