import { r as registerInstance, h, H as Host } from './index-_QbJz5mf.js';

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
        return (h(Host, { key: '07cae3100d2a71f0f458a0a8b33826c8cf4fa618', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: 'fcf72d4f220a224590c728da2cd789ed0bb33a0e', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '2265f574fe7b3d6e036866ec0dab986339a8b1e7' }, this.src_text && (h("p", { key: 'a95a386dfd5370c98730432a844e62c106c2239f', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: 'a55edfb2d2664e9d8ccab319399784f6ada40a36', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: 'ae9ec55949119b06c4622e533a447c206ccb6906', class: "fill-muted flex flex-row items-center gap-4" }, h("at-icon", { key: '2cbfca18f545b6b126e3d788820f33e19267339b', name: "arrow_left", size: "1.2857rem" }), h("at-icon", { key: '113802af38ee1bc9b0683ccf0c92d52632a1f696', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (h("div", { key: '04fddb3a4a261dab67cb1319dce1d0013b712a9b', class: "text-right" }, this.dest_text && (h("p", { key: 'a4dda75cd6aabcc8323d47bc4c462a32c6283195', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: 'ce8160c8010161bf8c2c8b33357444039856be9e', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '2a710af0fe11a920939bfc2f25b970f6e939dd92', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
