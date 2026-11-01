const LIGHT_TEXT = 'var(--token-color-base-slate-100)';
const DARK_TEXT = 'var(--token-color-base-slate-900)';
const LIGHT_TEXT_RGB = [241, 245, 249];
const DARK_TEXT_RGB = [15, 23, 42];
const BLACK_CLAMP = 0.022;
const BLACK_CLAMP_EXPONENT = 1.414;
const LOW_CONTRAST_CUTOFF = 0.1;
function screenLuminance([red, green, blue]) {
    const luminance = 0.2126729 * Math.pow(red / 255, 2.4) +
        0.7151522 * Math.pow(green / 255, 2.4) +
        0.072175 * Math.pow(blue / 255, 2.4);
    return luminance >= BLACK_CLAMP
        ? luminance
        : luminance + Math.pow(BLACK_CLAMP - luminance, BLACK_CLAMP_EXPONENT);
}
function apcaLightnessContrast(text, background) {
    const textLuminance = screenLuminance(text);
    const backgroundLuminance = screenLuminance(background);
    if (backgroundLuminance > textLuminance) {
        const contrast = (Math.pow(backgroundLuminance, 0.56) -
            Math.pow(textLuminance, 0.57)) *
            1.14;
        return contrast > LOW_CONTRAST_CUTOFF ? contrast - 0.027 : 0;
    }
    const contrast = (Math.pow(backgroundLuminance, 0.65) - Math.pow(textLuminance, 0.62)) *
        1.14;
    return contrast < -LOW_CONTRAST_CUTOFF ? Math.abs(contrast + 0.027) : 0;
}
export function contrastTextColor(resolvedBackground) {
    const channels = resolvedBackground.match(/[\d.]+/g)?.map(Number);
    if (!channels || channels.length < 3) {
        return DARK_TEXT;
    }
    const [red, green, blue, alpha = 1] = channels;
    if (alpha === 0) {
        return DARK_TEXT;
    }
    const background = [red, green, blue];
    return apcaLightnessContrast(LIGHT_TEXT_RGB, background) >
        apcaLightnessContrast(DARK_TEXT_RGB, background)
        ? LIGHT_TEXT
        : DARK_TEXT;
}
