import './config.css';
import Home from "./pages/home.js";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { logo } from './icons/logo.js'
import './icons/logo.css';

function App() {
    return (
        <div className="page">
            <Logo/>
            <Router>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route exact path="*" component={Home} />
                </Switch>
            </Router>
        </div>
    );
}

function Logo() {
    return(
        <button className="logo-container">
            <div className="logo-icon">
                {logo}
            </div>
            <div className="logo-text">
                Utopic <br/>Experience
            </div>
        </button>
    );
}

export default App;
