import { p as proxyCustomElement, H, d as createEvent, h } from './p-DJD-7SVX.js';
import { d as defineCustomElement$4 } from './p-CNIPth1r.js';
import { d as defineCustomElement$3 } from './p-CEO3zNbx.js';
import { d as defineCustomElement$2 } from './p-ByK4-pDJ.js';
import { d as defineCustomElement$1 } from './p-BIS2bAMQ.js';

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
        return (h("div", { key: '9eb6978e10fae326252ae3c597b1db9afab8fba4' }, (this.label || this.info_text) && (h("atui-form-label", { key: '7a0b8028233c50ae50e6950464f0d1e08391bb49', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: '5511031c78b6543a5c798fc5d15cc468eda0d2a5', class: "active-within:border-active-dark transition[background-color,color,box-shadow] relative flex h-[36px] flex-row items-center justify-center rounded-md border border-med bg-surface-0 duration-300 ease-in-out focus-within:border-active-dark focus-within:ring-2 focus-within:ring-active-foreground/30" }, h("span", { key: 'c01e51e85d8c1a47ea525a70e98509d48ad9a746', class: "px-8" }, h("i", { key: '3b79379cebad5d0c52e78252cd74028507774213', class: "material-icons !text-[16px] !leading-[30px] text-light" }, "search")), h("input", { key: '9cf5797f0f228140255035411b7c6a0e341741a6', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: '66ba546df3a517e07664282077c160cd371fb71d', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("atui-button", { key: 'afa4859dde5a5d1f30b6bf3ce537d3fb0ab92644', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), h("span", { key: '85b4764649cef41e41c9d5bd591e279f2c604e19', class: "mt-4 truncate text-xs font-normal !leading-normal text-med", "data-name": "search-hint" }, this.hint_text)));
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
//# sourceMappingURL=p-CZtkNBQI.js.map

//# sourceMappingURL=p-CZtkNBQI.js.map