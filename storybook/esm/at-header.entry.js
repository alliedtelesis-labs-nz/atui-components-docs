import { r as registerInstance, h, H as Host } from './index-B-1zT4Ec.js';

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
        return (h(Host, { key: '3dd9607c6f3cf69b3e1425615edf6f2d2398abce', class: `flex flex-row items-center justify-between overflow-hidden ${this.padding ? 'p-16' : ''} ${this.border ? 'border-muted border-b' : ''}` }, h("div", { key: 'fb76f5cfd1703b6b1ffe0b633cfbaffe148b92ce', class: "flex items-center gap-8 overflow-hidden" }, h("slot", { key: '9d3e6ef01d4e610095e5c6e8ed271f2bcd5f5feb', name: "title-prefix" }), h("div", { key: 'fce83061fceda7f82c109c3e0822316f2b665e38', class: "flex flex-grow flex-col overflow-hidden" }, h("div", { key: '05cb0e31159c545d221896dece78b53b61389cb7', class: `${this.size} flex items-center`, "data-name": "header-title-wrapper" }, this.header_title && (h(HeadingTag, { key: '5e2795ed8a70f70e18c697d78044773a8d918dc7', class: "flex items-center gap-8 truncate", "data-name": "header-title" }, h("slot", { key: 'd005266bdf6faf537c6b65be90c6e94ae6f417ce', name: "icon" }), this.header_title)), h("slot", { key: '4fed0dcf57eabccff9f38314f0f62dcfab03d0ad', name: "title-suffix" })), h("slot", { key: '9faf23eba2615bb18307c4786ab8206ac034ec40', name: "custom-title" }), this.subtitle && (h("span", { key: '3327771af02d7eaeb65142340abfc139628aa25e', class: "text-secondary truncate text-sm font-normal", "data-name": "header-subtitle" }, this.subtitle)), h("slot", { key: '0fa2fa76da767eab6df92d9c7b6aefa9ac4493e6', name: "subtitle-content" }))), h("div", { key: '64feedd54c9890666e4fc596e7838b88c23cbebd', class: 'flex items-center gap-8' }, h("slot", { key: 'b91a118efee2b871370d587e6458354d1e47e0cc', name: 'actions' }))));
    }
};

export { AtHeader as at_header };
