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
        return (h(Host, { key: '8aed89454c5609760bfa37871e6a94757c2396ad', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '384265aee028cfd175e2cceaaee87c06173ff6f1', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '45c893956e019b5e6fb117738939ed91c7a7b7e4' }, this.src_text && (h("p", { key: '1f8e56709f0d0ef01e2f9e81e48988adcf22cc5c', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '671e28bef687625f7586396f6133974b1d950a2f', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '87b1de3dfd83ad34111d3dc83bbe29502563a002', class: "fill-muted flex flex-row items-center gap-4" }, h("at-icon", { key: '9043335680957036325c42bdd182ed9276aa0a1d', name: "arrow_left", size: "1.2857rem" }), h("at-icon", { key: '42f74a5bb095329547839383f70701be419bff38', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (h("div", { key: 'bbbb97937b4c8a2f89445be67ed0a42643be9099', class: "text-right" }, this.dest_text && (h("p", { key: '0f11e1dd28e524eff8a7ece6eee48d270a793a3e', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: 'c5e7c30bf8a1224f100e5ace6fc52bf8cfa267aa', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: 'dda272863be35a2743cc4221bfa8079904221594', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
