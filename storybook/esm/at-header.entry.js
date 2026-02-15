import { r as registerInstance, h, H as Host } from './index-jvbUuQtg.js';

const AtHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '8f25ca291b3f0fbc0e4e761f497f6fa872f0f4c7', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-light border-b' : ''}` }, h("div", { key: '821510365ac8f2e3593f397516e4a94c5e9847fd', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: 'b2a00ee61e10c216d3d380c4b564dbcfe0dd9d20', name: "title-prefix" }), h("div", { key: 'c427dd07a6127f34a1db8bf1f9f4b726b469eb7c', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '093a4f704cef547215c489570c6ecb59b9f7517b', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: '6666749c26d6270c0225b9de98380a702d4f7e65', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (h("i", { key: 'ee1206cbeb2dec48b7d2c79e02b42c4207c9d332', class: "material-icons mr-8" }, this.icon)), this.header_title)), h("slot", { key: '34cd97b77c8b6a584f6749901fa226a3d67e3ee8', name: "title-suffix" })), h("slot", { key: '2bf6995fbaa06c0de1d8678dc08693419ea7f354', name: "custom-title" }), this.subtitle && (h("span", { key: '479dbf5cadd5906aebf5d8aae0fb51de02f4b759', class: "text-med truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: 'e2f08749c35f23a1c2d5d50802a4e23de9590d6d', name: "subtitle-content" }))), h("div", { key: 'e54358fedb6fc8852be803160d4b8c46916f89a5', class: 'flex items-center gap-8' }, h("slot", { key: 'df1755927c8d1cbcd4b6244cec04ff53a217dede', name: 'actions' }))));
    }
};

export { AtHeader as at_header };
