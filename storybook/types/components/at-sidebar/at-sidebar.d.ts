import { EventEmitter } from '../../stencil-public-runtime';
export type AtSideBarWidth = 'menu' | 'panel-xs' | 'panel-sm' | 'panel-md' | 'panel-lg' | 'panel-xl' | 'auto';
/**
 * @category Navigation
 * @description A collapsible sidebar navigation component with menu support and responsive behavior. Features animation, auto-collapse, and keyboard navigation. Nest inside at-sidebar-provider (instead of using it standalone) to place more than one sidebar on the same page.
 * @slot sidebar-header - Header of the sidebar (likely to be atui-sidebar-trigger)
 * @slot sidebar-content - Content displayed in the sidebar (likely to be atui-sidebar-menu elements)
 * @slot sidebar-footer - Footer displayed in the sidebar
 * @slot page-content - Content of the page. Ignored when nested inside at-sidebar-provider — use at-sidebar-inset for that instead.
 */
export declare class AtSidebarComponent {
    /**
     * Position of the sidebar on the page
     */
    side: 'left' | 'right';
    /**
     * Width of the sidebar. If resizable, only sets the initial width — the user's drag (or a
     * restored persisted/collapsed size) takes over after that, and later changes to this prop
     * are not followed.
     */
    width: AtSideBarWidth;
    /**
     * Size of the sidebar when collapsed.
     */
    collapsible: 'offcanvas' | 'icon' | 'none';
    /**
     * How the sidenav interacts with main content when open
     */
    mode: 'over' | 'push';
    /**
     * Display a clickable backdrop when mode = over
     */
    backdrop: boolean;
    /**
     * Opens the sidebar by default when set
     */
    default_open?: boolean;
    /**
     * Identifies this panel so external elements can toggle it by adding a matching `data-sidebar` attribute, and so at-sidebar-trigger can address it remotely (`data-sidebar` on the trigger). Also used as the panel's id when nested inside at-sidebar-provider. Auto-generated when omitted.
     */
    trigger_id?: string;
    /**
     * Lets the user drag-resize the sidebar's width by its trailing edge, between min_width and
     * max_width. Off by default.
     */
    resizable: boolean;
    /**
     * Smallest width a drag or keyboard nudge can resize the sidebar down to — a hard floor, not
     * a threshold that closes it (any valid CSS length, including a design token var()). Ignored
     * unless resizable is true.
     */
    min_width: string;
    /**
     * Largest width a resizable sidebar can be dragged or nudged to (any valid CSS length,
     * including a design token var(), or 'none' for no ceiling — the sidebar can then be dragged
     * out to fill its entire group). Ignored unless resizable is true.
     */
    max_width: string;
    /**
     * When set, a resizable sidebar's width persists to localStorage under this key and is
     * restored on load. Ignored unless resizable is true.
     */
    storage_key?: string;
    isOpen: boolean;
    /**
     * Emits an even when the sidebar is toggled, with `event.detail` being true if the sidebar is now open
     */
    atuiSidebarChange: EventEmitter;
    /**
     * Emits the sidebar's current width in pixels whenever a resize drag or keyboard nudge
     * changes it. Only fires when resizable is true.
     */
    atuiSidebarResize: EventEmitter<number>;
    el: HTMLAtSidebarElement;
    private panelId;
    private hasLoaded;
    private hasExplicitTriggerId;
    private provider;
    private providerOwner?;
    private triggerEls;
    private externalTriggerListeners;
    private triggerObserver?;
    private sidebarEl?;
    private resizeHandleEl?;
    private resizeController?;
    private resizeGroupObserver?;
    private isDraggingResize;
    /** Set once registerResizePanels has actually run — see its own doc comment for why that's
     * deferred rather than unconditional in componentDidLoad. */
    private resizePanelsRegistered;
    /**
     * The id this sidebar registers itself under with its own ResizeController. panelId itself
     * isn't safe to persist under: without an explicit trigger_id it's regenerated randomly on
     * every load (see componentWillLoad), so a persisted size would never be found again next
     * time. storage_key is already required to be a stable, consumer-chosen string for
     * persistence to mean anything, so it doubles as the stable id when set; an explicit
     * trigger_id is stable too. Only falls back to the random panelId when neither is set, which
     * is fine — that's also the case storage_key-based persistence wasn't requested for anyway.
     */
    private get resizePanelId();
    /** Panel id representing "everything else" in the resize split — never rendered, just gives
     * the two-panel drag math a second id to shrink/grow against. */
    private get resizeContentId();
    /** ResizeController's beginDrag/nudge grow "prevId" as the pointer moves toward increasing
     * clientX. That's the sidebar itself for a left sidebar (handle sits on its trailing/right
     * edge), but the OTHER side's content for a right sidebar (handle sits on the sidebar's
     * leading/left edge, with content to its left) — swapping which id is prevId here is what
     * keeps "drag/arrow-right grows the thing left of the handle" true regardless of side. */
    private get resizePrevId();
    private get resizeNextId();
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    /**
     * A sidebar that is removed and re-inserted — an Angular @if, a Vue v-if, any framework
     * that moves the element — gets connectedCallback again but NOT componentWillLoad or
     * componentDidLoad, which Stencil runs only on first load. Everything those two set up was
     * torn down by disconnectedCallback, so without this the re-inserted element renders but is
     * inert: unregistered with its provider (so toggleSidebar and at-sidebar-trigger do
     * nothing), deaf to menu-item clicks, and with no resize controller behind its handle.
     */
    connectedCallback(): void;
    /** Re-binding waits on the provider lookup so bindToDom listens on the provider this
     * sidebar has just registered with, not the one it was under before being moved. */
    private reattach;
    /**
     * Resolved on every connect, not cached from first load: re-insertion can land the sidebar
     * under a different provider (or none at all).
     */
    private attachToProvider;
    private bindToDom;
    /**
     * resizable is a plain, externally-settable @Prop — a consumer can flip it post-mount (e.g. a
     * responsive/preference toggle) same as any other prop, even though componentDidLoad only
     * fires once. Without this, render()'s handle markup (which reacts to `resizable` on every
     * render) would appear interactive-looking with no resizeController behind it to act on drags
     * or key presses.
     */
    watchResizableForToggle(isResizable: boolean, wasResizable: boolean): void;
    /**
     * Unlike the container's own size (tracked live via resizeGroupObserver), min_width/max_width
     * only get resolved to px when something asks for them — without this, a consumer changing
     * either reactively would leave the controller enforcing stale bounds until an unrelated
     * container resize happened to trigger refreshResizeBounds anyway.
     */
    watchResizeBoundsChange(): void;
    componentDidRender(): void;
    disconnectedCallback(): void;
    /**
     * Toggles the sidebar's open state.
     */
    toggleSidebar(): Promise<void>;
    /**
     * Bridges isOpen (however it changed — trigger click or provider toggle) onto the resize
     * styling: closed means the width this.sidebarEl carries is whatever the ordinary
     * collapse-icon/-offcanvas/-none CSS says, not a stale dragged flex-basis, so the inline
     * override is cleared rather than left fighting that CSS. Reopening restores the last
     * dragged/persisted width.
     */
    watchIsOpenForResize(): void;
    /**
     * Getter method for the open state of the sidebar
     * @returns The current open state of the sidebar
     */
    getIsOpen(): Promise<boolean>;
    private isModalOverlay;
    private handleProviderChange;
    private handleBackdropClick;
    /**
    Automate closing of the menu via menu-item click if the menu is in offcanvas mode and currently open
     */
    private handleMenuItemClick;
    private isOwnNavigationItem;
    private setupExternalTriggers;
    private scanForTriggers;
    private updateTriggerAria;
    private cleanupExternalTriggerListeners;
    /**
     * The pixel size of the axis the drag/nudge math is a percentage of. Standalone, that's
     * at-sidebar's own box (.sidebar and .page-content are its direct flex children); nested in
     * at-sidebar-provider, at-sidebar only renders the <nav> itself — the provider is the flex
     * parent .sidebar and at-sidebar-inset actually share, so it's the one to measure there.
     */
    private groupSizePx;
    private pxToPercent;
    /**
     * min_width/max_width accept any valid CSS length (a bare px value or a design token var()),
     * OR max_width can be 'none' for no ceiling at all — briefly setting them as the sidebar's own
     * min-width/max-width and reading back getComputedStyle lets the browser resolve that, rather
     * than this component trying to parse CSS lengths itself. Only a probe, not a lasting
     * application: syncResizeStyling is the single place that actually applies them (only while
     * open — see its own comment for why), so this restores whatever was there before rather than
     * leaving its own temporary values in place, which would otherwise fight that when called
     * while the sidebar is closed (e.g. from the ResizeObserver in refreshResizeBounds, which can
     * fire regardless of open state).
     */
    private resolvePxBounds;
    /**
     * Controller + the ResizeObserver that keeps bounds current — neither depends on the sidebar
     * actually being open, so both are set up unconditionally as soon as resizable is on.
     * Registering the panels (which DOES need a real measurement) is deferred separately — see
     * registerResizePanels.
     */
    private initResizeController;
    /** Undoes initResizeController, for both real unmount (disconnectedCallback) and a live
     * resizable -> false toggle (watchResizableForToggle) — the latter needs the sidebar left in
     * the same, un-resized-looking state a sidebar that was never resizable would render as. */
    private teardownResize;
    /**
     * The width a resizable sidebar starts at, before any persisted or dragged size exists: read
     * back whatever the ordinary `w-${width}` token class renders it at, rather than this
     * component trying to resolve that token to a pixel value itself. That only works while the
     * sidebar is actually open, though — collapse-icon/-offcanvas/-none CSS shrinks a closed one
     * to ~0/collapsed width, and measuring THAT would permanently lock the "default" size in at
     * whatever the collapsed width happens to be instead of the real open one. So this is called
     * only once the sidebar is confirmed open (componentDidLoad if it starts open, otherwise
     * componentDidRender's guard once it first becomes open — see resizePanelsRegistered).
     */
    /**
     * .sidebar's `transition: width ...` (see at-sidebar.scss) animates the collapse-icon/
     * -offcanvas/-none width change on open/close. Measuring right on that same open transition —
     * which is exactly when this is called, from componentDidRender right as isOpen flips true —
     * would otherwise catch it mid-animation, near its collapsed starting width rather than its
     * real open one. Silencing the transition for one synchronous read (before the browser has
     * had a chance to actually start animating) sidesteps that without needing to wait it out.
     */
    private measureWidthPxIgnoringTransition;
    private registerResizePanels;
    private refreshResizeBounds;
    private handleResizeControllerChange;
    /**
     * Closed means whatever width the ordinary collapse-icon/-offcanvas/-none CSS gives .sidebar.
     * An inline flex-basis (or min/max-width) left over from being open would out-specificity that
     * CSS and get stuck showing a stale expanded width instead — or, at mount with default_open
     * false, break the collapsed width from the very first render — so all three are cleared
     * whenever closed rather than left in place, and only (re)applied once actually open.
     *
     * flex-basis in PIXELS, not the controller's own percentage — deliberately. Standalone,
     * .sidebar's immediate flex container is this.el, the same box groupSizePx measures, so a
     * percentage would resolve fine there. Nested in at-sidebar-provider, though, .sidebar's
     * immediate flex container is the at-sidebar HOST, which at-sidebar-provider.scss sizes as
     * `width: auto` (shrink-to-fit) — and per the flex spec, a percentage flex-basis against a
     * flex container with an indefinite size resolves as if it were 0, clamped back up only by
     * min-width. A pixel value has no such ambiguity: it's definite regardless of which box it's
     * read against, so the host's own shrink-to-fit sizing (and .sidebar's rendered width) both
     * end up correct in either arrangement.
     */
    private syncResizeStyling;
    private clearBodyDragStyles;
    private handleResizePointerDown;
    private handleResizePointerMove;
    private handleResizePointerEnd;
    private handleResizeKeyDown;
    render(): any;
}
