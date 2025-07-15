'use strict';

var index = require('./index-BJDFmEHZ.js');
var index$1 = require('./index-palgSxc9.js');

const variants = index$1.cva('relative flex w-full cursor-pointer items-center gap-8 overflow-hidden truncate rounded-md p-8 text-left text-body font-normal transition-[background-color,color,box-shadow] duration-150 ease-in-out focus:outline-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-active-foreground/40', {
    variants: {
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
    }
    render() {
        const classname = variants({
            active: this.is_active,
        });
        return (index.h(index.Host, { key: 'b007c9049f4ffa25abce1597dbbf2707665f6689', role: "menuitem", tabindex: "0", class: classname }, this.icon && (index.h("span", { key: '701147dd434a5b7e99271aafe76b7b18a1d67ea6', "data-name": "menu-item-icon", class: "material-icons flex items-center justify-center text-icon-lg" }, this.icon)), this.label && (index.h("span", { key: '1d82d113363780c5f3a759ebdbfb9a4f90709df5', "data-name": "menu-item-label", class: "truncate whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), index.h("slot", { key: 'fa084759e24c9469ea880ff386bff702bc74e6e3' })));
    }
};

exports.atui_menu_item = AtuiMenuitemComponent;
//# sourceMappingURL=atui-menu-item.entry.cjs.js.map

//# sourceMappingURL=atui-menu-item.cjs.entry.js.map