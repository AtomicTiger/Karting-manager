import styled from "styled-components";
import EventsList from "./Events/eventsList";
import { Link } from "react-router-dom";
import './eventPage.css'
function EventsPage() {
    const Events = styled.div`
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
    return (
      <div className="Body">
        <Events>
          <h1>Events History</h1>
          <EventsList/>
          <Button className="button no-border-but">
                  <Link to="/create">Add new</Link>
          </Button>
        </Events> 
      </div>
    );
  }
  
export default EventsPage;