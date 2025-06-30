import { h, Host } from "@stencil/core";
/**
 * @category Utilities
 * @description A src-dest component for displaying source and destination information.
 */
export class AtuiSrcDestComponent {
    constructor() {
        /**
         * Aligns the content to the left or center of the container
         */
        this.align = 'left';
    }
    render() {
        return (h(Host, { key: '3ba458493b1b3135671574771bf6f4efb8af1d0c', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: 'a8dd89e07de8799a187d63c7b915f3fa65b9ef03', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '7a45f7e1a5693c318e18b93b02b082efd09ba973' }, this.src_text && (h("p", { key: '673bbbf5a713faedd3a071e3e714ef5e5553b44f', class: "font-medium text-dark", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '071695e25796b34b949ea80add7c19de5721cbd9', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '2373d4dca17f51cc4f2a5fac029d4af0936c8df9', class: "icon-lg flex-row items-center gap-4 text-light" }, h("span", { key: '855e31f77272dd65a635bf2a6ce95f0dc092b798', class: "material-icons" }, "arrow_back"), h("span", { key: 'c8d89103f1e0b297ab676ca337f60569c47e8a7f', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (h("div", { key: 'e562c14c1edd76d7886d545e80c7a5ad2d821df8', class: "text-right" }, this.dest_text && (h("p", { key: 'a01fbde9e8a339ddc064874ff4b1a4892fbfa3cb', class: "font-medium text-dark", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: 'b8b2dbd71a00ea6cdbdd8d40f37229f44663d2cf', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '21ddee2a604869ddf1dc389812022f0af51803ee', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
    static get is() { return "atui-src-dest"; }
    static get properties() {
        return {
            "src_title": {
                "type": "string",
                "attribute": "src_title",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Title displayed on the left"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "src_text": {
                "type": "string",
                "attribute": "src_text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text displayed on the left"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "src_subtitle": {
                "type": "string",
                "attribute": "src_subtitle",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Subtitle displayed on the left"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "dest_title": {
                "type": "string",
                "attribute": "dest_title",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Title displayed on the right"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "dest_text": {
                "type": "string",
                "attribute": "dest_text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text displayed on the right"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "dest_subtitle": {
                "type": "string",
                "attribute": "dest_subtitle",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Subtitle displayed on the right"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "align": {
                "type": "string",
                "attribute": "align",
                "mutable": false,
                "complexType": {
                    "original": "SrcDestAlign",
                    "resolved": "\"center\" | \"left\"",
                    "references": {
                        "SrcDestAlign": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-src-dest/atui-src-dest.tsx",
                            "id": "src/components/atui-src-dest/atui-src-dest.tsx::SrcDestAlign"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Aligns the content to the left or center of the container"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'left'"
            }
        };
    }
}
//# sourceMappingURL=atui-src-dest.js.map
