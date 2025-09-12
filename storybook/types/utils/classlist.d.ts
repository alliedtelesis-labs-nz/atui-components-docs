import { ClassValue } from 'clsx';
type VariantValue = string | number | boolean;
type ClassProp = string | undefined | null;
type VariantProps = Record<string, VariantValue>;
type VariantConfig = Record<string, Record<string, ClassProp>>;
type CVAProperties = {
    variants?: VariantConfig;
    defaultVariants?: VariantProps;
    compoundVariants?: Array<Record<string, any> & {
        class?: string;
        className?: string;
    }>;
};
/**
 * A utility function for creating conditional class names similar to class-variance-authority
 * but implemented locally to avoid dependency issues.
 */
export declare function classlist(base: ClassValue, config?: CVAProperties): (props?: Record<string, any>) => string;
/**
 * Combines class names with clsx
 */
export declare function cn(...inputs: ClassValue[]): string;
export {};
