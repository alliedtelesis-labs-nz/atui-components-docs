import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-BAAX2Der.js';
import { c as classlist } from './classlist-COG8_R0C.js';

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
            secondary: 'bg-button-secondary-background text-button-secondary-foreground fill-button-foreground-inv focus-visible:ring-active-glow focus-visible:ring',
            secondaryOutline: 'border-muted text-button-accent fill-foreground focus-visible:ring-active-glow border border-solid bg-transparent focus-visible:ring',
            secondaryText: 'text-button-foreground fill-foreground focus-visible:ring-active-glow bg-transparent focus-visible:ring',
            destructive: 'bg-button-destructive text-button-foreground-inv fill-button-foreground-inv focus-visible:ring-error-glow focus-visible:ring',
            destructiveOutline: 'border-button-destructive text-button-destructive fill-button-destructive focus-visible:ring-error-glow border border-solid bg-transparent focus-visible:ring',
            destructiveText: 'text-button-destructive-foreground fill-button-destructive focus-visible:ring-destructive-foreground/30 bg-transparent focus-visible:ring-2',
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
const AtButtonComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiClick = createEvent(this, "atuiClick", 7);
    }
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
    get el() { return getElement(this); }
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
        return (h(Host, { key: 'e99bccaa16fae73525fbbcd8d2684614a97dc0e4', class: classname, role: "button", tabIndex: 0, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: '0340166cae1cee86d048222cc72c97d49863b3b7', class: "z-20 flex h-full w-full items-center justify-center gap-4" }, this.in_progress && (h("at-loading", { key: 'b4596bd664f41ab3adf1c8394a9e944014df6928', class: "absolute", size: "sm", type: this.spinnerColour })), h("slot", { key: '13e1edf28684a2641235df72033c1d88b59c587b', name: "icon" }), this.icon && (h("span", { key: '0aae629069384e133bd909ca3ebf9eb9f9c0c5bb', class: `material-icons !text-icon-md h-16 w-16 leading-[16px] ${this.in_progress ? 'invisible' : 'visible'}`, "data-name": "button-icon" }, this.icon)), this.label && (h("span", { key: '6ebc60af83a34d57be829b366903325c303f037a', class: `leading-[16px] ${this.in_progress ? 'invisible' : 'visible'}`, "data-name": "button-label" }, this.label)), h("slot", { key: '12ec7cb6196b07d9f9e5bd5a022f9879d7c0b82f' }), h("slot", { key: '9006fd47d96e5c495357e1152e18366f20711719', name: "icon_after" }), this.icon_after && (h("span", { key: '37231bee8f317e22adeefc4fac6ead6cbf28789c', class: `material-icons !text-icon-md h-16 w-16 leading-[16px] ${this.in_progress ? 'invisible w-0' : 'visible'}`, "data-name": "button-icon-right" }, this.icon_after))), h("div", { key: '2f7f4a12ff4b2624c3b0e54936e480697702d426', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
};

const atLoadingCss = () => `@keyframes bounce-dots{0%,80%,100%{transform:scale(0);opacity:0.5}40%{transform:scale(1);opacity:1}}@keyframes typing{0%,60%,100%{transform:translateY(0);opacity:0.4}30%{transform:translateY(-10px);opacity:1}}`;

const loadingVariants = {
    type: {
        default: 'text-foreground',
        error: 'text-destructive-foreground',
        secondary: 'text-foreground',
    },
    size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
    },
    spinnerSize: {
        sm: 'h-16 w-16 border',
        md: 'h-32 w-32 border-2',
        lg: 'h-64 w-64 border-4',
    },
};
const AtLoadingComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Type of loading animation to display
     */
    variant = 'spinner';
    /**
     * Visual type/color of the loading indicator
     */
    type = 'default';
    /**
     * Size of the loading indicator
     */
    size = 'md';
    /**
     * Custom text to display with text-based animations
     */
    text = 'Loading';
    get typeClasses() {
        return loadingVariants.type[this.type];
    }
    get sizeClasses() {
        return loadingVariants.size[this.size];
    }
    get spinnerSizeClasses() {
        return loadingVariants.spinnerSize[this.size];
    }
    renderSpinner() {
        const borderColor = this.type === 'default'
            ? 'border-primary'
            : this.type === 'error'
                ? 'border-destructive-foreground'
                : 'border-primary-foreground';
        return (h(Host, { class: `${borderColor} ${this.spinnerSizeClasses} inline-block animate-spin rounded-full border-solid border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`, role: "status", "aria-label": "Loading" }));
    }
    renderTyping() {
        return (h(Host, { class: `flex items-center gap-4`, role: "status", "aria-label": "Typing" }, h("span", { class: "inline-block h-4 w-4 animate-[typing_1s_infinite] rounded-full bg-gray-500", style: { animationDelay: '0ms' } }), h("span", { class: "inline-block h-4 w-4 animate-[typing_1s_infinite] rounded-full bg-gray-500", style: { animationDelay: '250ms' } }), h("span", { class: "inline-block h-4 w-4 animate-[typing_1s_infinite] rounded-full bg-gray-500", style: { animationDelay: '500ms' } })));
    }
    render() {
        switch (this.variant) {
            case 'typing':
                return this.renderTyping();
            case 'spinner':
            default:
                return this.renderSpinner();
        }
    }
};
AtLoadingComponent.style = atLoadingCss();

export { AtButtonComponent as at_button, AtLoadingComponent as at_loading };
