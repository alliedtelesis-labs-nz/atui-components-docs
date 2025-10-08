import { r as registerInstance, c as createEvent, h, H as Host } from './index-CVZ0O9-b.js';

const AtTablePagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atChange = createEvent(this, "atChange", 7);
        this.atPageSizeChange = createEvent(this, "atPageSizeChange", 7);
    }
    /**
     * Current page number
     */
    current_page = 1;
    /**
     * Total number of pages
     */
    num_pages = 1;
    /**
     * Options provided in dropdown for page sizes.
     */
    page_size_options = [
        { value: '5' },
        { value: '10' },
        { value: '20' },
        { value: '50' },
        { value: '100' },
    ];
    /**
     * Emits event with ```event.detail``` as the new page number
     */
    atChange;
    /**
     * Emits event with ```event.detail``` as the new page size
     */
    atPageSizeChange;
    render() {
        return (h(Host, { key: '73402742bc32ed3eeaf5e3e75ccb9fb72ece8d3e', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '9f4bb9c16118ef08f9c40c302a6525fc767f295f' }, "Page Size: "), h("at-select", { key: '511d10fb4542b6f27db73629d7c0e3938dbd8c78', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: '1d0328a958596fce98736871a6370ebd5cfd5111', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), h("at-button", { key: '80fa08f2999bcbb014a2bc51ebed2c8df22704ac', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), h("span", { key: '7ac0241ccebaf1283d3473a21825065a8dc56435' }, "Page ", this.current_page, " of ", this.num_pages), h("at-button", { key: 'bf4215459fdf962715ab1264801d039df011ff0e', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), h("at-button", { key: '3ac53a6d9f844652ea1eb67fc17b4200e8eaa74c', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
    }
};

export { AtTablePagination as at_table_pagination };
//# sourceMappingURL=at-table-pagination.entry.js.map
