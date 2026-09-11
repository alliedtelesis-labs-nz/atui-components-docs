import { Host, h } from "@stencil/core";
/**
 * @category Layout
 * @description A layout wrapper that merges adjacent buttons or inputs into a visually joined group by removing interior border-radius on touching edges.
 *
 * @slot - Place at-button or at-input elements here to be merged into the group.
 */
export class AtControlGroup {
    /**
     * Layout direction of the grouped elements.
     */
    direction = 'horizontal';
    render() {
        return (h(Host, { key: '61581d034bea58839accb9532f059eb91f099af3', class: `at-control-group at-control-group--${this.direction}` }, h("slot", { key: '37b70330cbea496e607a81d0e2db757f4240ed45' })));
    }
    static get is() { return "at-control-group"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-control-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-control-group.css"]
        };
    }
    static get properties() {
        return {
            "direction": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtControlGroupDirection",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "AtControlGroupDirection": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-control-group/at-control-group.tsx",
                            "id": "src/components/at-control-group/at-control-group.tsx::AtControlGroupDirection"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Layout direction of the grouped elements."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "direction",
                "defaultValue": "'horizontal'"
            }
        };
    }
}
