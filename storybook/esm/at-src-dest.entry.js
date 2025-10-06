import { r as registerInstance, h, H as Host } from './index-B5bw8iR3.js';

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
        return (h(Host, { key: 'dee674dfddc380566f82a673b6783a120ab8772d', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '9777f1ecb1ed14d3e139f9aae17138229ab050b5', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '35197fc561770442ce7faa04549447de434e0c86' }, this.src_text && (h("p", { key: '7ffb204540869b975cde5e54de5fe5fbb7325fbc', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '10ce3fa8f9c2c809b263b5d3f37d0112eda8dd2a', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '018c2c038ab595a2123f59b8f45e95b3365acdad', class: "icon-lg text-light flex-row items-center gap-4" }, h("span", { key: '5cca2ad0be2cc63ad6b3aecebe7810d3fbefe996', class: "material-icons" }, "arrow_back"), h("span", { key: '9c5fe6716c411f056fb22c130d1d5cd5b2985896', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (h("div", { key: 'eb17658283a20873f8b1e0d5105689a24f394abb', class: "text-right" }, this.dest_text && (h("p", { key: '6bafaaa2449b6c4253dcbb5eb4db59ad5cc6aeb8', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: '60bd5b96156d7323b687fe3aaa17c3971d8d94ec', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '0830e88302acbde51e75e5b761dc2557f0b0635b', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
//# sourceMappingURL=at-src-dest.entry.js.map
