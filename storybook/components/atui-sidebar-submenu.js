import { p as proxyCustomElement, H, h, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$6 } from './p-BgRKj52W.js';
import { d as defineCustomElement$5 } from './p-BR0ololI.js';
import { d as defineCustomElement$4 } from './p-1w9harR4.js';
import { d as defineCustomElement$3 } from './p-BNd1Uawm.js';
import { d as defineCustomElement$2 } from './p-BwPct12o.js';

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
        return (h(Host, { key: '8b3fee949d177d9f9153e207f0568ae458e280c4' }, h("atui-accordion-item", { key: 'ddf577e7f6019faabd6db6c7c2212cbb9923edaa', class: !this.isSidebarOpen ? 'hidden' : '', "aria-hidden": !this.isSidebarOpen, ref: (el) => (this.atuiAccordionItem = el), item_id: "one" }, (this.label || this.icon) && (h("atui-sidebar-menuitem", { key: '589df1f73eef8dac25259a763e3af56b239077d3', slot: "accordion-trigger", icon: this.icon, label: this.label, badge: this.badge, is_active: this.getIsActive() }, this.isSidebarOpen && (h("i", { key: '91ca797a4433926224c81a733f532f8eeb644dee', slot: "menu-item-actions", role: "presentation", "aria-hidden": "true", class: "material-icons text-icon-md group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")))), h("div", { key: '34275f0f2be45e31235f4f7171b9de29e2a9783e', slot: "accordion-content" }, h("slot", { key: 'b162af68dab9f40ed97f9e8b949f053de4905266', name: "submenu-content" }))), h("atui-menu", { key: 'c2a27f3a953f83578301a8265a7a2c672abfea79', class: this.isSidebarOpen ? 'hidden' : 'w-menu', "aria-hidden": this.isSidebarOpen, trigger: "hover", position: "right", align: "start", width: this.isSidebarOpen ? '0' : 'w-menu' }, h("atui-sidebar-menuitem", { key: '30c253c046e3e3c1971e0aff9363a7084957b945', slot: "menu-trigger", icon: this.icon, badge: this.badge, label: this.label, is_active: this.getIsActive() }), h("slot", { key: '04ec2fb71c4d3bd8ea3749fa5fe53aeabaa74af9', name: "submenu-hover-content" }))));
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