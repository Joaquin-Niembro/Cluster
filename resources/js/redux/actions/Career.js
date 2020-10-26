import axios from "axios";
export const GET_CAREERS = "GET_CAREERS";
export const GET_CAREERS_SUCCESS = "GET_CAREERS_SUCCESS";
export const GET_CAREERS_FAILURE = "GET_CAREERS_FAILURE";
export const POST_CAREER = "POST_CAREERS";
export const POST_CAREER_SUCCESS = "POST_CAREER_SUCCESS";
export const POST_CAREER_FAILURE = "POST_CAREER_FAILURE";
export const getCareers = () => {
    return {
        type: GET_CAREERS
    };
};
export const getCareersSuccess = careers => {
    return {
        type: GET_CAREERS_SUCCESS,
        payload: careers
    };
};
export const getCareersFailure = error => {
    return {
        type: GET_CAREERS_FAILURE,
        payload: error
    };
};

export const careersFetch = () => {
    return async dispatch => {
        dispatch(getCareers());
        try {
            const res = await axios.get("/api/careers");
            dispatch(getCareersSuccess(res.data));
        } catch (err) {
            dispatch(getCareersFailure(err.message));
        }
    };
};
//post
export const postCareer = () => {
    return {
        type: POST_CAREER
    };
};
export const postCareerSuccess = career => {
    return {
        type: POST_CAREER_SUCCESS,
        payload: career
    };
};
export const postCareerFailure = error => {
    return {
        type: POST_CAREER_FAILURE,
        payload: error
    };
};

export const careersPost = values => {
    return async dispatch => {
        dispatch(postCareer());
        try {
            const res = await axios.post("/api/careers", values);
            dispatch(postCareerSuccess(res.data));
        } catch (err) {
            dispatch(postCareerFailure(err.message));
        }
    };
};
