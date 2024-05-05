import {
    Chart,
    ArcElement,
    Legend,
    Tooltip,
  } from "chart.js";
import { useState , useRef} from "react";

  import { Pie } from "react-chartjs-2";

  Chart.register(
    ArcElement,
    Legend,
    Tooltip
  );

const Potfolio = () => {
    const [currency, setCurrency] = useState("BTC")
    const [getcurrency, setgetCurrency] = useState("")
    const [ CurrencyValue, setCurrencyValue] = useState("")
    const [ CoinBuy, setCoinBuy] = useState(false)

    const SelectCurrencySell= (e) => {
        setCurrency(e.target.value)
    }

    const SelectCurrencyBuy = (e) => {
        setgetCurrency(e.target.value)
    }

    const CurrecyAssest = (e) => {
        setCurrencyValue(e.target.value)
    }

    //const memoizedCurrencyValue = useMemo(() => CurrencyValue, [CurrencyValue]);
    const CurrencyValueInput = useRef('')

    const OnExchange = (e) => {
        e.preventDefault() //Form onSubmit have default behavior to relode page after submit btn clicked to prevent we use preventDefault() 
        setCoinBuy(true)
        CurrencyValueInput.current.value = ""
    }
    return(
        <>
            {/* Potfolio and buy sell coin */}
            <div className="flex justify-between lg:flex-row flex-col">
                <div className="left flex flex-col items-center bg-white rounded-md p-2 my-2 lg:w-1/3 w-full">
                    <h2 className="text-xl font-semibold p-2">Portfolio's $1000</h2>
                    <div className="lg:w-72  w-64">
                        <Pie style={{width: 248}}
                            data={{
                                labels: ["BTC", "ETH", "USDT"],
                                datasets: [{
                                    data: [120, 39.8, 10],
                                    backgroundColor: ['#EEBC1D', '#454A75', '#009393']
                                }]
                            }}
                            options={{
                                // plugins:{
                                //     legend:{
                                //         display: true,
                                //         position: 'right'
                                //     }
                                // }
                            }}

                        />
                    </div>
                    <div>
                        <h2 className="font-medium text-base p-2">Total Volume 1000$</h2>
                    </div>
                </div>
                <div className="right bg-white p-3 mt-2 rounded-md lg:w-3/5 w-full flex items-center justify-center">
                        <div className="flex justify-evenly w-full">
                            <form className="w-3/5" action="" onSubmit={OnExchange}>
                                <div className="mb-3">
                                    <label className=" block mb-1 text-sm font-medium " htmlFor="coin">Sell:</label>
                                    <select onChange={SelectCurrencySell} className="p-2 focus:ring-yellow-400 focus:border-yellow-500 outline-yellow-400 w-full border border-gray-300 bg-gray-50 rounded-lg" name="coin" id="coin">
                                        <option value="BTC">Bitcoin</option>
                                        {/* <option value="ETH">Ethereum</option>
                                        <option value="USDT">Tether</option> */}
                                    </select>
                                </div>
                                <div>
                                    <label className=" block mb-1 text-sm font-medium " htmlFor="coin">Buy:</label>
                                    <select onChange={SelectCurrencyBuy} className="p-2 focus:ring-yellow-400 focus:border-yellow-500 outline-yellow-400 w-full border border-gray-300 bg-gray-50 rounded-lg" name="coin" id="coin">
                                        <option selected>Choose Coin</option>
                                        {/* <option value="BTC">Bitcoin</option> */}
                                        <option value="ETH">Ethereum</option>
                                        <option value="USDT">Tether</option>
                                </select>
                                </div>  
                                <input className="px-3 py-2 border border-yellow-400 hover:bg-yellow-400 rounded-lg mt-3" type="submit" value="Exchange"/>                              
                            </form>
                            <div className="w-1/5">
                                <form action="">
                                    <label className="block mb-1 text-sm font-medium" htmlFor="excurreny">Enter Value</label>
                                    <input onChange={CurrecyAssest} ref={CurrencyValueInput} id="excurreny" type="number"  className="p-2 w-full rounded-lg outline-none border border-gray-300" placeholder={`Avl: 0.00${currency}`}/>
                                </form>
                                <div>
                                  {
                                    CoinBuy ? (<p className="text-green-400 font-medium text-base mt-7">{CurrencyValue} <span>{getcurrency}</span></p>) : (<p></p>)
                                  }  
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Potfolio