import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => axios.get(baseUrl);

const create = (payload) => axios.post(baseUrl, payload);

const remove = (id) => axios.delete(`${baseUrl}/${Number(id)}`);

const update = (id, payload) => axios.put(`${baseUrl}/${Number(id)}`, payload);

export default { getAll, create, remove, update };
