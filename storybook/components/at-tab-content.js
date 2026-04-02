import { p as proxyCustomElement, H, h } from './p-Cv5ME95Z.js';

const AtTabContent$1 = /*@__PURE__*/ proxyCustomElement(class AtTabContent extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Determines if the tab content is active
         */
        this.is_active = false;
        this.isActive = false;
        this.updateActiveState = (event) => {
            const selectedTabId = event.detail;
            this.isActive = selectedTabId === this.tab_id;
        };
    }
    componentWillLoad() {
        this.isActive = this.is_active;
    }
    async componentDidLoad() {
        this.tabSelector = this.el.closest('at-tab-selector');
        if (this.tabSelector) {
            const activeTab = await this.tabSelector.getActiveTab();
            this.setIsActive(activeTab);
            this.tabSelector.addEventListener('atuiChange', this.updateActiveState);
        }
    }
    disconnectedCallback() {
        if (this.tabSelector) {
            this.tabSelector.removeEventListener('atuiChangeId', this.updateActiveState);
        }
    }
    setIsActive(id) {
        this.isActive = id === this.tab_id;
    }
    render() {
        return (h("div", { key: '0f160b2cdd781ead00a0100bacba851920b1de7c', class: `${this.isActive ? 'flex flex-col' : 'hidden'}`, role: "tabpanel", id: `panel-${this.tab_id}`, "aria-labelledby": `tab-${this.tab_id}`, tabIndex: this.isActive ? 0 : -1, "aria-hidden": !this.isActive }, h("slot", { key: '1bd3b2ab556a19fbc116274b5d38a14bf16e3cb4' })));
    }
    get el() { return this; }
}, [260, "at-tab-content", {
        "tab_id": [1],
        "is_active": [516],
        "isActive": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-tab-content"];
    components.forEach(tagName => { switch (tagName) {
        case "at-tab-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTabContent$1);
            }
            break;
    } });
}

const AtTabContent = AtTabContent$1;
const defineCustomElement = defineCustomElement$1;

export { AtTabContent, defineCustomElement };
//# sourceMappingURL=at-tab-content.js.map

//# sourceMappingURL=at-tab-content.js.map