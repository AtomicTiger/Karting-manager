import styled from "styled-components";
import HeaderEditPanel from "./header/headerEditPanel";
import "./editPanel.css"
import { useEffect, useState } from "react";
import Hamburger from 'hamburger-react'
import { Link } from "react-router-dom";
import axios from "axios";

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

    async function GetStints (){
        try{
            const data =  await axios.get(`http://localhost:9000/StintsInfo/${sessionStorage.getItem("Event")}`, { withCredentials: true });
            let kartNum;
            const stintsData = data.data.StintsData;
                if (stintsData.length > 0) {
                    const lastDriver = stintsData[stintsData.length - 1].Driver;
                    setLastDriver(lastDriver);

                } else {
                    console.log('No stints data available');
                }

            let currentKartNum = null;
            

            data.data.StintsData.forEach(stint => {
                const lapTime = parseFloat(stint.BestLap.replace(',', '.'));
                if (lapTime < bestLap || bestLap === "Not Updated") {
                    setBestLap(lapTime);
                    currentKartNum = stint.GokartID;
                }
            });
                
            if (currentKartNum) {
                const kart = await axios.get(`http://localhost:9000/GetGokartSpecifiedInfo/${currentKartNum}`, { withCredentials: true });
                setBestkart(kart.data.GokartsData.Number);
            }
        }   
        catch{
            console.log("Error")
        }
        
    }

    useEffect(()=>{

        GetStints()

    },[])
    return (
        <div className="editPage">
            <HeaderEditPanel/>
            <button className="button-menu no-border-but"><Link to="/stint">Add new stint</Link></button>
            <button className="button-menu no-border-but"><Link to="/gokarts">Edit gokarts</Link></button>
            <div className="stats">
                <h2 className="semi-titles">BestLap:</h2>
                <li className="semi-titles">{bestLap}</li>
                <h2 className="semi-titles">FL Kart:</h2>
                <li className="semi-titles">{bestkart}</li>
                <h2 className="semi-titles">Last Driver:</h2>
                <li className="semi-titles">{lastDriver}</li>
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
                    <li className="semi-titles">{bestkart}</li>
                </div>
                <div className="stats-phone">
                    <h2 className="semi-titles">Last Driver:</h2>
                    <li className="semi-titles">{lastDriver}</li>
                </div>
                
                
            </div>
        </div>
        
    );
  }
  
export default EditPanel;