import { r as registerInstance, h, H as Host } from './index-HJO1YDmC.js';
import { c as cva } from './index-CVoOBWGd.js';

const variants = cva('relative flex w-full cursor-pointer items-center gap-8 overflow-hidden truncate rounded-md p-8 text-left text-body font-normal transition-[background-color,color,box-shadow] duration-150 ease-in-out focus:outline-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-active-foreground/40', {
    variants: {
        active: {
            true: 'bg-active-foreground/15 text-active',
            false: 'hover:bg-surface-1',
        },
    },
});
const AtuiMenuitemComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Will change the styling of the menuitem when set
         */
        this.is_active = false;
    }
    render() {
        const classname = variants({
            active: this.is_active,
        });
        return (h(Host, { key: 'b007c9049f4ffa25abce1597dbbf2707665f6689', role: "menuitem", tabindex: "0", class: classname }, this.icon && (h("span", { key: '701147dd434a5b7e99271aafe76b7b18a1d67ea6', "data-name": "menu-item-icon", class: "material-icons flex items-center justify-center text-icon-lg" }, this.icon)), this.label && (h("span", { key: '1d82d113363780c5f3a759ebdbfb9a4f90709df5', "data-name": "menu-item-label", class: "truncate whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), h("slot", { key: 'fa084759e24c9469ea880ff386bff702bc74e6e3' })));
    }
};

export { AtuiMenuitemComponent as atui_menu_item };
//# sourceMappingURL=atui-menu-item.entry.js.map

//# sourceMappingURL=atui-menu-item.entry.js.map