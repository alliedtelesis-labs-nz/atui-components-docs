import { h, Host, } from "@stencil/core";
import { ResizeController, } from "../../../utils/resize-controller";
/**
 * @category Layout
 * @description A container that lays out at-resizable-panel children along one axis, separated by draggable at-resizable-handle elements. Owns the shared size math so a drag on one handle can grow one neighbor and shrink the other in lockstep.
 * @slot - Alternating at-resizable-panel and at-resizable-handle elements
 */
export class AtResizableGroupComponent {
    el;
    /** Layout axis for child panels and handles. Reflected so a runtime change is observable as an attribute mutation (at-resizable-handle watches it to stay in sync). */
    direction = 'horizontal';
    /** When set, panel sizes persist to localStorage under this key and are restored on load. */
    storage_key;
    /** Fires whenever any panel's size or collapsed state changes, with the full ordered panel state. */
    atuiResizableChange;
    controller;
    panelEls = new Map();
    /**
     * Tracks which at-resizable-panel instance currently owns each registered id, so a stale
     * instance (unregistering after a new instance has already re-registered under the same id
     * during a remount) can't delete a live panel's registration out from under it — the same
     * race at-sidebar-provider's owner-token mechanism guards against.
     */
    owners = new Map();
    hasWarnedMisaligned = false;
    componentWillLoad() {
        this.controller = new ResizeController({
            direction: this.direction,
            storageKey: this.storage_key,
            onChange: () => {
                this.applyStyles();
                const snapshot = this.getPanelOrder()
                    .map((id) => this.controller.getEntry(id))
                    .filter((entry) => !!entry);
                this.atuiResizableChange.emit(snapshot);
            },
        });
    }
    /**
     * Registers a panel with the group. Called by a child at-resizable-panel on load. Registration
     * is async (the panel awaits this call), so registration order can differ from DOM order —
     * layout order is always derived fresh from live DOM position (getPanelOrder), never from the
     * sequence panels happened to register in. Returns an owner token the caller must pass back
     * to unregisterPanel.
     */
    async registerPanel(id, el, config) {
        const owner = Symbol(id);
        this.owners.set(id, owner);
        this.panelEls.set(id, el);
        this.controller.registerPanel(id, config);
        return owner;
    }
    /**
     * Removes a panel from the group. Called by a child at-resizable-panel on disconnect with the
     * owner token it received from registerPanel — a stale instance's call is ignored if another
     * instance has since re-registered under the same id.
     */
    async unregisterPanel(id, owner) {
        if (this.owners.get(id) !== owner)
            return;
        this.owners.delete(id);
        this.panelEls.delete(id);
        this.controller.unregisterPanel(id);
    }
    /** Returns a single panel's current size/collapsed state, for a panel to read its own starting state right after registering. */
    async getPanelState(id) {
        return this.controller.getEntry(id);
    }
    /**
     * Resolves the panel ids on either side of the handle at the given index (position among
     * sibling at-resizable-handle elements). Returns null until both neighbors have actually
     * finished registering — handing out an id the controller has no state for would let a drag
     * or keyboard nudge silently no-op against a panel that never registered (or hasn't yet).
     */
    async getAdjacentPanelIds(handleIndex) {
        this.warnIfMisaligned();
        const order = this.getPanelOrder();
        const prevId = order[handleIndex];
        const nextId = order[handleIndex + 1];
        if (!prevId || !nextId)
            return null;
        if (!this.panelEls.has(prevId) || !this.panelEls.has(nextId)) {
            return null;
        }
        return { prevId, nextId };
    }
    /**
     * All at-resizable-panel children's ids, in live DOM order — deliberately not filtered to
     * "already registered" panels. Registration is async, so a panel that hasn't registered yet
     * would otherwise be skipped rather than counted, letting an earlier-registering later
     * sibling shift into a lower position temporarily and hand a handle the wrong neighbor pair
     * (a real race observed in practice, not theoretical). DOM position is known synchronously
     * and doesn't change here, so it's the only ordering signal that can't go stale mid-registration.
     * getAdjacentPanelIds separately checks panelEls before handing an id out, so a not-yet- (or
     * never-) registered panel still counted here doesn't reach a caller as a usable neighbor.
     */
    getPanelOrder() {
        return Array.from(this.el.children)
            .filter((child) => child.tagName.toLowerCase() === 'at-resizable-panel')
            .map((child) => child.id);
    }
    /**
     * Warns once (like at-sidebar-provider's duplicate-id warning) if the group's children don't
     * strictly alternate panel/handle/panel — that alternation is the only thing that makes a
     * handle's position among sibling handles line up with the right pair of neighbor panels.
     * Broken alternation otherwise silently mispairs a handle with the wrong panels.
     */
    warnIfMisaligned() {
        if (this.hasWarnedMisaligned)
            return;
        const relevant = Array.from(this.el.children).filter((child) => {
            const tag = child.tagName.toLowerCase();
            return (tag === 'at-resizable-panel' || tag === 'at-resizable-handle');
        });
        const isAlternating = relevant.length % 2 === 1 &&
            relevant.every((child, index) => {
                const tag = child.tagName.toLowerCase();
                return index % 2 === 0
                    ? tag === 'at-resizable-panel'
                    : tag === 'at-resizable-handle';
            });
        if (relevant.length > 0 && !isAlternating) {
            this.hasWarnedMisaligned = true;
            console.warn('at-resizable-group: children must strictly alternate at-resizable-panel, at-resizable-handle, ..., at-resizable-panel (an odd count, starting and ending with a panel) — a handle may otherwise be paired with the wrong neighbors.');
        }
    }
    /** Begins a drag on the handle at handleIndex, capturing the group's current pixel size along its axis. */
    async beginDrag(handleIndex, startClientPos) {
        const ids = await this.getAdjacentPanelIds(handleIndex);
        if (!ids)
            return;
        const rect = this.el.getBoundingClientRect();
        const groupSizePx = this.direction === 'horizontal' ? rect.width : rect.height;
        this.controller.beginDrag(ids.prevId, ids.nextId, startClientPos, groupSizePx);
    }
    /** Updates an in-progress drag with the pointer's current position along the resize axis. */
    async updateDrag(clientPos) {
        this.controller.updateDrag(clientPos);
    }
    /** Ends the in-progress drag and persists the result, if storage_key is set. */
    async endDrag() {
        this.controller.endDrag();
    }
    /** Keyboard nudge: moves deltaPercent from the next panel into the previous panel (negative shrinks it). */
    async nudge(handleIndex, deltaPercent) {
        const ids = await this.getAdjacentPanelIds(handleIndex);
        if (!ids)
            return;
        this.controller.nudge(ids.prevId, ids.nextId, deltaPercent);
    }
    /** Jumps the previous panel to its min (toStart) or max (!toStart) bound. */
    async jumpToBound(handleIndex, toStart) {
        const ids = await this.getAdjacentPanelIds(handleIndex);
        if (!ids)
            return;
        this.controller.jumpToBound(ids.prevId, ids.nextId, toStart);
    }
    /** Resets both panels adjacent to the handle back to their default_size. */
    async resetPair(handleIndex) {
        const ids = await this.getAdjacentPanelIds(handleIndex);
        if (!ids)
            return;
        this.controller.resetPair(ids.prevId, ids.nextId);
    }
    /** Collapses a panel by id, if collapsible. Called by at-resizable-panel's own collapse() method. */
    async collapsePanel(id) {
        this.controller.collapse(id);
    }
    /** Expands a panel by id. Called by at-resizable-panel's own expand() method. */
    async expandPanel(id) {
        this.controller.expand(id);
    }
    applyStyles() {
        this.panelEls.forEach((el, id) => {
            const panel = this.controller.getPanel(id);
            if (!panel)
                return;
            if (panel.size === null) {
                el.style.flex = '1 1 0%';
            }
            else {
                el.style.flex = `0 0 ${panel.size}%`;
            }
            el.classList.toggle('is-collapsed', panel.isCollapsed);
        });
    }
    render() {
        return (h(Host, { key: '9add119598b56237d6cdc0e0570c0877e97af79a', class: `direction-${this.direction}`, "data-name": "resizable-group" }, h("slot", { key: 'fd293c65aa48f497148b1360ab14a73cb91bddf2' })));
    }
    static get is() { return "at-resizable-group"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-resizable-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-resizable-group.css"]
        };
    }
    static get properties() {
        return {
            "direction": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ResizeDirection",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "ResizeDirection": {
                            "location": "import",
                            "path": "../../../utils/resize-controller",
                            "id": "src/utils/resize-controller.ts::ResizeDirection",
                            "referenceLocation": "ResizeDirection"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Layout axis for child panels and handles. Reflected so a runtime change is observable as an attribute mutation (at-resizable-handle watches it to stay in sync)."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "direction",
                "defaultValue": "'horizontal'"
            },
            "storage_key": {
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
                    "text": "When set, panel sizes persist to localStorage under this key and are restored on load."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "storage_key"
            }
        };
    }
    static get events() {
        return [{
                "method": "atuiResizableChange",
                "name": "atuiResizableChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fires whenever any panel's size or collapsed state changes, with the full ordered panel state."
                },
                "complexType": {
                    "original": "AtResizableChangeEntry[]",
                    "resolved": "AtResizableChangeEntry[]",
                    "references": {
                        "AtResizableChangeEntry": {
                            "location": "import",
                            "path": "../../../utils/resize-controller",
                            "id": "src/utils/resize-controller.ts::AtResizableChangeEntry",
                            "referenceLocation": "AtResizableChangeEntry"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "registerPanel": {
                "complexType": {
                    "signature": "(id: string, el: HTMLElement, config: ResizablePanelConfig) => Promise<symbol>",
                    "parameters": [{
                            "name": "id",
                            "type": "string",
                            "docs": ""
                        }, {
                            "name": "el",
                            "type": "HTMLElement",
                            "docs": ""
                        }, {
                            "name": "config",
                            "type": "ResizablePanelConfig",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        },
                        "ResizablePanelConfig": {
                            "location": "import",
                            "path": "../../../utils/resize-controller",
                            "id": "src/utils/resize-controller.ts::ResizablePanelConfig",
                            "referenceLocation": "ResizablePanelConfig"
                        }
                    },
                    "return": "Promise<symbol>"
                },
                "docs": {
                    "text": "Registers a panel with the group. Called by a child at-resizable-panel on load. Registration\nis async (the panel awaits this call), so registration order can differ from DOM order \u2014\nlayout order is always derived fresh from live DOM position (getPanelOrder), never from the\nsequence panels happened to register in. Returns an owner token the caller must pass back\nto unregisterPanel.",
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
                    "text": "Removes a panel from the group. Called by a child at-resizable-panel on disconnect with the\nowner token it received from registerPanel \u2014 a stale instance's call is ignored if another\ninstance has since re-registered under the same id.",
                    "tags": []
                }
            },
            "getPanelState": {
                "complexType": {
                    "signature": "(id: string) => Promise<AtResizableChangeEntry | undefined>",
                    "parameters": [{
                            "name": "id",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "AtResizableChangeEntry": {
                            "location": "import",
                            "path": "../../../utils/resize-controller",
                            "id": "src/utils/resize-controller.ts::AtResizableChangeEntry",
                            "referenceLocation": "AtResizableChangeEntry"
                        }
                    },
                    "return": "Promise<AtResizableChangeEntry>"
                },
                "docs": {
                    "text": "Returns a single panel's current size/collapsed state, for a panel to read its own starting state right after registering.",
                    "tags": []
                }
            },
            "getAdjacentPanelIds": {
                "complexType": {
                    "signature": "(handleIndex: number) => Promise<{ prevId: string; nextId: string; } | null>",
                    "parameters": [{
                            "name": "handleIndex",
                            "type": "number",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<{ prevId: string; nextId: string; }>"
                },
                "docs": {
                    "text": "Resolves the panel ids on either side of the handle at the given index (position among\nsibling at-resizable-handle elements). Returns null until both neighbors have actually\nfinished registering \u2014 handing out an id the controller has no state for would let a drag\nor keyboard nudge silently no-op against a panel that never registered (or hasn't yet).",
                    "tags": []
                }
            },
            "beginDrag": {
                "complexType": {
                    "signature": "(handleIndex: number, startClientPos: number) => Promise<void>",
                    "parameters": [{
                            "name": "handleIndex",
                            "type": "number",
                            "docs": ""
                        }, {
                            "name": "startClientPos",
                            "type": "number",
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
                    "text": "Begins a drag on the handle at handleIndex, capturing the group's current pixel size along its axis.",
                    "tags": []
                }
            },
            "updateDrag": {
                "complexType": {
                    "signature": "(clientPos: number) => Promise<void>",
                    "parameters": [{
                            "name": "clientPos",
                            "type": "number",
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
                    "text": "Updates an in-progress drag with the pointer's current position along the resize axis.",
                    "tags": []
                }
            },
            "endDrag": {
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
                    "text": "Ends the in-progress drag and persists the result, if storage_key is set.",
                    "tags": []
                }
            },
            "nudge": {
                "complexType": {
                    "signature": "(handleIndex: number, deltaPercent: number) => Promise<void>",
                    "parameters": [{
                            "name": "handleIndex",
                            "type": "number",
                            "docs": ""
                        }, {
                            "name": "deltaPercent",
                            "type": "number",
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
                    "text": "Keyboard nudge: moves deltaPercent from the next panel into the previous panel (negative shrinks it).",
                    "tags": []
                }
            },
            "jumpToBound": {
                "complexType": {
                    "signature": "(handleIndex: number, toStart: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "handleIndex",
                            "type": "number",
                            "docs": ""
                        }, {
                            "name": "toStart",
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
                    "text": "Jumps the previous panel to its min (toStart) or max (!toStart) bound.",
                    "tags": []
                }
            },
            "resetPair": {
                "complexType": {
                    "signature": "(handleIndex: number) => Promise<void>",
                    "parameters": [{
                            "name": "handleIndex",
                            "type": "number",
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
                    "text": "Resets both panels adjacent to the handle back to their default_size.",
                    "tags": []
                }
            },
            "collapsePanel": {
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
                    "text": "Collapses a panel by id, if collapsible. Called by at-resizable-panel's own collapse() method.",
                    "tags": []
                }
            },
            "expandPanel": {
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
                    "text": "Expands a panel by id. Called by at-resizable-panel's own expand() method.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
