'use strict';

var index = require('./index-DSZ-ppzm.js');
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
        return (index.h(index.Host, { key: '3add744b9ff5c61338e1434948a0a0516fb4e5c7', id: `${this.toggleId}-host`, role: "switch", "aria-labelledby": `${this.toggleId}-label`, class: classname, tabIndex: 0, onClick: () => this.inputEl.click(), onKeyDown: (event) => {
                if (event.key === ' ' || event.key === 'Enter') {
                    event.preventDefault();
                    this.inputEl.click();
                }
            } }, index.h("div", { key: '58c8d854889be05963a7cca47f9f1d46d548b698', class: "flex flex-col" }, index.h("slot", { key: '6a4ccaab4d25b2d7cb93d23e7842eefe6e45ed81', name: "label" }), !!this.label && this.show_label && (index.h("atui-form-label", { key: '9ab232bbe044f47c46210c2ec1da806b2a17ae69', label: this.label, class: "pointer-events-none select-none", for: this.toggleId, id: `${this.toggleId}-label`, "data-name": "switch-label" })), this.hint_text && (index.h("span", { key: '4affadca2f0013ad7fd085f6a02e14d3579c4c8e', class: "inline-block text-xs leading-tight text-light", "data-name": "select-hint" }, this.hint_text))), index.h("div", { key: '7ba893950624c6f6a83a5f9fa3c9fe828328d4f7', class: "relative flex h-20 w-40" }, index.h("input", { key: '3ed414d0e39b17dd2692141d9b4b20af02e579d3', id: this.toggleId, class: "h-0 w-0 opacity-0", disabled: this.disabled, type: "checkbox", checked: this.value, tabIndex: -1, onChange: (e) => this.onToggle(e.target.checked), ref: (el) => (this.inputEl = el), "data-name": "switch-input" }), index.h("span", { key: '87d4cb268876cede92f456dd70d4488ee0664d3d', class: trackClassname }, index.h("span", { key: 'decc698d8c36204efafe6daa0dab92abd1801eeb', class: thumbClassname }, this.value ? 'check' : 'remove')))));
    }
};

exports.atui_toggle_switch = AtuiToggleSwitchComponent;
//# sourceMappingURL=atui-toggle-switch.entry.cjs.js.map

//# sourceMappingURL=atui-toggle-switch.cjs.entry.js.map