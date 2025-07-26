import { p as proxyCustomElement, H, h, c as Host } from './p-kcU6cSzl.js';

const AtuiHeader = /*@__PURE__*/ proxyCustomElement(class AtuiHeader extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Size of the header.
         */
        this.size = 'h1';
        /**
         * Adds 16 pixels of padding to the header element
         */
        this.padding = true;
    }
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
        return (h(Host, { key: '6685d8a804a5a686afd4c3f9030407b358d39123', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-b border-light' : ''}` }, h("div", { key: '792da2681a30e28f39833031a1c976718301a882', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '5537d96b8379e246a303c3c4a6e6ff130f591937', name: "title-prefix" }), h("div", { key: '16f4d001727da3776b698d884e2c9bc6df8cbeda', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '7dd16a408fced9d7760ba83e33b49e4542e38ba3', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: 'b6b50c1278073a7b6f2465a09d1a7b324bf5e65d', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (h("i", { key: '2b8403c0416c3342587fa6a8afa1ab387d132140', class: "material-icons mr-8" }, this.icon)), this.header_title)), h("slot", { key: '4cdbb1de0c247c8086f5c4f40faba724e5028c84', name: "title-suffix" })), h("slot", { key: 'e4ecfe168e5546bf423d0aeb881cb8e29497b2be', name: "custom-title" }), this.subtitle && (h("span", { key: 'a87fed2790c2edde75575d6ac653c9036dbe76e2', class: "truncate text-sm font-normal text-med", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: '367f663aaca7ffd8b55dde10fe57420e00e9f750', name: "subtitle-content" }))), h("div", { key: '0a114e110daf073278694ad792d6f90c83ab43ab', class: 'flex items-center gap-8' }, h("slot", { key: 'f945a618e1951ac00fb425c1c5b0b10c987f0c9f', name: 'actions' }))));
    }
}, [260, "atui-header", {
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
    const components = ["atui-header"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiHeader);
            }
            break;
    } });
}

export { AtuiHeader as A, defineCustomElement as d };
//# sourceMappingURL=p-DpB_Sinf.js.map

//# sourceMappingURL=p-DpB_Sinf.js.map