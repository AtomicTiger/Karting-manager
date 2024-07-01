import styled from "styled-components";
import './event.css'
import moment from 'moment';

function EventItem(props){

    const Stuff = styled.div`
        display:felx;
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
    const formattedDate = moment(props.raceData.Date).format('YYYY-MM-DD')
    return (
        <Stuff>
            {props.raceData.map((race, index) => (
                <div key={index} className="names">
                    <div className="race_name">{race.Name}</div>
                    <div className="race_date">{formattedDate}</div>
                    <div className="Buttons">
                        <Button className="button no-border-but">View</Button>
                        <Button className="button no-border-but" >Edit</Button>
                    </div>
                </div>
            ))}    
        </Stuff>
        
    );
  }
  
export default EventItem;



