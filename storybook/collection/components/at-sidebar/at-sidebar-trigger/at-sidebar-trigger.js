import { h } from "@stencil/core";
/**
 * @category Navigation
 * @description A sidebar trigger component for the sidebar.
 */
export class AtSidebarTriggerComponent {
    constructor() {
        this.isOpen = false;
        /**
         * Size of the button
         */
        this.size = 'lg';
        /**
         * Theme of the button. Default secondary
         */
        this.type = 'secondary';
    }
    async updateIsOpen() {
        if (this.provider && typeof this.provider.getIsOpen === 'function') {
            this.isOpen = await this.provider.getIsOpen();
        }
    }
    async toggleSidebar() {
        if (this.provider &&
            typeof this.provider.toggleSidebar === 'function') {
            await this.provider.toggleSidebar();
            await this.updateIsOpen();
        }
    }
    async componentDidLoad() {
        this.provider = this.el.closest('at-sidebar');
        await this.updateIsOpen();
    }
    render() {
        return (h("at-button", { key: 'bb0f5a2001355e3fad0fdbed2a6a5630255f5d85', type: this.type, size: this.size, "data-name": "sidebar-trigger", icon: this.isOpen ? 'menu_open' : 'menu', onClick: () => this.toggleSidebar() }));
    }
    static get is() { return "at-sidebar-trigger"; }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "ButtonSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "ButtonSize": {
                            "location": "import",
                            "path": "../../at-button/at-button",
                            "id": "src/components/at-button/at-button.tsx::ButtonSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'lg'"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "ButtonType",
                    "resolved": "\"destructive\" | \"destructiveOutline\" | \"destructiveText\" | \"primary\" | \"primaryOutline\" | \"primaryText\" | \"secondary\" | \"secondaryOutline\" | \"secondaryText\"",
                    "references": {
                        "ButtonType": {
                            "location": "import",
                            "path": "../../at-button/at-button",
                            "id": "src/components/at-button/at-button.tsx::ButtonType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Theme of the button. Default secondary"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'secondary'"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=at-sidebar-trigger.js.map
