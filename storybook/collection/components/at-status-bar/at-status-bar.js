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
        return (h(Host, { key: '9224f800472b15cda85ea13ac9fb32fa935eef96', class: this.statusBarClass }, h("div", { key: 'c4acf764d7ea94f8aee38499bd4c19f883a978de', class: "flex flex-1 items-stretch justify-start overflow-visible" }, this.segments)));
    }
    static get is() { return "at-status-bar"; }
    static get properties() {
        return {
            "status_bar": {
                "type": "unknown",
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
                "attribute": "size",
                "defaultValue": "'sm'"
            },
            "disable_tooltip": {
                "type": "boolean",
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
                "reflect": false,
                "attribute": "disable_tooltip"
            }
        };
    }
}
//# sourceMappingURL=at-status-bar.js.map
