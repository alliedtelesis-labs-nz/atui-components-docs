'use strict';

var index = require('./index-BunRc-jd.js');

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
        return (index.h(index.Host, { key: 'dc988efeb83ecfe21115a5c7c40eb4693daec1a6', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, index.h("span", { key: '366188f75eb99de358de8e95d9a357ac8e5365b7', class: "fill-slate-300", "data-name": "placeholder-icon" }, index.h("slot", { key: '9436cf36b035145cb6dec9f356b0b3f57dc21f2b', name: "icon" })), index.h("div", { key: '4c0f8b50272d4bd2279513616624cae2d6c1e86c', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: 'ece4d465af90239fd1e0f1661993f002668b9d8c', class: "flex items-center" }, this.show_loading_spinner && (index.h("at-loading", { key: '95b5715c0386980a10263fb6f4425ebb30f1bbe5', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: 'e04bfb607df433774077776a2d867166a110862c', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: 'b70db5cbf8afe14ed83aeda21ab8a60f4ff30345', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: 'd81719b35129a37e1c36be8d5dc65f0f0f124904' }))));
    }
};

exports.at_placeholder = AtPlaceholderComponent;
