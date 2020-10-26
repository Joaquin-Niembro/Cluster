import axios from "axios";
export const GET_SECTORS = "GET_SECTORS";
export const GET_SECTORS_SUCCESS = "GET_SECTORS_SUCCESS";
export const GET_SECTORS_FAILURE = "GET_SECTORS_FAILURE";
export const POST_SECTOR = "POST_SECTOR";
export const POST_SECTOR_SUCCESS = "POST_SECTOR_SUCCESS";
export const POST_SECTOR_FAILURE = "POST_SECTOR_FAILURE";
export const getSectors = () => {
    return {
        type: GET_SECTORS
    };
};
export const getSectorsSuccess = sectors => {
    return {
        type: GET_SECTORS_SUCCESS,
        payload: sectors
    };
};
export const getSectorsFailure = error => {
    return {
        type: GET_SECTORS_FAILURE,
        payload: error
    };
};

export const sectorsFetch = () => {
    return async dispatch => {
        dispatch(getSectors());
        try {
            const res = await axios.get("/api/sectors");
            dispatch(getSectorsSuccess(res.data));
        } catch (err) {
            dispatch(getSectorsFailure(err.message));
        }
    };
};
///post
export const postSector = () => {
    return {
        type: POST_SECTOR
    };
};
export const postSectorSuccess = sector => {
    return {
        type: POST_SECTOR_SUCCESS,
        payload: sector
    };
};
export const postSectorFailure = error => {
    return {
        type: POST_SECTOR_FAILURE,
        payload: error
    };
};

export const sectorsPost = values => {
    return async dispatch => {
        dispatch(postSector());
        try {
            const res = await axios.post("/api/sectors", values);
            dispatch(postSectorSuccess(res.data));
        } catch (err) {
            dispatch(postSectorFailure(err.message));
        }
    };
};
