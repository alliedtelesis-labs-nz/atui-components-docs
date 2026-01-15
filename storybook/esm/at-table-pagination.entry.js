import { r as registerInstance, c as createEvent, h, H as Host } from './index-EP34iaAr.js';

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
        return (h(Host, { key: '80637598d1dfa901fe10abdddd3a33994463595c', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '03bc7abeaf1b4f4b13f9c618efa12dfd9c777ec0' }, "Page Size: "), h("at-select", { key: 'dd204022c287f68ee231492fb6a84202998c8905', options: this.page_size_options, value: `${this.page_size_options[0].value}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: 'f844c6b19929d48162296869b551b7bbcc0a85e5', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), h("at-button", { key: '85b69dadf0cfd8b37ec21787d78507c5e9cb825a', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), h("span", { key: 'a5123392c34cd894b3bbc1c1f6af93cf9407350f' }, "Page ", this.current_page, " of ", this.num_pages), h("at-button", { key: 'd0c079f367aeddb66ab31bc09a85118147b89327', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), h("at-button", { key: '763c8132eb555376e1cf674ecef3a156adfe322e', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
    }
};

export { AtTablePagination as at_table_pagination };
//# sourceMappingURL=at-table-pagination.entry.js.map
