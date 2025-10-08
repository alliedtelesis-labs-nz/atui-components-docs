import { p as proxyCustomElement, H, h, c as Host } from './p-B9UDFE-Z.js';

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
        return (h(Host, { key: 'e9882a94cf62dd290d96aa9dd3fd3b04fc18fdd1', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-light border-b' : ''}` }, h("div", { key: '706a93dfec18d162fa744544e25dd4d90fb7691f', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '5acab88e0dcd408ec1bd2fd7e0631c050cd2cddc', name: "title-prefix" }), h("div", { key: '3ca0f9433c9855b88bfd3bf623e042b1abbd31c6', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '0613ba574ed9801ffa22e4cbcdc45f6bf3f12917', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: '4a6d4a638769f55229376847a4a0f7ebb2d533db', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (h("i", { key: 'edc8307bd1f50e4e2397c527d92ef629cb08c709', class: "material-icons mr-8" }, this.icon)), this.header_title)), h("slot", { key: '9dda39ed10d8e6e410380d023db6073433c07249', name: "title-suffix" })), h("slot", { key: '8b04a36dc01a5ecc80e0a03acf8cc7aede31b1e1', name: "custom-title" }), this.subtitle && (h("span", { key: '09504279946a6151c0157ef1f51fa854b94036b7', class: "text-med truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: '5c89b1e0a2dff109b651f6dbbeaf3c01ff9dc069', name: "subtitle-content" }))), h("div", { key: 'bd53b4f71436d564c6e2cafd8567d6d25b60a8dd', class: 'flex items-center gap-8' }, h("slot", { key: '26ce811b4517ff38de30b26d650ad2c8df1faa07', name: 'actions' }))));
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