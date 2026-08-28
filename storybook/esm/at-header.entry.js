import { r as registerInstance, h, H as Host } from './index-lWb16Ay7.js';

const AtHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Size of the header.
     */
    size = 'h1';
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
        return (h(Host, { key: '7e2d81134aad6b6e1fe765ef6d2fc1de4846c2f5', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, h("div", { key: '368e5eadba667e3253e7462ba546bb1f469284d0', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '52e861a1ca086d4b80388826e7cece29812aac8f', name: "title-prefix" }), h("div", { key: '81b8b91dd27b5fd093e41acfdd8fa88bdfa263cc', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '78d920f86bc1b558ba955e5b45764b170fcc8e6c', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: 'ca52af4a195f924366a03a39aef1778f28b2bfc9', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, h("slot", { key: '92f1f2e7ba160d38abd8b40b1876f1748ce92ff0', name: "icon" }), this.header_title)), h("slot", { key: '507226eef4723f7a785312e87328a2b260d1062d', name: "title-suffix" })), h("slot", { key: '1fb89c76d3e4574c0ddba0d9b2d7b8b7eef3e6fc', name: "custom-title" }), this.subtitle && (h("span", { key: '8f7596d8d976a2cba1bdb3f0d57737ff32fd0191', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: 'a069e8963ca4a22d8cd14ff70474b06014f84b47', name: "subtitle-content" }))), h("div", { key: '64cf01c66e4a3d54db934632b7e9a8395ca6616d', class: 'flex items-center gap-8' }, h("slot", { key: '0c167761eeb9a8484e17c63d21c47d19619825bc', name: 'actions' }))));
    }
};

export { AtHeader as at_header };
