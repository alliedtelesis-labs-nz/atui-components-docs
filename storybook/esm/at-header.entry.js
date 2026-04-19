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
        return (h(Host, { key: '0c102fa5022f625f9106bbce495a30c3ead219cf', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-light border-b' : ''}` }, h("div", { key: 'a0c93cbfea65e3aa38e9369db94f59e60cbdc2df', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '13a634bad764f65c714e844a62d63a003ca5c320', name: "title-prefix" }), h("div", { key: 'd8b4df684469e8ed86663acb7def0e724ebd3537', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: 'f3bf45260bbdf914c28e14720cc5326fa90287fb', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: '6ded69af0696856dfe7ddfeb13d7e44acd9b5cd7', class: "flex items-center truncate", "data-name": "header-title" }, this.icon && (h("i", { key: '4149d760be3301cd99311aacb5fc525f5ded9fdf', class: "material-icons mr-8" }, this.icon)), this.header_title)), h("slot", { key: 'cd47748b08876a2bf116d83a76d6768b61fdb638', name: "title-suffix" })), h("slot", { key: '10ccf561e413933bcaa5c4ab4720d3ae84504345', name: "custom-title" }), this.subtitle && (h("span", { key: 'a73b414b1c53852c5f3453aa614f02fa0479784d', class: "text-med truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: '9f75b5ce48088f8d61f9d3e5de0f4d9714edc9fa', name: "subtitle-content" }))), h("div", { key: '1e00b6931ee1cfc89f7c21b9df20cef819d429f5', class: 'flex items-center gap-8' }, h("slot", { key: '8c899d25d13949a6f7861aa87f76f985efd35821', name: 'actions' }))));
    }
};

export { AtHeader as at_header };
