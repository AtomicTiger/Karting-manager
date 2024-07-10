import styled from "styled-components";
import Header from "./Header/Header";
import "./viewPanel.css"

function ViewPage() {

    const Background = styled.div`
      width:100%;
      height:100vh;
      background-color: #3E3D3D;
      color:white;
      display:flex;
      justify-content:center;

    `
    return (
      <Background>
          <Header/>
      </Background>
      
    );
  }
  
export default ViewPage;