import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';
import { c as classlist } from './p-Bfa-pAao.js';
import { d as defineCustomElement$2 } from './p-C65WlsXe.js';
import { d as defineCustomElement$1 } from './p-BtsG-JMI.js';

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
        return (h(Host, { key: 'e1380a33caa7c4ce3bc99dd4bbd5fb1eb4c92674', id: `${this.toggleId}-host`, role: "switch", "aria-labelledby": `${this.toggleId}-label`, class: classname, tabIndex: 0, onClick: () => this.inputEl.click(), onKeyDown: (event) => {
                if (event.key === ' ' || event.key === 'Enter') {
                    event.preventDefault();
                    this.inputEl.click();
                }
            } }, h("div", { key: 'c39c20c4b8306290130d927a81e8d4141f6b55bb', class: "flex flex-col" }, h("slot", { key: '4f109a38ebbfe2c39713889d4f12f45b835cc309', name: "label" }), !!this.label && this.show_label && (h("atui-form-label", { key: '5565c2d528972e8aa497c5475bd7f8ae20df9934', label: this.label, class: "pointer-events-none select-none", for: this.toggleId, id: `${this.toggleId}-label`, "data-name": "switch-label" })), this.hint_text && (h("span", { key: 'e0ae71d9049e70d8e80941c8af4fb05a60ab98d9', class: "text-light inline-block text-xs leading-tight", "data-name": "select-hint" }, this.hint_text))), h("div", { key: 'd3b8c6289999a56f7b09e523c75da79f382dd071', class: "relative flex h-20 w-40" }, h("input", { key: 'de51429de5a8621eab805af8437dec6a56cf258f', id: this.toggleId, class: "h-0 w-0 opacity-0", disabled: this.disabled, type: "checkbox", checked: this.value, tabIndex: -1, onChange: (e) => this.onToggle(e.target.checked), ref: (el) => (this.inputEl = el), "data-name": "switch-input" }), h("span", { key: '0a952b499a4f596fab0d1c872bc9c766f6ff2ea2', class: trackClassname }, h("span", { key: '17453211afeeb1b47c0c92a6d79ea38cf3989308', class: thumbClassname }, this.value ? 'check' : 'remove')))));
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
//# sourceMappingURL=p-gfJlUv27.js.map

//# sourceMappingURL=p-gfJlUv27.js.map