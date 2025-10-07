import { h, Host } from "@stencil/core";
/**
 * @category Data Visualization
 * @description A status bar component for displaying progress, completion, or state information with customizable colors and labels.
 */
export class AtStatusBar {
    /**
     * List of segments that make up the status bar. Each segment implements the StatusBar interface.
     */
    status_bar = [];
    /**
     * Height of the status bar
     */
    size = 'sm';
    /**
     * Disables the tooltip when hovered
     */
    disable_tooltip;
    get statusBarClass() {
        return `${this.size === 'lg' ? 'h-[16px]' : 'h-8'} flex items-stretch rounded-sm`;
    }
    get segments() {
        return this.status_bar.map((segment) => (h("at-tooltip", { position: "bottom", class: "flex flex-grow items-stretch justify-center", disabled: this.disable_tooltip, style: {
                flexBasis: segment.percentage.toString() + '%',
            } }, h("div", { class: "flex flex-grow", slot: "tooltip-trigger", style: {
                background: segment.backgroundColor,
            } }), h("span", null, segment.tooltip))));
    }
    render() {
        return (h(Host, { key: '97e01ae3d24b6f56841111e906b9bb0a279fbec9', class: this.statusBarClass }, h("div", { key: '328b762e1b579128cda2d098bea37c462afa51b4', class: "flex flex-1 items-stretch justify-start overflow-visible" }, this.segments)));
    }
    static get is() { return "at-status-bar"; }
    static get properties() {
        return {
            "status_bar": {
                "type": "unknown",
                "attribute": "status_bar",
                "mutable": false,
                "complexType": {
                    "original": "StatusBar[]",
                    "resolved": "StatusBar[]",
                    "references": {
                        "StatusBar": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-status-bar/at-status-bar.tsx",
                            "id": "src/components/at-status-bar/at-status-bar.tsx::StatusBar"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "List of segments that make up the status bar. Each segment implements the StatusBar interface."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "Size",
                    "resolved": "\"lg\" | \"sm\"",
                    "references": {
                        "Size": {
                            "location": "global",
                            "id": "global::Size"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Height of the status bar"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'sm'"
            },
            "disable_tooltip": {
                "type": "boolean",
                "attribute": "disable_tooltip",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Disables the tooltip when hovered"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=at-status-bar.js.map
