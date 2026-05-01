import { r as registerInstance, h, H as Host } from './index-BAAX2Der.js';

const AtSrcDestComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Title displayed on the left
     */
    src_title;
    /**
     * Text displayed on the left
     */
    src_text;
    /**
     * Subtitle displayed on the left
     */
    src_subtitle;
    /**
     * Title displayed on the right
     */
    dest_title;
    /**
     * Text displayed on the right
     */
    dest_text;
    /**
     * Subtitle displayed on the right
     */
    dest_subtitle;
    /**
     * Aligns the content to the left or center of the container
     */
    align = 'left';
    render() {
        return (h(Host, { key: '3e1416a4e2ade3eb482e1a981fb0881800365d27', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: 'd261f408b650ffbbf8b854c7d3652e688921c1ed', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: 'a360e1bd935f7a7cd04be43db24ea66d3decc655' }, this.src_text && (h("p", { key: 'e105359c4359ea6a31c56155556d0a56f44f6938', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: 'd3ef2c42418d1d8c18d24f4d4fae6e807e8aec7b', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '7bbfdf3e0e26d54a5cd79d7f5b0394cfeb92bec1', class: "fill-muted flex flex-row items-center gap-4" }, h("at-icon", { key: '9f1cc4b7595943958d7541f23b865323af7d24c1', name: "arrow_left", size: "1.2857rem" }), h("at-icon", { key: 'a33f07e1c2a89d13424f32cddaf542d80bd427e0', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (h("div", { key: '16b502ed9ea06733b130c86cebd7f1f584cba55a', class: "text-right" }, this.dest_text && (h("p", { key: 'a82ade5801dd04fb0d4944832b8074c8790589a8', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: 'beac7bc11f42b8decda227c20cef1b3dc52c60d1', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '862149510185f6b4b9ba40e6045f188f0c61c645', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
