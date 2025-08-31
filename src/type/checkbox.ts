
export interface CheckboxItem {
    id: string;
    name:string;
    checked:boolean;
}
export interface CheckboxData {
    categories: Record<string, CategoryData>;
}

export interface CategoryState {
    checked:boolean;
    indeterminate: boolean;
    items: CheckboxItem[];
}

export interface SelectAllState{
    checked:boolean;
    indeterminate:boolean;
}
export interface CheckboxState {
    selectAll: SelectAllState;
    categories: Record<string, CategoryState>;
}