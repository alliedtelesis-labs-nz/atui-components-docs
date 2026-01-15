import { r as registerInstance, h, H as Host } from './index-EP34iaAr.js';

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
        return (h(Host, { key: '86c83d1f5e71e1dce6582d0db4f742dfab3bd462', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '5bce03a0ff0018679e8a61d2260ba20865863be1', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '9ee2f42dadbfb64dcab76e2652bfa5e3c5d5ef12' }, this.src_text && (h("p", { key: 'e701847839459a0fd620526ac9a59b88605d6f64', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '1a99a5e12d360fce59223cc7cd42ea9c111b984e', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '2144884c200398b415e2c832266485d0cdb93c13', class: "icon-lg text-light flex-row items-center gap-4" }, h("span", { key: 'e349d624429c8a991276a5e66bd29dbe406b4c20', class: "material-icons" }, "arrow_back"), h("span", { key: 'ff9cd717ee7b4f7f0845a47577457ab536f94813', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (h("div", { key: 'c4979d70c51924a3676f2f69760e644683f43220', class: "text-right" }, this.dest_text && (h("p", { key: 'aa143890169bd47e5ad973058bd674617ea949c5', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: 'f87920797ffaf47a04391cbb75c177d562cc172a', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '500abf3fea9da8b8800b706ce37710ea0fd59209', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
//# sourceMappingURL=at-src-dest.entry.js.map
