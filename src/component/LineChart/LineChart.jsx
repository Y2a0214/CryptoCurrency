import { useState, useContext, useEffect } from "react";
import { cryptoContext } from "../../context/CurrencyApi";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import "./LineChart.css"



import {
    CategoryScale,
    Chart,
    BarElement,
    LinearScale,
    Legend,
    Tooltip,
  } from "chart.js";

  Chart.register(
    CategoryScale,
    BarElement,
    LinearScale ,
    Legend,
    Tooltip
  );

const LineChart = (props) => {
        const { id } = useParams();
        const { SingleCoins, HistoryofCoins, coinData } = useContext(cryptoContext);
      
        const [Coin, SetCoin] = useState(null);
        const [CoinHistory, SetCoinHistory] = useState([]);
      
      
        // const top_coin = coinData ? coinData.slice(0, 8) : [];
      
        const label = `Price (past ${props.days} Days) in ${props.currency}`;

        useEffect(() => {
            const fetchSingleCoinHistory = async () => {
                const History = await HistoryofCoins(id, props.days, props.currency);
                SetCoinHistory(History.prices);
              };
              fetchSingleCoinHistory();        
        },[id, props.days, props.currency])
return (
    <div>
                <Line
                
                  className="ChartWeight"
                    data={{
                      labels: CoinHistory.map((coin) => {
                        let date = new Date(coin[0]);
                        let time =
                          date.getHours() > 12
                            ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                            : `${date.getHours()}:${date.getMinutes()} AM`;
                        return props.days === 1 ? time : date.toLocaleDateString();
                      }),
                      datasets: [
                        {
                          data: CoinHistory.map((coin) => coin[1]),
                          label: label,
                          borderColor: "#EEBC1D",
                        },
                      ],
                    }}
                    options={{
                      plugins: {
                        legend: true,
                      },
                      elements: {
                        point: {
                          radius: 1,
                        },
                      },
                    }}
                />
    </div>
)

}

export default LineChart