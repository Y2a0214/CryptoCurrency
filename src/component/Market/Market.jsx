import { useContext } from "react";
import { cryptoContext } from "../../context/CurrencyApi";
import { Link } from "react-router-dom";

const Market = () => {
  const { coinData } = useContext(cryptoContext);

  if (!coinData) {
    return (
      <div></div>
    );
  }

  return (
    <>
    {/* list of coin  */}
      <div className="px-5 py-20">
        <div>
          <h2 className="font-bold lg:text-5xl text-2xl mb-7">Market Update</h2>
        </div>
        <table className="table-auto w-full">
          <thead className="border-b-2 border-black">
            <tr>
              <th className="p-2 text-start text-xl text-gray-500">Name</th>
              <th className=" p-2 text-start text-xl text-gray-500">
                Last Price
              </th>
              <th className="lg:table-cell hidden p-2 text-start text-xl text-gray-500 w-10%">
                24H %
              </th>
              <th className="lg:table-cell hidden p-2 text-start text-xl text-gray-500">
                Market Cap
              </th>
              <th className="lg:table-cell hidden p-2 text-start text-xl text-gray-500 w-10%">
                last 7 Days
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-400">
            
              {
                coinData.map((value) => {
                  let chngsymbol = value.symbol
                  let symbol = chngsymbol.toUpperCase()
                  let priceColor = value.market_cap_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'
                  return (
                    <>
                    <tr>
                    <td className="p-2 font-bold text-lg flex items-center h-24">
                      <img src={value.image} alt="" width={20} />
                      <p className="ml-1 text-xl">{value.name} <small className="text-gray-400 ml-1">{symbol}</small></p>
                    </td>
                    <td className="p-2 text-xl font-bold">{value.current_price}$</td>
                    <td className={`lg:table-cell hidden p-2 ${priceColor}  text-base font-xl `}>
                      {value.market_cap_change_percentage_24h}%
                    </td>
                    <td className="lg:table-cell hidden p-2 text-xl font-bold">{value.market_cap}</td>
                    <td className="lg:table-cell hidden p-2 text-xl">27392</td>
                    <td className="text-center">
                      <Link to={`/coin/${value.id}`}>
                      <button className="font-semibold hover:bg-yellow-400 hover:border-yellow-400 border border-gray-400 px-3 py-1 rounded-full">
                        Trade
                      </button>
                      </Link>
                    </td>
                    </tr>
                    </>
                  )
                })
              }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Market;
