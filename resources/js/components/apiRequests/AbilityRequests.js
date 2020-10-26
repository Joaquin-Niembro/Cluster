import axios from 'axios'
export const getAbilities = async () =>{
    try {
        const res = await axios.get('/api/abilities')
        return res.data
    } catch (err) {
        console.log(err)
    }
}
export const createAbility = async (values)=>{
    try {
        const res = await axios.post('/api/abilities', values)
        return res.data
    } catch (err) {
        console.log(err)
    }
}
export const updateAbility = async (id, id_ability, name, description)=>{
    try {
        const values = {id_ability, name, description}
        const res = await axios.put(`/api/abilities/${id}`, values)
        return res.data
    } catch (err) {
        console.log(err)
    }
}
export const deleteAbility = async (id)=>{
    try {
        const res = await axios.delete(`/api/abilities/${id}`)
        return res.data
    } catch (err) {
        console.log(err)
    }
}