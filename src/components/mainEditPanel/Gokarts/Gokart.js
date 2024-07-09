import styled from "styled-components";
import "./GokartList.css"
function GokartItem(props) {

    const Gokart = styled.div`
        display: flex;
        width:42px;
        height: 42px;
        background-color: rgb(27, 27, 27); 
        color: white;
        box-shadow: 10px 0px 2px rgba(0, 0, 0, 0.25);
        justify-content:center;
        border-radius:10px;
        margin:10px
        
    `
    
    return (
        <Gokart>
            <h4 className={ props.dataGokarts.Status === null ? "deafult" : props.dataGokarts.Status }>{props.dataGokarts.Number}</h4>
        </Gokart>
    );
  }
  
export default GokartItem;

// 50/32