import styled from "styled-components";
import "./GokartList.css"
import { useEffect, useState } from "react";
import GokartItem from "./Gokart";
import axios from "axios";
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
    const [gokartsData, setGokartsData] = useState([])
    async function GetGokartsData (){
        try{
            const result = await axios.get(`http://localhost:9000/gokartInfo/${sessionStorage.getItem("Event")}`)

            const sortedData = result.data.GokartsData.sort((a, b) => a.Number - b.Number);

            setGokartsData(sortedData)
            
        }
        catch{
            console.log("sth went wrong")
        }
    }

    useEffect(()=>{
        GetGokartsData()
    },[])
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
                {gokartsData.map((gokart, index) => (
                    <GokartItem dataGokarts={gokart} key={index} />
                ))}
            </div>
            </div>
        </div>
    );
  }
  
export default GokartList;