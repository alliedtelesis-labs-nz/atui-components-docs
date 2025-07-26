import { Host, h, } from "@stencil/core";
import { cva } from "class-variance-authority";
const variants = cva('group relative box-border flex inline-flex cursor-pointer items-center justify-center gap-4 overflow-hidden whitespace-nowrap rounded-[0.3rem] text-button font-medium capitalize outline-none duration-150 ease-in-out focus:outline-none', {
    variants: {
        disabled: {
            false: null,
            true: 'pointer-events-none opacity-30 grayscale-[1]',
        },
        size: {
            sm: 'py-4',
            md: 'py-[6px]',
            lg: 'py-8',
        },
        type: {
            primary: 'bg-active-foreground text-impact focus-visible:ring-2 focus-visible:ring-active-foreground/30 group-hover:bg-active-foreground/90 group-focus:bg-active-foreground/80',
            primaryOutline: 'border border-solid border-primary-foreground bg-transparent text-active-foreground focus-visible:ring-2 focus-visible:ring-active-foreground/30 group-hover:bg-active-foreground/10 group-focus:bg-active-foreground/20',
            primaryText: 'bg-transparent text-active-foreground focus-visible:ring-2 focus-visible:ring-active-foreground/30 group-hover:bg-active-foreground/10 group-focus:bg-active-foreground/20',
            secondary: 'bg-slate-600 text-impact focus-visible:ring-2 focus-visible:ring-active-foreground/30 group-hover:bg-slate-700 group-focus:bg-slate-800',
            secondaryOutline: 'border border-solid border-dark bg-transparent text-foreground focus-visible:ring-2 focus-visible:ring-active-foreground/30 group-hover:bg-slate-100 group-focus:bg-slate-200',
            secondaryText: 'bg-transparent text-foreground focus-visible:ring-2 focus-visible:ring-active-foreground/30 group-hover:bg-slate-100 group-focus:bg-slate-200',
            destructive: 'bg-destructive-foreground text-impact focus-visible:ring-2 focus-visible:ring-active-foreground/30 group-hover:bg-destructive-foreground/90 group-focus:bg-destructive-foreground/80',
            destructiveOutline: 'border border-solid border-destructive-foreground bg-transparent text-destructive-foreground focus-visible:ring-2 focus-visible:ring-destructive-foreground/30 group-hover:bg-destructive-foreground/10 group-focus:bg-destructive-foreground/20',
            destructiveText: 'bg-transparent text-destructive-foreground focus-visible:ring-2 focus-visible:ring-destructive-foreground/30 group-hover:bg-destructive-foreground/10 group-focus:bg-destructive-foreground/20',
        },
        hasLabel: {
            true: null,
            false: null,
        },
    },
    compoundVariants: [
        {
            size: 'sm',
            hasLabel: false,
            class: 'px-4',
        },
        {
            size: 'sm',
            hasLabel: true,
            class: 'px-8',
        },
        {
            size: 'md',
            hasLabel: false,
            class: 'px-[6px]',
        },
        {
            size: 'md',
            hasLabel: true,
            class: 'px-8',
        },
        {
            size: 'lg',
            hasLabel: false,
            class: 'px-8',
        },
        {
            size: 'lg',
            hasLabel: true,
            class: 'px-[12px]',
        },
    ],
    defaultVariants: {
        size: 'lg',
        type: 'primary',
        hasLabel: true,
        disabled: false,
    },
});
const focusIndicatorVariants = cva('pointer-events-none absolute left-0 top-0 z-10 h-full w-full transition-colors duration-300 ease-in-out', {
    variants: {
        type: {
            primary: 'group-hover:bg-blue-900/30 group-active:bg-blue-900/70',
            primaryOutline: 'group-hover:bg-active-foreground/10 group-active:bg-active-foreground/20',
            primaryText: 'group-hover:bg-active-foreground/10 group-active:bg-active-foreground/20',
            secondary: 'group-hover:bg-slate-900/10 group-active:bg-slate-900/20',
            secondaryOutline: 'group-hover:bg-slate-500/10 group-active:bg-slate-500/20',
            secondaryText: 'group-hover:bg-slate-500/10 group-active:bg-slate-500/20',
            destructive: 'group-hover:bg-red-900/30 group-active:bg-red-900/70',
            destructiveOutline: 'group-hover:bg-destructive-foreground/10 group-active:bg-destructive-foreground/20',
            destructiveText: 'group-hover:bg-destructive-foreground/10 group-active:bg-destructive-foreground/20',
        },
    },
});
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
 *
 * @slot - Placed after the label, but before the icon_right. Can be used as a replacement for the label prop.
 */
export class AtuiButtonComponent {
    constructor() {
        /**
         * If set, will request submit from the closest form element when clicked
         */
        this.submit = false;
        /**
         * Styling of the button
         */
        this.type = 'primary';
        /**
         * Size of the button
         */
        this.size = 'lg';
        /**
         * When set the button's styling will change and will no longer be interactive
         */
        this.disabled = false;
        /**
         * When set, will display a loading spinner inside the button and hide all labels & icons
         */
        this.in_progress = false;
        /**
         * Delay period on spinner
         */
        this.spinner_delay_ms = 1000;
        this.canHideSpinner = true;
    }
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
    handleClick(event) {
        this.atuiClick.emit({
            originalEvent: event,
            componentType: 'atui-button',
        });
        if (this.submit) {
            this.el.closest('form').requestSubmit();
        }
    }
    handleKeyDown(event) {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            this.atuiClick.emit({
                originalEvent: event,
                componentType: 'atui-button',
                element: this.el,
            });
            if (this.submit) {
                this.el.closest('form').requestSubmit();
            }
        }
    }
    componentWillUpdate() {
        this.setSpinner();
    }
    render() {
        const classname = variants({
            disabled: this.disabled,
            size: this.size,
            type: this.type,
            hasLabel: !!this.label,
        });
        const focusIndicatorClassname = focusIndicatorVariants({
            type: this.type,
        });
        return (h(Host, { key: 'af899a6b76c37a7d0a005c3881473c60ab3b76f7', class: classname, role: "button", tabIndex: 0, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: '8536d8a42c8a608ba2c22e1d30ae6ca51fe86f47', class: "z-20 flex h-full w-full items-center justify-center gap-4" }, this.in_progress && (h("atui-loading", { key: '306a1491c4477ad5afda4ed7f1df4fa79689334e', class: "absolute", size: "sm", type: this.spinnerColour })), this.icon && (h("span", { key: 'be43bec2cf5fb6e2cd56a323d5c13820cd050103', class: `material-icons h-16 w-16 text-[16px] leading-[16px] ${this.in_progress ? 'invisible' : 'visible'}`, "data-name": "button-icon" }, this.icon)), this.label && (h("span", { key: 'c8126c8c59e5fe682a4494c6b0cd27292f57cda9', class: `leading-[16px] ${this.in_progress ? 'invisible' : 'visible'}`, "data-name": "button-label" }, this.label)), h("slot", { key: '9792446d993165a5cbbe4df006a27e3baeadb642' }), this.icon_right && (h("span", { key: 'ba8e9e319cc47aaf1ec636dcd5c5a9c55c4c6405', class: `material-icons h-16 w-16 text-[16px] leading-[16px] ${this.in_progress ? 'invisible w-0' : 'visible'}`, "data-name": "button-icon-right" }, this.icon_right))), h("div", { key: 'ddb0084d0f5d62c51215f6f562b66a28d52c9ca2', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
    static get is() { return "atui-button"; }
    static get properties() {
        return {
            "submit": {
                "type": "boolean",
                "attribute": "submit",
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
                "defaultValue": "false"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "ButtonType",
                    "resolved": "\"destructive\" | \"destructiveOutline\" | \"destructiveText\" | \"primary\" | \"primaryOutline\" | \"primaryText\" | \"secondary\" | \"secondaryOutline\" | \"secondaryText\"",
                    "references": {
                        "ButtonType": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-button/atui-button.tsx",
                            "id": "src/components/atui-button/atui-button.tsx::ButtonType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Styling of the button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'primary'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "ButtonSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "ButtonSize": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-button/atui-button.tsx",
                            "id": "src/components/atui-button/atui-button.tsx::ButtonSize"
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
                "defaultValue": "'lg'"
            },
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Label to be displayed within the button"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "When set the button's styling will change and will no longer be interactive"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                    "text": "Material icon to be displayed before the label within the button"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "icon_right": {
                "type": "string",
                "attribute": "icon_right",
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
                    "text": "Material icon to be displayed after the label within the button"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "in_progress": {
                "type": "boolean",
                "attribute": "in_progress",
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
                "defaultValue": "false"
            },
            "spinner_delay_ms": {
                "type": "number",
                "attribute": "spinner_delay_ms",
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
                    "original": "AtuiEvent",
                    "resolved": "AtuiEvent",
                    "references": {
                        "AtuiEvent": {
                            "location": "import",
                            "path": "../../types/events",
                            "id": "src/types/events.ts::AtuiEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-button.js.map
