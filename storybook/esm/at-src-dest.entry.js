import { r as registerInstance, h, H as Host } from './index-Dm8LkzEZ.js';

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
        return (h(Host, { key: '84fb042f87553cc968c47e25eaaacfdae192cfbc', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '26eedc011be2827024764c49a45a594a6d89c8be', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '40b7ba303014a54b63f067a273634d0afd8638c9' }, this.src_text && (h("p", { key: '726a670387f5f48de2239fc02cd492a84688beb8', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '6f615fb71d85767a621e429d0a2bab2f951ce6c0', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '8e7e5afff34a0c2830a8e74e7b0b1139880c3e25', class: "fill-light flex flex-row items-center gap-4" }, h("at-icon", { key: '4b2dae5bde3cda5fd39bc09dd966bd33d190445f', name: "arrow_left", size: "1.2857rem" }), h("at-icon", { key: '87ee15d16f4dd6e9d1b50f688526ba70d2ab2230', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (h("div", { key: '49bedc126281a5ce77b2ad957f6071a81c25f0a3', class: "text-right" }, this.dest_text && (h("p", { key: '461e5279e6d8f67926332ec0ab750e1dcee32bd7', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: 'ab2dfe3482d0aa13f6adb4833c0ffbb73d879187', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: 'd434701a5328cb831dd9a8938c690ebd88a49105', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
