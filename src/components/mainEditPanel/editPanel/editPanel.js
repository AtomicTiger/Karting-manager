import styled from "styled-components";
import HeaderEditPanel from "./header/headerEditPanel";
import "./editPanel.css"
import { useEffect, useState } from "react";
import Hamburger from 'hamburger-react'
import { Link } from "react-router-dom";

function EditPanel() {
    const [bestLap, setBestLap] =useState("Not Updated")
    const [bestkart, setBestkart] =useState("Not Updated")
    const [lastDriver, setLastDriver] =useState("Not Updated")
    const [raceCounterStatus, setRaceCounterStauts] = useState("not ready")
    const [isOpen, setOpen] = useState(false)
    const [phoneMenu, setPhoneMenu] = useState("statsPopUpShow")
    
    const ShowStats = ()=>{
        if(isOpen){
            setPhoneMenu("statsPopUpShow")
        }else{
            setPhoneMenu("statsPopUpHide")
        }
    }
    return (
        <div className="editPage">
            <HeaderEditPanel/>
            <button className="button-menu no-border-but"><Link to="/stint">Add new stint</Link></button>
            <button className="button-menu no-border-but"><Link to="/gokarts">Edit gokarts</Link></button>
            <div className="stats">
                <h2 className="semi-titles">BestLap:</h2>
                <li className="semi-titles">{bestLap}</li>
                <h2 className="semi-titles">FL Kart:</h2>
                <li className="semi-titles">{bestLap}</li>
                <h2 className="semi-titles">Last Driver:</h2>
                <li className="semi-titles">{bestLap}</li>
            </div>
            <div className="statsPhone">
                <div className="ham" onClick={ShowStats}>
                    <Hamburger toggled={isOpen} toggle={setOpen} color="#FFFFFF" />
                </div>
            </div>
            <div className={phoneMenu}>
                <div className="stats-phone">
                    <h2 className="semi-titles">BestLap:</h2>
                    <li className="semi-titles">{bestLap}</li>
                </div>
                <div className="stats-phone">
                    <h2 className="semi-titles">FL Kart:</h2>
                    <li className="semi-titles">{bestLap}</li>
                </div>
                <div className="stats-phone">
                    <h2 className="semi-titles">Last Driver:</h2>
                    <li className="semi-titles">{bestLap}</li>
                </div>
                
                
            </div>
        </div>
        
    );
  }
  
export default EditPanel;