import { h, Host, } from "@stencil/core";
/**
 * @category Layout
 * @description An individual resizable section within an at-resizable-group. Give it default_size to have it participate in the group's percentage layout, or omit it to let the panel hug its content and absorb whatever space its sized siblings don't claim.
 * @slot - Panel content
 */
export class AtResizablePanelComponent {
    el;
    /** Initial flex-basis percentage. Omit to let the panel size itself to its content instead of participating in the resize percentages. */
    default_size;
    /** Minimum flex-basis percentage a drag or keyboard nudge can shrink this panel to. */
    min_size = 10;
    /** Maximum flex-basis percentage a drag or keyboard nudge can grow this panel to. */
    max_size = 100;
    /** Enables snap-to-collapsed behavior once a drag pushes this panel near its min_size. */
    collapsible = false;
    /** Flex-basis percentage this panel snaps to once collapsed. */
    collapsed_size = 0;
    isCollapsed = false;
    /** Fires whenever this panel's size changes, with the new flex-basis percentage (null while unsized). */
    atuiResize;
    /** Fires when this panel's collapsed state changes, with the new isCollapsed value. */
    atuiCollapse;
    group = null;
    currentSize = null;
    groupOwner;
    async componentWillLoad() {
        if (!this.el.id) {
            this.el.id = `resizable-panel-${Math.random().toString(36).substring(2, 11)}`;
        }
        this.group = this.el.parentElement?.closest('at-resizable-group');
        if (!this.group)
            return;
        this.groupOwner = await this.group.registerPanel(this.el.id, this.el, {
            defaultSize: this.default_size,
            minSize: this.min_size,
            maxSize: this.max_size,
            collapsible: this.collapsible,
            collapsedSize: this.collapsed_size,
        });
        const state = await this.group.getPanelState(this.el.id);
        if (state) {
            this.currentSize = state.size;
            this.isCollapsed = state.isCollapsed;
        }
    }
    componentDidLoad() {
        this.group?.addEventListener('atuiResizableChange', this.handleGroupChange);
    }
    disconnectedCallback() {
        this.group?.removeEventListener('atuiResizableChange', this.handleGroupChange);
        if (this.groupOwner) {
            this.group?.unregisterPanel(this.el.id, this.groupOwner);
        }
    }
    /** Collapses this panel, if collapsible. No-op otherwise. */
    async collapse() {
        await this.group?.collapsePanel(this.el.id);
    }
    /** Expands this panel from its collapsed state. */
    async expand() {
        await this.group?.expandPanel(this.el.id);
    }
    /** Returns whether this panel is currently collapsed. */
    async getIsCollapsed() {
        return this.isCollapsed;
    }
    handleGroupChange = (event) => {
        const entry = event.detail.find((candidate) => candidate.id === this.el.id);
        if (!entry)
            return;
        if (entry.size !== this.currentSize) {
            this.currentSize = entry.size;
            this.atuiResize.emit(entry.size);
        }
        if (entry.isCollapsed !== this.isCollapsed) {
            this.isCollapsed = entry.isCollapsed;
            this.atuiCollapse.emit(entry.isCollapsed);
        }
    };
    render() {
        return (h(Host, { key: 'a34a4f490b7665fae5db6b7178ffd641f615b44f', "data-name": "resizable-panel", "data-collapsed": this.isCollapsed ? 'true' : 'false', role: "group" }, h("slot", { key: '4ee6763100b68cb6193aed9efe579ceea0d3ccc4' })));
    }
    static get is() { return "at-resizable-panel"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-resizable-panel.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-resizable-panel.css"]
        };
    }
    static get properties() {
        return {
            "default_size": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Initial flex-basis percentage. Omit to let the panel size itself to its content instead of participating in the resize percentages."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "default_size"
            },
            "min_size": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Minimum flex-basis percentage a drag or keyboard nudge can shrink this panel to."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min_size",
                "defaultValue": "10"
            },
            "max_size": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum flex-basis percentage a drag or keyboard nudge can grow this panel to."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max_size",
                "defaultValue": "100"
            },
            "collapsible": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Enables snap-to-collapsed behavior once a drag pushes this panel near its min_size."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "collapsible",
                "defaultValue": "false"
            },
            "collapsed_size": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Flex-basis percentage this panel snaps to once collapsed."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "collapsed_size",
                "defaultValue": "0"
            }
        };
    }
    static get states() {
        return {
            "isCollapsed": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiResize",
                "name": "atuiResize",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fires whenever this panel's size changes, with the new flex-basis percentage (null while unsized)."
                },
                "complexType": {
                    "original": "number | null",
                    "resolved": "number",
                    "references": {}
                }
            }, {
                "method": "atuiCollapse",
                "name": "atuiCollapse",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fires when this panel's collapsed state changes, with the new isCollapsed value."
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "collapse": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Collapses this panel, if collapsible. No-op otherwise.",
                    "tags": []
                }
            },
            "expand": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Expands this panel from its collapsed state.",
                    "tags": []
                }
            },
            "getIsCollapsed": {
                "complexType": {
                    "signature": "() => Promise<boolean>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "Returns whether this panel is currently collapsed.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
