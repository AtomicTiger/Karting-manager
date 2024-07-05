import styled from "styled-components";
import EventItem from "./Eventlist/EventItem";
import { useEffect, useState } from "react";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

function EventsList() {
    const [EventData, setEventData] = useState([])
    
    async function  GetEvents (){
        const decodedPayload = jwtDecode(sessionStorage.getItem('token'));
        const res = await axios.get('http://localhost:9000/events/'+decodedPayload.userId, { withCredentials: true });
        console.log(res.data.Events)
        setEventData(res.data.Events)
        
    }

    useEffect(() => {
        
        GetEvents()
        
    }, []);

    const EventList = styled.div`
        display:flex;
        flex-direction: column;
        width: 91%;
        height: 73vh;
        slef-align: center;
        background: #3E3D3D;
        box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.4);
        border-radius: 5px;
        margin-left: 4.5%;
        margin-top: 0;

    `
    const EventHeader = styled.div`
        display:flex;
        flex-direction: row;
        width: 78%;
        height: 7.5vh;
        justify-content: space-between;
        font-family: 'Assistant';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 47px;
        margin-left: 12%;
        color: #FFFFFF;
    `
    const EventHeaderText = styled.div`
        margin-top: 2vh;

    `

    return (
        <EventList>
            <EventHeader>
                <EventHeaderText>Name</EventHeaderText>
                <EventHeaderText>Date</EventHeaderText>
                <EventHeaderText>Actions</EventHeaderText>
            </EventHeader>
            <EventItem raceData={EventData}/>
        </EventList>  
      
    );
  }
  
export default EventsList;



