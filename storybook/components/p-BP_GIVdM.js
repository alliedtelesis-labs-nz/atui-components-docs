import { p as proxyCustomElement, H, h, c as Host } from './p-Bx9nFool.js';

const AtColorStatusCell = /*@__PURE__*/ proxyCustomElement(class AtColorStatusCell extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.type = 'disabled';
    }
    init(params) {
        this.type = params.mapValueToStatus(params.data);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.type = params.mapValueToStatus(params.data);
        return true;
    }
    render() {
        const statusClasses = {
            error: 'bg-error-base',
            warning: 'bg-warning-base',
            success: 'bg-success-base',
            disabled: 'bg-disabled-light',
        };
        return (h(Host, { key: 'f8049a4c2216fb59d99f7759543be67fb029f40c', class: "flex h-full items-center" }, h("div", { key: '58fc5148e5aee3b49f9b27a55d80d98d59784ad1', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
    get el() { return this; }
}, [256, "at-color-status-cell", {
        "type": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-color-status-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "at-color-status-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtColorStatusCell);
            }
            break;
    } });
}

export { AtColorStatusCell as A, defineCustomElement as d };
//# sourceMappingURL=p-BP_GIVdM.js.map

//# sourceMappingURL=p-BP_GIVdM.js.map