import axios from "axios";
export const GET_COMPANIES = "GET_COMPANIES";
export const GET_COMPANIES_SUCCESS = "GET_COMPANIES_SUCCESS";
export const GET_COMPANIES_FAILURE = "GET_COMPANIES_FAILURE";
export const POST_COMPANY = "POST_COMPANY";
export const POST_COMPANY_SUCCESS = "POST_COMPANY_SUCCESS";
export const POST_COMPANY_FAILURE = "POST_COMPANY_FAILURE";
export const getCompanies = () => {
    return {
        type: GET_COMPANIES
    };
};
export const getCompaniesSuccess = companies => {
    return {
        type: GET_COMPANIES_SUCCESS,
        payload: companies
    };
};
export const getCompaniesFailure = error => {
    return {
        type: GET_COMPANIES_FAILURE,
        payload: error
    };
};
export const companiesFetch = () => {
    return async dispatch => {
        dispatch(getCompanies());
        try {
            const res = await axios.get("/api/companies");
            dispatch(getCompaniesSuccess(res.data));
        } catch (err) {
            dispatch(getCompaniesFailure(err.message));
        }
    };
};
////post
export const postCompany = () => {
    return {
        type: POST_COMPANY
    };
};
export const postCompanySuccess = company => {
    return {
        type: POST_COMPANY_SUCCESS,
        payload: company
    };
};
export const postCompanyFailure = error => {
    return {
        type: POST_COMPANY_FAILURE,
        payload: error
    };
};
export const companiesPost = () => {
    return async dispatch => {
        dispatch(postCompany());
        try {
            const res = await axios.post("/api/companies", values);
            dispatch(postCompanySuccess(res.data));
        } catch (err) {
            dispatch(postCompanyFailure(err.message));
        }
    };
};
