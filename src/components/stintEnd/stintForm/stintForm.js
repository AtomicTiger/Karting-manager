import styled from "styled-components";
import "./stintForm.css";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';

function StintForm() {
    const [eventData, setEventData] = useState({});
    const [extractedDrivers, setExtractedDrivers] = useState({});
    const navigate = useNavigate();
    
    async function GetEvent() {
        try {
          const EventID = sessionStorage.getItem('Event');
          const res = await axios.get(`http://localhost:9000/eventInfo/${EventID}`, { withCredentials: true });
          const data = res.data.eventData;
          setEventData(data);
    
          const drivers = {};
          for (const key in data) {
            if (key.toLowerCase().includes('driver')) {
              drivers[key] = data[key];
            }
          }
          setExtractedDrivers(drivers);
        } catch (error) {
          console.error("Error fetching event data:", error);
        }
    }
    
    useEffect(() => {
    GetEvent();
    }, []);
    const [driver, setDriver] = useState(extractedDrivers.Driver1)
    const [bestLap,setBestLap] = useState()
    const [kart,setKart] = useState()
    const [error, setError] = useState(null);

    const BestLapHandler = (e)=>{
        setBestLap(e.target.value)
    }
    const KartHandler = (e)=>{
        setKart(e.target.value)
    }
    const DriverHandler = (e)=>{
        console.log(driver)
        setDriver(e.target.value)
        console.log(driver)
    }
    const CreateStint = async(e)=>{
        e.preventDefault();
        try{
            const EventID = sessionStorage.getItem('Event');
            console.log(driver)
            const StintData = {gokart: kart, driver: driver, fastestLap: bestLap}
            if(!StintData.driver){
                StintData.driver = extractedDrivers.Driver1
            }
        
            const res = await axios.post(`http://localhost:9000/stint/${EventID}`, StintData, { withCredentials: true });
        
            if (res.status === 201) {
                navigate('/edit');
            } else {
                setError(res.data.message);
            }
        }
        catch{
            setError('Failed to create stint. Please try again. Make sure you write proper data!');
        }
        
    }
    return (
        
        <form onSubmit={CreateStint} className="StintForm">
            <div className="error-message">{error}</div>
            <select onChange={DriverHandler} defaultValue={extractedDrivers.Driver1} type="select" className="LogInput-select no-border">
            {Object.keys(extractedDrivers).map((key) => (
                <option key={key} value={extractedDrivers[key]}>
                    {extractedDrivers[key]}
                </option>
            ))}
            </select>
            <div className="inputs">
                <input className="InputStints LogInputSelect  no-border" onChange={BestLapHandler}  placeholder="Best Lap"></input>
                <input className="InputStints LogInputSelect  no-border" onChange={KartHandler} type="number" placeholder="Kart"></input>
            </div>
            <button className="button-stints no-border-but " type="submit">Save stint</button>
        </form>
    );
  }
  
export default StintForm;