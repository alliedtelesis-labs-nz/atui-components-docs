export interface ISort {
    by?: string;
    ascending?: boolean;
}
export declare enum SortDirection {
    ASC = 1,
    DESC = -1
}
export type SortDirectionAsString = 'asc' | 'desc';
