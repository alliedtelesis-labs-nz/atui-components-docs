import { r as registerInstance, h, H as Host } from './index-Cw-6gA7Z.js';

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
        return (h(Host, { key: '309a8edf596159594c680e6dfb31571bbbcc44cc', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: 'cd9cc04cf9aa9b1ed2d5df8f546e851c016da072', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '181b518e7af402d0abe1e4437e588c9563c89488' }, this.src_text && (h("p", { key: 'd0642a9e0b63f5be9fa287098d50b67e3fc35a4e', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: 'dfe2b0fed424f5422136de95435a87efc57176fb', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '6b2fe097d724e3065ce7476fb22fccb6c23bc895', class: "text-muted flex flex-row items-center gap-4" }, h("at-icon", { key: '76b4914a2b1f5ca4b733fb2b858b5961e1df9325', name: "arrow_left", size: "1.2857rem" }), h("at-icon", { key: '2b6ce0d96a1fd8b768b5b5540983b09f4079f885', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (h("div", { key: '99162471e69cfc476c0136cab92facf3737abea6', class: "text-right" }, this.dest_text && (h("p", { key: '6ff181114f5eb9a2df7bd1524481563d390ad302', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: '461c9c0ded3f7b423c3af83152d1a2e7d745d3cc', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '37bcf89c1cec9561422619df342c721f61beb64b', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
