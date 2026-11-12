import { r as registerInstance, h, H as Host } from './index-B_iXjeZH.js';

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
        return (h(Host, { key: '1de6533e3ecfcb0245a344f4c656a3e51606acd6', class: `flex flex-row flex-wrap items-center justify-between gap-8 overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, h("div", { key: '9141df42027c56dff83b86daef27624eeeab81ab', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '6c8512da7cdc2f682ffa279704866b0437f208a4', name: "title-prefix" }), h("div", { key: '8ea2d4fda4ce5cef919c5a2fa05a370d6a469623', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '10cf7468f1fc1afd1dd2bd4b37e8a77278dea37f', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: 'baaaa2436b0efa3ca5ab423d46a9a99db6f042ef', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, h("slot", { key: '1998f61c4572dc105366a7afb27c52b05d657bed', name: "icon" }), this.header_title)), h("slot", { key: '48d94796fc972eed3039fd2f1828ee5c2a7abea1', name: "title-suffix" })), h("slot", { key: '10f604c6fce84daa0d87beff5f6fcd3e86accae3', name: "custom-title" }), this.subtitle && (h("span", { key: '7505cafec5e6d0c73403e554ef34bbb36f6108fd', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: 'e04f8997383194e354c5579f1bc85e9fff5d97e8', name: "subtitle-content" }))), h("div", { key: '9983c38514ffae58450f6eb368e1dc2394a5f3dc', class: 'flex items-center gap-8' }, h("slot", { key: 'ad25f3abaa0d51564e7c2a90365fe7c98e07a97c', name: 'actions' }))));
    }
};

export { AtHeader as at_header };
