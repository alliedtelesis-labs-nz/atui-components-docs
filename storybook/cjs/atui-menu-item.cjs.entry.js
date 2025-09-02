'use strict';

var index = require('./index-43B6Ydvl.js');
var index$1 = require('./index-palgSxc9.js');

const variants = index$1.cva('text-body focus-visible:ring-active-foreground/40 relative flex w-full cursor-pointer items-center gap-8 truncate overflow-hidden rounded-md p-8 text-left font-normal transition-[background-color,color,box-shadow] duration-150 ease-in-out focus:outline-0 focus-visible:ring-2 focus-visible:ring-inset', {
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
});
const AtuiMenuitemComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Will change the styling of the menuitem when set
         */
        this.is_active = false;
        /**
         * Disables user interaction with the menu-item and updates visual style to appear inactive
         */
        this.disabled = false;
    }
    render() {
        const classname = variants({
            active: this.is_active,
            disabled: this.disabled,
        });
        return (index.h(index.Host, { key: '8c308b9f9dc0eb3d5c008ecf2628abf90baa7e64', role: "menuitem", tabindex: "0", class: classname, onClick: (e) => {
                if (this.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            } }, this.icon && (index.h("span", { key: '6c6fbc12b73970ca7de1ab2e88f49371429348bd', "data-name": "menu-item-icon", class: "material-icons text-icon-lg flex items-center justify-center" }, this.icon)), this.label && (index.h("span", { key: '008e6a268f32cc845cd86a274447804a0d8f73a5', "data-name": "menu-item-label", class: "truncate whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), index.h("slot", { key: '99d921d8b05d4ce55e10155e341ddaee8110375c' })));
    }
};

exports.atui_menu_item = AtuiMenuitemComponent;
//# sourceMappingURL=atui-menu-item.entry.cjs.js.map

//# sourceMappingURL=atui-menu-item.cjs.entry.js.map