import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-8kq1vl9Q.js';
import { c as cva } from './index-CVoOBWGd.js';

const variants = cva('group relative box-border flex inline-flex cursor-pointer items-center justify-center gap-4 overflow-hidden whitespace-nowrap rounded-[0.3rem] bg-transparent text-button font-medium capitalize text-foreground outline-none duration-150 ease-in-out hover:bg-surface-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-active-foreground/30 group-focus:bg-slate-200', {
    variants: {
        disabled: {
            false: null,
            true: 'pointer-events-none opacity-30 grayscale-[1]',
        },
        size: {
            sm: 'px-4 py-4',
            md: 'px-8 py-[6px]',
            lg: 'px-8 py-8',
        },
    },
});
const AtuiTreeItemComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiClick = createEvent(this, "atuiClick", 7);
        /**
         * Size of the button
         */
        this.size = 'lg';
        /**
         * Determines whether to add the arrow indicator icon
         */
        this.has_children = false;
        /**
         * Determines the direction of the indicator arrow
         */
        this.selected = false;
        /**
         * When set the button's styling will change and will no longer be interactive
         */
        this.disabled = false;
    }
    handleClick(event) {
        this.atuiClick.emit(event);
    }
    handleKeyDown(event) {
        console.log('KeyDown:', event.key);
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            console.log('dsds');
            this.atuiClick.emit(event);
        }
    }
    render() {
        var _a;
        const classname = variants({
            disabled: this.disabled,
            size: this.size,
        });
        const depth = (_a = this.depth) !== null && _a !== void 0 ? _a : 0;
        const hasChildren = !!this.has_children;
        const indent = hasChildren ? `${depth * 20}px` : `${depth * 20 + 20}px`;
        return (h(Host, { key: '4fbe272437b6bac249b7d60c02ddf2dce31b67a6', class: classname, role: "button", tabIndex: 0, "aria-disabled": this.disabled, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: '6ca9a91c1c39d75f384fe44f0377d6e616b68092', class: "z-20 flex h-full w-full items-center justify-between gap-4", style: { paddingLeft: indent } }, h("div", { key: '333b58e5791cdace464124b6db78ab0fa35500a1', class: "flex gap-4" }, this.has_children && (h("span", { key: '4abcb310609d42ec4938d53c8019aa3f0faf9f45', class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "tree-item-indicator" }, this.selected
            ? 'keyboard_arrow_down'
            : 'keyboard_arrow_right')), this.label && (h("span", { key: '098203f8b124787df2d3bc6d053b0e32edce289c', class: "leading-[16px]", "data-name": "tree-item-label" }, this.label))), h("slot", { key: '04fb771185250efc4c2a80ee59862b544b76fbf8' })), h("div", { key: 'cf546e828191d91676187355ad1491a5cb1bae7a', "data-name": "focus-indicator", role: "presentation", class: "pointer-events-none absolute left-0 top-0 z-10 h-full w-full transition-colors duration-300 ease-in-out" })));
    }
    get el() { return getElement(this); }
};

export { AtuiTreeItemComponent as atui_tree_item };
//# sourceMappingURL=atui-tree-item.entry.js.map

//# sourceMappingURL=atui-tree-item.entry.js.map