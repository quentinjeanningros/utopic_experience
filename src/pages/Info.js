import { getRandomColor } from '../Assets';
import './Info.css';
import React, {useState} from 'react';
import { logo } from '../icons/Logo.js'

function Info(props)
{
    return (
        <div className={"info-list"}>
            <Button action={() => window.open("https://en.wikipedia.org/wiki/Open_source", '_blank')} content={<div className="info-element"><div className="info-logo-github info-element-left"><svg height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256,10.67C114.86,10.67,0,124.35,0,264.06,0,368.3,66,463.23,164.22,500.27a16.05,16.05,0,0,0,21-10.07l48-151.73a15.74,15.74,0,0,0-7.5-18.6C204.91,308.52,192,287.15,192,264.06c0-34.94,28.69-63.36,64-63.36s64,28.42,64,63.36c0,23.09-12.89,44.48-33.66,55.85a15.7,15.7,0,0,0-7.51,18.61l48,151.72a16,16,0,0,0,21,10.07C446,463.23,512,368.3,512,264.06,512,124.35,397.16,10.67,256,10.67Z"/></svg></div><div className="info-element-right">Open Source Info</div></div>}/>
            <Button action={() => window.open("https://github.com/quentinjeanningros/utopic_experience", '_blank')} content={<div className="info-element"><div className="info-logo-github info-element-left"><svg height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256,10.67C114.56,10.67,0,123.31,0,262.23,0,373.4,73.34,467.67,175,500.91c12.8,2.36,17.49-5.42,17.49-12.1,0-6-.21-21.8-.32-42.77C121,461.21,106,412.29,106,412.29c-11.64-29-28.48-36.8-28.48-36.8-23.19-15.6,1.8-15.28,1.8-15.28,25.7,1.75,39.21,25.92,39.21,25.92,22.82,38.47,59.92,27.35,74.56,20.93,2.3-16.28,8.89-27.35,16.21-33.64-56.85-6.29-116.61-27.93-116.61-124.31,0-27.46,9.92-49.9,26.35-67.5-2.88-6.36-11.52-31.94,2.24-66.58,0,0,21.44-6.74,70.4,25.79a245.47,245.47,0,0,1,128,0C368.3,108.29,389.74,115,389.74,115c13.76,34.64,5.12,60.22,2.56,66.58,16.32,17.6,26.24,40,26.24,67.5,0,96.64-59.84,117.91-116.8,124.1,9,7.55,17.28,23,17.28,46.54,0,33.67-.32,60.72-.32,68.89,0,6.59,4.48,14.46,17.6,11.95C438.72,467.56,512,373.23,512,262.23,512,123.31,397.38,10.67,256,10.67Z"/></svg></div><div className="info-element-right">Github</div></div>}/>
            <Button action={() => window.open("/home", '_blank')} content={<div className="info-element"><div className="info-logo info-element-left">{logo}</div><div className="info-element-right">© Utopic Experience</div></div>}/>
            <Button action={() => {window.location.href = "mailto:quentin.jeanningros@hotmail.fr"}}content={<div className="info-element"><div className="info-element-left">Contact</div><div className="info-element-right">quentin.jeanningros@hotmail.fr</div></div>}/>
        </div>
    );
}

function Button(props)
{
    const [hover, setHover] = useState(false);

    const toggleHoverEnter = () => {
        setHover(true)
    }

    const toggleHoverLeave = () => {
        setHover(false)
    }

    let color = hover ? getRandomColor() : "#000000"

    return(<button className={"font-main info-node"}
            onFocus={toggleHoverEnter}
            onBlur={toggleHoverLeave}
            onMouseEnter={toggleHoverEnter}
            onMouseLeave={toggleHoverLeave}
            onClick={props.action}
            style={{color: color, fill: color}}>
        {props.content}
    </button>)
}

export default Info;
