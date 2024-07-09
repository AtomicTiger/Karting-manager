import styled from "styled-components";
import TablePage from "./table/table";
import EditPanel from "./editPanel/editPanel";
import { useState } from "react";
import GokartList from "./Gokarts/GokratList";
import "./editPage.css"

function EditPage(props) {
  const [raceId, setRaceId] = useState(sessionStorage.getItem('Event'))
  console.log(raceId)

    return (
      <div className="loginPage">  
          <EditPanel/>
          <TablePage eventID={raceId} />
          <GokartList eventID={raceId} />
      </div>
    );
  }
  
export default EditPage;