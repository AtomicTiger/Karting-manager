import styled from "styled-components";
import "./GokartList.css"
import { useState } from "react";
function GokartList() {
    const [arrowClass,setArrowClass] = useState("arrow-right")
    const [gokartPage, setGokartPage] = useState("GokartPageShow")
    const [gokarts, setGokarts] = useState("gokartslist show")
    const changeGokarts = ()=>{
        if(arrowClass == "arrow-right"){
            setArrowClass("arrow-left")
            setGokartPage("GokartPageHide")
            setGokarts("gokartslist hide")
        }else{
            setArrowClass("arrow-right")
            setGokartPage("GokartPageShow")
            setGokarts("gokartslist show")
        }
        
    }
    const styles = [
        { display: arrowClass === "arrow-right" ? 'flex' : 'none' },
        { width: arrowClass === "arrow-right" ? '34%' : '80px' }
    ];
    return (
        <div className={gokartPage}>
            <div className="left">
                <h1 className="left_name">GOKARTS</h1>
                <div className="arrow" onClick={changeGokarts}>
                    <div class={arrowClass}></div>
                </div>
            </div>
            
            <div className={gokarts} >
                <div className="gokart">
                    
                </div>
            </div>
        </div>
    );
  }
  
export default GokartList;