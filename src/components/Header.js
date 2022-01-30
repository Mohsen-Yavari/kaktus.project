import { Link,useLocation } from "react-router-dom";

import { useState } from 'react';
import Sidebar from "./Sidebar";

// icons font Awsom

import { faHome,faList,faCog } from '@fortawesome/free-solid-svg-icons'


const Header = () => {

const [showSidebar,setShowSidebar] = useState(false);
const location = useLocation();
const links = [
    {
        name:"Home",
        path:"/",
        icon:faHome
    },
    {
        name:"Recipes",
        path:"/recipes",
        icon:faList
    },
    {
        name:"Settings",
        path:"/settings",
        icon:faCog
    }
]

function closeSidebar(){
    setShowSidebar(false);
}


    return (
        <>
            <div className="navbar container">
                <Link to={"/"} className="logo">K<span> aktu</span>s</Link>

                <div className="nav-links">
                    { links.map(link =>(
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    ))}
            
                </div>
                <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" :"sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {showSidebar && <Sidebar clise={closeSidebar} links={links} />}
        </>
    );
};

export default Header;