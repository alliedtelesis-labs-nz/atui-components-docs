'use strict';

var index = require('./index-DGivrgtr.js');
var index$1 = require('./index-palgSxc9.js');

const variants = index$1.cva('relative flex h-[30px] items-center gap-4 rounded-md border border-solid border-transparent px-12 py-8 font-normal leading-none outline-none transition-colors duration-300 ease-in-out focus-visible:border-active-foreground focus-visible:ring-2 focus-visible:ring-active-foreground/40 focus-visible:ring-offset-0', {
    variants: {
        active: {
            true: 'bg-active-foreground/15 text-active',
            false: 'text-dark',
        },
        disabled: {
            true: 'pointer-events-none text-disabled hover:text-disabled',
            false: null,
        },
        hostDisabled: {
            true: 'pointer-events-none text-disabled hover:text-disabled',
            false: null,
        },
    },
});
const AtuiButtonGroupOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiClick = index.createEvent(this, "atuiClick", 7);
    }
    async componentDidLoad() {
        this.provider = this.el.closest('atui-button-group');
        this.host_disabled = this.provider.disabled;
    }
    handleClick() {
        this.is_active = true;
        this.atuiClick.emit();
    }
    render() {
        const classname = variants({
            active: this.is_active,
            disabled: this.disabled,
            hostDisabled: this.host_disabled,
        });
        return (index.h("button", { key: '31cd69d0f0b35014b15df3a0ed5e63ea79da6eae', class: classname, role: "radio", tabindex: 0, "aria-checked": this.is_active, disabled: this.disabled, onClick: () => this.handleClick(), "data-name": "button-group-option", type: "button" }, index.h("slot", { key: '6957f9c1c0b052f1c027a3fa6718cf4c720e65e6', name: "icon" }), this.label));
    }
    get el() { return index.getElement(this); }
};

exports.atui_button_group_option = AtuiButtonGroupOption;
//# sourceMappingURL=atui-button-group-option.entry.cjs.js.map

//# sourceMappingURL=atui-button-group-option.cjs.entry.js.map