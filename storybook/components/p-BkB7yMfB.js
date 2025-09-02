import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-CaGsJoRH.js';
import { c as cva } from './p-CVoOBWGd.js';
import { d as defineCustomElement$1 } from './p-BmgpvZ_L.js';

const variants = cva('group text-button relative box-border flex inline-flex cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-[0.3rem] font-medium whitespace-nowrap capitalize duration-150 ease-in-out outline-none focus:outline-none', {
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
            secondary: 'text-impact focus-visible:ring-active-foreground/30 bg-slate-600 group-hover:bg-slate-700 group-focus:bg-slate-800 focus-visible:ring-2',
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
});
const focusIndicatorVariants = cva('pointer-events-none absolute top-0 left-0 z-10 h-full w-full transition-colors duration-300 ease-in-out', {
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
const AtuiButtonComponent = /*@__PURE__*/ proxyCustomElement(class AtuiButtonComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiClick = createEvent(this, "atuiClick", 7);
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
        return (h(Host, { key: 'af899a6b76c37a7d0a005c3881473c60ab3b76f7', class: classname, role: "button", tabIndex: 0, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: '8536d8a42c8a608ba2c22e1d30ae6ca51fe86f47', class: "z-20 flex h-full w-full items-center justify-center gap-4" }, this.in_progress && (h("atui-loading", { key: '306a1491c4477ad5afda4ed7f1df4fa79689334e', class: "absolute", size: "sm", type: this.spinnerColour })), h("slot", { key: '6899ef26b1f0735d49178ad0f00792a60d159869', name: "icon" }), this.icon && (h("span", { key: 'bdf7533ad8bd9fc32dceffca97894f40802eaf1b', class: `material-icons h-16 w-16 text-[16px] leading-[16px] ${this.in_progress ? 'invisible' : 'visible'}`, "data-name": "button-icon" }, this.icon)), this.label && (h("span", { key: '28320dc18bda05c7d4b846aa6608df370f00a343', class: `leading-[16px] ${this.in_progress ? 'invisible' : 'visible'}`, "data-name": "button-label" }, this.label)), h("slot", { key: '33367fb007d47af4deca2d6f487d598c2f39df72' }), h("slot", { key: 'da3079c41cfa8efc78fc9a22998348f460e05424', name: "icon_after" }), this.icon_after && (h("span", { key: 'a95f921b7c6ea98cf124d59d43ec04cb3c0714e8', class: `material-icons h-16 w-16 text-[16px] leading-[16px] ${this.in_progress ? 'invisible w-0' : 'visible'}`, "data-name": "button-icon-right" }, this.icon_after))), h("div", { key: 'b411067ca81bfaeb3b5740098e25e30950151fdf', "data-name": "focus-indicator", role: "presentation", class: focusIndicatorClassname })));
    }
    get el() { return this; }
}, [260, "atui-button", {
        "submit": [4],
        "type": [1],
        "size": [1],
        "label": [1],
        "disabled": [4],
        "icon": [1],
        "icon_after": [1],
        "in_progress": [4],
        "spinner_delay_ms": [2]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-button", "atui-loading"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiButtonComponent);
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiButtonComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-BkB7yMfB.js.map

//# sourceMappingURL=p-BkB7yMfB.js.map