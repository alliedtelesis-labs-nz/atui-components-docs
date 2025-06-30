'use strict';

var index = require('./index-DGivrgtr.js');

const AtuiImageCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    init(params) {
        this.params = params;
        this.imageSource = params.imageSource;
        this.getImageSource = params.getImageSource;
        if (params.getImageSource) {
            this.imageSource = params.getImageSource(params.data);
        }
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.data);
        return true;
    }
    updateCell(newValue) {
        this.params.data = newValue;
    }
    render() {
        return (index.h(index.Host, { key: '44660840d1aafcbfedd17f1c962c76d70ea8835c', class: "flex h-full items-center overflow-hidden leading-[100%]" }, this.imageSource && (index.h("atui-tooltip", { key: 'bdab6ea72f538da603a36a3062393f1edd50cd0e', is_visible: !!this.params.generateTooltip }, index.h("div", { key: 'f577fb34af23906b4c5e02486c5fc549f9cf54f5', class: "flex items-center" }, index.h("img", { key: 'ab1f40a3922c334924e5bee0efd8ef70e6c3a91a', src: this.imageSource, style: { height: '30px' } })), index.h("span", { key: '7cd18206e32f9d2cb09c00ad32c800657cc65105', slot: "tooltip-content" }, this.params.generateTooltip(this.params))))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_image_cell = AtuiImageCell;
//# sourceMappingURL=atui-image-cell.entry.cjs.js.map

//# sourceMappingURL=atui-image-cell.cjs.entry.js.map