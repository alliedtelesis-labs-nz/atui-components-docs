import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DzGFYGds.js';
import { c as cva } from './p-CVoOBWGd.js';
import { d as defineCustomElement$2 } from './p-CMkuNDkD.js';
import { d as defineCustomElement$1 } from './p-Bkclp6SD.js';

const variants = cva('group/switch flex w-fit cursor-pointer items-center gap-8 rounded-full rounded-md p-8 outline-none outline-0 outline-active hover:bg-surface-1 focus:bg-surface-1', {
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
const trackVariants = cva('absolute bottom-0 left-0 right-0 top-0 flex h-[20px] w-[40px] items-center justify-center rounded-full align-middle [transition:0.2s]', {
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
const thumbVariants = cva('scale-1 material-icons absolute relative m-2 flex h-[16px] w-[16px] select-none items-center justify-center rounded-full text-center text-icon-md text-white ' +
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
const AtuiToggleSwitchComponent = /*@__PURE__*/ proxyCustomElement(class AtuiToggleSwitchComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
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
        return (h(Host, { key: '3add744b9ff5c61338e1434948a0a0516fb4e5c7', id: `${this.toggleId}-host`, role: "switch", "aria-labelledby": `${this.toggleId}-label`, class: classname, tabIndex: 0, onClick: () => this.inputEl.click(), onKeyDown: (event) => {
                if (event.key === ' ' || event.key === 'Enter') {
                    event.preventDefault();
                    this.inputEl.click();
                }
            } }, h("div", { key: '58c8d854889be05963a7cca47f9f1d46d548b698', class: "flex flex-col" }, h("slot", { key: '6a4ccaab4d25b2d7cb93d23e7842eefe6e45ed81', name: "label" }), !!this.label && this.show_label && (h("atui-form-label", { key: '9ab232bbe044f47c46210c2ec1da806b2a17ae69', label: this.label, class: "pointer-events-none select-none", for: this.toggleId, id: `${this.toggleId}-label`, "data-name": "switch-label" })), this.hint_text && (h("span", { key: '4affadca2f0013ad7fd085f6a02e14d3579c4c8e', class: "inline-block text-xs leading-tight text-light", "data-name": "select-hint" }, this.hint_text))), h("div", { key: '7ba893950624c6f6a83a5f9fa3c9fe828328d4f7', class: "relative flex h-20 w-40" }, h("input", { key: '3ed414d0e39b17dd2692141d9b4b20af02e579d3', id: this.toggleId, class: "h-0 w-0 opacity-0", disabled: this.disabled, type: "checkbox", checked: this.value, tabIndex: -1, onChange: (e) => this.onToggle(e.target.checked), ref: (el) => (this.inputEl = el), "data-name": "switch-input" }), h("span", { key: '87d4cb268876cede92f456dd70d4488ee0664d3d', class: trackClassname }, h("span", { key: 'decc698d8c36204efafe6daa0dab92abd1801eeb', class: thumbClassname }, this.value ? 'check' : 'remove')))));
    }
}, [260, "atui-toggle-switch", {
        "label": [1],
        "hint_text": [1],
        "label_position": [1],
        "show_label": [4],
        "disabled": [4],
        "value": [1028]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-toggle-switch", "atui-form-label", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-toggle-switch":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiToggleSwitchComponent);
            }
            break;
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiToggleSwitchComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-DgrBw4JA.js.map

//# sourceMappingURL=p-DgrBw4JA.js.map