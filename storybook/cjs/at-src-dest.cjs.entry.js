'use strict';

var index = require('./index-CzDB71Wy.js');

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
        return (index.h(index.Host, { key: '22cab637ff5ac91d3162c36f3089b930c3137d10', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (index.h("h4", { key: 'cdbd4204c09ce6871a55ca3bb2361c95d2ed3376', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (index.h("div", { key: '5af9a2c4b28e545ea844c6ef9520f95968e7eb62' }, this.src_text && (index.h("p", { key: 'c3d403d4dfb9fafcd1903a2345064dbbd66ccdde', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (index.h("p", { key: '811dbe26e12bea02f270ca3e44e979aab8606671', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), index.h("div", { key: '5ade42dd28f2a4544c2704ff60de286b2be2edfb', class: "icon-lg text-light flex-row items-center gap-4" }, index.h("span", { key: '0791b7bfa50efc50ce0c4d6c1edf0e1febb703bd', class: "material-icons" }, "arrow_back"), index.h("span", { key: '85b2e6bdf3d3bbb80cdf06c551b10f35f9654f62', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (index.h("div", { key: 'ea7e60b1c1ac4d1e50e4fe58740eb0bc68dbd044', class: "text-right" }, this.dest_text && (index.h("p", { key: '2ffd7fd94e11570da6199f829711a3129587548f', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (index.h("p", { key: 'f83badf763d9f58f852b4287cbd0a101252d834c', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (index.h("h4", { key: '57deadcd7b94aacfeb10ec46691f1d6ede180515', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

exports.at_src_dest = AtSrcDestComponent;
