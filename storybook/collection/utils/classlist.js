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
                const stringPropValue = String(propValue);
                if (variants[propName]?.[stringPropValue]) {
                    variantClassNames.push(variants[propName][stringPropValue] || '');
                }
            });
        }
        // Process default variants
        if (defaultVariants && variants) {
            Object.entries(defaultVariants).forEach(([variantName, variantValue]) => {
                if (props && typeof props[variantName] !== 'undefined') {
                    return; // Skip if variant is specified in props
                }
                const stringVariantValue = String(variantValue);
                if (variants[variantName]?.[stringVariantValue]) {
                    variantClassNames.push(variants[variantName][stringVariantValue] || '');
                }
            });
        }
        // Process compound variants
        if (compoundVariants) {
            compoundVariants.forEach((compoundVariant) => {
                const { class: compoundClass, className: compoundClassName, ...conditions } = compoundVariant;
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
