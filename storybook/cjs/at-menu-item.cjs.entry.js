'use strict';

var index = require('./index-JVxrGXVZ.js');
var classlist = require('./classlist-BPb95vgj.js');

const variantsConfig = {
    variants: {
        disabled: {
            true: 'pointer-events-none opacity-30 grayscale-[1]',
            false: null,
        },
        active: {
            true: 'text-active-accent bg-active-accent/10',
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
        const getClassname = classlist.classlist('hover:bg-surface-overlay/10 focus-within:bg-surface-overlay/10 focus-visible:ring-active-glow relative flex w-full cursor-pointer items-center gap-4 truncate overflow-hidden rounded-menu-item py-4 px-8 text-left transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out focus:outline-0 focus-visible:ring focus-visible:ring-inset', variantsConfig);
        const classname = getClassname({
            active: this.is_active,
            disabled: this.disabled,
        });
        return (index.h(index.Host, { key: 'cf1429670237bcfe61a41fe314c8de8f56168e5d', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    this.atuiClick.emit();
                }
            } }, index.h("div", { key: '83eccb950c8fb95b8584b0d0a9dc0ad6ba6d5349', class: "flex min-w-0 flex-1" }, index.h("slot", { key: '2065163be366e7967545a94ad602d8db64169e9d', name: "icon", "data-name": "menu-item-icon" }), this.label && (index.h("span", { key: 'b529dc42fef0560441bd3fc3c39cb4520b39a149', "data-name": "menu-item-label", class: "text-body min-w-0 flex-1 truncate leading-normal font-normal whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), index.h("slot", { key: 'b9140005be7391c8f95b0998a09e12335fcf1664' })), index.h("slot", { key: '050eafc69e997204e65f4caf5e2a83a4f8971a3d', name: 'icon-after', "data-name": "menu-item-icon-after" })));
    }
};

exports.at_menu_item = AtMenuitemComponent;
