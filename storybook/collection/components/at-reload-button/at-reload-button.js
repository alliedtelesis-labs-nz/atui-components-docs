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
        return (h("at-tooltip", { key: 'd4b318e7b3f356e89df1eb7d5d358bf1e3d9a6bc', position: "top" }, h("div", { key: 'cf77c5d5be7f2098fbc6eac7bc55faa029f6d537', slot: "tooltip-trigger", class: "relative" }, this.has_updates && (h("span", { key: 'b177dd0f98ed220744882d9af195e5dcc34e0004', class: "!bg-active-foreground pointer-events-none absolute top-[2px] right-[2px] z-10 h-[8px] w-[8px] rounded-full", "data-name": "reload-updates-indicator" })), h("at-button", { key: 'b4bf9a9b79aba3ea9117a7e549f29df26a24ce1e', type: "secondaryText", onAtuiClick: () => this.atuiReload.emit() }, h("at-icon", { key: 'fee4db892be794af79a1ab133f7a578c05ea769a', slot: "icon", name: "retry" }))), h("span", { key: 'f8bcb55d343d422ec87a83d7eeda77fa7ed82fdd' }, this.has_updates
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
