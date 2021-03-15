import './PluginPage.css';
import React, {useState} from 'react';
import {pluginList, cache, findDeviceID, findInteractionID, devidePath, snakeToText, getRandomColor} from '../Assets.js'

function findPlugin(name)
{
    for (let [index, element] of Object.entries(pluginList) )
    {
        if (name === element.name)
        {
            return index
        }
    }
    return -1
}

class PluginPage  extends React.Component
{
    constructor(props) {
        super(props);
        let tuple = devidePath(window.location.pathname)
        this.device = cache[findDeviceID(tuple.device)]
        this.interaction =  this.device ? this.device.interactions[findInteractionID(this.device, tuple.interaction)] : undefined
        this.plugin = pluginList[findPlugin(tuple.plugin)]
        if (this.plugin  === undefined)
        {
            this.plugin = pluginList[findPlugin(window.location.pathname.substring(window.location.pathname.indexOf(":") + 1))]
            if (this.plugin  === undefined) {
                window.location.href = "/404";
            }
        }
        else
        {
            props.updatePath(this.device ? this.device.device : "", this.interaction ? this.interaction.type : "")
        }
    }


    render() {
        return (
            <div className="plugin-container">
                <div className="plugin-title font-third">
                    {snakeToText(this.plugin.name)}
                </div>
                <div className="plugin-text font-paragraph">
                    {this.plugin.text}
                </div>
                <div className="plugin-spec-container">
                    <div className="plugin-spec plugin-spec-adjust">
                        <div className="plugin-spec-title font-second">Available for :</div>
                        <div className="plugin-spec-content">
                            <div className="plugin-spec-content__container">
                                <svg className="plugin-spec-device" style={this.plugin.device.phone ? {fill: "#000000"} : {fill: "#e6e6e6"}} height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.04 37.62"><rect x="2.82" y="2.36" width="13.4" height="32.9" rx="1.27"/><path d="M16,0H3A3,3,0,0,0,0,3V34.6a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V3A3,3,0,0,0,16,0Zm1.19,34A2.27,2.27,0,0,1,15,36.26H4.09A2.27,2.27,0,0,1,1.82,34V3.62A2.27,2.27,0,0,1,4.09,1.36H15a2.27,2.27,0,0,1,2.27,2.26Z"/></svg>
                                <svg className="plugin-spec-device" style={this.plugin.device.tablet ? {fill: "#000000"} : {fill: "#e6e6e6"}} height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.73 37.62"><path d="M39.71,0H3A3,3,0,0,0,0,3V34.6a3,3,0,0,0,3,3H39.71a3,3,0,0,0,3-3V3A3,3,0,0,0,39.71,0Zm-.2,32.18a2.27,2.27,0,0,1-2.26,2.27H5.48a2.27,2.27,0,0,1-2.27-2.27V5.44A2.27,2.27,0,0,1,5.48,3.17H37.25a2.27,2.27,0,0,1,2.26,2.27Z"/><rect x="4.21" y="4.17" width="34.3" height="29.28" rx="1.27"/></svg>
                                <svg className="plugin-spec-device" style={this.plugin.device.desktop ? {fill: "#000000"} : {fill: "#e6e6e6"}} height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.13 37.62"><path d="M54.11,0H3A3,3,0,0,0,0,3V34.6a3,3,0,0,0,3,3H54.11a3,3,0,0,0,3-3V3A3,3,0,0,0,54.11,0Zm.26,30.28a2.27,2.27,0,0,1-2.26,2.27H5a2.27,2.27,0,0,1-2.27-2.27V5.48A2.27,2.27,0,0,1,5,3.22H52.11a2.26,2.26,0,0,1,2.26,2.26Z"/><rect x="3.75" y="4.22" width="49.62" height="27.33" rx="1.27"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="plugin-spec">
                        <div className="plugin-spec-title font-second">Download :</div>
                        <div className="plugin-spec-content">
                            <div className="plugin-spec-content-download">
                                {this.plugin.download.map((item) =>
                                    <DownloadButton text={item.name + (item.version ? " " + item.version : "")} icon={item.icon} key={item.name} color={getRandomColor()}/>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="plugin-spec">
                        <div className="plugin-spec-title font-second">Exemple :</div>
                        <div className="plugin-spec-content">
                            <div className="plugin-exemple ">
                                {this.plugin.code}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )}
}

function DownloadButton(props)
{
    const [hover, setHover] = useState(false);

    const toggleHoverEnter = () => {
        setHover(true)
    }

    const toggleHoverLeave = () => {
        setHover(false)
    }

    let color = hover ? props.color : "#000000"

    return(
        <button className="download-button-container"
            style={{fill: color, color: color}}
            onFocus={toggleHoverEnter}
            onBlur={toggleHoverLeave}
            onMouseEnter={toggleHoverEnter}
            onMouseLeave={toggleHoverLeave}
            onClick={props.action}>
            <div className="download-button-icon">{props.icon}</div>
            <div className={"download-button-text" + (hover ? "__hover" : "") + " font-third"}>{props.text}</div>
        </button>
    )
}

export default PluginPage;