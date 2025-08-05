import { h, Host } from "@stencil/core";
import { cva } from "class-variance-authority";
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
/**
 * @category Form Controls
 * @description A toggle switch component for binary on/off selections. Provides accessible alternative to checkboxes with visual toggle behavior.
 */
export class AtuiToggleSwitchComponent {
    constructor() {
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
        return (h(Host, { key: '56d7b1dfc17f7be6f5a5b6f9201eced5bfa6eeb1', id: `${this.toggleId}-host`, role: "switch", "aria-labelledby": `${this.toggleId}-label`, class: classname, tabIndex: 0, onClick: () => this.inputEl.click(), onKeyDown: (event) => {
                if (event.key === ' ' || event.key === 'Enter') {
                    event.preventDefault();
                    this.inputEl.click();
                }
            } }, h("div", { key: 'd1ca851f3e9bece31bb2efe2cd058fe8fe784f3d', class: "flex flex-col" }, h("slot", { key: '02ff68397fbfdf48e9e1d487f2b054b94716fb8e', name: "label" }), !!this.label && this.show_label && (h("atui-form-label", { key: '348582d08b33a9081f24a5f1caee6f4caa0bb4a4', label: this.label, class: "pointer-events-none select-none", for: this.toggleId, id: `${this.toggleId}-label`, "data-name": "switch-label" })), this.hint_text && (h("span", { key: 'dcaca4e1a5f5c42a19d388b1a71d107a0b27019a', class: "inline-block text-xs leading-tight text-light", "data-name": "select-hint" }, this.hint_text))), h("div", { key: 'e82e97332c1c6acefdcaca7e698b0d628d3281db', class: "relative flex h-20 w-40" }, h("input", { key: 'c5553cdb4afbcfa7f87e2bb63f0a756db5623414', id: this.toggleId, class: "h-0 w-0 opacity-0", disabled: this.disabled, type: "checkbox", checked: this.value, tabIndex: -1, onChange: (e) => this.onToggle(e.target.checked), ref: (el) => (this.inputEl = el), "data-name": "switch-input" }), h("span", { key: '4aa0adf7758700637f9cd2387b373a9b4c59f017', class: trackClassname }, h("span", { key: '365077f2c2bd3879e22905f68826d905f0b2af45', class: thumbClassname }, this.value ? 'check' : 'remove')))));
    }
    static get is() { return "atui-toggle-switch"; }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Label displayed alongside the toggle."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "hint_text": {
                "type": "string",
                "attribute": "hint_text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Short description or validation hint if required."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "label_position": {
                "type": "string",
                "attribute": "label_position",
                "mutable": false,
                "complexType": {
                    "original": "LabelPosition",
                    "resolved": "\"after\" | \"before\"",
                    "references": {
                        "LabelPosition": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-toggle-switch/atui-toggle-switch.tsx",
                            "id": "src/components/atui-toggle-switch/atui-toggle-switch.tsx::LabelPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of the label, left or right of the toggle."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'before'"
            },
            "show_label": {
                "type": "boolean",
                "attribute": "show_label",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Show the toggle label."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Disable interaction with the toggle."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "value": {
                "type": "boolean",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set the toggles state."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "atuiChange",
                "name": "atuiChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits an event when toggled with `event.detail` being true if the switch is enabled"
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=atui-toggle-switch.js.map
