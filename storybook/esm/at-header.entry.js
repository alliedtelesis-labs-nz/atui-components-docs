import { r as registerInstance, h, H as Host } from './index-CKYs7vaG.js';

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
        return (h(Host, { key: 'b0a98268b0097018f9ac2f06ba30585ff416472f', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, h("div", { key: '2778d7bf97dfbb4c0026ab70ca97fa86e267689e', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: 'a8d8c77292cba5c43379d067add74f19f2032930', name: "title-prefix" }), h("div", { key: 'a30a284ce3127b7f812e5d1b023210599fec4299', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '5253aabd3fa961eb799da68b971db817c9b8cf6a', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: '8c34af005022d68c236a557bcf9d8e472de4b03d', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, h("slot", { key: '4c9fb896a3062a743b18a314474d5ca678d14255', name: "icon" }), this.header_title)), h("slot", { key: 'a6eb4c8bf4fd06c4b28b562e71d742905b7fc024', name: "title-suffix" })), h("slot", { key: '489e565cdec1d649b5401460c0ba204e5b7a92e8', name: "custom-title" }), this.subtitle && (h("span", { key: '33065274e870310deff45ff993787ae897f3d7ae', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: 'bb8b864037b7aa96464888b7fd152c1cbd22d3e6', name: "subtitle-content" }))), h("div", { key: '3f7a57c3cf0acf954320e12e564d209847984382', class: 'flex items-center gap-8' }, h("slot", { key: 'd98fb34f453e0fcfee557f676afec954f297cfee', name: 'actions' }))));
    }
};

export { AtHeader as at_header };
