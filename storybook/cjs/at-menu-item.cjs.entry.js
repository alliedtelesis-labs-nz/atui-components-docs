'use strict';

var index = require('./index-IIXwPU2S.js');
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
        // at-menu moves focus onto the first item when it opens, so the focus
        // background must only paint for keyboard focus or a mouse-opened menu
        // looks like its first item is hovered.
        const getClassname = classlist.classlist('hover:bg-surface-overlay/10 focus-visible:bg-surface-overlay/10 has-[:focus-visible]:bg-surface-overlay/10 focus-visible:ring-active-glow relative flex w-full cursor-pointer items-center gap-4 truncate overflow-hidden rounded-menu-item py-4 px-8 text-left transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out focus:outline-0 focus-visible:ring focus-visible:ring-inset', variantsConfig);
        const classname = getClassname({
            active: this.is_active,
            disabled: this.disabled,
        });
        return (index.h(index.Host, { key: '26ad21e2e9ce136efd26cc2a93e7d7ba71504aa4', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    this.atuiClick.emit();
                }
            } }, index.h("div", { key: 'f6188b91a3af0ad768beb0da49bc8b3177c94a07', class: "flex min-w-0 flex-1" }, index.h("slot", { key: '45d568e9fbf4b9f692b6861f4be51f4f214d56d1', name: "icon", "data-name": "menu-item-icon" }), this.label && (index.h("span", { key: '5ad15de55c2c4aeeb363638c3b48d4ecbc94ceaf', "data-name": "menu-item-label", class: "text-body min-w-0 flex-1 truncate leading-normal font-normal whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), index.h("slot", { key: '73e8b84906043d8bcc4b66face9531aca2cb4c0e' })), index.h("slot", { key: '268e760f77e960e19f6ac6f5a6f2b11a2968c1f5', name: 'icon-after', "data-name": "menu-item-icon-after" })));
    }
};

exports.at_menu_item = AtMenuitemComponent;
