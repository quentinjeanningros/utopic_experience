import './config.css';
import Home from "./pages/Home.js";
import Device from "./pages/Device.js";
import Interaction from "./pages/Interaction.js"
import Info from "./pages/Info.js"
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
        <div className="page">
            <Logo device={this.state.device} interaction={this.state.interaction}/>
            <InfoButton/>
            <Router>
                <Switch>
                    <Route exact path="/home" render={() => <Home updatePath={this.setPath}/>}/>
                    <Route exact path="/info" component={Info}/>
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

function InfoButton() {
    const [hover, setHover] = useState(false);

    const toggleHoverEnter = () => {
        setHover(true)
    }

    const toggleHoverLeave = () => {
        setHover(false)
    }

    let color = hover ? getRandomColor() : "#000000"

    return(<button className={"info-button"}
            onFocus={toggleHoverEnter}
            onBlur={toggleHoverLeave}
            onMouseEnter={toggleHoverEnter}
            onMouseLeave={toggleHoverLeave}
            style={{fill: color}}
            onClick={()=>{window.location.href = "/info"}}>
        {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330"><path d="M165,0C74,0,0,74,0,165S74,330,165,330s165-74,165-165S256,0,165,0Zm0,300C90.56,300,30,239.43,30,165S90.56,30,165,30,300,90.57,300,165,239.44,300,165,300Z"/><path d="M165,130a15,15,0,0,0-15,15V245a15,15,0,0,0,30,0V145A15,15,0,0,0,165,130Z"/><path d="M165,70a15,15,0,1,0,10.61,4.39A15.13,15.13,0,0,0,165,70Z"/></svg>}
    </button>)
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
