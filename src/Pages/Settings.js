import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { useState,useEffect } from "react";

export default function Settings(){
    const [settings, setSettings] = useState({
        "--background-color": "#fff",
        "--background-light": "#fff",
        "--primary-color": "rgb(255, 0, 86)",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#0A0A0A",
        "--text-light": "#575757",
        "--font-size": "16px",
        "--animation-speed": 1
    })
    useEffect(() => {
        const root = document.documentElement
        for(let key in settings){
            root.style.setProperty(key, settings[key])
        }
    }, [settings])

    const [theme, setTheme] = useState("light")
    const themes = [
        {
            "--background-color": "#fff",
            "--background-light": "#fff",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#0A0A0A",
            "--text-light": "#575757"
        },
        {
            "--background-color": "rgb(29, 29, 29)",
            "--background-light": "rgb(77, 77, 77)",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#ffffff",
            "--text-light": "#eceaea",
        }
    ]
    function changeTheme(i){
        const _theme = {...themes[i]}
        setTheme(i === 0 ? "light" : "dark")
        let _settings = {...settings}
        for(let key in _theme){
            _settings[key] = _theme[key]
        }
        setSettings(_settings)
    }

    function changeColor(i){
        const _color = primaryColor[i]
        let _settings = {...settings}
        _settings["--primary-color"] = _color
        setPraymeryColor(i)
        setSettings(_settings) 
    }

    function changeFontSize(i){
        const _size = fontSizes[i]
        let _settings = {...settings}
        _settings["--font-size"] = _size.value
        setFontSize(i)
        setSettings(_settings)
    }

    function changeAnimationSpeed(i){
        let _speed = animationSpeeds[i]
        let _settings = {...settings}
        _settings["--animation-speed"] = _speed.value
        setAnimationSpeed(i)
        setSettings(_settings)
    }


const primaryColors = [
    "rgba(255,255,86)",
    "rgb(69, 156, 47)",
    "rgb(81, 138, 175)",
    "rgb(172, 73, 134)",
    " rgb(235, 162, 6)",
    "rgb(245, 52, 3)"
]

const fontSizes = [
    {
        title:"Small",
        value:"12px"
    },
    {
        title:"Medum",
        value:"16px"
    },
    {
        title:"Large",
        value:"20px"
    }
]
const animationSpeeds = [
    {
        title:"Slow",
        value:2
    },
    {
        title:"Medum",
        value:1
    },
    {
        title:"Fast",
        value:.5
    }
]
const [primaryColor,setPraymeryColor] = useState(0);
const [fontSize,setFontSize] = useState(1);
const [animationSpeed,setAnimationSpeed] = useState(1);

    return (
    <div>
              <div className="section d-block">
            <h2>Change Tems</h2>
            <div className="option-container">
                <div className="option light" onClick={()=>changeTheme(0)}>
                    
                    {theme === "light" && (
                        <div className="check">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    )}

                </div>
                <div className="option dark" onClick={()=>changeTheme(1)}>
                {theme === "dark" && (
                        <div className="check">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    )}

                </div>
            </div>
        </div>


        <div className="section d-block">
            <h2>Praymery Colors</h2>
            <div className="option-container">
             
                {primaryColors.map((color,index) =>(
                    <div key={index} className="option light" style={{backgroundColor: color}} onClick={()=>changeColor(index)} >
                    
                    { primaryColor === index && (
                        <div className="check">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    )}

                </div>
                ))}
             
            </div>
        </div>
        <div className="section d-block">
            <h2>Font Size</h2>
            <div className="option-container">
             
                {fontSizes.map((size,index) =>(

                <button className="btn" onClick={() =>changeFontSize(index)}>
                    {size.title}
                    
                    {fontSize === index && <span><FontAwesomeIcon icon={faCheck} /></span> }
                    </button>
                ))}
             
            </div>
        </div>
        <div className="section d-block">
            <h2>Animation Speed</h2>
            <div className="option-container">
             
                {animationSpeeds.map((speed,index) =>(

                <button className="btn" onClick={() =>changeAnimationSpeed(index)}>
                    {speed.title}
                    
                    {animationSpeed === index && <span><FontAwesomeIcon icon={faCheck} /></span> }
                    </button>
                ))}
             
            </div>
        </div>
      
    </div>
    )
}