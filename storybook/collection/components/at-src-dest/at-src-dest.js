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
        return (h(Host, { key: '84fb042f87553cc968c47e25eaaacfdae192cfbc', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '26eedc011be2827024764c49a45a594a6d89c8be', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '40b7ba303014a54b63f067a273634d0afd8638c9' }, this.src_text && (h("p", { key: '726a670387f5f48de2239fc02cd492a84688beb8', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '6f615fb71d85767a621e429d0a2bab2f951ce6c0', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '2c4c5fe080fbe3dd3388017f3777db8a9b418e4c', class: "icon-lg text-light flex-row items-center gap-4" }, h("span", { key: '4632f72091fae511a1fe5e388dbe333faedef35a', class: "material-icons" }, "arrow_back"), h("span", { key: 'edbb57977d9e1efeab8b39f35aa132280035a9cc', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (h("div", { key: 'd04592f8ee543943b141e6090cdcf4b34b9caa4a', class: "text-right" }, this.dest_text && (h("p", { key: '5bb2de12f8ebe840e1e90dfc515dbc30f094d44f', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: '1895efbea82a6f193c64e4a903707d88b6162c7a', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: 'ad82060292f1cbe4958d7fb1e654a7791acb912b', class: "h4", "data-name": "dest-title" }, this.dest_title))));
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
