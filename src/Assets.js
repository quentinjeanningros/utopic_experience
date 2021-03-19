import {Swift, Kotlin, React, JS} from "./icons/InterractionIcons.js"

import animBlue from './icons/animation/blue.png'
import animRed from './icons/animation/red.png'
import animGreen from './icons/animation/green.png'
import animWhite from './icons/animation/white.png'

import arRed from './icons/ar/red.png'
import arGreen from './icons/ar/green.png'
import arWhite from './icons/ar/white.png'

import cursorBlue from './icons/cursor/blue.png'
import cursorWhite from './icons/cursor/white.png'

import photoBlue from './icons/photo/blue.png'
import photoRed from './icons/photo/red.png'
import photoGreen from './icons/photo/green.png'
import photoWhite from './icons/photo/white.png'

import sortingBlue from './icons/sorting/blue.png'
import sortingRed from './icons/sorting/red.png'
import sortingGreen from './icons/sorting/green.png'
import sortingWhite from './icons/sorting/white.png'

import specialBlue from './icons/special/blue.png'
import specialRed from './icons/special/red.png'
import specialGreen from './icons/special/green.png'
import specialWhite from './icons/special/white.png'

import touchRed from './icons/touch/red.png'
import touchGreen from './icons/touch/green.png'
import touchWhite from './icons/touch/white.png'

import vrBlue from './icons/vr/blue.png'
import vrWhite from './icons/vr/white.png'

export const colors = ["#ffa502", "#ff6348", "#ff4757", "#2ed573", "#1e90ff", "#3742fa"]

export const getRandomColor = () => {return colors[Math.floor(Math.random() * colors.length)];}

export const findDeviceID = (deviceName) => {
    for (let [index, element] of Object.entries(cache) )
    {
        if (deviceName === element.device)
        {
            return index
        }
    }
    return -1
}

export const findInteractionID = (device, interactionName) => {
    for (let [index, element] of Object.entries(device.interactions) )
    {
        if (interactionName === element.type)
        {
            return index
        }
    }
    return -1
}

export const devidePath = (route) => {
    let array = route.substring(1).split('/')
    return {device: array[0].substring(array[0].indexOf(":") + 1),
            interaction: array.length > 1 ? array[1].substring(array[1].indexOf(":") + 1) : "",
            plugin: array.length > 2 ? array[2].substring(array[2].indexOf(":") + 1) : "" }
}

export const snakeToText = (str) => {
    str +='';
    str = str.split('_');

    function upper( str ){
        return str.slice(0,1).toUpperCase() + str.slice(1,str.length);
    };

    let ret = []

    for(var i=0; i<str.length; i++){
        var str2 = str[i].split('/');
        for(var j=0;j<str2.length;j++){
            str2[j] = upper(str2[j]);
        }
        ret.push(' ')
        ret.push(str2.join(''))
    }
    return ret.join('');
}

//DataBase

export const cache = [

/////////PHONE/////////
    {device: "phone",   interactions: [
        {type: "gesture_recognition", icon: touchRed, white: touchWhite, color: colors[2], plugin: [
            "tap-to-step",
            "handedness_recognition_one_shot",
            "handedness_recognition_scrolling",
            "touch_heat_map",
            "phone_tilt_to_ground",
            "phone_tilt_to_start",
            "zoom_in_out",
            "spam-zone",
            "down_scrolling",
            "side_scrolling",
        ]},
        {type: "augmented_reality", icon: arRed, white: arWhite, color: colors[2], plugin: [
            "element_hanging",
            "touch_and_movements",
            "face_detection",
            "interface_grid",
            "object_size"
        ]},
        {type: "camera", icon: photoRed, white: photoWhite, color: colors[2], plugin: [
            "eye_tracking_heat_map",
            "face_count",
            "item_count"
        ]},
        {type: "animation", icon: animRed, white: animWhite, color: colors[2], plugin: [
            "animation_triggers",
            "ux_easing",
            "in_out_animation",
            "scene_transition",
            "content_transition"
        ]},
        {type: "data_sorting", icon: sortingRed, white: sortingWhite, color: colors[2], plugin: [
            "sort_by_affinity",
            "sort_by_color",
            "sort_by_similarity",
            "sort_by_ascii",
            "sort_by_alphabet",
            "sort_by_count"
        ]},
        {type: "special_tools", icon: specialRed, white: specialWhite, color: colors[2], plugin: [
            "3D_position_compare_to_ground",
            "gyroscope_data_analyse",
            "subroutine_bypass",
            "crypt_wallet_implementation",
            "fast_authentification_with_phone",
            "fast_authentification_with_google_autentificator",
            "fast_authentification_with_fortmatic",
        ]}
    ]},


/////////TABLET/////////
    {device: "tablet",  interactions: [
        {type: "gesture_recognition", icon: touchGreen, white: touchWhite, color: colors[3], plugin: [
            "tap-to-step",
            "handedness_recognition_one_shot",
            "handedness_recognition_scrolling",
            "touch_heat_map",
            "phone_tilt_to_ground",
            "phone_tilt_to_start",
            "zoom_in_out",
            "spam-zone",
            "down_scrolling",
            "side_scrolling",
        ]},
        {type: "augmented_reality", icon: arGreen, white: arWhite, color: colors[3], plugin: [
            "element_hanging",
            "touch_and_movements",
            "face_detection",
            "interface_grid",
            "object_size"
        ]},
        {type: "camera", icon: photoGreen, white: photoWhite, color: colors[3], plugin: [
            "eye_tracking_heat_map",
            "face_count",
            "item_count"
        ]},
        {type: "animation", icon: animGreen, white: animWhite, color: colors[3], plugin: [
            "animation_triggers",
            "ux_easing",
            "in_out_animation",
            "scene_transition",
            "content_transition"
        ]},
        {type: "data_sorting", icon: sortingGreen, white: sortingWhite, color: colors[3], plugin: [
            "sort_by_affinity",
            "sort_by_color",
            "sort_by_similarity",
            "sort_by_ascii",
            "sort_by_alphabet",
            "sort_by_count"
        ]},
        {type: "special_tools", icon: specialGreen, white: specialWhite, color: colors[3], plugin: [
            "3D_position_compare_to_ground",
            "gyroscope_data_analyse",
            "subroutine_bypass",
            "crypt_wallet_implementation",
            "fast_authentification_with_phone",
            "fast_authentification_with_google_autentificator",
            "fast_authentification_with_fortmatic",
        ]}
    ]},

/////////DESKTOP/////////
    {device: "desktop", interactions: [
        {type: "cursor", icon: cursorBlue, white: cursorWhite, color: colors[5], plugin: [
            "tap-to-step",
            "cursor_heat_map",
            "element_hover_count",
            "click_heat_map",
            "scrolling_heat_map",
            "side_scrolling",
            "spam_heat_map"
        ]},
        {type: "virtual_reality", icon: vrBlue, white: vrWhite, color: colors[5], plugin: [
            "object_tracking",
            "ergonomic_interface_for_iot",
            "viewing_angle_heat_map",
            "interface_grid"
        ]},
        {type: "camera", icon: photoBlue, white: photoWhite, color: colors[5], plugin: [
            "eye_tracking_heat_map",
            "hand_recognition",
            "item_count",
            "face_tracking",
            "3D_camera_simulation"
        ]},
        {type: "animation", icon: animBlue, white: animWhite, color: colors[5], plugin: [
            "animation_triggers",
            "ux_easing",
            "in_out_animation",
            "scene_transition",
            "content_transition",
        ]},
        {type: "data_sorting", icon: sortingBlue, white: sortingWhite, color: colors[5], plugin: [
            "sort_by_affinity",
            "sort_by_color",
            "sort_by_similarity",
            "sort_by_ascii",
            "sort_by_alphabet",
            "sort_by_count"
        ]},
        {type: "special_tools", icon: specialBlue, white: specialWhite, color: colors[5], plugin: [
            "subroutine_bypass",
            "crypt_wallet_implementation",
            "fast_authentification_with_phone",
            "fast_authentification_with_google_autentificator",
            "fast_authentification_with_fortmatic",
        ]}
    ]}
]

export const pluginList = [
    {name: "tap-to-step",
        device: {phone: true, tablet: true, desktop: true},
        download:  [{name: "Swift", version: "5.4", icon: Swift},
                    {name: "Kotlin", version: "1.4.30", icon: Kotlin},
                    {name: "React Native", icon: React},
                    {name: "React", icon: React},
                    {name: "JavaScript", icon: JS}
            ],
        text: "Textbox and other components may be annoying to trigger, with this plugin you can trigger a list of action, one by one ,just by clicking anywhere.",
        code: <code>
                <span style={{color: colors[2]}}>let</span> tapToNext = <span style={{color: colors[3]}}>TapToNext</span>(steps: [<span style={{color: colors[3]}}>step1</span>, <span style={{color: colors[3]}}>step2</span>, <span style={{color: colors[3]}}>step3</span>], loop: <span style={{color: colors[5]}}>false</span>)<br/><br/>
                <span style={{color: colors[2]}}>@IBAction func</span> <span style={{color: colors[4]}}>tap</span>(_ sender:  <span style={{color: colors[5]}}>UITapGestureRecognizer</span> ) &#123;<br/>
                <br/>
                <span className="tab"/><span style={{color: colors[3]}}>tapToNext</span>.<span style={{color: colors[5]}}>next</span>()<br/>
                    &#125;<br/>
            </code>
    },

    {name: "handedness_recognition_one_shot",
        device: {phone: true, tablet: true, desktop: false},
        download:  [{name: "Swift", version: "5.4", icon: Swift},
                    {name: "Kotlin", version: "1.4.30", icon: Kotlin},
                    {name: "React Navive", icon: React}
                ],
        text: "In a world where smartphones are getting bigger and bigger. This code allow you to know which hand his used. You can allow a button to be touched easily after one swipe. Powered by an IA and the gyroscope.",
        code: <code>
                <span style={{color: colors[2]}}>class</span> <span style={{color: colors[4]}}>ViewController</span>: <span style={{color: colors[5]}}>UIViewController</span>, <span style={{color: colors[3]}}>HandednessDelegate</span><br/>
                &#123;<br/>
                <br/>
                <span className="tab"/><span style={{color: colors[2]}}>func</span> <span style={{color: colors[4]}}>onAction</span>(hand: <span style={{color: colors[3]}}>Handedness</span>) &#123;<br/>
                <span className="tab"/><span className="tab"/><span className="tab"/><span style={{color: colors[2]}}>if</span> (hand == <span style={{color: colors[3]}}>Handedness</span>.<span style={{color: colors[3]}}>left</span>) &#123;<br/>
                <span className="tab"/><span className="tab"/><span className="tab"/><span className="tab"/><span style={{color: colors[3]}}>label</span>.<span style={{color: colors[5]}}>text</span> = <span style={{color: colors[0]}}>"👈"</span><br/>
                <span className="tab"/><span className="tab"/><span className="tab"/>&#125;<br/>
                <span className="tab"/><span className="tab"/><span className="tab"/><span style={{color: colors[2]}}>else if</span> (hand == <span style={{color: colors[3]}}>Handedness</span>.<span style={{color: colors[3]}}>right</span>) &#123;<br/>
                <span className="tab"/><span className="tab"/><span className="tab"/><span className="tab"/><span style={{color: colors[3]}}>label</span>.<span style={{color: colors[5]}}>text</span> = <span style={{color: colors[0]}}>"👉"</span><br/>
                <span className="tab"/><span className="tab"/><span className="tab"/>&#125;<br/>
                <span className="tab"/><span className="tab"/><span className="tab"/><span style={{color: colors[2]}}>else</span> &#123;<br/>
                <span className="tab"/><span className="tab"/><span className="tab"/><span className="tab"/><span style={{color: colors[3]}}>label</span>.<span style={{color: colors[5]}}>text</span> = <span style={{color: colors[0]}}>"🤔"</span><br/>
                <span className="tab"/><span className="tab"/><span className="tab"/>&#125;<br/>
                <span className="tab"/><span className="tab"/>&#125;<br/>
                <br/>
                <span className="tab"/><span className="tab"/><span style={{color: colors[2]}}>@IBOutlet weak var</span> <span style={{color: colors[4]}}>label</span>: <span style={{color: colors[5]}}>UILabel!</span><br/>
                <span className="tab"/><span className="tab"/><span style={{color: colors[2]}}>@IBOutlet var</span> <span style={{color: colors[4]}}>handednessDetectionView</span>: <span style={{color: colors[3]}}>SimpleHandednessDetectionView!</span><br/>
                <span className="tab"/><span className="tab"/><span style={{color: colors[2]}}>var</span> <span style={{color: colors[4]}}>oneShot</span>: <span style={{color: colors[3]}}>HandednessOneShot</span> = <span style={{color: colors[3]}}>HandednessOneShot</span>()<br/>
                <br/>
                <span className="tab"/><span className="tab"/><span style={{color: colors[2]}}>override func</span> <span style={{color: colors[4]}}>viewDidLoad</span>() &#123;<br/>
                <span className="tab"/><span className="tab"/><span className="tab"/><span style={{color: colors[2]}}>super</span>.<span style={{color: colors[5]}}>viewDidLoad</span>()<br/>
                <span className="tab"/><span className="tab"/><span className="tab"/><span style={{color: colors[3]}}>handednessDetectionView</span>.<span style={{color: colors[3]}}>delegate</span> = <span style={{color: colors[3]}}>oneShot</span><br/>
                <span className="tab"/><span className="tab"/><span className="tab"/><span style={{color: colors[3]}}>oneShot</span>.<span style={{color: colors[3]}}>delegate</span> = <span style={{color: colors[2]}}>self</span><br/>
                <span className="tab"/><span className="tab"/>&#125;<br/>
                    &#125;<br/>
            </code>
    },

    {name: "handedness_recognition_scrolling",
        device: {phone: true, tablet: true, desktop: false},
        download:  [{name: "Swift", version: "5.4", icon: Swift},
                    {name: "Kotlin", version: "1.4.30", icon: Kotlin},
                    {name: "React Navive", icon: React}
                ],
        text: "In a world where smartphones are getting bigger and bigger. This code allow you to know which hand his used. You can allow a button to be touched easily after some scrolls. Powered by an modulable AI.",
        code: <code>
                <span style={{color: colors[2]}}>class</span> <span style={{color: colors[4]}}>ViewController</span>: <span style={{color: colors[5]}}>UIViewController</span>, <span style={{color: colors[3]}}>HandednessDelegate</span><br/>
                &#123;<br/>
                <br/>
                <span className="tab"/><span style={{color: colors[2]}}>func</span> <span style={{color: colors[4]}}>onAction</span>(hand: <span style={{color: colors[3]}}>Handedness</span>) &#123;<br/>
                <span className="tab"/><span className="tab"/><span className="tab"/><span style={{color: colors[2]}}>if</span> (hand == <span style={{color: colors[3]}}>Handedness</span>.<span style={{color: colors[3]}}>left</span>) &#123;<br/>
                <span className="tab"/><span className="tab"/><span className="tab"/><span className="tab"/><span style={{color: colors[3]}}>label</span>.<span style={{color: colors[5]}}>text</span> = <span style={{color: colors[0]}}>"👈"</span><br/>
                <span className="tab"/><span className="tab"/><span className="tab"/>&#125;<br/>
                <span className="tab"/><span className="tab"/><span className="tab"/><span style={{color: colors[2]}}>else if</span> (hand == <span style={{color: colors[3]}}>Handedness</span>.<span style={{color: colors[3]}}>right</span>) &#123;<br/>
                <span className="tab"/><span className="tab"/><span className="tab"/><span className="tab"/><span style={{color: colors[3]}}>label</span>.<span style={{color: colors[5]}}>text</span> = <span style={{color: colors[0]}}>"👉"</span><br/>
                <span className="tab"/><span className="tab"/><span className="tab"/>&#125;<br/>
                <span className="tab"/><span className="tab"/><span className="tab"/><span style={{color: colors[2]}}>else</span> &#123;<br/>
                <span className="tab"/><span className="tab"/><span className="tab"/><span className="tab"/><span style={{color: colors[3]}}>label</span>.<span style={{color: colors[5]}}>text</span> = <span style={{color: colors[0]}}>"🤔"</span><br/>
                <span className="tab"/><span className="tab"/><span className="tab"/>&#125;<br/>
                <span className="tab"/><span className="tab"/>&#125;<br/>
                <br/>
                <span className="tab"/><span className="tab"/><span style={{color: colors[2]}}>@IBO weak var</span> <span style={{color: colors[4]}}>label</span>: <span style={{color: colors[5]}}>UILabel!</span><br/>
                <span className="tab"/><span className="tab"/><span style={{color: colors[2]}}>@IBOutlet var</span> <span style={{color: colors[4]}}>handednessDetectionView</span>: <span style={{color: colors[3]}}>SimpleHandednessDetectionView!</span><br/>
                <span className="tab"/><span className="tab"/><span style={{color: colors[2]}}>var</span> <span style={{color: colors[4]}}>learning</span>: <span style={{color: colors[3]}}>HandednessLearning</span> = <span style={{color: colors[3]}}>HandednessLearning</span>(size: <span style={{color: colors[0]}}>5</span>)<br/>
                <br/>
                <span className="tab"/><span className="tab"/><span style={{color: colors[2]}}>override func</span> <span style={{color: colors[4]}}>viewDidLoad</span>() &#123;<br/>
                <span className="tab"/><span className="tab"/><span className="tab"/><span style={{color: colors[2]}}>super</span>.<span style={{color: colors[5]}}>viewDidLoad</span>()<br/>
                <span className="tab"/><span className="tab"/><span className="tab"/><span style={{color: colors[3]}}>handednessDetectionView</span>.<span style={{color: colors[3]}}>delegate</span> = <span style={{color: colors[3]}}>learning</span><br/>
                <span className="tab"/><span className="tab"/><span className="tab"/><span style={{color: colors[3]}}>learning</span>.<span style={{color: colors[3]}}>delegate</span> = <span style={{color: colors[2]}}>self</span><br/>
                <span className="tab"/><span className="tab"/>&#125;<br/>
                    &#125;<br/>
            </code>
    },

    {name: "touch_heat_map",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "phone_tilt_to_ground",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "zoom_in_out",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "spam-zone",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "down_scrolling",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "side_scrolling",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "element_hanging",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "touch_and_movements",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "face_detection",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "interface_grid",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "object_size",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "eye_tracking_heat_map",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "face_count",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "item_count",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "animation_triggers",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "ux_easing",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "in_out_animation",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "scene_transition",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "content_transition",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "sort_by_affinity",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "sort_by_color",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "sort_by_similarity",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "sort_by_ascii",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "sort_by_alphabet",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "sort_by_count",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "3D_position_compare_to_ground",
        device: {phone: false, tablet: false, desktop: false},
        download: [],
        text: ""
    },

    {name: "gyroscope_data_analyse",
        device: {phone: true, tablet: true, desktop: true},
        download: [],
        text: ""
    },

    {name: "subroutine_bypass",
        device: {phone: true, tablet: true, desktop: true},
        download: [],
        text: ""
    },

    {name: "crypt_wallet_implementation",
        device: {phone: true, tablet: true, desktop: true},
        download: [],
        text: ""
    },

    {name: "fast_authentification_with_phone",
        device: {phone: true, tablet: true, desktop: true},
        download: [],
        text: ""
    },

    {name: "fast_authentification_with_google_autentificator",
        device: {phone: true, tablet: true, desktop: true},
        download: [],
        text: ""
    },

    {name: "fast_authentification_with_fortmatic",
        device: {phone: true, tablet: true, desktop: true},
        download: [],
        text: ""
    },

    {name: "cursor_heat_map",
        device: {phone: true, tablet: true, desktop: true},
        download: [],
        text: ""
    },

    {name: "element_hover_count",
        device: {phone: true, tablet: true, desktop: true},
        download: [],
        text: ""
    },

    {name: "click_heat_map",
        device: {phone: true, tablet: true, desktop: true},
        download: [],
        text: ""
    },

    {name: "scrolling_heat_map",
        device: {phone: true, tablet: true, desktop: true},
        download: [],
        text: ""
    },

    {name: "spam_heat_map",
        device: {phone: true, tablet: true, desktop: true},
        download: [],
        text: ""
    },

    {name: "object_tracking",
        device: {phone: true, tablet: true, desktop: true},
        download: [],
        text: ""
    },

    {name: "ergonomic_interface_for_iot",
        device: {phone: true, tablet: true, desktop: true},
        download: [],
        text: ""
    },

    {name: "viewing_angle_heat_map",
        device: {phone: true, tablet: true, desktop: true},
        download: [],
        text: ""
    },

    {name: "hand_recognition",
        device: {phone: true, tablet: true, desktop: true},
        download: [],
        text: ""
    },

    {name: "item_count",
        device: {phone: true, tablet: true, desktop: true},
        download: [],
        text: ""
    },

    {name: "face_tracking",
        device: {phone: true, tablet: true, desktop: true},
        download: [],
        text: ""
    },

    {name: "3D_camera_simulation",
        device: {phone: true, tablet: true, desktop: true},
        download: [],
        text: ""
    },

]