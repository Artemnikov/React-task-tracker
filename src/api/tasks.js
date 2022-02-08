import axios from "axios";

const uri = "http://localhost:3001/tasks";

export const getTasks = async () => {
    return await axios.get(uri)
}

export const deleteTask = async (id) => {
    return await axios.delete(`${uri}/${id}`)
}

export const createTask = async (task) => {
    return await axios.post(uri, task)
}

export const updateTask = async (task) => {
    return await axios.put(`${uri}/${task.id}`, task)
}