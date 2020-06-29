import { Todo, GetTodosSuccess } from "./interface";
import data from '../data/todos.json';

//types
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILURE = "GET_TODOS_FAILURE";

//action creators
export const getTodosSuccess = (todos: Todo[]): GetTodosSuccess => ({
    todos,
    type: GET_TODOS_SUCCESS
})

export const getTodos = () => {
    return (dispatch: (arg0:GetTodosSuccess) => void) => {
        const response = data;
        if (response.status === 200) {
            dispatch(getTodosSuccess(data.todos));
        } else {

        }
    }
}