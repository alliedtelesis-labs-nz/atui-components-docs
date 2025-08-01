import { h } from "@stencil/core";
const messageVariants = {
    base: 'flex p-[14px] text-dark text-left rounded-[0.3rem]',
    icon: {
        error: 'error',
        warning: 'warning',
        success: 'check_circle',
        info: 'info',
        default: '',
    },
    iconColour: {
        error: 'text-destructive-foreground',
        warning: 'text-warning-foreground',
        success: 'text-success-foreground',
        info: 'text-info-foreground',
        default: 'text-dark',
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
export class AtuiMessage {
    constructor() {
        /**
         * Theme of the message, either "light" or "default".
         */
        this.impact = 'high';
    }
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
        return (h("div", { key: 'e1cef466b3d26e85e4ed80f4c2ddf531caadaee8', class: this.hostClasses, "data-name": "message-container" }, h("i", { key: '004adcdac6dbe7468a1b0ee3171a0a4bd964b6b1', class: `material-icons mr-8 text-[16px] ${messageVariants.iconColour[this.type]}`, "data-name": "message-icon" }, this.iconName), h("div", { key: '4c5b1bbbdf4e9577862f292f930fd916fab981e5', class: "w-full" }, this.message_title && (h("div", { key: '37a9d15bc1d5234a428a29b3d804fbafec02bd97', class: "mb-4 text-h6 font-medium leading-normal", "data-name": "message-title" }, this.message_title)), this.content && (h("div", { key: 'd3be04a0966d54e896ebccad1ad933ed3d84ff57', class: "!text-sm leading-normal", "data-name": "message-content" }, this.content)), h("slot", { key: 'a9599eb4df70121dcfcea07c1b4e3702f908abb5' }))));
    }
    static get is() { return "atui-message"; }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
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
                "reflect": false
            },
            "impact": {
                "type": "string",
                "attribute": "impact",
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
                "defaultValue": "'high'"
            },
            "message_title": {
                "type": "string",
                "attribute": "message_title",
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
                "reflect": false
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                "reflect": false
            },
            "content": {
                "type": "string",
                "attribute": "content",
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
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=atui-message.js.map
