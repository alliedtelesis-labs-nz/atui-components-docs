export interface AtISelectOption {
    value: string;
    label?: string;
    disabled?: boolean;
    children?: AtISelectOption[];
}
