import { p as proxyCustomElement, H, h, c as Host } from './p-BRRmBK9P.js';

const atSidebarTriggerCss = ":host{position:relative;display:flex;align-items:center;justify-content:flex-end;overflow:hidden;border-radius:var(--token-border-radius-md);cursor:pointer;padding:8px;font-weight:var(--token-font-weight-med);color:var(--token-sidebar-foreground);height:var(--token-input-btn-height);background-color:var(--token-sidebar-background);transition:background-color var(--token-transition-time-fast), color var(--token-transition-time-fast), box-shadow var(--token-transition-time-fast)}:host i.material-icons{font-style:normal;display:flex;align-items:center;justify-content:center;font-size:var(--token-font-size-icon-xl);z-index:10}:host div[data-name=focus-indicator]{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;background-color:var(--token-sidebar-foreground);opacity:0;transition:background-color var(--token-transition-time-fast)}:host(:hover) div[data-name=focus-indicator]{opacity:0.1}:host(:focus-visible){outline:none;box-shadow:0 0 0 2px color-mix(in srgb, var(--token-state-active-foreground) 40%, transparent)}";

const AtSidebarTriggerComponent = /*@__PURE__*/ proxyCustomElement(class AtSidebarTriggerComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.isOpen = false;
        this.handleKeyDown = (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.el.click();
            }
        };
        this.handleSidebarChange = (event) => {
            this.isOpen = event.detail;
        };
    }
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
    render() {
        return (h(Host, { key: 'f5b02725e61a67b713243798665412dc6b1e291b', role: "button", tabIndex: 0, onKeyDown: this.handleKeyDown, onClick: () => this.toggleSidebar() }, this.isOpen !== undefined && (h("i", { key: '36646cb5662ad4eef28a826b104b2df53be54e95', class: "material-icons" }, this.isOpen ? 'menu_open' : 'menu')), h("div", { key: '6a5727fe59cf6b54508e91ea89981cca7379721a', "data-name": "focus-indicator", role: "presentation" })));
    }
    get el() { return this; }
    static get style() { return atSidebarTriggerCss; }
}, [257, "at-sidebar-trigger", {
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