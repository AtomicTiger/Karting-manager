import styled from "styled-components";
import './event.css'

function EventItem(props){
    const List = styled.div`
        display:flex;
        flex-direction: column;
    `
    const EventItems = styled.div`
        display:flex;
        flex-direction: row;
        width: 92%;
        height: 7.5vh;
        justify-content: space-between;
        font-family: 'Assistant';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 47px;
        margin-left: 8%;
        margin-right: 0;
        color: #FFFFFF;
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
        font-size: 24px;
        line-height: 31px;
        margin-bottom: 1vh;
        margin-left: 10px;
        margin-right: 30px;
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
        <List>
            {props.raceData.map((race, index) => (
                <EventItems key={index} className="race-item">
                    <div className="Title">{race.Title}</div>
                    <div className="Dates">{race.Date}</div>
                    <div className="actions">
                        <Button>View</Button>
                        <Button>Edit</Button>
                    </div>
                </EventItems>
            ))}    
        </List>
        
    );
  }
  
export default EventItem;



