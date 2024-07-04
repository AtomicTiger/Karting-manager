import styled from "styled-components";
import TablePage from "./table/table";
import EditPanel from "./editPanel/editPanel";
import { useState } from "react";
import GokartList from "./Gokarts/GokratList";
import "./editPage.css"

function EditPage(props) {
  const [raceId, setRaceId] = useState()

    return (
      <div className="loginPage">  
          <EditPanel/>
          <TablePage/>
          <GokartList/>
      </div>
    );
  }
  
export default EditPage;