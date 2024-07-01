import styled from "styled-components"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

import "./form.css"
function EventForm() {
    const navigate = useNavigate();
    const [eventName, setEventName] = new useState("")
    const [drivers, setDrivers] = new useState([{name:"Driver 1"},{name:"Driver 2"}])
    const [driversAmount,setDriversAmount] = new useState(2)
    const [formPage,setFormPage] = new useState(1)
    const [gokarts,setGokarts] = new useState([])
    const [date,setDate] = new useState()
    const [inputString, setInputString] = useState('');
    const MAX_DRIVERS = 5;

    const addNewDriver = () => {

        if (driversAmount >= MAX_DRIVERS) {
            alert("The maximum number of drivers has been reached.");
            return; 
        }
        const newAmount = driversAmount + 1;
        console.log('Driver ' + newAmount);

        setDrivers((prevDrivers) => [
            ...prevDrivers,
            {name: 'Driver ' + newAmount }
        ]);

        setDriversAmount(newAmount);
    }
    
    const deleteDriver = () => {
        if (driversAmount <= 0) {
            alert("No drivers to remove.");
            return;
        }

        const newAmount = driversAmount - 1;

        setDrivers((prevDrivers) => prevDrivers.slice(0, -1));
        setDriversAmount(newAmount);
    }
    const Button = styled.button`
        width: 48%;
        height: 4vh;
        background: #393C43;
        box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        font-family: 'Assistant';
        font-style: normal;
        font-weight: 700;
        font-size: 1.88em;
        line-height: 63px;
        margin-top: 2vh;
        padding-bottom: 60px;
        align-self: center;
        color: #FFFFFF;
        cursor:pointer;
        user-select:none;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s; /* Safari */
    // `

    const onChangeNameHandler = (e)=>{
        setEventName(e.target.value)
    }

    const next = ()=>{
        setFormPage(2)
    }
    const back = ()=>{
        setFormPage(1)
    }
    const getGokarts = (e)=>{
        const value = e.target.value;
        setInputString(value);

        
        const array = value
        .split(',')            
        .map(Number)           
        .filter(n => !isNaN(n)); 
        setGokarts(array);
        console.log(gokarts)
    }
    const getDriversInfo = (e) => {
        const updatedDrivers = [...drivers]; 
        updatedDrivers[e.target.id] = {name : e.target.value}
        setDrivers(updatedDrivers)
    }
    const getDate = (e)=>{
        setDate(e.target.value)
    }
    const Create = async (e) =>{
        e.preventDefault();
        try {
            let names= []
            drivers.forEach(driver => {
                names.push(driver.name);
            });
            const decodedPayload = jwtDecode(sessionStorage.getItem('token'));
            const formData = { name: eventName,user_id: decodedPayload.userId, driver1: names[0], driver2: names[1] ,driver3: names[2],driver4: names[3],driver5: names[4], date: date};
            const res = await axios.post('http://localhost:9000/eventCreation', formData, { withCredentials: true });
            if(!res){
                console.log("Event creation failed")
            }
            const event_id = res.data.event_id
            const resGokarts = await axios.post('http://localhost:9000/gokartsCreation/'+ event_id, {gokarts: gokarts} )

            if(!resGokarts){
                console.log("Gokarts creation failed")
            }
            if(res.status === 201 && resGokarts.status === 201){
                console.log("Event created")
                navigate('/main')
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    }

    const shouldHideAdd = driversAmount > 4 || formPage !== 1;
    const shouldHideDel = driversAmount < 3  || formPage !== 1;
    return (
        <form className="EventForm" onSubmit={Create}>
            <div className="inputs" style={{ display: formPage != 1 ? 'none' : 'flex' }}>
                <input key="eventname" className="no-border input" onChange={onChangeNameHandler} placeholder="Event name"  value={eventName}/>
                {drivers.map((driver, index) => (
                    <div className="Drivers">
                        <input key={index} className="no-border input" onChange={getDriversInfo}  id={index} placeholder={driver.name}/>
                    </div>
                ))}    
            </div>
            <div className="gokarts" style={{ display: formPage != 2 ? 'none' : 'flex' }}>
                <input  key="gokarts" onChange={getGokarts} className="no-border input" placeholder="Add gokarts number: 1,2,3,4"/>

                <input  key="date" type="date" onChange={getDate}  className="no-border input" placeholder="Add gokarts number: 1,2,3,4"/>
            </div>
            <Button className="button no-border-but" onClick={addNewDriver}  style={{  display: shouldHideAdd ? 'none' : 'flex'}}>Add driver</Button>
            <Button className="button no-border-but" onClick={deleteDriver} style={{ display: shouldHideDel ? 'none' : 'flex' }} >Delete Last driver</Button>
            <Button onClick={next} className="button no-border-but" style={{ display: formPage !== 1 ? 'none' : 'flex' }}> Next</Button>
            <Button onClick={back} className="button no-border-but" style={{ display: formPage !== 2 ? 'none' : 'flex' }}> Back</Button>
            <Button className="button no-border-but" type="submit" style={{ display: formPage !== 2 ? 'none' : 'flex' }}> Create</Button>
            <Button className="button no-border-but" style={{ display: formPage !== 1 ? 'none' : 'flex' }}>
                <Link to="/main">Cancle</Link>
            </Button>
        </form>
        
    );
  }
export default EventForm;


