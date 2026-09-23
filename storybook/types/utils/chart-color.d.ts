import { AtChartColorPalette } from '../types/chart-color';
export declare function getChartColors(palette: AtChartColorPalette | string[]): string[] | null;
export declare function generateColourPalette(dataCount: number): string[];
/**
 * Returns `count` colours for a chart's series.
 *
 * Up to its length the palette is used as authored. Past that, `CATEGORICAL`
 * walks the hues and the tone at the same time (base, deep, pale, base), so
 * every step changes both and no two series share a colour until all three
 * tones of all ten hues are spent. Each further lap over the whole set pushes
 * its tones further apart again. Every other palette encodes a fixed set of
 * meanings, so it cycles as before.
 */
export declare function resolveSeriesColors(colors: string[], count: number, palette: AtChartColorPalette): string[];
