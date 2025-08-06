import { p as proxyCustomElement, H, h } from './p-DJD-7SVX.js';

const AtuiTabContent$1 = /*@__PURE__*/ proxyCustomElement(class AtuiTabContent extends H {
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
        this.tabSelector = this.el.closest('atui-tab-selector');
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
        return (h("div", { key: 'ec3545b9a19bb3d5b313f668e5300a2665507873', class: `${this.isActive ? 'flex flex-col' : 'hidden'}`, role: "tabpanel", id: `panel-${this.tab_id}`, "aria-labelledby": `tab-${this.tab_id}`, tabIndex: this.isActive ? 0 : -1, "aria-hidden": !this.isActive }, h("slot", { key: 'bbec25b4a6a6091c70eab081c891ffcafc1be7c8' })));
    }
    get el() { return this; }
}, [4, "atui-tab-content", {
        "tab_id": [1],
        "is_active": [516],
        "isActive": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-tab-content"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-tab-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTabContent$1);
            }
            break;
    } });
}

const AtuiTabContent = AtuiTabContent$1;
const defineCustomElement = defineCustomElement$1;

export { AtuiTabContent, defineCustomElement };
//# sourceMappingURL=atui-tab-content.js.map

//# sourceMappingURL=atui-tab-content.js.map