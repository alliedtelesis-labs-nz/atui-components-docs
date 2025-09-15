import { r as registerInstance, c as createEvent, h, H as Host } from './index-C8uvvL0O.js';

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
        return (h(Host, { key: '4e942eaa9c40db76a68040218794eba5b292ca78', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '2b00ba9e8943e79753ba5fe5dc9fcde1003a7c06' }, "Page Size: "), h("at-select", { key: '3ec98c5f757492256b551f04c1f77312bd9820ed', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: '43fa742a879adcf9c33cb44e32a91f84d69964ec', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), h("at-button", { key: 'b787d8f98cd40618a3473b9c8b3cdfa853b423c9', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), h("span", { key: '7074b656788dd0fe1736d6aba3598c372fe90558' }, "Page ", this.current_page, " of ", this.num_pages), h("at-button", { key: 'cad8c13a30dec564ef905b78792f49f9964226fd', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), h("at-button", { key: '82d07bb30333966b1a6fea5fd1f3f7d8bf5ce623', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
    }
};

export { AtTablePagination as at_table_pagination };
//# sourceMappingURL=at-table-pagination.entry.js.map

//# sourceMappingURL=at-table-pagination.entry.js.map