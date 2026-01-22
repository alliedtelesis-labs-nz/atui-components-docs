import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';

const AtHeader$1 = /*@__PURE__*/ proxyCustomElement(class AtHeader extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    /**
     * Size of the header.
     */
    size = 'h1';
    /**
     * Icon of header. Must use mat-icon name.
     */
    icon;
    /**
     * Title of the header.
     */
    header_title;
    /**
     * Subtitle of the header.
     */
    subtitle;
    /**
     * Adds a border to the bottom of the header.
     */
    border;
    /**
     * Adds 16 pixels of padding to the header element
     */
    padding = true;
    render() {
        const validHeadings = [
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
        ];
        const HeadingTag = validHeadings.includes(this.size)
            ? this.size
            : 'div';
        return (h(Host, { key: 'a113efe94b73327b406c2a9da99104028ddc394c', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-light border-b' : ''}` }, h("div", { key: '4f6d590863c25036938beb0268c4cd4a99220eb0', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: 'bbc23ae50eb6b036247c0507444a663baefe2ffb', name: "title-prefix" }), h("div", { key: '5d211a2992738b4dd3318fa99579649df679af51', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '041d4f422ca74b5296e51f3005116eab90f94d69', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: '6238cd1d60afd4cac2b6a72fe5c2508c7a6bd5a7', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (h("i", { key: 'c44b2423e91c09ea1e3362eb99fd8d9f3a24c04b', class: "material-icons mr-8" }, this.icon)), this.header_title)), h("slot", { key: 'da144e9ef548021738b01ff5877e9c9e64413c83', name: "title-suffix" })), h("slot", { key: 'cc96cfcfaafae62a6c271a8252de305d442751cc', name: "custom-title" }), this.subtitle && (h("span", { key: '800bafd5fcc8d6a213bdb7b0bf90852540119968', class: "text-med truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: '278595a490f23233d89cf98466cc5d8de08e23e3', name: "subtitle-content" }))), h("div", { key: 'f6ea7479f0ac6a4d337eb2ac3ec9fdb8e356fe84', class: 'flex items-center gap-8' }, h("slot", { key: '56155069788ced178ba9204a3e633f0cfd49c7d9', name: 'actions' }))));
    }
}, [260, "at-header", {
        "size": [1],
        "icon": [1],
        "header_title": [1],
        "subtitle": [1],
        "border": [4],
        "padding": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-header"];
    components.forEach(tagName => { switch (tagName) {
        case "at-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtHeader$1);
            }
            break;
    } });
}

const AtHeader = AtHeader$1;
const defineCustomElement = defineCustomElement$1;

export { AtHeader, defineCustomElement };
//# sourceMappingURL=at-header.js.map

//# sourceMappingURL=at-header.js.map