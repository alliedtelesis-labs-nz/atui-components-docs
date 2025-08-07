'use strict';

var index = require('./index-nKeTsW5N.js');
var index$1 = require('./index-palgSxc9.js');

const variants = index$1.cva('group relative box-border flex inline-flex cursor-pointer items-center justify-center gap-4 overflow-hidden whitespace-nowrap rounded-[0.3rem] text-button font-medium capitalize outline-none duration-150 ease-in-out focus:outline-none', {
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
const focusIndicatorVariants = index$1.cva('pointer-events-none absolute left-0 top-0 z-10 h-full w-full transition-colors duration-300 ease-in-out', {
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
const AtuiButtonComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiClick = index.createEvent(this, "atuiClick", 7);
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
        return (index.h(index.Host, { key: 'af899a6b76c37a7d0a005c3881473c60ab3b76f7', class: classname, role: "button", tabIndex: 0, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, index.h("div", { key: '8536d8a42c8a608ba2c22e1d30ae6ca51fe86f47', class: "z-20 flex h-full w-full items-center justify-center gap-4" }, this.in_progress && (index.h("atui-loading", { key: '306a1491c4477ad5afda4ed7f1df4fa79689334e', class: "absolute", size: "sm", type: this.spinnerColour })), index.h("slot", { key: '6899ef26b1f0735d49178ad0f00792a60d159869', name: "icon" }), this.icon && (index.h("span", { key: 'bdf7533ad8bd9fc32dceffca97894f40802eaf1b', class: `material-icons h-16 w-16 text-[16px] leading-[16px] ${this.in_progress ? 'invisible' : 'visible'}`, "data-name": "button-icon" }, this.icon)), this.label && (index.h("span", { key: '28320dc18bda05c7d4b846aa6608df370f00a343', class: `leading-[16px] ${this.in_progress ? 'invisible' : 'visible'}`, "data-name": "button-label" }, this.label)), index.h("slot", { key: '33367fb007d47af4deca2d6f487d598c2f39df72' }), index.h("slot", { key: 'da3079c41cfa8efc78fc9a22998348f460e05424', name: "icon_after" }), this.icon_after && (index.h("span", { key: 'a95f921b7c6ea98cf124d59d43ec04cb3c0714e8', class: `material-icons h-16 w-16 text-[16px] leading-[16px] ${this.in_progress ? 'invisible w-0' : 'visible'}`, "data-name": "button-icon-right" }, this.icon_after))), index.h("div", { key: 'b411067ca81bfaeb3b5740098e25e30950151fdf', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
    get el() { return index.getElement(this); }
};

const atuiLoadingCss = "@keyframes bounce-dots{0%,80%,100%{transform:scale(0);opacity:0.5}40%{transform:scale(1);opacity:1}}@keyframes typing{0%,60%,100%{transform:translateY(0);opacity:0.4}30%{transform:translateY(-10px);opacity:1}}";

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
const AtuiLoadingComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Type of loading animation to display
         */
        this.variant = 'spinner';
        /**
         * Visual type/color of the loading indicator
         */
        this.type = 'default';
        /**
         * Size of the loading indicator
         */
        this.size = 'md';
        /**
         * Custom text to display with text-based animations
         */
        this.text = 'Loading';
    }
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
        return (index.h(index.Host, { class: `${borderColor} ${this.spinnerSizeClasses} inline-block animate-spin rounded-full border-solid border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`, role: "status", "aria-label": "Loading" }));
    }
    renderTyping() {
        return (index.h(index.Host, { class: `flex items-center gap-4`, role: "status", "aria-label": "Typing" }, index.h("span", { class: "inline-block h-4 w-4 animate-[typing_1s_infinite] rounded-full bg-gray-500", style: { animationDelay: '0ms' } }), index.h("span", { class: "inline-block h-4 w-4 animate-[typing_1s_infinite] rounded-full bg-gray-500", style: { animationDelay: '250ms' } }), index.h("span", { class: "inline-block h-4 w-4 animate-[typing_1s_infinite] rounded-full bg-gray-500", style: { animationDelay: '500ms' } })));
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
AtuiLoadingComponent.style = atuiLoadingCss;

exports.atui_button = AtuiButtonComponent;
exports.atui_loading = AtuiLoadingComponent;
//# sourceMappingURL=atui-button.atui-loading.entry.cjs.js.map

//# sourceMappingURL=atui-button_2.cjs.entry.js.map