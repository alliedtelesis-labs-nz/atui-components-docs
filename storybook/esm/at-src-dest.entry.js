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
        return (h(Host, { key: 'c69598df78984eb2a403962e8a487aec18ed49c2', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '62c46da6a5e86a1fb5cd0a75b0e3034c5bd71d19', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: 'c929bd2aee35b8d489be2f6d7e04d65c0ab79dbb' }, this.src_text && (h("p", { key: '9f8ba662802ab11749486b04433bdeb77f26f83f', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: 'd845cd0ef952639fd596687ee56b210554cf1cfe', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: 'd321705ce81c2d00cb0bd472945c2829cfc90864', class: "icon-lg text-light flex-row items-center gap-4" }, h("span", { key: 'da21412d3235b77c7f1753942efa3fdd1bbbee26', class: "material-icons" }, "arrow_back"), h("span", { key: '7639aa9a746c0e8ce33a6f8af7d3a9bc0ec089be', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (h("div", { key: '9a61fdb0dc2f171b6bc008709262c529f2f1319f', class: "text-right" }, this.dest_text && (h("p", { key: '429e332272f44de43bdf90f1b5a6c8ebe0b48a36', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: '2261ab128112e97811ca54c1b5d883cc3d6ffd2e', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '3a0b5203436ea1dc570393990cf173bdb775e55d', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
//# sourceMappingURL=at-src-dest.entry.js.map
