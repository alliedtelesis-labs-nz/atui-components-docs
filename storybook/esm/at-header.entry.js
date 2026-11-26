import { r as registerInstance, h, H as Host } from './index-DTCxn2cp.js';

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
        return (h(Host, { key: 'ddf184684efff509e26cb70dc5cf3dea3cc81048', class: `flex flex-row flex-wrap items-center justify-between gap-8 overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, h("div", { key: '7789cb482fdde553c3429e757636021055e4e354', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '8bef0860a587824d609061107a971931ada6d050', name: "title-prefix" }), h("div", { key: '254eb826eaed6f3703341bf29209c6c45b21fb44', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '40a630330c013f4a33ae466a7e4a8553e2531df1', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: '47965105c811f90e2626f7357624fe73bafd2bdd', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, h("slot", { key: 'eabd4372545b51913499b9c43dc70ae1e684388d', name: "icon" }), this.header_title)), h("slot", { key: '292ff7669e1130335e8438a1ea080923879674cb', name: "title-suffix" })), h("slot", { key: '15298fb0c8794467f0ef1cf5873a773ea13cca48', name: "custom-title" }), this.subtitle && (h("span", { key: 'e1e7e63ecf9b3e624a6659b343e2add60ef4261b', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: '48867fb2ea2f9cf9ac0b2b1fcd95f3d555de64b6', name: "subtitle-content" }))), h("div", { key: '86b9e56ca3698f2a6230b8cb55ebe5502ad9f4af', class: 'flex items-center gap-8' }, h("slot", { key: '899b835da6eb4b686994bfdb2ab2954af26046cc', name: 'actions' }))));
    }
};

export { AtHeader as at_header };
