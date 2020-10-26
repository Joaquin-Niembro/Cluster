import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AbilityReducer from "./reducers/AbilityReducer";
import CompanyReducer from "./reducers/CompanyReducer";
import InstitutionReducer from "./reducers/InstitutionReducer";
import SectorReducer from "./reducers/SectorReducer";
import CareerReducer from "./reducers/CareerReducer";
import VacantReducer from "./reducers/VacantReducer";
import PeopleReducer from "./reducers/PeopleReducer";
const reducer = combineReducers({
    AbilityReducer,
    CompanyReducer,
    InstitutionReducer,
    SectorReducer,
    CareerReducer,
    VacantReducer,
    PeopleReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
