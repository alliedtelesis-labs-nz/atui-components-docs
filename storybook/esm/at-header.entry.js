import { r as registerInstance, h, H as Host } from './index-BatHonhZ.js';

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
        return (h(Host, { key: '52e55102662b537cb313b133bbe6186b7fdaed7b', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, h("div", { key: 'd365f4e2a91b1013a84e51648e4f9d168eeb08a3', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: 'c8183049bedf3720d03b2618d3724bd2b4ba9923', name: "title-prefix" }), h("div", { key: '361f8f26911f3eec88af24b822f21e263c1acb28', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: 'd659cb78d103e8e6cfa3cf6792d844364b7a22a4', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: '7d457fd00916461f77dac04bdfcb9ca851fc81be', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, h("slot", { key: '61311b65eee857528570b411f15b18854732b0b4', name: "icon" }), this.header_title)), h("slot", { key: 'ea7288b421fb6a227e72b211765e558fd9bab000', name: "title-suffix" })), h("slot", { key: '5c99b92a46d7c09dc2aa76893d036670be6b7853', name: "custom-title" }), this.subtitle && (h("span", { key: 'e0947a2d95eec47dc9a418e4d59c23159c62002b', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: 'd47333d7d4d4cde4f67ac5b0bdbfc2b5f9a96c7c', name: "subtitle-content" }))), h("div", { key: 'f611c46ba317a3fda9993db2bebe490d180c4710', class: 'flex items-center gap-8' }, h("slot", { key: 'b5ee8e75d1bb16f31ae658476f696429533217be', name: 'actions' }))));
    }
};

export { AtHeader as at_header };
