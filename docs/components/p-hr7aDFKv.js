import { p as proxyCustomElement, H, d as createEvent, h } from './p-kcU6cSzl.js';
import { d as defineCustomElement$4 } from './p-DpoOUufO.js';
import { d as defineCustomElement$3 } from './p-BPMyXZEz.js';
import { d as defineCustomElement$2 } from './p-CHkT-iof.js';
import { d as defineCustomElement$1 } from './p-CYjfaOKk.js';

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
        return (h("div", { key: '5ced24996906e32db8884ea8779c138b2e83b3ee' }, (this.label || this.info_text) && (h("atui-form-label", { key: '8182a57e5be8a7e80e381afe42c1f899ccd7b594', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: '6a009d133e3dd998aade68bd5e21e6e5144e0307', class: "active-within:border-active-dark transition[background-color,color,box-shadow] relative flex h-[36px] flex-row items-center justify-center rounded-md border border-med bg-surface-0 duration-300 ease-in-out focus-within:border-active-dark focus-within:ring-2 focus-within:ring-active-foreground/30" }, h("span", { key: 'bd7f60e38f80ff25cb029c9429bfd53e4cc87b47', class: "px-8" }, h("i", { key: 'c85ce3e9871df41b0eda63dbff65c91914ba3033', class: "material-icons !text-[16px] !leading-[30px] text-light" }, "search")), h("input", { key: 'ac913d7d15d4aaa3e5881bfa2bef4253101aa238', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: '27789aebbb2e33fd107b51570add48b6e26664aa', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("atui-button", { key: '96dad67fd11dbaea7353fa64b2dc42da73c45243', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), h("span", { key: 'f501549a35b9a67d8d6d5057c86e99c6c23755c2', class: "mt-4 truncate text-xs font-normal !leading-normal text-med", "data-name": "search-hint" }, this.hint_text)));
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
//# sourceMappingURL=p-hr7aDFKv.js.map

//# sourceMappingURL=p-hr7aDFKv.js.map