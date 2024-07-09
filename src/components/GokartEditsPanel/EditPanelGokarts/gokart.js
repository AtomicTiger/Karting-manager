import styled from "styled-components";
import "./editPanelGokart.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";



function GokartItem(props) {
    const navigate = useNavigate()
    const [edit,setEdit] = useState(false)
    const [statusClass, setStatusClass] = useState(props.data.Status)
    const [kartNumber, setKartNumber] = useState(props.data.Number)
    

    const Background = styled.div`
        display:flex;
        flex-direction: row;
        justify-content:space-evenly;
        width: 40%;
        height: 86px;
        padding: 10px;

        background: #525252;
        border-radius: 10px;
        margin-bottom:20px;
        box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
        

    `

    const EditPanel = styled.div`
        display:none;
        flex-direction:column;
        padding-top:20px;
        position: absolute;
        width: 20vw;
        height: 50vh;
        top:20%;
        left: 30%;
        background: rgb(27, 27, 27);
        border-radius: 10px;
        align-self:center;
        box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
        @media screen and ( max-width: 900px){
            width: 40%;
        }@media screen and ( max-width: 600px){
            width: 50%;
            font-size:2em;
        }

    `

    const Edit = ()=>{
        setEdit(!edit)
    }
    const [newNumber, setNewNumber] = useState(props.data.Number)
    const [newStatus, setNewStatus] = useState(props.data.Status);

    const numberChange = (e)=>{
        setNewNumber(e.target.value)
    }
    const statusChange = (e)=>{
        setNewStatus(e.target.value)
    }
    const update = async()=>{
        
        
        try {
            let updateData = {}
            console.log(newStatus)
            if(newStatus === null){
                 updateData = { Number: newNumber, Status: "Fast", FastestLap: props.data.FastestLap };
            }else{
                 updateData = { Number: newNumber, Status: newStatus, FastestLap: props.data.FastestLap };
            }
            
            const res = await axios.post(`http://localhost:9000/gokartUpdate/${props.data._id}`, updateData, { withCredentials: true });
            console.log('Updated:', res.data);
            navigate("/edit")
        } catch (error) {
            console.error('Error updating gokart:', error.response ? error.response.data : error.message);
        }
    }
    return (
        <Background>
                <h3>{props.data.Number}</h3>
                <h3 className={statusClass}>{props.data.Status}</h3>
                <button className="GokartEditButton no-border-but" onClick={Edit}>edit</button>
                <EditPanel style={{display: edit ? "flex" : "none"}}>
                    <div className="EditGokartPanelHeader">
                        <svg onClick={Edit} width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_156_2)">
                                <path d="M39.5966 32.0013L63.367 8.23238C64.2109 7.38831 64.2109 6.0224 63.367 5.17861L58.8241 0.634054C58.4195 0.229726 57.8705 0.0020752 57.2974 0.0020752C56.7242 0.0020752 56.1751 0.229726 55.7705 0.634054L32 24.4048L8.22958 0.634054C7.82497 0.229726 7.27592 0.0020752 6.70269 0.0020752C6.1296 0.0020752 5.58041 0.229726 5.17594 0.634054L0.633055 5.17861C-0.211018 6.0224 -0.211018 7.38831 0.633055 8.23238L24.4035 32.0014L0.635416 55.7676C-0.20824 56.6117 -0.20824 57.9776 0.635416 58.8214L5.17858 63.3659C5.58291 63.7703 6.1321 63.9979 6.70533 63.9979C7.27855 63.9979 7.82761 63.7703 8.23236 63.3659L31.9999 39.598L55.7676 63.3659C56.1722 63.7703 56.7212 63.9979 57.2945 63.9979C57.8678 63.9979 58.4169 63.7703 58.8212 63.3659L63.3644 58.8214C64.208 57.9776 64.208 56.6117 63.3644 55.7676L39.5966 32.0013Z" fill="white" stroke="white" stroke-width="0.138896"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_156_2">
                                    <rect width="64" height="64" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <h4> Edit Gokart: {props.data.Number}</h4>

                    </div>
                    <div className="EditGokartForm">
                        <input className="GokartUpdate input no-border-but" onChange={numberChange} type="Number" placeholder={props.data.Number}/>
                        <h4 className="GokartUpdate" >{props.data.FastestLap}</h4>
                        <select className="GokartUpdate LogInput-select no-border" onChange={statusChange} defaultValue={props.data.Status}>
                            <option value="Fast">Fast</option>
                            <option value="Mid">Mid</option>
                            <option value="Slow">Slow</option>
                        </select>
                        <button className="GokartUpdate button-stints no-border-but" onClick={update}>Update</button>
                    </div>

                </EditPanel>
        </Background>
    );
  }
  
export default GokartItem;