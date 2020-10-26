import {
    GET_INSTITUTIONS,
    GET_INSTITUTIONS_FAILURE,
    GET_INSTITUTIONS_SUCCESS,
    POST_INSTITUTION,
    POST_INSTITUTION_FAILURE,
    POST_INSTITUTION_SUCCESS
} from "../actions/Institutions";
const initialstate = {
    loading: false,
    institutions: [],
    error: ""
};
function reducer(state = initialstate, { type, payload }) {
    switch (type) {
        case GET_INSTITUTIONS:
            return {
                ...state,
                loading: true
            };
        case GET_INSTITUTIONS_SUCCESS:
            return {
                loading: false,
                institutions: payload,
                error: ""
            };
        case GET_INSTITUTIONS_FAILURE:
            return {
                loading: false,
                institutions: [],
                error: payload
            };
        case POST_INSTITUTION:
            return {
                ...state,
                loading: true
            };
        case POST_INSTITUTION_SUCCESS:
            return {
                ...state,
                loading: false,
                error: ""
            };
        case POST_INSTITUTION_FAILURE:
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
