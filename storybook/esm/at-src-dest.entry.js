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
        return (h(Host, { key: 'd753a1e67e869fc3fb823584c573b07b304bbf47', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '0021c43aca4e94ccd27469d7495e2d6ea4edb961', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: 'dd1e72c083b8727f877cbc0351b7511bfebdd86e' }, this.src_text && (h("p", { key: 'bce4bc232f4a623b9f7f60620ed56805b4bcd5cb', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '61753074e8ab2820416916e0410a25a3f7aeb6b7', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '3637b56b11cc242633bcaebf8ee7090c7171748f', class: "fill-muted flex flex-row items-center gap-4" }, h("at-icon", { key: '9575811d4e4c25172b2bf2a4f83fa04070361ce4', name: "arrow_left", size: "1.2857rem" }), h("at-icon", { key: '8d0d0efac8fd4325292cb887964fcf6d3b700dcd', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (h("div", { key: '3bb770643b9b50d4d6f75f530df45f3d7410edb3', class: "text-right" }, this.dest_text && (h("p", { key: 'ca5f7ce2f85b3ccee3fc50a8d9085f05042c6751', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: '9e4b39b9674ede3e48845c304a19740bb697120f', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '6fd7ee7d098a3a0c303a9f774668a0941b3b82bb', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
