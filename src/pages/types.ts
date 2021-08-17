export type TodoType = {
    id: number;
    text: string;
    completed: boolean;
    date: string;
}

export type TodoAction = "checked" | "deleted"