import { useContext } from "react";
import { cryptoContext } from "../../context/CurrencyApi";

const TrendingCoins = () => {
  const { TrendingcoinData } = useContext(cryptoContext);

  if (!TrendingcoinData) {
    return (
      <div class="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
        <span class="sr-only">Loading...</span>
        <div class="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div class="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div class="h-8 w-8 bg-black rounded-full animate-bounce"></div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-regal-blue rounded-3xl m-5">
        <div className="py-1 px-8">
          <div className="flex flex-col items-center">
            <div className="flex w-full">
              <h3 className="font-semibold text-base bg-yellow-400 my-2 mx-4 px-4 py-1 rounded-full text-regal-blue">
                Crypto
              </h3>
              <h3 className="font-semibold text-base  my-2 mx-4 px-4 py-1 rounded-full text-white">
                Neft
              </h3>
            </div>
            <hr style={{ width: "98%" }} className=" text-white" />
          </div>
          <div className="flex sm:flex flex-wrap w-full justify-evenly">
            {TrendingcoinData.map((value) => {
              let chngsymbol = value.symbol;
              let symbol = chngsymbol.toUpperCase();

              let number = value.market_cap_change_percentage_24h
              console.log(number)
              let reduceNumber = number.toFixed(2)
              //console.log(reduceNumber)

              let priceColor =
                value.market_cap_change_percentage_24h > 0
                  ? "bg-green-500"
                  : "bg-red-500";

              return (
                <>
                  <div className="cursor-pointer  m-3 bg-white px-10 py-8 rounded-lg flex flex-col items-center hover:drop-shadow-2xl">
                    <div className="flex items-center">
                      <img src={value.image} alt="" width={25} />
                      <p className="font-semibold text-lg ml-2">
                        {value.name}
                        <span className="text-gray-400 ml-1 text-base">
                          {" "}
                          {symbol}
                        </span>
                      </p>
                    </div>
                    <h4 className="font-bold text-2xl mt-3">
                      USD {value.current_price}
                    </h4>
                    <div className="flex mt-3">
                      <p className="font-semibold text-base text-gray-400 truncate">
                        {value.market_cap}
                      </p>
                      <p
                        className={`ml-3 text-xs text-white rounded-full px-2 py-1 ${priceColor}`}
                      >
                        {reduceNumber}%
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingCoins;
