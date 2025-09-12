var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { clsx } from "clsx";
/**
 * A utility function for creating conditional class names similar to class-variance-authority
 * but implemented locally to avoid dependency issues.
 */
export function classlist(base, config) {
    return function (props) {
        const { variants = {}, defaultVariants = {}, compoundVariants = [], } = config || {};
        const variantClassNames = [];
        // Process variants
        if (props && variants) {
            Object.entries(props).forEach(([propName, propValue]) => {
                var _a;
                const stringPropValue = String(propValue);
                if ((_a = variants[propName]) === null || _a === void 0 ? void 0 : _a[stringPropValue]) {
                    variantClassNames.push(variants[propName][stringPropValue] || '');
                }
            });
        }
        // Process default variants
        if (defaultVariants && variants) {
            Object.entries(defaultVariants).forEach(([variantName, variantValue]) => {
                var _a;
                if (props && typeof props[variantName] !== 'undefined') {
                    return; // Skip if variant is specified in props
                }
                const stringVariantValue = String(variantValue);
                if ((_a = variants[variantName]) === null || _a === void 0 ? void 0 : _a[stringVariantValue]) {
                    variantClassNames.push(variants[variantName][stringVariantValue] || '');
                }
            });
        }
        // Process compound variants
        if (compoundVariants) {
            compoundVariants.forEach((compoundVariant) => {
                const { class: compoundClass, className: compoundClassName } = compoundVariant, conditions = __rest(compoundVariant, ["class", "className"]);
                const allConditionsMet = Object.entries(conditions).every(([condName, condValue]) => {
                    return (props &&
                        String(props[condName]) === String(condValue));
                });
                if (allConditionsMet) {
                    const compoundClassToUse = compoundClass || compoundClassName || '';
                    if (compoundClassToUse) {
                        variantClassNames.push(compoundClassToUse);
                    }
                }
            });
        }
        return cn(base, ...variantClassNames);
    };
}
/**
 * Combines class names with clsx
 */
export function cn(...inputs) {
    return clsx(inputs);
}
//# sourceMappingURL=classlist.js.map
