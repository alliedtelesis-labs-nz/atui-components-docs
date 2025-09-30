import { p as proxyCustomElement, H, h, c as Host } from './p-BAZ2N91w.js';

const AtHeader = /*@__PURE__*/ proxyCustomElement(class AtHeader extends H {
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
        return (h(Host, { key: '399336664b429fef4565d4112f27f2eb23b8ca38', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-light border-b' : ''}` }, h("div", { key: '880b370923dd039f72aed3c30795a3efd6e2f405', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '317274e4b3398420b92e23b2b7a480a1eacbe7d2', name: "title-prefix" }), h("div", { key: 'fa04bcacd7851457747669163bcfa89786636b0f', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '55a4ec729825c8699614f9997a3ed58e575847fb', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: '815c14dfd5cf6eb146784f06b1288fd1a831b0f1', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (h("i", { key: '84031f440da37cbeb4e7f1ef329e265b84d34b94', class: "material-icons mr-8" }, this.icon)), this.header_title)), h("slot", { key: 'e26bc2590719a3d57e7e0e82e4a77c435438efbb', name: "title-suffix" })), h("slot", { key: '553da2d5f0c650867b0bce91eaaf4701b580fbef', name: "custom-title" }), this.subtitle && (h("span", { key: '73ca5fd1e0ec97b423d7b52e1b739e94a49ac471', class: "text-med truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: 'cb2b7c7027ad499c22bc1bfcfb1dea5eea095f92', name: "subtitle-content" }))), h("div", { key: '2e2f4a2d726cd37891658642db883939436eb395', class: 'flex items-center gap-8' }, h("slot", { key: '44114a6b7be5b2f79625acece9be24475c604031', name: 'actions' }))));
    }
}, [260, "at-header", {
        "size": [1],
        "icon": [1],
        "header_title": [1],
        "subtitle": [1],
        "border": [4],
        "padding": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-header"];
    components.forEach(tagName => { switch (tagName) {
        case "at-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtHeader);
            }
            break;
    } });
}

export { AtHeader as A, defineCustomElement as d };
//# sourceMappingURL=p-BgwM18Bu.js.map

//# sourceMappingURL=p-BgwM18Bu.js.map