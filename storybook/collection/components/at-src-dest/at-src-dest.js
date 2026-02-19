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
        return (h(Host, { key: '7ce7616f4a34912e053d7a18a64882060fe52628', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: 'bdcbe2109c7d33d31dcb16a3efbfd4087e68682e', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '9d53e9e305938075e8137616e82200c3df444703' }, this.src_text && (h("p", { key: '3aafc45efda34afa16592edc431502c2f3468fd3', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '094838a54648d326fdf34441465893834068590d', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '4322cca29b34c9b1aa9e28860b6fc0016e0765c1', class: "icon-lg text-light flex-row items-center gap-4" }, h("span", { key: '8e5711976024e7256fa2dd3eeac9c06712cb201b', class: "material-icons" }, "arrow_back"), h("span", { key: 'f525a18279973a4a0a7050954a061053a89f9b2f', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (h("div", { key: '96bdc6b6a7a5b646b081cd304a0df12f819310b1', class: "text-right" }, this.dest_text && (h("p", { key: 'd8b3d774fc1b70b7b833382819ab6f476752337b', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: '21b282fda11675a7c3e1156e58f5b9e6777befc6', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '8aab053c0f98658cdde94960bfc72e492b75a851', class: "h4", "data-name": "dest-title" }, this.dest_title))));
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
