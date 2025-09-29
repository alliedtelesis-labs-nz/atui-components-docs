import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';
import { c as classlist } from './p-Bfa-pAao.js';
import { d as defineCustomElement$2 } from './p-DUaiIRm3.js';
import { d as defineCustomElement$1 } from './p-BNT2yQBz.js';

const variantsConfig = {
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
};
const trackVariantsConfig = {
    variants: {
        disabled: {
            false: 'shadow-inset-xs cursor-pointer',
            true: 'shadow-inset-xs cursor-default',
        },
        active: {
            false: 'border-med bg-surface-2 border border-solid',
            true: 'bg-active-foreground/30 group-focus-within/switch:ring-active-foreground group-focus-within/switch:ring-1',
        },
    },
};
const thumbVariantsConfig = {
    variants: {
        active: {
            false: 'bg-disabled-dark translate-x-[-10px]',
            true: 'bg-active-foreground group-focus-within/switch:ring-active-foreground/30 translate-x-[10px] group-focus-within/switch:ring-[6px]',
        },
        disabled: {
            false: 'cursor-pointer',
            true: null,
        },
    },
};
const AtToggleSwitchComponent = /*@__PURE__*/ proxyCustomElement(class AtToggleSwitchComponent extends H {
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
        const getClassname = classlist('group/switch outline-active hover:bg-surface-1 focus:bg-surface-1 flex w-fit cursor-pointer items-center gap-8 rounded-full rounded-md p-8 outline-0 outline-none', variantsConfig);
        const classname = getClassname({
            disabled: this.disabled,
            labelPosition: this.label_position,
        });
        const getThumbClassname = classlist('material-icons text-icon-md absolute relative m-2 flex h-[16px] w-[16px] scale-1 items-center justify-center rounded-full text-center text-white select-none transition-all duration-300 ease-in-out', thumbVariantsConfig);
        const thumbClassname = getThumbClassname({
            active: this.value,
            disabled: this.disabled,
        });
        const getTrackClassname = classlist('absolute top-0 right-0 bottom-0 left-0 flex h-[20px] w-[40px] items-center justify-center rounded-full align-middle [transition:0.2s]', trackVariantsConfig);
        const trackClassname = getTrackClassname({
            disabled: this.disabled,
            active: this.value,
        });
        return (h(Host, { key: '2d9372275175988dc56799066a596f261bd7bc72', id: `${this.toggleId}-host`, role: "switch", "aria-labelledby": `${this.toggleId}-label`, class: classname, tabIndex: 0, onClick: () => this.inputEl.click(), onKeyDown: (event) => {
                if (event.key === ' ' || event.key === 'Enter') {
                    event.preventDefault();
                    this.inputEl.click();
                }
            } }, h("div", { key: '8f00756c3154468c25143b19533b4e42f59bdf18', class: "flex flex-col" }, h("slot", { key: '9a0e0123f8a91b184be803889e75791aa83f4c0f', name: "label" }), !!this.label && this.show_label && (h("at-form-label", { key: '81b4db9f5be672a390842adf7084926cb296512e', label: this.label, class: "pointer-events-none select-none", for: this.toggleId, id: `${this.toggleId}-label`, "data-name": "switch-label" })), this.hint_text && (h("span", { key: '18a5caea3ec7c586dd7a7ed9539b670ad02baa78', class: "text-light inline-block text-xs leading-tight", "data-name": "select-hint" }, this.hint_text))), h("div", { key: 'de0393cec1fa2f08bb1780d5538875cdb44267ec', class: "relative flex h-20 w-40" }, h("input", { key: '5b44fe94efcae79b3ff2088dcb23353f1154a5be', id: this.toggleId, class: "h-0 w-0 opacity-0", disabled: this.disabled, type: "checkbox", checked: this.value, tabIndex: -1, onChange: (e) => this.onToggle(e.target.checked), ref: (el) => (this.inputEl = el), "data-name": "switch-input" }), h("span", { key: '014b6d54914a2b8ff68e1fc8558c1dae87765b61', class: trackClassname }, h("span", { key: '39a5f122db885c00643ca61fd4a8b47b32cb48de', class: thumbClassname }, this.value ? 'check' : 'remove')))));
    }
}, [260, "at-toggle-switch", {
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
    const components = ["at-toggle-switch", "at-form-label", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-toggle-switch":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtToggleSwitchComponent);
            }
            break;
        case "at-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtToggleSwitchComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-BMrwxCv3.js.map

//# sourceMappingURL=p-BMrwxCv3.js.map