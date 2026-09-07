import { r as registerInstance, h, H as Host } from './index-CGGSFxDu.js';

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
        return (h(Host, { key: '0d7b959b1dfff46363889d05e0b206db264656da', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: 'cd416ca83107e58d9db6bdd3e47924ab7d114092', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '0dae165f9d3dd8e285f5b12cf496679cdda4b0e0' }, this.src_text && (h("p", { key: '197558536865a1c7b8d47d17de24889c2975fcb3', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: 'd6522d1572c7ca57206f61000d6bc541ba89be85', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: 'a8b25dfa1f2a9bc9e228ba2d3717a39618910904', class: "fill-muted flex flex-row items-center gap-4" }, h("at-icon", { key: '164501f4141598bf9d5b6972a0023ba0668d4046', name: "arrow_left", size: "1.2857rem" }), h("at-icon", { key: '6b4cfd165f11e3910cc7ba8e7858155c1dc5144b', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (h("div", { key: 'cafee6cb18d010aa2eb547332ff8b211c2fc9776', class: "text-right" }, this.dest_text && (h("p", { key: 'e9040eca7537c7267f0c0c02a58358e12bd33169', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: 'af8c5e55641c399e878163b5258bb023f3ee40cd', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: 'c821f5b15d10c12e7349fa28962e2ccd528e5b12', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
