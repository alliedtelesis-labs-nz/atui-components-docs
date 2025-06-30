import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';

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
        return (h(Host, { key: '38b921b99e198e8567a24ede071819f81a675b60', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-b border-light' : ''}` }, h("div", { key: 'fb53ae61877c556dbeeee31fa0ed0889f2658aa1', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '0845ef30bae885593e32fe7b44c9005d971faddd', name: "title-prefix" }), h("div", { key: 'd9ad687cd0deccfd76980b2c1b4fca6eba1ebc6c', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '306b03896f2c506291e4df7a365d33ec04d5ae53', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: '626d890138ea57b867015040a7defd5759692bbd', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (h("i", { key: '0c4ec291c8b37f4b25e5086fe86bbd4d879cc07d', class: "material-icons mr-8" }, this.icon)), this.header_title)), h("slot", { key: '930edd87373c9db67ba8b825a26eddffff6ae4e6', name: "title-suffix" })), h("slot", { key: '3cba6e9620ae267122314667c56745f5cc90cf0a', name: "custom-title" }), this.subtitle && (h("span", { key: 'e6c99c553eafd0c251445ea5591e3b3fa438e856', class: "truncate text-sm font-normal text-med", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: 'f91228926c96726f18206e275cd6c19aee44210c', name: "subtitle-content" }))), h("div", { key: '9c7f34a86b3e7d637297e991961071e477f7d4f2', class: 'flex items-center gap-8' }, h("slot", { key: 'f77b0bbb0930ae39ac1ceb6e82408fab1da4144e', name: 'actions' }))));
    }
}, [4, "atui-header", {
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
//# sourceMappingURL=p-C8j-njaK.js.map

//# sourceMappingURL=p-C8j-njaK.js.map