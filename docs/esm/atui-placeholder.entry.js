import { r as registerInstance, h } from './index-Cd7WF2gX.js';

const placeholderVariants = {
    iconSizes: {
        xs: 'text-[24px] w-24 h-24',
        sm: 'text-[48px] w-48 h-48',
        md: 'text-[64px] w-64 h-64',
        lg: 'text-[72px] w-72 h-72',
    },
    sizes: {
        xs: 'p-16 flex-row gap-8',
        sm: 'p-[5vh] flex-col justify-center',
        md: 'p-[10vh] flex-col justify-center',
        lg: 'p-[15vh] flex-col justify-center',
    },
};
const AtuiPlaceholderComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Size of the placeholder
         */
        this.size = 'md';
    }
    get placeholderSizeClass() {
        return placeholderVariants.sizes[this.size];
    }
    get iconSizeClass() {
        return placeholderVariants.iconSizes[this.size];
    }
    render() {
        return (h("div", { key: '79903c0876cc9767cf77b861a640f8d8218f1394', class: `${this.placeholderSizeClass} flex w-full items-center gap-16 rounded-sm bg-surface-0 text-center text-med`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (h("span", { key: '54256885b735532c585ff041104ff4822128825d', class: `material-icons text-slate-300 ${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), h("div", { key: '50c2c7a3b3050ac9fcc926c7565365f0bc676571', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: '2a81f4429b016e5732f61947944233a6336d1ca8', class: "flex items-center" }, this.show_loading_spinner && (h("atui-loading", { key: '12b813c02682e0539b7d7cd7beb305bf68f07aed', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: 'e249c146186a5412b2fde2dc3257f558eb8dd57c', class: "text-sm font-medium text-med", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: '51ed285bb4c5a066da812684553d51eda72e51bf', class: "text-sm text-med", "data-name": "placeholder-content" }, this.content), h("slot", { key: 'ed975fd8ec6679a598f25b0cc32d9d9634a1ee41' }))));
    }
};

export { AtuiPlaceholderComponent as atui_placeholder };
//# sourceMappingURL=atui-placeholder.entry.js.map

//# sourceMappingURL=atui-placeholder.entry.js.map