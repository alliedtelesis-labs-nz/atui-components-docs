import { r as registerInstance, h, H as Host, a as getElement } from './index-Dnh7MvHP.js';
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
        return h(Host, { key: 'e56df2b4d19e0459066cdc5a92bdc5e6f0cb105b' }, this.layoutElement);
    }
};

const variantsConfig = {
    variants: {
        layout: {
            horizontal: 'inline-block justify-center',
            vertical: 'flex justify-start',
        },
        active: {
            true: 'z-index-20',
            false: 'text-muted hover:text-foreground',
        },
    },
    compoundVariants: [
        {
            layout: 'vertical',
            active: true,
            class: 'bg-active-background text-active-foreground',
        },
        {
            layout: 'horizontal',
            active: true,
            class: 'text-active-accent',
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
    get el() { return getElement(this); }
    handleKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            this.el.click();
        }
    }
    render() {
        const getClassname = classlist('group/tab text-button no-underline relative box-border flex cursor-pointer items-center gap-4 overflow-hidden rounded-input border border-solid border-transparent !font-medium capitalize transition-colors duration-150 ease-in-out p-8 outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-active-glow', variantsConfig);
        const classname = getClassname({
            layout: this.layout,
            active: this.is_active,
        });
        return (h(Host, { key: 'fd8d5a0ba45ec91af1df27bae72a28570c65201a', role: "tab", tabindex: "0", "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', "data-name": `tab-${this.tab_id}`, onKeyDown: (event) => this.handleKeyDown(event), class: `${classname} ${this.fill ? 'flex-1' : undefined}` }, this.tab_title, h("slot", { key: '3bf5358b9bcb5d3ec10dc98999fc9fe7f90e72f5' })));
    }
};

export { AtLayout as at_layout, AtTabTrigger as at_tab_trigger };
