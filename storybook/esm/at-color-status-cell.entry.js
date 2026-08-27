import { r as registerInstance, a as getElement, h, H as Host } from './index-lWb16Ay7.js';

const AtColorStatusCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    type = 'disabled';
    init(params) {
        this.type = params.mapValueToStatus(params.data);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.type = params.mapValueToStatus(params.data);
        return true;
    }
    render() {
        const statusClasses = {
            error: 'bg-error-foreground',
            warning: 'bg-warning-foreground',
            success: 'bg-success-foreground',
            disabled: 'bg-disabled-foreground',
        };
        return (h(Host, { key: 'b91ff31b95bba637614713ec4d7007aa525e13ba', class: "flex h-full items-center" }, h("div", { key: '30e916246e7caa40424d5dc47d21c8f79c9387e0', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
};

export { AtColorStatusCell as at_color_status_cell };
