import './Interaction.css';
import React, {useState} from 'react';
import { cache, findDeviceID, findInteractionID, devidePath, snakeToText } from '../Assets';

class Interaction extends React.Component
{
    constructor(props) {
        super(props);
        let tuple = devidePath(window.location.pathname)
        this.device = cache[findDeviceID(tuple.device)]
        this.interaction = this.device.interactions[findInteractionID(this.device, tuple.interaction)]
        if (this.device === undefined || this.interaction === undefined)
        {
           window.location.href = "404";
        }
        else
        {
            props.updatePath(this.device.device, this.interaction.type)
        }
        this.select = (id) => this.setState({selectedID: id})
    }

    render() {
        return (
            <div className="interaction-container">
                <div className="interaction-icon">
                    {this.interaction.icon}
                </div>
                <div className="interaction-list">
                    {this.interaction.plugin.map((item, index) =>
                        <InteractionButton  text={snakeToText(item)}
                                            color={this.interaction.color}
                                            action={() => window.location.href = "/plugin:" + item}
                                            key={item}/>
                    )}
                </div>
            </div>
    );}
}

function InteractionButton(props)
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
        <button className="interaction-button font-third"
            style={{color: color}}
            onFocus={toggleHoverEnter}
            onBlur={toggleHoverLeave}
            onMouseEnter={toggleHoverEnter}
            onMouseLeave={toggleHoverLeave}
            onClick={props.action}>
            {props.text}
        </button>
    )
}

export default Interaction;
