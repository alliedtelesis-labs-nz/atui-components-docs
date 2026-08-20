import { r as registerInstance, h, H as Host } from './index-_QbJz5mf.js';

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
        return (h(Host, { key: '46fff56809bdb5ddb303fd53a101338d1ce9a4b1', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, h("div", { key: 'eefde9ff29445fe957c60912539130b102d4fea6', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: 'f855a44b785f869f27839e7424a408148c7f84d8', name: "title-prefix" }), h("div", { key: 'df7b2b6a6463e0017b2be82aa3d06faba02a0bae', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '1249b81517fbf9cd475ede9fe4335e0d9c418fc6', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: '6858c4a1972136c11c977ca2a5a485c8f819fa94', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, h("slot", { key: 'f3a27276e830a2d440f954e94037a9e5258cde7b', name: "icon" }), this.header_title)), h("slot", { key: '6eff3c983e6b05b2ca49d362b151289d106bf5ac', name: "title-suffix" })), h("slot", { key: '28aee3bff8d70a8ead6042e91955f3068e28e3b2', name: "custom-title" }), this.subtitle && (h("span", { key: '3ee393a4215489d0972a540ed3c2ab594503ae3a', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: '324ac84550addb294c0165ec703d38d428c8f131', name: "subtitle-content" }))), h("div", { key: 'af72b21bccfdd29b6a47d04ff0e847c57766dc6e', class: 'flex items-center gap-8' }, h("slot", { key: 'e22908aed9fa3d2930d323f6e439acb3da95bf4f', name: 'actions' }))));
    }
};

export { AtHeader as at_header };
