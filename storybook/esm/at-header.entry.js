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
     * Icon of header. Must use mat-icon name.
     */
    icon;
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
        return (h(Host, { key: '32d0ac489e1ac0c37f95c1fdb4dc0631ee6a205b', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-subtle border-b' : ''}` }, h("div", { key: '07e0925efa124711bd5e1ab37ed0eec0e4bd11c8', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '8d1aae324f859919985bef7ba305ef3a08917401', name: "title-prefix" }), h("div", { key: '3088c382ebf2854c9b68f624771a79970b1e0a48', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '6c30cf7c58a3ec8f70020b9ba4c22934ee6b8f86', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: 'ee959ab366486802fa8d8068b12ccc84f72ea2bd', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (h("i", { key: 'cd638507ac6ab0f545a58325ae3a50c5ce51351b', class: "material-icons mr-8" }, this.icon)), this.header_title)), h("slot", { key: '42ef4177b7aa39f407ae7f49ab674507ef733880', name: "title-suffix" })), h("slot", { key: 'fc6a8e14ae37ad5fbfdbd940ba34c202d6509955', name: "custom-title" }), this.subtitle && (h("span", { key: 'd114da79801048b99f914298576d9bc5918e1843', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: '595384470d9b8caa8dd3722c7008ecc1af0047c0', name: "subtitle-content" }))), h("div", { key: '48fdc38bbd4514cc0ec7f0a0fbed84ab6ba71f75', class: 'flex items-center gap-8' }, h("slot", { key: '7983369275be702b6b256b904bc5a60e52fd6238', name: 'actions' }))));
    }
};

export { AtHeader as at_header };
