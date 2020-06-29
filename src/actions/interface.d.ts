export interface Todo{
    id: number;
    title: string;
}

export interface GetTodosSuccess {
    todos: Todo[];
    type: GET_TODOS_SUCCESS;
}

export interface AppProps{
    todos: Todo[];
    getTodos: () => Promise<any>;
}

export interface AppState {
    isLoading: boolean;
}