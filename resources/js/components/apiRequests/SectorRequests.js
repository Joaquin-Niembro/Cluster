import axios from 'axios'
export const getSectors = async () =>{
    try {
        const res = await axios.get('/api/sectors')
        return res.data
    } catch (err) {
        console.log(err)
    }
}
export const createSector = async (values)=>{
    try {
        const res = await axios.post('/api/sectors', values)
        return res.data
    } catch (err) {
        console.log(err)
    }
}
export const updateSector = async (id, id_sector, name, description)=>{
    try {
        const values = {id_sector, name, description}
        const res = await axios.put(`/api/sectors/${id}`, values)
        return res.data
    } catch (err) {
        console.log(err)
    }
}
export const deleteSector = async (id) =>{
    try {
        const res = await axios.delete(`/api/sectors/${id}`)
        return res.data
    } catch (err) {
        console.log(err)
    }
}