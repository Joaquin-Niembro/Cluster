import {
    GET_PEOPLE,
    GET_PEOPLE_FAILURE,
    GET_PEOPLE_SUCCESS,
    POST_PEOPLE,
    POST_PEOPLE_FAILURE,
    POST_PEOPLE_SUCCESS
} from "../actions/People";

const initialstate = {
    loading: false,
    people: [],
    error: ""
};

function reducer(state = initialstate, { type, payload }) {
    switch (type) {
        case GET_PEOPLE:
            return {
                ...state,
                loading: true
            };
        case GET_PEOPLE_SUCCESS:
            return {
                loading: false,
                people: payload,
                error: ""
            };
        case GET_PEOPLE_FAILURE:
            return {
                loading: false,
                people: [],
                error: payload
            };
        case POST_PEOPLE:
            return {
                ...state,
                loading: true
            };
        case POST_PEOPLE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: ""
            };
        case POST_PEOPLE_FAILURE:
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
