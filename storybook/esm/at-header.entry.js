import { r as registerInstance, h, H as Host } from './index-HD-uhvb8.js';

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
        return (h(Host, { key: '5a2ba4e2d6aa79b84a42521a2fb56fe85c61bc49', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, h("div", { key: '342d92b101c698b8b3241c5ef1b86bd52ef7a608', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '1897aa6917cf3ddbdf93d30012efaaaad305132f', name: "title-prefix" }), h("div", { key: '463cbc4713a98ccb0cea8931187e507a40322ceb', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '17cc0e50de0ff0ae6b5ff4606e0cc3720bbdde66', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: 'db0b54f6eea18855cbc7832fb8ba1b07aabf1b1d', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, h("slot", { key: '74465c04fc1d90bd2a21575464fd542cd9fe9e92', name: "icon" }), this.header_title)), h("slot", { key: 'bbf5033f89950ddc59b3985bfa80d5e6a71c17ba', name: "title-suffix" })), h("slot", { key: '6a13b336af3e4f8ad51d89bec37b49dcfede71da', name: "custom-title" }), this.subtitle && (h("span", { key: 'e39a401f3d11d231c4013776b41cecf1d3aaf95a', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: 'fde7c064e451383c01305b6e8623d53d91274737', name: "subtitle-content" }))), h("div", { key: 'd7919d3ea7ced4601bc9011b5a75898209c70cba', class: 'flex items-center gap-8' }, h("slot", { key: '58cf04850ae8ed2685c26598b99e991da9f6c6e8', name: 'actions' }))));
    }
};

export { AtHeader as at_header };
