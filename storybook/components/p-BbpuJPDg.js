import { p as proxyCustomElement, H, h, c as Host } from './p-CIJrXZgf.js';

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
        return (h(Host, { key: '13fe2fca8cc2aa3d041901b8a1baaf2d53e63fd0', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-b border-light' : ''}` }, h("div", { key: '7903ad35ab62be29e419eb4734e58498267a7707', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '3eb9b7d36b6b94ddd677b91b29e9b085b021b043', name: "title-prefix" }), h("div", { key: '66269d3b57fbf94acf585a57029b6ab24d161add', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: 'bbca7b7bed52d602d9b4e6da40f4bd3659b0d201', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: 'e902687889d77111f217b386c91ee795ab029b1d', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (h("i", { key: 'e7a9c09adfaf0152d2c7b920434125237b95154d', class: "material-icons mr-8" }, this.icon)), this.header_title)), h("slot", { key: '9af7c6555cf3fd3108eb400e1da9903555e789af', name: "title-suffix" })), h("slot", { key: '52ae1063f8756add84f37394d57a1e5a87716b2e', name: "custom-title" }), this.subtitle && (h("span", { key: '85f463bd97b9af3d73cdc7a7954b5c081a579ece', class: "truncate text-sm font-normal text-med", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: '544245fd536e3eba6a18c6246adef727d9cbfe0d', name: "subtitle-content" }))), h("div", { key: '4cf17e4104233aa5b55b14afb3ac5ebea560e1ee', class: 'flex items-center gap-8' }, h("slot", { key: 'b6d96801672cebf6cd00c5f09a2475db2142a50d', name: 'actions' }))));
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
//# sourceMappingURL=p-BbpuJPDg.js.map

//# sourceMappingURL=p-BbpuJPDg.js.map