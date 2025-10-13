import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';

const atSidebarTriggerCss = ".material-icons.sc-at-sidebar-trigger{font-family:\"Material Icons\";font-size:16px}.sc-at-sidebar-trigger-h{position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:var(--token-border-radius-md);cursor:pointer;padding:6px;font-weight:var(--token-font-weight-med);color:var(--token-sidebar-foreground);background-color:var(--token-sidebar-background);transition:background-color var(--token-transition-time-fast), color var(--token-transition-time-fast), box-shadow var(--token-transition-time-fast)}.sc-at-sidebar-trigger-h i.icon.sc-at-sidebar-trigger{font-family:\"Material Icons\";font-style:normal;display:flex;align-items:center;justify-content:center;line-height:1;font-size:var(--token-font-size-icon-lg) !important;z-index:10}.sc-at-sidebar-trigger-h .focus-indicator.sc-at-sidebar-trigger{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;background-color:var(--token-sidebar-foreground);opacity:0;transition:background-color var(--token-transition-time-fast)}.sc-at-sidebar-trigger-h:hover .focus-indicator.sc-at-sidebar-trigger{opacity:0.1}.sc-at-sidebar-trigger-h:focus-visible{outline:none;box-shadow:0 0 0 2px color-mix(in srgb, var(--token-state-active-foreground) 40%, transparent)}";

const AtSidebarTriggerComponent = /*@__PURE__*/ proxyCustomElement(class AtSidebarTriggerComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    get el() { return this; }
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
        return (h(Host, { key: '764254e2411fbb0aa5a275c9be1621b1a09985c3', role: "button", tabIndex: 0, onKeyDown: this.handleKeyDown, onClick: () => this.toggleSidebar() }, this.isOpen !== undefined && (h("i", { key: '20c531e52e9ec546e933b50f6c024a18f5efa46d', class: "material-icons" }, this.isOpen ? 'menu_open' : 'menu')), h("div", { key: '050ce5f2511b99f1920b795c96e1111c1352064d', class: "focus-indicator", "data-name": "focus-indicator", role: "presentation" })));
    }
    static get style() { return atSidebarTriggerCss; }
}, [258, "at-sidebar-trigger", {
        "isOpen": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-sidebar-trigger"];
    components.forEach(tagName => { switch (tagName) {
        case "at-sidebar-trigger":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtSidebarTriggerComponent);
            }
            break;
    } });
}

const AtSidebarTrigger = AtSidebarTriggerComponent;
const defineCustomElement = defineCustomElement$1;

export { AtSidebarTrigger, defineCustomElement };
//# sourceMappingURL=at-sidebar-trigger.js.map

//# sourceMappingURL=at-sidebar-trigger.js.map