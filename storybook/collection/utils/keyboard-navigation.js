export const FOCUSABLE_SELECTOR = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
export function getFocusableElements(container) {
    return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR));
}
export function focusElementAtIndex(elements, index) {
    if (elements.length === 0)
        return;
    const clampedIndex = Math.max(0, Math.min(index, elements.length - 1));
    elements[clampedIndex].focus();
}
export function getCurrentFocusIndex(elements) {
    return elements.indexOf(document.activeElement);
}
export function handleArrowNavigation(event, container) {
    if (event.key !== 'ArrowDown' &&
        event.key !== 'ArrowUp' &&
        event.key !== 'ArrowLeft' &&
        event.key !== 'ArrowRight') {
        return;
    }
    event.preventDefault();
    const focusableElements = getFocusableElements(container);
    if (focusableElements.length === 0)
        return;
    const currentIndex = getCurrentFocusIndex(focusableElements);
    let nextIndex = 0;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        nextIndex =
            currentIndex < 0 || currentIndex >= focusableElements.length - 1
                ? 0
                : currentIndex + 1;
    }
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        nextIndex =
            currentIndex <= 0 ? focusableElements.length - 1 : currentIndex - 1;
    }
    focusElementAtIndex(focusableElements, nextIndex);
}
export function handleHomeEndNavigation(event, container) {
    if (event.key !== 'Home' && event.key !== 'End') {
        return;
    }
    event.preventDefault();
    const focusableElements = getFocusableElements(container);
    if (focusableElements.length === 0)
        return;
    if (event.key === 'Home') {
        focusElementAtIndex(focusableElements, 0);
    }
    else {
        focusElementAtIndex(focusableElements, focusableElements.length - 1);
    }
}
export function handleTabFocusTrap(event, container) {
    if (event.key !== 'Tab') {
        return;
    }
    const focusableElements = getFocusableElements(container);
    if (focusableElements.length === 0)
        return;
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    event.preventDefault();
    if (event.shiftKey) {
        if (document.activeElement === firstElement) {
            lastElement.focus();
        }
        else {
            const currentIndex = getCurrentFocusIndex(focusableElements);
            const nextIndex = currentIndex > 0
                ? currentIndex - 1
                : focusableElements.length - 1;
            focusElementAtIndex(focusableElements, nextIndex);
        }
    }
    else {
        if (document.activeElement === lastElement) {
            firstElement.focus();
        }
        else {
            const currentIndex = getCurrentFocusIndex(focusableElements);
            const nextIndex = currentIndex < focusableElements.length - 1
                ? currentIndex + 1
                : 0;
            focusElementAtIndex(focusableElements, nextIndex);
        }
    }
}
export function createMenuKeydownHandler(options) {
    return (event) => {
        const { container, onEscape, onEnter, onSpace } = options;
        if (event.key === 'Escape' && onEscape) {
            event.preventDefault();
            onEscape();
            return;
        }
        if (event.key === 'Enter' && onEnter) {
            event.preventDefault();
            onEnter(event.target);
            return;
        }
        if (event.key === ' ' && onSpace) {
            event.preventDefault();
            onSpace(event.target);
            return;
        }
        if (event.key === 'Tab') {
            handleTabFocusTrap(event, container);
            return;
        }
        handleArrowNavigation(event, container);
        handleHomeEndNavigation(event, container);
    };
}
export function focusFirstElement(container, delay = 50) {
    setTimeout(() => {
        const focusableElements = getFocusableElements(container);
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }, delay);
}
