import { p as proxyCustomElement, H, d as createEvent, h } from './p-kcU6cSzl.js';
import { d as defineCustomElement$4 } from './p-VjTTylTi.js';
import { d as defineCustomElement$3 } from './p-DKz0HNdG.js';
import { d as defineCustomElement$2 } from './p-CHkT-iof.js';
import { d as defineCustomElement$1 } from './p-DRSCT2MW.js';

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
        return (h("div", { key: '6b7e91ed795b84192a49513212f24bbe7b372c97' }, (this.label || this.info_text) && (h("atui-form-label", { key: '23f1ec1434a295f6b82906dc9ac3f5c48a6ca59d', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: '5b57a02f7c5b14792ba562cd339713cf0c2ba1bf', class: "active-within:border-active-dark transition[background-color,color,box-shadow] relative flex h-[36px] flex-row items-center justify-center rounded-md border border-med bg-surface-0 duration-300 ease-in-out focus-within:border-active-dark focus-within:ring-2 focus-within:ring-active-foreground/30" }, h("span", { key: '7ff56c81284757cb0d6c7c15bdc4df46d1df58c0', class: "px-8" }, h("i", { key: '947571191a958f99ef1780df1c3a30b4d9a0da6c', class: "material-icons !text-[16px] !leading-[30px] text-light" }, "search")), h("input", { key: 'a252ef76a4c7e99f349b6a163af17f47e627a3b3', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: '36ba8aeb03fcbd72d69faa0e6bb4e16147e47c49', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("atui-button", { key: 'a59512f4e7270331fce481268128dcab4a5cc954', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), h("span", { key: '2645a49d546071e486888309add9a6abeb47ce43', class: "mt-4 truncate text-xs font-normal !leading-normal text-med", "data-name": "search-hint" }, this.hint_text)));
    }
}, [256, "atui-search", {
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
//# sourceMappingURL=p-Ckx2cW5S.js.map

//# sourceMappingURL=p-Ckx2cW5S.js.map