'use strict';

var index = require('./index-Bc1nzv_X.js');

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
    componentDidRender() {
        const iconEl = this.el.querySelector('[slot="icon"]');
        if (iconEl) {
            iconEl.size = this.size;
        }
    }
    get placeholderSizeClass() {
        return placeholderVariants.sizes[this.size];
    }
    render() {
        return (index.h(index.Host, { key: 'd987544cb5ec9d052f20db14e5019135cb9291ae', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, index.h("span", { key: '13a90b6934f603fc1193b4ada13f27df29e4a452', class: "fill-slate-300", "data-name": "placeholder-icon" }, index.h("slot", { key: '6f645d2d6eda99adf2ded4f801ea8d67647245b0', name: "icon" })), index.h("div", { key: '0537cd5988e9c51105f88fc8795d0a3fb3722c9b', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: '031a9ef1d51b44dfd4a07bbe7fa28f3c2c980987', class: "flex items-center" }, this.show_loading_spinner && (index.h("at-loading", { key: '3c0d120d75021bca0b2cdb9be9cc47fae47f2134', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: 'abb671dad6f93319afbe3787b81f38ea861444c2', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: '474eefc863c81037db612fd06e19da6e1fd813f1', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: '710b41b4a42a68a2ba500899eb73d19c85a12aa3' }))));
    }
};

exports.at_placeholder = AtPlaceholderComponent;
