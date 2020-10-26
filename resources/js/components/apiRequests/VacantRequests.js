import axios from 'axios'
export const getVacants = async () =>{
    try {
        const res = await axios.get('/api/vacants')
        return res.data
    } catch (err) {
        console.log(err)
    }
}
export const createVacant = async (values)=>{
    try {
        const res = await axios.post('/api/vacants', values)
        return res.data
    } catch (err) {
        console.log(err)
    }
}
export const updateVacant = async (id, id_vacant, description, salary, duration, company, ability)=>{
    try {
        const values = {id_vacant, description, salary, duration, company, ability}
        const res = await axios.put(`/api/vacants/${id}`, values)
        return res.data
    } catch (err) {
        console.log(err)
    }
}
export const deleteVacant = async id =>{
    try {
        const res = await axios.delete(`/api/vacants/${id}`)
        return res.data
    } catch (err) {
        console.log(err)
    }
}