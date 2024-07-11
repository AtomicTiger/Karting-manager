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

  const convertLapTimeToMilliseconds = (lapTime) => {
    let totalMilliseconds = 0;

    if (lapTime.includes(":")) {
      const [minutes, rest] = lapTime.split(":");
      const [seconds, thousandths] = rest.split(".");
      totalMilliseconds = parseInt(minutes) * 60 * 1000 + parseFloat(seconds) * 1000 + parseInt(thousandths);
    } else {
      const [seconds, thousandths] = lapTime.split(".");
      totalMilliseconds = parseFloat(seconds) * 1000 + parseInt(thousandths);
    }

    return totalMilliseconds;
  };

  const convertMillisecondsToLapTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = ((milliseconds % 60000) / 1000).toFixed(3);
    return minutes > 0 ? `${minutes}:${seconds.padStart(6, '0')}` : seconds;
  };

  async function GetStints() {
    try {
      const data = await axios.get(`http://localhost:9000/StintsInfo/${sessionStorage.getItem("Event")}`, { withCredentials: true });
      const stintsData = data.data.StintsData;

      if (stintsData.length > 0) {
        const lastDriver = stintsData[stintsData.length - 1].Driver;
        setLastDriver(lastDriver);
      } else {
        console.log('No stints data available');
      }

      let currentKartNum = null;
      let currentBestLap = null;

      stintsData.forEach(stint => {
        const lapTimeMilliseconds = convertLapTimeToMilliseconds(stint.BestLap.replace(',', '.'));
        if (currentBestLap === null || lapTimeMilliseconds < currentBestLap) {
          currentBestLap = lapTimeMilliseconds;
          currentKartNum = stint.GokartID;
        }
      });

      if (currentBestLap !== null) {
        setBestLap(convertMillisecondsToLapTime(currentBestLap)); // Convert back to original format for display
      }

      if (currentKartNum) {
        const kart = await axios.get(`http://localhost:9000/GetGokartSpecifiedInfo/${currentKartNum}`, { withCredentials: true });
        setBestkart(kart.data.GokartsData.Number);
      }
    } catch (error) {
      console.log("Error", error);
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