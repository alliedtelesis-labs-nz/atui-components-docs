import { r as registerInstance, a as getElement, h, H as Host } from './index-HD-uhvb8.js';

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
            // `-base` does not exist on any state colour, and neither does
            // `disabled-light`; all four matched no rule, so every state of this cell
            // rendered unpainted. Issue #285.
            error: 'bg-error-foreground',
            warning: 'bg-warning-foreground',
            success: 'bg-success-foreground',
            disabled: 'bg-disabled-background',
        };
        return (h(Host, { key: '90c309cbe6826ecd64821c91b7e08c2e35a328c9', class: "flex h-full items-center" }, h("div", { key: '69b2376e0fd61087de1a3e26438d4ed968c14399', class: `h-full w-full ${statusClasses[this.type]}` })));
    }
};

export { AtColorStatusCell as at_color_status_cell };
