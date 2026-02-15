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
        return (h(Host, { key: '06f0ed3e60f6a75c20f98edc684e8ab51096bb1c', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: 'd364cce44937ddd5aad655ae42254f82f39becfa', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: 'c8301b48fabd76cb310586cc7c42a73bc24afed3' }, this.src_text && (h("p", { key: '6cd4baabda354bc44981f44f4f970fa87302c797', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '6f88df4efe889741fc1b6a01ab5217f83a7cc9b5', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: 'd86a38ade4a44d0a6e7b52153abbac5dc31a34d7', class: "icon-lg text-light flex-row items-center gap-4" }, h("span", { key: '1df44905c0e33db26afa632dff92a5c514eb205c', class: "material-icons" }, "arrow_back"), h("span", { key: '0e65374eecea4407fd2178a0db27a23d1966edd3', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (h("div", { key: '975628cbf9e2c22af88d60e25d7044aba9a06681', class: "text-right" }, this.dest_text && (h("p", { key: '5729c1a2b25c27d5f41b5a8d6e20af82859bc888', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: 'c4787945cb29ca3229aedb90f4c8567d7c7d572b', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '57a7a71566634b728d810abe5bcc53fa502f2720', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
