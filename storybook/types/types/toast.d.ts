export interface AtIToast extends AtIToastOptions {
    id: number;
    type: AtIToastType;
    message: string;
}
export interface AtIToastOptions {
    title?: string;
    position?: AtIToastPosition;
    timeout?: number;
    dismissible?: boolean;
    closeButton?: boolean;
}
export type AtIToastType = 'success' | 'error' | 'info' | 'warning' | 'default';
export type AtIToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export declare const DEFAULT_TOAST_OPTIONS: AtIToastOptions;
