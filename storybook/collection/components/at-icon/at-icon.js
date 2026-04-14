import { h } from "@stencil/core";
export class AtIcon {
    /**
     * The name of carbon icon to use
     */
    name;
    /**
     * The size of the icon accepts number (in px), string with CSS units (e.g. "1.5rem"), or one of "xs", "sm", "md", or "lg".
     */
    size = 16;
    getIcon() {
        return window.__atIconRegistry?.get(this.name);
    }
    getSize() {
        if (this.size === 'xs')
            return 24;
        else if (this.size === 'sm')
            return 48;
        else if (this.size === 'md')
            return 64;
        else if (this.size === 'lg')
            return 72;
        else
            return this.size;
    }
    renderSvgNode = (node, i) => {
        return h(node.elem, {
            key: i,
            ...node.attrs,
        });
    };
    render() {
        const icon = this.getIcon();
        const size = this.getSize();
        if (!icon)
            return null;
        return (h("svg", { width: size, height: size, viewBox: icon.attrs.viewBox }, icon.content.map(this.renderSvgNode)));
    }
    static get is() { return "at-icon"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-icon.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-icon.css"]
        };
    }
    static get properties() {
        return {
            "name": {
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
                    "text": "The name of carbon icon to use"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "name"
            },
            "size": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "number | string",
                    "resolved": "number | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the icon accepts number (in px), string with CSS units (e.g. \"1.5rem\"), or one of \"xs\", \"sm\", \"md\", or \"lg\"."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "16"
            }
        };
    }
}
