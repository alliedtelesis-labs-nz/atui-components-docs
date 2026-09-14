/**
 * @category Layout
 * @description The draggable separator between two at-resizable-panel children of the same at-resizable-group. Supports pointer drag, keyboard resize (arrow keys, Home/End, Enter to collapse, double-click to reset), and reduced-motion.
 */
export declare class AtResizableHandleComponent {
    el: HTMLElement;
    /** Renders a small visual grip indicator on the handle. */
    has_grip: boolean;
    private isDragging;
    private prevState?;
    private direction;
    private group;
    private handleIndex;
    private prevId?;
    private nextId?;
    private directionObserver?;
    componentWillLoad(): void;
    componentDidLoad(): Promise<void>;
    private syncDirection;
    /**
     * The panels on either side of this handle can still be registering (each awaits an
     * @Method() call on the group) when this handle's own componentDidLoad runs, so the very
     * first lookup can legitimately come back empty. handleGroupChange retries this on every
     * subsequent broadcast until it resolves, rather than giving up after one attempt.
     */
    private resolveAdjacentPanels;
    disconnectedCallback(): void;
    private clearBodyDragStyles;
    private handleGroupChange;
    private clientPos;
    private handlePointerDown;
    private handlePointerMove;
    private handlePointerEnd;
    private handleKeyDown;
    private toggleAdjacentCollapse;
    private handleDoubleClick;
    render(): any;
}
