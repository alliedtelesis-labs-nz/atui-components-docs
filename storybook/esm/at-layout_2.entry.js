import { r as registerInstance, h, H as Host, a as getElement } from './index-CYwPWCYK.js';
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
        return h(Host, { key: '59de435a141402a17432be9079c601e23d2ed0ea' }, this.layoutElement);
    }
};

const variantsConfig = {
    variants: {
        layout: {
            horizontal: 'inline-block justify-center',
            vertical: 'flex justify-start',
        },
        active: {
            true: '',
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
            event.preventDefault();
            this.el.click();
        }
    }
    render() {
        const getClassname = classlist('group/tab text-button no-underline relative box-border flex cursor-pointer items-center gap-4 overflow-hidden rounded-input border border-solid border-transparent !font-medium capitalize transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out p-8 outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-active-glow', variantsConfig);
        const classname = getClassname({
            layout: this.layout,
            active: this.is_active,
        });
        return (h(Host, { key: '9a006f0946b9bb29b55989bab08553813240278d', role: "tab", id: `tab-${this.tab_id}`, "aria-controls": `panel-${this.tab_id}`, tabindex: this.is_active ? '0' : '-1', "aria-selected": this.is_active ? 'true' : 'false', "data-active": this.is_active ? 'true' : 'false', "data-name": `tab-${this.tab_id}`, onKeyDown: (event) => this.handleKeyDown(event), class: `${classname} ${this.fill ? 'flex-1' : ''}` }, this.tab_title, h("slot", { key: 'e435d90705c565584d0f3626735f8a07c6554917' })));
    }
};

export { AtLayout as at_layout, AtTabTrigger as at_tab_trigger };
