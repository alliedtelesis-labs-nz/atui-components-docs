'use strict';

var index = require('./index-CnLXNc1Z.js');
var classlist = require('./classlist-BPb95vgj.js');

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
const AtButtonComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiClick = index.createEvent(this, "atuiClick", 7);
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
     * When set, will display a loading spinner inside the button and hide all labels & icons.
     * The button never clears it: set it back to false when the work finishes.
     */
    in_progress = false;
    /**
     * Minimum time in ms the spinner stays visible once shown. If `in_progress` is cleared
     * sooner, the spinner stays up for the remainder.
     */
    spinner_delay_ms = 1000;
    get el() { return index.getElement(this); }
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
        const classname = classlist.classlist('at-button group relative box-border flex inline-flex items-center justify-center gap-4 overflow-hidden rounded-button font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out outline-none focus:outline-none', buttonVariantsConfig)({
            disabled: this.disabled,
            size: this.size,
            type: this.type,
        });
        const focusIndicatorClassname = classlist.classlist('pointer-events-none absolute top-0 left-0 z-10 h-full w-full transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out', focusIndicatorVariantsConfig)({
            type: this.disabled ? undefined : this.type,
        });
        return (index.h(index.Host, { key: '6aa05bf28cd37e2dd8cbf27da37d7693b2c22a15', class: classname, role: "button", tabIndex: 0, "aria-disabled": this.disabled ? 'true' : undefined, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, index.h("div", { key: 'd156f19d8d3ccb3a30edeba9f2bdf28e0fd66003', class: "z-20 flex h-full w-full items-center justify-center gap-4" }, this.isSpinnerVisible && (index.h("at-loading", { key: 'ad73e2e3c9008efc6b26f6540ec5b0f9ecf7fe05', "data-name": "button-spinner", class: "absolute", size: "sm", type: "current" })), !this.isSpinnerVisible && (index.h("slot", { key: '884802116901f0fb585ca458ea6ed1de5cf57a8d', name: "icon", "data-name": "button-icon" })), this.label && (index.h("span", { key: '63b6b24f831e4514abc285d8e58431f587a779ec', class: `leading-[16px] ${this.isSpinnerVisible ? 'invisible' : ''}`, "data-name": "button-label" }, this.label)), index.h("slot", { key: 'e66c9c7e91454c5d2967e2749f54421aea1621f6' }), !this.isSpinnerVisible && (index.h("slot", { key: '77d74bc42eabad3110031697be465a0c96a08b31', name: "icon_after", "data-name": "button-icon-right" }))), index.h("div", { key: 'cafb8822054d72f4f9793fa3e2da7066020e80e3', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
    static get watchers() { return {
        "in_progress": [{
                "holdSpinnerForMinimumDisplay": 1
            }]
    }; }
};
AtButtonComponent.style = atButtonCss();

const atLoadingCss = () => `@keyframes bounce-dots{0%,80%,100%{transform:scale(0);opacity:0.5}40%{transform:scale(1);opacity:1}}@keyframes wave{0%,100%{transform:scaleY(0.4);opacity:0.5}50%{transform:scaleY(1);opacity:1}}@keyframes typing{0%,60%,100%{transform:translateY(0);opacity:0.4}30%{transform:translateY(-10px);opacity:1}}`;

const loadingVariants = {
    type: {
        default: 'text-active',
        error: 'text-destructive-foreground',
        secondary: 'text-foreground',
        current: 'text-current',
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
const spinnerBorderPerType = {
    default: 'border-active',
    error: 'border-destructive-foreground',
    secondary: 'border-foreground',
    current: 'border-current',
};
const AtLoadingComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Type of loading animation to display
     */
    variant = 'spinner';
    /**
     * Visual type/color of the loading indicator. `current` inherits the surrounding text colour.
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
        const borderColor = spinnerBorderPerType[this.type];
        return (index.h("span", { class: `${borderColor} ${this.spinnerSizeClasses} inline-block animate-spin rounded-full border-solid border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`, "data-name": "loading-spinner" }));
    }
    renderShapes(name, shapeClasses, delays) {
        return (index.h("span", { class: `${this.typeClasses} flex items-center gap-4`, "data-name": name }, delays.map((delay) => (index.h("span", { class: `${shapeClasses} inline-block rounded-full bg-current`, style: { animationDelay: `${delay}ms` }, "data-name": "loading-shape" })))));
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
        return (index.h(index.Host, { key: 'bda227c9973b828760c3faf19bc1c7d7e5c3490f', class: `${this.sizeClasses} inline-flex items-center gap-8`, role: "status", "aria-label": this.variant === 'typing' ? 'Typing' : 'Loading' }, this.renderIndicator(), index.h("slot", { key: 'b24860df32579c8cfa9c1cade071ce5ded113998' })));
    }
};
AtLoadingComponent.style = atLoadingCss();

exports.at_button = AtButtonComponent;
exports.at_loading = AtLoadingComponent;
