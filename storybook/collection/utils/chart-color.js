import { color } from "chart.js/helpers";
import { AtChartColorPalette, readPaletteColors } from "../types/chart-color";
export function getChartColors(palette) {
    if (Array.isArray(palette)) {
        return palette;
    }
    return readPaletteColors(palette);
}
export function generateColourPalette(dataCount) {
    const startHue = 0;
    const hueStep = 360 / dataCount;
    const saturation = 75;
    const lightness = 75;
    const colours = [];
    for (let i = 0; i < dataCount; i++) {
        const variantHue = startHue + ((hueStep * i) % 360);
        colours.push(`hsl(${variantHue}, ${saturation}%, ${lightness}%)`);
    }
    return colours;
}
const DARKEN = 0.7;
const LIGHTEN = 0.75;
const SATURATE = 0.1;
const TONES = 3;
const PASS_DARKEN = 0.25;
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
export function resolveSeriesColors(colors, count, palette) {
    const base = colors.filter(Boolean);
    if (!base.length) {
        return [];
    }
    if (palette !== AtChartColorPalette.CATEGORICAL || count <= base.length) {
        return Array.from({ length: count }, (_, index) => base[index % base.length]);
    }
    const slots = base.length;
    return Array.from({ length: count }, (_, index) => {
        const pass = Math.floor(index / slots);
        const slot = index % slots;
        const tone = (pass + slot) % TONES;
        const lap = Math.floor(pass / TONES);
        if (tone === 0 && lap === 0) {
            return base[slot];
        }
        if (tone === 0) {
            return color(base[slot])
                .darken(PASS_DARKEN * lap)
                .hslString();
        }
        const isDeep = tone === 1;
        const strength = (lap + 1) / (lap + 1.6);
        const shade = isDeep
            ? color(base[slot])
                .saturate(SATURATE)
                .darken(DARKEN * strength)
            : color(base[slot])
                .desaturate(SATURATE)
                .lighten(LIGHTEN * strength);
        return shade.hslString();
    });
}
