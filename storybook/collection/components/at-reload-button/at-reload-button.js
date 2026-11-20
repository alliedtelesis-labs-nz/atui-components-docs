import { h, } from "@stencil/core";
import { fetchTranslations } from "../../utils/translation";
const INDICATOR_COLOR = {
    info: '!bg-active-foreground',
    warning: '!bg-warning-foreground',
    error: '!bg-error-foreground',
};
/**
 * @category Actions
 * @description A button for requesting a reload of data. Rendered as an icon-only button with a tooltip.
 */
export class AtReloadButton {
    el;
    translations;
    /**
     * Shows an indicator on the button when the underlying data has changed
     * since it was last loaded. This component does not detect changes
     * itself — the consumer sets this to true once it knows of an update
     * (e.g. from a websocket or poll) and back to false once the user
     * reloads.
     */
    has_updates = false;
    /**
     * Colours the updates indicator to signal how urgent the pending
     * update is. Only visible while `has_updates` is true.
     */
    updates_severity = 'info';
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    /**
     * Emitted when the reload button is clicked.
     */
    atuiReload;
    render() {
        return (h("at-tooltip", { key: 'd30f54bd28377cbb7ec51f67a6049e8420ca287e', position: "top" }, h("div", { key: '3e53399866ff3bfbd415da2c0a0ce8a84a8d8c1b', slot: "tooltip-trigger", class: "relative" }, this.has_updates && (h("span", { key: '01e826f7db5afd07a787a85e8384b50412893f83', class: `${INDICATOR_COLOR[this.updates_severity] ?? INDICATOR_COLOR.info} pointer-events-none absolute top-[2px] right-[2px] z-10 h-[8px] w-[8px] rounded-full`, "data-name": "reload-updates-indicator" })), h("at-button", { key: '26e8b7a2988862b09c71622d7581f7a362844c40', type: "secondaryText", onAtuiClick: () => this.atuiReload.emit() }, h("at-icon", { key: '778dd8f6466cfadeb67adb3ddca5297398995f73', slot: "icon", name: "retry" }))), h("span", { key: '5d2bbbafc43cfa2d795f83d8bcf8e6013b91954e' }, this.has_updates
            ? this.translations.ATUI.TABLE.RELOAD_UPDATES_AVAILABLE
            : this.translations.ATUI.TABLE.RELOAD)));
    }
    static get is() { return "at-reload-button"; }
    static get properties() {
        return {
            "has_updates": {
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
                    "text": "Shows an indicator on the button when the underlying data has changed\nsince it was last loaded. This component does not detect changes\nitself \u2014 the consumer sets this to true once it knows of an update\n(e.g. from a websocket or poll) and back to false once the user\nreloads."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "has_updates",
                "defaultValue": "false"
            },
            "updates_severity": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UpdatesSeverity",
                    "resolved": "\"error\" | \"info\" | \"warning\"",
                    "references": {
                        "UpdatesSeverity": {
                            "location": "global",
                            "id": "global::UpdatesSeverity"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Colours the updates indicator to signal how urgent the pending\nupdate is. Only visible while `has_updates` is true."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "updates_severity",
                "defaultValue": "'info'"
            }
        };
    }
    static get states() {
        return {
            "translations": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiReload",
                "name": "atuiReload",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the reload button is clicked."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
