import Timer from 'react-compound-timer';
import React from "react"
import "../Header/Header.css"
const Header = ({heading,created,duration,image}) =>{
    return(
        <div className="Header pb-5" style={{backgroundImage:`url(${image})`, backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
            <h1 className="pt-3">{heading}</h1>
           
            <div className="container mt-5  row">
                <div className="col-6">
                    <b>Test was created on: {created.slice(0,10)} | Time: {created.slice(11,16)} </b>
                </div>
                <div className="col-6">
                   <b> <Timer
                        endTime="10000"
                        >  
                            <Timer.Minutes />:
                            <Timer.Seconds />
                        </Timer>  / 10:00 Minutes
                    </b>
                </div>
                
            </div>
            
        </div>
    );
}

export default Header;