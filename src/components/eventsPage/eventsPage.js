import styled from "styled-components";
import EventsList from "./Events/eventsList";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './eventPage.css'


function EventsPage() {
    const navigate = useNavigate();
    const Events = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: rgb(27, 27, 27);
      align-self: center;
      height: 80vh;
      width: 961px;
      text-align: center;
      border-radius:10px;
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
    font-size: 1.88em;
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
    const token = sessionStorage.getItem('token');
    if(!token){
      navigate('/login')
    }
    const logout = ()=>{
      sessionStorage.clear();
      if(!sessionStorage.getItem('token')){
        navigate('/')
      }
    }
    return (
      <div className="Body">
        <Events>
          <div className="header">
            <Title className="eventHistory">Events History</Title>
            <div className="svg" onClick={logout}>
              <svg width="40" height="70" viewBox="0 0 60 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9919 0V4.23375H1.43469V88.7056H7.55588V10.3549H17.9919V96L58.5653 88.7056V76.7694V7.30964L17.9919 0ZM25.4559 51.2901C24.0921 51.2901 22.9863 49.8514 22.9863 48.0766C22.9863 46.302 24.0921 44.8633 25.4559 44.8633C26.8198 44.8633 27.9256 46.302 27.9256 48.0766C27.9256 49.8514 26.8198 51.2901 25.4559 51.2901Z" fill="white" stroke="white"/>
              </svg>
            </div>
          </div>

          <EventsList/>
          <Button className="button no-border-but">
                  <Link to="/create">Add new</Link>
          </Button>
        </Events> 
      </div>
    );
  }
  
export default EventsPage;