import styled from "styled-components";
import EventForm from "./eventForms/firstForm";

function EventCreation() {
  const EventPage = styled.div`
  background-color: #3E3D3D;
  display: flex;
  justify-content: center;
  height: 100vh;
`
return (
  <EventPage>
    <EventForm/>
  </EventPage> 
);
  }
  
export default EventCreation;