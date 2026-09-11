import { h, Host, } from "@stencil/core";
/**
 * @category Navigation
 * @description Shares open/closed state across multiple at-sidebar panels on one page (e.g. a left nav plus a right utility rail), so panels can sit side by side without either addressing the wrong ancestor. Wrap the panels and an at-sidebar-inset in this element instead of using at-sidebar standalone.
 * @slot - at-sidebar panels and an at-sidebar-inset for the shared page content
 */
export class AtSidebarProviderComponent {
    el;
    panels = new Map();
    backdropRequests = new Set();
    /**
     * Tracks which at-sidebar instance currently owns each registered id, so a
     * stale instance (e.g. shadowed by a duplicate trigger_id, or unregistering
     * after a new instance has already re-registered under the same id during a
     * remount) can't delete a live panel's registration out from under it.
     */
    owners = new Map();
    /**
     * Emits whenever a registered panel's open state changes, with the panel's id, side, and new open state.
     * Named distinctly from at-sidebar's own `atuiSidebarChange` (a plain boolean) — a nested at-sidebar's
     * event bubbles by default, and sharing the same name would let a listener on this element receive
     * either shape with no way to tell them apart.
     */
    atuiSidebarProviderChange;
    /**
     * Emits true when at least one registered panel is a modal (backdropped, mode="over") overlay, false when none are. at-sidebar-inset listens for this to go inert while a modal panel is open.
     */
    atuiSidebarBackdropChange;
    /**
     * Registers a panel with the provider. Called by a child at-sidebar on load.
     * Returns an owner token the caller must pass back to unregisterPanel.
     */
    async registerPanel(id, state) {
        if (this.panels.has(id)) {
            console.warn(`at-sidebar-provider: duplicate panel id "${id}" — give each at-sidebar a unique trigger_id. The previous panel registered under this id is being replaced.`);
        }
        const owner = Symbol(id);
        this.owners.set(id, owner);
        this.panels.set(id, state);
        this.panels = new Map(this.panels);
        return owner;
    }
    /**
     * Removes a panel from the provider. Called by a child at-sidebar on
     * disconnect with the owner token it received from registerPanel — a
     * stale instance's call is ignored if another instance has since
     * re-registered under the same id.
     */
    async unregisterPanel(id, owner) {
        if (this.owners.get(id) !== owner)
            return;
        this.owners.delete(id);
        this.panels.delete(id);
        this.panels = new Map(this.panels);
        if (this.backdropRequests.delete(id)) {
            this.backdropRequests = new Set(this.backdropRequests);
            this.syncBackdrop();
        }
    }
    /**
     * Sets a panel's open state directly.
     */
    async setOpen(id, isOpen) {
        const panel = this.panels.get(id);
        if (!panel || panel.isOpen === isOpen)
            return;
        panel.isOpen = isOpen;
        this.panels = new Map(this.panels);
        this.atuiSidebarProviderChange.emit({ id, side: panel.side, isOpen });
    }
    /**
     * Toggles a panel's open state.
     */
    async toggle(id) {
        const panel = this.panels.get(id);
        if (!panel)
            return;
        await this.setOpen(id, !panel.isOpen);
    }
    /**
     * Returns a panel's current open state.
     */
    async getIsOpen(id) {
        return this.panels.get(id)?.isOpen ?? false;
    }
    /**
     * A panel reports whether it currently needs the shared backdrop (mode="over", backdrop=true, and open). The provider renders a single backdrop while any panel requests one, so two modal panels never stack two scrims.
     */
    async setBackdrop(id, active) {
        const changed = active
            ? !this.backdropRequests.has(id) && this.backdropRequests.add(id)
            : this.backdropRequests.delete(id);
        if (!changed)
            return;
        this.backdropRequests = new Set(this.backdropRequests);
        this.syncBackdrop();
    }
    /** Only for deduping the atuiSidebarBackdropChange emit — render derives the backdrop directly from backdropRequests. */
    lastEmittedHasBackdrop = false;
    syncBackdrop() {
        const hasBackdrop = this.backdropRequests.size > 0;
        if (hasBackdrop === this.lastEmittedHasBackdrop)
            return;
        this.lastEmittedHasBackdrop = hasBackdrop;
        this.atuiSidebarBackdropChange.emit(hasBackdrop);
    }
    /** Closes only the most recently opened backdropped panel — Set preserves insertion order — so dismissing one modal panel never closes another that's also open. */
    handleBackdropClick = () => {
        const topmost = Array.from(this.backdropRequests).at(-1);
        if (topmost !== undefined) {
            this.setOpen(topmost, false);
        }
    };
    render() {
        return (h(Host, { key: 'f32768ea8e7d035e6dff75f197cf02ac6f9c3cfb' }, this.backdropRequests.size > 0 && (h("div", { key: '9a3a3323493b7893e50113f5f0dc9c9646730ac3', class: "backdrop", "data-name": "backdrop", onClick: this.handleBackdropClick, "aria-hidden": "true" })), h("slot", { key: 'aa41905e8bf88bde0fe90a283d50f712ac466a7c' })));
    }
    static get is() { return "at-sidebar-provider"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-sidebar-provider.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-sidebar-provider.css"]
        };
    }
    static get states() {
        return {
            "panels": {},
            "backdropRequests": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiSidebarProviderChange",
                "name": "atuiSidebarProviderChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits whenever a registered panel's open state changes, with the panel's id, side, and new open state.\nNamed distinctly from at-sidebar's own `atuiSidebarChange` (a plain boolean) \u2014 a nested at-sidebar's\nevent bubbles by default, and sharing the same name would let a listener on this element receive\neither shape with no way to tell them apart."
                },
                "complexType": {
                    "original": "AtSidebarProviderChangeDetail",
                    "resolved": "{ id: string; side: \"left\" | \"right\"; isOpen: boolean; }",
                    "references": {
                        "AtSidebarProviderChangeDetail": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-sidebar/at-sidebar-provider/at-sidebar-provider.tsx",
                            "id": "src/components/at-sidebar/at-sidebar-provider/at-sidebar-provider.tsx::AtSidebarProviderChangeDetail"
                        }
                    }
                }
            }, {
                "method": "atuiSidebarBackdropChange",
                "name": "atuiSidebarBackdropChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits true when at least one registered panel is a modal (backdropped, mode=\"over\") overlay, false when none are. at-sidebar-inset listens for this to go inert while a modal panel is open."
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
            "registerPanel": {
                "complexType": {
                    "signature": "(id: string, state: AtSidebarProviderPanelState) => Promise<symbol>",
                    "parameters": [{
                            "name": "id",
                            "type": "string",
                            "docs": ""
                        }, {
                            "name": "state",
                            "type": "{ side: \"left\" | \"right\"; isOpen: boolean; }",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "AtSidebarProviderPanelState": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-sidebar/at-sidebar-provider/at-sidebar-provider.tsx",
                            "id": "src/components/at-sidebar/at-sidebar-provider/at-sidebar-provider.tsx::AtSidebarProviderPanelState"
                        }
                    },
                    "return": "Promise<symbol>"
                },
                "docs": {
                    "text": "Registers a panel with the provider. Called by a child at-sidebar on load.\nReturns an owner token the caller must pass back to unregisterPanel.",
                    "tags": []
                }
            },
            "unregisterPanel": {
                "complexType": {
                    "signature": "(id: string, owner: symbol) => Promise<void>",
                    "parameters": [{
                            "name": "id",
                            "type": "string",
                            "docs": ""
                        }, {
                            "name": "owner",
                            "type": "symbol",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Removes a panel from the provider. Called by a child at-sidebar on\ndisconnect with the owner token it received from registerPanel \u2014 a\nstale instance's call is ignored if another instance has since\nre-registered under the same id.",
                    "tags": []
                }
            },
            "setOpen": {
                "complexType": {
                    "signature": "(id: string, isOpen: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "id",
                            "type": "string",
                            "docs": ""
                        }, {
                            "name": "isOpen",
                            "type": "boolean",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Sets a panel's open state directly.",
                    "tags": []
                }
            },
            "toggle": {
                "complexType": {
                    "signature": "(id: string) => Promise<void>",
                    "parameters": [{
                            "name": "id",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Toggles a panel's open state.",
                    "tags": []
                }
            },
            "getIsOpen": {
                "complexType": {
                    "signature": "(id: string) => Promise<boolean>",
                    "parameters": [{
                            "name": "id",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "Returns a panel's current open state.",
                    "tags": []
                }
            },
            "setBackdrop": {
                "complexType": {
                    "signature": "(id: string, active: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "id",
                            "type": "string",
                            "docs": ""
                        }, {
                            "name": "active",
                            "type": "boolean",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "A panel reports whether it currently needs the shared backdrop (mode=\"over\", backdrop=true, and open). The provider renders a single backdrop while any panel requests one, so two modal panels never stack two scrims.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
