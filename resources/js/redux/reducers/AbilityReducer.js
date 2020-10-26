import {
    GET_ABILITIES,
    GET_ABILITIES_SUCCESS,
    GET_ABILITIES_FAILURE,
    POST_ABILITY,
    POST_ABILITY_SUCCESS,
    POST_ABILITY_FAILURE
} from "../actions/Abilities";

const initialstate = {
    loading: false,
    abilities: [],
    error: ""
};

function reducer(state = initialstate, { type, payload }) {
    switch (type) {
        case GET_ABILITIES:
            return {
                ...state,
                loading: true
            };
        case GET_ABILITIES_SUCCESS:
            return {
                loading: false,
                abilities: payload,
                error: ""
            };
        case GET_ABILITIES_FAILURE:
            return {
                loading: false,
                abilities: [],
                error: payload
            };
        case POST_ABILITY:
            return {
                ...state,
                loading: true
            };
        case POST_ABILITY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: ""
            };
        case POST_ABILITY_FAILURE:
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
