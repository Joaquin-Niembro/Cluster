import {
    GET_SECTORS,
    GET_SECTORS_FAILURE,
    GET_SECTORS_SUCCESS,
    POST_SECTOR,
    POST_SECTOR_SUCCESS,
    POST_SECTOR_FAILURE
} from "../actions/Sectors";

const initialstate = {
    loading: false,
    sectors: [],
    error: ""
};

function reducer(state = initialstate, { type, payload }) {
    switch (type) {
        case GET_SECTORS:
            return {
                ...state,
                loading: true
            };
        case GET_SECTORS_SUCCESS:
            return {
                loading: false,
                sectors: payload,
                error: ""
            };
        case GET_SECTORS_FAILURE:
            return {
                loading: false,
                sectors: [],
                error: payload
            };
        case POST_SECTOR:
            return {
                ...state,
                loading: true
            };
        case POST_SECTOR_SUCCESS:
            return {
                ...state,
                loading: false,
                error: ""
            };
        case POST_SECTOR_FAILURE:
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
