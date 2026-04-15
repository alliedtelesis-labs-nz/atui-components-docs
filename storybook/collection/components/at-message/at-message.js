import { h } from "@stencil/core";
const messageVariants = {
    base: 'flex p-[14px] text-dark text-left rounded-[0.3rem]',
    icon: {
        error: 'error',
        warning: 'warning',
        success: 'success',
        info: 'info_filled',
        default: '',
    },
    iconColour: {
        error: 'text-destructive-foreground',
        warning: 'text-warning-foreground',
        success: 'text-success-foreground',
        info: 'text-info-foreground',
        default: 'text-dark',
    },
    iconFill: {
        error: 'fill-destructive-foreground',
        warning: 'fill-warning-foreground',
        success: 'fill-success-foreground',
        info: 'fill-info-foreground',
        default: 'fill-dark',
    },
    background: {
        high: {
            error: 'bg-destructive',
            warning: 'bg-warning',
            success: 'bg-success',
            info: 'bg-info',
            default: 'bg-surface-2',
        },
        low: '',
    },
};
/**
 * @category Feedback
 * @description A message component for displaying notifications, alerts, or informational messages.
 *
 * @slot - Placed after the content
 */
export class AtMessage {
    /**
     * Type of the message.
     */
    type = 'default';
    /**
     * Theme of the message, either "light" or "default".
     */
    impact = 'high';
    /**
     * Title of the app message.
     */
    message_title;
    /**
     * An icon is provided for success, warning, error, or info types.
     * You can provide a custom value to replace the default icon.
     *
     * Must use material icon name.
     */
    icon;
    /**
     * Content of the message.
     */
    content;
    get iconName() {
        if (this.icon) {
            return this.icon;
        }
        else {
            return messageVariants.icon[this.type];
        }
    }
    get hostClasses() {
        return `${messageVariants.base} ${messageVariants.background[this.impact][this.type]}`;
    }
    render() {
        return (h("div", { key: '74065bf2cb496956a9b5d8269e85b381d57a1a1b', class: this.hostClasses, "data-name": "message-container" }, this.icon ? (h("i", { class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName)) : (h("at-icon", { class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName })), h("div", { key: 'f8c1c942e8bb80ada037212896b23e3ba88bd686', class: "flex w-full flex-row justify-between gap-4" }, h("div", { key: '07cf813284ce17612c4f35c9f22c1baf71b83dbc' }, this.message_title && (h("div", { key: 'b1c5bfc11723f3405eb1cc744b1a024168f39371', class: "text-h6 mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: 'c269545e04018a5ef67853332ea306c1dadb9f69', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: '8a530a0907bbd85fa5394fcefe178971aaa3af2e' })), h("slot", { key: '38b441cff40c5b5d16293a4ca62f1b47b4f439e1', name: "actions" }))));
    }
    static get is() { return "at-message"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-message.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-message.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'error' | 'warning' | 'success' | 'info' | 'default'",
                    "resolved": "\"default\" | \"error\" | \"info\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of the message."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'default'"
            },
            "impact": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'low' | 'high'",
                    "resolved": "\"high\" | \"low\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Theme of the message, either \"light\" or \"default\"."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "impact",
                "defaultValue": "'high'"
            },
            "message_title": {
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
                    "text": "Title of the app message."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "message_title"
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "An icon is provided for success, warning, error, or info types.\nYou can provide a custom value to replace the default icon.\n\nMust use material icon name."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon"
            },
            "content": {
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
                    "text": "Content of the message."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "content"
            }
        };
    }
}
