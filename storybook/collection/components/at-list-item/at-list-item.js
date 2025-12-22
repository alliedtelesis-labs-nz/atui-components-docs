import { h, Host } from "@stencil/core";
const listItemVariants = {
    xs: 'min-h-16 text-sm',
    sm: 'min-h-[32px] text-sm',
    md: 'min-h-[40px] text-body',
    lg: 'min-h-[48px] text-body',
};
/**
 * @category Layout
 * @description A list item component for data in key:value format.
 *
 * @slot title - Placed in the title position
 * @slot - PLace custom content or items before the content
 */
export class AtListItem {
    /**
     * Optional icon shown to the left of the list item - use mat-icon name.
     */
    icon;
    /**
     * Optional prefix.
     */
    item_prefix;
    /**
     * Title of the list item.
     */
    item_title;
    /**
     * Optional subtitle of the list item.
     */
    subtitle;
    /**
     * Content of the list item placed at the right of the item.
     */
    content;
    /**
     * Size of the list item.
     */
    size = 'sm';
    /**
     * Border below the list item.
     */
    border = true;
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (h(Host, { key: '78d54190a51d9fb8bd157ee14fbfa2d7e47c1809', role: "listitem", tabIndex: 0, class: "hover:bg-surface-1 flex items-center gap-3 px-4 py-3" }, h("div", { key: 'a86cebca3ae6d2a134342bf622b27e7f0bb6b294', class: "flex flex-grow flex-col" }, h("div", { key: 'f243f99d806c7cdbe364ee3bd24186aaf9640538', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (h("span", { key: 'e8e1b2ddb2fb5d1b769cd8842a47b3c7b266d6f8', class: "material-icons text-light items-center text-sm" }, this.icon)), this.item_prefix && (h("span", { key: '917ef6c85499b069f8d9e62ac1c66dc6762fece6', class: "text-med mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: 'd648832f90fe1e638d22b28569c95624b6e2f699', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '0d036a1fed4e4ad83cc36bc80f9328f93b01ff8d', class: "flex flex-row font-normal" }, h("span", { key: '76354ed41198724e0dfad8171f56ed8459d19bf7', class: "mr-4" }, this.item_title), h("slot", { key: 'f1bfc240b997ae08f6e31b6beef63db0b13537a8', name: "title" })), this.subtitle && (h("span", { key: '9cec0e244f4da96b6888fffedfa20c9befb82e39', class: "text-med inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: '7f3ceee53327284d8ab9b31184f27a2efacbeac2', class: "flex flex-wrap items-end justify-end gap-8" }, h("slot", { key: '75f62887b218bd3f7c0a0c3e7cec522133fd2bf3' }), this.content && (h("span", { key: 'bfe38cc2672d7701426523ee29d099c6f4f30144', "data-name": "content" }, this.content)))));
    }
    static get is() { return "at-list-item"; }
    static get properties() {
        return {
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional icon shown to the left of the list item - use mat-icon name."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon"
            },
            "item_prefix": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional prefix."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "item_prefix"
            },
            "item_title": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Title of the list item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "item_title"
            },
            "subtitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional subtitle of the list item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "subtitle"
            },
            "content": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Content of the list item placed at the right of the item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "content"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Size",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xs\"",
                    "references": {
                        "Size": {
                            "location": "global",
                            "id": "global::Size"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Size of the list item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'sm'"
            },
            "border": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Border below the list item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "border",
                "defaultValue": "true"
            }
        };
    }
}
//# sourceMappingURL=at-list-item.js.map
