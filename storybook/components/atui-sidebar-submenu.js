import { p as proxyCustomElement, H, h, c as Host } from './p-CIJrXZgf.js';
import { d as defineCustomElement$6 } from './p-DbgTvSJN.js';
import { d as defineCustomElement$5 } from './p-C9BeODyZ.js';
import { d as defineCustomElement$4 } from './p-ZLP3JFl_.js';
import { d as defineCustomElement$3 } from './p-DeMNeAJ_.js';
import { d as defineCustomElement$2 } from './p-QSqZJJfI.js';

const AtuiSidebarSubmenuComponent = /*@__PURE__*/ proxyCustomElement(class AtuiSidebarSubmenuComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.isSidebarOpen = false;
        this.isAccordionOpen = false;
        this.handleAtuiChange = this.handleAtuiChange.bind(this);
    }
    async componentDidLoad() {
        await this.updateInitialStates();
    }
    async componentDidUpdate() {
        await this.updateInitialStates();
    }
    async updateInitialStates() {
        const accordionItem = this.el.querySelector('atui-accordion-item');
        if (accordionItem) {
            this.isAccordionOpen = await accordionItem.getIsOpen();
        }
        const parentSidebar = this.el.closest('atui-sidebar');
        if (parentSidebar) {
            this.isSidebarOpen = await parentSidebar.getIsOpen();
        }
    }
    handleAtuiChange(event) {
        const target = event.target;
        const parentSidebar = this.el.closest('atui-sidebar');
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
        return (h(Host, { key: '9f289124a8ed19dc333822bec1bf5faae08d0090' }, h("atui-accordion-item", { key: 'ca0447d34c3f67c21bbfc0f57ec8bbdb0b40fbd7', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (h("atui-sidebar-menuitem", { key: '05f4d4e3611401a3d85ede460bddf63152973d5a', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (h("i", { key: '71b244d4102cbcf2d706f15a24bc8302c133895f', slot: "menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons text-icon-md group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")))), h("div", { key: '574cac7d50512f5ce7cd6c22c57932c1a04d4639', slot: "accordion-content" }, h("slot", { key: 'da916315ef24233129243d1283056c59d8629a1c', name: "submenu-content" }))), h("atui-menu", { key: '17ee97adbb8ee79e11529b20a8d48e1af5c2210c', class: this.isSidebarOpen ? 'hidden' : 'w-input-sm', "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", portal: true }, h("atui-sidebar-menuitem", { key: '48e862d805a42d9dd6409bf2dcd5e981cd006594', class: "pl-16", slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), h("div", { key: '33902e94b1a1c36cb9300b270c43ad2323fe606a', slot: "menu-content" }, h("slot", { key: '08588e6a72401d82c84979fbd83bfc756a338288', name: "submenu-hover-content" })))));
    }
    get el() { return this; }
}, [260, "atui-sidebar-submenu", {
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
    const components = ["atui-sidebar-submenu", "atui-accordion-item", "atui-accordion-trigger", "atui-badge", "atui-menu", "atui-sidebar-menuitem"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-sidebar-submenu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiSidebarSubmenuComponent);
            }
            break;
        case "atui-accordion-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "atui-accordion-trigger":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atui-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-sidebar-menuitem":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtuiSidebarSubmenu = AtuiSidebarSubmenuComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiSidebarSubmenu, defineCustomElement };
//# sourceMappingURL=atui-sidebar-submenu.js.map

//# sourceMappingURL=atui-sidebar-submenu.js.map