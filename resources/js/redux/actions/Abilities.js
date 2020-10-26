import axios from "axios";
export const GET_ABILITIES = "GET_ABILITIES";
export const GET_ABILITIES_SUCCESS = "GET_ABILITIES_SUCCESS";
export const GET_ABILITIES_FAILURE = "GET_ABILITIES_FAILURE";
export const POST_ABILITY = "POST_ABILITY";
export const POST_ABILITY_SUCCESS = "POST_ABILITY_SUCCESS";
export const POST_ABILITY_FAILURE = "POST_ABILITY_FAILURE";
////get
export const getAbilities = () => {
    return {
        type: GET_ABILITIES
    };
};
export const getAbilitiesSuccess = abilities => {
    return {
        type: GET_ABILITIES_SUCCESS,
        payload: abilities
    };
};
export const getAbilitiesFailure = error => {
    return {
        type: GET_ABILITIES_FAILURE,
        payload: error
    };
};

export const abilitiesFetch = () => {
    return async dispatch => {
        dispatch(getAbilities());
        try {
            const res = await axios.get("/api/abilities");
            dispatch(getAbilitiesSuccess(res.data));
        } catch (err) {
            dispatch(getAbilitiesFailure(err.message));
        }
    };
};

//////post
export const postAbility = () => {
    return {
        type: POST_ABILITY
    };
};
export const postAbilitySuccess = ability => {
    return {
        type: POST_ABILITY_SUCCESS,
        payload: ability
    };
};
export const postAbilityFailure = error => {
    return {
        type: POST_ABILITY_FAILURE,
        payload: error
    };
};

export const abilitiesPost = values => {
    return async dispatch => {
        dispatch(postAbility());
        try {
            const res = await axios.post("/api/abilities", values);
            dispatch(postAbilitySuccess(res.data));
        } catch (err) {
            dispatch(postAbilityFailure(err.message));
        }
    };
};
