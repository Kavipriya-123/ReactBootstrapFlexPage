import { Component } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegCirclePlay } from "react-icons/fa6";

import ActiveItemContext from "../../ActiveItemContext";

import "./index.css";

class Home extends Component{


    render(){
        return(
        <ActiveItemContext.Consumer>
            {value=>{
            
            const{activeState,changeActiveState}=value;
            const changeAs=(name)=>{
                changeActiveState(name);
            }
            
            return <div className="home-bg">
                <nav className="nav-cont">
                    <h1 className="nav-head">ARSHA</h1>
                    <ul className="nav-ul-cont">
                    <li className={`${activeState === "Home" ? "add-color" : ""}`} onClick={() => changeAs("Home")}>Home</li>
                        <li className={`${activeState === "About" ? "add-color" : ""}`}onClick={()=>changeAs("About")}>About</li>
                        <li className={`${activeState === "Services" ? "add-color" : ""}`}onClick={()=>changeAs("Services")}>Services</li>
                        <li className={`${activeState === "Portfolio" ? "add-color" : ""}`}onClick={()=>changeAs("Portfolio")}>Portfolio</li>
                        <li className={`${activeState === "Team" ? "add-color" : ""}`}onClick={()=>changeAs("Team")}>Team</li>
                        <li className={`${activeState === "Pricing" ? "add-color" : ""}`}onClick={()=>changeAs("Pricing")}>Pricing</li>
                        <li className={`${activeState === "Blog" ? "add-color" : ""}`}onClick={()=>changeAs("Blog")}>Blog</li>
                        <li className="dropdown" onClick={()=>changeAs("Dropdown")} >
                            <button className={`dropdown-btn ${activeState === "Dropdown" ? "add-color" : ""}`}>
                                Dropdown
                                <RiArrowDropDownLine className="drop-sym" />
                            </button>
                            
                            <div className="dropdown-content">
                                <a href="#">Option 1</a>
                                <a href="#">Option 2</a>
                                <a href="#">Option 3</a>
                            </div>
                        </li>
                        <li className={`${activeState === "Contact" ? "add-color" : ""}`} onClick={()=>changeAs("Contact")}>Contact</li>
                        <button className={`nav-btn ${activeState === "Getstarted" ? "nav-get-start-btn" : ""}`} onClick={()=>changeAs("Getstarted")} type="button">Get Started</button>
                    </ul>
                </nav>
                <div className="home-bottom-cont">
                    <div className="home-content">
                        <h1 className="home-main-head">Better Solutions For Your Business</h1>
                        <p className="home-para">We are team of talented designers making websites with Bootstrap</p>
                        <div className="btn-cont">
                            <button className="nav-btn" type="button">Get Started</button>
                            <button className="play-btn" type="button"><FaRegCirclePlay className="play-sym"/>Watch Video</button>
                        </div>
                        
                    </div>
                    <div>
                        <img className="image-style" src="/img-4.jpeg" alt="Business"/>
                    </div>
                </div>
            </div>
            }
            }
        </ActiveItemContext.Consumer>)
    }
}

export default Home;