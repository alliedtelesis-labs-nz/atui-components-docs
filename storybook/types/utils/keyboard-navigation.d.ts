export declare const FOCUSABLE_SELECTOR = "button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])";
export interface KeyboardNavigationOptions {
    container: HTMLElement;
    onEscape?: () => void;
    onEnter?: (target: HTMLElement) => void;
    onSpace?: (target: HTMLElement) => void;
    focusOnOpen?: boolean;
}
export declare function getFocusableElements(container: HTMLElement): HTMLElement[];
export declare function focusElementAtIndex(elements: HTMLElement[], index: number): void;
export declare function getCurrentFocusIndex(elements: HTMLElement[]): number;
export declare function handleArrowNavigation(event: KeyboardEvent, container: HTMLElement): void;
export declare function handleHomeEndNavigation(event: KeyboardEvent, container: HTMLElement): void;
export declare function handleTabFocusTrap(event: KeyboardEvent, container: HTMLElement): void;
export declare function createMenuKeydownHandler(options: KeyboardNavigationOptions): (event: KeyboardEvent) => void;
export declare function focusFirstElement(container: HTMLElement, delay?: number): void;
