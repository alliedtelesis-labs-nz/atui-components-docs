import { readPaletteColors } from "../types/chart-color";
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
