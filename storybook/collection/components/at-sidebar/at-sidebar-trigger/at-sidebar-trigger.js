import { h, Host } from "@stencil/core";
/**
 * @category Navigation
 * @description A sidebar trigger component for the sidebar.
 */
export class AtSidebarTriggerComponent {
    el;
    isOpen = false;
    provider;
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
    handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.el.click();
        }
    };
    async componentDidLoad() {
        this.provider = this.el.closest('at-sidebar');
        await this.updateIsOpen();
        if (this.provider) {
            this.provider.addEventListener('atuiSidebarChange', this.handleSidebarChange);
        }
    }
    disconnectedCallback() {
        if (this.provider) {
            this.provider.removeEventListener('atuiSidebarChange', this.handleSidebarChange);
        }
    }
    handleSidebarChange = (event) => {
        this.isOpen = event.detail;
    };
    render() {
        return (h(Host, { key: 'c8cdb908ff566014d9dd44181a709972435cc3de', role: "button", "data-name": "sidebar-trigger", tabIndex: 0, onKeyDown: this.handleKeyDown, onClick: () => this.toggleSidebar() }, this.isOpen !== undefined && (h("i", { key: '061a75f188e245c99a96b5ca1861edd3fdcee342', class: "material-icons" }, this.isOpen ? 'menu_open' : 'menu')), h("div", { key: 'bae58eebf6d6c4eb29f1c1b7479b16f86d2a5a5a', class: "focus-indicator", "data-name": "focus-indicator", role: "presentation" })));
    }
    static get is() { return "at-sidebar-trigger"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["./at-sidebar-trigger.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-sidebar-trigger.css"]
        };
    }
    static get states() {
        return {
            "isOpen": {}
        };
    }
    static get elementRef() { return "el"; }
}
