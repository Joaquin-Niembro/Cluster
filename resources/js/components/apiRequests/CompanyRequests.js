import axios from 'axios'
export const getCompanies = async () =>{
    try {
        const res = await axios.get('/api/companies')
        return res.data
    } catch (err) {
        console.log(err)
    }
}
export const createCompany = async (values) =>{
    try {
        const res = await axios.post('/api/companies', values)
        return res.data
    } catch (err) {
        console.log(err)
    }
}
export const updateCompany = async (id, id_company, name, rfc, address, profile, schedule, sector) =>{
    try {
        const values = {id_company, name, rfc, address, profile, schedule, sector}
        const res = await axios.put(`/api/companies/${id}`, values)
        return res.data
    } catch (err) {
        console.log(err)
    }
}
export const deleteCompany = async id =>{
    try {
        const res = await axios.delete(`/api/companies/${id}`)
        return res.data
    } catch (err) {
        console.log(err)
    }
}