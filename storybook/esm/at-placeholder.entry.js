import { r as registerInstance, h } from './index-EP34iaAr.js';

const placeholderVariants = {
    iconSizes: {
        xs: '!text-[24px] w-24 h-24',
        sm: '!text-[48px] w-48 h-48',
        md: '!text-[64px] w-64 h-64',
        lg: '!text-[72px] w-72 h-72',
    },
    sizes: {
        xs: 'p-16 flex-row gap-8',
        sm: 'p-[5vh] flex-col justify-center',
        md: 'p-[10vh] flex-col justify-center',
        lg: 'p-[15vh] flex-col justify-center',
    },
};
const AtPlaceholderComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Size of the placeholder
     */
    size = 'md';
    /**
     * Material icon to be displayed in the center of the placeholder
     */
    icon;
    /**
     * Title to be displayed below the icon
     */
    placeholder_title;
    /**
     * Content to be displayed below the title
     */
    content;
    /**
     * Will show a loading spinner when set
     */
    show_loading_spinner;
    get placeholderSizeClass() {
        return placeholderVariants.sizes[this.size];
    }
    get iconSizeClass() {
        return placeholderVariants.iconSizes[this.size];
    }
    render() {
        return (h("div", { key: 'd7fa1ee96118f3dbc318ff3742b4a0ccbd45177e', class: `${this.placeholderSizeClass} bg-surface-0 text-med flex w-full items-center gap-16 rounded-sm text-center`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (h("span", { key: '4bb282dacc9338ef2fe6fb3ebed04a8288bf3985', class: `material-icons text-slate-300 ${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), h("div", { key: 'fde7c96c7931a10fd9cba56e4d1c4fa84fa1456a', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: 'cbd7f64ba76ac4588404618e9b72b674ec678b5f', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: '95c265aa5ae97d665b1e63f1eb04520f13161909', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: 'b8ec533c42c390b3e1cc345443f2ac2e606b1160', class: "text-med text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: 'f2ab11eb43e618f4f851e14f2d25cdd3d2af91bb', class: "text-med text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: '96e6ab1d755db278c2d67d9d5ca1d84ac993778b' }))));
    }
};

export { AtPlaceholderComponent as at_placeholder };
//# sourceMappingURL=at-placeholder.entry.js.map
