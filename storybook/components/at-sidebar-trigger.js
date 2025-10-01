import { p as proxyCustomElement, H, h, c as Host } from './p-DCAHuMKA.js';

const atSidebarTriggerCss = "at-sidebar-trigger{position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:var(--token-border-radius-md);cursor:pointer;padding:6px;font-weight:var(--token-font-weight-med);color:var(--token-sidebar-foreground);background-color:var(--token-sidebar-background);transition:background-color var(--token-transition-time-fast), color var(--token-transition-time-fast), box-shadow var(--token-transition-time-fast)}at-sidebar-trigger i.material-icons{font-style:normal;display:flex;align-items:center;justify-content:center;font-size:var(--token-font-size-icon-lg);z-index:10}at-sidebar-trigger div[data-name=focus-indicator]{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;background-color:var(--token-sidebar-foreground);opacity:0;transition:background-color var(--token-transition-time-fast)}at-sidebar-trigger:hover div[data-name=focus-indicator]{opacity:0.1}at-sidebar-trigger:focus-visible{outline:none;box-shadow:0 0 0 2px color-mix(in srgb, var(--token-state-active-foreground) 40%, transparent)}";

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
        return (h(Host, { key: 'bec58e31dd7200d80f5687684154acae4bb4ff47', role: "button", tabIndex: 0, onKeyDown: this.handleKeyDown, onClick: () => this.toggleSidebar() }, this.isOpen !== undefined && (h("i", { key: '8ff09a5aaff1def3ea6c43617594a74a4adc6c61', class: "material-icons" }, this.isOpen ? 'menu_open' : 'menu')), h("div", { key: 'f7f7fef6e4146fcaacae3734afc8706916c66a1e', "data-name": "focus-indicator", role: "presentation" })));
    }
    static get style() { return atSidebarTriggerCss; }
}, [256, "at-sidebar-trigger", {
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