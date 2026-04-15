'use strict';

var index = require('./index-BRms7T38.js');
var classlist = require('./classlist-BPb95vgj.js');

const variantsConfig = {
    variants: {
        disabled: {
            true: 'pointer-events-none opacity-30 grayscale-[1]',
            false: null,
        },
        active: {
            true: 'bg-active-foreground/15 text-active',
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
     * Icon to be displayed with the label
     */
    icon;
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
        const getClassname = classlist.classlist('text-body focus-visible:ring-active-foreground/40 relative flex w-full cursor-pointer items-center gap-8 truncate overflow-hidden rounded-md p-8 text-left font-normal transition-[background-color,color,box-shadow] duration-150 ease-in-out focus:outline-0 focus-visible:ring-2 focus-visible:ring-inset', variantsConfig);
        const classname = getClassname({
            active: this.is_active,
            disabled: this.disabled,
        });
        return (index.h(index.Host, { key: 'a62aafb055d2eaeb06d8630ef03aa930c76246ad', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    this.atuiClick.emit();
                }
            } }, this.icon && (index.h("span", { key: '349a3103a60bfcbad834e97bb964c0cd1f548fc9', "data-name": "menu-item-icon", class: "material-icons text-icon-lg flex items-center justify-center" }, this.icon)), this.label && (index.h("span", { key: '927e35512b5dca0145de26c82035e8ce1110a057', "data-name": "menu-item-label", class: "truncate whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), index.h("slot", { key: 'abeed4e9fb981723ce01ae303c44dffa5f49e3a1' })));
    }
};

exports.at_menu_item = AtMenuitemComponent;
