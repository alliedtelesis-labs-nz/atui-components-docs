'use strict';

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

/**
 * A utility function for creating conditional class names similar to class-variance-authority
 * but implemented locally to avoid dependency issues.
 */
function classlist(base, config) {
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
function cn(...inputs) {
    return clsx(inputs);
}

exports.classlist = classlist;
//# sourceMappingURL=classlist-BPb95vgj.js.map

//# sourceMappingURL=classlist-BPb95vgj.js.map