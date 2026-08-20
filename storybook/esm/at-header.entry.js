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
        return (h(Host, { key: '96d155217ae62108facde5ba081c972414b62cf1', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, h("div", { key: 'e14fbbadc28c6f40c3c58b793030dd0b5e1e5d06', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: 'd9133231c1152e974bb075253d89cc83ebd61aed', name: "title-prefix" }), h("div", { key: '4d8e0bc6bf6db156aa3f9209e3c9e7518cb73f9f', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '7cb81fa1016a44b6fb059d97604d85665e1a8a51', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: '9861ef13a094c9dd6e2d074e1f5af8deaaa36c5a', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, h("slot", { key: '5a9b3d527f0b4961027d3a10d1d3889f4df23f7b', name: "icon" }), this.header_title)), h("slot", { key: '32873e6839a8e6a567c541522db658c4b9f73c83', name: "title-suffix" })), h("slot", { key: '48ee6376fb7043e2853ce79a4c5ea4d905d32450', name: "custom-title" }), this.subtitle && (h("span", { key: '29422bc32f87b38e7e0e8a5959e367d3c3a1f9f0', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: 'd781d7fa001343179c3df14b20ff83e4e7d9b63a', name: "subtitle-content" }))), h("div", { key: 'd4c0b5b050702c56d1e5044675b24fa19d823e46', class: 'flex items-center gap-8' }, h("slot", { key: '63b16efe44df20d838195237e18a447e193db154', name: 'actions' }))));
    }
};

export { AtHeader as at_header };
