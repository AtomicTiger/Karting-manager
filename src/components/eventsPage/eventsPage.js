import styled from "styled-components";
import EventsList from "./Events/eventsList";
import { Link } from "react-router-dom";
import './eventPage.css'
function EventsPage() {
    const Events = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #525252;
      align-self: center;
      height: 80vh;
      width: 50%;
      text-align: center;
    `
    const Button = styled.button`
    width: 50%;
    height: 6vh;
    background: #393C43;
    box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-family: 'Assistant';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 63px;
    margin-top: 2.5vh;
    margin-bottom: 4vh;
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
    const Title = styled.p`
      margin-block-start 0;
      margin-block-end: 0;
      margin-top: 3vh;
      font-family: 'Assistant';
      font-style: normal;
      font-weight: 700;
      font-size: 50px;
      line-height: 84px;

      color: #FFFFFF;
    `
    return (
      <div className="Body">
        <Events>
          <Title>Events History</Title>
          <EventsList/>
          <Button className="button no-border-but">
                  <Link to="/create">Add new</Link>
          </Button>
        </Events> 
      </div>
    );
  }
  
export default EventsPage;