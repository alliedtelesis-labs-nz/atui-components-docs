'use strict';

var index = require('./index-s6Ut5Yq6.js');

const AtuiSrcDestComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Aligns the content to the left or center of the container
         */
        this.align = 'left';
    }
    render() {
        return (index.h(index.Host, { key: '1066724dfc4f631f3d8e8d34a83a5024ad4e0706', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (index.h("h4", { key: '2ff8c6c328668c85a00630e55265b346c025d746', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (index.h("div", { key: '32474bcf756f3c057f61b9911b10e870a5cf847b' }, this.src_text && (index.h("p", { key: '86bea3d3b840eda2a386c177981de0627c4e6b05', class: "font-medium text-dark", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (index.h("p", { key: '66712c7e2ab888f7817c6cd8d5ddcaec2aa06aad', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), index.h("div", { key: '9b9cc0866a1369df9e71b8b5d873419adfa8d138', class: "icon-lg flex-row items-center gap-4 text-light" }, index.h("span", { key: '8aa3e0baa9a2fdf7e3f7b987a7b253c58e426db9', class: "material-icons" }, "arrow_back"), index.h("span", { key: 'a869176ea07dfed8bf709a299672706d05f2986f', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (index.h("div", { key: '2eaae3b3f1262e5506f2c1d5931c6f372fe68754', class: "text-right" }, this.dest_text && (index.h("p", { key: '479d9a37a0803f4a4bcaf9367a9fcdaa8ca2e66d', class: "font-medium text-dark", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (index.h("p", { key: '50ceb7a08983e7def3b7c3b98926341135a1c5f3', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (index.h("h4", { key: '7693f30325c63fd8cd642257f069a2e2a58650ed', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

exports.atui_src_dest = AtuiSrcDestComponent;
//# sourceMappingURL=atui-src-dest.entry.cjs.js.map

//# sourceMappingURL=atui-src-dest.cjs.entry.js.map