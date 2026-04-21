import { h } from "@stencil/core";
const messageVariants = {
    base: 'flex p-[14px] text-foreground text-left rounded-[0.3rem]',
    icon: {
        error: 'error',
        warning: 'warning',
        success: 'success',
        info: 'info_filled',
        default: '',
    },
    iconColour: {
        error: 'text-feedback-error-accent',
        warning: 'text-feedback-warning-accent',
        success: 'text-feedback-success-accent',
        info: 'text-feedback-info-accent',
        default: 'text-feedback-foreground',
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
            error: 'bg-feedback-error-background',
            warning: 'bg-feedback-warning-background',
            success: 'bg-feedback-success-background',
            info: 'bg-feedback-info-background',
            default: 'bg-feedback-background',
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
        return (h("div", { key: '8f7bdfbf7f332bbfab0261dd65ec98737bbc9263', class: this.hostClasses, "data-name": "message-container" }, this.icon ? (h("i", { class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName)) : (h("at-icon", { class: `mr-8 ${messageVariants.iconFill[this.type]}`, "data-name": "message-icon", name: this.iconName })), h("div", { key: '15a5566d66e6c9aa1a83433e9c37dc18b1f387e0', class: "flex w-full flex-row justify-between gap-4 text-sm" }, h("div", { key: '6cd165cdc6599d353f72c0feb60c81d830829cf5' }, this.message_title && (h("div", { key: '0f828921d74b2fadcb9557ea09d1c6f5dc4eb12b', class: "text-foreground mb-4 leading-normal font-medium", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: 'd1241423ec84b4ae52ddaa2b362ffd6a0bb2e94b', class: "text-foreground leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: '8ae979d297feced89d27266ae1588ac51294fbac' })), h("slot", { key: 'bd28e2c6f02b7ba3637c8c793567569da4fa5cd6', name: "actions" }))));
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
