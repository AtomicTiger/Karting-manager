import "./table.css"
import { useState } from "react";
function TablePage() {
    const stintsData = [
      {
        driver: "qwe qwe",
        kart: {number: 1, status: "fast"},
        bestLap: "21.231", 
        pit: 1
      },{
        driver: "qwe qwe",
        kart: {number: 2, status: "fast"},
        bestLap: "21.521", 
        pit: 2
      },{
        driver: "qwe qwe",
        kart: {number: 3, status: "mid"},
        bestLap: "22.231", 
        pit: 3
      },{
        driver: "qwe qwe",
        kart: {number: 4, status: "slow"},
        bestLap: "25.231", 
        pit: 4
      }
      ]
    const [bestLap,setBestLap] = useState("21.231")
    return (
        <div className="tabelPage">
            <table>
              <div className="header-tr">
                  <th className="driver-th">
                    Driver 
                  </th>
                  <th className="kart-th">
                    Kart
                  </th>
                  <th className="bestLap-th">
                    BestLap
                  </th>
                  <th className="pits">
                    Pit
                  </th>
              </div>
              
              <div className="body-stints">
                {stintsData.map((stint, index) => (
                    <div className="row-table">
                      <td className="driver-td">{stint.driver}</td>
                      <td className={`kart-td ${stint.kart.status}`}>{stint.kart.number}</td>
                      <td className={`bestLap-td ${bestLap === stint.bestLap ? "fastest" : ""}`}>{stint.bestLap}</td>
                      <td className="pit-td">{stint.pit}</td>
                    </div>
                  ))}
              </div>
            </table>
        </div>
    );
  }
  
export default TablePage;