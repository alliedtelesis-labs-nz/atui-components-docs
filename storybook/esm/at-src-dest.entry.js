import { r as registerInstance, h, H as Host } from './index-jvbUuQtg.js';

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
        return (h(Host, { key: '5ddbe8b59902df5ec3d8e97d907a0fcc75e15fb3', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: 'c4fe0937fbd5f1cb961968fa8528117835258ca9', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: 'ae50b2a3796922b6ac2ee43cfe61a4e89aa6dadf' }, this.src_text && (h("p", { key: 'f6551735e8a5174a7e37b82331ef5eb5e416f774', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '58fbd3565e84bc40277fa13856e146eeb40a3f6c', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '9d439b2d43cdc0972032d9c2bd1678dc04a8d871', class: "icon-lg text-light flex-row items-center gap-4" }, h("span", { key: '9e7ac1dce0113856c27ad8cf6c88115722847029', class: "material-icons" }, "arrow_back"), h("span", { key: '6572e943ff1a5f4f4c5236ed81cbf107e1a8ff4b', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (h("div", { key: '0b73415923fd3b0dc057cdb8d6707c02ec45960f', class: "text-right" }, this.dest_text && (h("p", { key: 'f09d613f72baf499d2b435ee72ebc47abc520009', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: '74d8e92cffb267f8772620b1807d8ff64651a4a3', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '55631720bfd8afe3e6e4c20de1a86d4726635cbd', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
