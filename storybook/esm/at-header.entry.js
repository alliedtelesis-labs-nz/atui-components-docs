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
        return (h(Host, { key: '53cd79c7721cf0ef1980f46702c47c130fd65ca8', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, h("div", { key: 'dde69fa7661c813d7bf6c237867b71fb42d4a684', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: 'a0e515a2af2b924a2a42b0c93dbd2516071b60ae', name: "title-prefix" }), h("div", { key: '000295dd1f3a4e8a4113d96961891ed22ca50f1d', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: 'b8d034ecea60e598747d44bff6427e4e4ebae50e', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: '21bae822b60904c5976c8b8a2fbecbd9e1e21f15', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, h("slot", { key: 'bb6c2245c88b534c59d66291bcf2991befb7c7d0', name: "icon" }), this.header_title)), h("slot", { key: '82962faf75e019abb6855591abf53cbfe2967c7a', name: "title-suffix" })), h("slot", { key: 'c170833e94dfec638bea91997ad850e728110d50', name: "custom-title" }), this.subtitle && (h("span", { key: '7f63f438d34fda40ddba71c9fc1bc1aa03de9057', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: '47703105e223d54180e2a0ef72f0fb6db2f52535', name: "subtitle-content" }))), h("div", { key: 'e783ae6ba8069a542e89fe1099167453649a9736', class: 'flex items-center gap-8' }, h("slot", { key: 'c69a034a78827416e3d626198941e6d8104d0774', name: 'actions' }))));
    }
};

export { AtHeader as at_header };
