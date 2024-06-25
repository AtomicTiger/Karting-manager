import styled from "styled-components";
import TablePage from "./table/table";
import EditPanel from "./editPanel/editPanel";
import { useState } from "react";
import GokartList from "./Gokarts/GokratList";

function EditPage(props) {
  const [raceId, setRaceId] = useState()
  const LoginPage = styled.div`
    background-color: #3E3D3D;
    display: flex;
    height: 100vh;
  `
    return (
      <LoginPage>
          <TablePage/>
          <EditPanel/>
          <GokartList/>
      </LoginPage>
    );
  }
  
export default EditPage;