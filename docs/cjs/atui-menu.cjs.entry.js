'use strict';

var index = require('./index-DGivrgtr.js');
var index$1 = require('./index-palgSxc9.js');

const variants = index$1.cva('fixed z-menu w-full rounded-md border border-solid border-light bg-white p-4 shadow-md', {
    variants: {
        open: {
            true: null,
            false: 'hidden',
        },
    },
});
const AtuiMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.menuStateChange = index.createEvent(this, "menuStateChange", 7);
        /**
         * Menu's x offset from edge in pixels. Only applied for origin_x = 'start' | 'end'
         */
        this.offset_x = 0;
        /**
         * Menu's y offset from edge in pixels. Only applied for origin_y = 'top' | 'bottom'
         */
        this.offset_y = 0;
        /**
         * Position of opened menu element relative to trigger element.
         */
        this.position = 'bottom';
        /**
         * Alignment of opened menu element relative to trigger element.
         */
        this.align = 'start';
        /**
         * String representing the 'width' style of the menu element ('auto' or 'NUMpx'). Use auto when you want the menu to inherit the host's width..
         */
        this.width = '280px';
        /**
         * Prevent closing of menu when options are selected. Used for multi-selection controls.
         */
        this.autoclose = true;
        /**
         * Event type that triggers the menu open state. Click or Hover.
         */
        this.trigger = 'click';
        /**
         * Close the menu when the user clicks within the menu panel. Default for single selection menus.
         */
        this.role = 'menu';
        /**
         * Prevent opening menu
         */
        this.disabled = false;
        this.isOpen = false;
        this.isIntersectingViewport = false;
        this.updatePosition = () => {
            requestAnimationFrame(() => {
                const trigger = this.triggerEl;
                if (trigger) {
                    this.triggerPosition = trigger.getBoundingClientRect();
                }
            });
        };
        this.handleOutsideClick = (event) => {
            if (this.isOpen && !this.el.contains(event.target)) {
                this.mouseLeaveHandler();
            }
        };
    }
    /**
     * Toggles the dropdown menu's open state.
     */
    async toggleMenu() {
        this.menuStateChange.emit(!this.isOpen);
        this.isOpen = !this.isOpen;
        this.updatePosition();
    }
    /**
     * Toggles the dropdown menu's open state.
     */
    async openMenu() {
        this.isOpen = true;
        this.menuStateChange.emit(true);
    }
    /**
     * Toggles the dropdown menu's open state.
     */
    async closeMenu() {
        this.isOpen = false;
        this.menuStateChange.emit(false);
    }
    /**
     * Return the current menu open state
     */
    async getIsOpen() {
        return this.isOpen;
    }
    componentDidLoad() {
        this.updatePosition();
        window.addEventListener('scroll', this.updatePosition, true);
        window.addEventListener('resize', this.updatePosition);
        window.addEventListener('click', this.handleOutsideClick);
        this.initIntersectionObserver();
    }
    disconnectedCallback() {
        window.removeEventListener('scroll', this.updatePosition, true);
        window.removeEventListener('resize', this.updatePosition);
        window.removeEventListener('click', this.handleOutsideClick);
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    initIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        };
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    this.isIntersectingViewport = true;
                    this.positionStrategy(entry);
                }
                else {
                    this.isIntersectingViewport = false;
                }
            });
        }, options);
        const menuElement = this.el.querySelector('[data-name="menu-content-wrapper"]');
        if (menuElement) {
            this.observer.observe(menuElement);
        }
    }
    positionStrategy(entry) {
        if (!this.isOpen)
            return;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const { top, right, left, height } = entry.boundingClientRect;
        // TODO: VCOMPLIB-887: Improve menu positioning strategy
        if (this.position === 'bottom' && top + height >= viewportHeight) {
            this.position = 'top';
        }
        else if (this.position === 'top' && top <= 0) {
            this.position = 'bottom';
        }
        if (this.position === 'right' && right >= viewportWidth) {
            this.position = 'left';
        }
        else if (this.position === 'left' && left <= 0) {
            this.position = 'right';
        }
    }
    mouseEnterHandler() {
        if (this.timedOutCloser)
            clearTimeout(this.timedOutCloser);
        if (!this.isOpen) {
            this.isOpen = true;
            this.menuStateChange.emit(true);
            this.updatePosition();
        }
    }
    mouseLeaveHandler() {
        this.timedOutCloser = setTimeout(() => {
            this.isOpen = false;
            this.menuStateChange.emit(false);
        }, 150);
    }
    get positionStyle() {
        var _a, _b;
        const style = {};
        const triggerRect = (_a = this.triggerEl) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        const menuRect = (_b = this.menuEl) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
        if (!triggerRect)
            return style;
        switch (this.position) {
            case 'top':
                style.top = `${triggerRect.top - menuRect.height}px`;
                if (this.align === 'start') {
                    style.left = `${triggerRect.left}px`;
                }
                else {
                    style.right = `${window.innerWidth - triggerRect.right}px`;
                }
                break;
            case 'bottom':
                style.top = `${triggerRect.bottom + this.offset_y}px`;
                if (this.align === 'start') {
                    style.left = `${triggerRect.left}px`;
                }
                else {
                    style.right = `${window.innerWidth - triggerRect.right - 8}px`;
                }
                break;
            case 'left':
                style.left = `${triggerRect.left - menuRect.width}px`;
                if (this.align === 'start') {
                    style.top = `${triggerRect.top}px`;
                }
                else {
                    style.bottom = `${window.innerHeight - triggerRect.bottom}px`;
                }
                break;
            case 'right':
                style.left = `${triggerRect.right + this.offset_x}px`;
                if (this.align === 'start') {
                    style.top = `${triggerRect.top}px`;
                }
                else {
                    style.bottom = `${window.innerHeight - triggerRect.bottom}px`;
                }
                break;
        }
        style.width = this.width;
        return style;
    }
    render() {
        const classname = variants({
            open: this.isOpen,
        });
        return (index.h(index.Host, { key: '7593e3514004d15c695f4f9dda26d64fcf996fc4' }, index.h("div", { key: '9cd0ca3694357b845aacc91a576ae21fea728500', class: "relative", onBlur: () => this.trigger === 'click' && !this.disabled
                ? this.mouseLeaveHandler()
                : null }, index.h("div", { key: '88bff9b81579bb5aac323c5d0f9836d682f53042', "aria-haspopup": "true", "data-name": "menu-trigger", ref: (el) => (this.triggerEl = el), "aria-expanded": `${this.isOpen ? 'true' : 'false'}`, onMouseEnter: () => this.trigger === 'hover' && !this.disabled
                ? this.mouseEnterHandler()
                : null, onKeyDown: async (event) => {
                if (event.key === 'Escape') {
                    await this.closeMenu();
                }
            }, onMouseLeave: () => this.trigger === 'hover' && !this.disabled
                ? this.mouseLeaveHandler()
                : null, onClick: () => this.trigger === 'click' && !this.disabled
                ? this.toggleMenu()
                : null, class: this.disabled ? 'contents' : '' }, index.h("slot", { key: '7edc240f60b923df7149beea1c593e4c85b65ed9', name: "menu-trigger" })), index.h("div", { key: '0015a15ffad67aa67508fdc9b2f2e5169a5f7d74', role: this.role, style: this.positionStyle, "data-position": this.position, "data-align": this.align, ref: (el) => (this.menuEl = el), "aria-hidden": `${this.isOpen ? 'false' : 'true'}`, onMouseEnter: () => this.trigger === 'hover' &&
                !this.disabled &&
                this.mouseEnterHandler(), onMouseLeave: () => this.trigger === 'hover' &&
                !this.disabled &&
                this.mouseLeaveHandler(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ' ||
                    event.key === 'Escape') {
                    if (this.autoclose) {
                        this.mouseLeaveHandler();
                    }
                }
            }, onClick: () => this.autoclose && this.mouseLeaveHandler(), class: classname, "data-name": "menu-content-wrapper" }, index.h("slot", { key: '394ad10d9e3efb34baf9cba2228b50971b992e79', name: "menu-content" })))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_menu = AtuiMenu;
//# sourceMappingURL=atui-menu.entry.cjs.js.map

//# sourceMappingURL=atui-menu.cjs.entry.js.map