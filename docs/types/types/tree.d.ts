export interface TreeNode {
    id: string;
    displayName: string;
    children: TreeNode[];
    selected?: boolean;
    tooltip?: string;
    depth?: number;
}
