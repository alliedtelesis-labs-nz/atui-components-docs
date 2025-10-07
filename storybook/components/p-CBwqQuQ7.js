import { p as proxyCustomElement, H, h, c as Host } from './p-BcFc6fJK.js';

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
const AtLoadingComponent = /*@__PURE__*/ proxyCustomElement(class AtLoadingComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
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
    static get style() { return atLoadingCss; }
}, [256, "at-loading", {
        "variant": [1],
        "type": [1],
        "size": [1],
        "text": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-loading"];
    components.forEach(tagName => { switch (tagName) {
        case "at-loading":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtLoadingComponent);
            }
            break;
    } });
}

export { AtLoadingComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-CBwqQuQ7.js.map

//# sourceMappingURL=p-CBwqQuQ7.js.map