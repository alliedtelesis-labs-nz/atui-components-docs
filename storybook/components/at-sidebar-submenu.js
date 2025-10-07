import { p as proxyCustomElement, H, h, c as Host } from './p-BcFc6fJK.js';
import { d as defineCustomElement$6 } from './p-D6Vns73x.js';
import { d as defineCustomElement$5 } from './p-gtmTzY9j.js';
import { d as defineCustomElement$4 } from './p-Czbqv7Vo.js';
import { d as defineCustomElement$3 } from './p-Lg8p3TGm.js';
import { d as defineCustomElement$2 } from './p-BLIOLkiR.js';

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
        return (h(Host, { key: '88169a862294b97bcb1e6732a37c5ccac5c9c155' }, h("at-accordion-item", { key: '36633e3e3e07ccea832723c0d4ba9def1b89bfc7', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (h("at-sidebar-menuitem", { key: 'fae7c7b3a4b03bff85e5a8e8b56541643445b224', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (h("i", { key: 'c2efd7368a296a3b657ecae24b565c241268553b', slot: "menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons text-icon-md group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")))), h("div", { key: '24e57f407fec0c2726bee658628944e92eac4f65', class: "mb-16" }, h("slot", { key: '283d6a00b055de72a283486c0b1f14e664b3077f', name: "submenu-content" }))), h("at-menu", { key: '5f447cd98f4edf0fde86544fef3908357f92964e', class: this.isSidebarOpen ? 'hidden' : 'w-menu', "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: this.isSidebarOpen ? '0' : 'w-menu' }, h("at-sidebar-menuitem", { key: 'f1e5f71c7f3c7b672eef281db420d6da5e11d4ff', slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), h("div", { key: '425fc44b55ce800b4bb2a7409ce1c2c042535a82', class: "font-normal" }, h("slot", { key: 'd0b3256e83c45f12238e002db7ae40edf3868fec', name: "submenu-hover-content" })))));
    }
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