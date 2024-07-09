import styled from "styled-components";
import "./editPanelGokart.css";
import { useNavigate } from 'react-router-dom';
import GokartItem from "./gokart";
import axios from "axios";
import { useEffect, useState } from "react";

function EditGokartsPanel() {
    const navigate = useNavigate();
    const [gokartsData, setGokartsData] = useState()
    const GetGokarts = async()=>{
        try{
            
            const res = await axios.get(`http://localhost:9000/gokartInfo/${sessionStorage.getItem("Event")}`, { withCredentials: true });
            setGokartsData(res.data.GokartsData);
            
        }
        catch{
            console.log("error sth went wrong")
        }
    }

    useEffect(() => {
        
        GetGokarts();

      }, []);
    const Background = styled.div`
      background-color: rgb(27, 27, 27);
      display: flex;
      height: 90%;
      width: 50%;
      flex-direction:column;
      color:white;
      justify-content: center;
      text-align:center;
      box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      align-self:center;
      @media screen and ( max-width: 900px){
        width: 80%;
      }
    `
    const Header = styled.div`
        width: 95%;
        display:flex;
        flex-direction:row;
        justify-content: center;
    `
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowComponent(true);
      }, 1000); 
  
      return () => clearTimeout(timer);
    }, []); 
    const GoBack = ()=>{
        navigate("/edit")
    }
    return (
      <Background>
        {showComponent ? (
          <>
            <Header>
                <svg onClick={GoBack} className="svg-back" width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_134_2)">
                <path d="M62.6301 52.52C62.0807 52.52 61.5769 52.2057 61.3609 51.6899C61.2026 51.3157 57.244 42.4364 42.4436 40.6778C39.3606 40.3035 35.6683 40.1116 31.1843 40.078V51.1453C31.1843 51.6563 30.9084 52.1194 30.4549 52.3641C30.0039 52.5992 29.4641 52.5656 29.0442 52.2849L0.609387 33.1444C0.225521 32.8877 0 32.4559 0 32.0024C0 31.5442 0.225521 31.1267 0.609387 30.858L29.0562 11.7151C29.4761 11.4248 30.0111 11.4056 30.4669 11.6455C30.9228 11.8903 31.1939 12.3533 31.1939 12.8499V23.1495C37.3789 23.9556 64 28.7396 64 51.1573C64 51.8075 63.5418 52.3761 62.8988 52.5056C62.81 52.52 62.7165 52.52 62.6301 52.52Z" fill="white" stroke="white" stroke-width="2.39916"/>
                </g>
                <defs>
                <clipPath id="clip0_134_2">
                <rect width="64" height="64" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <h2 className="gokartEditTtile">Kart edit mode</h2>
            </Header>
            <div className="GokartsList">

              {gokartsData.map((gokart, index) => (
                  <GokartItem key={index} data={gokart} />
              ))}
            </div>
          </>
        ) : (
          <p>Loading...</p> 
        )}
      </Background>
    );
  };
  
export default EditGokartsPanel;