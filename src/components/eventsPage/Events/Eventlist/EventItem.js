import styled from "styled-components";
import './event.css'
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function EventItem(props){

    const navigate = useNavigate();
    
    const Stuff = styled.div`
        display: flex;
        flex-direction: column;
        width: 95%;
        
    `
    const Button = styled.button`
        width: 5vw;
        height: 4vh;
        background: #393C43;
        box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        font-family: 'Assistant';
        font-style: normal;
        font-weight: 700;
        font-size: 1.2em;
        line-height: 31px;
        margin-bottom: 2vh;
        margin-left: 10px;
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
    
    const GoIntoView = (e)=>{
        sessionStorage.setItem("Event", e.target.id)
        navigate('/view');
    }
    const GoIntoEdit = (e)=>{
        sessionStorage.setItem("Event", e.target.id)
        navigate('/edit');
    }

    const Delete = async (e) => {
        const EventID = e.currentTarget.id
        console.log(EventID)
        await axios.post(`http://localhost:9000/eventDel/${EventID}`, { withCredentials: true });
        console.log("deleted")
        navigate('/main')
          
    }
    return (
        <Stuff>
            {props.raceData.map((race, index) => (
                <div key={index} className="names">
                    <div className="race_name">{race.Name}</div>
                    <div className="race_date">{moment(race.Date).format('YYYY-MM-DD')}</div>
                    <div className="Buttons">
                        <Button className="button no-border-but" id={race._id} onClick={GoIntoView}>View</Button>
                        <Button className="button no-border-but" id={race._id} onClick={GoIntoEdit}>Edit</Button>
                        <div className="trash" id={race._id} onClick={Delete}>
                            <svg  width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.6666 32L37.3333 42.6667M37.3333 32L26.6666 42.6667M48 16L45.8642 48.0344C45.6773 50.84 45.5837 52.2429 44.9778 53.3067C44.4442 54.2432 43.6394 54.996 42.6696 55.4661C41.568 56 40.1618 56 37.3498 56H26.65C23.838 56 22.432 56 21.3303 55.4661C20.3604 54.996 19.5557 54.2432 19.0221 53.3067C18.4161 52.2429 18.3226 50.84 18.1356 48.0344L16 16M10.6666 16H53.3333M42.6666 16L41.945 13.8349C41.2456 11.7367 40.8957 10.6876 40.2472 9.91195C39.6744 9.22701 38.9389 8.69685 38.108 8.37008C37.1669 8 36.0613 8 33.8496 8H30.1504C27.9386 8 26.833 8 25.892 8.37008C25.0611 8.69685 24.3255 9.22701 23.7527 9.91195C23.1041 10.6876 22.7544 11.7367 22.055 13.8349L21.3333 16" stroke="white" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            ))}    
        </Stuff>
        
    );
  }
  
export default EventItem;



