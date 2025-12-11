'use strict';

var index = require('./index-COiLLAKF.js');

const AtSrcDestComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: 'ead95fc30217646217eeeb928f28a299bb25e367', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (index.h("h4", { key: '2840a9aaf9bc7ca14eca12e1340127e574be6ec7', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (index.h("div", { key: '16591433dc16158553c8315eaef3f6ea553fee3a' }, this.src_text && (index.h("p", { key: 'ecf452a7ab2969ebc4b08603a9f0abbfaa116329', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (index.h("p", { key: '71167cf87e7792bc8a5739446b6e8879a05a0f43', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), index.h("div", { key: '9ca783de23ea35a896e86bc281ecc1c26b28a433', class: "icon-lg text-light flex-row items-center gap-4" }, index.h("span", { key: '4e8faf41be2c745669f82cb153baa4ac68012315', class: "material-icons" }, "arrow_back"), index.h("span", { key: 'b9d1af2892a48b5fd980b0181a804fcb066d51fd', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (index.h("div", { key: 'da31aae49d2c1b11b9eef114934786b7a51577b2', class: "text-right" }, this.dest_text && (index.h("p", { key: 'dd9d5af12c61eda9f0b48d0e9b272a734a770644', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (index.h("p", { key: '391aa104253b7bc8ea936f7ac9fc93c9a054c34b', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (index.h("h4", { key: '72b4efa71f6299b1f7c6294c286d21661cea0900', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

exports.at_src_dest = AtSrcDestComponent;
//# sourceMappingURL=at-src-dest.entry.cjs.js.map
