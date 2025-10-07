import { p as proxyCustomElement, H, h } from './p-BcFc6fJK.js';

const AtTabContent$1 = /*@__PURE__*/ proxyCustomElement(class AtTabContent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    get el() { return this; }
    /**
     * ID of the tab
     */
    tab_id;
    /**
     * Determines if the tab content is active
     */
    is_active = false;
    isActive = false;
    tabSelector;
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
    updateActiveState = (event) => {
        const selectedTabId = event.detail;
        this.isActive = selectedTabId === this.tab_id;
    };
    render() {
        return (h("div", { key: '1e0a2a17792af6ffbe54f7807c42ecfd01cded8b', class: `${this.isActive ? 'flex flex-col' : 'hidden'}`, role: "tabpanel", id: `panel-${this.tab_id}`, "aria-labelledby": `tab-${this.tab_id}`, tabIndex: this.isActive ? 0 : -1, "aria-hidden": !this.isActive }, h("slot", { key: '590c6637db6743d13a32418f61d9ee6c257625f7' })));
    }
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