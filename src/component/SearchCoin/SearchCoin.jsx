import { useContext, useEffect, useState } from "react";
import searchicon from "../../Asset/img/search icoin.png";
import { cryptoContext } from "../../context/CurrencyApi";
import { Link } from "react-router-dom";


const SearchCoin = () => {
  const { SearchCoinapi } = useContext(cryptoContext);
  const [CoinName, setCoinName] = useState("");
  const [CoinList, setCoinList] = useState([]);
  const [ShowDropdown, setShowDropdown] = useState(false)

  const fetchCoinList = async () => {
    const CoinData = await SearchCoinapi(CoinName);
    setCoinList(CoinData);
    setShowDropdown(true)
  };

  const handleClick = () => {
    setShowDropdown(false); // Close dropdown when a search result is clicked
  };

  let filteredCoin = null;
  if (CoinList && CoinList.coins && CoinList.coins.length > 0) {
    filteredCoin = CoinList.coins.slice(0, 1);
  }
  console.log(filteredCoin);

  return (
    <>
      <div>
        <div className="mb-2 flex">
          <div className="w-full relative">
            <input
              onChange={(e) => setCoinName(e.target.value)}
              className="w-full py-2 px-5 outline-none rounded-l-md"
              type="search"
              placeholder="Search Coin"
            />
            { filteredCoin && ShowDropdown && (
              <Link to={`/coin/${filteredCoin[0].id}`} onClick={handleClick}>
              <div className="absolute bg-yellow-100 py-2 px-5 rounded-md top-10 w-full">
                <div className="flex items-center">
                  <div className="font-medium">{filteredCoin[0].name}</div>
                  <div className="text-xs ml-2 text-gray-500 font-medium">{filteredCoin[0].symbol}</div>
                </div>  
              </div>
              </Link>
            )
            }
          </div>
          <div className="ml-1">
            <button
              onClick={fetchCoinList}
              className="flex items-center bg-white py-2 px-5 rounded-r-md"
            >
              <img src={searchicon} alt="search" width={17} />{" "}
              <span className="">Search</span>
            </button>
          </div>

          {/* <div className="">
            {filteredCoin && (
              <div>
                <div>{filteredCoin[0].name}</div>
                <div>{filteredCoin[0].symbol}</div>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SearchCoin;
