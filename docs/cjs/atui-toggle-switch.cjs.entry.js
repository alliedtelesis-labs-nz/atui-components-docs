'use strict';

var index = require('./index-DGivrgtr.js');
var index$1 = require('./index-palgSxc9.js');

const variants = index$1.cva('group/switch flex w-fit cursor-pointer items-center gap-8 rounded-full rounded-md p-8 outline-none outline-0 outline-active hover:bg-surface-1 focus:bg-surface-1', {
    variants: {
        disabled: {
            false: null,
            true: 'pointer-events-none opacity-50 grayscale-[1]',
        },
        labelPosition: {
            before: 'flex-row',
            after: 'flex-row-reverse',
        },
    },
});
const trackVariants = index$1.cva('absolute bottom-0 left-0 right-0 top-0 flex h-[20px] w-[40px] items-center justify-center rounded-full align-middle [transition:0.2s]', {
    variants: {
        disabled: {
            false: 'shadow-inset-xs cursor-pointer',
            true: 'shadow-inset-xs cursor-default',
        },
        active: {
            false: 'border border-solid border-med bg-surface-2',
            true: 'bg-active-foreground/30 group-focus-within/switch:ring-1 group-focus-within/switch:ring-active-foreground',
        },
    },
});
const thumbVariants = index$1.cva('scale-1 material-icons absolute relative m-2 flex h-[16px] w-[16px] select-none items-center justify-center rounded-full text-center text-icon-md text-white ' +
    'transition-all duration-300 ease-in-out', {
    variants: {
        active: {
            false: 'translate-x-[-10px] bg-disabled-dark',
            true: 'translate-x-[10px] bg-active-foreground group-focus-within/switch:ring-[6px] group-focus-within/switch:ring-active-foreground/30',
        },
        disabled: {
            false: 'cursor-pointer',
            true: null,
        },
    },
});
const AtuiToggleSwitchComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
        /**
         * Position of the label, left or right of the toggle.
         */
        this.label_position = 'before';
        /**
         * Show the toggle label.
         */
        this.show_label = true;
        /**
         * Set the toggles state.
         */
        this.value = false;
        this.toggleId = `toggle-${Math.random().toString(36).substring(2, 11)}`;
    }
    onToggle(change) {
        this.value = change;
        this.atuiChange.emit(change);
    }
    render() {
        const classname = variants({
            disabled: this.disabled,
            labelPosition: this.label_position,
        });
        const thumbClassname = thumbVariants({
            active: this.value,
            disabled: this.disabled,
        });
        const trackClassname = trackVariants({
            active: this.value,
            disabled: this.disabled,
        });
        return (index.h(index.Host, { key: '6db7379c6ca43e86d281bbe6efbf2216c402b489', id: `${this.toggleId}-host`, role: "switch", "aria-labelledby": `${this.toggleId}-label`, class: classname, tabIndex: 0, onClick: () => this.inputEl.click(), onKeyDown: (event) => {
                if (event.key === ' ' || event.key === 'Enter') {
                    event.preventDefault();
                    this.inputEl.click();
                }
            } }, index.h("div", { key: '4c1d973f1a24509b81d69e832fc4e8a00a12bf68', class: "flex flex-col" }, index.h("slot", { key: '91b19aaf4653d72d9909eb92dcfa58458eca914b', name: "label" }), !!this.label && this.show_label && (index.h("atui-form-label", { key: 'ec95f864a1eeb984e2816d00b3a22e368ec7b111', label: this.label, class: "pointer-events-none select-none", for: this.toggleId, id: `${this.toggleId}-label`, "data-name": "switch-label" })), this.hint_text && (index.h("span", { key: '4353ace32ae39bccd2cb411ddc8b343dca79a0f0', class: "inline-block text-xs leading-tight text-light", "data-name": "select-hint" }, this.hint_text))), index.h("div", { key: '19ee5c9e642be6e1d3cb2035e5b0472d7ff12fa8', class: "relative flex h-20 w-40" }, index.h("input", { key: '10be723c4af9c975eb84040c87cbf14e5a2ad4d7', id: this.toggleId, class: "h-0 w-0 opacity-0", disabled: this.disabled, type: "checkbox", checked: this.value, tabIndex: -1, onChange: (e) => this.onToggle(e.target.checked), ref: (el) => (this.inputEl = el), "data-name": "switch-input" }), index.h("span", { key: 'f768175f25bd097fb240aaed46bb15222085014d', class: trackClassname }, index.h("span", { key: 'a2ef9a6573f925ae36aee7327b781b19a2fbf4d9', class: thumbClassname }, this.value ? 'check' : 'remove')))));
    }
};

exports.atui_toggle_switch = AtuiToggleSwitchComponent;
//# sourceMappingURL=atui-toggle-switch.entry.cjs.js.map

//# sourceMappingURL=atui-toggle-switch.cjs.entry.js.map