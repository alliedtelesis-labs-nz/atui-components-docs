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
        return (h(Host, { key: '3882ca99dad9abf2c011b50a1f85a1b2fbacb215', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-light border-b' : ''}` }, h("div", { key: '5cde4d4039382aeb5ad766be8b277ee718822314', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '38fc43a101898f868fdaa8264629128bb48f37fe', name: "title-prefix" }), h("div", { key: '7fdb1be0a9556542395dd536444563046ffc711c', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '2f7b746b5a8ebc8d7d2ae13dbe278ad5b8478d73', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: '5667dd9fa7de7675d0510a6cf7cd30306c8833d0', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (h("i", { key: '0dc71e2390aeddbae4ff45bdb9dfed2ad2dbfcdc', class: "material-icons mr-8" }, this.icon)), this.header_title)), h("slot", { key: 'b6319046a51875b8151aa7c87e370ab9d7578c7e', name: "title-suffix" })), h("slot", { key: '9c92139813714c8892e1bf28f5377106146bd2a6', name: "custom-title" }), this.subtitle && (h("span", { key: '358c9b199c3420991d3855cd0e9720fe0da64c43', class: "text-med truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: 'c112f45432ed8c28b8964402f7d4939a1dde30d0', name: "subtitle-content" }))), h("div", { key: 'ec4ca401e46f1414d6148e554a42724eb41da26b', class: 'flex items-center gap-8' }, h("slot", { key: 'bf9537c4e78cf4add9bb9246421bcb1516196ffe', name: 'actions' }))));
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