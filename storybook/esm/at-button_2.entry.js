import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-EP34iaAr.js';
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
            primary: 'bg-active-foreground text-impact focus-visible:ring-active-foreground/30 group-hover:bg-active-foreground/90 group-focus:bg-active-foreground/80 focus-visible:ring-2',
            primaryOutline: 'border-primary-foreground text-active-foreground focus-visible:ring-active-foreground/30 group-hover:bg-active-foreground/10 group-focus:bg-active-foreground/20 border border-solid bg-transparent focus-visible:ring-2',
            primaryText: 'text-active-foreground focus-visible:ring-active-foreground/30 group-hover:bg-active-foreground/10 group-focus:bg-active-foreground/20 bg-transparent focus-visible:ring-2',
            secondary: 'text-impact focus-visible:ring-active-foreground/30 bg-secondary group-hover:bg-slate-700 group-focus:bg-slate-800 focus-visible:ring-2',
            secondaryOutline: 'border-dark text-foreground focus-visible:ring-active-foreground/30 border border-solid bg-transparent group-hover:bg-slate-100 group-focus:bg-slate-200 focus-visible:ring-2',
            secondaryText: 'text-foreground focus-visible:ring-active-foreground/30 bg-transparent group-hover:bg-slate-100 group-focus:bg-slate-200 focus-visible:ring-2',
            destructive: 'bg-destructive-foreground text-impact focus-visible:ring-active-foreground/30 group-hover:bg-destructive-foreground/90 group-focus:bg-destructive-foreground/80 focus-visible:ring-2',
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
        const classname = classlist('group text-button relative box-border flex inline-flex cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-[0.3rem] font-medium whitespace-nowrap capitalize duration-150 ease-in-out outline-none focus:outline-none', buttonVariantsConfig)({
            disabled: this.disabled,
            size: this.size,
            type: this.type,
            hasLabel: !!this.label,
        });
        const focusIndicatorClassname = classlist('pointer-events-none absolute top-0 left-0 z-10 h-full w-full transition-colors duration-300 ease-in-out', focusIndicatorVariantsConfig)({
            type: this.type,
        });
        return (h(Host, { key: 'af460532aa993f54e957af3d1d4572f1af6c91d2', class: classname, role: "button", tabIndex: 0, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: 'ab4a6dade60b9e8e50da04ad6d4b1b4a67911a5e', class: "z-20 flex h-full w-full items-center justify-center gap-4" }, this.in_progress && (h("at-loading", { key: '09e2a27766ee4ff176d993c443d4e0505c42662e', class: "absolute", size: "sm", type: this.spinnerColour })), h("slot", { key: '51d2a1fb06a90647e0297532b1783ceb931a81b5', name: "icon" }), this.icon && (h("span", { key: 'faa1c96f934937e8424a8f0d364fb69e81ab533a', class: `material-icons h-16 w-16 text-[16px] leading-[16px] ${this.in_progress ? 'invisible' : 'visible'}`, "data-name": "button-icon" }, this.icon)), this.label && (h("span", { key: 'f6dab556f201e35766c9d680dccef7cf105e9894', class: `leading-[16px] ${this.in_progress ? 'invisible' : 'visible'}`, "data-name": "button-label" }, this.label)), h("slot", { key: '60efc897fa8844682134e7ca46cfe7d8daa936ec' }), h("slot", { key: '23353cc2e8fd245c6c09e72a3d0cd69f6f9eacd2', name: "icon_after" }), this.icon_after && (h("span", { key: '3e1548a0ca68cb53b8d7d5068c21f4081a8c31b7', class: `material-icons h-16 w-16 text-[16px] leading-[16px] ${this.in_progress ? 'invisible w-0' : 'visible'}`, "data-name": "button-icon-right" }, this.icon_after))), h("div", { key: '5baf79305fd68651bfa34bddc65a45d909e872c1', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
};

const atLoadingCss = "@keyframes bounce-dots{0%,80%,100%{transform:scale(0);opacity:0.5}40%{transform:scale(1);opacity:1}}@keyframes typing{0%,60%,100%{transform:translateY(0);opacity:0.4}30%{transform:translateY(-10px);opacity:1}}";

const loadingVariants = {
    type: {
        default: 'text-primary',
        error: 'text-destructive-foreground',
        secondary: 'text-primary-foreground',
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
AtLoadingComponent.style = atLoadingCss;

export { AtButtonComponent as at_button, AtLoadingComponent as at_loading };
//# sourceMappingURL=at-button.at-loading.entry.js.map
