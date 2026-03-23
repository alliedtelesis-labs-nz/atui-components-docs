import { r as registerInstance, h, H as Host } from './index-CkS36Ijo.js';

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
        return (h(Host, { key: '91977f9e0afd3b32660aa9a9096f6de34f40ebdb', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '607bae82056013e64a546a9853e8f77b7e1d6d34', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: 'c4f511503c4d556d43a00a43e5ee86524d7a13a5' }, this.src_text && (h("p", { key: '4f22b0766e9bb35cd4ab72a6b9f257b3364d5a91', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '79ad7a90d983bceb6dc2d7bb443425df68e5f98c', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: 'a62bc89df88284716976bf1b1af6a801addeacf7', class: "icon-lg text-light flex-row items-center gap-4" }, h("span", { key: '4fbf7bb370509ae49ab15f4a0bf53e2b58afcf50', class: "material-icons" }, "arrow_back"), h("span", { key: '56554c3aac40048ab19f3320deb40a191c4b3474', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (h("div", { key: '5b8168a31a7cbc5d7899e9cd2b8a382f2b0400ef', class: "text-right" }, this.dest_text && (h("p", { key: 'b13064155158364d6f2453922b6fbb5d3d19c3e8', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: 'd9da4c3795536d5e1b469f51d57a68a549134c0b', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '88a686651b036554d0e92b62261c2a186d983ad8', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
