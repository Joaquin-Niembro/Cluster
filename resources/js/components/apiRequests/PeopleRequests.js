import axios from "axios";
export const getPeople = async () => {
    try {
        const res = await axios.get("/api/people");
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
export const createPerson = async values => {
    try {
        const res = await axios.post("/api/people", values);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
export const updatePerson = async (
    id,
    id_person,
    name,
    apellidoPaterno,
    apellidoMaterno,
    email,
    address,
    institution,
    career
) => {
    try {
        const values = {
            id_person,
            name,
            apellidoPaterno,
            apellidoMaterno,
            email,
            address,
            institution,
            career
        };
        const res = await axios.put(`/api/people/${id}`, values);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
export const deletePerson = async id => {
    try {
        const res = await axios.delete(`/api/people/${id}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
