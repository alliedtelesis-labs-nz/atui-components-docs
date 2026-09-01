import { h, } from "@stencil/core";
import { fetchTranslations } from "../../utils/translation";
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
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    /**
     * Emitted when the reload button is clicked.
     */
    atuiReload;
    render() {
        return (h("at-tooltip", { key: '37f2a3b202b93211a6267f6d97381ef570412349', position: "top" }, h("div", { key: '0b84dc1025289bede457859403e6902e93f79699', slot: "tooltip-trigger", class: "relative" }, this.has_updates && (h("span", { key: 'fa8cd0270812798659578fa94c33791953e9243e', class: "!bg-active-foreground pointer-events-none absolute top-[2px] right-[2px] z-10 h-[8px] w-[8px] rounded-full", "data-name": "reload-updates-indicator" })), h("at-button", { key: '0462b649d9c9cab3837d6c1497695a4277b7ae9a', type: "secondaryText", onAtuiClick: () => this.atuiReload.emit() }, h("at-icon", { key: '82a29e3de988a4502f99a9d74b7de9fb5d8f0cb6', slot: "icon", name: "retry" }))), h("span", { key: '352ca1d3880bb8cc3548a1020b66d06b8e5d93f0' }, this.has_updates
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
