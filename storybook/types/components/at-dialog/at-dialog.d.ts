import { EventEmitter } from '../../stencil-public-runtime';
/**
 * Why a dialog closed.
 *
 * - `backdrop` — the user clicked outside the panel (requires `close_backdrop`).
 * - `esc` — the user pressed Escape (requires `close_esc`).
 * - `close` — the `<dialog>` closed itself without this component initiating it,
 *   e.g. a `<form method="dialog">` submit inside the slot.
 * - `programmatic` — the host called `closeDialog()` or `toggleDialog()`.
 */
export type AtDialogCloseReason = 'backdrop' | 'esc' | 'close' | 'programmatic';
/**
 * @category Overlays
 * @description A modal dialog component for displaying content that requires user interaction or attention. Features backdrop click handling, escape key support, and programmatic open/close control.
 *
 * @Event - atuiDialogChange: Emitted when dialog is opened/closed.
 * @Event - atuiDialogClose: Emitted once per close, carrying the reason the dialog closed.
 *
 * @slot - Display content within the dialog
 *
 */
export declare class AtDialogComponent {
    el: HTMLAtDialogElement;
    /**
     * Role of the dialog element. Can be either 'dialog' or 'alertdialog'
     */
    role: 'dialog' | 'alertdialog';
    /**
     * Whether to show a backdrop behind the panel, prevents any interaction with background UI.
     */
    backdrop: boolean;
    /**
     * Will close the dialog if clicked
     */
    close_backdrop: boolean;
    /**
     * Whether pressing Escape dismisses the dialog. Set to `false` alongside
     * `close_backdrop={false}` for a flow that must confirm before closing, such
     * as an unsaved-changes guard — the host then closes it via `closeDialog()`.
     */
    close_esc: boolean;
    /**
     * Data-id of an external element to use as the trigger. When provided, clicking the trigger will toggle the dialog.
     */
    trigger_id?: string;
    /**
     * Internal state to track if dialog is open
     */
    isOpen: boolean;
    /**
     * Emits an event when the dialog is toggled, with `event.detail` being true if the dialog is now open.
     * Emitted exactly once per open and once per close, whichever path caused it.
     */
    atuiDialogChange: EventEmitter<boolean>;
    /**
     * Emits once each time the dialog closes, with `event.detail.reason` describing
     * which path closed it. Always accompanies an `atuiDialogChange(false)`.
     */
    atuiDialogClose: EventEmitter<{
        reason: AtDialogCloseReason;
    }>;
    private dialog;
    private dialogWrapper;
    private triggerEls;
    private externalTriggerListeners;
    /**
     * Toggles the dialog modal between open and closed states
     * @returns Promise that resolves when the dialog state is toggled
     */
    toggleDialog(): Promise<void>;
    /**
     * Opens the dialog modal
     * @returns Promise that resolves when the dialog is opened
     */
    openDialog(): Promise<void>;
    /**
     * Closes the dialog modal
     * @returns Promise that resolves when the dialog is closed
     */
    closeDialog(): Promise<void>;
    /**
     * The single path through which the dialog closes.
     *
     * Every caller routes through here, and `isOpen` is cleared *before*
     * `dialog.close()` runs, so the native `close` event — which the browser
     * queues as a task rather than dispatching synchronously — finds the dialog
     * already closed and returns without emitting again. That ordering is what
     * makes the exactly-once guarantee hold rather than depending on the event
     * being asynchronous.
     */
    private dismiss;
    /**
     * Getter method for the open state of the dialog
     * @returns The current open state of the dialog
     */
    getIsOpen(): Promise<boolean>;
    /**
     * The native `close` event. Reached only when something closed the `<dialog>`
     * without going through `dismiss()` — a `<form method="dialog">` submit in the
     * slot, say. Anything this component initiated has already cleared `isOpen`,
     * so `dismiss()` returns immediately and nothing is emitted twice.
     */
    private handleDialogClose;
    /**
     * Escape is handled here rather than left to the browser so the close carries
     * a reason and can be suppressed. `preventDefault()` runs on both branches:
     * without it the browser would close the dialog itself, which would either
     * bypass `close_esc={false}` or report the close as `'close'`.
     */
    private handleKeyDown;
    /**
     * The browser's own Escape handling surfaces as `cancel` and can reach the
     * dialog without a keydown this component sees. Suppress it too, so
     * `close_esc={false}` holds however Escape arrives.
     */
    private handleCancel;
    offClickHandler(event: any): void;
    componentDidLoad(): Promise<void>;
    disconnectedCallback(): void;
    private cleanupExternalTriggerListeners;
    private setupExternalTriggerListeners;
    render(): any;
}
