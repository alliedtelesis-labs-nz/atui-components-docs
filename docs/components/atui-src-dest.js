import { p as proxyCustomElement, H, h, c as Host } from './p-kcU6cSzl.js';

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
        return (h(Host, { key: '5b5ab5c5354c8e101bad389bfa0d7cdedd698ead', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '339b3c347f11ed9ab3d4f60465976a4b6252ce83', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: 'c2e9fd1aeb96ad19d79f4bc1013fbcc8d0c0621a' }, this.src_text && (h("p", { key: 'afc0c42c655f23d0eedf7e858fd6af6ee6840a61', class: "font-medium text-dark", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '1b3907c585bb59f122f4ca5fb1822ada26c2dbb4', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '02a739fe70aaac333deb6c3d6dc24bdbe68d214b', class: "icon-lg flex-row items-center gap-4 text-light" }, h("span", { key: '3974851f6c41d4951d8c85cf8cfd8bc34167e9a1', class: "material-icons" }, "arrow_back"), h("span", { key: '00bd5d3050f7bafe8c1f7aee336398cfcf603027', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (h("div", { key: 'd88ab6e0b8bc57d38a0644d847428f59ca74c228', class: "text-right" }, this.dest_text && (h("p", { key: '5a2298567a8fa444bdce7592131b045701b19fe4', class: "font-medium text-dark", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: '8bef9db933371a74a102a0320036294ef618d104', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: 'a58875804f56f1a18b3dd36917169a99a2ae8e94', class: "h4", "data-name": "dest-title" }, this.dest_title))));
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