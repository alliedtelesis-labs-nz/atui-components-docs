'use strict';

var index = require('./index-BkghNVG3.js');

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
        return (index.h(index.Host, { key: '28b6038871a77393218afab2cad4f5e089d6ab55', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, index.h("span", { key: '92b80de870831ad271f9f7ab47e9ed4b47c8a5fd', class: "fill-slate-300", "data-name": "placeholder-icon" }, index.h("slot", { key: '2a6ca2c61773c651acf12cfcba62c8f726f96752', name: "icon" })), index.h("div", { key: '9c8b754a5c43adf592bafae88370ebe778a46fa2', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: '9a7b81a155347158c34430fc7d60ef355561c9f7', class: "flex items-center" }, this.show_loading_spinner && (index.h("at-loading", { key: '0def77b2e74999003adabdbb478aaea27ff6d42a', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: '26c16b3827850eeb508d10aa38ee5181aa3ee782', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: '1abad6d52fc0e0da069055e8988c477ed1ea819a', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: 'ebc0c0d44423c59d0b0b8e5c1221f1954419a0f4' }))));
    }
};

exports.at_placeholder = AtPlaceholderComponent;
