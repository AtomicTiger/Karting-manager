import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GokartsRow from "./GokartRow";

function GokartsList() {
    const navigate = useNavigate();
    const Background = styled.div`
        width:50%;
        border-radius: 10px;
        height:60vh;
        background-color: rgb(27,27,27);
        color:white;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-self:center;
        margin-top:30px;
        box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
        @media screen and (max-width: 650px){
            width:80%;
        }

    `
    const StyledTbody = styled.tbody`
        display: block;
        margin-top:10px;
        max-height: 50vh;
        overflow-y: auto;
        width: 100%;
        @media screen and (max-width: 650px){
            max-height: 53vh;
        }
    `;

    const Row = styled.tr`
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;
        background-color: #3d3d3d;
        border-radius: 7px;
        margin-top: 10px;
        font-size: 2em;

    `
    const [gokartsData, setGokartsData] = useState([])
    async function GetGokartsData (){
        try{
            const result = await axios.get(`http://localhost:9000/gokartInfo/${sessionStorage.getItem("Event")}`)

            const sortedData = result.data.GokartsData.sort((a, b) => a.Number - b.Number);

            setGokartsData(sortedData)
            
        }
        catch{
            console.log("sth went wrong")
        }
    }

    useEffect(()=>{
        GetGokartsData()
    },[])

    return (
      <Background>
        <table className="ViewTabel">
            <thead className="ViewTabelHedaer">
                <th>Number</th>
                <th>Status</th>
                <th>FastestLap</th>
            </thead>
            <StyledTbody>
                {gokartsData.map((gokart, index) => (
                    <Row key={index}>
                        <td className={gokart.Status} style={{ fontSize: "inherit" }}>{gokart.Number}</td>
                        <td className={gokart.Status} style={{ fontSize: "inherit" }}>{gokart.Status === null ? "Unset" : gokart.Status}</td>
                        <td className={gokart.Status} style={{ fontSize: "inherit" }}>{gokart.FastestLap === null ? "Unset" : gokart.FastestLap }</td>
                    </Row>
                ))}
            </StyledTbody>
        </table>
      </Background>
      
    );
  }
  
export default GokartsList;