import styled from "styled-components"
import { Link } from "react-router-dom";
import { useState } from "react";
import "./form.css"
function EventForm() {
    const [drivers, setDrivers] = new useState([{"name":"Driver 1"},{"name":"Driver 2"}])
    const [driversAmount,setDriversAmount] = new useState(2)
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
            { "name": 'Driver ' + newAmount }
        ]);

        setDriversAmount(newAmount);
    }
    const LoginForm = styled.div`
        background: #525252;
        box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        width: 600px;
        height: 65vh;
    `
    const LoginInput = styled.input`
        font-family: 'Assistant';
        font-style: normal;
        font-weight: 700;
        font-size: 1.88em;
        line-height: 39px;
        color: #FFFFFF;
        background: #484848;
        box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        width: 67%;
        height: 6vh;
        margin-top: 2vh;
        align-self: center;
        padding-left: 15px;
        transition-duration: 0.5s;
    `
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
    `
    return (
      <LoginForm>
        <div className="inputs">
            {drivers.map((driver, index) => (
                <LoginInput className="no-border" placeholder={driver.name}/>
            ))}    
        </div>
        <div className="gokarts">
            <LoginInput className="no-border" placeholder="Add gokarts number: 1,2,3,4"/>
        </div>
        <Button className="button no-border-but" onClick={addNewDriver}>Add driver</Button>
        <Button className="button no-border-but" >Next</Button>
        <Button className="button no-border-but">
            <Link to="/main">Cancle</Link>
        </Button>
      </LoginForm> 
    );
  }
export default EventForm;


