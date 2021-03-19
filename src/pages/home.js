import { colors, getRandomColor, cache, snakeToText} from '../Assets';
import './Home.css';
import React, {useState} from 'react';
import {List, Tab} from '../icons/InterractionIcons.js'
import PC from '../icons/device/color/pc.png'
import Tablet from '../icons/device/color/tablet.png'
import Phone from '../icons/device/color/phone.png'
import PCWhite from '../icons/device/white/pc.png'
import TabletWhite from '../icons/device/white/tablet.png'
import PhoneWhite from '../icons/device/white/phone.png'



function Home(props)
{
    const [fastAcces, setAcces] = useState(false);

    let redirect = (device) => {window.location.href = "/device:" + device}
    props.updatePath("", "")

    return (
        <div>
            <ToggleButton trueIcon={Tab} falseIcon={List} state={fastAcces} action={()=>setAcces(!fastAcces)}/>
            {!fastAcces ?
             <div className="home-list-container">
                <HomeButton icon={Phone} iconWhite={PhoneWhite} text="Phone"     color={colors[1]} action={() => {redirect("phone")}}/>
                <HomeButton icon={Tablet} iconWhite={TabletWhite} text="Tablet"    color={colors[3]} action={() => {redirect("tablet")}}/>
                <HomeButton icon={PC} iconWhite={PCWhite} text="Desktop"   color={colors[5]} action={() => {redirect("desktop")}}/>
            </div>
            :
            <div>
                <PlugList/>
            </div>
            }
        </div>
    );
}

function HomeButton(props)
{
    const [hover, setHover] = useState(false);

    const toggleHoverEnter = () => {
        setHover(true)
    }

    const toggleHoverLeave = () => {
        setHover(false)
    }

    let color = hover ? props.color : "#000000"

    let style={
        height: props.height,
        width: props.width,
        backgroundColor: color,
        borderBottomLeftRadius: hover ? "0vh" : "12.5vh"
    }
    return (
        <button className="home-button"
            onFocus={toggleHoverEnter}
            onBlur={toggleHoverLeave}
            onMouseEnter={toggleHoverEnter}
            onMouseLeave={toggleHoverLeave}
            onClick={props.action}>
            <div className="home-image-container">
                <img className={"home-image-color" + (hover ? "__hover" : "")} src={props.icon} alt="Logo" />
                <img className={"home-image" + (hover ? "__hover" : "")} src={props.iconWhite} alt="Logo" />
            </div>
            <h2 className="font-main home-button-text" style={{color: color}}>{props.text}</h2>
        </button>
    );
}

function ToggleButton(props)
{
    const [hover, setHover] = useState(false);

    const toggleHoverEnter = () => {
        setHover(true)
    }

    const toggleHoverLeave = () => {
        setHover(false)
    }

    let color = hover ? getRandomColor() : "#000000"

    return(<button className="toggle-button"
            onFocus={toggleHoverEnter}
            onBlur={toggleHoverLeave}
            onMouseEnter={toggleHoverEnter}
            onMouseLeave={toggleHoverLeave}
            onClick={props.action}
            style={{fill: color}}>
        {props.state ? props.trueIcon : props.falseIcon}
    </button>)
}

function PlugList()
{
    return(<div className="fast-list">
        {cache.map((device) =>
            <div>
                <div className="fast-list-device font-main">{snakeToText(device.device) + "-------------------------------------------"}</div>
                <div className="fast-list-plug-container">
                {device.interactions.map((type) =>
                    <Type type={type}/>
                )}
                </div>
            </div>
        )}
    </div>)
}

function Type(props)
{
    const [hover, setHover] = useState(false);

    return(
        <div>
            <div className="fast-list-type font-main" style={hover ? {textDecoration: "underline"} : {}}>{snakeToText(props.type.type)}</div>
            <div className="fast-list-plug-container">
            {props.type.plugin.map((plug) =>
                <PluginButton text={plug} color={props.type.color} callback={setHover}/>
            )}
            </div>
        </div>
    )
}

function PluginButton(props)
{
    const [hover, setHover] = useState(false);

    const toggleHoverEnter = () => {
        props.callback(true)
        setHover(true)
    }

    const toggleHoverLeave = () => {
        props.callback(false)
        setHover(false)
    }

    let color = hover ? props.color : "#000000"

    return(<button className={"fast-list-plug" + (hover ? "__on": "__off") + " font-third"}
            onFocus={toggleHoverEnter}
            onBlur={toggleHoverLeave}
            onMouseEnter={toggleHoverEnter}
            onMouseLeave={toggleHoverLeave}
            style={{color: color}}
            onClick={()=>{window.location.href = "/plugin:" + props.text}}>
        {snakeToText(props.text)}
    </button>)
}

export default Home;
