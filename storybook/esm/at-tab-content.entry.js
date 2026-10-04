import { r as registerInstance, c as createEvent, a as getElement, h } from './index-Baj27LS8.js';

const AtTabContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiActivate = createEvent(this, "atuiActivate", 7);
    }
    get el() { return getElement(this); }
    /**
     * ID of the tab
     */
    tab_id;
    /**
     * Determines if the tab content is active
     */
    is_active = false;
    /**
     * True once this panel's tab has been selected at least once. Reflected, and
     * set before at-tabs emits atuiTabChange, so a consumer can defer building
     * expensive panel content until the tab is first opened.
     */
    has_activated = false;
    isActive = false;
    /**
     * Emits this panel's tab_id the first time its tab is selected
     */
    atuiActivate;
    tabSelector;
    componentWillLoad() {
        this.isActive = this.is_active;
        this.has_activated = this.has_activated || this.is_active;
    }
    async componentDidLoad() {
        this.tabSelector = this.el.closest('at-tabs');
        if (this.tabSelector) {
            const activeTab = await this.tabSelector.getActiveTab();
            this.setIsActive(activeTab);
            this.tabSelector.addEventListener('atuiTabChange', this.updateActiveState);
        }
    }
    disconnectedCallback() {
        if (this.tabSelector) {
            this.tabSelector.removeEventListener('atuiTabChange', this.updateActiveState);
        }
    }
    handleActivated(isActivated, wasActivated) {
        if (isActivated && !wasActivated) {
            this.atuiActivate.emit(this.tab_id);
        }
    }
    setIsActive(id) {
        this.isActive = id === this.tab_id;
        if (this.isActive) {
            this.has_activated = true;
        }
    }
    updateActiveState = (event) => {
        if (event.target !== this.tabSelector) {
            return;
        }
        this.setIsActive(event.detail);
    };
    render() {
        return (h("div", { key: 'ccbc8017623d4cd04dceaa99818b1a00f45bd8a5', class: `${this.isActive ? 'flex flex-col focus-visible:outline-none' : 'hidden'}`, role: "tabpanel", id: `panel-${this.tab_id}`, "aria-labelledby": `tab-${this.tab_id}`, tabIndex: this.isActive ? 0 : -1, "aria-hidden": !this.isActive }, h("slot", { key: 'b74b7c51b3213c31f8ad987f6a89c5d5a76d9f6b' })));
    }
    static get watchers() { return {
        "has_activated": [{
                "handleActivated": 0
            }]
    }; }
};

export { AtTabContent as at_tab_content };
