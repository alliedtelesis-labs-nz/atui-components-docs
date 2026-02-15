import { r as registerInstance, h, H as Host } from './index-jvbUuQtg.js';
import { c as classlist } from './classlist-COG8_R0C.js';

const AtLayout = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Template used to display content
     */
    template = 'master-detail';
    /**
     * If overflow is allowed on the detail in master-detail
     */
    overflow = true;
    get layoutElement() {
        switch (this.template) {
            case 'master-detail':
                return (h("div", { class: "flex h-full flex-grow overflow-hidden", "data-name": "wrapper-master-detail" }, h("div", { class: "w-sidebar flex flex-col overflow-hidden" }, h("slot", { name: "master" })), h("div", { class: `flex flex-grow flex-col ${this.overflow ? 'overflow-auto' : 'overflow-hidden'}` }, h("slot", { name: "detail" }))));
            case 'tabset':
                return (h("div", { class: "flex w-full flex-col", "data-name": "wrapper-tabset" }, h("slot", { name: "tabset-navigation" }), h("div", { class: "flex w-full flex-col overflow-auto" }, h("slot", { name: "tabset-content" }))));
            case 'content-container':
                return (h("div", { class: "flex flex-grow justify-center py-64", "data-name": "wrapper-content-container" }, h("div", { class: "flex max-w-3xl flex-grow flex-col" }, h("slot", null))));
        }
    }
    render() {
        return h(Host, { key: '3ac56628f05d3be0217c183397e62a0d3f9bd8a8' }, this.layoutElement);
    }
};

const variantsConfig = {
    variants: {
        layout: {
            horizontal: 'inline-block justify-center',
            vertical: 'flex justify-start',
        },
        active: {
            true: 'z-index-20 text-active-foreground focus:outline-2 focusfocus-visible:ring-active-foreground/30',
            false: 'text-light hover:bg-surface-1 focus-visible:ring-active-foreground/30',
        },
    },
    compoundVariants: [
        {
            layout: 'vertical',
            active: true,
            class: 'bg-active-foreground/10',
        },
    ],
};
const AtTabTrigger = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * ID of the tab
     */
    tab_id;
    /**
     * Title to be displayed in the tab
     */
    tab_title;
    /**
     * Styling based on the layout of the tabs
     */
    layout = 'horizontal';
    /**
     * Applies styling when active
     */
    is_active;
    /**
     * If true, the tab will fill the parent container's width.
     * Set by parent <at-tabs> to control layout.
     */
    fill = false;
    tabEl;
    handleKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            this.tabEl.click();
        }
    }
    render() {
        const getClassname = classlist('group/tab text-button relative box-border flex cursor-pointer items-center gap-4 overflow-hidden rounded-md border border-solid border-transparent font-medium capitalize duration-150 ease-in-out p-8 outline-none focus-visible:ring-active-foreground/40 focus-visible:ring-2 focus-visible:z-20', variantsConfig);
        const classname = getClassname({
            layout: this.layout,
            active: this.is_active,
        });
        return (h(Host, { key: '4cbe8d0de326b767e0ec6fa5bf9e90c36f57eb3f', role: "tab", tabfocs: 0, "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', onKeyDown: (event) => this.handleKeyDown(event), "data-name": `tab-${this.tab_id}`, class: this.fill ? 'flex-1' : undefined }, h("a", { key: 'c03b46c707c6dd3e8154b8a3829e686a1544b616', id: `tab-${this.tab_id}`, tabindex: "0", class: classname, ref: (el) => (this.tabEl = el) }, this.tab_title, h("slot", { key: 'b1502ca61cbacf330c86360925db38f950443fd5' }))));
    }
};

export { AtLayout as at_layout, AtTabTrigger as at_tab_trigger };
