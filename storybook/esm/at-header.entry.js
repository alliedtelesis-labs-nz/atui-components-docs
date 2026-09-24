import { r as registerInstance, h, H as Host } from './index-CIMU6MgJ.js';

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
        return (h(Host, { key: '03934e16efa2959617e8d9a4fcc721d05b3f2da1', class: `flex flex-row flex-wrap items-center justify-between gap-8 overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, h("div", { key: '28ea6c937fabb74201eac826304c5f26a98f8ec8', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: 'd9e484423599a896279daf31aa00116e7ddbe687', name: "title-prefix" }), h("div", { key: 'c62306dc61fefaa94b5f270ad5a7bb2311cfe044', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '735b295eb8bb1456fbba4d4f9b272b580fc72dec', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: 'e010d624a9fe725e0f740cf9c360a4836e8aa85f', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, h("slot", { key: '836d6e77ae477079b1f3be857b2ae01fa62bd61b', name: "icon" }), this.header_title)), h("slot", { key: '3a29bb6f7bba0191291f9db9c7fd817d0dd83e1c', name: "title-suffix" })), h("slot", { key: '8a1aeddac1005a3d4797ab10cda42dfd506d1e9b', name: "custom-title" }), this.subtitle && (h("span", { key: 'e56bedc96baa510ed5f4121926e2f3a7b4efc25d', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: 'e29d8d5cf7d39283d0062a6bc962f7c2fcec1d98', name: "subtitle-content" }))), h("div", { key: 'cb85f106c39c7a464c0b1e4c2d6880f0059176a5', class: 'flex items-center gap-8' }, h("slot", { key: 'c9973030846c0251c7fb1b87035b681db5768f09', name: 'actions' }))));
    }
};

export { AtHeader as at_header };
