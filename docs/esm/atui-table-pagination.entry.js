import { r as registerInstance, c as createEvent, h, H as Host } from './index-HJO1YDmC.js';

const AtuiTablePagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
        this.atuiChangeSize = createEvent(this, "atuiChangeSize", 7);
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
        return (h(Host, { key: '062c3d8e8e48b983aa858401d97f3bf1ee56a698', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: 'd2378443e412dad3f8a914900f68dcfa6b4b37a8' }, "Page Size: "), h("atui-select", { key: '0b9696c861b24aa576f769a7d2f4ebc20838a598', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atuiChangeSize.emit(parseInt(event.detail)) }), h("atui-button", { key: '0c4444f2bfc8d43593ace78bfc388a5370280eee', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atuiChange.emit(1) }), h("atui-button", { key: 'cad3040ab1e9577c2695ab3638846dcfe440f9c8', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atuiChange.emit(this.current_page - 1) }), h("span", { key: '8b40e6945bffcb64aa54a01e5430d13eb6a49dac' }, "Page ", this.current_page, " of ", this.num_pages), h("atui-button", { key: '9f7d3f48891939dec591b9ae18454efc47bb8902', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atuiChange.emit(this.current_page + 1) }), h("atui-button", { key: 'a37c683b317ce051802859df5eaefd41d8b0e2a6', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atuiChange.emit(this.num_pages) })));
    }
};

export { AtuiTablePagination as atui_table_pagination };
//# sourceMappingURL=atui-table-pagination.entry.js.map

//# sourceMappingURL=atui-table-pagination.entry.js.map