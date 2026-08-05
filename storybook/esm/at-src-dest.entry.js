import { r as registerInstance, h, H as Host } from './index-DNWYfDmW.js';

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
        return (h(Host, { key: '1d22c045c189a24f1af467ae5f8e57f4f0cc9eb7', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: 'b746d3717d13fd81f1bfc5e5ffbdb34520b82e01', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '7f4616d666008a67aa2ed45b294c17f9b43e1d60' }, this.src_text && (h("p", { key: 'af6445c7f1f89656c1ce7e1b162688e7d0f55f55', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: 'e0b8e78ae1083ef266219380cefdc258f6fed8f7', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '1b4781de9f4bb13045a13f16e4b711631eadbb5e', class: "fill-muted flex flex-row items-center gap-4" }, h("at-icon", { key: 'ef7583096582b5fa2ab4d4abc5a3f326bce2daa6', name: "arrow_left", size: "1.2857rem" }), h("at-icon", { key: '09de10ac1e40c7a33ba2f1f988861fb66d09775a', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (h("div", { key: '67a629fe92664ecbcfc36767e4583750a0f2eac6', class: "text-right" }, this.dest_text && (h("p", { key: '5565eb4fbd89b2b8e82bce248ccb689a2aef50c7', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: 'ab16a0ff8026c58436fd136a30c4f1b436fea1a2', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: 'fa9a0a85a8775fe40da3b4fb33009dc967fee3b7', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
