import axios from 'axios';

const TODO_API_URL = "http://localhost:3001/todos/";

type TodoItemAPIProps = {
    id: number;
    name: string;
    isCompleted: boolean;
}

export const postTodoAPI = async (todo: TodoItemAPIProps) => {
    await axios
        .post(`${TODO_API_URL}`, todo)
        .catch((error) => {
            console.error(error);
        });
};

export const patchTodoAPI = async (todoId: number, val: string | boolean) => {
    if (typeof val === "string") {
        await axios
            .patch(`${TODO_API_URL}${todoId}`, { name: val })
            .catch((error) => {
                console.error(error);
            });
    } else if (typeof val === "boolean") {
        await axios
            .patch(`${TODO_API_URL}${todoId}`, { isCompleted: val })
            .catch((error) => {
                console.error(error);
            });
    }
};

export const deleteTodoAPI = async (todoId: number) => {
    await axios
        .delete(`${TODO_API_URL}${todoId}`)
        .catch((error) => {
            console.error(error);
        });
};

export const getTodoAPI = async (andParam?: boolean): Promise<TodoItemAPIProps[]> => {
    try {
        let params = {};
        if (andParam !== undefined) {
            params = { isCompleted: andParam };
        }
        const response = await axios.get(TODO_API_URL, { params });
        if (response) {
            return response.data;
        }
        return [];
    } catch (error) {
        console.error(error);
        return [];
    }
};

