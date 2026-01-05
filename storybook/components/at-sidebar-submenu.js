import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$6 } from './p-kHqi1FxQ.js';
import { d as defineCustomElement$5 } from './p-Bos8rqAS.js';
import { d as defineCustomElement$4 } from './p-BRoK1DxF.js';
import { d as defineCustomElement$3 } from './p-DEfR-Zk2.js';
import { d as defineCustomElement$2 } from './p-B2NEVjCS.js';

const atSidebarSubmenuCss = ":host .content{margin-bottom:16px}:host .hover-content{font-weight:var(--token-font-weight-normal)}:host .hover-menu[data-open]{display:none}";

const AtSidebarSubmenuComponent = /*@__PURE__*/ proxyCustomElement(class AtSidebarSubmenuComponent extends H {
    /**
     * Label to be displayed for the menu item
     */
    label;
    /**
     * Icon to be displayed with the label
     */
    icon;
    /**
     * Alert badge for the menu item
     */
    badge;
    /**
     * Will change the styling of the menuitem when set
     */
    is_active;
    isSidebarOpen = false;
    isAccordionOpen = false;
    atuiAccordionItem;
    get el() { return this; }
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.handleAtuiChange = this.handleAtuiChange.bind(this);
    }
    async componentDidLoad() {
        await this.updateInitialStates();
    }
    async componentDidUpdate() {
        await this.updateInitialStates();
    }
    async updateInitialStates() {
        const accordionItem = this.el.querySelector('at-accordion-item');
        if (accordionItem) {
            this.isAccordionOpen = await accordionItem.getIsOpen();
        }
        const parentSidebar = this.el.closest('at-sidebar');
        if (parentSidebar) {
            this.isSidebarOpen = await parentSidebar.getIsOpen();
        }
    }
    handleAtuiChange(event) {
        const target = event.target;
        const parentSidebar = this.el.closest('at-sidebar');
        if (target === parentSidebar) {
            this.isSidebarOpen = event.detail;
            if (!this.isSidebarOpen && this.atuiAccordionItem) {
                this.atuiAccordionItem.closeAccordion();
            }
        }
    }
    handleAtuiAccordionChange(event) {
        this.isAccordionOpen = event.detail;
    }
    getIsActive() {
        if (this.isSidebarOpen) {
            return !this.isAccordionOpen && this.is_active;
        }
        return this.is_active;
    }
    render() {
        return (h(Host, { key: '1a3279840305ecb49599566cc57f7acaffb2d91a' }, h("at-accordion-item", { key: 'd636af13eeb91fee3781c08189d151195a16c840', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: this.label }, (this.label || this.icon) && (h("at-sidebar-menuitem", { key: '75133907e0ec30ba1d3a58739b36973b7b3dfbf0', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (h("i", { key: 'a73ddb60a04e3c83908ab531dd16286604ccfa58', slot: "sidebar-menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons" }, "keyboard_arrow_down")))), h("div", { key: 'eaeab82fffd2e7e051871053e22a3e0232ab3af3', class: "content" }, h("slot", { key: '3752ee61531b1f89583c9e23a61ac9dd600813dd', name: "submenu-content" }))), h("at-menu", { key: '5fedb15c609e23081f5044f09bd4ab27b6f398f9', class: "hover-menu", "data-name": "hover-menu", hidden: this.isSidebarOpen, "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: "200px" }, h("at-sidebar-menuitem", { key: '79952d211d8a26945ae2361dc30400eb642515f4', slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), h("div", { key: '58746577beab624151cb0fb51e47c505344e7089', class: "submenu-hover-content", "data-name": "submenu-hover-content" }, h("slot", { key: '04803cce56d83a44cae80219b4a8a39f72191008', name: "submenu-hover-content" })))));
    }
    static get style() { return atSidebarSubmenuCss; }
}, [260, "at-sidebar-submenu", {
        "label": [1],
        "icon": [1],
        "badge": [1],
        "is_active": [4],
        "isSidebarOpen": [32],
        "isAccordionOpen": [32],
        "atuiAccordionItem": [32]
    }, [[8, "atuiSidebarChange", "handleAtuiChange"], [8, "atuiAccordionChange", "handleAtuiAccordionChange"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-sidebar-submenu", "at-accordion-item", "at-accordion-trigger", "at-badge", "at-menu", "at-sidebar-menuitem"];
    components.forEach(tagName => { switch (tagName) {
        case "at-sidebar-submenu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtSidebarSubmenuComponent);
            }
            break;
        case "at-accordion-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "at-accordion-trigger":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "at-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-sidebar-menuitem":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtSidebarSubmenu = AtSidebarSubmenuComponent;
const defineCustomElement = defineCustomElement$1;

export { AtSidebarSubmenu, defineCustomElement };
//# sourceMappingURL=at-sidebar-submenu.js.map

//# sourceMappingURL=at-sidebar-submenu.js.map