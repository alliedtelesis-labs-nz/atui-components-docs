import { h, Host } from "@stencil/core";
/**
 * @category Table Cell
 * @description A cell component for displaying an image.
 */
export class AtuiImageCell {
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
        return (h(Host, { key: '76265637532ba8efe9666769e49c781adc6c9c4f', class: "flex h-full items-center overflow-hidden leading-[100%]" }, this.imageSource && (h("atui-tooltip", { key: '028c052e0d0259ac5e46eea9b186f0c587d3c05d', is_visible: !!this.params.generateTooltip }, h("div", { key: '500016612ec8970d9e1a56d0a398ac8aa59f2968', class: "flex items-center" }, h("img", { key: '0e7e115b4ef24900b6eb6c758bb766d2c22878ce', src: this.imageSource, style: { height: '30px' } })), h("span", { key: '0182ceaaf9f024a676cfeb9dc30607f1b66d635e', slot: "tooltip-content" }, this.params.generateTooltip(this.params))))));
    }
    static get is() { return "atui-image-cell"; }
    static get states() {
        return {
            "params": {},
            "imageSource": {},
            "getImageSource": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-image-cell.js.map
