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
        return (h("at-tooltip", { key: '194c53f49648a63810df479e03ea3dfe43714b6c', position: "top" }, h("div", { key: '7f14f51eae408de3e60bcd38fdf881345978dc1d', slot: "tooltip-trigger", class: "relative" }, this.has_updates && (h("span", { key: '8e43cdb743ae9bc10ef05d6536ce8c2ee3a338e9', class: "!bg-active-foreground pointer-events-none absolute top-[2px] right-[2px] z-10 h-[8px] w-[8px] rounded-full", "data-name": "reload-updates-indicator" })), h("at-button", { key: '9e538511b3f41421ce36895a88068755d5e3a190', type: "secondaryText", onAtuiClick: () => this.atuiReload.emit() }, h("at-icon", { key: 'e72e99e36510d6386a7d090f15e8b729a2fcdfcf', slot: "icon", name: "retry" }))), h("span", { key: 'e2bf62c4ec691e834faa15f32c4976d8279ee5f9' }, this.has_updates
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
