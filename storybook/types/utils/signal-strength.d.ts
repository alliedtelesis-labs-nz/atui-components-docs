export type AtSignalStrengthLevel = 0 | 1 | 2 | 3 | 4;
export declare const AT_SIGNAL_STRENGTH_DEFAULT_THRESHOLDS: readonly number[];
export declare const AT_SIGNAL_STRENGTH_LABELS: Record<AtSignalStrengthLevel, string>;
export declare function atHasRssi(rssi: unknown): rssi is number;
export declare function atParseRssi(value: unknown): number | undefined;
/**
 * Counts how many of the minimum-dBm thresholds an RSSI value meets, capped at four bars.
 * A missing or non-numeric value is level 0.
 */
export declare function atGetSignalLevel(rssi: number | null | undefined, thresholds?: readonly number[]): AtSignalStrengthLevel;
export declare function atFormatRssi(rssi: number | null | undefined): string;
