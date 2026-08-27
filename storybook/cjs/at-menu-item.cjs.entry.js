'use strict';

var index = require('./index-Bo1AxtqW.js');
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
        return (index.h(index.Host, { key: '1d70d3bdb78bb60f2aa5e7b2a0b6b4439c92723e', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    this.atuiClick.emit();
                }
            } }, index.h("div", { key: 'b345e93f53f7358de7f7394994438f0a2c5d9ed8', class: "flex min-w-0 flex-1" }, index.h("slot", { key: '42a4cffd5c93f258e66aa5ed422396a56dfe84fd', name: "icon", "data-name": "menu-item-icon" }), this.label && (index.h("span", { key: '92c9afefb296df9f87780f14ceeea84a0e5bfbb1', "data-name": "menu-item-label", class: "text-body min-w-0 flex-1 truncate leading-normal font-normal whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), index.h("slot", { key: '65e0685d08444275352d5bffdce5dbdfd46b5188' })), index.h("slot", { key: '5550e7145bf9a09f4a3c1c45382ea7768e1c4a18', name: 'icon-after', "data-name": "menu-item-icon-after" })));
    }
};

exports.at_menu_item = AtMenuitemComponent;
