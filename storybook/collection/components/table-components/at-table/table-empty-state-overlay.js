export class AtTableEmptyStateOverlay {
    el;
    placeholder;
    resizeObserver;
    onAttachedChange;
    init(params) {
        this.el = document.createElement('div');
        this.el.className = 'w-full';
        this.el.setAttribute('data-name', 'no-data-overlay');
        this.placeholder = document.createElement('at-placeholder');
        this.placeholder.size = 'md';
        this.el.appendChild(this.placeholder);
        this.applyEmptyState(params);
        this.resizeObserver = new ResizeObserver(() => {
            const height = this.el.offsetHeight;
            if (height > 0) {
                params.onHeightChange(height);
            }
        });
        this.resizeObserver.observe(this.el);
        this.onAttachedChange = params.onAttachedChange;
        this.onAttachedChange(true);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.applyEmptyState(params);
    }
    destroy() {
        this.resizeObserver.disconnect();
        this.onAttachedChange(false);
    }
    applyEmptyState(emptyState) {
        this.placeholder.type = emptyState.type;
        this.placeholder.placeholder_title = emptyState.title;
    }
}
