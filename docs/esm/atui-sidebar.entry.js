import { r as registerInstance, c as createEvent, h, H as Host } from './index-HJO1YDmC.js';
import { c as cva } from './index-CVoOBWGd.js';

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
        this.atuiChange = createEvent(this, "atuiChange", 7);
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
        this.atuiChange.emit(this.isOpen);
    }
    /**
     * Toggles the sidebar's open state.
     */
    async toggleSidebar() {
        this.isOpen = !this.isOpen;
        this.atuiChange.emit(this.isOpen);
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
        return (h(Host, { key: 'd7f42212e86640f5da0e20437ca7fac5a5c1a7d9', "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-collasable": this.collapsible, "data-side": this.side, class: "group/sidebar-wrapper flex h-screen w-full items-stretch overflow-y-auto overflow-x-hidden" }, h("nav", { key: '973e6f0fc19eafe7350e223f8a88734556638ee6', "data-name": "sidebar-nav", class: `w-${this.width} ` + classname }, h("div", { key: '771058c6c8996b7505e3ad69059f5abfe898ae94', class: `flex p-8 ${this.side === 'left' ? 'justify-end' : 'justify-start'}` }, h("slot", { key: '5dd5570015fc745c3c936706b768849e5b03b3f4', name: "sidebar-header" })), h("div", { key: 'e636f15750568bcb5c89b0cac31dc0b01b4fc6ee', class: "align-items flex flex-1 flex-col pb-8 pl-[10px] pr-8 pt-8" }, h("slot", { key: '5591dbb68d50f50738d40b3cd59e17626224cc72', name: "sidebar-content" })), h("div", { key: 'bdd8dccbe59c660e1ae019106b88a55d8c47d558', class: `${this.isOpen ? '' : 'hidden'}` }, h("slot", { key: '872065e2c39c351cb0db286f5b12feccaf6e3594', name: "sidebar-footer" }))), h("div", { key: 'a7c39a837e6d112c43c7551299f6f12176479961', class: "flex w-full overflow-auto" }, h("slot", { key: 'cf61d24586aa62fbfd71c3f355158f54c941149b', name: "page-content" }))));
    }
};

export { AtuiSidebarComponent as atui_sidebar };
//# sourceMappingURL=atui-sidebar.entry.js.map

//# sourceMappingURL=atui-sidebar.entry.js.map