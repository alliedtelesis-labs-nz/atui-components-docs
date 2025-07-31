import { r as registerInstance, c as createEvent, h, H as Host } from './index-DV1DLMEm.js';

const AtuiTablePagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
        this.atuiPageSizeChange = createEvent(this, "atuiPageSizeChange", 7);
        /**
         * Current page number
         */
        this.current_page = 1;
        /**
         * Total number of pages
         */
        this.num_pages = 1;
        /**
         * Options provided in dropdown for page sizes.
         */
        this.page_size_options = [
            { value: '5' },
            { value: '10' },
            { value: '20' },
            { value: '50' },
            { value: '100' },
        ];
    }
    render() {
        return (h(Host, { key: 'ddd883253cfc64f9f74a2cbabdd6281807d0a514', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '30594211217fde1cc00da8a21e7302318871ad98' }, "Page Size: "), h("atui-select", { key: '8e6ded458de34a263209ae6ff93eebc43c02b249', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atuiPageSizeChange.emit(parseInt(event.detail)) }), h("atui-button", { key: '26511692fe0317b39cbf3c34b8f4303a95ab4940', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atuiChange.emit(1) }), h("atui-button", { key: '7f17214ebe3fdc47a7a3b37b6444cef8c4a7e1df', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atuiChange.emit(this.current_page - 1) }), h("span", { key: 'b440bcf81f3fe0f4c704073c59a8bbd54d5633c9' }, "Page ", this.current_page, " of ", this.num_pages), h("atui-button", { key: '3d298ac09393108223795024498e4cfb4d147a8a', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atuiChange.emit(this.current_page + 1) }), h("atui-button", { key: '5470278ff263637944ad73746c3a25936baf3ba0', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atuiChange.emit(this.num_pages) })));
    }
};

export { AtuiTablePagination as atui_table_pagination };
//# sourceMappingURL=atui-table-pagination.entry.js.map

//# sourceMappingURL=atui-table-pagination.entry.js.map