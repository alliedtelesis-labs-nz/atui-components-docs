export interface AtITreeNode {
    id: string;
    displayName: string;
    children: AtITreeNode[];
    selected?: boolean;
    tooltip?: string;
    depth?: number;
}
