export declare class ChartDrawGate {
    private readonly host;
    private readonly draw;
    private observer;
    private hasLaidOutWidth;
    constructor(host: HTMLElement, draw: () => void);
    requestDraw(): void;
    disconnect(): void;
    private drawOnceLaidOut;
}
