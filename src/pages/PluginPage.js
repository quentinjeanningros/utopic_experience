import './PluginPage.css';
import React, {useState} from 'react';
import {Phone, Desktop, Tablet} from "../icons/InterractionIcons.js"
import {pluginList, snakeToText} from '../Assets.js'

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

function PluginPage(props)
{
    let plugin = pluginList[findPlugin(window.location.pathname.substring(window.location.pathname.indexOf(":") + 1))]

    return (
        <div className="plugin-container">
            <div className="plugin-title font-third">
                {snakeToText(plugin.name)}
            </div>
            <div className="plugin-text font-paragraph">
                {plugin.text}
            </div>
            <div className="plugin-spec">
                <div className="plugin-spec-title font-second">Available for:</div>
                <div className="plugin-spec-content">
                    <div className="plugin-spec-device">{Phone}</div>
                    <div className="plugin-spec-device">{Tablet}</div>
                    <div className="plugin-spec-device">{Desktop}</div>
                </div>
            </div>
            <div className="plugin-spec">
                <div className="plugin-spec-title font-second">Download:</div>
                <div className="plugin-spec-content">ok</div>
            </div>
            <div className="plugin-spec">
                <div className="plugin-spec-title font-second">Exemple</div>
                <div className="plugin-spec-content">ok</div>
            </div>
        </div>
    )
}

export default PluginPage;