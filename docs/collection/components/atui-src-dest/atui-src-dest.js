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
        return (h(Host, { key: '5b5ab5c5354c8e101bad389bfa0d7cdedd698ead', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '339b3c347f11ed9ab3d4f60465976a4b6252ce83', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: 'c2e9fd1aeb96ad19d79f4bc1013fbcc8d0c0621a' }, this.src_text && (h("p", { key: 'afc0c42c655f23d0eedf7e858fd6af6ee6840a61', class: "font-medium text-dark", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '1b3907c585bb59f122f4ca5fb1822ada26c2dbb4', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '02a739fe70aaac333deb6c3d6dc24bdbe68d214b', class: "icon-lg flex-row items-center gap-4 text-light" }, h("span", { key: '3974851f6c41d4951d8c85cf8cfd8bc34167e9a1', class: "material-icons" }, "arrow_back"), h("span", { key: '00bd5d3050f7bafe8c1f7aee336398cfcf603027', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (h("div", { key: 'd88ab6e0b8bc57d38a0644d847428f59ca74c228', class: "text-right" }, this.dest_text && (h("p", { key: '5a2298567a8fa444bdce7592131b045701b19fe4', class: "font-medium text-dark", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: '8bef9db933371a74a102a0320036294ef618d104', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: 'a58875804f56f1a18b3dd36917169a99a2ae8e94', class: "h4", "data-name": "dest-title" }, this.dest_title))));
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
