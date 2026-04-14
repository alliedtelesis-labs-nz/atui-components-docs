import { h, Host } from "@stencil/core";
/**
 * @category Utilities
 * @description A src-dest component for displaying source and destination information.
 */
export class AtSrcDestComponent {
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
        return (h(Host, { key: '6629f086ac310e19872841fedcd9bcfb885ebc7e', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '26c4231af6d51427ab90971be2574c41a91e528c', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '0c7833703d4fb72c26c38d71c3b51482e76f3012' }, this.src_text && (h("p", { key: '8b1dbc0ef1c70c222ec7eda1ec75cd91129b0b0e', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: 'cfab2f86b359c7095765d7c0b2ab4363a072a79d', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '3a32ebcd25d38c3c05c7d1b1da5355bb430a5c4e', class: "icon-lg text-light flex-row items-center gap-4" }, h("span", { key: '6bfa9472bc06b172d6becd8cf348a3ac4cc4d1bd', class: "material-icons" }, "arrow_back"), h("span", { key: '080a58daf61dab0d27a129422268ec0d25390784', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (h("div", { key: '61101e4050c5723a33705a84bd3dd341f8c57540', class: "text-right" }, this.dest_text && (h("p", { key: 'd0ab62add0ac300052e27bb89d11949561daab24', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: 'a0c99380fb9d6bd23ec9c12222293ed9ef17136b', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: 'abe25266cfa3c89a5364950645e64338a1ad3457', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
    static get is() { return "at-src-dest"; }
    static get properties() {
        return {
            "src_title": {
                "type": "string",
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
                "reflect": false,
                "attribute": "src_title"
            },
            "src_text": {
                "type": "string",
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
                "reflect": false,
                "attribute": "src_text"
            },
            "src_subtitle": {
                "type": "string",
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
                "reflect": false,
                "attribute": "src_subtitle"
            },
            "dest_title": {
                "type": "string",
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
                "reflect": false,
                "attribute": "dest_title"
            },
            "dest_text": {
                "type": "string",
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
                "reflect": false,
                "attribute": "dest_text"
            },
            "dest_subtitle": {
                "type": "string",
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
                "reflect": false,
                "attribute": "dest_subtitle"
            },
            "align": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtSrcDestAlign",
                    "resolved": "\"center\" | \"left\"",
                    "references": {
                        "AtSrcDestAlign": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-src-dest/at-src-dest.tsx",
                            "id": "src/components/at-src-dest/at-src-dest.tsx::AtSrcDestAlign"
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
                "attribute": "align",
                "defaultValue": "'left'"
            }
        };
    }
}
