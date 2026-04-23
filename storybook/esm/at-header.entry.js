import { r as registerInstance, h, H as Host } from './index-BAAX2Der.js';

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
        return (h(Host, { key: '478ecb1cd139557a25ec027c592f2b5b19f48887', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, h("div", { key: '2e8ea35af7413975201e1fc244d4bd34dcb0317a', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: 'f0810e18bcba1a684e864c67eddf841b93d0a49f', name: "title-prefix" }), h("div", { key: '4702d8202d15765f421a66a6ea24695bfe69c7a1', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: 'e73d06aefe8bb067e69cc7940c1ba75b02bd0808', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: '7feb0dcce12302f76d6c9f84928656f0aebc317f', class: "flex items-center truncate", "data-name": "header-title" }, h("span", { key: '315c468a181cbad607b4bf6b14698ccec9bc546c', class: "mr-8" }, h("slot", { key: 'b619bd13e7ca7648a205cfbecf1d67ce3540af45', name: "icon" })), this.header_title)), h("slot", { key: '65e06947c77a9c59eaf03f35470d822ab3914585', name: "title-suffix" })), h("slot", { key: '0582077414e02a474cb87feaaf96c0b4821bb88c', name: "custom-title" }), this.subtitle && (h("span", { key: '42a4b30397bf76579940d1d83b8d44fb2eb57192', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: 'e5222ce9367c022992f5cdb5d5a69aa489516604', name: "subtitle-content" }))), h("div", { key: '92dc41cfee9f40118837a1da0f6425d307d84cf1', class: 'flex items-center gap-8' }, h("slot", { key: '5e6e729ac936056a5d768792fd575641883273b0', name: 'actions' }))));
    }
};

export { AtHeader as at_header };
