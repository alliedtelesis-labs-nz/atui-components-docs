import { r as registerInstance, h, H as Host } from './index-m_dTEvgo.js';

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
        return (h(Host, { key: '0f5011e47399f20cf44a71a46a3857207d5706e7', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '05d967f49058b377af3b3fa31a7e594746863765', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '1c181d7414932485f1931ad6ccb54c3980013bf8' }, this.src_text && (h("p", { key: 'b7e10d680cc09a5aca3187bf377404769e41d7a3', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '3207efe7cb882b53c61c6f9d205f81f193f783b8', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '8e76af4edcac280f20863e5b2f5a147f3640326d', class: "fill-muted flex flex-row items-center gap-4" }, h("at-icon", { key: '14ed56ec4504412c982fb1fa20f8b2fc4212f683', name: "arrow_left", size: "1.2857rem" }), h("at-icon", { key: '8f44dc939350cd10dcd9228efb781ad8083fb1e1', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (h("div", { key: 'aa26068c973b2eb2b8ab78d1a9764cb358fae2c8', class: "text-right" }, this.dest_text && (h("p", { key: '7598bd027c5a59c5894f5704a151e089d494158f', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: 'e5741c512df893082a37fdc6238370a6f92b4c06', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: 'ea7912c50dfe930485a01b89678761001cfbd89d', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
