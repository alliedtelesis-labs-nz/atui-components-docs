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
            primary: 'bg-button-primary-background text-button-foreground-inv fill-button-foreground-inv focus-visible:ring-active-glow focus-visible:ring',
            primaryOutline: 'border-button-primary text-button-primary-foreground fill-button-primary-foreground focus-visible:ring-active-glow border border-solid bg-transparent focus-visible:ring',
            primaryText: 'text-button-primary-foreground fill-button-primary-foreground focus-visible:ring-active-glow bg-transparent focus-visible:ring',
            secondary: 'bg-button-secondary-background text-button-secondary-foreground fill-foreground focus-visible:ring-active-glow focus-visible:ring',
            secondaryOutline: 'border-button-foreground text-button-accent fill-foreground focus-visible:ring-active-glow border border-solid bg-transparent focus-visible:ring',
            secondaryText: 'text-button-foreground fill-foreground focus-visible:ring-active-glow bg-transparent focus-visible:ring',
            destructive: 'bg-button-destructive text-button-foreground-inv fill-button-foreground-inv focus-visible:ring-error-glow focus-visible:ring',
            destructiveOutline: 'border-button-destructive text-button-destructive-foreground fill-button-foreground-inv focus-visible:ring-error-glow border border-solid bg-transparent focus-visible:ring',
            destructiveText: 'text-button-destructive-foreground fill-button-foreground-inv focus-visible:ring-destructive-foreground/30 bg-transparent focus-visible:ring-2',
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
            primary: 'group-hover:bg-surface-overlay/30 group-active:bg-button-primary-background/70',
            primaryOutline: 'group-hover:bg-button-primary-background/10 group-active:bg-button-primary-background/20',
            primaryText: 'group-hover:bg-button-primary-background/10 group-active:bg-button-primary-background/20',
            secondary: 'group-hover:bg-surface-overlay/10 group-active:bg-button-secondary-background/20',
            secondaryOutline: 'group-hover:bg-surface-overlay/10 group-active:bg-button-secondary-background/20',
            secondaryText: 'group-hover:bg-surface-overlay/10 group-active:bg-button-secondary-background/20',
            destructive: 'group-hover:bg-surface-overlay/30 group-active:bg-button-destructive-background/70',
            destructiveOutline: 'group-hover:bg-button-destructive-background/10 group-active:bg-button-destructive-background/20',
            destructiveText: 'group-hover:bg-button-destructive-background/10 group-active:bg-button-destructive-background/20',
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
        const classname = classlist('at-button group relative box-border flex inline-flex cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-button font-medium whitespace-nowrap capitalize duration-150 ease-in-out outline-none focus:outline-none', buttonVariantsConfig)({
            disabled: this.disabled,
            size: this.size,
            type: this.type,
            hasLabel: !!this.label,
        });
        const focusIndicatorClassname = classlist('pointer-events-none absolute top-0 left-0 z-10 h-full w-full transition-colors duration-300 ease-in-out', focusIndicatorVariantsConfig)({
            type: this.type,
        });
        return (h(Host, { key: 'ebdf09867694038f1bfb5f44e50ce2d762f12316', class: classname, role: "button", tabIndex: 0, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: 'de95bdca7ba629ef01c5f180f3756c3223083129', class: "z-20 flex h-full w-full items-center justify-center gap-4" }, this.in_progress && (h("at-loading", { key: '3c40757d81b722956812141d49428c7c44b25a77', class: "absolute", size: "sm", type: this.spinnerColour })), h("slot", { key: 'def42688c87d2c3fdfe1336ab667aabf32c0c04a', name: "icon" }), this.icon && (h("span", { key: '0c47cbc955fea0ea1ffafb80e60251da9a8d7de3', class: `material-icons !text-icon-md h-16 w-16 leading-[16px] ${this.in_progress ? 'invisible' : 'visible'}`, "data-name": "button-icon" }, this.icon)), this.label && (h("span", { key: 'ce2e6c10d7013d1966bb332335e678ef8322241a', class: `leading-[16px] ${this.in_progress ? 'invisible' : 'visible'}`, "data-name": "button-label" }, this.label)), h("slot", { key: '7c44b68a23c06361a286ffec34464dfe16ca862e' }), h("slot", { key: 'ddb78df856b2b060464a785369df426fac50a319', name: "icon_after" }), this.icon_after && (h("span", { key: '16488a939980153342f7abfc409646164c72ca80', class: `material-icons !text-icon-md h-16 w-16 leading-[16px] ${this.in_progress ? 'invisible w-0' : 'visible'}`, "data-name": "button-icon-right" }, this.icon_after))), h("div", { key: '100ca08be98194d800797deb0b7b6a69d0832ff0', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
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
