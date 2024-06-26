import styled from "styled-components"
import './registerForm.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';


function RegisterForm() {
    const Button = styled.button`
        width: 48%;
        height: 6vh;
        background: #393C43;
        box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        font-family: 'Assistant';
        font-style: normal;
        font-weight: 700;
        font-size: 1.88em;
        line-height: 63px;
        margin-top: 5vh;
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
    async function Register(){
        try{
            const response = await axios.post('http://localhost:9000/register',{
                login:login,
                password:pass,
            });
            console.log(response);
        }catch (error) {
            console.error(error);
        }
    }

    const [login,setLogin] = useState("")
    const [pass,setPass] = useState("")
    const onLoginChange = (e)=>{
        setLogin(e.target.value)
    }
    const onPassChange = (e)=>{
        setPass(e.target.value)
    }
    return (
      <div className="InputContainer">
            <input className="no-border LogInput" onChange={onLoginChange} placeholder="Login"/>
            <input className="no-border LogInput" onChange={onPassChange} type="password"  placeholder="Password"/>  
            <Button className="button no-border-but" onClick={Register}>Create Team</Button>
            <Button className="button no-border-but">
                <Link to="/">Go Back</Link>
            </Button>
      </div> 
    );
  }
export default RegisterForm;


