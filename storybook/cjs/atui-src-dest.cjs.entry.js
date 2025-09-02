'use strict';

var index = require('./index-43B6Ydvl.js');

const AtuiSrcDestComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Aligns the content to the left or center of the container
         */
        this.align = 'left';
    }
    render() {
        return (index.h(index.Host, { key: 'cc5c6e60dd6a6a279ac08a26345b06f85716b1e1', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (index.h("h4", { key: 'af8ceaf2c55597438be07fc6747609173a3d5a4c', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (index.h("div", { key: '2a20ea6be5801291ab46e413047a27fc4e5396b3' }, this.src_text && (index.h("p", { key: 'b5574a315fa990e3dc38c1e6d15774e41b2f3d36', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (index.h("p", { key: '4e924941747d1a30e6d803fc6309641f799c4a2c', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), index.h("div", { key: 'f4fe25462a8f425cfd2f7f487077c1e0b7266660', class: "icon-lg text-light flex-row items-center gap-4" }, index.h("span", { key: '3612629b589096fbb4557d4e4f40f48687fcda78', class: "material-icons" }, "arrow_back"), index.h("span", { key: '01c84e518aaaba9eb563885a79686d9c9067650a', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (index.h("div", { key: '6b4e1200a42ec69b4d87121aab8cac1fcf367a38', class: "text-right" }, this.dest_text && (index.h("p", { key: 'e445746c1e05276cbdd448e06cb4c7036a68cce9', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (index.h("p", { key: 'c37881f96d91310d677c5c6374d7329f8ba5ce9e', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (index.h("h4", { key: 'eab7ec3d2268be12ee8276f9ffc9f0d7b5c9b876', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

exports.atui_src_dest = AtuiSrcDestComponent;
//# sourceMappingURL=atui-src-dest.entry.cjs.js.map

//# sourceMappingURL=atui-src-dest.cjs.entry.js.map