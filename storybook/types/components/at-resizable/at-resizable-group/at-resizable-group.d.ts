import { EventEmitter } from '../../../stencil-public-runtime';
import { ResizeDirection, AtResizableChangeEntry, ResizablePanelConfig } from '../../../utils/resize-controller';
/**
 * @category Layout
 * @description A container that lays out at-resizable-panel children along one axis, separated by draggable at-resizable-handle elements. Owns the shared size math so a drag on one handle can grow one neighbor and shrink the other in lockstep.
 * @slot - Alternating at-resizable-panel and at-resizable-handle elements
 */
export declare class AtResizableGroupComponent {
    el: HTMLAtResizableGroupElement;
    /** Layout axis for child panels and handles. Reflected so a runtime change is observable as an attribute mutation (at-resizable-handle watches it to stay in sync). */
    direction: ResizeDirection;
    /** When set, panel sizes persist to localStorage under this key and are restored on load. */
    storage_key?: string;
    /** Fires whenever any panel's size or collapsed state changes, with the full ordered panel state. */
    atuiResizableChange: EventEmitter<AtResizableChangeEntry[]>;
    private controller;
    private panelEls;
    /**
     * Tracks which at-resizable-panel instance currently owns each registered id, so a stale
     * instance (unregistering after a new instance has already re-registered under the same id
     * during a remount) can't delete a live panel's registration out from under it — the same
     * race at-sidebar-provider's owner-token mechanism guards against.
     */
    private owners;
    private hasWarnedMisaligned;
    componentWillLoad(): void;
    /**
     * Registers a panel with the group. Called by a child at-resizable-panel on load. Registration
     * is async (the panel awaits this call), so registration order can differ from DOM order —
     * layout order is always derived fresh from live DOM position (getPanelOrder), never from the
     * sequence panels happened to register in. Returns an owner token the caller must pass back
     * to unregisterPanel.
     */
    registerPanel(id: string, el: HTMLElement, config: ResizablePanelConfig): Promise<symbol>;
    /**
     * Removes a panel from the group. Called by a child at-resizable-panel on disconnect with the
     * owner token it received from registerPanel — a stale instance's call is ignored if another
     * instance has since re-registered under the same id.
     */
    unregisterPanel(id: string, owner: symbol): Promise<void>;
    /** Returns a single panel's current size/collapsed state, for a panel to read its own starting state right after registering. */
    getPanelState(id: string): Promise<AtResizableChangeEntry | undefined>;
    /**
     * Resolves the panel ids on either side of the handle at the given index (position among
     * sibling at-resizable-handle elements). Returns null until both neighbors have actually
     * finished registering — handing out an id the controller has no state for would let a drag
     * or keyboard nudge silently no-op against a panel that never registered (or hasn't yet).
     */
    getAdjacentPanelIds(handleIndex: number): Promise<{
        prevId: string;
        nextId: string;
    } | null>;
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
    private getPanelOrder;
    /**
     * Warns once (like at-sidebar-provider's duplicate-id warning) if the group's children don't
     * strictly alternate panel/handle/panel — that alternation is the only thing that makes a
     * handle's position among sibling handles line up with the right pair of neighbor panels.
     * Broken alternation otherwise silently mispairs a handle with the wrong panels.
     */
    private warnIfMisaligned;
    /** Begins a drag on the handle at handleIndex, capturing the group's current pixel size along its axis. */
    beginDrag(handleIndex: number, startClientPos: number): Promise<void>;
    /** Updates an in-progress drag with the pointer's current position along the resize axis. */
    updateDrag(clientPos: number): Promise<void>;
    /** Ends the in-progress drag and persists the result, if storage_key is set. */
    endDrag(): Promise<void>;
    /** Keyboard nudge: moves deltaPercent from the next panel into the previous panel (negative shrinks it). */
    nudge(handleIndex: number, deltaPercent: number): Promise<void>;
    /** Jumps the previous panel to its min (toStart) or max (!toStart) bound. */
    jumpToBound(handleIndex: number, toStart: boolean): Promise<void>;
    /** Resets both panels adjacent to the handle back to their default_size. */
    resetPair(handleIndex: number): Promise<void>;
    /** Collapses a panel by id, if collapsible. Called by at-resizable-panel's own collapse() method. */
    collapsePanel(id: string): Promise<void>;
    /** Expands a panel by id. Called by at-resizable-panel's own expand() method. */
    expandPanel(id: string): Promise<void>;
    private applyStyles;
    render(): any;
}
