import { r as registerInstance, h, H as Host } from './index-CVZ0O9-b.js';

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
        return (h(Host, { key: 'aef0ad6ed403bfad830037ed0232eadcdfe6150b', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '45aa2465de10348747734009a23a7e0f12078434', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: 'ad69a2c499a3283b66c6a1d059c17dde8b2f1a5d' }, this.src_text && (h("p", { key: '7ad46abe843bd8d4f731716edb389e192b292ea4', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: 'd816052e465c281aa0690726b8a2d5d01383d88b', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '1865e332f99a4fa58f28907f37bb4b4b43ccac21', class: "icon-lg text-light flex-row items-center gap-4" }, h("span", { key: '2882f055998b7734592ce6997282a04330f6cc5c', class: "material-icons" }, "arrow_back"), h("span", { key: 'e9eed6008eff2c21a3a7d95f4afc6bff4b32ef95', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (h("div", { key: 'c8be9dfc01d726a8ac4686eef40e78051343aec4', class: "text-right" }, this.dest_text && (h("p", { key: '40258f0814f9d01a40b0aedfe407d00f750f5155', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: 'f37ccf774f5c2c7c52b4325177c70972943abd21', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '262445efb7cb96d2dff7bd9160e9ef16c67ddd7d', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
//# sourceMappingURL=at-src-dest.entry.js.map
