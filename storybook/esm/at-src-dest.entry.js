import { r as registerInstance, h, H as Host } from './index-C8uvvL0O.js';

const AtSrcDestComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Aligns the content to the left or center of the container
         */
        this.align = 'left';
    }
    render() {
        return (h(Host, { key: '64119e5b0adcf602c46989ce1b5b6d9d8b912b2f', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: 'fd33cfd9c416ea999e576e7a40a7aca9503f876a', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '80b133b972e36597e7f891bddc8d4739235086e7' }, this.src_text && (h("p", { key: '30c26a9d98101272779e5d139e3015fefcd30037', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: 'd08821600c40fa9bd426cedb987fa489ea1f5266', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: 'f46612f2838e0fc5f9cc1dee01025247b8196dc7', class: "icon-lg text-light flex-row items-center gap-4" }, h("span", { key: '9d8799180b0dd892e4ec58cb7ca61ff52351b25c', class: "material-icons" }, "arrow_back"), h("span", { key: '9f2c8a27d1fd39faff7d7d2c7833da75dda093a4', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (h("div", { key: '1427990e7a4686f6673ef2ac6640f8aee5d1bd43', class: "text-right" }, this.dest_text && (h("p", { key: '3dd96e33691caf9a4631dd2406fe7904fa33a9d9', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: '91e3e161a7ec9a77eb5d21a90b672e1dfb7aa01b', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '623f9210212c8316c41dadc6dc7a49f3d600b8cb', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
//# sourceMappingURL=at-src-dest.entry.js.map

//# sourceMappingURL=at-src-dest.entry.js.map