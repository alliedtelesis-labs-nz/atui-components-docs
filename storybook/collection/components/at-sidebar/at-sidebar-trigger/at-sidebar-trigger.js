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
        return (h(Host, { key: '0e486de151a6ddc5edac38ec10dfc9f07d3266fb', role: "button", "data-name": "sidebar-trigger", tabIndex: 0, onKeyDown: this.handleKeyDown, onClick: () => this.toggleSidebar() }, this.isOpen !== undefined && (h("at-icon", { key: 'f90e3a91f37c4dad6799fb64405adc40ead24459', name: this.isOpen ? 'menu_collapse' : 'menu_expand', size: "22" })), h("div", { key: '2cd6f4ea5dba422e30e7f9194e556170f230a6ad', class: "focus-indicator", "data-name": "focus-indicator", role: "presentation" })));
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
