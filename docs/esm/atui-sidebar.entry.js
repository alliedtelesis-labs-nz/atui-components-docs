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
        return (h(Host, { key: 'e5804c18c8aff30f82f9dec97ef42e6356ad2c27', "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-collasable": this.collapsible, "data-side": this.side, class: "group/sidebar-wrapper flex h-screen w-full items-stretch overflow-y-auto overflow-x-hidden" }, h("nav", { key: '82b80abfa0280ab8b4ebf3151fb8f892b0b17d7a', "data-name": "sidebar-nav", class: `w-${this.width} ` + classname }, h("div", { key: 'f09d76a37c22dc05bb9128e33c6621bd30cea0cc', class: `flex p-8 ${this.side === 'left' ? 'justify-end' : 'justify-start'}` }, h("slot", { key: '10433e45ce66b93442f2f6ed2fe613585bb2f335', name: "sidebar-header" })), h("div", { key: '995a71f5350991f33fb13bbed364fc0cedf9a303', class: "align-items flex flex-1 flex-col pb-8 pl-[10px] pr-8 pt-8" }, h("slot", { key: '1381eac3f66d63ea6ad4aecae6899249ec3e3f28', name: "sidebar-content" })), h("div", { key: 'eaf82d1fe10fa272c27b9f4edff37a92070fbda3', class: `${this.isOpen ? '' : 'hidden'}` }, h("slot", { key: '82d007a9fd41aa52bd503ef406f91bece852bcde', name: "sidebar-footer" }))), h("div", { key: 'c9c40a37d5cca895f852dbf666c530be6820b5d8', class: "flex w-full overflow-auto" }, h("slot", { key: '40e4d4a99f09500a0fb84fd03ca851fc97cad7c4', name: "page-content" }))));
    }
};

export { AtuiSidebarComponent as atui_sidebar };
//# sourceMappingURL=atui-sidebar.entry.js.map

//# sourceMappingURL=atui-sidebar.entry.js.map