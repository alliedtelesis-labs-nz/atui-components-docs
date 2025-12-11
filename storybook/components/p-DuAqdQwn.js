import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { c as classlist } from './p-COG8_R0C.js';
import { d as defineCustomElement$2 } from './p-CGXPhA5w.js';
import { d as defineCustomElement$1 } from './p-GavH1i81.js';

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
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    /**
     * Label displayed alongside the toggle.
     */
    label;
    /**
     * Short description or validation hint if required.
     */
    hint_text;
    /**
     * Position of the label, left or right of the toggle.
     */
    label_position = 'before';
    /**
     * Show the toggle label.
     */
    show_label = true;
    /**
     * Disable interaction with the toggle.
     */
    disabled;
    /**
     * Set the toggles state.
     */
    value = false;
    inputEl;
    toggleId = `toggle-${Math.random().toString(36).substring(2, 11)}`;
    /**
     * Emits an event when toggled with `event.detail` being true if the switch is enabled
     */
    atuiChange;
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
        return (h(Host, { key: '0c57dd7b272ec00379aff60c1afa4d68e09001ef', id: `${this.toggleId}-host`, role: "switch", "aria-labelledby": `${this.toggleId}-label`, class: classname, tabIndex: 0, onClick: () => this.inputEl.click(), onKeyDown: (event) => {
                if (event.key === ' ' || event.key === 'Enter') {
                    event.preventDefault();
                    this.inputEl.click();
                }
            } }, h("div", { key: 'a865f1447b059526c7fcf3a4aad3b567502fe53c', class: "flex flex-col" }, h("slot", { key: '80f3cf68feea55d60bc486cfa1cffb3f5f9954fa', name: "label" }), !!this.label && this.show_label && (h("at-form-label", { key: 'f8076551bcc3f3c3544c95f51772766b9a38319a', label: this.label, class: "pointer-events-none select-none", for: this.toggleId, id: `${this.toggleId}-label`, "data-name": "switch-label" })), this.hint_text && (h("span", { key: 'b2858baec55854b9fcffe2625204fe0fb8009b2a', class: "text-light inline-block text-xs leading-tight", "data-name": "select-hint" }, this.hint_text))), h("div", { key: '958db12e9f14bd03364ffcffbfc1878b85cae9c0', class: "relative flex h-20 w-40" }, h("input", { key: '9e02b6ebd7b7a60123de5ca47ae419ec2e2301dc', id: this.toggleId, class: "h-0 w-0 opacity-0", disabled: this.disabled, type: "checkbox", checked: this.value, tabIndex: -1, onChange: (e) => this.onToggle(e.target.checked), ref: (el) => (this.inputEl = el), "data-name": "switch-input" }), h("span", { key: '6d7286fef72bef7aaf59e0844e7ff0fd0b2a7ba3', class: trackClassname }, h("span", { key: '67b6354d3e8ab1a499cf9acff781f6916326ade8', class: thumbClassname }, this.value ? 'check' : 'remove')))));
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
//# sourceMappingURL=p-DuAqdQwn.js.map

//# sourceMappingURL=p-DuAqdQwn.js.map