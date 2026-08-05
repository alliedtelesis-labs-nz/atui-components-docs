import { r as registerInstance, h, H as Host } from './index-BQWIFs0G.js';

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
        return (h(Host, { key: '3289d030b16e552f2a379dd2e1a0afa586b55262', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, h("div", { key: 'abd14f6e4f9636a74a4dbc63b46d6d0243a1e51c', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '935051f9cb5cd40a447e94e88190a600116e7dee', name: "title-prefix" }), h("div", { key: '334ea2089b25c1bf667857da2c5aeb93c555845f', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '819ecd3fb536688fe8e5ff522a2947bb72b67098', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: '76e87b4bbe049cd5945bd6f005316717e7de71c2', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, h("slot", { key: '0ecdb0fe51e9de3c4bdb09d6866f46d8942c8119', name: "icon" }), this.header_title)), h("slot", { key: '90e9da70a8450efb4922ae7e02abd9b0b225b49c', name: "title-suffix" })), h("slot", { key: 'c60a50b1ed34d59474fbf4ad83527fec9a88f0c9', name: "custom-title" }), this.subtitle && (h("span", { key: '968c14669b8c7e1f384de4e6ab72881233f2a024', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: '252eb669497fdcddd33ff2d413c2ea34ef3edbb7', name: "subtitle-content" }))), h("div", { key: '9b248eaae7ec9819d5e8db55b3a4b15462591470', class: 'flex items-center gap-8' }, h("slot", { key: '984afe270165d6de23455f735bda74f41f9875cb', name: 'actions' }))));
    }
};

export { AtHeader as at_header };
