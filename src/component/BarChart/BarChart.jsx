import { useState, useContext, useEffect } from "react";
import { cryptoContext } from "../../context/CurrencyApi";
import { useParams } from "react-router-dom";
import "./BarChart.css"


import {
    CategoryScale,
    Chart,
    BarElement,
    LinearScale,
    Legend,
    Tooltip,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";

  Chart.register(
    CategoryScale,
    BarElement,
    LinearScale ,
    Legend,
    Tooltip
  );

//** this is barchart component **//

const BarChart = (props) => {
    const { id } = useParams();
    const { SingleCoins, HistoryofCoins, coinData } = useContext(cryptoContext);

    const [Coin, SetCoin] = useState(null);
    const [CoinHistory, SetCoinHistory] = useState([]);


    const allmonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];


    useEffect(() => {
        const fetchSingleCoinHistory = async () => {
            const History = await HistoryofCoins(id, props.days, props.currency);
            SetCoinHistory(History.prices);
          };
          fetchSingleCoinHistory();        
    },[id, props.days, props.currency])

    return(
        <>
            <div>
                <Bar 
                    className="ChartWeight"
                    data={{
                        labels:[...new Set(CoinHistory.map((coin) => {
                            const date = new Date(coin[0]);
                            let month = allmonth[date.getMonth()] 
                            console.log(month, date)
                            return month
                        }))],
                        datasets:[
                            {
                                label: `Price (past ${props.days} Days) in ${props.currency}`,
                                data:  CoinHistory.map((coin) => coin[1]),
                                backgroundColor: '#EBBF31',
                                barThickness: 18
                                
                            }
                        ]
                    }}
                    options={{
                    
                    
                    }}
                />
            </div>
        </>
    )
}

export default BarChart