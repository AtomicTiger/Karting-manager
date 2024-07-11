import styled from "styled-components";
import HeaderEditPanel from "./header/headerEditPanel";
import "./editPanel.css"
import { useEffect, useState } from "react";
import Hamburger from 'hamburger-react'
import { Link } from "react-router-dom";
import axios from "axios";

function EditPanel() {
    const [bestLap, setBestLap] = useState("Not Updated");
    const [bestkart, setBestKart] = useState("Not Updated");
    const [lastDriver, setLastDriver] = useState("Not Updated");
    const [raceCounterStatus, setRaceCounterStatus] = useState("not ready");
    const [isOpen, setOpen] = useState(false);
    const [phoneMenu, setPhoneMenu] = useState("statsPopUpShow");
    
    const ShowStats = () => {
        if (isOpen) {
            setPhoneMenu("statsPopUpShow");
        } else {
            setPhoneMenu("statsPopUpHide");
        }
    };
    
    const parseLapTime = (lapTime) => {
        const [minSec, milli] = lapTime.split('.');
        const [minutes, seconds] = minSec.split(':');
        return {
            totalMilliseconds: (parseInt(minutes, 10) * 60 * 1000) + (parseFloat(seconds) * 1000) + parseInt(milli, 10)
        };
    };
    
    const isBetterLap = (newLap, currentLap) => {
        if (currentLap === "Not Updated") return true;
    
        const newLapTime = parseLapTime(newLap);
        const currentLapTime = parseLapTime(currentLap);
    
        return newLapTime.totalMilliseconds < currentLapTime.totalMilliseconds;
    };
    
    async function GetStints() {
        try {
            const res = await axios.get(`http://localhost:9000/StintsInfo/${sessionStorage.getItem("Event")}`, { withCredentials: true });
            const stintsData = res.data.StintsData;
    
            if (stintsData.length > 0) {
                const lastDriver = stintsData[stintsData.length - 1].Driver;
                setLastDriver(lastDriver);
            } else {
                console.log('No stints data available');
            }
    
            let currentBestLap = bestLap;
            let currentKartNum = null;
    
            const mergedDataPromises = stintsData.map(async (stint) => {
                const gokartRes = await axios.get(`http://localhost:9000/GetGokartSpecifiedInfo/${stint.GokartID}`, { withCredentials: true });
                const gokartData = gokartRes.data.GokartsData;
    
                if (isBetterLap(stint.BestLap, currentBestLap)) {
                    currentBestLap = stint.BestLap;
                    currentKartNum = gokartData.Number;
                }
    
                return {
                    driver: stint.Driver,
                    kart: {
                        number: gokartData.Number,
                        status: gokartData.Status || "unknown"
                    },
                    bestLap: stint.BestLap.replace(",", "."),
                    pit: stint.Pit
                };
            });
    
            const mergedData = await Promise.all(mergedDataPromises);
            
    
            if (currentBestLap !== "Not Updated") {
                setBestLap(currentBestLap);
            }
            if (currentKartNum) {
                setBestKart(currentKartNum);
            }
        } catch (error) {
            console.error('Error fetching stints or go-kart data:', error);
        }
    }
    
    useEffect(() => {
        GetStints();
    }, []);

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