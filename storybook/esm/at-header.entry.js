import { r as registerInstance, h, H as Host } from './index-C02iI0Bb.js';

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
        return (h(Host, { key: '59043005023e79b06f04aaeaccda5f1fff0944ba', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, h("div", { key: '1282fbd4fe03af5a59be2cc8c3e06176065e5cf1', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '7607bd9394102fa1d2e2c622092b5a56fa09e4eb', name: "title-prefix" }), h("div", { key: '2531e748884a5c6ae011daf122d75bbf95d27a5a', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: 'faf6986a23ae61b0fa68fbffcbb1cd39efd48681', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: 'cee295c5159fe5f3384169744ba811e17a7eedfd', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, h("slot", { key: 'ab48e9d730df9752cabceac876682ce9ca331c84', name: "icon" }), this.header_title)), h("slot", { key: '61972471b74a06c19003952c8330ac5016a5ccf9', name: "title-suffix" })), h("slot", { key: 'c7d10006f0872a6835e5a5870bdbfe083bfb64c1', name: "custom-title" }), this.subtitle && (h("span", { key: '23229881b2163210729e26efaf8ef57320a0465f', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: 'e91a16c67679f079447ccf3872ba38c9cddc35ac', name: "subtitle-content" }))), h("div", { key: 'a088a710c5cbce1af35c2aa675501806bc952990', class: 'flex items-center gap-8' }, h("slot", { key: '51e95e1b6240c046aea673c5772cd8a566f99992', name: 'actions' }))));
    }
};

export { AtHeader as at_header };
