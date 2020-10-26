import axios from "axios";
export const GET_VACANTS = "GET_VACANTS";
export const GET_VACANTS_SUCCESS = "GET_VACANTS_SUCCESS";
export const GET_VACANTS_FAILURE = "GET_VACANTS_FAILURE";
export const POST_VACANT = "POST_VACANT";
export const POST_VACANT_SUCCESS = "POST_VACANT_SUCCESS";
export const POST_VACANT_FAILURE = "POST_VACANT_FAILURE";
export const FIND_SUGGETIONS = 'FIND_SUGGETIONS';
export const FIND_RESULTS = 'FIND_RESULTS';
export const getVacants = () => {
    return {
        type: GET_VACANTS
    };
};
export const getVacantsSuccess = vacants => {
    return {
        type: GET_VACANTS_SUCCESS,
        payload: vacants
    };
};
export const getVacantsFailure = error => {
    return {
        type: GET_VACANTS_FAILURE,
        payload: error
    };
};

export const vacantsFetch = () => {
    return async dispatch => {
        dispatch(getVacants());
        try {
            const res = await axios.get("/api/vacants");
            dispatch(getVacantsSuccess(res.data));
        } catch (err) {
            dispatch(getVacantsFailure(err.message));
        }
    };
};
//post
export const postVacant = () => {
    return {
        type: POST_VACANT
    };
};
export const postVacantSuccess = vacant => {
    return {
        type: POST_VACANT_SUCCESS,
        payload: vacant
    };
};
export const postVacantFailure = error => {
    return {
        type: POST_VACANT_FAILURE,
        payload: error
    };
};

export const vacantsPost = values => {
    return async dispatch => {
        dispatch(postVacant());
        try {
            const res = await axios.post("/api/vacants", values);
            dispatch(postVacantSuccess(res.data));
        } catch (err) {
            dispatch(postVacantFailure(err.message));
        }
    };
};
//search
export const findSuggestions = (text) => {
	return {
		type:FIND_SUGGETIONS,
		payload: text,
	};
};


export const findResults = (text) => {
	return {
		type: FIND_RESULTS,
		payload: text,
	};
};