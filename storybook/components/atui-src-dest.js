import { p as proxyCustomElement, H, h, c as Host } from './p-CIJrXZgf.js';

const AtuiSrcDestComponent = /*@__PURE__*/ proxyCustomElement(class AtuiSrcDestComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Aligns the content to the left or center of the container
         */
        this.align = 'left';
    }
    render() {
        return (h(Host, { key: 'e33e68b4e00fe0463c75cd83b2982e3d7a5f15a1', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '7ebbf7b53bd76411d5e006bb3305577629dc2a23', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '9042ac40bc6822d09c059e8d1e6f9c7d3c84f5d1' }, this.src_text && (h("p", { key: 'fbaee844c07470cab01f1fecdda2933dbdec485a', class: "font-medium text-dark", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: 'f82cdc5206e275432a208f1e4485cafc0c131d12', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '2d84ea07fe5fadac93a47f05577bdbee57f1844a', class: "icon-lg flex-row items-center gap-4 text-light" }, h("span", { key: '21302541351ca8751c445235e38d7299e417326c', class: "material-icons" }, "arrow_back"), h("span", { key: '4e663f243ddaae1692c05d795d551d694c22f2c0', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (h("div", { key: 'a3e3fded561c58a782ebbd436ebe2306268d34df', class: "text-right" }, this.dest_text && (h("p", { key: '04170cc5d288bdaf21f2a7a7518fb4965f64d1e4', class: "font-medium text-dark", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: 'ed9651aeb5b50d727cb8f40eebf6e6d8142bbfe9', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: 'b9c9c927abba4749dadb927b3ddf89dee8ffc099', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
}, [256, "atui-src-dest", {
        "src_title": [1],
        "src_text": [1],
        "src_subtitle": [1],
        "dest_title": [1],
        "dest_text": [1],
        "dest_subtitle": [1],
        "align": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-src-dest"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-src-dest":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiSrcDestComponent);
            }
            break;
    } });
}

const AtuiSrcDest = AtuiSrcDestComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiSrcDest, defineCustomElement };
//# sourceMappingURL=atui-src-dest.js.map

//# sourceMappingURL=atui-src-dest.js.map