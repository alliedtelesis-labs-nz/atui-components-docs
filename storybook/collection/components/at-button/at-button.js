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
     * When set, will display a loading spinner inside the button and hide all labels & icons.
     * The button never clears it: set it back to false when the work finishes.
     */
    in_progress = false;
    /**
     * Minimum time in ms the spinner stays visible once shown. If `in_progress` is cleared
     * sooner, the spinner stays up for the remainder.
     */
    spinner_delay_ms = 1000;
    el;
    /**
     * Emits when the button is clicked
     */
    atuiClick;
    isHoldingSpinner;
    spinnerShownAt;
    spinnerReleaseTimer;
    get isSpinnerVisible() {
        return this.in_progress || this.isHoldingSpinner;
    }
    holdSpinnerForMinimumDisplay(isInProgress) {
        if (isInProgress) {
            this.cancelSpinnerRelease();
            this.spinnerShownAt ??= Date.now();
            return;
        }
        if (this.spinnerShownAt === undefined) {
            return;
        }
        const remainingMs = this.spinnerShownAt + this.spinner_delay_ms - Date.now();
        if (remainingMs <= 0) {
            this.releaseSpinner();
            return;
        }
        this.isHoldingSpinner = true;
        this.spinnerReleaseTimer = setTimeout(() => this.releaseSpinner(), remainingMs);
    }
    cancelSpinnerRelease() {
        clearTimeout(this.spinnerReleaseTimer);
        this.spinnerReleaseTimer = undefined;
        this.isHoldingSpinner = false;
    }
    releaseSpinner() {
        this.cancelSpinnerRelease();
        if (!this.in_progress) {
            this.spinnerShownAt = undefined;
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
    componentWillLoad() {
        this.cancelSpinnerRelease();
        this.spinnerShownAt = this.in_progress ? Date.now() : undefined;
    }
    disconnectedCallback() {
        this.releaseSpinner();
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
        return (h(Host, { key: '6aa05bf28cd37e2dd8cbf27da37d7693b2c22a15', class: classname, role: "button", tabIndex: 0, "aria-disabled": this.disabled ? 'true' : undefined, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: 'd156f19d8d3ccb3a30edeba9f2bdf28e0fd66003', class: "z-20 flex h-full w-full items-center justify-center gap-4" }, this.isSpinnerVisible && (h("at-loading", { key: 'ad73e2e3c9008efc6b26f6540ec5b0f9ecf7fe05', "data-name": "button-spinner", class: "absolute", size: "sm", type: "current" })), !this.isSpinnerVisible && (h("slot", { key: '884802116901f0fb585ca458ea6ed1de5cf57a8d', name: "icon", "data-name": "button-icon" })), this.label && (h("span", { key: '63b6b24f831e4514abc285d8e58431f587a779ec', class: `leading-[16px] ${this.isSpinnerVisible ? 'invisible' : ''}`, "data-name": "button-label" }, this.label)), h("slot", { key: 'e66c9c7e91454c5d2967e2749f54421aea1621f6' }), !this.isSpinnerVisible && (h("slot", { key: '77d74bc42eabad3110031697be465a0c96a08b31', name: "icon_after", "data-name": "button-icon-right" }))), h("div", { key: 'cafb8822054d72f4f9793fa3e2da7066020e80e3', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
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
                    "text": "When set, will display a loading spinner inside the button and hide all labels & icons.\nThe button never clears it: set it back to false when the work finishes."
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
                    "text": "Minimum time in ms the spinner stays visible once shown. If `in_progress` is cleared\nsooner, the spinner stays up for the remainder."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "spinner_delay_ms",
                "defaultValue": "1000"
            }
        };
    }
    static get states() {
        return {
            "isHoldingSpinner": {}
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
    static get watchers() {
        return [{
                "propName": "in_progress",
                "methodName": "holdSpinnerForMinimumDisplay",
                "handlerOptions": {
                    "immediate": true
                }
            }];
    }
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
