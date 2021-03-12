import {Animation, AR, Camera, Gesture, Sort, Special, Cursor, VR, Webcam, Swift, Kotlin, React} from "./icons/InterractionIcons.js"

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
    return {device: array[0].substring(array[0].indexOf(":") + 1), interaction: array.length > 1 ? array[1].substring(array[1].indexOf(":") + 1) : ""}
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
        {type: "gesture_recognition",   icon: Gesture,  color: "#ff47b3",   plugin: [
            "handedness_recognition_one_shot",
            "handedness_recognition_down_scrolling",
            "touch_heat_map",
            "phone_tilt_to_ground",
            "phone_tilt_to_start",
            "zoom_in_out",
            "spam-zone",
            "down_scrolling",
            "side_scrolling",
        ]},
        {type: "augmented_reality",                  icon: AR,     color: "#ff4785",     plugin: [
            "element_hanging",
            "touch_and_movements",
            "face_detection",
            "interface_grid",
            "object_size"
        ]},
        {type: "camera",                icon: Camera,   color: "#ff4766",   plugin: [
            "eye_tracking_heat_map",
            "face_count",
            "item_count"
        ]},
        {type: "animation",             icon: Animation,color: "#ff4748",   plugin: [
            "animation_triggers",
            "ux_easing",
            "in_out_animation",
            "scene_transition",
            "content_transition"
        ]},
        {type: "data_sorting",          icon: Sort,     color: "#ff6547",   plugin: [
            "sort_by_affinity",
            "sort_by_color",
            "sort_by_similarity",
            "sort_by_ascii",
            "sort_by_alphabet",
            "sort_by_count"
        ]},
        {type: "special_tools",         icon: Special,  color: "#ff9347",   plugin: [
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
        {type: "gesture_recognition",   icon: Gesture,  color: "#3dd52e",   plugin: [
            "handedness_recognition_one_shot",
            "handedness_recognition_down_scrolling",
            "touch_heat_map",
            "phone_tilt_to_ground",
            "phone_tilt_to_start",
            "zoom_in_out",
            "spam-zone",
            "down_scrolling",
            "side_scrolling",
        ]},
        {type: "augmented_reality",                  icon: AR,     color: "#2ed549",     plugin: [
            "element_hanging",
            "touch_and_movements",
            "face_detection",
            "interface_grid",
            "object_size"
        ]},
        {type: "camera",                icon: Camera,   color: "#2ed565",   plugin: [
            "eye_tracking_heat_map",
            "face_count",
            "item_count"
        ]},
        {type: "animation",             icon: Animation,color: "#2ed581",   plugin: [
            "animation_triggers",
            "ux_easing",
            "in_out_animation",
            "scene_transition",
            "content_transition"
        ]},
        {type: "data_sorting",          icon: Sort,     color: "#2ed59d",   plugin: [
            "sort_by_affinity",
            "sort_by_color",
            "sort_by_similarity",
            "sort_by_ascii",
            "sort_by_alphabet",
            "sort_by_count"
        ]},
        {type: "special_tools",         icon: Special,  color: "#2ed5c7",   plugin: [
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
        {type: "cursor",   icon: Cursor,  color: "#37a4fa",   plugin: [
            "cursor_heat_map",
            "element_hover_count",
            "click_heat_map",
            "scrolling_heat_map",
            "side_scrolling",
            "spam_heat_map"
        ]},
        {type: "virtual_reality",                   icon: VR,     color: "#3773fa",   plugin: [
            "object_tracking",
            "ergonomic_interface_for_iot",
            "viewing_angle_heat_map",
            "interface_grid"
        ]},
        {type: "camera",                icon: Webcam,   color: "#3752fa",   plugin: [
            "eye_tracking_heat_map",
            "hand_recognition",
            "item_count",
            "face_tracking",
            "3D_camera_simulation"
        ]},
        {type: "animation",             icon: Animation,color: "#3c37fa",   plugin: [
            "animation_triggers",
            "ux_easing",
            "in_out_animation",
            "scene_transition",
            "content_transition",
        ]},
        {type: "data_sorting",          icon: Sort,     color: "#5d37fa",   plugin: [
            "sort_by_affinity",
            "sort_by_color",
            "sort_by_similarity",
            "sort_by_ascii",
            "sort_by_alphabet",
            "sort_by_count"
        ]},
        {type: "special_tools",         icon: Special,  color: "#8e37fa",   plugin: [
            "subroutine_bypass",
            "crypt_wallet_implementation",
            "fast_authentification_with_phone",
            "fast_authentification_with_google_autentificator",
            "fast_authentification_with_fortmatic",
        ]}
    ]}
]

export const pluginList = [
    {name: "handedness_recognition_one_shot",
        device: [{phone: true, tablet: true, desktop: false}],
        download:  [{name: "Swift", version: "5.4", icon: Swift},
                    {name: "Kotlin", version: "1.4.30", icon: Kotlin},
                    {name: "React Navive", icon: React}
                ],
        text: "In a world where smartphones are getting bigger and bigger. This code allow you to know which hand his used. You can allow a button to be touched easily after one swipe. Powered by an IA and the gyroscope."},

    {name: "handedness_recognition_down_scrolling",
        device: [{phone: true, tablet: true, desktop: false}],
        download:  [{name: "Swift", version: "5.4", icon: Swift},
                    {name: "Kotlin", version: "1.4.30", icon: Kotlin},
                    {name: "React Navive", icon: React}
                ],
        text: "In a world where smartphones are getting bigger and bigger. This code allow you to know which hand his used. You can allow a button to be touched easily after some scrolls. Powered by an modulable AI."
    },

    {name: "touch_heat_map",
        device: [{phone: true, tablet: true, desktop: false}],
        download: [],
        text: ""
    },

    {name: "phone_tilt_to_ground",
        device: [{phone: true, tablet: true, desktop: false}],
        download: [],
        text: ""
    },

    {name: "zoom_in_out",
        device: [{phone: true, tablet: true, desktop: false}],
        download: [],
        text: ""
    },

    {name: "spam-zone",
        device: [{phone: true, tablet: true, desktop: false}],
        download: [],
        text: ""
    },

    {name: "down_scrolling",
        device: [{phone: true, tablet: true, desktop: false}],
        download: [],
        text: ""
    },

    {name: "side_scrolling",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "element_hanging",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "touch_and_movements",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "face_detection",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "interface_grid",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "object_size",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "eye_tracking_heat_map",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "face_count",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "item_count",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "animation_triggers",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "ux_easing",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "in_out_animation",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "scene_transition",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "content_transition",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "sort_by_affinity",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "sort_by_color",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "sort_by_similarity",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "sort_by_ascii",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "sort_by_alphabet",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "sort_by_count",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "3D_position_compare_to_ground",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "gyroscope_data_analyse",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "subroutine_bypass",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "crypt_wallet_implementation",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "fast_authentification_with_phone",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "fast_authentification_with_google_autentificator",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "fast_authentification_with_fortmatic",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "cursor_heat_map",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "element_hover_count",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "click_heat_map",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "scrolling_heat_map",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "spam_heat_map",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "object_tracking",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "ergonomic_interface_for_iot",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "viewing_angle_heat_map",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "hand_recognition",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "item_count",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "face_tracking",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

    {name: "3D_camera_simulation",
        device: [{phone: true, tablet: true, desktop: true}],
        download: [],
        text: ""
    },

]