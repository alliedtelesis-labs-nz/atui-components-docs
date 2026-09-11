import { r as registerInstance, h, H as Host } from './index-BQ4XN8sR.js';

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
        return (h(Host, { key: 'db71584afa59d9f1031f211461e8960f9920f0db', class: `flex flex-row flex-wrap items-center justify-between gap-8 overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, h("div", { key: 'c7be5eeb3218282b1a7212ff6d0b89abf012d09f', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '9f67add8f10f52244c46d1e2e8435287627e0577', name: "title-prefix" }), h("div", { key: 'ac44a459dc6208b2f4cc0163354498cda3682a12', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: 'e906d1f3d4d1bd6e78279fb9bb068465c5262d86', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: 'f36aff780526f5012b18b03d74b5be49a1a5b1eb', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, h("slot", { key: '094b603cc7b367792f2b0eb2d6dd27e879ced742', name: "icon" }), this.header_title)), h("slot", { key: 'f3cbe0f2096f74c82219304e782ad4f313a9c9a1', name: "title-suffix" })), h("slot", { key: '8457a83af3a282026dad8d6a82435104d7dd4a2c', name: "custom-title" }), this.subtitle && (h("span", { key: '3fc5df147625550b09ff58f9f6530f6e5b4e7fcc', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: 'ab7c75715d76d70351b5dff26ee8d1a29c6e4db9', name: "subtitle-content" }))), h("div", { key: 'b4537538eaafa62c7282335c59c7da5e7b2faff7', class: 'flex items-center gap-8' }, h("slot", { key: '74f0072452daccf12ae6274a83a6698e0c960757', name: 'actions' }))));
    }
};

export { AtHeader as at_header };
