import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import VacantForm from "./formComponents/VacantForm/";
import CompanyForm from "./formComponents/CompanyForm/";
import InstitutionForm from "./formComponents/InstitutionForm/index";
import AbilityForm from "./formComponents/AbilityForm/";
import CareerForm from "./formComponents/CareerForm/";
import SectorForm from "./formComponents/SectorForm/";
import PeopleForm from "./formComponents/PeopleForm/";

import "../../sass/app.scss";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
toast.configure();
function Example() {
    return (
        <div className="wrapper">
            <Provider store={store}>
                <Router>
                    <Link to="/">1</Link>
                    <Link to="/companies">2</Link>
                    <Link to="/institutions">3</Link>
                    <Link to="/abilities">4</Link>
                    <Link to="/careers">5</Link>
                    <Link to="/sectors">6</Link>
                    <Link to="/people">7</Link>

                    <Switch>
                        <Route exact path="/" render={() => <VacantForm />} />
                        <Route
                            exact
                            path="/companies"
                            render={() => <CompanyForm />}
                        />
                        <Route
                            exact
                            path="/institutions"
                            render={() => <InstitutionForm />}
                        />
                        <Route
                            exact
                            path="/abilities"
                            render={() => <AbilityForm />}
                        />
                        <Route
                            exact
                            path="/careers"
                            render={() => <CareerForm />}
                        />
                        <Route
                            exact
                            path="/sectors"
                            render={() => <SectorForm />}
                        />

                        <Route
                            exact
                            path="/people"
                            render={() => <PeopleForm />}
                        />
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}

export default Example;

ReactDOM.render(
    <React.StrictMode>
        <Example />
    </React.StrictMode>,
    document.getElementById("example")
);
