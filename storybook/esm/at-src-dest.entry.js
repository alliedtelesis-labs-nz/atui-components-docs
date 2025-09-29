import { r as registerInstance, h, H as Host } from './index-BlNBm0E8.js';

const AtSrcDestComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Aligns the content to the left or center of the container
         */
        this.align = 'left';
    }
    render() {
        return (h(Host, { key: '9e657f10a031af270de61aa55a55671641f20980', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: '256daf55ec9ae3cf8f2c5f88ac7c702ae4b30bc2', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '1013f190e3837be4d0e69227b7d1cac9f9bec1ae' }, this.src_text && (h("p", { key: '6e376031da1a7c3cd35de7df94434b8f76cda689', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: 'f6925d533eeea438a877b8876b6f707057839eb4', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: 'e86a3d18abb4ec500d154f3ca8ed693c0e74423e', class: "icon-lg text-light flex-row items-center gap-4" }, h("span", { key: '153b09f04a7bcc04db94785aac60c08cb8bcf974', class: "material-icons" }, "arrow_back"), h("span", { key: 'ca41f94d2556592557525d411c6763e40f9aa79d', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (h("div", { key: '35c5df361f5132a7237f65f6d815dfe087c23751', class: "text-right" }, this.dest_text && (h("p", { key: '18e2ffb1a04cb85152e47af11a6b896a5c78d511', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: '6da3eba0a5b9e441354f6abde82f8a4f354b45fa', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '5f578ef454f19be1aa131c2942b3d44eb3d9c429', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
//# sourceMappingURL=at-src-dest.entry.js.map
