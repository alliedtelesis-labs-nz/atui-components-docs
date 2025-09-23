import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';
import { c as classlist } from './p-Bfa-pAao.js';

const atSidebarCss = "at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:36px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:50px}at-sidebar at-sidebar-menu at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-submenu [slot=submenu-content] at-sidebar-menuitem{padding-left:64px}at-sidebar at-sidebar-submenu at-menu [data-name=menu-content-wrapper]{background-color:var(--token-sidebar-background)}";

const variantsConfig = {
    variants: {
        collapsible: {
            none: null,
            icon: 'group-data-[state=collapsed]/sidebar-wrapper:w-sidebar-collapsed',
            offcanvas: 'group-data-[state=collapsed]/sidebar-wrapper:w-0',
        },
        side: {
            left: null,
            right: 'order-1',
        },
    },
};
const AtSidebarComponent = /*@__PURE__*/ proxyCustomElement(class AtSidebarComponent extends H {
    constructor() {
        super();
        this.__registerHost();
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
        const getClassname = classlist(`atui-sidebar group/sidebar bg-sidebar-background 
                  text-sidebar-foreground relative z-20 flex h-screen w-full
                  flex-col overflow-y-auto border-r border-solid border-r-med 
                  transition-[width] duration-300 ease-in-out`, variantsConfig);
        const classname = getClassname({
            collapsible: this.collapsible,
            side: this.side,
        });
        return (h(Host, { key: '39690ccaeb7bfe7183973bc3306e915ba7229e8d', "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-collasable": this.collapsible, "data-side": this.side, class: "group/sidebar-wrapper flex h-screen w-full items-stretch overflow-hidden" }, h("nav", { key: 'f791757c9fe9b72e4ba7f5a04753eff5cea3881f', "data-name": "sidebar-nav", class: `w-${this.width} ` + classname }, h("slot", { key: '6f0d93fee49d09cf5885460be7b107ff57b57845', name: "sidebar-header" }), h("div", { key: '9330554a48b8b4757aac5e5d9fb432aaf99e06a4', class: "align-items oveflow-y-auto flex flex-1 flex-col p-8" }, h("slot", { key: 'cbed6ae1019e7f569b6f26be6337c43708630e77', name: "sidebar-content" })), h("div", { key: 'f413f33f30428b094e96e02d386fced8f95ae531', class: `${this.isOpen ? '' : 'hidden'}` }, h("slot", { key: '0138347136ed649c7073f64996147296d1334d3b', name: "sidebar-footer" }))), h("div", { key: 'bd1c1f329d5615776c66c19f2b2a0bd6b84e70dc', class: "flex w-full overflow-auto" }, h("slot", { key: 'd336b0b5cf4156152b3b9f57eeddd42c0d16f109', name: "page-content" }))));
    }
    static get style() { return atSidebarCss; }
}, [260, "at-sidebar", {
        "side": [1],
        "width": [1],
        "collapsible": [1],
        "default_open": [4],
        "isOpen": [32],
        "toggleSidebar": [64],
        "getIsOpen": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-sidebar"];
    components.forEach(tagName => { switch (tagName) {
        case "at-sidebar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtSidebarComponent);
            }
            break;
    } });
}

const AtSidebar = AtSidebarComponent;
const defineCustomElement = defineCustomElement$1;

export { AtSidebar, defineCustomElement };
//# sourceMappingURL=at-sidebar.js.map

//# sourceMappingURL=at-sidebar.js.map