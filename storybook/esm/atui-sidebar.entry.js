import { r as registerInstance, c as createEvent, h, H as Host } from './index-D3rwhcmG.js';
import { c as cva } from './index-CVoOBWGd.js';

const atuiSidebarCss = "atui-sidebar atui-sidebar-menu atui-sidebar-submenu [slot=submenu-content] atui-sidebar-menuitem{padding-left:36px}atui-sidebar atui-sidebar-menu atui-sidebar-submenu [slot=submenu-content] atui-sidebar-submenu [slot=submenu-content] atui-sidebar-menuitem{padding-left:50px}atui-sidebar atui-sidebar-menu atui-sidebar-submenu [slot=submenu-content] atui-sidebar-submenu [slot=submenu-content] atui-sidebar-submenu [slot=submenu-content] atui-sidebar-menuitem{padding-left:64px}atui-sidebar atui-sidebar-submenu atui-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}";

const variants = cva('transition-size relative flex flex-col overflow-y-auto overflow-x-hidden bg-sidebar-background text-sidebar-foreground duration-300 ease-in-out', {
    variants: {
        collapsible: {
            none: null,
            icon: 'min-w-sidebar-collapsed group-data-[state=collapsed]/sidebar-wrapper:w-sidebar-collapsed',
            offcanvas: 'group-data-[state=collapsed]/sidebar-wrapper:w-0',
        },
        side: {
            left: null,
            right: 'order-1',
        },
    },
});
const AtuiSidebarComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiSidebarChange = createEvent(this, "atuiSidebarChange", 7);
        /**
         * Position of the sidebar on the page
         */
        this.side = 'left';
        /**
         * Width of the sidebar
         */
        this.width = 'menu';
        /**
         * Size of the sidebar when collapsed.
         */
        this.collapsible = 'icon';
        /**
         * Opens the sidebar by default when set
         */
        this.default_open = true;
        this.isOpen = false;
    }
    componentWillLoad() {
        if (this.default_open !== undefined) {
            this.isOpen = this.default_open;
        }
        this.atuiSidebarChange.emit(this.isOpen);
    }
    /**
     * Toggles the sidebar's open state.
     */
    async toggleSidebar() {
        this.isOpen = !this.isOpen;
        this.atuiSidebarChange.emit(this.isOpen);
    }
    /**
     * Getter method for the open state of the sidebar
     * @returns The current open state of the sidebar
     */
    async getIsOpen() {
        return this.isOpen;
    }
    render() {
        const classname = variants({
            collapsible: this.collapsible,
            side: this.side,
        });
        return (h(Host, { key: 'f881d18398ddb132b24ca668b34635dd8aeb3283', "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-collasable": this.collapsible, "data-side": this.side, class: "group/sidebar-wrapper flex h-screen w-full items-stretch overflow-y-auto overflow-x-hidden" }, h("nav", { key: '65413b5813188f6f118992bc68d12f455c8a31f3', "data-name": "sidebar-nav", class: `min-w-${this.width} ` + classname }, h("slot", { key: 'b83b6d02d2988feae1af96f34d72e80157118c1e', name: "sidebar-header" }), h("div", { key: 'a2c8d714b49524932fc7e577907108b212190b49', class: "align-items flex flex-1 flex-col p-8" }, h("slot", { key: '2999f583721e4c6d8ba6b920c9a5ce33e24bc993', name: "sidebar-content" })), h("div", { key: 'c0b3f4f06493b95d5be64467f3f7b76054475383', class: `${this.isOpen ? '' : 'hidden'}` }, h("slot", { key: '0dc7e88a1bbb674877c1a6f3ddd85b6c5eb35d23', name: "sidebar-footer" }))), h("div", { key: 'b04be3dd0892b63ca0d82f20753b2a53902c0a7f', class: "flex w-full overflow-auto" }, h("slot", { key: 'c509f7d4fa94c9ce123fe2b1e5128638d8683854', name: "page-content" }))));
    }
};
AtuiSidebarComponent.style = atuiSidebarCss;

export { AtuiSidebarComponent as atui_sidebar };
//# sourceMappingURL=atui-sidebar.entry.js.map

//# sourceMappingURL=atui-sidebar.entry.js.map