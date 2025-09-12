import { p as proxyCustomElement, H, d as createEvent, h } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$4 } from './p-CSzRt9NY.js';
import { d as defineCustomElement$3 } from './p-C65WlsXe.js';
import { d as defineCustomElement$2 } from './p-DBWEgk0R.js';
import { d as defineCustomElement$1 } from './p-BtsG-JMI.js';

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
        return (h("div", { key: 'b2cff02213df441e3beb7829d4229e31682337c0' }, (this.label || this.info_text) && (h("atui-form-label", { key: '5a54d253887dd6017946a2f98bd0539d57542888', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: '38dbfb4b98488c8d8c889e30e87991abd91b8c93', class: "active-within:border-active-dark transition[background-color,color,box-shadow] border-med bg-surface-0 focus-within:border-active-dark focus-within:ring-active-foreground/30 relative flex h-[36px] flex-row items-center justify-center rounded-md border duration-300 ease-in-out focus-within:ring-2" }, h("span", { key: '703492fe78ca81513ed298246c12fcb5f3caa526', class: "px-8" }, h("i", { key: '8dd59516e809b320a9304fa2cb280000fdd36249', class: "material-icons text-light !text-[16px] !leading-[30px]" }, "search")), h("input", { key: '821a2d3aca6d129a3cd9d2b4a55d58b10f2284d0', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: 'cbc202c0c30b954e10b63aeab4c598d2f2c6a339', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("atui-button", { key: '0171d34d09c7f4e785e8dbae5610a877ddefcc0f', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), h("span", { key: '2898208d6c9ae7e48b8a5dafef842b5872563f77', class: "text-med mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
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
//# sourceMappingURL=p-Ch4amHCy.js.map

//# sourceMappingURL=p-Ch4amHCy.js.map