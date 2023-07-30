import axios from "axios";

const url = "http://localhost:3001/persons";
const getAll = () =>
{
    const request = axios.get(url);
    return request.then((response) => response.data);
}
const create = (newPerson) =>
{   

    const request = axios.post(url, newPerson);
    return request.then(response => response.data);
}

const deletePhone = (id) =>
{
    const request = axios.delete(`${url}/${id}`)
    return request.then((response => response.data));
}

const replacePhone = (id, newObject) =>
{
    const request = axios.put(`${url}/${id}`, newObject);
    return request.then(response => response.data);
}

export default {getAll, create, deletePhone, replacePhone};