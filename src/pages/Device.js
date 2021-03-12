import './Device.css';
import React, {useState}  from 'react';
import { cache, findDeviceID, devidePath, snakeToText } from '../Assets';

class Device extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
        };

        this.device = cache[findDeviceID(devidePath(window.location.pathname).device)]
        if (this.device === undefined)
        {
            window.location.href = "404";
        }
        else
        {
            props.updatePath(this.device.device, "")
        }
    }

    render() {
        return (
            <div className="device-interaction-container">
                <div className="device-interaction-list">
                    {this.device.interactions.map((item) =>
                        <DeviceButton icon={item.icon}
                                    text={snakeToText(item.type)}
                                    color={item.color}
                                    action={()=>{window.location.href = "/device:" + this.device.device + "/interaction:" + item.type}}
                                    key={item.type}/>
                    )}
                </div>
            </div>
        )
    }
}

function DeviceButton(props)
{
    const [hover, setHover] = useState(false);

    const toggleHoverEnter = () => {
        setHover(true)
    }

    const toggleHoverLeave = () => {
        setHover(false)
    }

    let color = hover ? props.color : "#000000"

    return (
        <button className="device-interaction-item"
            onFocus={toggleHoverEnter}
            onBlur={toggleHoverLeave}
            onMouseEnter={toggleHoverEnter}
            onMouseLeave={toggleHoverLeave}
            onClick={props.action}>
            <div className={hover ? "device-interaction-icon__hover" : "device-interaction-icon"} style={{fill: color}} >{props.icon}</div>
            <div className="device-interaction-text font-second" style={{color: color}} >{props.text}</div>
        </button>
    );
}


export default Device;
