import styled from "styled-components";
import "./editGokarts.css";
import EditGokartsPanel from "./EditPanelGokarts/editPanelGokarts";

function EditGokarts() {

    const StintBackGround = styled.div`
      background-color: #3E3D3D;
      display: flex;
      height: 100vh;
      flex-direction:row;
      color:white;
      justify-content: center;
    `
    return (
      <StintBackGround>
          <EditGokartsPanel/>
      </StintBackGround>
    );
  }
  
export default EditGokarts;