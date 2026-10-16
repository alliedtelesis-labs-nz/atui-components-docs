import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-D8Aeqmel.js';
import { c as classlist } from './classlist-COG8_R0C.js';

const atButtonCss = () => `at-button:not(:has([data-name=button-label])):not(:has(span:not([data-name]):not([slot]))):has([slot=icon]){padding-inline:0;aspect-ratio:1}`;

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
};
AtButtonComponent.style = atButtonCss();

const atLoadingCss = () => `@keyframes bounce-dots{0%,80%,100%{transform:scale(0);opacity:0.5}40%{transform:scale(1);opacity:1}}@keyframes wave{0%,100%{transform:scaleY(0.4);opacity:0.5}50%{transform:scaleY(1);opacity:1}}@keyframes typing{0%,60%,100%{transform:translateY(0);opacity:0.4}30%{transform:translateY(-10px);opacity:1}}`;

const loadingVariants = {
    type: {
        default: 'text-active',
        error: 'text-destructive-foreground',
        secondary: 'text-foreground',
    },
    size: {
        sm: 'text-sm',
        md: 'text-body',
        lg: 'text-xl',
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
            ? 'border-active'
            : this.type === 'error'
                ? 'border-destructive-foreground'
                : 'border-foreground';
        return (h("span", { class: `${borderColor} ${this.spinnerSizeClasses} inline-block animate-spin rounded-full border-solid border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`, "data-name": "loading-spinner" }));
    }
    renderShapes(name, shapeClasses, delays) {
        return (h("span", { class: `${this.typeClasses} flex items-center gap-4`, "data-name": name }, delays.map((delay) => (h("span", { class: `${shapeClasses} inline-block rounded-full bg-current`, style: { animationDelay: `${delay}ms` }, "data-name": "loading-shape" })))));
    }
    renderIndicator() {
        switch (this.variant) {
            case 'typing':
                return this.renderShapes('loading-typing', 'h-4 w-4 animate-[typing_1s_infinite]', [0, 250, 500]);
            case 'dots':
                return this.renderShapes('loading-dots', 'h-4 w-4 animate-[bounce-dots_1s_infinite]', [0, 250, 500]);
            case 'wave':
                return this.renderShapes('loading-wave', 'h-16 w-4 animate-[wave_1s_infinite]', [0, 100, 200, 300, 400]);
            case 'spinner':
            default:
                return this.renderSpinner();
        }
    }
    render() {
        return (h(Host, { key: '12f5109a4f8a8b4beee4f67f460a0588cb4cd03e', class: `${this.sizeClasses} inline-flex items-center gap-8`, role: "status", "aria-label": this.variant === 'typing' ? 'Typing' : 'Loading' }, this.renderIndicator(), h("slot", { key: 'dbe3445551e7f24cb85ef24fac4d7c148a74cb25' })));
    }
};
AtLoadingComponent.style = atLoadingCss();

export { AtButtonComponent as at_button, AtLoadingComponent as at_loading };
