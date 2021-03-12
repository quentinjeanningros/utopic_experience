import { colors } from '../Assets';
import './Home.css';
import React, {useState} from 'react';

function Home(props)
{
    let redirect = (device) => {window.location.href = "/device:" + device}
    props.updatePath("", "")

    return (
        <div className="home-list-container">
            <HomeButton height="30vh" width="17vh" text="Phone"     color={colors[1]} action={() => {redirect("phone")}}/>
            <HomeButton height="30vh" width="37vh" text="Tablet"    color={colors[3]} action={() => {redirect("tablet")}}/>
            <HomeButton height="30vh" width="45vh" text="Desktop"   color={colors[5]} action={() => {redirect("desktop")}}/>
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
            <div className="home-button-box" style={style}/>
            <h2 className="font-main home-button-text" style={{color: color}}>{props.text}</h2>
        </button>
    );
}


export default Home;
