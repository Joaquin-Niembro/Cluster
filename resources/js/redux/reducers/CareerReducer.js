import {
    GET_CAREERS,
    GET_CAREERS_FAILURE,
    GET_CAREERS_SUCCESS,
    POST_CAREER,
    POST_CAREER_SUCCESS,
    POST_CAREER_FAILURE
} from "../actions/Career";

const initialstate = {
    loading: false,
    careers: [],
    error: ""
};

function reducer(state = initialstate, { type, payload }) {
    switch (type) {
        case GET_CAREERS:
            return {
                ...state,
                loading: true
            };
        case GET_CAREERS_SUCCESS:
            return {
                loading: false,
                careers: payload,
                error: ""
            };
        case GET_CAREERS_FAILURE:
            return {
                loading: false,
                careers: [],
                error: payload
            };
        case POST_CAREER:
            return {
                ...state,
                loading: true
            };
        case POST_CAREER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: ""
            };
        case POST_CAREER_FAILURE:
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
