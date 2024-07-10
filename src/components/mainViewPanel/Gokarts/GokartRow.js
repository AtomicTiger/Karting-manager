import styled from "styled-components";

function GokartsRow(props) {
    const Background = styled.tr`
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-evenly;
            background-color: #3d3d3d;
            border-radius: 7px;
            margin-top: 10px;
            font-size: 2em;

    `
    console.log(props.data)

    return (
      <Background>
            <td className={props.data.Status} style={{ fontSize: "inherit" }}>{props.data.Number}</td>
            <td className={props.data.Status} style={{ fontSize: "inherit" }}>{props.data.Status === null ? "Unset" : props.data.Status}</td>
            <td className={props.data.Status} style={{ fontSize: "inherit" }}>{props.data.FastestLap === null ? "Unset" : props.data.FastestLap}</td>
      </Background>
      
    );
  }
  
export default GokartsRow;