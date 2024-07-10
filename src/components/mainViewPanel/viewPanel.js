import styled from "styled-components";
import Header from "./Header/Header";
import "./viewPanel.css"
import GokartsList from "./Gokarts/Gokarts";

function ViewPage() {

    const Background = styled.div`
      width:100%;
      height:auto;
      background-color: #3E3D3D;
      color:white;
      display:flex;
      flex-direction:column;

    `
    return (
      <Background>
          <Header/>
          <GokartsList/>
      </Background>
      
    );
  }
  
export default ViewPage;