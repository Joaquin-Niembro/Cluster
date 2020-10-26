import {
    GET_COMPANIES,
    GET_COMPANIES_FAILURE,
    GET_COMPANIES_SUCCESS,
    POST_COMPANY,
    POST_COMPANY_FAILURE,
    POST_COMPANY_SUCCESS
} from "../actions/Companies";
const initialstate = {
    loading: false,
    companies: [],
    error: ""
};
function reducer(state = initialstate, { type, payload }) {
    switch (type) {
        case GET_COMPANIES:
            return {
                ...state,
                loading: true
            };
        case GET_COMPANIES_SUCCESS:
            return {
                loading: false,
                companies: payload,
                error: ""
            };
        case GET_COMPANIES_FAILURE:
            return {
                loading: false,
                companies: [],
                error: payload
            };
        case POST_COMPANY:
            return {
                ...state,
                loading: true
            };
        case POST_COMPANY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: ""
            };
        case POST_COMPANY_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            };
        default:
            return state;
    }
}
export default reducer;
