import React, { useEffect, useState } from 'react';
import { Menu, Spin } from 'antd';
import CryptocurrencyCard from './components/CryptocurrencyCard';
import axios from 'axios';

const getItem = (label, key, icon, children, type) => ({
  key,
  icon,
  children,
  label,
  type,
});




const App = () => { 

  const [currencies, setCurrencies] = useState([])
  const [currencyId, setCurrencyId] = useState(1)
  const [currencyData, setCurrencyData] = useState(null)



  const FecthCurrencies = () => {
    axios.get('http://212.193.27.122/api/cryptocurrencies').then(responce_data => {
      const CurrenciesResponce = responce_data.data
      const menuItems = [
        getItem('Список криптовалют', 'g1', null, 
          CurrenciesResponce.map(i => {
            return {label: i.name, key: i.id}
          }), 'group'
        )
      ]
      setCurrencies(menuItems)
    })
  }

  const FecthCurrency = () => {
    axios.get(`http://127.0.0.1:8000/cryptocurrencies/${currencyId}`).then(responce_data => {
      setCurrencyData(responce_data.data)
    })
  }

  
  useEffect(() => {
    FecthCurrencies()
  }, []);
  
  
  useEffect(() =>{
    setCurrencyData(null)
    FecthCurrency()
  }, [currencyId]); 
  

  const onClick = (e) => {
    setCurrencyId(e.key)
  };

  return (
    <div className='flex'>

    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={currencies}
      className='h-screen overflow-scroll'
    />
    <div className='mx-auto my-auto'>
      {currencyData ? <CryptocurrencyCard currency={currencyData}/> : <Spin size='large'/>}
    </div>
    

    </div>
  );
};
export default App;