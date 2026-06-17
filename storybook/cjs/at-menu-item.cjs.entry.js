'use strict';

var index = require('./index-D1oh76XY.js');
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
        const getClassname = classlist.classlist('text-body hover:bg-surface-overlay/10 focus-within:bg-surface-overlay/10 focus-visible:ring-active-glow relative flex w-full cursor-pointer items-center gap-4 truncate overflow-hidden rounded-menu-item pl-8 py-4 px-4 text-left font-normal leading-normal transition-[background-color,color,box-shadow] duration-150 ease-in-out focus:outline-0 focus-visible:ring focus-visible:ring-inset', variantsConfig);
        const classname = getClassname({
            active: this.is_active,
            disabled: this.disabled,
        });
        return (index.h(index.Host, { key: 'ede9ec659974d8d340523da1757dee35dcadf572', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    this.atuiClick.emit();
                }
            } }, index.h("div", { key: 'a54d078856db754800d439cf08858c5c01a5323e', class: "flex flex-grow" }, index.h("slot", { key: 'cc3e39f65323e839b6468629e808b4d1a916dceb', name: "icon", "data-name": "menu-item-icon" }), this.label && (index.h("span", { key: 'b56ebe18a5c2749b77509a7d5701f991d7c0e68d', "data-name": "menu-item-label", class: "truncate whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), index.h("slot", { key: '14798eb11a23d158595b2a61dddf5b1d961cd2fc' })), index.h("slot", { key: 'eeec36b88524c64dd9b57a22e0bef6ab7b793211', name: 'icon-after', "data-name": "menu-item-icon-after" })));
    }
};

exports.at_menu_item = AtMenuitemComponent;
