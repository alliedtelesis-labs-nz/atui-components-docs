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
        const label = this.has_updates
            ? this.translations.ATUI.TABLE.RELOAD_UPDATES_AVAILABLE
            : this.translations.ATUI.TABLE.RELOAD;
        return (h("at-tooltip", { key: 'c38ec343c8e8034706c350722ef32b0336b99c68', position: "top" }, h("div", { key: '84c131849a6428121aa7c28e9c1167e3f164831d', slot: "tooltip-trigger", class: "relative" }, this.has_updates && (h("span", { key: '2d950b6b434244404ef27cbf3f5c90a2f4b828e7', class: `${INDICATOR_COLOR[this.updates_severity] ?? INDICATOR_COLOR.info} pointer-events-none absolute top-[2px] right-[2px] z-10 h-[8px] w-[8px] rounded-full`, "data-name": "reload-updates-indicator" })), h("at-button", { key: 'a078f67e211b7aba199e4a4eb82bbde4d07e72f4', type: "secondaryText", "aria-label": label, "data-name": "reload-button", onAtuiClick: () => this.atuiReload.emit() }, h("at-icon", { key: 'df1629e737e1ab8f4746f265c0ab721816d435fa', slot: "icon", name: "retry" }))), h("span", { key: '12068bc06897515675796a442f727a8725d87191' }, label)));
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
