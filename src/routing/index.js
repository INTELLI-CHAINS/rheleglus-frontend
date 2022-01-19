import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Referrals from 'common/pages/referrals';
import Landing from 'common/pages/landing';


const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route exact path="/ad">
                    <Referrals />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routing;