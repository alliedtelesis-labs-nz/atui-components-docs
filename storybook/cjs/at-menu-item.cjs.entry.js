'use strict';

var index = require('./index-CzDB71Wy.js');
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
        return (index.h(index.Host, { key: '018e7e285bcd29ed0368ff307f61576efc893acd', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    this.atuiClick.emit();
                }
            } }, this.icon && (index.h("span", { key: 'a6fd0492be655e7a4147430d0587ff105f0b5273', "data-name": "menu-item-icon", class: "material-icons text-icon-lg flex items-center justify-center" }, this.icon)), this.label && (index.h("span", { key: '9edf370ddc83cf604faa2a3394990ad49ddfda10', "data-name": "menu-item-label", class: "truncate whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), index.h("slot", { key: '04ae875c7f620bdc10f0baec7036bd2c5c3c8626' })));
    }
};

exports.at_menu_item = AtMenuitemComponent;
