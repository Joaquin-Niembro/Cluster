import axios from "axios";
export const GET_INSTITUTIONS = "GET_INSTITUTIONS";
export const GET_INSTITUTIONS_SUCCESS = "GET_INSTITUTIONS_SUCCESS";
export const GET_INSTITUTIONS_FAILURE = "GET_INSTITUTIONS_FAILURE";
export const POST_INSTITUTION = "POST_INSTITUTION";
export const POST_INSTITUTION_SUCCESS = "POST_INSTITUTION_SUCCESS";
export const POST_INSTITUTION_FAILURE = "POST_INSTITUTION_FAILURE";
export const getInstitutions = () => {
    return {
        type: GET_INSTITUTIONS
    };
};
export const getInstitutionsSuccess = institutions => {
    return {
        type: GET_INSTITUTIONS_SUCCESS,
        payload: institutions
    };
};
export const getInstitutionsFailure = error => {
    return {
        type: GET_INSTITUTIONS_FAILURE,
        payload: error
    };
};

export const institutionsFetch = () => {
    return async dispatch => {
        dispatch(getInstitutions());
        try {
            const res = await axios.get("/api/institutions");
            dispatch(getInstitutionsSuccess(res.data));
        } catch (err) {
            dispatch(getInstitutionsFailure(err.message));
        }
    };
};
///post
export const postInstitution = () => {
    return {
        type: POST_INSTITUTION
    };
};
export const postInstitutionSuccess = institution => {
    return {
        type: POST_INSTITUTION_SUCCESS,
        payload: institution
    };
};
export const postInstitutionFailure = error => {
    return {
        type: POST_INSTITUTION_FAILURE,
        payload: error
    };
};
export const institutionsPost = values => {
    return async dispatch => {
        dispatch(postInstitution());
        try {
            const res = await axios.post("/api/institutions", values);
            dispatch(postInstitutionSuccess(res.data));
        } catch (err) {
            dispatch(postInstitutionFailure(err.message));
        }
    };
};
