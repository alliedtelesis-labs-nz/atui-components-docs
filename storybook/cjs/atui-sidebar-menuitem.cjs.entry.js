'use strict';

var index = require('./index-i7hIKTeN.js');
var classlist = require('./classlist-BddvonaD.js');

const variantsConfig = {
    variants: {
        active: {
            true: 'bg-sidebar-primary text-sidebar-primary-foreground',
            false: 'text-sidebar-foreground',
        },
    },
};
const focusIndicatorVariantsConfig = {
    variants: {
        active: {
            true: 'group-hover:bg-blue-900/30 group-active:bg-blue-900/70',
            false: 'group-active:bg-surface-4/20 group-hover:bg-surface-4/10',
        },
    },
};
const AtuiSidebarMenuitemComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const getClassname = classlist.classlist('group text-button focus-visible:ring-active-foreground/30 relative flex w-full cursor-pointer items-center justify-between gap-8 overflow-visible rounded-md p-8 text-left transition-[background-color,color,box-shadow] duration-150 ease-in-out focus-visible:ring-2 focus-visible:outline-none', variantsConfig);
        const classname = getClassname({
            active: this.is_active,
        });
        const getFocusIndicatorClassname = classlist.classlist('pointer-events-none absolute top-0 left-0 z-0 h-full w-full rounded-md transition-colors duration-300 ease-in-out', focusIndicatorVariantsConfig);
        const focusIndicatorClassname = getFocusIndicatorClassname({
            active: this.is_active,
        });
        return (index.h(index.Host, { key: '979148b0723871fcb9bf2a6d091e84d0a21f67c6', role: "menuitem", "data-state": this.is_active ? 'active' : 'inactive', class: classname }, index.h("div", { key: 'f5b3603769296a1f11fe13057b8bc290df181f7c', class: "flex items-center gap-8 truncate" }, index.h("slot", { key: '0e6d3fbac78cd6ed04f97ca51a6ab89e0c0faed2', name: "menu-item-label" }), this.badge && (index.h("atui-badge", { key: 'ad964e998c350d77ed62a7a5174844efdfa38a66', "data-name": "menu-badge", role: "presentation", class: "pointer-events-none absolute top-[-8px] left-[22px] z-20 !rounded-[4px] !px-[3px] !py-4 !text-[11px] !leading-[10px] !font-medium", type: "error", impact: "high", rounded: false, label: this.badge })), this.icon && (index.h("span", { key: '9583d93f59208d353d58c14870112096b2844742', class: "material-icons text-icon-xl z-10 flex items-center justify-center p-2" }, this.icon)), this.label && (index.h("span", { key: '66811fdbc761898a94d8a7845fbd5f28930bcfdd', "data-name": "sidebar-menu-item-label", class: "z-10 truncate whitespace-nowrap" }, this.label))), index.h("slot", { key: '308e3e9cbc2bb8fa934570378347ebb5bd9d5b78', name: "menu-item-actions" }), index.h("div", { key: 'd8181f64986c1abc8a8c9dc61d491b8420c7f07a', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
};

exports.atui_sidebar_menuitem = AtuiSidebarMenuitemComponent;
//# sourceMappingURL=atui-sidebar-menuitem.entry.cjs.js.map

//# sourceMappingURL=atui-sidebar-menuitem.cjs.entry.js.map