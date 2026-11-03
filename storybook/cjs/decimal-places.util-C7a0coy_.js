'use strict';

const decimalsIn = (value) => {
    if (!isFinite(value))
        return 0;
    const [mantissa, exponent] = String(value).toLowerCase().split('e');
    const fractionDigits = mantissa.split('.')[1]?.length ?? 0;
    return Math.max(0, fractionDigits - Number(exponent ?? 0));
};
const effectiveDecimalPlaces = (decimalPlaces, step) => Math.max(0, decimalPlaces ?? 0, decimalsIn(Number(step ?? 1)));
const roundToDecimalPlaces = (value, places) => Number(value.toFixed(places));

exports.effectiveDecimalPlaces = effectiveDecimalPlaces;
exports.roundToDecimalPlaces = roundToDecimalPlaces;
