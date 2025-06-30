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
        return (h(Host, { key: '1f69713d4fd0b434ef0f278a763e5edb6ee0ae5b', role: "menuitem", tabindex: "0", class: classname }, this.icon && (h("span", { key: '626f46a5aa575e042b6f4dede4fae5f6aae3a54c', "data-name": "menu-item-icon", class: "material-icons flex items-center justify-center text-icon-lg" }, this.icon)), this.label && (h("span", { key: '4e0f88af9411d935cee55c83eab190f0bbfdd81e', "data-name": "menu-item-label", class: "truncate whitespace-nowrap group-data-[state=collapsed]/sidebar-wrapper:hidden" }, this.label)), h("slot", { key: 'a2fb3787e398d9a23ab24da8dc2ba40a34f1f7d1' })));
    }
};

export { AtuiMenuitemComponent as atui_menu_item };
//# sourceMappingURL=atui-menu-item.entry.js.map

//# sourceMappingURL=atui-menu-item.entry.js.map