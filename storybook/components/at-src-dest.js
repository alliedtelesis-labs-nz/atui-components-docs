import { p as proxyCustomElement, H, h, c as Host } from './p-Cv5ME95Z.js';

const AtSrcDestComponent = /*@__PURE__*/ proxyCustomElement(class AtSrcDestComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Aligns the content to the left or center of the container
         */
        this.align = 'left';
    }
    render() {
        return (h(Host, { key: '44e3826ad8c500290624dda3fd38eeaee58dc870', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '7213bd2b6420c02dbe19edb48b7fc1394b02ed5b', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: 'fe114493eebcdc2313237d746a88193b284e8a3a' }, this.src_text && (h("p", { key: '3e00391229a5983af63edddedb55c1d58caa632f', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '1eff099d89d2d841ed717db094ff62bea4ade2f1', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '81786a067fd5b3e706e61d5f4c2c2fe2076504a1', class: "icon-lg text-light flex-row items-center gap-4" }, h("span", { key: '199c529b33115784e8a5d643017012a70316e984', class: "material-icons" }, "arrow_back"), h("span", { key: '0e920e3a545bd444656d066b357623f48f9bfb66', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (h("div", { key: 'c8b03b2d508c849a201154fd2950c21c4c44ff21', class: "text-right" }, this.dest_text && (h("p", { key: '65ec62a1d7bdd040496cb4c0464cae12296cd10d', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: 'cf8ef4f7ae8999c91c582298f2024caa5b49882a', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: 'bd35efdacf78941b708fc701ce0bad94e79c06c9', class: "h4", "data-name": "dest-title" }, this.dest_title))));
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