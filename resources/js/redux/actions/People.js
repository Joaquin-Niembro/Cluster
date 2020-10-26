import axios from "axios";
export const GET_PEOPLE = "GET_PEOPLE";
export const GET_PEOPLE_SUCCESS = "GET_PEOPLE_SUCCESS";
export const GET_PEOPLE_FAILURE = "GET_PEOPLE_FAILURE";
export const POST_PEOPLE = "POST_PEOPLE";
export const POST_PEOPLE_SUCCESS = "POST_PEOPLE_SUCCESS";
export const POST_PEOPLE_FAILURE = "POST_PEOPLE_FAILURE";
export const getPeople = () => {
    return {
        type: GET_PEOPLE
    };
};
export const getPeopleSuccess = people => {
    return {
        type: GET_PEOPLE_SUCCESS,
        payload: people
    };
};
export const getPeopleFailure = error => {
    return {
        type: GET_PEOPLE_FAILURE,
        payload: error
    };
};

export const peopleFetch = () => {
    return async dispatch => {
        dispatch(getPeople());
        try {
            const res = await axios.get("/api/people");
            dispatch(getPeopleSuccess(res.data));
        } catch (err) {
            dispatch(getPeopleFailure(err.message));
        }
    };
};
///post
export const postPeople = () => {
    return {
        type: POST_PEOPLE
    };
};
export const postPeopleSuccess = people => {
    return {
        type: POST_PEOPLE_SUCCESS,
        payload: people
    };
};
export const postPeopleFailure = error => {
    return {
        type: POST_PEOPLE_FAILURE,
        payload: error
    };
};
export const peoplePost = values => {
    return async dispatch => {
        dispatch(postPeople());
        try {
            const res = await axios.post("/api/people", values);
            dispatch(postPeopleSuccess(res.data));
        } catch (err) {
            dispatch(postPeopleFailure(err.message));
        }
    };
};
