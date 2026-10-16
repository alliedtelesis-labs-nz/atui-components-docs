import { Host, h, } from "@stencil/core";
import { classlist } from "../../utils/classlist";
const buttonVariantsConfig = {
    variants: {
        disabled: {
            false: 'cursor-pointer',
            true: 'cursor-not-allowed opacity-30 grayscale-[1]',
        },
        size: {
            sm: 'h-button-sm py-button-sm px-button-sm',
            md: 'h-button-md py-button-md px-button-md',
            lg: 'h-button-lg py-button-lg px-button-lg',
        },
        type: {
            primary: 'bg-active-accent text-button-foreground-inv focus-visible:ring-active-glow focus-visible:ring',
            primaryOutline: 'border-active-accent text-active-accent focus-visible:ring-active-glow border border-solid bg-transparent focus-visible:ring',
            primaryText: 'text-active-accent focus-visible:ring-active-glow bg-transparent focus-visible:ring',
            secondary: 'bg-surface-2 text-foreground focus-visible:ring-active-glow focus-visible:ring',
            secondaryOutline: 'border-muted text-foreground focus-visible:ring-active-glow border border-solid bg-transparent focus-visible:ring',
            secondaryText: 'text-foreground focus-visible:ring-active-glow bg-transparent focus-visible:ring',
            destructive: 'bg-error-accent text-button-foreground-inv focus-visible:ring-error-glow focus-visible:ring',
            destructiveOutline: 'border-error-accent text-error-accent focus-visible:ring-error-glow border border-solid bg-transparent focus-visible:ring',
            destructiveText: 'text-error-accent focus-visible:ring-error-glow bg-transparent focus-visible:ring-2',
        },
    },
    defaultVariants: {
        size: 'lg',
        type: 'primary',
        disabled: false,
    },
};
const focusIndicatorVariantsConfig = {
    variants: {
        type: {
            primary: 'group-hover:bg-surface-overlay/30 group-active:bg-active-accent/70',
            primaryOutline: 'group-hover:bg-active-accent/10 group-active:bg-active-accent/20',
            primaryText: 'group-hover:bg-active-accent/10 group-active:bg-active-accent/20',
            secondary: 'group-hover:bg-surface-overlay/10 group-active:bg-surface-2/20',
            secondaryOutline: 'group-hover:bg-surface-overlay/10 group-active:bg-surface-2/20',
            secondaryText: 'group-hover:bg-surface-overlay/10 group-active:bg-surface-2/20',
            destructive: 'group-hover:bg-surface-overlay/30 group-active:bg-error-accent/70',
            destructiveOutline: 'group-hover:bg-error-accent/10 group-active:bg-error-accent/20',
            destructiveText: 'group-hover:bg-error-accent/10 group-active:bg-error-accent/20',
        },
    },
};
// Note: iconVariantsConfig was unused; removed to satisfy TS noUnusedLocals
const spinnerColourPerType = {
    primary: 'default',
    primaryOutline: 'secondary',
    primaryText: 'secondary',
    secondary: 'secondary',
    secondaryOutline: 'secondary',
    secondaryText: 'secondary',
    destructive: 'default',
    destructiveOutline: 'error',
    destructiveText: 'error',
};
/**
 * @category Actions
 * @description A versatile button component for user interactions with multiple styling variants, sizes, and loading states. Supports icons, custom content through slots, and accessibility features.
 * @slot icon - Carbon icon placed before the label
 * @slot icon_after - Carbon icon placed after the label
 * @slot - Placed after the label, but before the icon_after. Can be used as a replacement for the label prop. Raw text should be wrapped in a `<span>` so CSS icon-only detection works correctly.
 */
export class AtButtonComponent {
    /**
     * If set, will request submit from the closest form element when clicked
     */
    submit = false;
    /**
     * Theme of the button. Default primary
     */
    type = 'primary';
    /**
     * Size of the button
     */
    size = 'lg';
    /**
     * Label to be displayed within the button
     */
    label;
    /**
     * When set the button is styled as disabled and ignores clicks, Enter and Space. It stays
     * focusable and hoverable so an `at-tooltip` on it can say why it is disabled.
     */
    disabled = false;
    /**
     * When set, will display a loading spinner inside the button and hide all labels & icons
     */
    in_progress = false;
    /**
     * Delay period on spinner
     */
    spinner_delay_ms = 1000;
    el;
    /**
     * Emits when the button is clicked
     */
    atuiClick;
    canHideSpinner = true;
    get spinnerColour() {
        return spinnerColourPerType[this.type];
    }
    hideSpinnerIfAfterMinimumDisplayPeriod() {
        if (this.in_progress && this.canHideSpinner) {
            this.in_progress = false;
        }
    }
    setSpinner() {
        if (this.in_progress) {
            this.canHideSpinner = false;
            setTimeout(() => {
                this.canHideSpinner = true;
                this.hideSpinnerIfAfterMinimumDisplayPeriod();
            }, this.spinner_delay_ms);
        }
        else {
            this.hideSpinnerIfAfterMinimumDisplayPeriod();
        }
    }
    blockClickWhileDisabled(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
    blockActivationKeysWhileDisabled(event) {
        if (this.disabled && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
    handleClick(event) {
        this.atuiClick.emit({
            originalEvent: event,
            componentType: 'at-button',
        });
        if (this.submit) {
            this.el.closest('form')?.requestSubmit();
        }
    }
    handleKeyDown(event) {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            this.atuiClick.emit({
                originalEvent: event,
                componentType: 'at-button',
                element: this.el,
            });
            if (this.submit) {
                this.el.closest('form')?.requestSubmit();
            }
        }
    }
    componentWillUpdate() {
        this.setSpinner();
    }
    render() {
        const classname = classlist('at-button group relative box-border flex inline-flex items-center justify-center gap-4 overflow-hidden rounded-button font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out outline-none focus:outline-none', buttonVariantsConfig)({
            disabled: this.disabled,
            size: this.size,
            type: this.type,
        });
        const focusIndicatorClassname = classlist('pointer-events-none absolute top-0 left-0 z-10 h-full w-full transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out', focusIndicatorVariantsConfig)({
            type: this.disabled ? undefined : this.type,
        });
        return (h(Host, { key: '86d3c9debdc20068d8a887174fa13b3cde4126a1', class: classname, role: "button", tabIndex: 0, "aria-disabled": this.disabled ? 'true' : undefined, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: '04ad98c5fd65177e9f48ac07bd87f3daa9b5f109', class: "z-20 flex h-full w-full items-center justify-center gap-4" }, this.in_progress && (h("at-loading", { key: '0f149616c7b1bdadb16d6bb65a897cc652ba987e', class: "absolute", size: "sm", type: this.spinnerColour })), !this.in_progress && (h("slot", { key: '77ccfa2d4c0f600468f6b8585c3b251eff2cd7e1', name: "icon", "data-name": "button-icon" })), this.label && (h("span", { key: 'e5600616df90b18c910550ed15a197b60bc33d61', class: `leading-[16px] ${this.in_progress ? 'invisible' : ''}`, "data-name": "button-label" }, this.label)), h("slot", { key: 'f5d0279ee121b4b081f7f25fca436b5177885c5f' }), !this.in_progress && (h("slot", { key: '1555873ea91b804decd951ca2fc778bc8f2d7bfc', name: "icon_after", "data-name": "button-icon-right" }))), h("div", { key: '897e6273eba7289e01edc922054ccd7fb577415a', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
    static get is() { return "at-button"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-button.css"]
        };
    }
    static get properties() {
        return {
            "submit": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If set, will request submit from the closest form element when clicked"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "submit",
                "defaultValue": "false"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtButtonType",
                    "resolved": "\"destructive\" | \"destructiveOutline\" | \"destructiveText\" | \"primary\" | \"primaryOutline\" | \"primaryText\" | \"secondary\" | \"secondaryOutline\" | \"secondaryText\"",
                    "references": {
                        "AtButtonType": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-button/at-button.tsx",
                            "id": "src/components/at-button/at-button.tsx::AtButtonType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Theme of the button. Default primary"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'primary'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtButtonSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "AtButtonSize": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-button/at-button.tsx",
                            "id": "src/components/at-button/at-button.tsx::AtButtonSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'lg'"
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Label to be displayed within the button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "When set the button is styled as disabled and ignores clicks, Enter and Space. It stays\nfocusable and hoverable so an `at-tooltip` on it can say why it is disabled."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "in_progress": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "When set, will display a loading spinner inside the button and hide all labels & icons"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "in_progress",
                "defaultValue": "false"
            },
            "spinner_delay_ms": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Delay period on spinner"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "spinner_delay_ms",
                "defaultValue": "1000"
            }
        };
    }
    static get events() {
        return [{
                "method": "atuiClick",
                "name": "atuiClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when the button is clicked"
                },
                "complexType": {
                    "original": "AtEvent",
                    "resolved": "AtEvent",
                    "references": {
                        "AtEvent": {
                            "location": "import",
                            "path": "../../types/events",
                            "id": "src/types/events.ts::AtEvent",
                            "referenceLocation": "AtEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "click",
                "method": "blockClickWhileDisabled",
                "target": undefined,
                "capture": true,
                "passive": false
            }, {
                "name": "keydown",
                "method": "blockActivationKeysWhileDisabled",
                "target": undefined,
                "capture": true,
                "passive": false
            }];
    }
}
