'use strict';

var index = require('./index-nKeTsW5N.js');
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
    handleClick(event) {
        this.is_active = true;
        this.atuiClick.emit({
            originalEvent: event,
            componentType: 'atui-button-group-option',
            element: this.el,
        });
    }
    render() {
        const classname = variants({
            active: this.is_active,
            disabled: this.disabled,
            hostDisabled: this.host_disabled,
        });
        return (index.h("button", { key: 'c8b2b919e23a1a549aa75a43240f2dfcf0faf3b6', class: classname, role: "radio", tabindex: 0, "aria-checked": this.is_active, disabled: this.disabled, onClick: (event) => this.handleClick(event), "data-name": "button-group-option", type: "button" }, index.h("slot", { key: '71d62e074d2ceefbe025c62d1ada40f950c488f2', name: "icon" }), this.label));
    }
    get el() { return index.getElement(this); }
};

exports.atui_button_group_option = AtuiButtonGroupOption;
//# sourceMappingURL=atui-button-group-option.entry.cjs.js.map

//# sourceMappingURL=atui-button-group-option.cjs.entry.js.map