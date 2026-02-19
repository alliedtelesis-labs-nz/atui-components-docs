import { Host, h, } from "@stencil/core";
import { classlist } from "../../utils/classlist";
const buttonVariantsConfig = {
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
            primary: 'bg-active-foreground text-impact focus-visible:ring-active-foreground/40 group-hover:bg-active-foreground/90 group-focus:bg-active-foreground/80 focus-visible:ring-2',
            primaryOutline: 'border-primary-foreground text-active-foreground focus-visible:ring-active-foreground/40 group-hover:bg-active-foreground/10 group-focus:bg-active-foreground/20 border border-solid bg-transparent focus-visible:ring-2',
            primaryText: 'text-active-foreground focus-visible:ring-active-foreground/40 group-hover:bg-active-foreground/10 group-focus:bg-active-foreground/20 bg-transparent focus-visible:ring-2',
            secondary: 'text-foreground focus-visible:ring-active-foreground/40 bg-slate-100 focus-visible:ring-2',
            secondaryOutline: 'border-dark text-foreground focus-visible:ring-active-foreground/40 border border-solid bg-transparent group-hover:bg-slate-100 group-focus:bg-slate-200 focus-visible:ring-2',
            secondaryText: 'text-foreground focus-visible:ring-active-foreground/40 bg-transparent group-hover:bg-slate-100 group-focus:bg-slate-200 focus-visible:ring-2',
            destructive: 'bg-destructive-foreground text-impact focus-visible:ring-active-foreground/40 group-hover:bg-destructive-foreground/90 group-focus:bg-destructive-foreground/80 focus-visible:ring-2',
            destructiveOutline: 'border-destructive-foreground text-destructive-foreground focus-visible:ring-destructive-foreground/30 group-hover:bg-destructive-foreground/10 group-focus:bg-destructive-foreground/20 border border-solid bg-transparent focus-visible:ring-2',
            destructiveText: 'text-destructive-foreground focus-visible:ring-destructive-foreground/30 group-hover:bg-destructive-foreground/10 group-focus:bg-destructive-foreground/20 bg-transparent focus-visible:ring-2',
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
};
const focusIndicatorVariantsConfig = {
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
 *
 * @slot - Placed after the label, but before the icon_right. Can be used as a replacement for the label prop.
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
     * When set the button's styling will change and will no longer be interactive
     */
    disabled = false;
    /**
     * Material icon to be displayed before the label within the button
     */
    icon;
    /**
     * Material icon to be displayed after the label within the button
     */
    icon_after;
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
    handleClick(event) {
        if (this.disabled) {
            return;
        }
        this.atuiClick.emit({
            originalEvent: event,
            componentType: 'at-button',
        });
        if (this.submit) {
            this.el.closest('form').requestSubmit();
        }
    }
    handleKeyDown(event) {
        if (this.disabled) {
            return;
        }
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            this.atuiClick.emit({
                originalEvent: event,
                componentType: 'at-button',
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
        const classname = classlist('at-button group text-button relative box-border flex inline-flex cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-[0.3rem] font-medium whitespace-nowrap capitalize duration-150 ease-in-out outline-none focus:outline-none', buttonVariantsConfig)({
            disabled: this.disabled,
            size: this.size,
            type: this.type,
            hasLabel: !!this.label,
        });
        const focusIndicatorClassname = classlist('pointer-events-none absolute top-0 left-0 z-10 h-full w-full transition-colors duration-300 ease-in-out', focusIndicatorVariantsConfig)({
            type: this.type,
        });
        return (h(Host, { key: 'ac9c033cffff5ad2224c0ed8a2513f01171ada3e', class: classname, role: "button", tabIndex: 0, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: '520c950250cf924ad3d0f0e9ffb9810d884bb283', class: "z-20 flex h-full w-full items-center justify-center gap-4" }, this.in_progress && (h("at-loading", { key: '0bf76e7df4a6f29ca2d45fc22f7c298e4c424fec', class: "absolute", size: "sm", type: this.spinnerColour })), h("slot", { key: 'f44e1c7cc27f3105f115dd62107b60afd1a960ef', name: "icon" }), this.icon && (h("span", { key: '9a14196eee8e80ab1efa32bd374b86dcbde37700', class: `material-icons !text-icon-md h-16 w-16 leading-[16px] ${this.in_progress ? 'invisible' : 'visible'}`, "data-name": "button-icon" }, this.icon)), this.label && (h("span", { key: '678aae5c603d7948aae628cd67f2db4bcf30c4b4', class: `leading-[16px] ${this.in_progress ? 'invisible' : 'visible'}`, "data-name": "button-label" }, this.label)), h("slot", { key: 'b0d18e20ad391f86e42c0aa30e278b770b9dfa2a' }), h("slot", { key: '348ef0cb84a985b32b824303e219c7f5fc5935ad', name: "icon_after" }), this.icon_after && (h("span", { key: '2451182675d4331fbfac0b20e96592eec85ca63a', class: `material-icons !text-icon-md h-16 w-16 leading-[16px] ${this.in_progress ? 'invisible w-0' : 'visible'}`, "data-name": "button-icon-right" }, this.icon_after))), h("div", { key: '9096e85bacf142d3bc8c9ef0d61705203186331b', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
    static get is() { return "at-button"; }
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
                    "text": "When set the button's styling will change and will no longer be interactive"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "icon": {
                "type": "string",
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
                "reflect": false,
                "attribute": "icon"
            },
            "icon_after": {
                "type": "string",
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
                "reflect": false,
                "attribute": "icon_after"
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
}
