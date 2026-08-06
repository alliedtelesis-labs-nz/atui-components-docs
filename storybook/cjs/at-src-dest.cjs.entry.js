'use strict';

var index = require('./index-BunRc-jd.js');

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
        return (index.h(index.Host, { key: 'e453c63ef0599402a8c8f7449bcd1e2db0a31273', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (index.h("h4", { key: '3df3a2f28fd0b98fc9cff1f291ec0577d1995d4e', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (index.h("div", { key: 'ef60c16070d3ba998a708538dd4332628c592991' }, this.src_text && (index.h("p", { key: 'ebf714d477e28c4d7fdf5fe46afc2762830e9ccd', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (index.h("p", { key: '0e0fd6274b160e17ba3ccaad8854ab402e26fc1c', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), index.h("div", { key: '07b5d3cf20918429d503b03447ef37df0ffdf7fd', class: "fill-muted flex flex-row items-center gap-4" }, index.h("at-icon", { key: '22b73aeed7d24962b846fe9d6cdcb3a3875bcfc8', name: "arrow_left", size: "1.2857rem" }), index.h("at-icon", { key: '3e69b11887a0da92d5c51d921dd674f5deedef60', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (index.h("div", { key: '07eaadacc185d72b30920c76b6688117e3a6715a', class: "text-right" }, this.dest_text && (index.h("p", { key: '965040aca44d32e931e16a0c002ca172a410b7af', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (index.h("p", { key: 'ee5b0a6d1b78397e5ef2b62170d88187cdce36b6', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (index.h("h4", { key: 'c0ab524e4b549546a3f2ab1f7440941f4fc12881', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

exports.at_src_dest = AtSrcDestComponent;
