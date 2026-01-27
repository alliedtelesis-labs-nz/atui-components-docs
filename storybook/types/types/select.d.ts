export interface SelectOption {
    key?: string;
    value: string;
    disabled?: boolean;
    children?: SelectOption[];
}
