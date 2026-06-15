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
        return (h(Host, { key: '38c57ca331ea2a5f3484347fa92108db6206b7e0', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '09a723775aac43d81d331c4d9dca24dfe5b86559', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: 'ee54bcd9cef32e5ee8801a254eca9a998d16587e' }, this.src_text && (h("p", { key: 'c41f19ef3537a5d3656d47e1c2e190abd2e0fe94', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '170991b2f1d140ba571fdd462d0cac5fd5ffff47', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: 'cf8be757e7b34ac0f334f48f1e792790bb1d37b4', class: "fill-muted flex flex-row items-center gap-4" }, h("at-icon", { key: 'fd4c62e5baca06ffd5dc0cc089e14dca9b4a2967', name: "arrow_left", size: "1.2857rem" }), h("at-icon", { key: '7d471f37ac74d397cc8725fdd56d2a75994498f2', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (h("div", { key: '073c9c1034c983dcea04eddd61caa6023a5e7c98', class: "text-right" }, this.dest_text && (h("p", { key: 'b17233040fa5d62293b316f5dcb12d855fd18838', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: '67d0b5ee8fc162eca3cca583c312694f0f710bab', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: 'c5f019047464bad6e34d2dec425c1e493e547f4c', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
