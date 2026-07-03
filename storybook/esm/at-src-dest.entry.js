import { r as registerInstance, h, H as Host } from './index-BMlRrrhK.js';

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
        return (h(Host, { key: '02831af5641191d5d82cf136aa210f477b1ef70b', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '06eeadf35b3a64307b13a5005b40dc9843548fe3', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '639212005fe76e07dbbb05b439f0dd2c46097df7' }, this.src_text && (h("p", { key: 'ab6e354f8cbd50cca8d5f0a153e9f9df479f1ecc', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '1dd385e264eb467e1b2d4aea353b1712e0a1a27d', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '209899a6f4dcd0e56f2ca303706b129c03bf1df4', class: "fill-muted flex flex-row items-center gap-4" }, h("at-icon", { key: '76337db22fefce05ae8cc7b90d854598ce342650', name: "arrow_left", size: "1.2857rem" }), h("at-icon", { key: '8cb33b2e78164c4890973311beec90a853c01195', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (h("div", { key: '979fcb06dbd9b4b0a858563b6df13d03bdeaafc2', class: "text-right" }, this.dest_text && (h("p", { key: '392c0c682a080e441c8f7af09124900923ddd2cd', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: '58eba71245ae80ef429b60e55436a291b03c62ff', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '92dc07d3e122f83176d4c1587a90ccc01749e7ab', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
