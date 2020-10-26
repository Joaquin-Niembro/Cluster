import {
    GET_VACANTS,
    GET_VACANTS_FAILURE,
    GET_VACANTS_SUCCESS,
    POST_VACANT,
    POST_VACANT_FAILURE,
    POST_VACANT_SUCCESS,
    FIND_SUGGETIONS,
    FIND_RESULTS
} from "../actions/Vacants";

const initialstate = {
    loading: false,
    vacants: [],
    error: "",
    search: ""
};

function reducer(state = initialstate, { type, payload }) {
    switch (type) {
        case GET_VACANTS:
            return {
                ...state,
                loading: true
            };
        case GET_VACANTS_SUCCESS:
            return {
                loading: false,
                vacants: payload,
                error: ""
            };
        case GET_VACANTS_FAILURE:
            return {
                loading: false,
                vacants: [],
                error: payload
            };
        case POST_VACANT:
            return {
                ...state,
                loading: true
            };
        case POST_VACANT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: ""
            };
        case POST_VACANT_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            };
        case FIND_SUGGETIONS: {
            const regex = new RegExp(`^${payload}`, "i");
            return {
                ...state,
                search: state.vacants.filter(n => regex.test(n.title))
            };
        }
        case FIND_RESULTS: {
            const regex = new RegExp(`^${payload}`, "i");
            return {
                ...state,
                search: state.vacants.filter(n => regex.test(n.title))
            };
        }
        default:
            return state;
    }
}

export default reducer;
