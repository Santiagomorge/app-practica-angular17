export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    editing?: boolean;
}

export type Filtertype = 'all' | 'active' | 'completed';