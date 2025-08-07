const FOCUSABLE_SELECTOR = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
function getFocusableElements(container) {
    return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR));
}
function focusElementAtIndex(elements, index) {
    if (elements.length === 0)
        return;
    const clampedIndex = Math.max(0, Math.min(index, elements.length - 1));
    elements[clampedIndex].focus();
}
function getCurrentFocusIndex(elements) {
    return elements.indexOf(document.activeElement);
}
function handleArrowNavigation(event, container) {
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
function handleHomeEndNavigation(event, container) {
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

export { handleHomeEndNavigation as a, handleArrowNavigation as h };
//# sourceMappingURL=p-CF3ljWUs.js.map

//# sourceMappingURL=p-CF3ljWUs.js.map