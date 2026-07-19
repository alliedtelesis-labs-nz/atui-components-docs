'use strict';

var index = require('./index-DE68Mlxo.js');

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
        return (index.h(index.Host, { key: 'd17dfccdbc84e6e425191ff01ddc1307f277c8df', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, index.h("span", { key: '9e21bb5be8fceff7383317f1dc1a7a24532ad401', class: "fill-slate-300", "data-name": "placeholder-icon" }, index.h("slot", { key: '8c161be00f2c0c25e0709a189ae0b72e85dae8e8', name: "icon" })), index.h("div", { key: 'ac1b11827f1c607b9517072e75b1aca7b1ba5791', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: '2355587118c1b95c6a327ac3efc8cce1a71b49fb', class: "flex items-center" }, this.show_loading_spinner && (index.h("at-loading", { key: 'f865af046f2b9de6521a42e065be0c4f524f1a4d', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: '77fc7c5755090f04d86ec625e1394ae863faf959', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: 'c636f02df20343cfbc9886841ed27df81af38639', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: '2773247fed62e6baabb7d4c30d490c4866842c00' }))));
    }
};

exports.at_placeholder = AtPlaceholderComponent;
