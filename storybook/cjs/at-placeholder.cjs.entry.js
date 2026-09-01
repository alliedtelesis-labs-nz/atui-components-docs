'use strict';

var index = require('./index-BCGHtseN.js');

const placeholderVariants = {
    sizes: {
        xs: 'p-16 flex-row gap-8',
        sm: 'p-[5vh] flex-col justify-center',
        md: 'p-[10vh] flex-col justify-center',
        lg: 'p-[15vh] flex-col justify-center',
    },
};
const AtPlaceholderComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Size of the placeholder
     */
    size = 'md';
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
    get el() { return index.getElement(this); }
    componentDidLoad() {
        const iconEl = this.el.querySelector('[slot="icon"]');
        if (iconEl) {
            iconEl.size = this.size;
        }
    }
    get placeholderSizeClass() {
        return placeholderVariants.sizes[this.size];
    }
    render() {
        return (index.h(index.Host, { key: '1c3ccc6aefeb95bfacb2820475a075f3f91471cb', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, index.h("span", { key: 'ede35c80c22a300668dd0413c766f0b53e64767b', class: "fill-slate-300", "data-name": "placeholder-icon" }, index.h("slot", { key: '54227cc1331e9d74e3e9427022cf1d85b3057bf6', name: "icon" })), index.h("div", { key: '2e45da1400687093f55994f39548a94887f9c61a', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: '76fd813ca1fdb0352ec8a3bbb5039bc085eeb153', class: "flex items-center" }, this.show_loading_spinner && (index.h("at-loading", { key: 'ac44e23b6b921a39cfae20124bf2e832612b45a5', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: '2829726f4c6d4a32a1595cbf1842e949a18dc979', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: '43ae359ed61f7e7476a7fe27fe031acf928b1ff3', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: '463863788f522b8a3237666db898b93ed88b6b52' }))));
    }
};

exports.at_placeholder = AtPlaceholderComponent;
