import { p as proxyCustomElement, H, h, c as Host } from './p-DzGFYGds.js';
import { d as defineCustomElement$6 } from './p-CJyIegWw.js';
import { d as defineCustomElement$5 } from './p-B5K9l6Gv.js';
import { d as defineCustomElement$4 } from './p-59JXZC3t.js';
import { d as defineCustomElement$3 } from './p-CgVj-EFD.js';
import { d as defineCustomElement$2 } from './p-CuLL77a_.js';

const AtuiSidebarSubmenuComponent = /*@__PURE__*/ proxyCustomElement(class AtuiSidebarSubmenuComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        return (h(Host, { key: 'e35756a5bd937e989428292486d52b97d7137dfb' }, h("atui-accordion-item", { key: 'e5269eab97cad3611fcc6e5c7a885ded60e1bd54', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (h("atui-sidebar-menuitem", { key: 'd08425453c59913c9df4b3ad6a8d39366998781f', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (h("i", { key: 'ca58dad903d91503f6c2e4c95da19122af8bfd4a', slot: "menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons text-icon-md group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")))), h("div", { key: 'cc06407debb59cf4cd39417355e3b1f85e79cf8d', slot: "accordion-content" }, h("slot", { key: '4e55636ec05cbdf1e06ef1f9049048c01948e121', name: "submenu-content" }))), h("atui-menu", { key: '464d3c4cb7f897884a8ec18e40dd81b0021c2f7a', class: this.isSidebarOpen ? 'hidden' : 'w-input-sm', "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: this.isSidebarOpen ? '0' : '280px' }, h("atui-sidebar-menuitem", { key: 'fb8df4c232c363ef731b7683576923c84d8a2ae2', class: "pl-16", slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), h("div", { key: 'c6a7065837add472c02d481e448ce23af864efc2', slot: "menu-content" }, h("slot", { key: '52dda38760c330ac5080a63041982ae09dc30a3c', name: "submenu-hover-content" })))));
    }
    get el() { return this; }
}, [257, "atui-sidebar-submenu", {
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