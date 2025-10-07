import { r as registerInstance, h, H as Host } from './index-Cod2-jIY.js';

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
        return (h(Host, { key: '1e109a36deb28f0d86edd35e6578732cad41a0c5', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '3a8a83b42ba00094c7f893ecf8e96c6d8d53a56c', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '535c335043e7486d63f9a286d97723969851569e' }, this.src_text && (h("p", { key: '71c3ddf1095d7cf4000a829dd64960165d6c16d1', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '89f5e0b138bf3e22e8d097e2ed8e31ca7bf8bf80', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '0c34753b805260619c5106c05c5459181ecf51f8', class: "icon-lg text-light flex-row items-center gap-4" }, h("span", { key: 'b6561fa796975fa506f7dbc466846f07bd77be77', class: "material-icons" }, "arrow_back"), h("span", { key: '2d5bb7a18fa850862a81bc3d1cb46c9945db8a98', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (h("div", { key: '7fbd5ef34ad56acb2805c9743543ea85e5721380', class: "text-right" }, this.dest_text && (h("p", { key: 'fbd7ce238c4e3684dd729ba47ce334ebfcde4fe0', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: 'e5cbf1c61b8d42b950f3105a6c82d276ca174d8f', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '11f90342f953ff6c37d715dac092fcfcb44a6cf1', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
//# sourceMappingURL=at-src-dest.entry.js.map
