'use strict';

var index = require('./index-D0lZ3Nn_.js');
var classlist = require('./classlist-BPb95vgj.js');

const variantsConfig = {
    variants: {
        disabled: {
            true: 'pointer-events-none opacity-30 grayscale-[1]',
            false: null,
        },
        active: {
            true: 'text-button-primary-foreground fill-button-primary-foreground bg-button-primary-background/10',
            false: 'hover:bg-surface-1',
        },
    },
};
const AtMenuitemComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiClick = index.createEvent(this, "atuiClick", 7);
    }
    /**
     * Label to be displayed for the menu item
     */
    label;
    /**
     * Will change the styling of the menuitem when set
     */
    is_active = false;
    /**
     * Disables user interaction with the menu-item and updates visual style to appear inactive
     */
    disabled = false;
    /**
     * Emits when the button is clicked
     */
    atuiClick;
    render() {
        const getClassname = classlist.classlist('hover:bg-surface-overlay/10 focus-within:bg-surface-overlay/10 focus-visible:ring-active-glow relative flex w-full cursor-pointer items-center gap-4 truncate overflow-hidden rounded-menu-item py-4 px-8 text-left transition-[background-color,color,box-shadow] duration-150 ease-in-out focus:outline-0 focus-visible:ring focus-visible:ring-inset', variantsConfig);
        const classname = getClassname({
            active: this.is_active,
            disabled: this.disabled,
        });
        return (index.h(index.Host, { key: '72f5fbe77b4be99b6a59546de164abf941c657ab', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    this.atuiClick.emit();
                }
            } }, index.h("div", { key: '29a1823c5d7f471c827aa65f67c20b4bcabe361f', class: "flex min-w-0 flex-1" }, index.h("slot", { key: '3e1aed6440c7fcff36668153df999cd5c2fb7b9d', name: "icon", "data-name": "menu-item-icon" }), this.label && (index.h("span", { key: '979047c62bd6cec4e083dfcefe4e1d989a0148eb', "data-name": "menu-item-label", class: "text-body min-w-0 flex-1 truncate leading-normal font-normal whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), index.h("slot", { key: '187ccf86cdaaa2134453812c942f59a8a9134580' })), index.h("slot", { key: 'd22c1b1c67775dff2e68e5837c59c57aa9d5d98f', name: 'icon-after', "data-name": "menu-item-icon-after" })));
    }
};

exports.at_menu_item = AtMenuitemComponent;
