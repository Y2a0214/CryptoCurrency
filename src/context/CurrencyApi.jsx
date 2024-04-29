import { createContext, useEffect, useState } from "react"

export const cryptoContext = createContext()

const CurrencyApi = ({children}) => {
    const [coinData, setCoinData] = useState(null)
    const [TrendingcoinData, setTrendingCoinData] = useState(null)

    useEffect(() => {
        
     const CoinList = async () => {
        let coinList = await  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
         let data = await coinList.json()
         setCoinData(data)
     }
     CoinList()

     const TrendingCoin = async () => {
        let coinList = await  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        let data = await coinList.json()
        let filtercoin = data.slice(0, 4)
        setTrendingCoinData(filtercoin)
     }
     TrendingCoin()

    },[])

    const SingleCoins = async (id) => {
        let coinList = await  fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
         let data = await coinList.json()
            return data
    }

    const HistoryofCoins = async (id, days, currency) => {
        let coinList = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`)
        let data = await coinList.json()
        return data
    }

    const SearchCoinapi = async (query) => {
        let CoinList = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`)
        let data = await CoinList.json()
        return data
     }
     console.log(SearchCoinapi("bitcoin"))
    const contextValue = {coinData, TrendingcoinData, SingleCoins, HistoryofCoins, SearchCoinapi}
    return(
        <cryptoContext.Provider value={contextValue}>
            {children}
        </cryptoContext.Provider>
    )
}

export default CurrencyApi