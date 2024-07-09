import "./table.css"
import { useEffect, useState } from "react";
import axios from "axios";

function TablePage(props) {
  const [stints, setStints] = useState([]);
  const [bestLap, setBestLap] = useState(""); 

  async function GetStints() {
    try {
      const res = await axios.get(`http://localhost:9000/StintsInfo/${props.eventID}`, { withCredentials: true });
      const stintsData = res.data.StintsData;

      let currentBestLap = null;

      const mergedDataPromises = stintsData.map(async (stint) => {
        const gokartRes = await axios.get(`http://localhost:9000/GetGokartSpecifiedInfo/${stint.GokartID}`, { withCredentials: true });
        const gokartData = gokartRes.data.GokartsData;

        const formattedBestLap = parseFloat(stint.BestLap.replace(",", "."));

        if (currentBestLap === null || formattedBestLap < currentBestLap) {
          currentBestLap = formattedBestLap;
        }

        return {
          driver: stint.Driver,
          kart: {
            number: gokartData.Number,
            status: gokartData.Status || "unknown" 
          },
          bestLap: stint.BestLap.replace(",", "."), 
          pit: stint.Pit
        };
      });

      const mergedData = await Promise.all(mergedDataPromises);
      setStints(mergedData);

      if (currentBestLap !== null) {
        setBestLap(currentBestLap.toFixed(3)); 
      }
    } catch (error) {
      console.error('Error fetching stints or go-kart data:', error);
    }
  }

  useEffect(() => {
    GetStints();
  }, []);
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
                {stints.map((stint, index) => (
                    <div className="row-table" key={index}>
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