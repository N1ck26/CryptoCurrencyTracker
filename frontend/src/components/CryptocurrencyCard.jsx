import { Card } from "antd"


function CryptocurrencyCard(props) {
  const { currency } = props
  const cur_id = currency.id
  const cur_symbol = currency.symbol
  const cur_name = currency.name
  const cur_price = currency.quote.USD.price.toFixed(2)
  const cur_last_updated = currency.last_updated.slice(0, -5).replace('T', ' ')
  const cur_market_cap = currency.quote.USD.market_cap.toFixed(2)
  const cur_volume_24h = currency.quote.USD.volume_24h.toFixed(2)
  const cur_total_supply = currency.total_supply


    return (
      <div>
        <Card
      title={
        <div className="flex items-center gap-3">
            <img src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${cur_id}.png`}/>
            <span>{cur_name} ({cur_symbol})</span>
        </div>
      }
      style={{width: 450, }}
    >
      <p>Текущая цена: {cur_price}$</p>
      <p>Рыночная капитализация: {cur_market_cap}$</p>
      <p>Объем торгов за 24 часа: {cur_volume_24h}$</p>
      <p>Общее количество: {cur_total_supply}</p>
      <p>Последнее обновление: {cur_last_updated}</p>
    
    </Card>

      </div>
    )
  }
  
  export default CryptocurrencyCard
  