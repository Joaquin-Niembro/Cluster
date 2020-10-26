import axios from 'axios';
export const getCareers = async () =>{
    try {
        const res = await axios.get('/api/careers');
        return res.data;
    } catch (err) {
        console.log(err)
    }
}
export const createCareer = async (values) =>{
    try {
        
        const res = await axios.post('/api/careers', values)
        
        return res.data
    } catch (err) {
        console.log(err)
    }
}
export const createCareers = async (id_institution, name, address) =>{
    try {
        const body = {id_institution, name, address}
        const res = await axios.post('/api/institutions', body)
        
        return res
    } catch (err) {
        console.log(err)
    }
}
export const deleteCareer = async (id) =>{
    try {
        const res = await axios.delete(`/api/careers/${id}`);
        return res;
    } catch (err) {
        console.log(err)
    }
}
export const updateCareer =async (id_career, name, institution)=>{
    try {
        const body = {id_career, name, institution}
        const res = await axios.put(`/api/careers/${id_career}`, body);
        return res.data;
    } catch (err) {
        console.log(err)
    }
}