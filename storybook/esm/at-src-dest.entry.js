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
        return (h(Host, { key: '2b57a6e89053ec77b7fbcd7b57128479a28aaf12', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '6282fd47ebaeee84d40fcedee6c61de799f29eb6', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '00bc6733b20a0bd0c871dc44dfab68cff4eba21f' }, this.src_text && (h("p", { key: '2ae512ecbb992745ae1eb327a949c022f3010cfd', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '9ee4cc57ebc35e84178d0d3b858adeaf9bb1bee3', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: 'ba036c7b48d81a7e403f324a750ce07c9323f32a', class: "fill-muted flex flex-row items-center gap-4" }, h("at-icon", { key: 'f90dd19af0c08ce226a730d54cf535cd395ed3e2', name: "arrow_left", size: "1.2857rem" }), h("at-icon", { key: 'd658a1c961ff1ee05a60dd4402b9a6e7737116d1', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (h("div", { key: 'cafe7b6e191cb4b727fa4662ee3c36cae370133b', class: "text-right" }, this.dest_text && (h("p", { key: '19a9367235890f5479d5f920a431a7e69dac4b96', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: '741d9c9dbe3c2058725253068675810a0c3fd5a7', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '182c512d4a648929c80cdd7c018f9894d46ff615', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
