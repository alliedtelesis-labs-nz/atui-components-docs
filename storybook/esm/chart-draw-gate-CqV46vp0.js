// Chart.js keeps the size it measures at creation until its container
// resizes. Measured during the host framework's first render, a host can
// report a width the page never paints. Inside a hidden panel it reports
// zero, and a host whose height follows its canvas then stays collapsed
// when shown. The first ResizeObserver callback reports the laid-out size.
class ChartDrawGate {
    host;
    draw;
    observer = null;
    hasLaidOutWidth = false;
    constructor(host, draw) {
        this.host = host;
        this.draw = draw;
    }
    requestDraw() {
        if (this.hasLaidOutWidth && this.host.offsetWidth > 0) {
            this.draw();
            return;
        }
        this.hasLaidOutWidth = false;
        this.drawOnceLaidOut();
    }
    disconnect() {
        this.observer?.disconnect();
        this.observer = null;
        this.hasLaidOutWidth = false;
    }
    drawOnceLaidOut() {
        if (this.observer)
            return;
        this.observer = new ResizeObserver(([entry]) => {
            if (!entry.contentRect.width)
                return;
            this.disconnect();
            this.hasLaidOutWidth = true;
            this.draw();
        });
        this.observer.observe(this.host);
    }
}

export { ChartDrawGate as C };
