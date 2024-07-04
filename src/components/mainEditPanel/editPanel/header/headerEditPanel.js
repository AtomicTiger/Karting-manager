import { useState } from 'react';
import './HeaderEditPanel.css';
import { useNavigate } from 'react-router-dom';


function HeaderEditPanel() {
    const navigate = useNavigate();
    const [arrowClass,setArrowClass] = useState("arrow-left-menu")
    const ChangeStatus = ()=>{
        if(arrowClass === "arrow-left-menu"){
            setArrowClass("arrow-right-menu")
        }else{
            setArrowClass("arrow-left-menu")
        }
    }
    const GoBack = ()=>{
        navigate('/main')
    }
    return (
        <div className="headerContainer" onClick={GoBack}>
            <svg className='svg-icon' width="50" height="50" viewBox="0 5 90 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M84.5732 36.7687L71.6911 23.8865V9.00544C71.6911 6.31473 69.5106 4.13413 66.816 4.13413C64.1275 4.13413 61.9471 6.31473 61.9471 9.00544V14.1427L52.3553 4.55056C47.613 -0.189148 39.3678 -0.180741 34.6363 4.55913L2.42608 36.7687C0.52464 38.6739 0.52464 41.7566 2.42608 43.6589C4.32838 45.5636 7.41715 45.5636 9.31876 43.6589L41.5259 11.4486C42.5751 10.4048 44.4244 10.4048 45.4681 11.4455L77.6807 43.6589C78.6359 44.6114 79.8812 45.0851 81.1262 45.0851C82.3738 45.0851 83.6211 44.6109 84.5734 43.6589C86.4755 41.7568 86.4755 38.6741 84.5732 36.7687Z" fill="white" stroke="white" stroke-width="0.171579"/>
                <path d="M45.192 20.6955C44.2562 19.7602 42.741 19.7602 41.808 20.6955L13.4758 49.0193C13.0285 49.4664 12.7749 50.0769 12.7749 50.7139V71.3723C12.7749 76.2199 16.7054 80.1503 21.5529 80.1503H35.5802V58.4266H51.4168V80.1503H65.4442C70.2915 80.1503 74.222 76.2199 74.222 71.3724V50.7139C74.222 50.0769 73.9707 49.4664 73.5211 49.0193L45.192 20.6955Z" fill="white" stroke="white" stroke-width="0.171579"/>
            </svg>
            <h1 className='headerTitle'>Home</h1>
        </div>
    );
  }
  
export default HeaderEditPanel;