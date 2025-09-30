import { r as registerInstance, c as createEvent, h, H as Host } from './index-BlNBm0E8.js';

const AtTablePagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atChange = createEvent(this, "atChange", 7);
        this.atPageSizeChange = createEvent(this, "atPageSizeChange", 7);
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
        return (h(Host, { key: 'c9ef4792f8b44740e8a6e98f7316ebb1a97a1d6d', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: 'bcaa2e90775baf33f4750dae3e6dd215acf8f8c2' }, "Page Size: "), h("at-select", { key: 'f1963d2ab5d2b91e619a2bf9c08c4b3b89fe5d51', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: '687549c24c5535712536aaa32dfd8a317876aa89', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), h("at-button", { key: '39f1a47c66c31c1f3a7196659f2317755e66a78e', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), h("span", { key: 'e9bdd30b153153d2506de39fdf45be338bc2c2d3' }, "Page ", this.current_page, " of ", this.num_pages), h("at-button", { key: 'f5374812428dacb4cbff67cb116cc9a4e68f86c1', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), h("at-button", { key: '1da27e60638d9179e4ab7da218bfe93b7da855e0', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
    }
};

export { AtTablePagination as at_table_pagination };
//# sourceMappingURL=at-table-pagination.entry.js.map
