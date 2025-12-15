import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';

const AtColorStatusCell = /*@__PURE__*/ proxyCustomElement(class AtColorStatusCell extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    get el() { return this; }
    type = 'disabled';
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
        return (h(Host, { key: '6084823ee8c8fac1d6dc006593795f145c0bf40d', class: "flex h-full items-center" }, h("div", { key: '8b8f2470bf8ce393f67ee120ba89292da8bc3d5e', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
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
//# sourceMappingURL=p-DjfSIM_u.js.map

//# sourceMappingURL=p-DjfSIM_u.js.map