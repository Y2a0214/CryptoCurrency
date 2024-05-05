import { useContext, useEffect, useState } from "react";
import { cryptoContext } from "../../context/CurrencyApi";
import { useParams } from "react-router-dom";
import { chartDays } from "../../context/data";
import { currencyList } from "../../context/data";

import {
  CategoryScale,
  Chart,
  LineElement,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import Potfolio from "../PotfolioBuySell/Potfolio";
import BarChart from "../BarChart/BarChart";
import SearchCoin from "../SearchCoin/SearchCoin";
import LineChart from "../LineChart/LineChart";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);
//** this is a single coin page **/

const Coin = () => {
  const { id } = useParams();
  const { SingleCoins, HistoryofCoins, coinData } = useContext(cryptoContext);

  const [days, SetDays] = useState(360);
  const [currency, Setcurrency] = useState("usd");
  const [Coin, SetCoin] = useState(null);
  const [CoinHistory, SetCoinHistory] = useState([]);
  const [selectedChart, setSelectedChart] = useState(null);

  useEffect(() => {
    const fetchSingleCoinData = async () => {
      const singleCoinData = await SingleCoins(id);
      SetCoin(singleCoinData);
    };

    fetchSingleCoinData();

    const fetchSingleCoinHistory = async () => {
      const History = await HistoryofCoins(id, days, currency);
      SetCoinHistory(History.prices);
    };

    fetchSingleCoinHistory();
  }, [id, days, currency]);



  return (
    <>
      <div className="flex justify-evenly lg:flex-row flex-col bg-gray-100 p-5 flex-grow items-stretch pt-24 -z-0">
        <div className="lg:w-8/12 w-full flex flex-col">
          <div>
            <SearchCoin />
          </div>
          <div className="bg-white p-1 rounded-md w-full">
            {!CoinHistory ? (
              <h2>Not able to fetch data</h2>
            ) : (
              <>
                <div className="flex-col my-1">
                  <div className="flex justify-between items-center w-full my-3">
                    <div>
                      {chartDays.map((values) => {
                        return (
                          <button
                            className="lg:px-2 py-1 lg:mx-2 ml-2 px-1 lg:text-base text-sm border focus:bg-yellow-400 border-yellow-400 rounded-md hover:text-regal-blue"
                            onClick={() => SetDays(values.value)}
                          >
                            {values.label}
                          </button>
                        );
                      })}
                    </div>
                    <div className="flex">
                      <form className="" action="">
                        <div>
                          <select
                            onChange={(e) => setSelectedChart(e.target.value)}
                            className="outline-none px-2 py-1 mx-2 border border-yellow-400 rounded-md"
                            name="Chart"
                            id="Chart"
                          >
                            <option value="LineChart">Line Chart</option>
                            <option value="BarChart">Bar Chart Ver</option>
                            <option>Bar Chart Hor</option>
                          </select>
                        </div>
                      </form>
                      <div>
                        <select
                          onChange={(e) =>
                            Setcurrency(e.target.value)
                          }
                          className="outline-none px-2 py-1 mx-2 border border-yellow-400 rounded-md"
                          name="currency"
                          id="currency"
                        >
                          {currencyList.map((value) => {
                            return (
                              <option value={value.currency}>
                                {value.currency}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div>
                    {selectedChart === "BarChart" ? (
                      <BarChart currency={currency} days={days}/>
                    ) : (
                      <LineChart  currency={currency} days={days}/>
                    )}
                  </div>
                </div>
                {/* Line */}
              </>
            )}
          </div>
          <div>
            <Potfolio />
          </div>
        </div>

        <div className=" lg:w-1/4 w-full bg-white p-1 rounded-md">
          <div>
            <h2 className="text-xl font-semibold mx-6 py-3">
              Cryptocurrency By Market Cap
            </h2>
            <div className="divide-y divide-yellow-200">
              {!coinData ? (
                <h2>looging</h2>
              ) : (
                coinData.map((value) => {
                  let chngsymbol = value.symbol;
                  let symbol = chngsymbol.toUpperCase();
                  let priceColor =
                    value.market_cap_change_percentage_24h > 0
                      ? "bg-green-500"
                      : "bg-red-500";
                  const limit_decimal =
                    value.market_cap_change_percentage_24h.toFixed(3);
                  return (
                    <>
                      <div className="mx-6 ">
                        <div className="flex items-center justify-between p-1 my-2">
                          <div>
                            <p className="font-semibold">
                              {value.name}
                              <small className="text-gray-400 ml-1">
                                {symbol}
                              </small>
                            </p>
                            <small className="">
                              M.cap ${value.market_cap}
                            </small>
                          </div>
                          <div>
                            <p
                              className={`${priceColor} text-xs px-2 py-1 rounded-full`}
                            >
                              {limit_decimal}%
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coin;
