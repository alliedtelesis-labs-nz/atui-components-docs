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
        return (h(Host, { key: '832b19aa1f44d998fb2c12efce01002f680ff416', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '06551123814e855e3d970fe17ccce45e2c156248', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '214d5d2e70d385572f83d2445bc59c33acc9d149' }, this.src_text && (h("p", { key: 'c4c88eea6f647bc2702f82b6b819d26f5e41e747', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '994b30b4d6b66ffb40189c355f15983d63bb074c', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '3dcefb96c43a384446f30398bf055fde7b7833f7', class: "fill-muted flex flex-row items-center gap-4" }, h("at-icon", { key: 'a041b29573060fa2196a46e5e70000f9e835c5ce', name: "arrow_left", size: "1.2857rem" }), h("at-icon", { key: '607efa116facdc715de63829faeceac636bab50f', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (h("div", { key: 'eea1490b5f9728da6e6dbd659a37781208944cfa', class: "text-right" }, this.dest_text && (h("p", { key: '764ac262e0412604ed2cea3b25f6a03f1b8d6c4f', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: '1fdc4f9a1e975e980848865994489d72e18d55e7', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '064bb4ad3f12fc6aab77aa2c54aec58c40105c87', class: "h4", "data-name": "dest-title" }, this.dest_title))));
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
