import './config.css';
import Home from "./pages/Home.js";
import Device from "./pages/Device.js";
import Interaction from "./pages/Interaction.js"
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { logo } from './icons/Logo.js'
import './icons/Logo.css';
import React, {useState} from 'react';
import { getRandomColor, snakeToText } from './Assets';
import PluginPage from './pages/PluginPage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            device: "",
            interaction: "",
        };

        this.setPath = (newDevice, newInt) => {
            this.setState({device: newDevice, interaction: newInt})
        }

        this.setDevice = (newDevice) => {
            this.setState({device: newDevice})
        }
        this.setInteraction = (newInt) => {
            this.setState({interaction: newInt})
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.device !== nextState.device ||
            this.state.interaction !== nextState.interaction ) {
            return (true)
        }
        return (false)
    }

    render() {
        return (
        <div>
            <Logo device={this.state.device} interaction={this.state.interaction}/>
            <Router>
                <Switch>
                    <Route exact path="/home" render={() => <Home updatePath={this.setPath}/>}/>
                    <Route exact path="/device:devicename" render={() => <Device updatePath={this.setPath}/>}/>
                    <Route exact path={"/device:devicename/interaction:interaction"} render={() => <Interaction updatePath={this.setPath}/>}/>
                    <Route exact path={"/plugin:plugin"} render={() => <PluginPage updatePath={this.setPath}/>}/>
                    <Route exact path={"/device:devicename/interaction:interaction/plugin:plugin"} render={() => <PluginPage updatePath={this.setPath}/>}/>
                    <Route exact path="/">
                        <Redirect to="/home"/>
                    </Route>
                    <Route exact path="*" render={() => <Home updatePath={this.setPath}/>} />
                </Switch>
            </Router>
        </div>
    );}
}

function Logo(props) {

    const [hover, setHover] = useState(false);
    const [color, setColor] = useState("#000000")

    const toggleHoverEnter = () => {
        setColor(getRandomColor())
        setHover(true)
    }

    const toggleHoverLeave = () => {
        setColor("#000000")
        setHover(false)
    }

    return(
        <div className="logo-container"
            onMouseEnter={toggleHoverEnter}
            onMouseLeave={toggleHoverLeave}>
            <button className="logo-icon"
                onFocus={toggleHoverEnter}
                onBlur={toggleHoverLeave}
                onClick={()=>{window.location.href = "/home"}}
                style={{fill: color}}>
                {logo}
            </button>
            <div className={hover ? "logo-text__hover" : "logo-text"}
                style={{color: color}}>
                Utopic <br/>
                <button className={"logo-text-button"} style={{color: color}}  onClick={()=>{window.location.href = "/home"}}>{"Experience"}</button>
                {props.device !== "" ? "/" : ""}
                <button className={"logo-text-button"} style={{color: color}}  onClick={()=>{window.location.href = "/device:" + props.device}}>{snakeToText(props.device)}</button>
                {props.interaction !== "" ? "/" : ""}
                <button className={"logo-text-button"} style={{color: color}}  onClick={()=>{window.location.href = "/device:" + props.device + "/interaction:" + props.interaction}}>{snakeToText(props.interaction)}</button>
            </div>
        </div>
    );
}

export default App;
