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
        return (h(Host, { key: '6aaae339e76f078f2a3bab978a418875f71493fd', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '329f6a3c5284134e02647de829195701bb29acc7', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '2428cd07a040c3210ab8264c366b4c19cbcdbdd1' }, this.src_text && (h("p", { key: '2c68b1797b453daaaf0582e2120169aebbc9def8', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '08e640f4495af29fcd98a2cb8e207ff679d5b263', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: 'de07d832cee61c5b9352fffec8ac0fe7174f6aab', class: "fill-muted flex flex-row items-center gap-4" }, h("at-icon", { key: '201251313546fb46084d600ee3c47c950419c66f', name: "arrow_left", size: "1.2857rem" }), h("at-icon", { key: 'ba206d9acf39bd00d577c93e67be941d7e8f10f2', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (h("div", { key: 'b9cc03de7872134de449a315f0515eac44bb45eb', class: "text-right" }, this.dest_text && (h("p", { key: 'ba6f2a3301dd8c96bf7ca12a9d7ad50698977ed7', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: '3d7822f15a3e8cdb6187a330c0fdc02f60d5bd4a', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '7d72940f1a9cd30cd44e3d0feac39103f1684a2d', class: "h4", "data-name": "dest-title" }, this.dest_title))));
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
