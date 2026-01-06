export interface Toast extends ToastOptions {
    id: number;
    type: ToastType;
    message: string;
}
export interface ToastOptions {
    title?: string;
    position?: ToastPosition;
    timeout?: number;
    dismissible?: boolean;
    closeButton?: boolean;
}
export type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default';
export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export declare const DEFAULT_TOAST_OPTIONS: ToastOptions;
