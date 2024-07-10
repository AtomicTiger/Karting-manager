import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Header() {
    const navigate = useNavigate();
    const Background = styled.div`
      width:95%;
      border-radius: 0px 0px 10px 10px;
      height:10vh;
      background-color: rgb(27,27,27);
      color:white;
      display:flex;
      flex-direction:row;
      justify-content:center;
      align-self:center;
      box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);

    `
    const goBack = ()=>{
        navigate("/main")
    }
    return (
      <Background>
        <svg onClick={goBack} className="SvgViewPanel" width="34" height="34" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_164_2)">
                <path d="M62.9258 29.1339L53.2263 19.4344V8.22986C53.2263 6.20392 51.5845 4.56206 49.5556 4.56206C47.5314 4.56206 45.8896 6.20392 45.8896 8.22986V12.0979L38.6676 4.8756C35.0969 1.30688 28.8887 1.31321 25.3262 4.88206L1.07382 29.1339C-0.357857 30.5685 -0.357857 32.8896 1.07382 34.3219C2.50613 35.756 4.8318 35.756 6.2636 34.3219L30.5137 10.0694C31.3037 9.28353 32.6961 9.28353 33.4819 10.0671L57.7361 34.3219C58.4553 35.039 59.393 35.3957 60.3304 35.3957C61.2697 35.3957 62.2089 35.0387 62.9259 34.3219C64.3581 32.8897 64.3581 30.5686 62.9258 29.1339Z" fill="white" stroke="white" stroke-width="0.129189"/>
                <path d="M33.2741 17.0318C32.5695 16.3275 31.4286 16.3275 30.7261 17.0318L9.39359 38.3579C9.05679 38.6946 8.86585 39.1542 8.86585 39.6339V55.1884C8.86585 58.8384 11.8253 61.7977 15.4752 61.7977H26.0369V45.4411H37.9609V61.7977H48.5228C52.1725 61.7977 55.1319 58.8384 55.1319 55.1885V39.6339C55.1319 39.1542 54.9427 38.6946 54.6042 38.3579L33.2741 17.0318Z" fill="white" stroke="white" stroke-width="0.129189"/>
            </g>
            <defs>
                <clipPath id="clip0_164_2">
                 <rect width="64" height="64" fill="white"/>
                </clipPath>
            </defs>
        </svg>
        <h1  className="TitleViewPanel">View Panel</h1>
      </Background>
      
    );
  }
  
export default Header;