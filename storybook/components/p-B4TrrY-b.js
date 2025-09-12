import { p as proxyCustomElement, H, h, c as Host } from './p-Cv5ME95Z.js';

const AtuiColorStatusCell = /*@__PURE__*/ proxyCustomElement(class AtuiColorStatusCell extends H {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: 'cdc15f38a66fa9128a6177f9ef9c1f1074d4fbf7', class: "flex h-full items-center" }, h("div", { key: 'c603f0252f54a79d1e3cca1e6b8c7d8ed9fa9a95', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
    get el() { return this; }
}, [256, "atui-color-status-cell", {
        "type": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-color-status-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-color-status-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiColorStatusCell);
            }
            break;
    } });
}

export { AtuiColorStatusCell as A, defineCustomElement as d };
//# sourceMappingURL=p-B4TrrY-b.js.map

//# sourceMappingURL=p-B4TrrY-b.js.map