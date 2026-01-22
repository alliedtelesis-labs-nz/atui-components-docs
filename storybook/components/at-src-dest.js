import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';

const AtSrcDestComponent = /*@__PURE__*/ proxyCustomElement(class AtSrcDestComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    /**
     * Title displayed on the left
     */
    src_title;
    /**
     * Text displayed on the left
     */
    src_text;
    /**
     * Subtitle displayed on the left
     */
    src_subtitle;
    /**
     * Title displayed on the right
     */
    dest_title;
    /**
     * Text displayed on the right
     */
    dest_text;
    /**
     * Subtitle displayed on the right
     */
    dest_subtitle;
    /**
     * Aligns the content to the left or center of the container
     */
    align = 'left';
    render() {
        return (h(Host, { key: 'ab9c017df44e96e6b611d749add5190632b946c1', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '5bef4c9b59a204f75c192c89469bf30ffbbe0081', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '4b471f77e5d35e0ab2b7410964b014b73e5aa5f6' }, this.src_text && (h("p", { key: '9d874827dac9fa1c826421417b762b43534ea9a3', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '6cbc573ec656fa101103cbad7159d19892b8c89e', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: 'ffefad16ca7d224574d6d1f95629c1a7f4d48673', class: "icon-lg text-light flex-row items-center gap-4" }, h("span", { key: '595a56d4c4218de921cb7bca48f66b74862520a6', class: "material-icons" }, "arrow_back"), h("span", { key: '096b2b9841f84cff3d455b4d3b8284b3c4b794a4', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (h("div", { key: '4dd32108c1922f14d0a21e63c61f5bc4a77213d5', class: "text-right" }, this.dest_text && (h("p", { key: '2cf2e17aa57f00d25ba593931f2cd64a37fd7cdd', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: '88ceb026863df0a4464703ba758fa15df70d5962', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: 'e7b2087ef4bf91a15e1535ff1bd6cf48c81b26cf', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
}, [256, "at-src-dest", {
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
    const components = ["at-src-dest"];
    components.forEach(tagName => { switch (tagName) {
        case "at-src-dest":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtSrcDestComponent);
            }
            break;
    } });
}

const AtSrcDest = AtSrcDestComponent;
const defineCustomElement = defineCustomElement$1;

export { AtSrcDest, defineCustomElement };
//# sourceMappingURL=at-src-dest.js.map

//# sourceMappingURL=at-src-dest.js.map