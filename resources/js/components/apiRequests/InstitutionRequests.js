import axios from 'axios'
export const getInstitutions = async () =>{
    try {
        const res = await axios.get('/api/institutions')
        
        return res.data
    } catch (err) {
        console.log(err)
    }
}
export const createInstitution = async (values) =>{
    try {
        const res = await axios.post('/api/institutions', values)
        return res.data
    } catch (err) {
        console.log(err)
    }
}
export const updateInstitution = async (id,id_institution,name, address) =>{
    try {
        const values = {id_institution,name, address}
        const res = await axios.put(`/api/institutions/${id}`, values)
        console.log(res.data)
        return res.data
    } catch (err) {
        console.log(err)
    }
}
export const deleteInstitution = async (id) =>{
    try {
        const res = await axios.delete(`/api/institutions/${id}`);
        return res.data
    } catch (err) {
        console.log(err)
    }
}