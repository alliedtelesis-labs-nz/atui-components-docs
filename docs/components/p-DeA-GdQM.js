import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';

const AtuiLayout = /*@__PURE__*/ proxyCustomElement(class AtuiLayout extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Template used to display content
         */
        this.template = 'master-detail';
        /**
         * If overflow is allowed on the detail in master-detail
         */
        this.overflow = true;
    }
    get layoutElement() {
        switch (this.template) {
            case 'master-detail':
                return (h("div", { class: "flex h-full flex-grow overflow-hidden", "data-name": "wrapper-master-detail" }, h("div", { class: "flex w-sidebar flex-col overflow-hidden" }, h("slot", { name: "master" })), h("div", { class: `flex flex-grow flex-col ${this.overflow ? 'overflow-auto' : 'overflow-hidden'}` }, h("slot", { name: "detail" }))));
            case 'tabset':
                return (h("div", { class: "flex w-full flex-col", "data-name": "wrapper-tabset" }, h("slot", { name: "tabset-navigation" }), h("div", { class: "flex w-full flex-col overflow-auto" }, h("slot", { name: "tabset-content" }))));
            case 'content-container':
                return (h("div", { class: "flex flex-grow justify-center py-64", "data-name": "wrapper-content-container" }, h("div", { class: "flex max-w-3xl flex-grow flex-col" }, h("slot", null))));
        }
    }
    render() {
        return h(Host, { key: '04bed0384cac8725c10e330e318af2cc54310a21' }, this.layoutElement);
    }
}, [4, "atui-layout", {
        "template": [1],
        "overflow": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-layout"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-layout":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiLayout);
            }
            break;
    } });
}

export { AtuiLayout as A, defineCustomElement as d };
//# sourceMappingURL=p-DeA-GdQM.js.map

//# sourceMappingURL=p-DeA-GdQM.js.map